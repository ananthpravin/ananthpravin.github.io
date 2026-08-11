// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

if (showHideBtn && commentWrapper) {
  commentWrapper.style.display = 'none';
  showHideBtn.setAttribute('aria-expanded', 'false');

  function toggleComments() {
    let showHideText = showHideBtn.textContent;
    if (showHideText === 'Show comments') {
      showHideBtn.textContent = 'Hide comments';
      commentWrapper.style.display = 'block';
      showHideBtn.setAttribute('aria-expanded', 'true');
    } else {
      showHideBtn.textContent = 'Show comments';
      commentWrapper.style.display = 'none';
      showHideBtn.setAttribute('aria-expanded', 'false');
    }
  }

  showHideBtn.onclick = toggleComments;

  // Keyboard accessibility for non-native button elements
  showHideBtn.onkeydown = function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleComments();
    }
  };
}

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

if (form) {
  form.onsubmit = function(e) {
    e.preventDefault();
    submitComment();
  };
}

function submitComment() {
  if (!nameField.value.trim() || !commentField.value.trim()) return;

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameField.value;
  commentPara.textContent = commentField.value;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}