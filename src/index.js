console.log("hello circuitstan!")

const container = document.getElementById('container')

let infoObject = document.createElement('div')
let objectOpen = document.createElement('p')
let objectClose = document.createElement('p')
let infoContent = document.createElement('div')
let firstName = document.createElement('p')
let lastName = document.createElement('p')
let email = document.createElement('p')
let emailLink = document.createElement('a')
let emailDiv = document.createElement('div')
let github = document.createElement('p')
let githubLink = document.createElement('a')
let githubDiv = document.createElement('div')

infoObject.className = "info"
infoContent.className = "info-content"
emailDiv.className = "email"
githubDiv.className = "github"


function createInfo() {
    objectOpen.textContent = "{"

    firstName.textContent = "firstName: \"Stenver\""
    lastName.textContent = "lastName: \"Suurkütt\""

    email.textContent = "email: "
    emailLink.href = "mailto:hello@stenver.dev"
    let mailAadress = document.createTextNode("hello@stenver.dev")
    emailLink.appendChild(mailAadress)

    github.textContent = "gitHub: "
    githubLink.href = "https://github.com/circuitstan"
    let gitUser = document.createTextNode("circuitstan")
    githubLink.appendChild(gitUser)

    objectClose.textContent += "}"
}

createInfo()

infoContent.appendChild(firstName)
infoContent.appendChild(lastName)

emailDiv.appendChild(email)
emailDiv.appendChild(emailLink)
githubDiv.appendChild(github)
githubDiv.appendChild(githubLink)
infoContent.appendChild(emailDiv)
infoContent.appendChild(githubDiv)

infoObject.appendChild(objectOpen)
infoObject.appendChild(infoContent)
infoObject.appendChild(objectClose)

container.appendChild(infoObject)