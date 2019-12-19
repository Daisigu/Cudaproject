jQuery(function($){
$(document).ready(function(){
        $('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 400
});
});
$('.contact').click(function(e){
        var section =$('.popup-contacts')
        section.show(300);
});
$('.close').click(function(e){
        var section =$('.popup-contacts')
        section.hide(300);
});
$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".popup-contacts"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.hide(300); // скрываем его
        }
});
$('.block5__ul__item a').click(function( event ) {    
          event.preventDefault();      
        });
});