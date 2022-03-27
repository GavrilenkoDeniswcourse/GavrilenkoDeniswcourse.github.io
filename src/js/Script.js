"use strict"

    var sign = prompt("Какой сайт вы бы хотели? Визитка-1,Магазин-2,Корпаративный-3");

if (sign.toLowerCase() == "1") {
  alert("Визитка - 1000 ");
}  if (sign.toLowerCase() == "2") {
  alert("Магазин - 20000 ");
} else {
   alert("Корпаративный - 15000")
}
      
         var sign = prompt("Какая верстка для сайтя нужна? Под мобильные устройства-1,под пка-2, уневерсальная-3");

if (sign.toLowerCase() == "1") {
  alert("Под мобильные устройства - 3000");
}  if (sign.toLowerCase() == "2") {
  alert("Под пка - 1000");
} else {
   alert("Уневерсальная - 5")
}
      var sign = prompt("Какой дизайн вам нужен? Уникальный-1,шаблонный-2 );

if (sign.toLowerCase() == "1") {
  alert("Уникальный - 3000");
}  if (sign.toLowerCase() == "2") {
  alert("Шаблонный - 1000");

$('a[href^="#"]').clikc(function(){
    let valHref = $(this).attr("href");
    $('html,body').animate({scrollTop: $(valHref).offset().top + "px"});
})
    $(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
    $(Document).reade(function(){
        let options = {threshold: [0.5]};
        let elements = $('.streng');
        elements.each((i,el) => {
        observer.observe(el);
    });
        function onEntry (entry) {
            entry.forEach(change =>{
                if(change.isUntersecting) {
                   chang.target.classList.add('show-animation'); 
        }
                });
        }