function headerCV () {
    // ====================== CREAR FRAGMENTO ======================
    const fragmentoHeader = document.createDocumentFragment();
    // ====================== HEADER ======================
    const header = document.createElement("header");
    header.setAttribute('class','header-main');
    document.body.appendChild(header);
    // primer elemento
    const logo = document.createElement("div");
    logo.classList.add("logo-header");
    logo.innerHTML = `<a href='../../index.html'><span>C</span>urriculum <span>V</span>itae</a>`;
    fragmentoHeader.appendChild(logo);
    // segundo elemento
    const nav = document.createElement("nav");
    nav.classList.add("nav-header")
    const fragmentoNav = document.createDocumentFragment();
    // lista
    const link  = ["Home", "About", "Service", "Portfolio", "Contact"];
    for(let i = 0; i < link.length; i++) {
        let li = document.createElement("LI");
        let a = link[i].toLowerCase();
        li.classList.add(a);
        li.innerHTML = `<a href='../../index.html#${a}' class='list-links'>${link[i]}</a>`;
        fragmentoNav.appendChild(li);
    }
    nav.appendChild(fragmentoNav);
    fragmentoHeader.appendChild(nav);
    // tercer elemento
    const toggle = document.createElement("div");
    toggle.classList.add("toggle");
    toggle.innerHTML = `<span></span>`
    fragmentoHeader.appendChild(toggle);
    // Agregar el fragmento a la página web
    const container = document.querySelector('.header-main');
    container.appendChild(fragmentoHeader);
    // Toggle
    const allArticle = document.querySelectorAll("article");
    const totalArticle = allArticle.length;
    const headerToggleBtn = document.querySelector(".toggle");
    headerToggleBtn.addEventListener("click", () => {
        btnHeader();
    });
    function btnHeader() {
        document.querySelector('.header-main').classList.toggle('open-header');
        if(document.querySelector('.header-main').classList.contains('.hidde-header')){
            document.querySelector('.header-main').classList.remove('.hidde-header');
        } else {
            document.querySelector('.header-main').classList.add('.hidde-header')
        }
        headerToggleBtn.classList.toggle('open-btn');
        for(let i = 0; i < totalArticle; i++){
            allArticle[i].classList.toggle('open-header');
        }
    }
}
function headerEcommerce () {
    // ====================== CREAR FRAGMENTO ======================
    const fragmentoHeader = document.createDocumentFragment();
    // ====================== HEADER ======================
    const header = document.createElement("header");
    header.setAttribute('class','header-main');
    document.body.appendChild(header);
    // primer elemento
    const logo = document.createElement("div");
    logo.classList.add("logo-header");
    logo.innerHTML = `<a href='../../index.html'><span>C</span>urriculum <span>V</span>itae</a>`;
    fragmentoHeader.appendChild(logo);
    // segundo elemento
    const nav = document.createElement("nav");
    nav.classList.add("nav-header")
    const fragmentoNav = document.createDocumentFragment();
    // lista
    const link  = ["Home", "About", "Service", "Portfolio", "Contact"];
    for(let i = 0; i < link.length; i++) {
        let li = document.createElement("LI");
        let a = link[i].toLowerCase();
        li.classList.add(a);
        li.innerHTML = `<a href='../../index.html#${a}' class='list-links'>${link[i]}</a>`;
        fragmentoNav.appendChild(li);
    }
    nav.appendChild(fragmentoNav);
    fragmentoHeader.appendChild(nav);
    // tercer elemento
    const toggle = document.createElement("div");
    toggle.classList.add("toggle");
    toggle.innerHTML = `<span></span>`
    fragmentoHeader.appendChild(toggle);
    // Agregar el fragmento a la página web
    const container = document.querySelector('.header-main');
    container.appendChild(fragmentoHeader);
    // Toggle
    const headerToggleBtn = document.querySelector(".toggle");
    headerToggleBtn.addEventListener("click", () => {
        btnHeader();
    });
    function btnHeader() {
        document.querySelector('.header-main').classList.toggle('open-header');
        headerToggleBtn.classList.toggle('open-btn');
        const headerPage = document.querySelector('.header-page');
        if(document.querySelector('.header-main').classList.contains('open-header')){
            headerPage.style.margin = '70px auto 0px';
        } else {
            headerPage.style.margin = '0px auto';
        }
    }
    window.addEventListener('resize', () => {
        if(window.innerWidth> 850) {
            document.querySelector('.header-page').style.setProperty('margin', '70px auto 0px')
        } else {
            document.querySelector('.header-page').style.setProperty('margin', '0px auto 0px');
        }
    });
}
function headerProjects () {
    // ====================== CREAR FRAGMENTO ======================
    const fragmentoHeader = document.createDocumentFragment();
    // ====================== HEADER ======================
    const header = document.createElement("header");
    header.setAttribute('class','header-main');
    document.body.appendChild(header);
    // primer elemento
    const logo = document.createElement("div");
    logo.classList.add("logo-header");
    logo.innerHTML = `<a href='../../index.html'><span>C</span>urriculum <span>V</span>itae</a>`;
    fragmentoHeader.appendChild(logo);
    // segundo elemento
    const nav = document.createElement("nav");
    nav.classList.add("nav-header")
    const fragmentoNav = document.createDocumentFragment();
    // lista
    const link  = ["Home", "About", "Service", "Portfolio", "Contact"];
    for(let i = 0; i < link.length; i++) {
        let li = document.createElement("LI");
        let a = link[i].toLowerCase();
        li.classList.add(a);
        li.innerHTML = `<a href='../../index.html#${a}' class='list-links'>${link[i]}</a>`;
        fragmentoNav.appendChild(li);
    }
    nav.appendChild(fragmentoNav);
    fragmentoHeader.appendChild(nav);
    // tercer elemento
    const toggle = document.createElement("div");
    toggle.classList.add("toggle");
    toggle.innerHTML = `<span></span>`
    fragmentoHeader.appendChild(toggle);
    // Agregar el fragmento a la página web
    const container = document.querySelector('.header-main');
    container.appendChild(fragmentoHeader);
    // Toggle
    const headerToggleBtn = document.querySelector(".toggle");
    headerToggleBtn.addEventListener("click", () => {
        btnHeader();
    });
    function btnHeader() {
        document.querySelector('.header-main').classList.toggle('open-header');
        headerToggleBtn.classList.toggle('open-btn');
        const main = document.querySelector('main');
        if(document.querySelector('.header-main').classList.contains('open-header')){
            main.style.margin = '70px auto 0px';
        } else {
            main.style.margin = '0px auto';
        }
    }
    const main = document.querySelector('main');
    window.addEventListener('resize', () => {
        if(window.innerWidth > 850) {
            main.style.setProperty ('margin', '70px auto 0px');
        } else {
            main.style.setProperty ('margin', '0px');
        }
    });
    if(window.innerWidth > 850) {
        main.style.setProperty('margin', '70px auto 0px');
    } else {
        main.style.setProperty('margin', '0px auto 0px');
    }
}
function headerBack () {
    // ====================== CREAR FRAGMENTO ======================
    const fragmentoHeader = document.createDocumentFragment();
    // ====================== HEADER ======================
    const header = document.createElement("header");
    header.setAttribute('class','header-main');
    document.body.appendChild(header);
    // primer elemento
    const logo = document.createElement("div");
    logo.classList.add("logo-header");
    logo.innerHTML = `<a href='../../index.html'><span>C</span>urriculum <span>V</span>itae</a>`;
    fragmentoHeader.appendChild(logo);
    // segundo elemento
    const btn = document.createElement("button");
    btn.classList.add("btn-back");
    btn.innerText = 'BACK';
    btn.onclick = () => {
        location.href = '../index.html'
    }
    fragmentoHeader.appendChild(btn);
    // tercer elemento
    const toggle = document.createElement("div");
    toggle.classList.add("toggle");
    toggle.innerHTML = `<span></span>`
    fragmentoHeader.appendChild(toggle);
    // Agregar el fragmento a la página web
    const container = document.querySelector('.header-main');
    container.appendChild(fragmentoHeader);
    // Toggle
    const headerToggleBtn = document.querySelector(".toggle");
    headerToggleBtn.addEventListener("click", () => {
        btnHeader();
    });
    function btnHeader() {
        document.querySelector('.header-main').classList.toggle('open-header');
        headerToggleBtn.classList.toggle('open-btn');
        const main = document.querySelector('main');
        if(document.querySelector('.header-main').classList.contains('open-header')){
            main.style.setProperty ('margin', '70px auto 0px');
        } else {
            main.style.setProperty ('margin', '0px auto');
        }
    }
    const main = document.querySelector('main');
    window.addEventListener('resize', () => {
        if(window.innerWidth > 850) {
            main.style.setProperty ('margin', '70px auto 0px');
        } else {
            main.style.setProperty ('margin', '0px');
        }
    });
    if(window.innerWidth > 850) {
        main.style.setProperty('margin', '70px auto 0px');
    } else {
        main.style.setProperty('margin', '0px auto 0px');
    }
}
function themesAndDarkLight () {
    document.querySelector(".btn-colors-switcher").addEventListener("click", () => {
        document.querySelector(".style").classList.toggle("open-colors");
    });
    // hide sytle - switcher on scroll
    window.addEventListener("scroll", () => {
        if(document.querySelector(".style").classList.contains("open-colors")){
            document.querySelector(".style").classList.remove("open-colors");
        }
    });
    /* ========================================= theme colors ========================================= */
    document.querySelectorAll('.theme-buttons').forEach(color => {
        color.addEventListener('click', () => {
            if(document.querySelector('.light')){
                document.querySelector('.light').style.setProperty('--skin-color', color.getAttribute('data-color'));
            } else {
                document.querySelector(':root').style.setProperty('--skin-color', color.getAttribute('data-color'));
            }
        });
    });
    // ================================= Dark =================================
    const darklight = document.querySelector(".dark-light");
    darklight.addEventListener("click", () => {
        darklight.classList.toggle("fa-sun");
        darklight.classList.toggle("fa-moon");
        document.body.classList.toggle("light");
    });
    window.addEventListener("load", () =>{
        if(document.body.classList.contains("light")){
            darklight.classList.add("fa-moon");}
        else{
            darklight.classList.add("fa-sun");}
    });
}
if (document.title === 'Curriculum'){
    document.addEventListener('DOMContentLoaded', headerCV, false);
    document.addEventListener('DOMContentLoaded', themesAndDarkLight, false);
} else if (document.title === 'Snake Game' || document.title === 'Curso de JAVASCRIPT desde CERO - Nivel MASTER' || document.title === 'FreeCodeCamp'){
    document.addEventListener('DOMContentLoaded', headerProjects, false)
    document.addEventListener('DOMContentLoaded', themesAndDarkLight, false);
}else if (document.title === 'Ecommerce') {
    document.addEventListener('DOMContentLoaded', headerEcommerce, false)
    document.addEventListener('DOMContentLoaded', themesAndDarkLight, false);
} else if (document.title === 'ChallengeOne'){
    document.addEventListener('DOMContentLoaded', headerBack, false);
} else if (document.title === 'My Cart'|| document.title === 'contact'){
    document.addEventListener('DOMContentLoaded', headerBack, false);
    document.addEventListener('DOMContentLoaded', themesAndDarkLight, false);
}