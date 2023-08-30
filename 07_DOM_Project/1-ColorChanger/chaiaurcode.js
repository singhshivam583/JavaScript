const body=document.querySelector('body')
const buttons=document.querySelectorAll('.button')

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(){
        // if(button.id==='grey'){
        //     body.style.backgroundColor='grey'
        // }
        // else if(button.id==='white'){
        //     body.style.backgroundColor='white'
        // }
        // else if(button.id==='blue'){
        //     body.style.backgroundColor='blue'
        // }
        // else if(button.id==='yellow'){
        //     body.style.backgroundColor='yellow'
        // }
        switch(button.id) {
            case "grey":
                body.style.backgroundColor='grey'  
                break;
            case "white":
                body.style.backgroundColor='white'
                break;
            case "blue":
                body.style.backgroundColor='blue'
                break;
            case "yellow":
                body.style.backgroundColor='yellow'
                break;
        }
    })
})