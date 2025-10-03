 var testimonialsSwiper = new Swiper(".testimonials-swiper", {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        // Tự động chạy
        autoplay: {
            delay: 5000, // 5 giây
            disableOnInteraction: false,
        },
        // Phân trang
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Cấu hình responsive
        breakpoints: {
            // Khi màn hình >= 768px
            768: {
                slidesPerView: 2,
            },
            // Khi màn hình >= 992px
            992: {
                slidesPerView: 3,
            },
        },
    });