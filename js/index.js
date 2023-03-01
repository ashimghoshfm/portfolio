var tt = document.querySelector("h3");
tt.style.fontFamily='chiller'

var btt= document.querySelector('.bt123');


btt.style.color = 'white'
btt.style.backgroundColor = 'tomato'
btt.style.padding = '22px'
btt.style.fontSize = '20px'
btt.style.fontWeight = 'bold'
btt.style.borderRadius = '5px'
btt.style.fontFamily = 'cursive'


let remove = () =>{
    btt.innerHTML='Cancel Request';
    btt.style.fontFamily = 'roboto';
    btt.style.backgroundColor = "red";
    btt.removeAttribute("onclick");
}


btt.addEventListener("click",function(){
    btt.style.backgroundColor = 'blue';
    btt.style.padding = '22px';
    btt.style.fontFamily = 'roboto';
    btt.innerHTML='Add Friend';
    btt.setAttribute("onclick", "remove()")
})