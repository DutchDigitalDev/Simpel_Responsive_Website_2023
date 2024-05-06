
// Source javascript, https://www.youtube.com/watch?v=6pidsgeLLzE&t=946s // 
$(function () {

    $(".toggle").on("click", function(){

        if($(".item").hasClass("active-menu")){
            $(".item").removeClass("active-menu");
        }

        else{
            $(".item").addClass("active-menu");
        }
    })

});