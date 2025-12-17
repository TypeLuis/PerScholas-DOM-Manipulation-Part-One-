const body = document.body

const main = document.createElement("main")
const heading = document.createElement('h1')
// const topMenuEl = document.createElement("nav")
const topMenuEl = document.querySelector("#top-menu")


heading.textContent = "Dom Manipulation"
main.style.backgroundColor = 'var(--main-bg)'
main.classList.add("flex-ctr")


topMenuEl.id = "top-menu"
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")

const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
    ]},
];

menuLinks.forEach((obj) => {
    const link = document.createElement('a')
    link.href = obj['href']
    link.textContent = obj["text"]

    topMenuEl.appendChild(link)
})


main.appendChild(heading)
// body.appendChild(topMenuEl)
body.appendChild(main)


// pt 2

const subMenu = document.querySelector("#sub-menu")
subMenu.style.height = "100%"
subMenu.style.backgroundColor = "var(--sub-menu-bg)"
subMenu.classList.add("flex-around")
subMenu.style.position = "absolute"
subMenu.style.top = 0


topMenuEl.addEventListener("click", (e) => {
    if(e.target === topMenuEl) return
    console.log(e.target)
    
})