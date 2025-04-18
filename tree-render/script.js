import { tokenize } from './parser/tokenizer.js';
import { parse } from './parser/parser.js';
import { renderTree } from './parser/treeRenderer.js';

document.getElementById('render-btn').addEventListener('click', () => {
    const input = document.getElementById('input').value.trim(); // Убираем лишние пробелы
    if (!input) {
        document.getElementById('output').textContent = 'Ошибка: Ввод пустой!';
        return;
    }

    try {
        const tree = parse(tokenize(input));
        const output = renderTree(tree);
        document.getElementById('output').textContent = output;
    } catch (e) {
        document.getElementById('output').textContent = 'Ошибка: ' + e.message;
    }
});
