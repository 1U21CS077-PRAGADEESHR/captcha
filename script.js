var content=document.querySelector(".content")
var btn=document.getElementById("btn")

function captchaa(){
    var result=''
    const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const character=characters.length
    length=6

    for(count=0;count<length;count=count+1){
        result+=characters.charAt(Math.floor(Math.random()*character))
    }

return result;
}

function user(){
    var result=captchaa()
    document.querySelector(".captcha").innerText=result
    return result;
}
document.addEventListener("DOMContentLoaded",()=>{
    let currentcaptcha=user();
        
btn.addEventListener("click",function(){
    var input=document.getElementById("input").value




if(currentcaptcha==input){
    alert("CAPTCHA verified successfully")
}
else{
    alert("You enetered wrong.Try again later")
}
currentcaptcha=user()
document.getElementById("input").value='';

})


})