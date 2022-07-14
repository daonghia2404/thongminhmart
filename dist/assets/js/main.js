window.onload = () => {
  OwlCarousel.init();
  Amount.init();
  ProductBox.init();
  // loading.init();
};

const loading = {
  init: function () {
    this.config();
  },
  config: function () {},
};

const OwlCarousel = {
  init: function () {
    this.setupBannerCarousel();
    this.setupProductCategoryCarousel();
    this.setupNavigationCarousel();
  },
  setupNavigationCarousel: function () {
    const $owl = $("#Navigation-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
          slideBy: 1,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: true,
      dots: false,
      nav: false,
      navText: [
        '<img src="./assets/icons/icon-arrow-left-white.svg" alt="" />',
        '<img src="./assets/icons/icon-arrow-right-white.svg" alt="" />',
      ],
      margin: 0,
    });
  },
  setupBannerCarousel: function () {
    const $owl = $("#Banner-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
          slideBy: 1,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: true,
      dots: false,
      nav: false,
      navText: [
        '<img src="./assets/icons/icon-arrow-left-white.svg" alt="" />',
        '<img src="./assets/icons/icon-arrow-right-white.svg" alt="" />',
      ],
      margin: 0,
    });
  },
  setupProductCategoryCarousel: function () {
    const $owl = $("#ProductCategory-carousel").owlCarousel({
      responsive: {
        0: {
          items: 3,
          slideBy: 1,
        },
        575: {
          items: 4,
          slideBy: 1,
        },
        768: {
          items: 5,
          slideBy: 1,
        },
        991: {
          items: 6,
          slideBy: 1,
        },
        1080: {
          items: 7,
          slideBy: 1,
        },
        1440: {
          items: 8,
          slideBy: 1,
        },
      },
      loop: false,
      autoplay: false,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: true,
      dots: false,
      nav: false,
      navText: [
        '<img src="./assets/icons/icon-arrow-left-white.svg" alt="" />',
        '<img src="./assets/icons/icon-arrow-right-white.svg" alt="" />',
      ],
      margin: 30,
    });
  },
};

const Amount = {
  init: function () {
    this.config();
  },
  config: function () {
    const mains = document.querySelectorAll(".Amount");

    mains.forEach((main) => {
      const minus = main.querySelector(".Amount-minus");
      const plus = main.querySelector(".Amount-plus");
      const control = main.querySelector(".Amount-control");

      const min = control.min || Number.MIN_SAFE_INTEGER;
      const max = control.max || Number.MAX_SAFE_INTEGER;

      minus.addEventListener("click", () => {
        const controlValue = control.value;
        if (controlValue > min) {
          control.value = Number(controlValue) - 1;
        }
      });

      plus.addEventListener("click", () => {
        const controlValue = control.value;
        if (controlValue < max) {
          control.value = Number(controlValue) + 1;
        }
      });
    });
  },
};

const ProductBox = {
  init: function () {
    this.configProductBoxVideo();
    this.configProductDetailVideo();
  },
  configProductBoxVideo: function () {
    const products = document.querySelectorAll(".ProductBox");
    products.forEach((item) => {
      const video = item.querySelector(".ProductBox-video");
      const srcVideo = video.dataset.src;

      item.addEventListener("mousemove", () => {
        if (!video.src) {
          video.addEventListener("loadeddata", () => {
            video.classList.add("loaded");
          });
          video.src = srcVideo;
        }

        video.classList.add("active");
        video.play();
      });

      item.addEventListener("mouseleave", () => {
        video.classList.remove("active");
        video.pause();
        video.currentTime = 0;
      });
    });
  },
  configProductDetailVideo: function () {
    const video = document.querySelector(".ProductDetailPage-detail-video");
    const playBtn = document.querySelector(
      ".ProductDetailPage-detail-image-play"
    );
    if (video && playBtn) {
      const srcVideo = video.dataset.src;

      video.addEventListener("loadeddata", () => {
        video.classList.add("loaded");
        playBtn.classList.remove("active");
        video.play();
      });

      video.addEventListener('click', () => {
        if (video.paused) {
          video.play()
          playBtn.classList.remove("active");
        } else {
          video.pause()
          playBtn.classList.add("active");
        }
      })
      video.src = srcVideo;
    }
  },
};
