

let mat = [
    [1,2,3],  // 02 = 2
    [4,5,6],   // 11 = 2
    [7,8,9]    // 20 = 2
]



// function leftDiagonal1(mat){

//     for(let i = 0; i<=mat.length-1; i++){

//         for(let j = 0; j<=mat[i].length-1; j++){
//             if(i == j){
//               console.log(mat[i][j])
//             }
//         }
//     }

// }

// leftDiagonal1(mat)


// function leftDiagonal2(mat){

//     for(let i = 0; i<=mat.length-1; i++){
//         console.log(mat[i][i])
//     }

// }

// leftDiagonal2(mat)



function rightDiagonal1(mat){
    for(let i = 0; i<=mat.length-1; i++){

        for(let j = 0; j<=mat[i].length-1; j++){
            if(i+j == mat.length-1){
              console.log(mat[i][j])
            }
        }
    }
    
}

// rightDiagonal1(mat)


function leftDiagonal2(mat){

    for(let i = 0; i<=mat.length-1; i++){
        console.log(mat[i])
        console.log(mat[i][mat.length-1 - i])
    }

}

leftDiagonal2(mat)