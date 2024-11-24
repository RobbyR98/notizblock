let notesTitles = [];
let notes = [];

let archivNotesTitles = [];
let archivNotes = [];

let trashNotesTitles = [];
let trashNotes = [];

function alertEmptyInput() {
  const titleInput = document.getElementById('title-input').value.trim();
  const noteInput = document.getElementById('note-input').value.trim();
  const alertElement = document.getElementById('alert-empty-input');

  if (titleInput === "" || noteInput === "") {
    alertElement.classList.remove('displayNone'); 
    alertElement.textContent = "Please enter a title and note!"; 
  } else {
    alertElement.classList.add('displayNone');
  }
}

function renderNotes(){
  let contentRef = document.getElementById('content')
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderArchivNotes(){
  let archivContentRef = document.getElementById('archiv-content')
  archivContentRef.innerHTML = "";
  for (let indexArchivNote = 0; indexArchivNote < archivNotes.length; indexArchivNote++) {
    archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
  }
}

function renderTrashNotes(){
  let trashContentRef = document.getElementById('trash-content')
  trashContentRef.innerHTML = "";
  for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}
  
function addNote() {  
  let noteInputRef = document.getElementById('note-input'); 
  let noteInput = noteInputRef.value;

  let titleInputRef = document.getElementById('title-input');
  let titleInput = titleInputRef.value;

  if (noteInput == "" || titleInput == "") {
    return;
  }

  notes.push(noteInput);
  notesTitles.push(titleInput);
  saveToLocalStorage();
  renderNotes();
  noteInputRef.value = ""; 
  titleInputRef.value = ""; 
}

function noteFromArchivToNotes(indexArchivNote) {
  let archivNote = archivNotes.splice(indexArchivNote, 1);
  notes.push(archivNote[0]);
  let archivNotesTitle = archivNotesTitles.splice(indexArchivNote, 1);
  notesTitles.push(archivNotesTitle[0]);
  renderNotes();
  renderArchivNotes();
  renderTrashNotes();
}

function noteFromTrashToNotes(indexTrashNote) {
  let trashNote = trashNotes.splice(indexTrashNote, 1);
  notes.push(trashNote[0]);
  let trashNotesTitle = trashNotesTitles.splice(indexTrashNote, 1);
  notesTitles.push(trashNotesTitle[0]);
  renderNotes();
  renderArchivNotes();
  renderTrashNotes();
}

function noteToArchiv(indexArchivNote) {
  let archivNote = notes.splice(indexArchivNote, 1);
  archivNotes.push(archivNote[0]);
  let archivNotesTitle = notesTitles.splice(indexArchivNote, 1);
  archivNotesTitles.push(archivNotesTitle[0]);
  renderNotes();
  renderArchivNotes();
  renderTrashNotes();
}

function noteFromArchivToTrash(indexArchivNote) {
  let trashNote = archivNotes.splice(indexArchivNote, 1);
  trashNotes.push(trashNote[0]);
  let trashNotesTitle = archivNotesTitles.splice(indexArchivNote, 1);
  trashNotesTitles.push(trashNotesTitle[0]);
  renderNotes();
  renderArchivNotes();
  renderTrashNotes();
}

function noteToTrash(indexTrashNote) {
  let trashNote = notes.splice(indexTrashNote, 1);
  trashNotes.push(trashNote[0]);
  let trashNotesTitle = notesTitles.splice(indexTrashNote, 1);
  trashNotesTitles.push(trashNotesTitle[0]);
  renderNotes();
  renderArchivNotes();
  renderTrashNotes();
}

function deleteNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  trashNotesTitles.splice(indexTrashNote, 1);
  renderNotes();
  renderArchivNotes();
  renderTrashNotes();
}

function saveToLocalStorage(){
  localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
}


function getFromLocalStorage() {
  let myArr = JSON.parse(localStorage.getItem("notesTitles"));

  if (myArr === null) {
    notesTitles = myArr;
  } 
}
