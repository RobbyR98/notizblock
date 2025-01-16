function alertEmptyInput() {
  const titleInput = document.getElementById('title-input').value.trim();
  const noteInput = document.getElementById('note-input').value.trim();
  const alertElement = document.getElementById('alert-empty-input');
  if (titleInput === "" || noteInput === "") {
    alertElement.classList.remove('d-none'); 
    alertElement.textContent = "Please enter a title and note!"; 
    setTimeout(alertEmptyTextDisplayNone, 3000);
  } else {
    alertElement.classList.add('d-none');
  }
}

function alertEmptyTextDisplayNone() {
  let alertText = document.getElementById('alert-empty-input');
  alertText.classList.add('d-none');
}

function setActive(element) {
  let headings = document.querySelectorAll('aside h2');
  for (let i = 0; i < headings.length; i++) {
    headings[i].classList.remove('active');
  }
  element.classList.add('active');
}