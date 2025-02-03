

let isLoggedIn = true;
let isProSubscriber = false;


if(!isLoggedIn){
    console.log("Please login first to see the data")
}else if(!isProSubscriber){
    console.log("Here is your data, consider subscribe to get access to pro features")
}else if(isProSubscriber){
    console.log('Thanks, you are a pro subscriber')
}




console.log(isLoggedIn) //false
console.log(!isLoggedIn) //true       -> 'i' -> actually it inverse 


//Note:
let proSub = 'a'    // As this is basicly truthy value but in comparison : it will not work like that
if(proSub == true){
    console.log('prosubscirber')
}


// Exercise 2
let percentage = 89

if(percentage > 100 || percentage < 0){
    console.log('Invalid percentage')
}else if(percentage >= 90){
    console.log("A Grade")
}else if(percentage >= 80){
    console.log("B Grade")
}else if(percentage >= 70){
    console.log("C Grade")
}else if(percentage >= 60){
    console.log("D Grade")
}else{
    console.log("F Grade")
}