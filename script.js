// let notesTitles = [];
// let notes = [];

// let archivNotesTitles = [];
// let archivNotes = [];

// let trashNotesTitles = [];
// let trashNotes = [];

let allNotes = {
  'notesTitles': ['Test Title 1', 'Test Title 2'],
  'notes': ['Test Notiz 1', 'Test Notiz 2'],
  'archivNotesTitles': [],
  'archivNotes': [],
  'trashNotesTitles': [],
  'trashNotes': []
}

function moveNote(indexNote, startKey, destinationKey) {
  let note = allNotes[startKey].splice(indexNote, 1);
  allNotes[destinationKey].push(note[0]);
  let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
  allNotes[destinationKey + "Titles"].push(notesTitle[0]);
}

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

function renderAllNotes() {
  renderNotes();
  renderArchivNotes();
  renderTrashNotes();
}

function renderNotes(){
  let contentRef = document.getElementById('content')
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderArchivNotes(){
  let archivContentRef = document.getElementById('archiv-content')
  archivContentRef.innerHTML = "";
  for (let indexArchivNote = 0; indexArchivNote < allNotes.archivNotes.length; indexArchivNote++) {
    archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
  }
}

function renderTrashNotes(){
  let trashContentRef = document.getElementById('trash-content')
  trashContentRef.innerHTML = "";
  for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
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

  renderAllNotes();
  
  noteInputRef.value = ""; 
  titleInputRef.value = ""; 
}

function deleteNote(indexTrashNote) {
  allNotes.trashNotes.splice(indexTrashNote, 1);
  allNotes.trashNotesTitles.splice(indexTrashNote, 1);
  
  renderAllNotes();
}

