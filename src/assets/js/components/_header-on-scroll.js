const header = document.querySelector('#header');
const headerInner = header.querySelector('.header__inner');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
header.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    headerInner.classList.toggle('fixing', !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);
