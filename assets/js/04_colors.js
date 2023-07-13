const divs = document.getElementsByClassName('box');

// click method for change the first four divs to black on click method.
for (let i = 0; i < divs.length - 2; ++i) {
    divs[i].addEventListener('click', () => divs[i].style.backgroundColor = 'black');
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'a') {
        divs[divs.length - 2].style.backgroundColor = 'purple';
    } else if (e.key === 's') {
        divs[divs.length - 2].style.backgroundColor = 'gray';
    } else if (e.key === 'd') {
        divs[divs.length - 2].style.backgroundColor = 'pink';
    } else if (e.key === 'q') {
        divs[divs.length - 1].style.display = 'block';
        divs[divs.length - 1].style.backgroundColor = 'skyblue';
    } else if (e.key === 'w') {
        divs[divs.length - 1].style.display = 'block';
        divs[divs.length - 1].style.backgroundColor = 'orange';
    } else if (e.key === 'e') {
        divs[divs.length - 1].style.display = 'block';
        divs[divs.length - 1].style.backgroundColor = 'brown';
    }
});
