

// 4 => 4*3*2*1 


// 4 decre for loop until 1


// num = num * num -i'; 

// i =1 

// num = 4 * 3

// num = 12

// num = 12 *2

// 2

const factorial = (num) => {
  
    for(i = 1 ; i<num; i++){
        num = num * (num - i);
    }

    return num;
}
//console.log(`Factorial of ${num} is ${num}`);


function factorial1(num){
    for(i = 1 ; i<num; i++){
        result = result * i;
    }

    return result;
}

    const checkNums = (num1,num2)=>{
        if(num1===num2){
            return -1
        }
        
        let greaterVal = num1>num2 ? true:false;
        return greaterVal;
    }

 

    //Longest word in a String //











    function LongestWord(sen) { 
        let highestLength = 0;
        let resultString = "";
        let arr = sen.split(/\W+/);
        arr.map((word)=>{
           
            if(highestLength < word.length){
                highestLength = word.length;
               
                resultString = word;
             
            }
            return resultString;
        })
             return arr;    
        }
           
        // keep this function call here 
        LongestWord(readline());                            
        