export function hasMoreSiblings(arr, currentIndex) {
    for (let i = currentIndex + 1; i < arr.length; i++) {
        const el = arr[i];
        if (typeof el === 'number' || Array.isArray(el)) {
            return true;
        }
    }
    return false;
}
