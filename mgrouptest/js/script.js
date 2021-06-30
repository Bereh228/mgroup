new Swiper('.goods-swiper',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    slidesPerView:3,
    slidesPerGroup:3,
    mousewheel: {
        sensitivity: 1,
    },
    speed: 700,
    loop:true,
 
  
});



const goods = document.querySelector('.swiper-wrapper');
const popupTitle = document.querySelector('.popup__title');
const closePopup = document.querySelector('.popup__exit');
// const imgThisPopup = document.querySelector('.imgThisGoods');
const popupLeftImg = document.querySelector('.popup__left-img');
const popupRightImg = document.querySelector('.popup__right-img');
const exitConsultation = document.querySelector('.exit__cons');

function closeOverlayAndModals(){
    $('#overlay, #popup__object, #popup__consultation').fadeOut('slow');
}

// open main popup
goods.addEventListener('click',function(event){
    let key,value, src,srcset;

    if(event.target.classList.contains('button-item')){
        key = event.target.parentNode.firstElementChild.firstElementChild.innerHTML;
        value = event.target.parentNode.firstElementChild.firstElementChild.nextElementSibling.innerHTML;
        popupTitle.innerHTML = `${key} - ${value}`;
        
        srcset = event.target.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.getAttribute('srcset');
        src = event.target.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.getAttribute('src')
      
        popupLeftImg.firstElementChild.firstElementChild.setAttribute('srcset',srcset);
        popupRightImg.firstElementChild.firstElementChild.setAttribute('srcset',srcset);
        popupRightImg.firstElementChild.firstElementChild.nextElementSibling.setAttribute('src',src);
        $('#overlay, #popup__object').fadeIn('slow');
    }
    event.stopImmediatePropagation();
})

closePopup.addEventListener('click',closeOverlayAndModals);
exitConsultation.addEventListener('click',closeOverlayAndModals);

// в имя не вводит цифры
function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
      event.preventDefault();
  }

// маска ввода
$("#user_phone, #consultation__phone").mask("+38(099)-999-9999");
// валидация формы
$('#form-project').validate({
    rules: {
        user_name: {
            required: true,
            minlength: 2,
        },
        user_phone: "required"
    },
    messages: {
        user_name: {
            required: "Пожалуйста, введите ваше имя",
            minlength: jQuery.validator.format("Введите хотя бы {0} символа!")
        },
        user_phone: "Пожалуйста, введите ваш телефон"
      }
});
// валидация формы
$('#form__consultation').validate({
    rules: {
        consultation__name: {
            required: true,
            minlength: 2,
        },
        consultation__phone: "required"
    },
    messages: {
        consultation__name: {
            required: "Пожалуйста, введите ваше имя",
            minlength: jQuery.validator.format("Введите хотя бы {0} символа!")
        },
        consultation__phone: "Пожалуйста, введите ваш телефон"
      }
})

// якорь
function anchor(event){
    event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top},0);
}

$(".button-main").on("click", anchor);
$('.arrowUP').on('click',anchor);

// open popup consultation and asks
$('.button-consultation, .button-header').on('click', function(){
    $('#popup__object').fadeOut('fast');
    setTimeout(() => {
        $('#overlay, #popup__consultation').fadeIn('slow');
    }, 300);
})


window.addEventListener('scroll',function(){
    let posY = window.pageYOffset;

    if(posY > 1500){
        $('.arrowUP').fadeIn('slow');
    }
    else{
        $('.arrowUP').fadeOut('slow');
    }
})

new WOW().init();