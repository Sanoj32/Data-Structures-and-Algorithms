export default function linear_search(haystack: number[], needle: number): boolean {
    for (let i=0;i<haystack.length; ++i){
        if (haystack[i] === needle){
            return true;
        }
    }
    return false;
}
console.log(linear_search([1,2,3],1));