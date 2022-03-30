// Content statement 
const menuItems = ['New Arrivals', 'Clothing', 'Plus', 'Collections', 'Spring 2022', 'Accessories', 'Home', 'Sale'];
const carrousel = [
    'https://cdn-yotpo-images-production.yotpo.com/instagram/58/17921215178145058/low_resolution.jpg',
    'https://cdn-yotpo-images-production.yotpo.com/instagram/68/18286550008016068/low_resolution.jpg',
    'https://cdn-yotpo-images-production.yotpo.com/instagram/36/18187322332167236/low_resolution.jpg',
    'https://cdn-yotpo-images-production.yotpo.com/instagram/55/17913097703471755/low_resolution.jpg',
    'https://cdn-yotpo-images-production.yotpo.com/instagram/75/17922605567055775/low_resolution.jpg',
];

const contactsMenu = [
    {
        label: 'Email custserv@karenkane.com',
        icon: '@'
    },
    {
        label: 'Phone 855-655-8974',
        icon: 'U'
    },
    {
        label: 'Hours Monday - Friday, 8am-5pm PST',
        icon: 'd'
    }
];

const aboutsMenu = [
    'The Karen Kane Story',
    "Karen's Blog",
    'Sustainability Practices',
    'Career Opportunities',
    'Privacy Policy',
    'Diversity',
];

const accountsMenu = [
    'Gift Cards',
    'Rewards',
    'Refer a Friend',
    'Request a Catalog',
    'Unsubscribe From Catalog',
    'Your California Privacy Rights',
];

const servicesMenu = [
    'FAQ',
    'Shipping & Return',
    'Make a Return',
    'Fit Guide',
    'Service Discount',
    'Store Locator',
    'Accessibility Mode',
];

const menuIcons = ['f', 'g', 'l', 't', 'k'];

// Obtaining the id's of the lists
const menuItem = document.getElementById('menu');
const contactMenu = document.getElementById('contactMenu');
const contactMenuItem = document.getElementById('contactMenuItem');
const carrouselMenu = document.getElementById('carrousel-menu');
const aboutMenu = document.getElementById('aboutMenu');
const accountMenu = document.getElementById('accountMenu');
const serviceMenu = document.getElementById('serviceMenu');
const menuIcon = document.getElementById('menuIcon');
let i = 0

// All lists
function renderMenuItems() {
    menuItems.forEach((item) => {
        const liItem = document.createElement('li');
        const aItem = document.createElement('a');
        liItem.classList.add('menu-item', 'text-sm');
        aItem.classList.add('menu-item-a');
        aItem.textContent = item

        liItem.appendChild(aItem);
        menuItem.appendChild(liItem);
    })
}

function renderCarrouselMenuItems() {
    carrousel.forEach((item) => {
        const liItem = document.createElement('li');
        const aItem = document.createElement('a');
        const imgItem = document.createElement('img');
        imgItem.setAttribute('src', item)
        imgItem.classList.add('img-carrousel')
        aItem.setAttribute('href', '#');

        aItem.appendChild(imgItem);
        liItem.appendChild(aItem);
        carrouselMenu.appendChild(liItem);
    })
}

function renderContactMenu() {
    contactsMenu.forEach((item) => {
        contactMenu.innerHTML += `
        <li class="menu-item">
            <a href="#">${item.label}<a>
        <li>`
    })
}

function renderContactMenuItem() {
    contactsMenu.forEach((item) => {
        contactMenuItem.innerHTML += `
        <li class="menu-item">
            <span class="icon-item">${item.icon}<span>
        <li>`
    })
}

function renderAboutMenuItems() {
    aboutsMenu.forEach((item) => {
        const liItem = document.createElement('li');
        const aItem = document.createElement('a');
        liItem.classList.add('menu-item');
        aItem.classList.add('menu-item-a');
        aItem.setAttribute('href', '#');
        aItem.textContent = item

        liItem.appendChild(aItem);
        aboutMenu.appendChild(liItem);
    })
}

function renderAccountMenuItems() {
    accountsMenu.forEach((item) => {
        const liItem = document.createElement('li');
        const aItem = document.createElement('a');
        liItem.classList.add('menu-item');
        aItem.classList.add('menu-item-a');
        aItem.setAttribute('href', '#');
        aItem.textContent = item

        liItem.appendChild(aItem);
        accountMenu.appendChild(liItem);
    })
}

function renderServiceMenuItems() {
    servicesMenu.forEach((item) => {
        const liItem = document.createElement('li');
        const aItem = document.createElement('a');
        liItem.classList.add('menu-item');
        aItem.classList.add('menu-item-a');
        aItem.setAttribute('href', '#');
        aItem.textContent = item

        liItem.appendChild(aItem);
        serviceMenu.appendChild(liItem);
    })
}

function renderIconMenuItems() {
    menuIcons.forEach((item) => {
        const liItem = document.createElement('li');
        const aItem = document.createElement('a');
        liItem.classList.add('menu-item');
        aItem.classList.add('icon-item', 'text-4xl');
        aItem.setAttribute('href', '#');
        aItem.textContent = item

        liItem.appendChild(aItem);
        menuIcon.appendChild(liItem);
    })
}

// render Menu's
renderContactMenuItem();
renderContactMenu();
renderMenuItems();
renderCarrouselMenuItems();
renderServiceMenuItems();
renderAccountMenuItems();
renderAboutMenuItems();
renderIconMenuItems();