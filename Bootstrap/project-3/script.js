const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

const makeAcount=document.querySelector('.hover-btn')
const formAcount=document.querySelector('.show-agency')
const xAcount=document.querySelector('.position-x')

const contactUs=document.querySelector('.contact-btn')
const sumbitContact=document.querySelector('.btn-contact')


togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});

let isClick=false
makeAcount.onclick = () => {
        formAcount.style.display = "block";
        xAcount.style.display = "block";
        document.getElementById('home').style.filter="blur(10px)"
        document.getElementById('services').style.filter="blur(10px)"
        document.getElementById('about').style.filter="blur(10px)"
        document.getElementById('testimoni').style.filter="blur(10px)"

}
xAcount.onclick=()=>{
    formAcount.style.display="none";
    xAcount.style.display = "none";
    document.getElementById('home').style.filter="blur(0)"
    document.getElementById('services').style.filter="blur(0)"
    document.getElementById('about').style.filter="blur(0)"
    document.getElementById('testimoni').style.filter="blur(0)"
}

contactUs.onclick=()=>{
    document.querySelector('.show-contact').style.transform="translateX(0)"
    document.getElementById('home').style.filter="blur(10px)"
    document.getElementById('services').style.filter="blur(10px)"
    document.getElementById('about').style.filter="blur(10px)"
    document.getElementById('testimoni').style.filter="blur(10px)"
}
document.querySelector('.contact-i').onclick=()=>{
    document.querySelector('.show-contact').style.transform="translateX(500px)"
    document.getElementById('home').style.filter="blur(0)"
    document.getElementById('services').style.filter="blur(0)"
    document.getElementById('about').style.filter="blur(0)"
    document.getElementById('testimoni').style.filter="blur(0)"
}
sumbitContact.onclick=()=>{
    document.querySelector('.show-contact').style.transform="translateX(500px)"
    document.getElementById('home').style.filter="blur(0)"
    document.getElementById('services').style.filter="blur(0)"
    document.getElementById('about').style.filter="blur(0)"
    document.getElementById('testimoni').style.filter="blur(0)"
}
 
