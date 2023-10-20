// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

// Lắng nghe sự kiện scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const links = navbar.querySelectorAll("a");

    // Duyệt qua mỗi liên kết
    links.forEach(function (link) {
        const targetId = link.getAttribute("href").substring(1); // Lấy id mục tiêu
        const targetElement = document.getElementById(targetId);

        // Kiểm tra xem mục tiêu có trong tầm nhìn hay không
        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();

            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                // Mục tiêu nằm trong tầm nhìn
                link.style.textDecoration = "underline"; // Thêm gạch chân
                link.style.color = "#fff";
            } else {
                // Mục tiêu nằm ngoài tầm nhìn
                link.style.textDecoration = "none"; // Loại bỏ gạch chân
                link.style.color = "#ddd";
            }
        }
    });
});
