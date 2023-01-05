
function simpleArraySum(ar) {
    
    let sumTotal = 0
    for (let i = 0; i < ar.length; i++) {
        sumTotal = ar[i] + sumTotal
    }
    return sumTotal

}

console.log(simpleArraySum([1,2,3,4,10,11])) //31
console.log(simpleArraySum([5,10,8,2])) //25