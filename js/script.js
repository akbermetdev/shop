const btn = document.querySelector('')
btn.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'block'
})
const close = document.querySelector('.modal--window__close')
close.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none'
})