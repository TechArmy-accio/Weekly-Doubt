// https://course.acciojob.com/idle?question=dacd4b1a-94b7-494b-af54-357959638b95



function goodStrings(s, A, n) {
    let set = new Set(s) // {a,b,c}
    let count = 0

    for(let t of A){ // t = "cabef"
          let flag = 0
          for(let i = 0; i<=t.length-1; i++){
               if(set.has(t[i])==false){
                   break
               }
               flag++  // 3
               
          }
          if(flag == t.length){
              count++
          }
    }

    console.log(count)
      
}





goodStrings("abc" ,[ 'ab', 'abd', 'cacb', 'cabef' ], 4)