//https://course.acciojob.com/idle?question=41938fec-9822-4ffe-bf92-6e2e68851d35



let arr1 = [10,20]


let arr2 = [1,2,3,4,5,6,7,8,9,100,200,3000,4000]


let arr3 =[] // 1,2,3,4,5,6,7,8,9


let x = 0
let y = 0

let count = 0
while(x < arr1.length && y < arr2.length){

    if(arr1[x] > arr2[y]){
       arr3.push(arr2[y])
       y++ // y = 9
    }
    else if(arr1[x] < arr2[y]){
        arr3.push(arr1[x])
        x++ // x = 2
    }

    else{
        arr3.push(arr1[x])
        arr3.push(arr2[y])
        x++
        y++
    }
   count++
}

// loop:


for(let i = x ; i< arr1.length; i++){
    arr3.push(arr1[i])
}

for(let i = y ; i< arr2.length; i++){
    arr3.push(arr2[i])
}

console.log(arr3)