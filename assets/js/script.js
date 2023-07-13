(() => {
    function makeSlideshow(slides) {
        // get relevant elements
        const slidesInner = slides.querySelector('.slides-inner');
        const images = slidesInner.querySelectorAll('img');

        const btn_next = slides.querySelector('.btn-next');
        const btn_prev = slides.querySelector('.btn-prev');

        // get the images computed width
        const width = images[0].clientWidth;

        // get timers
        const delay = parseInt(slides.dataset.delay);
        const transition = parseInt(slides.dataset.transition);

        let index = 0;
        let max = images.length;

        // setting image transtition time
        slidesInner.style.transition = `${transition}ms`;

        const indicatorContainer = slides.querySelector('.slide-indicators');
        const indicators = [];
        if (indicatorContainer !== null) {
            for (let i = 0; i < max; ++i) {
                const li = document.createElement('li');
                indicatorContainer.appendChild(li);
                indicators.push(li);
            }
            indicators[0].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        }

        const showSlide = () => {
            slidesInner.style.transform = `translate3d(-${width * index}px, 0, 0)`;
            indicators.forEach((el, i) => {
                if (i === index) {
                    el.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                } else {
                    el.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }
            })
        }

        const nextSlide = () => {
            index === max - 1 ? index = 0 : ++index;
            showSlide();
        }

        const prevSlide = () => {
            index == 0 ? index = max - 1 : --index;
            showSlide();
        }

        let interval = setInterval(() => nextSlide(), delay);

        if (btn_next !== null) {
            btn_next.addEventListener('click', e => {
                e.preventDefault();
                clearInterval(interval);
                interval = setInterval(() => nextSlide(), delay);
                nextSlide();
            })
        }

        if (btn_prev !== null) {
            btn_prev.addEventListener('click', e => {
                e.preventDefault();
                clearInterval(interval);
                interval = setInterval(() => nextSlide(), delay);
                prevSlide();
            })
        }
    }

    const slideshows = document.querySelectorAll('.slide-show');

    slideshows.forEach(slideshow => makeSlideshow(slideshow))
})()
