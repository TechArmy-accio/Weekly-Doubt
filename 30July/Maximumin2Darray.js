// https://course.acciojob.com/idle?question=36680076-d278-4c86-8863-6e428a9f0ad6



// function findMax(m) {
//      let max = -Infinity

//      for(let i = 0; i<=m.length-1; i++){
//         //  console.log(m[i])
//         let big = Math.max(...m[i])
//         // console.log(big)
//         if(big > max){
//             max = big
//         }
//      }
//      console.log(max)
// }

function findMax(m) {
    let max = -Infinity

    for(let i = 0; i<=m.length-1; i++){
        for(let j = 0; j<=m[i].length-1; j++){
            if(m[i][j] > max){
                max = m[i][j]
            }
        }
    }
    console.log(max)
}


let m = [
    [3, 7, 5],
    [2, 8, 4],
    [1, 6, 9]
 ]

findMax(m) // 9



// let arr = [-10,-20,-30,-40,-50]
// max = arr[0]


// let arr = [10,20,30,40,50]

// let max = Math.max(...arr)

// console.log(max) // 50