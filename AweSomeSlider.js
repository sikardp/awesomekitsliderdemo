// Slider initializations (unchanged)
new AweSomeSlider('#Basic', {
    arrows: true,
});

new AweSomeSlider('#Autoplay', {
    arrows: true,
    autoplay: true
});

new AweSomeSlider('#Infinite', {
    arrows: true,
    autoplay: true,
    infinite: true
});

new AweSomeSlider('#Pagination', {
    arrows: true,
    autoplay: true,
    pagination: true
});

new AweSomeSlider('#customPagination', {
    arrows: true,
    autoplay: true,
    pagination: true,
    paginationText: ['One', 'Two', 'Three', 'Four', 'Five'],
});

new AweSomeSlider('#sliderPerView', {
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesPerView: 3,
    slidesToScroll: 1,
});


new AweSomeSlider('#slider8', { 
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
