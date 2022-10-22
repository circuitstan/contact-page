console.log("Hey there!")

const contactInfo = {
    firstName: "Stenver",
    lastName: "Suurkütt",
    email: "hello@stenver.dev",
    linkedin: ["stenver-suurkütt", "https://www.linkedin.com/in/stenver-suurk%C3%BCtt/"],
    github: ["circuitstan", "https://github.com/circuitstan"]
}

let keys = Object.keys(contactInfo)

function displayInfo() {
    document.querySelector('.open').textContent = "contactInfo = {"

    document.querySelector('.first-name').textContent = keys[0] + ": " + contactInfo.firstName
    document.querySelector('.last-name').textContent = keys[1] + ": " + contactInfo.lastName
    
    let email = document.querySelector('.email')
    email.textContent = keys[2] + ": "
    let emailLink = document.createElement('a')
    emailLink.href = "mailto:" + contactInfo.email
    emailLink.textContent = contactInfo.email
    email.appendChild(emailLink)

    let linkedin = document.querySelector('.linkedin')
    linkedin.textContent = keys[3] + ": "
    let linkedinLink = document.createElement('a')
    linkedinLink.href = contactInfo.linkedin[1]
    linkedinLink.textContent = contactInfo.linkedin[0]
    linkedin.appendChild(linkedinLink)

    let github = document.querySelector('.github')
    github.textContent = keys[4] + ": "
    let githubLink = document.createElement('a')
    githubLink.href = contactInfo.github[1]
    githubLink.textContent = contactInfo.github[0]
    github.appendChild(githubLink)

    document.querySelector('.close').textContent = "}"
}

displayInfo()
