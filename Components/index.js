const txtInput = document.querySelector('.txt-input')

const btnInput = document.querySelector('.btn-input')

const listApp = document.querySelector('.list-app')



btnInput.addEventListener('click', addTask)

function addTask () {
    event.preventDefault()

    const listContainter = document.createElement('div')
    listContainter.classList.add('list-container')

    const addList = document.createElement('li')
    listContainter.classList.add('add-List')
    addList.innerText = txtInput.value 
    txtInput.value = ''

    listContainter.appendChild(addList)


    const doneBtn = document.createElement('button')
    doneBtn.innerHTML = '<span class="material-icons-outlined">done</span>'
    listContainter.classList.add('done-btn')
    listContainter.appendChild(doneBtn)

    listApp.appendChild(listContainter)

    doneBtn.addEventListener('click', () => {


        if (addList.hasAttribute('id', 'completed-task')) {
            addList.removeAttribute('id', 'completed-task')
        }
        else {
            addList.setAttribute('id', 'completed-task')
        }
})

}