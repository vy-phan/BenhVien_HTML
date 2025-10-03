var swiper = new Swiper(".doctor-swiper", {
    // Cấu hình
    effect: "coverflow", // Hiệu ứng 3D đẹp mắt
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true, // Lặp vô tận
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    // Thêm phân trang và điều hướng
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Cấu hình responsive
    breakpoints: {
        // Khi chiều rộng màn hình >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            effect: "slide", // Trở về hiệu ứng trượt bình thường trên màn hình lớn
            centeredSlides: false,
        },
        // Khi chiều rộng màn hình >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
            effect: "slide",
            centeredSlides: false,
        },
        // Khi chiều rộng màn hình >= 1200px
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
            effect: "slide",
            centeredSlides: false,
        }
    }
});
