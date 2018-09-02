$(document).ready(function() {

    $("nav").mouseover(function(){
        $(".nav-itens").addClass("nav-show");          
    });
    $("nav").mouseout(function(){
        $(".nav-itens").removeClass("nav-show");        
    });

//  $('a.tooltip').click(function() { antes estava assim

    var page = $('html, body');
    $(document).click('a.tooltip', function(){ 
    page.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
    });

    $(document).scroll(function(){
        var topWindow = $(window).scrollTop();
        if(topWindow > 60) {
           $("header").addClass('header_fixed');
        }else {
           $("header").removeClass('header_fixed');
        };
    });
});