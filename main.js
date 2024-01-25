const btnclick = document.querySelector('#btnclick')
const colors = ["green", "red", "rgb(136,22,136)","rgb(22,102,136)"]

const color = document.querySelector('.color')


btnclick.addEventListener('click', function(e){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors [randomNumber];
    color.textContent = colors[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}