/**
 * Created by xerardoo on 5/14/16.
 */


$( window ).ready(function() {



console.log("hola mundo");


    var winHeight = $(window).height(),
        topLimit = winHeight * .2,
        bottomLimit = winHeight * .8;

    var scroll = $(window).scrollTop();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

   console.log(winHeight-scroll)
    });

});