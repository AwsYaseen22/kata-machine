"use strict";
exports.__esModule = true;
function qs(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    var pivotIdx = partition(arr, lo, hi);
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}
function partition(arr, lo, hi) {
    var _a;
    var pivot = arr[hi];
    var idx = lo - 1;
    for (var i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            (_a = [arr[idx], arr[i]]), (arr[i] = _a[0]), (arr[idx] = _a[1]);
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}
function quick_sort(arr) {
    qs(arr, 0, arr.length - 1);
}
exports["default"] = quick_sort;
let a = [3, 5, 2, 6, 1, 4];
console.log(quick_sort(a));
console.log(a);
