console.log("Hey there!")

const contactInfo = {
    firstName: "Stenver",
    lastName: "Suurkütt",
    email: "hello@stenver.dev",
    github: ["circuitstan", "https://github.com/circuitstan"]
}

let keys = Object.keys(contactInfo)

function displayInfo() {
    document.querySelector('.open').textContent = "{"

    document.querySelector('.first-name').textContent = keys[0] + ": " + contactInfo.firstName
    document.querySelector('.last-name').textContent = keys[1] + ": " + contactInfo.lastName
    
    let email = document.querySelector('.email')
    email.textContent = keys[2] + ": "
    let emailLink = document.createElement('a')
    emailLink.href = "mailto:" + contactInfo.email
    emailLink.textContent = contactInfo.email
    email.appendChild(emailLink)

    let github = document.querySelector('.github')
    github.textContent = keys[3] + ": "
    let githubLink = document.createElement('a')
    githubLink.href = contactInfo.github[1]
    githubLink.textContent = contactInfo.github[0]
    github.appendChild(githubLink)

    document.querySelector('.close').textContent = "}"
}

displayInfo()
