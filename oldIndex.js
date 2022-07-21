import { bubbleSort, swapInArray } from "./functions.js";

const args = process.argv.slice(2);
let funcs = new Map([["dINotes", dINotes], []]);

export function dINotes(money, arr) {

    // let money = 56467565;
    // let arr = [1, 2, 5, 10];
    console.log("money: " + money + "\n arr: " + arr);
    let noteList = new Map([]);

    bubbleSort(arr, false);
    let remaining = money;

    arr.forEach((v, i) => {
        noteList.set(v, Math.floor(remaining / v));
        remaining -= noteList.get(v) * v;
    });

    return noteList;
}
// console.log(dINotes(13453, [1, 2, 5, 10]));

console.log(funcs.get(args[0])(...args.slice(1)));