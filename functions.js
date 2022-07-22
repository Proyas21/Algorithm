export function bubbleSort(arr, ascending = true, mut = false) {
    let array = arr;
    if (!mut) array = [...arr];

    for (let j = array.length; j >= 0; j--) {
        for (let i = array.length; i >= 0; i--) {
            if (ascending && array[i] < array[i - 1]) {
                swapInArray(array, i, i - 1);
            }
            if (!ascending && array[i] > array[i - 1]) {
                swapInArray(array, i, i - 1);
            }
        }
    }
    return array;
}

export function swapInArray(array, i_1, i_2) {     // i_n is the n index of array
    let temp = array[i_1]
    array[i_1] = array[i_2];
    array[i_2] = temp;
}

export function binarySearch(array, num) {
    let l = 0;
    let r = arr.length - 1;
    let m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);
        // console.log(l, m, r);    //debug line
        if (arr[m] == num) return m;
        if (arr[m] < num) l = m + 1;
        if (arr[m] > num) r = m - 1;
    }
    return false;
}

export function nthFibonacci(n, cn = 0, val = 0, pval = 0) {
    if (n == cn) return pval;
    // console.log(cn, val, pval);
    if (val == 0) val++;
    return nthFibonacci(n, cn + 1, val + pval, val);
}