

function d(n){
    if(n == 0){
        return
    }

    console.log(n)
    d(n-1)
    console.log(n)
    

}

d(3)