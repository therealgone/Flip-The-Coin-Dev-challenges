const button = document.querySelector('#btn-coin')
const res = document.querySelector('#result')
const img = document.querySelector('.coin-head')
const coin = document.querySelector('#coin')
button.addEventListener('click',function(){
   coin.classList.add('flip')

   setTimeout(() => {

    const result = Math.random() < 0.5 ? "Heads" : "Tails";

    res.textContent=result;

    if(result=="Heads")
    {
        img.scr="resources/heads.svg";
    }

    else{
        img.src="resources/tails.svg"
    }

    coin.classList.remove('flip')
   }, 1000);

});