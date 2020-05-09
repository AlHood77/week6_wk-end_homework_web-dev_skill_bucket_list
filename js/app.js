document.addEventListener('DOMContentLoaded', () => {

console.log('javascript loaded');

const skillList = document.querySelector('ul')

const form = document.querySelector('#skill-list-form')
form.addEventListener('submit', () => {
    event.preventDefault();

    
    
    const newSkillItem = document.createElement('li')
    newSkillItem.classList.add('skill-list-item')

    const skill = document.createElement('h2')
    skill.textContent = `${event.target.skill.value}`
    newSkillItem.appendChild(skill);
    skillList.appendChild(newSkillItem)

    const reason = document.createElement('p')
    reason.textContent = `Reason: ${event.target.reason.value}`
    newSkillItem.appendChild(reason);
    skillList.appendChild(newSkillItem)

    const deadline = document.createElement('h3')
    deadline.textContent = `Deadline Set: ${event.target.date.value}`
    newSkillItem.appendChild(deadline);
    skillList.appendChild(newSkillItem)

    form.reset();
});
    
    
    const deleteAll = document.querySelector('#delete-all');
    deleteAll.addEventListener('click', () => {skillList.textContent = ''})


    


});

