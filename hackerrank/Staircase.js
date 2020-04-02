// Complete the staircase function below.
//     #
//    ##
//   ###
//  ####
function staircase(n) {
    for (let index = 1; index < n+1; index++) {
        console.log(" ".repeat(n-index) + "#".repeat(index));
    }
}
staircase(4);