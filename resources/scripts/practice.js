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


/*let isDark = false
function applyTheme(section){
    if (isDark){
        switch(section){
            case 'projects':
                break;
            case 'experience':
                break;
            case 'projects':
                break
        }
    }else{
        switch(section){
            case 'projects':
                break;
            case 'experience':
                break;
            case 'projects':
                break
        }
    }
}

function linkHoverBackground(link) {
    const targetElement = link.target;
    if(targetElement == headerLinks[0]){
        targetElement.style.backgroundColor = '#eaeaea';
    }else {
       targetElement.style.backgroundColor = mainBackgroundColor;
    }
}
function restorelinkHoverBackground(event) {
    const targetElement = event.target;
    targetElement.style.backgroundColor = '';
}
function changeLightIconSrc(element) {
    const targetElement = element.target;
    const oldSrc = targetElement.src;
    const newSrc = oldSrc.replace(/light/, 'dark');
    targetElement.src = newSrc;
}
function changeDarkIconSrc(element) {
    const targetElement = element.target;
    const oldSrc = targetElement.src;
    const newSrc = oldSrc.replace(/dark/, 'light');
    targetElement.src = newSrc;
}
function addStyleChangeEvent(section) {
    section.addEventListener('mouseover', linkHoverBackground);
    section.addEventListener('mouseout', restorelinkHoverBackground);
    section.addEventListener('mouseover', changeDarkIconSrc);
    section.addEventListener('mouseout', changeLightIconSrc);
}
for (let i = 0; i < headerLinks.length; i++) {
    addStyleChangeEvent(headerLinks[i]);
}
*/
function typingAnimation(){
    let speed = 75
    let sentence = "Hi! I'm Alan and welcome to my web portfolio."
    if (sentence.length>i){
        header1.textContent += sentence.charAt(i);
        i++
        setTimeout(typingAnimation, speed)
    }
}
typingAnimation()

/*function changeButtonIconSrc(element){
    let targetElement = element.target
    let icon = targetElement.firstElementChild
    const oldSrc = targetElement.src;
    let iconSrc = icon.src;
    if(oldSrc.includes('dark')){
       newSrc.src = iconSrc.replace(/dark/, 'light');
    } else {
        newSrc.src = iconSrc.replace(/light/, 'dark');
    }
}


function returnButtonIconSrc(element){
    let targetElement = element.target
    let icon = targetElement.children[0]
    icon.src.includes('light') ? changeLightIconSrc:changeDarkIconSrc ;
}

for (let i = 0; buttonElement.length > i; i++){
    buttonElement[i].addEventListener('mouseout', changeButtonIconSrc);

function toggleSectionStyle(section, lightIconPath, darkIconPath, backgroundColor) {
    const headerIcon = section.querySelector('img');
    const headline = section.querySelector('h4');
    const button = section.querySelector('button');
    const buttonText = button.querySelector('h4');
    const buttonIcon = button.querySelector('img');

    if (section.style.backgroundColor === backgroundColor) {
        headerIcon.src = lightIconPath;
        headline.style.color = '#eaeaea';
        button.style.backgroundColor = '#1c1c1c';
        buttonText.style.color = '#eaeaea';
        buttonText.textContent = 'Expand';
        buttonIcon.src = lightExpandIconPath;
    } else {
        headerIcon.src = darkIconPath;
        headline.style.color = '#1c1c1c';
        button.style.backgroundColor = backgroundColor;
        buttonText.style.color = '#1c1c1c';
        buttonText.textContent = 'Collapse';
        buttonIcon.src = lightMinusIconPath;
    }
}

function updateSectionStyle(section) {
    switch (section.id) {
        case 'summary':
            toggleSectionStyle(section, lightPersonIconPath, darkPersonIconPath, mainBackgroundColor);
            break;
        case 'projects':
            toggleSectionStyle(section, lightProjectsIconPath, darkProjectsIconPath, projectsBackgroundColor);
            break;
        case 'experience':
            toggleSectionStyle(section, lightExperienceIconPath, darkExperienceIconPath, experienceBackgroundColor);
            break;
        }        
    }

function expand(section){
    switch(section){
        case summarySectionExpand:
            if (summarySectionExpand.style.display == 'none'){
                summarySectionExpand.style.transition = '0.8s'
                summarySectionExpand.style.display = 'block'
                if(projectsSectionExpand.style.display != 'none'){
                    projectsSectionExpand.style.display = 'none'
                    updateSectionStyle(projectsSection)
                }
                if(experienceSectionExpand.style.display != 'none'){
                    experienceSectionExpand.style.display = 'none'
                    updateSectionStyle(experienceSection)
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
                    updateSectionStyle(summarySection)
                }
                if(projectsSectionExpand.style.display != 'none'){
                    projectsSectionExpand.style.display = 'none'
                    updateSectionStyle(projectsSection)
                }
                experienceButton.children[1].innerHTML = 'Collapse'
                experienceButton.children[0].src = darkMinusIconPath
                experienceSectionExpand.style.display = 'block'
                experienceProjectsSection.style.display = 'block'
                experienceSection.style.width = '90%';
                projectsSection.style.width = '90%';
                break;
            }else{
                experienceButton.children[1].innerHTML = 'Expand'
                experienceButton.children[0].src = lightExpandIconPath
                experienceSectionExpand.style.display = 'none'
                experienceProjectsSection.style.display = 'flex'
                experienceSection.style.width = '35%';
                projectsSection.style.width = '35%';
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
                break;
            }else{
                projectsButton.children[1].innerHTML = 'Expand'
                projectsButton.children[0].src = lightExpandIconPath
                projectsSectionExpand.style.display = 'none'
                projectsSection.style.width = '35%';
                experienceSection.style.width = '35%';
                experienceProjectsSection.style.display = 'flex'
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
                for (i=0; i<buttonElement.length; i++){
                    buttonElement[i].children[1].innerHTML = 'Expand'
                    buttonElement[i].children[1].style.color= '#eaeaea' 
                    buttonElement[i].children[0].src = lightExpandIconPath
                    buttonElement[i].style.backgroundColor = 'rgb(61, 61, 61)'
                } 
            }
    }
}
summaryButton.onclick = expand(summarySectionExpand) 
experienceButton.onclick = expand(experienceSectionExpand) 
projectsButton.onclick = expand(projectsSectionExpand) 

*/