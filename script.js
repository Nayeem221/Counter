let result=document.querySelectorAll('.result')//dom to identify h1 tag in the html same classname
 
console.log(result);

// let arr=Array.from(result)if there is a nodelist then we have to convert it to an array to run a map method 
//since i have nodelist i found it doing console so i will do it with foreach that will directly map no need to convert it to an array 

//foreach method to map 
result.forEach((item)=>{


    let i=0
 
    let fun=()=>{
    i++
    if(i==item.dataset.hello){
        clearInterval(stop)
    }
    item.innerHTML=`${i}+`
    
    }


    let stop=setInterval(()=>{
     fun()
    },1000/item.dataset.hello)



})

