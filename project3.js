const myBtns = document.querySelectorAll('.ctrl-btn');
const result = document.querySelector('.msg');
const comppicked = document.querySelector('.compicked');
myArr = ['rock', 'paper', 'scissors']

myBtns.forEach((e)=> {
    e.addEventListener('click', ()=>{
        let compselect = myArr[(Math.floor(Math.random() * (2 - 0 + 1) + 0))];
        console.log('Comp select');
        console.log(compselect);
        comppicked.textContent = compselect.toUpperCase();
        let playerselect =e.textContent.toLowerCase();
        if (compselect === playerselect) {
            result.textContent = 'Draw';
            console.log('draw');
        } else if(playerselect==='rock'&&compselect==='scissors'|| playerselect==='paper'&&compselect==='rock' || playerselect==='scissors'&&compselect==='paper'){
            result.textContent = 'You Won';
            console.log('win');
        }
        else{
            result.textContent = 'You Lost';
            console.log('lose');
        }
    
    })
})
function reset(){
    window.location.reload();
}

