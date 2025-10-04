const bar = document.getElementById('announcement');
const fab = document.getElementById('contactFab');
const fabToggle = document.getElementById('fabToggle');
const backToTop = document.getElementById('backToTop');

// mở sẵn 3 nút liên hệ khi vào trang
if (fab) {
    fab.classList.add('open');
    if (fabToggle) {
        fabToggle.textContent = '×';
        fabToggle.setAttribute('aria-expanded', 'true');
        fabToggle.setAttribute('aria-label', 'Đóng liên hệ');
    }
}

// toggle nút nổi: + <-> X và ẩn/hiện 3 icon
if (fabToggle && fab) {
    fabToggle.addEventListener('click', () => {
        const open = fab.classList.toggle('open');
        fabToggle.textContent = open ? '×' : '+';
        fabToggle.setAttribute('aria-expanded', String(open));
        fabToggle.setAttribute('aria-label', open ? 'Đóng liên hệ' : 'Mở liên hệ');
    });
}

// hiện nút Back-to-top sau khi cuộn; ẩn thanh thông báo khi rời top
const onScroll = () => {
    if (bar) {
        if (window.scrollY > 10) bar.classList.add('d-none');
        else bar.classList.remove('d-none');
    }
    if (backToTop) {
        if (window.scrollY > 300) backToTop.classList.add('show');
        else backToTop.classList.remove('show');
    }
};
window.addEventListener('scroll', onScroll, { passive: true });
// set trạng thái ban đầu khi vừa vào trang
onScroll();

// click lên đầu trang mượt mà
if (backToTop) {
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
