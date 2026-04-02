/* General elements*/
let buttonElement = document.getElementsByTagName('button')
let buttonIcon = document.getElementsByClassName('button-icon')

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

/*Header functions*/
function typingAnimation(){
    let speed = 50
    let sentence = "Hi! I'm Alan and welcome to my web portfolio."
    if (sentence.length>i){
        header1.textContent += sentence.charAt(i);
        i++
        setTimeout(typingAnimation, speed)
    }
}typingAnimation()

/*Styling functions*/

function changeBackgroundColorToBlack(section){
    section.style.backgroundColor = '#1c1c1c'
}
function changeBackgroundColor(section){
    if (section == experienceSection){
        experienceSection.style.backgroundColor = experienceBackgroundColor;
    }else if (section == projectsSection){
        projectsSection.style.backgroundColor = projectsBackgroundColor;
    }else if (section==summarySection && (projectsSection.style.backgroundColor != projectsBackgroundColor || experienceSection.style.backgroundColor != experienceBackgroundColor)){
        summarySection.style.backgroundColor = experienceBackgroundColor
    }
}

function changeSectionStyle(section){
    switch(section){
        case summarySection:
            if(summarySection.style.backgroundColor == mainBackgroundColor){
                summaryHeaderIcon.src = lightPersonIconPath
                summaryHeadline.style.color = '#eaeaea'
                summaryButton.style.backgroundColor = 'rgb(61, 61, 61)'
                summaryExpandText.style.color='#eaeaea'
                summaryExpandText.textContent = 'Expand'
                summaryExpandIcon.src = lightExpandIconPath
                break; 
            }else{
                summaryHeaderIcon.src = darkPersonIconPath
                summaryHeadline.style.color = '#1c1c1c'
                summaryButton.style.backgroundColor = mainBackgroundColor
                summaryExpandText.style.color='#1c1c1c'
                summaryExpandIcon.src = darkCollapseIconPath
                summaryExpandText.textContent = 'Collapse'
                break;
            }
        case projectsSection:
            if(projectsSection.style.backgroundColor == projectsBackgroundColor){
                projectsHeaderIcon.src = lightProjectsIconPath
                projectsHeadline.style.color = '#1c1c1c'
                projectsButton.style.backgroundColor = mainBackgroundColor
                projectsExpandText.style.color='#1c1c1c'
                projectsExpandText.textContent = 'Expand'
                projectsExpandIcon.src = darkExpandIconPath
                experienceSection.style.width = '90%';
                projectsSection.style.width = '90%';
                break;
            }else{
              projectsHeaderIcon.src = lightProjectsIconPath
                projectsHeadline.style.color = '#eaeaea'
                projectsExpandText.style.color='#eaeaea'
                projectsExpandIcon.src = lightMinusIconPath
                projectsExpandText.textContent = 'Collapse'
                projectsButton.style.backgroundColor = projectsBackgroundColor
                experienceSection.style.width = '35%';
                projectsSection.style.width = '35%';
            break;  
            }
        case experienceSection:
            if(experienceSection.style.backgroundColor == experienceBackgroundColor){
                experienceHeadline.style.color = '#1c1c1c'
                experienceHeaderIcon.src = lightExperienceIconPath
                experienceButton.style.backgroundColor = experienceBackgroundColor
                experienceExpandText.style.color='#1c1c1c'
                experienceExpandText.textContent = 'Expand'
                experienceExpandIcon.src = darkExpandIconPath
                experienceSection.style.width = '90%';
                projectsSection.style.width = '90%';
            break;
            }else{
                experienceHeadline.style.color = '#eaeaea'
                experienceHeaderIcon.src = lightExperienceIconPath
                experienceButton.style.backgroundColor = '#1c1c1c'
                experienceExpandText.style.color='#eaeaea'
                experienceExpandText.textContent = 'Collapse'
                experienceExpandIcon.src = lightMinusIconPath
                experienceSection.style.width = '35%';
                projectsSection.style.width = '35%';
            break;
            }
        }
    }
