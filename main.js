const btn1 = document.querySelector('.zoom-in-btn');
const btn2 = document.querySelector('.zoom-out-btn');
const img = document.querySelector('#image');
let currentWidth = img.clientWidth;
document.addEventListener('DOMContentLoaded', function() {
    btn1.onclick = function() {
        if(currentWidth == 2500) {
            return false;
        }else {

        img.style.width = (currentWidth + 50) + 'px';
        currentWidth += 50;
        } 
    }
    btn2.onclick = function() {
        if(currentWidth == 100) {
            return false;
        }else {
            img.style.width = (currentWidth - 50) + 'px';
            currentWidth -= 50;
        }
    }
})
