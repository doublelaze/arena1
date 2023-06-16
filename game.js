const button = document.querySelector('.btn')
const input = document.querySelector('input')
let error = document.querySelector('.error')
let live = document.querySelector('.live')
let timer = 0
let failed = 0
let total = 5
live.innerHTML= `${failed}/${total}`
const layout = document.querySelector('.layout')
const overlay = document.querySelector('.overlay')

button.addEventListener('click', () => {
const rdnum = setInterval(() => {
    document.querySelector('.rdcount').innerHTML = 
    Math.floor(Math.random()*50)
    }, 100);
})