/*functionality functions*/
function expand(section){
    switch(section){
        case summarySectionExpand:
            if (summarySectionExpand.style.display == 'none'){
                summarySectionExpand.style.transition = '0.8s'
                summarySectionExpand.style.display = 'block'
                if(projectsSectionExpand.style.display != 'none'){
                    projectsSectionExpand.style.display = 'none'
                    projectsButton.children[1].innerHTML = 'Expand'
                    projectsButton.children[0].src = lightExpandIconPath
                }
                if(experienceSectionExpand.style.display != 'none'){
                    experienceSectionExpand.style.display = 'none'
                    experienceButton.children[1].innerHTML = 'Expand'
                    experienceButton.children[0].src = lightExpandIconPath
                }
                summaryButton.children[1].innerHTML = 'Collapse'
                summaryButton.children[0].src = darkMinusIconPath
                summarySectionExpand.style.height = '100%'
            }else{
                summaryButton.children[1].innerHTML = 'Expand'
                summaryButton.children[0].src = lightExpandIconPath
                summarySectionExpand.style.display = 'none'
                break; 
            }
            break;
        case experienceSectionExpand:
            if(experienceSectionExpand.style.display == 'none'){
                experienceSection.style.transition = '0.6s'
                experienceProjectsSection.style.transition = '0.6s'
                summarySection.style.transition = '0.8s'
                projectsSection.style.transition = '0.8s'
                if(summarySectionExpand.style.display != 'none'){
                    summarySectionExpand.style.display = 'none'
                    summaryButton.children[1].innerHTML = 'Expand'
                    summaryButton.children[0].src = lightExpandIconPath
                }
                if(projectsSectionExpand.style.display != 'none'){
                    projectsSectionExpand.style.display = 'none'
                    projectsButton.children[1].innerHTML = 'Expand'
                    projectsButton.children[0].src = lightExpandIconPath
                }
                experienceButton.children[1].innerHTML = 'Collapse'
                experienceButton.children[0].src = darkMinusIconPath
                experienceSectionExpand.style.display = 'block'
                experienceProjectsSection.style.display = 'block'
                experienceSection.style.width = '90%';
                projectsSection.style.width = '90%';
                changeBackgroundColor(experienceSection)
                changeSectionStyle(experienceSection)
                break;
            }else{
                experienceButton.children[1].innerHTML = 'Expand'
                experienceButton.children[0].src = lightExpandIconPath
                experienceSectionExpand.style.display = 'none'
                experienceProjectsSection.style.display = 'flex'
                experienceSection.style.width = '35%';
                projectsSection.style.width = '35%';
                changeBackBackgroundColor(experienceSection)
                changeSectionStyle(experienceSection)
                break;
            }
        case projectsSectionExpand:
            if(projectsSectionExpand.style.display == 'none'){
                projectsButton.children[1].innerHTML = 'Collapse'
                experienceSection.style.transition = '0.6s'
                summarySection.style.transition = '0.8s'
                projectsSection.style.transition = '0.8s'
                projectsButton.children[0].src = darkMinusIconPath
                projectsSection.style.width = '90%';
                experienceSection.style.width = '90%';
                projectsSectionExpand.style.display = 'block'
                experienceProjectsSection.style.display = 'block'
                if(summarySectionExpand.style.display != 'none'){
                    summarySectionExpand.style.display = 'none'
                    summaryButton.children[1].innerHTML = 'Expand'
                    summaryButton.children[0].src = lightExpandIconPath
                }
                if(experienceSectionExpand.style.display != 'none'){
                    experienceSectionExpand.style.display = 'none'
                    experienceButton.children[1].innerHTML = 'Expand'
                    experienceButton.children[0].src = lightExpandIconPath
                }
                changeBackgroundColor(projectsSection)
                changeSectionStyle(projectsSection)
                break;
            }else{
                projectsButton.children[1].innerHTML = 'Expand'
                projectsButton.children[0].src = lightExpandIconPath
                projectsSectionExpand.style.display = 'none'
                projectsSection.style.width = '35%';
                experienceSection.style.width = '35%';
                experienceProjectsSection.style.display = 'flex'
                changeBackBackgroundColor(projectsSection)
                changeSectionStyle(projectsSection)
                break;
            }
        case 'all':
            if(summarySectionExpand.style.display == 'none' || experienceSectionExpand.style.display == 'none' || projectsSectionExpand.style.display == 'none' ){
                summarySectionExpand.style.display = 'block'
                projectsSectionExpand.style.display = 'block'
                experienceSectionExpand.style.display = 'block'
                experienceProjectsSection.style.display = 'block'
                projectsSection.style.width = '95%';
                experienceSection.style.width = '95%';
                changeBackgroundColor(summarySection)
                changeBackgroundColor(experienceSection)
                changeBackgroundColor(projectsSection)
                for (i=0; i<buttonElement.length; i++){
                    buttonElement[i].children[1].innerHTML = 'collapse'
                    buttonElement[i].children[1].style.color= '#eaeaea' 
                    buttonElement[i].children[0].src = lightMinusIconPath
                    buttonElement[i].style.backgroundColor = mainBackgroundColor
                } 
            }else{
                summarySectionExpand.style.display = 'none'
                projectsSectionExpand.style.display = 'none'
                experienceSectionExpand.style.display = 'none'
                experienceProjectsSection.style.display = 'flex'
                projectsSection.style.width = '35%';
                experienceSection.style.width = '35%';
                changeBackBackgroundColor(experienceSection)
                changeBackBackgroundColor(projectsSection)
                changeSectionStyle(experienceSection)
                changeSectionStyle(projectsSection)
                for (i=0; i<buttonElement.length; i++){
                    buttonElement[i].children[1].innerHTML = 'Expand'
                    buttonElement[i].children[1].style.color= '#eaeaea' 
                    buttonElement[i].children[0].src = lightExpandIconPath
                    buttonElement[i].style.backgroundColor = 'rgb(61, 61, 61)'
                } 
            }
            

    }
}


