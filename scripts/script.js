/**
 * Renders all notes from local storage and displays them.
 */
function renderAllNotes() {
  getFromLocalStorage();
  renderNotes();
}

/**
 * Hides all note sections (content, archive, and trash).
 */
function hideAllSections() {
  document.getElementById('content').classList.remove('show');
  document.getElementById('archiv-content').classList.remove('show');
  document.getElementById('trash-content').classList.remove('show');
}


/**
 * Moves a note from one section to another and updates the UI.
 * 
 * @param {number} indexNote - The index of the note to move.
 * @param {string} startKey - The source section key (e.g., "notes").
 * @param {string} destinationKey - The destination section key (e.g., "archivNotes").
 */
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

/**
 * Renders the notes section.
 */
function renderNotes() {
  hideAllSections();
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
  contentRef.classList.add('show');
}

/**
 * Renders the archive notes section.
 */
function renderArchivNotes() {
  hideAllSections();
  let archivContentRef = document.getElementById('archiv-content');
  archivContentRef.innerHTML = "";
  for (let indexArchivNote = 0; indexArchivNote < allNotes.archivNotes.length; indexArchivNote++) {
    archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
  }
  archivContentRef.classList.add('show');
}

/**
 * Renders the trash notes section.
 */
function renderTrashNotes() {
  hideAllSections();
  let trashContentRef = document.getElementById('trash-content');
  trashContentRef.innerHTML = "";
  for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
  trashContentRef.classList.add('show');
}

/**
 * Adds a new note with a title and description if both inputs are non-empty.
 */
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

/**
 * Adds an event listener to the note input field for triggering search on "Enter".
 */
const input = document.getElementById("note-input");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-btn").click();
  }
});

/**
 * Deletes a note from the trash section and updates the UI.
 * 
 * @param {number} indexTrashNote - The index of the note to delete.
 */
function deleteNote(indexTrashNote) {
  allNotes.trashNotes.splice(indexTrashNote, 1);
  allNotes.trashNotesTitles.splice(indexTrashNote, 1);
  saveToLocalStorage();
  renderTrashNotes();
}