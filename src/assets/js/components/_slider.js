const portfolio = document.querySelector('.portfolio__slider');
const portfolioPrevBtn = document.querySelector('.portfolio__prev-btn');
const portfolioNextBtn = document.querySelector('.portfolio__next-btn');

const reviews = document.querySelector('.reviews__slider');
const reviewsPrevBtn = document.querySelector('.reviews__prev-btn');
const reviewsNextBtn = document.querySelector('.reviews__next-btn');

const portfolioSlider = new Flickity(portfolio, {
    // options
    cellAlign: 'left',
    pageDots: false,
    imagesLoaded: true,
    lazyLoad: true,
    percentPosition: false,
    prevNextButtons: false,
});

portfolioSlider.on('change', portfolioSlider.reposition);

portfolioPrevBtn.disabled = portfolioSlider.selectedIndex == 0;

portfolioPrevBtn.addEventListener('click', () =>
    prev(portfolioSlider, portfolioPrevBtn, portfolioNextBtn)
);

portfolioNextBtn.addEventListener('click', () =>
    next(portfolioSlider, portfolioPrevBtn, portfolioNextBtn)
);

const reviewsSlider = new Flickity(reviews, {
    // options
    cellAlign: 'left',
    pageDots: false,
    imagesLoaded: true,
    lazyLoad: true,
    percentPosition: false,
    prevNextButtons: false,
});

reviewsPrevBtn.disabled = reviewsSlider.selectedIndex == 0;

reviewsPrevBtn.addEventListener('click', () =>
    prev(reviewsSlider, reviewsPrevBtn, reviewsNextBtn)
);

reviewsNextBtn.addEventListener('click', () =>
    next(reviewsSlider, reviewsPrevBtn, reviewsNextBtn)
);

function prev(slider, preBtn, nextBtn) {
    slider.previous();

    nextBtn.disabled = false;

    preBtn.disabled = slider.selectedIndex == 0;
}

function next(slider, preBtn, nextBtn) {
    slider.next();

    preBtn.disabled = false;

    const lastIndex = slider.slides.length - 1;
    nextBtn.disabled = slider.selectedIndex == lastIndex;
}
