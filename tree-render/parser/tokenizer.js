import {
    LETTERS_REGEXP,
    ERROR_MSG_LETTERS,
    ERROR_MSG_NUMBER_LENGTH,
    MAX_NUMBER_LENGTH,
    TOKEN_REGEX,
} from './constants.js';

export function tokenize(input) {
    const tokens = input.match(TOKEN_REGEX);

    if (!tokens) {
        throw new Error(
            'Ошибка: Входная строка не содержит допустимых токенов.'
        );
    }

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        // Запрет на буквы
        if (LETTERS_REGEXP.test(token)) {
            throw new Error(ERROR_MSG_LETTERS);
        }

        // Запрет на отрицательные числа
        if (!isNaN(token) && token.startsWith('-')) {
            throw new Error('Ошибка: Допустимы только положительные числа.');
        }

        // Запрет на слишком длинные числа
        if (!isNaN(token) && token.length > MAX_NUMBER_LENGTH) {
            throw new Error(ERROR_MSG_NUMBER_LENGTH);
        }

        // Запрет на недопустимые символы
        if (isNaN(token) && token !== '(' && token !== ')') {
            throw new Error(
                `Ошибка: Недопустимый символ "${token}". Разрешены только цифры и скобки.`
            );
        }
    }

    return tokens;
}
