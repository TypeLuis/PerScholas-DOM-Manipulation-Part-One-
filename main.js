const body = document.body

const main = document.createElement("main")
const heading = document.createElement('h1')
const topMenuEl = document.createElement("nav")


heading.textContent = "Dom Manipulation"
main.style.backgroundColor = 'var(--main-bg)'
main.classList.add("flex-ctr")


topMenuEl.id = "top-menu"
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")

const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

menuLinks.forEach((obj) => {
    const link = document.createElement('a')
    link.href = obj['href']
    link.textContent = obj["text"]

    topMenuEl.appendChild(link)
})


main.appendChild(heading)
body.appendChild(topMenuEl)
body.appendChild(main)