// Slider initializations (unchanged)
new AweSomeSlider('#Basic', {
    arrows: true,
});

new AweSomeSlider('#slider1', { 
    autoplay: false, 
    infinite: false, 
    arrows: false, 
    pagination: false, 
    type: 'slide',
    slidesPerView: 1,
    slidesToScroll: 1,
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

new AweSomeSlider('#slider2', { 
    autoplay: false, 
    infinite: false, 
    arrows: false, 
    pagination: false, 
    type: 'fade',
    slidesPerView: 1,
    slidesToScroll: 1,
    breakpoints: {
        768: { slidesToScroll: 2 },
        1024: { slidesToScroll: 1 }
    }
});

new AweSomeSlider('#slider3', { 
    autoplay: false, 
    infinite: true, 
    arrows: true, 
    pagination: false, 
    type: 'slide',
    slidesPerView: 2,
    slidesToScroll: 1,
    breakpoints: {
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 }
    }
});

new AweSomeSlider('#slider4', { 
    autoplay: false, 
    infinite: true, 
    arrows: true, 
    pagination: false, 
    type: 'fade',
    slidesPerView: 1,
    slidesToScroll: 2,
    breakpoints: {
        768: { slidesToScroll: 1 },
        1024: { slidesToScroll: 3 }
    }
});

new AweSomeSlider('#slider5', { 
    autoplay: true, 
    infinite: true, 
    arrows: false, 
    pagination: false, 
    type: 'slide',
    slidesPerView: 3,
    slidesToScroll: 1,
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
    }
});

new AweSomeSlider('#slider6', { 
    autoplay: true, 
    infinite: true, 
    arrows: false, 
    pagination: false, 
    type: 'fade',
    slidesPerView: 1,
    slidesToScroll: 1,
    breakpoints: {
        768: { slidesToScroll: 2 },
        1024: { slidesToScroll: 1 }
    }
});

new AweSomeSlider('#slider7', { 
    autoplay: true, 
    infinite: true, 
    arrows: true, 
    pagination: true, 
    paginationText: ['A', 'B', 'C', 'D', 'E'], 
    type: 'slide',
    slidesPerView: 2,
    slidesToScroll: 2,
    breakpoints: {
        768: { slidesPerView: 3, slidesToScroll: 1 },
        1024: { slidesPerView: 4, slidesToScroll: 2 }
    }
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
