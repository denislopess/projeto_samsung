$(function(){
    $('#mobile').click(function(){
        $('#bars').toggleClass('fa-times');
        //Verificando se o menu mobile está visivel
        if($(this).find('ul').is(':visible')){
            $(this).find('ul').hide();
            $('body').css('background','#fff');
        }else{
            $(this).find('ul').show();
            $('body').css('background','#ccc');
        }
    })
})