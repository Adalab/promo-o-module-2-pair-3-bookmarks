'use strict';


// global data

const GITHUB_USER = 'mararochafernandez';
const API_URL = `https://adalab-bookmarks-api.herokuapp.com/api`;
let bmkData = [];


// main function

function startApp() {
  getDataFromLocalStorage();
  if (!bmkData) {
    getDataFromApi(`${API_URL}/bookmarks/${GITHUB_USER}`).then(() => {
      //saveDataInLocalStorage();
      renderBookmarks();
      listenCheckboxes();
    });
  } else {
    renderBookmarks();
    listenCheckboxes();
  }
  displayBurgerMenu();
  displayNewBookmarkForm();
  displayListView();
  displayTableView();
  addNewBookmark();
}


// api data

function getDataFromApi(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => bmkData = data.results);
}

function saveDataInApi(url, newBmkData) {
  fetch(url, {
      method: 'POST',
      body: JSON.stringify(newBmkData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => data);
}

function updateDataInApi(url, newBmkData) {
  fetch(url, {
      method: 'PUT',
      body: JSON.stringify(newBmkData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => data);
}


// local storage data

function getDataFromLocalStorage() {
  bmkData = JSON.parse(localStorage.getItem('bmkData'));
}

function saveDataInLocalStorage() {
  localStorage.setItem('bmkData', JSON.stringify(bmkData));
}


// render html

function renderBookmarks() {
  for (const bmk of bmkData) {
    getElement('.js-data__list').appendChild(renderBookmark(bmk.id, bmk.url, bmk.description, bmk.module, bmk.tags));
  }
}

function renderBookmark(id, url, desc, seen, tags) {
  const newArticle = document.createElement('article');
  newArticle.className = 'data__item';
  newArticle.appendChild(renderUrl(url));
  newArticle.appendChild(renderSeen(seen, id));
  newArticle.appendChild(renderDesc(desc));
  newArticle.appendChild(renderTags(tags));

  const newItem = document.createElement('li');
  newItem.className = 'data__listitem';
  newItem.appendChild(newArticle);

  return newItem;
}

function renderUrl(url) {
  const newLink = document.createElement('a');
  newLink.href = url;
  newLink.target = '_blank';
  newLink.rel = "noopener noreferrer";
  newLink.textContent = url.replace('https://', '');

  const newText = document.createElement('p');
  newText.className = 'item__url';
  newText.appendChild(newLink);
  return newText;
}

function renderSeen(seen, id) {
  const newInput = document.createElement('input');
  newInput.className = 'js-checkbox';
  newInput.type = 'checkbox';
  newInput.dataset.id = id;
  newInput.checked = seen;
  newInput.name = 'item_imp_2';
  newInput.id = 'item_imp_2';

  const newText = document.createElement('p');
  newText.className = 'item__seen';
  newText.appendChild(newInput);
  return newText;
}

function renderDesc(desc) {
  const newText = document.createElement('p');
  newText.className = 'item__desc';
  newText.textContent = desc;
  return newText;
}

function renderTags(tags) {
  if (tags.length === 0) {
    const newText = document.createElement('p');
    newText.className = 'item__tags';
    newText.textContent = 'Sin etiquetas';
    return newText;
  } else {
    const newList = document.createElement('ul');
    newList.className = 'item__tags';
    for (const tag of tags) {
      const newItem = document.createElement('li');
      newItem.className = 'item__tag';
      newItem.textContent = tag.toLowerCase();
      newList.appendChild(newItem);
    }
    return newList;
  }
}


// display/hidden html elements

function displayBurgerMenu() {
  const burgerElement = getElement('.js-header__menulink');
  burgerElement.addEventListener('click', (event) => {
    event.preventDefault();
    const menu = getElement('.js-menudropdown');
    menu.classList.toggle('collapsed');
  });
}

function displayNewBookmarkForm() {
  const newBookmarkButtonElement = getElement('.js-new-bookmark-button');
  const newBookmarkElement = getElement('.js-data-actions');
  newBookmarkButtonElement.addEventListener('click', () => {
    newBookmarkElement.classList.remove('hidden');

  });
}

function displayListView() {
  const listviewButtonElement = getElement('.js-button-listview');
  listviewButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    event.currentTarget.classList.add('selected');
    const tableviewButtonElement = getElement('.js-button-tableview');
    tableviewButtonElement.classList.remove('selected');
    const data = getElement('.js-data');
    data.classList.remove('tableview');
    data.classList.add('listview');
  });
}

function displayTableView() {
  const tableviewButtonElement = getElement('.js-button-tableview');
  tableviewButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    event.currentTarget.classList.add('selected');
    const listviewButtonElement = getElement('.js-button-listview');
    listviewButtonElement.classList.remove('selected');
    const data = getElement('.js-data');
    data.classList.remove('listview');
    data.classList.add('tableview');
  });
}


// add new bookmark

function addNewBookmark() {
  const saveNewBookmarkElement = getElement('.js-save-new-bookmark');
  saveNewBookmarkElement.addEventListener('click', saveNewBookmark);

  const cancelNewBookmarkElement = getElement('.js-cancel-new-bookmark');
  cancelNewBookmarkElement.addEventListener('click', (event) => {
    event.preventDefault();
    resetNewBookmarkForm();
  });
}

function saveNewBookmark(event) {
  event.preventDefault();
  const newBookmarkDataObject = {};
  const newBookmarkUrl = getElement('.js-new-bookmark-url');
  const newBookmarkDesc = getElement('.js-new-bookmark-desc');
  const newBookmarkTags = getElement('.js-new-bookmark-tags');

  if (newBookmarkUrl.value) {
    newBookmarkDataObject.url = newBookmarkUrl.value;
    newBookmarkDataObject.description = newBookmarkDesc.value;
    newBookmarkDataObject.seen = false;

    let tags = newBookmarkTags.value;
    if (tags) {
      tags = tags.replace(/\s+/g, ''); // remove white spaces
      tags = tags.split(','); // separate in tags
      newBookmarkDataObject.tags = tags;
    } else {
      newBookmarkDataObject.tags = [];
    }

    bmkData.push(newBookmarkDataObject);
    saveDataInApi(`${API_URL}/bookmark/${GITHUB_USER}`, newBookmarkDataObject);
    //saveDataInLocalStorage();
    renderBookmarks();
    listenCheckboxes();
    resetNewBookmarkForm();
  }
}

function resetNewBookmarkForm() {
  getElement('.js-new-bookmark-url').value = '';
  getElement('.js-new-bookmark-desc').value = '';
  getElement('.js-new-bookmark-tags').value = '';
  getElement('.js-data-actions').classList.add('hidden');
}


// listen checkboxes

function listenCheckboxes() {
  const checkboxes = document.querySelectorAll('.js-checkbox');
  for (const checkbox of checkboxes) {
    checkbox.addEventListener('click', handleClickCheckbox);
  }
}

function handleClickCheckbox(event) {
  const id = event.currentTarget.dataset.id;
  const index = bmkData.findIndex(bmk => bmk.id === id);
  bmkData[index].module = event.currentTarget.checked;
  //updateDataInApi(`${API_URL}/bookmark/${GITHUB_USER}/${id}`, bmkData[index]);
  console.log('Aquí haría una petición PUT pero la API devuelve un error HTTP 500.');
}


// helpers

// get html element
function getElement(selector) {
  return document.querySelector(selector);
}


// start app

startApp();