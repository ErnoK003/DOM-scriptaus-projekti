var pluku=0
function addTask() {
    const task = document.getElementById('task').value  //haetaan input-kentän sisältö muuttujaan
    if (task == '' || task == " ") { //estetään tyhjän tehtävän lisäys
        alert('Please enter a task')
        document.getElementById('task').value = ''
        return
    }
    const uusitask = document.createElement('div') //uuden div-elementin luonti (saadaan nappi ja p-elementti saman divin alle)
    const uusip = document.createElement('p') //uuden p-elementin luonti
    uusip.setAttribute('id',pluku)
    uusip.innerHTML = task //lisätään p-elementtiin input-kentän sisältö
    const uusinappi = document.createElement('button') //uuden button-elementin luonti
    uusinappi.innerHTML = '✓' //lisätään button-elementtiin Done -teksti
    uusinappi.setAttribute('onclick', 'removeTask('+pluku+')') //laitetaan button poistamaan taski
    uusitask.appendChild(uusip) //lisätään p-elementti diviin
    uusitask.appendChild(uusinappi) //lisätään button-elementti p-elementin sisään
    document.getElementById('tasks').appendChild(uusitask) //lisätään uusitask diviin
    console.log(uusitask)
    document.getElementById('task').value = '' //tyhjennetään input-kenttä seuraavaa syötettä varten
    pluku+=1
    console.log(uusip.getAttribute('id'))
}

function enterdown() {
    if (event.key == 'Enter') {
        addTask()
    }
}

function removeTask(taskId) {
    const taskEle = document.getElementById(taskId).parentElement
    const taskReady = document.getElementById(taskId)
    taskEle.remove()
    taskDone = document.getElementById('donetasks')
    taskDone.appendChild(taskReady)

    const h2 = document.querySelector('h2')
    if (taskDone.children.length > 0) {
        h2.style.opacity = "100%";
    } else {
        h2.style.opacity = "0%";
    }
}
