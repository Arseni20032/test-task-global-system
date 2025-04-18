export function getDashesLength(num) {
    const length = num.toString().length;
    if (length === 1) return '-----+';
    if (length === 2) return '----+';
    if (length === 3) return '---+';
    if (length === 4) return '--+';
    return '-+';
}
