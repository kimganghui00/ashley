$(document).ready(function(){

    // $('.more-btn').click(function(){
    //     //햄버거 버튼 
    //     $('.hamburger').toggleClass('active');
    //     //menu
    //     $("nav").slideDown();
    // });

    const toggleBtn = document.querySelector('.more-btn');
    const menu = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');

    toggleBtn.addEventListener('click',()=>{
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
});//end