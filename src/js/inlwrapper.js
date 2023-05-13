const nameElement = document.querySelector('.name')
const nameElementInner = document.querySelector('.name-inner')
const linksElement = document.querySelector('.links')
const imageElement = document.querySelector('.image')
const sezai = document.querySelector('.sezai')
const emre = document.querySelector('.emre')
const konuk = document.querySelector('.konuk')
// let baseblack = '#20262E';
// let basepurple = '#913175';
// let basepink = '#CD5888';
// let basewhite = '#E9E8E8';

window.addEventListener('load', () => {
    setTimeout(() => {
        // nameElement.style.transform = 'translateX(0)'
    }, 150)
    // setTimeout(() => {
    //     linksElement.style.transform = 'translateX(0)'
    // }, 150)
    setTimeout(() => {
        imageElement.style.opacity = '1'
    }, 150)

    setTimeout(() => {sezai.style.opacity = '1'}, 200)
    setTimeout(() => {emre.style.opacity = '1'}, 1000)
    setTimeout(() => {konuk.style.opacity = '1'}, 1800)

})