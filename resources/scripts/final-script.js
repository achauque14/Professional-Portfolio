/* General elements*/
let buttonElement = document.getElementsByTagName('button')
let buttonIcon = document.getElementsByClassName('button-icon')
let headerLinks = document.getElementsByClassName("header-link")

let i = 0

/*Header variables*/
let header1 = document.getElementById('main-header')
let expandLink= document.getElementById('expand-link')
let projectsLink = document.getElementById('projects-link')
let summaryLink = document.getElementById('about-me-link')
let experienceLink = document.getElementById('experience-link')


/*experience and project variable*/
let experienceProjectsSection = document.getElementById('experience-projects-section')

/*Summary variables*/
let summarySection = document.getElementById('summary')
let summaryHeaderIcon = document.getElementById('summary-header-icon')
let summaryHeadline = document.getElementById('summary-headline')
let summaryP = document.getElementById('summary-p')
let summaryButton = document.getElementById('summaryButton')
let summaryExpandText = document.getElementById('summary-expand-text')
let summaryExpandIcon = document.getElementById('summary-expand-icon')
let summarySectionExpand = document.getElementById('summary-section-expanded')

/*Experience variables*/
let experienceSection = document.getElementById('experience')
let experienceTitleDiv = document.getElementById('experience-title-div')
let experienceHeaderIcon = document.getElementById('experience-header-icon')
let experienceHeadline = document.getElementById('experience-headline')
let experienceButton = document.getElementById('experienceButton')
let experienceExpandText = document.getElementById('experience-expand-text')
let experienceExpandIcon = document.getElementById('experience-expand-icon')
let experienceSectionExpand = document.getElementById('experience-section-expanded')

/*projects variables*/
let projectsSection = document.getElementById('projects')
let projectsTitleDiv = document.getElementById('projects-title-div')
let projectsHeadline = document.getElementById('projects-headline')
let projectsHeaderIcon = document.getElementById('projects-icon')
let projectsButton = document.getElementById('projectsButton')
let projectsExpandText = document.getElementById('projects-expand-text')
let projectsExpandIcon = document.getElementById('projects-expand-icon')
let projectsSectionExpand = document.getElementById('projects-section-expanded')
let projectLink1 = document.getElementsByClassName('projects-links')[0]
let projectLink2 = document.getElementsByClassName('projects-links')[1]
let projectLink3 = document.getElementsByClassName('projects-links')[2]
let sections = document.getElementsByTagName('section')

/*images paths*/
let darkPersonIconPath ="../resources/images/icons/person-dark.svg"
let lightPersonIconPath ="../resources/images/icons/person-light.svg"
let darkExperienceIconPath ="../resources/images/icons/experience-dark.svg"
let lightExperienceIconPath ="../resources/images/icons/experience-light.svg"
let darkProjectsIconPath ="../resources/images/icons/projects-dark.svg"
let lightProjectsIconPath ="../resources/images/icons/projects-light.svg"
let darkExpandIconPath ="../resources/images/icons/expand-dark.svg"
let lightExpandIconPath ="../resources/images/icons/expand-light.svg" 
let lightMinusIconPath = '../resources/images/icons/minus-light.svg'
let darkMinusIconPath = '../resources/images/icons/minus-dark.svg'

/*colors*/
let experienceBackgroundColor = '#eaeaea'
let projectsBackgroundColor = '#cecece'
let expandBackgroundColor = '#b5b5b5'
let mainBackgroundColor = '#1c1c1c'



function typingAnimation(){
    let speed = 50
    let sentence = "Hi! I'm Alan and welcome to my web portfolio."
    if (sentence.length>i){
        header1.textContent += sentence.charAt(i);
        i++
        setTimeout(typingAnimation, speed)
    }
}

typingAnimation()

function changeButtonText(button){
    let buttonText = button.lastChild;
    if (buttonText == 'Expand'){
        buttonText = 'Collapse'  
    }else{
        buttonText = 'Expand' 
    }
}
function changeButtonImage(button){
    let buttonImage = button.firstElementChild.src;
    switch (buttonImage){
        case lightExpandIconPath:
            buttonImage = lightMinusIconPath
            break;
        case darkExpandIconPath:
            buttonImage = darkMinusIconPath
            break;
        case lightMinusIconPath:
            buttonImage = lightExpandIconPath
            break;
        case darkMinusIconPath:
            buttonImage = darkExpandIconPath
            break;
    }
}

function changeDisplayStyle(section){
    if (section == experienceProjectsSection){
        experienceProjectsSection.style.display = 'block'
    }
}
function revertDisplayStyle(section){
    if (section == experienceProjectsSection){
        experienceProjectsSection.style.display = ''
    }
}
function expandContent(section){
    section.style.display = 'block';
}
function collapseContent(section){
    section.style.display = '';
}

function changeBackgroundColor(section){
    if (section == summarySection){
        section.style.backgroundColor = experienceBackgroundColor
    }else{
        section.style.backgroundColor = mainBackgroundColor
    }
}
function revertBackgroundColor(section){
    section.style.backgroundColor = ''
}

function expandSection(button){
    changeButtonText(button)
    changeButtonImage(button)    
    switch(button){
        case summaryButton:
            expandContent(summarySectionExpand)
            break;
        case experienceButton:
            changeDisplayStyle(experienceProjectsSection)
            expandContent(experienceSectionExpand)
            changeBackgroundColor(experienceSection)
            break;
        case projectsButton:
            changeDisplayStyle(experienceProjectsSection)
            expandContent(projectsSectionExpand)
            changeBackgroundColor(projectsSection)
            break;
    }
}
function collapseSection(button){
    changeButtonText(button)
    changeButtonImage(button)    
    switch(button){
        case summaryButton:
            collapseContent(summarySectionExpand)
            break;
        case experienceButton:
            changeDisplayStyle(experienceProjectsSection)
            collapseContent(experienceSectionExpand)
            revertBackgroundColor(experienceSection)
            break;
        case projectsButton:
            changeDisplayStyle(experienceProjectsSection)
            collapseContent(projectsSectionExpand)
            revertBackgroundColor(projectsSection)
            break;
    }
}

summaryButton.onclick = expandSection('summaryButton') 
experienceButton.onclick = expandSection('experienceButton') 
projectsButton.onclick = expandSection('projectsButton')

