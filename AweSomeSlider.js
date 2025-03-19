document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("curentYear").textContent = new Date().getFullYear();

    // Slider initializations (unchanged)
    new AweSomeKitSlider('#Basic', {
        arrows: true,
    });

    new AweSomeKitSlider('#Autoplay', {
        arrows: true,
        autoplay: true,
    });

    new AweSomeKitSlider('#Infinite', {
        arrows: true,
        autoplay: true,
        infinite: true,
    });

    new AweSomeKitSlider('#Pagination', {
        arrows: true,
        autoplay: true,
        pagination: true,
    });

    new AweSomeKitSlider('#customPagination', {
        arrows: true,
        autoplay: true,
        pagination: true,
        paginationText: ['One', 'Two', 'Three', 'Four', 'Five'],
    });

    new AweSomeKitSlider('#sliderPerView', {
        arrows: true,
        autoplay: true,
        infinite: true,
        slidesPerView: 3,
        slidesToScroll: 1,
    });

    new AweSomeKitSlider('#slider8', { 
        autoplay: true, 
        infinite: true, 
        arrows: true, 
        pagination: true, 
        paginationText: ['One', 'Two', 'Three', 'Four', 'Five'], 
        type: 'slide',
        slidesPerView: 2,
        slidesToScroll: 2,
        breakpoints: {
            768: { slidesToScroll: 1 },
            1024: { slidesToScroll: 3 }
        }
    });
})
