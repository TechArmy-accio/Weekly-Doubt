// https://course.acciojob.com/idle?question=ceab1561-febd-488e-9db7-a53053b6086f

function getStrings(arr) {

    // let s1 = "qwertyuiop" // 1
    // let set1 = new Set(s1)
    // let s2 = "asdfghjkl" // 2
    // let set2 = new Set(s2)
    // let s3 = "zxcvbnm" // 3
    // let set3 = new Set(s3)

    let s1 = "qwertyuiop"
    let m = new Map()
    for(let t of  s1){
        m.set(t,1)
    }
    let s2 = "asdfghjkl"
    for(let t of  s2){
        m.set(t,2)
    }
    let s3 = "zxcvbnm"
    for(let t of  s3){
        m.set(t,3)
    }

    console.log(m)

    for(let t of arr){
          // t = "glad"
          let v = m.get(t[0])
          let count = 1
          for(let i = 1; i<=t.length-1; i++){
               if(m.get(t[i]) != v){
                   break
               }
               count++
          }

          if(count == t.length){
              console.log(t)
          }


    }


}




getStrings(["horse","peter","jass"])