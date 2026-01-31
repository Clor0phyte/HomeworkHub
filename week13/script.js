let note = []
let storage = {}
let btn = document.getElementById('btn')
let input = document.getElementById('input')
let noteList = document.getElementById('notelist')
let load = document.getElementById('load')
let save = document.getElementById('save')
let clear = document.getElementById('clear')

btn.addEventListener('click', function () {
  const value = input.value.trim()
  if (value === "") return  
  note.push(value)
  input.value = ""
  noteList.textContent = ""
  for (let i = 0; i < note.length; i++) {
    noteList.textContent += note[i] + "\n"
  }
})

function saveNotes() {
  const noteJSON = JSON.stringify(note)
  localStorage.setItem('notes', noteJSON)
}

save.addEventListener('click', saveNotes)

function loadNotes() {
  const storedNotes = localStorage.getItem('notes')
    if (storedNotes) {
        note = JSON.parse(storedNotes)
        noteList.textContent = ""
        for (let i = 0; i < note.length; i++) {
            noteList.textContent += note[i] + "\n"
        }
    }
}

load.addEventListener('click', loadNotes)

clear.addEventListener('click', function () {
    note = []
    noteList.textContent = ""
    localStorage.removeItem('notes')
})  