function changeImg(imagePath){
    switch(imagePath){
    case lightPersonIconPath:
        summaryLink.style.transition = '0.8s'
        summaryLink.src = darkPersonIconPath;
        summaryLink.style.backgroundColor = '#eaeaea';
        break;
     case darkExperienceIconPath:
        experienceLink.style.transition = '0.8s'
        experienceLink.src = lightExperienceIconPath;
        experienceLink.style.backgroundColor = '#1c1c1c';
        break;
    case darkProjectsIconPath:
        projectsLink.style.transition = '0.8s' 
        projectsLink.src = lightProjectsIconPath;
        projectsLink.style.backgroundColor = '#1c1c1c';
        break;
    case darkExpandIconPath:
        expandLink.style.transition = '0.8s'
        expandLink.src = lightExpandIconPath;
        expandLink.style.backgroundColor = '#1c1c1c';
        break;
    case darkPersonIconPath:
        summaryLink.style.transition = '0.8s'
        summaryLink.src = lightPersonIconPath;
        summaryLink.style.backgroundColor = '#1c1c1c';
        break;
    case lightExperienceIconPath:
        experienceLink.style.transition = '0.8s'
        experienceLink.src = darkExperienceIconPath;
        experienceLink.style.backgroundColor = '#eaeaea';
        break;
    case lightProjectsIconPath:
        projectsLink.style.transition = '0.8s'
        projectsLink.src = darkProjectsIconPath;
        projectsLink.style.backgroundColor = '#cecece';
        break;
    case lightExpandIconPath:
        expandLink.style.transition = '0.8s'
        expandLink.src = darkExpandIconPath;
        expandLink.style.backgroundColor = '#b5b5b5';
        break;
    default:
        console.log('error')
        break;
    }
}

function changeButtonImg(buttonImagePath){
    for (i=0; ButtonIcon.length > i; i++){
        switch(buttonImagePath){
            case darkExpandIconPath:
                buttonIcon[i].src = lightExpandIconPath;
                break;
            case lightExpandIconPath:
                buttonIcon[i].src = darkExpandIconPath;
                break;
            case lightminusIconPath:
                buttonIcon[i].src = darkExpandIconPath;
                break;
            case darkMinusIconPath:
                buttonIcon[i].src = darkExpandIconPath;
                break;
            default:
                console.log('error')
                break;
        }
    }
}
summarySectionExpand.onclick = expand(summarySectionExpand) 
experienceSectionExpand.onclick = expand(experienceButton)
experienceSectionExpand.onclick = expand(projectsButton)

summaryLink.addEventListener('mouseover', changeImg)
experienceLink.addEventListener('mouseover', changeImg)
projectsLink.addEventListener('mouseover', changeImg)
expandLink.addEventListener('mouseover', changeImg)

summaryLink.addEventListener('mouseout', changeImg)
experienceLink.addEventListener('mouseut', changeImg)
projectsLink.addEventListener('mouseout', changeImg)
expandLink.addEventListener('mouseout', changeImg)

for(let i= 0; buttonElement.length> i; i++){
    buttonElement[i].addEventListener('mouseover', changeButtonImg)
    buttonElement[i].addEventListener('mouseout', changeButtonImg)
}
