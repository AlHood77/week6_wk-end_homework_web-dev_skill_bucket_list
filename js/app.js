document.addEventListener('DOMContentLoaded', () => {

console.log('javascript loaded');

// target ul element in index.html
const skillList = document.querySelector('ul')


//target id of form container
const form = document.querySelector('#skill-list-form')



//add event listener to the submit buttom
form.addEventListener('submit', () => {
    //prevent form from submitting
    event.preventDefault();

 
    //create new list element
    const newSkillItem = document.createElement('li')

    // give new list element a class (css)
    newSkillItem.classList.add('skill-list-item')

    //create a h3 element
    const skill = document.createElement('h3')
    //grab input value entered by user
    skill.textContent = `${event.target.skill.value}`
    //append h3 element to li element
    newSkillItem.appendChild(skill);
    //append li elem to ul element
    skillList.appendChild(newSkillItem)

    //above process repeated for p and h4 element
    const reason = document.createElement('p')
    reason.textContent = `Reason: ${event.target.reason.value}`
    newSkillItem.appendChild(reason);
    skillList.appendChild(newSkillItem)

    const deadline = document.createElement('h4')
    deadline.textContent = `Deadline Set: ${event.target.date.value}`
    newSkillItem.appendChild(deadline);
    skillList.appendChild(newSkillItem);

    //add check button
    const completedSkill = document.createElement('input');
    // set to checkbox
    completedSkill.setAttribute("type", "checkbox");
    // add class to checkbox
    completedSkill.classList.add("skill-completed-checkbox");
    newSkillItem.appendChild(completedSkill);
    skillList.appendChild(newSkillItem);

    // add delete button
    const deleteSkill = document.createElement('button');
    deleteSkill.innerText = 'Delete';
    deleteSkill.classList.add("deleted-btn");
    newSkillItem.appendChild(deleteSkill);
    skillList.appendChild(newSkillItem);

   
   
    
    //Attempt to delete individial list item - so far only removes first item

    // target class of delete button
    const deleteItem = document.querySelector('.deleted-btn')
    
    // add listener on click
    deleteItem.addEventListener('click', (e) => {
        const item = e.target;
        if (item.classList.contains("deleted-btn")) {
            const delItem = item.parentElement;
            delItem.remove();
        };
    });

    const skillLearned = document.querySelector('.skill-completed-checkbox')

    skillLearned.addEventListener('click', (e) => {
        const item = e.target;
        if (item.classList[0] === "skill-completed-checkbox") {
            const check = item.parentElement;
            check.classlist.toggle('completed');
        }
    })
    

    form.reset();
});

    
    

    // newSkillItem.addEventListener("click", (e) => {
    //     const item = e.target;
    //     if (item.classList[0] === 'deleted-btn') {
    //         const listItem = item.parentElement
            
    //     } 
    // });

    
   
    

    //delete all list items within ul element
    const deleteAll = document.querySelector('#delete-all');
    deleteAll.addEventListener('click', () => {skillList.textContent = ''})

 
    


});

