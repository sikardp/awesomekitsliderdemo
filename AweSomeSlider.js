document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("curentYear").textContent = new Date().getFullYear();
})

// Slider initializations (unchanged)
new AweSomeSlider('#Basic', {
    arrows: true,
    breakpoints: {
        768: { slidesPerView: 1, slidesToScroll: 1 },
        1024: { slidesPerView: 1, slidesToScroll: 1 }
    }
});

new AweSomeSlider('#Autoplay', {
    arrows: true,
    autoplay: true,
    breakpoints: {
        768: { slidesPerView: 1, slidesToScroll: 1 },
        1024: { slidesPerView: 1, slidesToScroll: 1 }
    }
});

new AweSomeSlider('#Infinite', {
    arrows: true,
    autoplay: true,
    infinite: true,
    breakpoints: {
        768: { slidesPerView: 1, slidesToScroll: 1 },
        1024: { slidesPerView: 1, slidesToScroll: 1 }
    }
});

new AweSomeSlider('#Pagination', {
    arrows: true,
    autoplay: true,
    pagination: true,
    breakpoints: {
        768: { slidesPerView: 1, slidesToScroll: 1 },
        1024: { slidesPerView: 1, slidesToScroll: 1 }
    }
});

new AweSomeSlider('#customPagination', {
    arrows: true,
    autoplay: true,
    pagination: true,
    paginationText: ['One', 'Two', 'Three', 'Four', 'Five'],
    breakpoints: {
        768: { slidesPerView: 1, slidesToScroll: 1 },
        1024: { slidesPerView: 1, slidesToScroll: 1 }
    }
});

new AweSomeSlider('#sliderPerView', {
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesPerView: 3,
    slidesToScroll: 1,
    breakpoints: {
        768: { slidesPerView: 1, slidesToScroll: 1 },
        1024: { slidesPerView: 1, slidesToScroll: 1 }
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
