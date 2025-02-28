let n = 6;
let fact = 1
for (let index = 1; index <= n; index++) {
     fact = fact * index;  
}
     console.log(fact); 
     let i = 1;
     function factorial(number){
          let arr = Array.from(Array(number+1).keys())
          // console.log(arr.slice(1,));
          let c = arr.slice(1,).reduce((a,b)=>{
               return a*b
          }) 
          // console.log(c);
          return c
     }
     factorial(n)
     
  