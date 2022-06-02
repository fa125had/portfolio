const logoBox = document.querySelector('.logoBox');

const logoInteract = () => {

    document.getElementById('logo__firstLetter').style.transform = 'rotate(360deg)';
    document.getElementById('logo__secondPart').style.display = 'block'; 
    document.querySelector('.logoBox').style.width = '6rem';
}
const logoReset = () => {
    document.getElementById('logo__firstLetter').style.transform = 'rotate(0)';
    document.getElementById('logo__secondPart').style.display = 'none';
    document.querySelector('.logoBox').style.width = '2.6rem';
}

logoBox.onmouseenter = logoInteract;
logoBox.onmouseleave = logoReset;

