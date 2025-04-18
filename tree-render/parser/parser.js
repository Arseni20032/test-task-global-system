export function parse(tokens) {
    const token = tokens.shift();
    if (token === '(') {
        const list = [];
        while (tokens[0] !== ')') {
            list.push(parse(tokens));
        }
        tokens.shift(); // Убираем символ ')'
        return list;
    } else {
        return isNaN(token) ? token : Number(token);
    }
}