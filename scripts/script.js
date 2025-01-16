function renderAllNotes() {
  getFromLocalStorage();
  renderNotes();
}

function hideAllSections() {
  document.getElementById('content').classList.remove('show');
  document.getElementById('archiv-content').classList.remove('show');
  document.getElementById('trash-content').classList.remove('show');
}

function moveNote(indexNote, startKey, destinationKey) {
  if (allNotes[startKey] && allNotes[destinationKey]) {
    let note = allNotes[startKey].splice(indexNote, 1)[0];
    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1)[0];
    allNotes[destinationKey].push(note);
    allNotes[destinationKey + "Titles"].push(notesTitle);
    saveToLocalStorage();
    if (startKey === "archivNotes") {
      renderArchivNotes();
    } else if (startKey === "trashNotes") {
      renderTrashNotes();
    } else if (startKey === "notes") {
      renderNotes();
    }
  }
}

function renderNotes() {
  hideAllSections();
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
  contentRef.classList.add('show');
}

function renderArchivNotes() {
  hideAllSections();
  let archivContentRef = document.getElementById('archiv-content');
  archivContentRef.innerHTML = "";
  for (let indexArchivNote = 0; indexArchivNote < allNotes.archivNotes.length; indexArchivNote++) {
    archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
  }
  archivContentRef.classList.add('show');
}

function renderTrashNotes() {
  hideAllSections();
  let trashContentRef = document.getElementById('trash-content');
  trashContentRef.innerHTML = "";
  for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
  trashContentRef.classList.add('show');
}

function addNote() {  
  let noteInputRef = document.getElementById('note-input'); 
  let noteInput = noteInputRef.value;
  let titleInputRef = document.getElementById('title-input');
  let titleInput = titleInputRef.value;
  if (noteInput == "" || titleInput == "") {
    return;
  }
  allNotes.notes.push(noteInput);
  allNotes.notesTitles.push(titleInput);
  saveToLocalStorage();
  renderNotes();
  noteInputRef.value = ""; 
  titleInputRef.value = ""; 
}

function deleteNote(indexTrashNote) {
  allNotes.trashNotes.splice(indexTrashNote, 1);
  allNotes.trashNotesTitles.splice(indexTrashNote, 1);
  saveToLocalStorage();
  renderTrashNotes();
}