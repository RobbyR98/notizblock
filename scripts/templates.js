function getNoteTemplate(indexNote) {
  return `<div class="notes-container">
            <p><strong>${allNotes.notesTitles[indexNote]}:</strong><br> ${allNotes.notes[indexNote]}</p>
              <div class="button-position">              
                <button class="button-style-notes" onclick="moveNote(${indexNote}, 'notes', 'archivNotes')">
                <img src="./styles/assets/icons/folder-7207892_640.png" alt="" />
                </button>
                <button class="button-style-notes" onclick="moveNote(${indexNote}, 'notes', 'trashNotes')">
                <img src="./styles/assets/icons/rubbish-6664779_640.png" alt="" />
                </button>
              </div>
          </div>`
}

function getArchivNoteTemplate(indexArchivNote) {
  return `<div class="notes-container">
            <p><strong>${allNotes.archivNotesTitles[indexArchivNote]}:</strong><br> ${allNotes.archivNotes[indexArchivNote]}</p>
              <div class="button-position">              
                <button class="button-style-notes" onclick="moveNote(${indexArchivNote}, 'archivNotes', 'notes')">
                <img src="./styles/assets/icons/icon-1970472_640.png" alt="" />
                </button>
                <button class="button-style-notes" onclick="moveNote(${indexArchivNote}, 'archivNotes', 'trashNotes')">
                <img src="./styles/assets/icons/rubbish-6664779_640.png" alt="" />
                </button>
              </div>
          </div>`
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<div class="notes-container">
            <p><strong>${allNotes.trashNotesTitles[indexTrashNote]}:</strong><br> ${allNotes.trashNotes[indexTrashNote]}</p>
              <div class="button-position"> 
                <button class="button-style-notes" onclick="moveNote(${indexTrashNote}, 'trashNotes', 'notes')">
                <img src="./styles/assets/icons/icon-1970472_640.png" alt="" />
                </button>
                <button class="button-style-notes" onclick="deleteNote(${indexTrashNote})">
                <img src="./styles/assets/icons/rubbish-6664779_640.png" alt="" />
                </button>
              </div>
          </div>`
}