/**
 * Saves the current state of allNotes to local storage.
 */
function saveToLocalStorage() {
  localStorage.setItem('allNotes', JSON.stringify(allNotes));
}

/**
 * Loads the notes data from local storage.
 */
function getFromLocalStorage() {
  const storedNotes = localStorage.getItem('allNotes');
  if (storedNotes) {
    allNotes = JSON.parse(storedNotes);
  }
}
