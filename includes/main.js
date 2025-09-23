
// Change navbar position 
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});


// const currentPage = window.location.pathname.split("/").pop();


// const links = document.querySelectorAll(".service-item");

// links.forEach(link => {
//     if (link.getAttribute("href") === currentPage) {
//         link.classList.add("active");
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    const dropdownLinks = document.querySelectorAll('.navbar .dropdown > a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const isMobile = window.innerWidth < 992;

            if (isMobile) {
                e.preventDefault(); // امنع فتح الصفحة

                const alreadyOpen = this.classList.contains('open');

                // اغلق أي قائمة تانية
                document.querySelectorAll('.navbar .dropdown > a.open').forEach(el => {
                    el.classList.remove('open');
                    el.nextElementSibling?.classList.remove('show');
                });

                // لو مش مفتوحة بالفعل، افتحها
                if (!alreadyOpen) {
                    this.classList.add('open');
                    this.nextElementSibling?.classList.add('show');
                }
            }
            // أما لو ديسكتوب، متعملش أي حاجة وسيب الرابط يفتح عادي
        });
    });

    // اقفل القوائم عند توسيع الشاشة
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            document.querySelectorAll('.navbar .dropdown > a.open').forEach(el => {
                el.classList.remove('open');
                el.nextElementSibling?.classList.remove('show');
            });
        }
    });
});


AOS.init();


// Top Arrow Button
let scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
};


scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};





// عناصر التحكم
const sidebar = document.getElementById("mobileSidebar");
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");

// فتح السايد بار
openBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
});

// قفل السايد بار
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});

// التحكم في الدروب داون للموبايل
document.querySelectorAll(".toggle-dropdown").forEach(toggle => {
    toggle.addEventListener("click", (e) => {
        e.preventDefault();

        const parent = e.target.closest(".dropdown");
        const dropdownMenu = parent.querySelector(".dropdown-menu");
        const icon = toggle.querySelector("i");

        dropdownMenu.classList.toggle("show");

        if (dropdownMenu.classList.contains("show")) {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
        } else {
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
        }
    });
});