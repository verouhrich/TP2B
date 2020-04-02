// 1 2 3 4 5
// 10 14

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let min = 0;
    let max = 0;

    arr.sort((a,b) => a -b);

    for (let i = 0; i < arr.length-1; i++) {
        min += arr[i]; 
        max += arr[i+1];       
    }
    console.log(`${min} ${max}`);
}

miniMaxSum([1,5,3,4,2]);
