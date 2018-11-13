$(document).ready( function() {
    //test
    //$('main').hide(3000).delay(1000).show(6000);
    $('.portret img').mouseenter( function(){
        $(this).fadeTo(1000, 0.1);
    }).mouseleave( function() {
        $(this).fadeTo(1000, 1);
    }).click( function(){
        $(this).next().toggle(2000);
    });


    //footer
    $('footer').click( function(){
        $(this).animate({
            top : '-=30px',
            opacity: '-=.2'
        }, 1000)
    }).dblclick( function(){
        $(this).animate({
            top: '0',
            opacity: '1'
        }, 3000)
    });
}); // einde van ready function

 
