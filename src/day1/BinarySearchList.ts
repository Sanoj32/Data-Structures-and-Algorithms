export default function bs_search(haystack: number[], needle: number): number {
    let low = 0;
    let high = haystack.length;
    do {
        let mid = low + Math.floor((high - low) / 2);
        let value = haystack[mid];
        if (value === needle) {
            return mid;
        } else if (value > needle) {
            high = mid;
        } else {
            low = mid + 1;
        }
    } while (low < high);
    return 0;
}

let output: number = bs_search([1, 4, 8, 29, 53], 53);
console.log(output);
