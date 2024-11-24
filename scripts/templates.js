function getNoteTemplate(indexNote) {
  return `<div class="notes-container">
            <p>${notesTitles[indexNote]}:<br> ${notes[indexNote]}</p>
              <div class="button-position">              
                <button class="button-style-notes" onclick="noteToArchiv(${indexNote})">
                <img src="./styles/assets/icons/folder-7207892_640.png" alt="" />
                </button>
                <button class="button-style-notes" onclick="noteToTrash(${indexNote})">
                <img src="./styles/assets/icons/rubbish-6664779_640.png" alt="" />
                </button>
              </div>
          </div>`
}

function getArchivNoteTemplate(indexArchivNote) {
  return `<div class="notes-container">
            <p>${archivNotesTitles[indexArchivNote]}:<br> ${archivNotes[indexArchivNote]}</p>
              <div class="button-position">              
                <button class="button-style-notes" onclick="noteFromArchivToNotes(${indexArchivNote})">
                <img src="./styles/assets/icons/icon-1970472_640.png" alt="" />
                </button>
                <button class="button-style-notes" onclick="noteFromArchivToTrash(${indexArchivNote})">
                <img src="./styles/assets/icons/rubbish-6664779_640.png" alt="" />
                </button>
              </div>
          </div>`
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<div class="notes-container">
            <p>${trashNotesTitles[indexTrashNote]}:<br> ${trashNotes[indexTrashNote]}</p>
              <div class="button-position"> 
                <button class="button-style-notes" onclick="noteFromTrashToNotes(${indexTrashNote})">
                <img src="./styles/assets/icons/icon-1970472_640.png" alt="" />
                </button>
                <button class="button-style-notes" onclick="deleteNote(${indexTrashNote})">
                <img src="./styles/assets/icons/rubbish-6664779_640.png" alt="" />
                </button>
              </div>
          </div>`
}