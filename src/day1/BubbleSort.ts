export default function bubble_sort(arr: number[]): number[] {
    for(let i=0; i < arr.length; ++i){
        for (let j=0; j < arr.length - 1 -i;++j){
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
let output =  bubble_sort([10,4,1,6,5,4,2]);
console.log(output)