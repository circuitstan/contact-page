console.log("Hey there!")

const contactInfo = {
    firstName: "Stenver",
    lastName: "Suurkütt",
    email: "hello@stenver.dev",
    linkedIn: ["stenver-suurkütt", "https://www.linkedin.com/in/stenver-suurk%C3%BCtt/"],
    gitHub: ["circuitstan", "https://github.com/circuitstan"]
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

    let linkedIn = document.querySelector('.linkedin')
    linkedIn.textContent = keys[3] + ": "
    let linkedInLink = document.createElement('a')
    linkedInLink.href = contactInfo.linkedIn[1]
    linkedInLink.textContent = contactInfo.linkedIn[0]
    linkedIn.appendChild(linkedInLink)

    let gitHub = document.querySelector('.github')
    gitHub.textContent = keys[4] + ": "
    let gitHubLink = document.createElement('a')
    gitHubLink.href = contactInfo.gitHub[1]
    gitHubLink.textContent = contactInfo.gitHub[0]
    gitHub.appendChild(gitHubLink)

    document.querySelector('.close').textContent = "}"
}

displayInfo()
