import { hasMoreSiblings } from '../utils/hasMoreSiblings.js';
import { getDashesLength } from '../utils/getDashesLength.js';

export function renderTree(tree) {
    return render(tree);
}

// Вспомогательная рекурсивная функция
function render(node, prefix = '') {
    // Если текущий узел — число, просто возвращаем строку с отступом и числом
    if (typeof node === 'number') {
        return prefix + node + '\n';
    }

    let output = '';

    // Обходим все элементы текущего массива (узла дерева)
    for (let i = 0; i < node.length; i++) {
        const curr = node[i];
        const next = node[i + 1];

        const hasSibling = hasMoreSiblings(
            node,
            i + (Array.isArray(next) ? 1 : 0) /// если next — массив, сдвигаем индекс
        );

        if (typeof curr === 'number') {
            if (Array.isArray(next)) {
                // Если после числа идёт массив — это его "дети"
                const dashes = getDashesLength(curr);
                output += prefix + curr + dashes + '\n';
                // отступ для дочерних элементов
                const childPrefix = hasSibling
                    ? prefix + '|     '
                    : prefix + '      ';
                // Рекурсивно обрабатываем детей
                output += render(next, childPrefix);
                i++;
            } else {
                // Просто число без детей — печатаем его
                output += prefix + curr + '\n';
            }
        } else if (Array.isArray(curr)) {
            // Если текущий элемент сам массив (вложенность без числа)
            const childPrefix = hasSibling ? prefix + '|   ' : prefix + '    ';
            output += render(curr, childPrefix);
        }
    }

    return output;
}
