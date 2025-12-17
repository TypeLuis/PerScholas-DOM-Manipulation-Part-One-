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

const topMenuLinks = topMenuEl.querySelectorAll('a')
topMenuEl.addEventListener("click", (e) => {
    e.preventDefault()
    if(e.target === topMenuEl) return
    const clicked = e.target
    const wasActive = clicked.classList.contains("active")

    topMenuLinks.forEach((e) => e.classList.remove("active"))

    
    if(!wasActive) clicked.classList.add("active")
    
    // let linkObj
    // menuLinks.forEach((obj) => {
    //     if(obj.text === clicked.textContent) linkObj = obj
    // })

    // simpler option
    const linkObj = menuLinks.find(obj => obj.text === clicked.textContent)

    // ? after the property is called optional chaining, stops and returns undefined instead of crashing
    //  instead of linkObj && linkObj.sublinks linkObj?.subLinks works just as well
    if (wasActive || !linkObj?.subLinks) {
        subMenu.style.top = "0"
        return
    }
    // subMenu.style.top = "0"

    // requestAnimationFrame(subMenu.style.top)
    if(linkObj.subLinks){
        console.log(subMenu.style.top)
        if(subMenu.style.top === "100%") subMenu.style.top = "0";
        else {
            buildSubmenu(linkObj)
            subMenu.style.top = "100%"
        }
    }
    else subMenu.style.top = "0"

    // subMenu.style.top = linkObj.subLinks ? "100%" : "0"
})

subMenu.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.tagName !== "A") return
})

function buildSubmenu(linkObj) {
    const currentLinks = subMenu.querySelectorAll('a')
    currentLinks.forEach((el) => el.remove())

    linkObj.subLinks.forEach((link) => {
        const a = document.createElement("a")
        a.textContent = link.text
        a['href'] = link["href"]
        subMenu.append(a)
    })
}