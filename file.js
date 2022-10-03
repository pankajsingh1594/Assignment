$(document).ready(function(){
    $(".slider-1").slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint : 767,
            settings: {
                slidesToShow: 1,
            }
        }]
    })
})