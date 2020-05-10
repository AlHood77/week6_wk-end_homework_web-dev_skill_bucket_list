document.addEventListener('DOMContentLoaded', () => {

console.log('javascript loaded');

const skillList = document.querySelector('ul')

const form = document.querySelector('#skill-list-form')
form.addEventListener('submit', () => {
    event.preventDefault();

    
    
    const newSkillItem = document.createElement('li')
    newSkillItem.classList.add('skill-list-item')
    const spanDelete = document.createElement("span");
    spanDelete.innerHTML = "&times;";
    spanDelete.setAttribute("id", "deleteItem")
    newSkillItem.appendChild(spanDelete);
    skillList.appendChild(newSkillItem)

    // const deleteItem = document.querySelector('#deleteItem');
    // deleteItem.addEventListener('click', () => {newSkillItem.parentElement.remove()})
    const deleteItem = document.querySelector('#deleteItem');
    deleteItem.addEventListener('click', () => {
        const listItem = this.parentNode;
        const ul = listItem.parentNode;

        ul.removeChild(listItem)
    })
   

    const skill = document.createElement('h3')
    skill.textContent = `${event.target.skill.value}`
    newSkillItem.appendChild(skill);
    skillList.appendChild(newSkillItem)

    const reason = document.createElement('p')
    reason.textContent = `Reason: ${event.target.reason.value}`
    newSkillItem.appendChild(reason);
    skillList.appendChild(newSkillItem)

    const deadline = document.createElement('h4')
    deadline.textContent = `Deadline Set: ${event.target.date.value}`
    newSkillItem.appendChild(deadline);
    skillList.appendChild(newSkillItem)
    
    
   

    form.reset();
});




    
    
    const deleteAll = document.querySelector('#delete-all');
    deleteAll.addEventListener('click', () => {skillList.textContent = ''})

 
    


});

