$(document).ready(function(){
    $('div.infoModule').hide(); /*works*/
    $('.showmore').on("click", function(){
        var index = $(".showmore").index(this);
        if ($('.infoModule').eq(index).is(':visible')){
            $('.showmore').eq(index).html("Click here for more.");
        }
        else {
            $('.showmore').eq(index).html("Click here for less.");
        }
        
        $('.infoModule').eq(index).fadeToggle(400);
        return false;
    })
});

