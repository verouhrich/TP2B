//10 20 20 10 10 30 50 10 20
//10 10 10 10 20 20 20 30 50 
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let count = 0;

    ar.sort((a,b) => a - b);

    for (let i = 0; i < ar.length-1; i++) {
        if(ar[i]==ar[i + 1]){
            count++;
            // para saltar al siguiente
            i++;
        }
    }
    return count;

}

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]));
