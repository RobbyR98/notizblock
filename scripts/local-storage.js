function saveToLocalStorage() {
  localStorage.setItem('allNotes', JSON.stringify(allNotes));
}

function getFromLocalStorage() {
  const storedNotes = localStorage.getItem('allNotes');
  if (storedNotes) {
    allNotes = JSON.parse(storedNotes);
  }
}
