console.log("hello circuitstan!")

const container = document.getElementById('container')

let infoObject = document.createElement('div')
let objectOpen = document.createElement('p')
let objectClose = document.createElement('p')
let firstName = document.createElement('p')
let lastName = document.createElement('p')
let github = document.createElement('p')

infoObject.className = "info"

function createInfo() {
    objectOpen.textContent = "{"
    firstName.textContent = "firstName: Stenver"
    lastName.textContent = "lastName: Suurkütt"
    github.textContent = "gitHub: circuitstan"
    objectClose.textContent += "}"
}

createInfo()

infoObject.appendChild(objectOpen)
infoObject.appendChild(firstName)
infoObject.appendChild(lastName)
infoObject.appendChild(github)
infoObject.appendChild(objectClose)

container.appendChild(infoObject)