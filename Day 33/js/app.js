// Script Goes Here...
const add = document.getElementById("add");
const delAll = document.querySelector('.delAll')
const notes = document.querySelector(".notes");

const savedNotes = JSON.parse(localStorage.getItem('notes'))
if(savedNotes){
    savedNotes.forEach(savedNote => addNewNote(savedNote))
}

add.addEventListener("click", () => addNewNote(''));

function addNewNote(text) {
  const newNote = document.createElement("div");
  newNote.classList.add("note");

  newNote.innerHTML = `
    <div class="tools">
        <button class="edit tool" id="edit">
        <i class="fas ${text ? 'fa-edit': 'fa-save'}"></i>
        </button>

        <button class="del tool" id="del">
        <i class="fas fa-trash-alt"></i>
        </button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;
  notes.append(newNote);

  const edit = newNote.querySelector("#edit");
  const del = newNote.querySelector("#del");
  const main = newNote.querySelector(".main");
  const textArea = newNote.querySelector("textarea");

  edit.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");

    const editIcon = newNote.querySelector(".edit i");

    if (editIcon.classList.contains("fa-edit")) {
      editIcon.classList.remove("fa-edit");
      editIcon.classList.add("fa-save");
    } else {
      editIcon.classList.remove("fa-save");
      editIcon.classList.add("fa-edit");
    }
  });

  del.addEventListener("click", () => {
    newNote.remove();
    updateLocal()
  });

  main.innerHTML = text
  textArea.value = text

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = value

    updateLocal()
  });
}

function updateLocal(){
    const allNotes = document.querySelectorAll('textarea')

    let noteList = []

    allNotes.forEach(note => noteList.push(note.value))

    localStorage.setItem('notes', JSON.stringify(noteList))
}
delAll.addEventListener('click', ()=> {
    const items = document.querySelectorAll('.note')
    if(items){
        items.forEach(item => item.remove())
    }
    localStorage.removeItem('notes')

})
