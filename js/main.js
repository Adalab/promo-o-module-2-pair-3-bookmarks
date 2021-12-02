"use strict";


/* display new bookmark form

const section = document.querySelector('.js-data-actions');
section.classList.remove('hidden'); */


// display burger menu

const menu = document.querySelector('.js-menudropdown');
menu.classList.remove('collapsed');


// add links

const link1_url = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion';
const link2_url = 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/';
const link3_url = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web';

const link1_desc = 'JS en los materiales de Adalab';
const link2_desc = 'Ideas de proyectos JS';
const link3_desc = 'HTML en los materiales de Adalab';

const link1_tag1 = 'javascript';
const link1_tag2 = 'HTML';
const link2_tag1 = 'javascript';
const link2_tag2 = 'portfolio';
const link3_tag1 = 'HTML';
const link3_tag2 = 'CSS';

const links_checked = 'checked';

const link1 = `<article class="data__item">
    <p class="item__url">
        <a href="${link1_url}" target="_blank" rel="noopener noreferrer">${link1_url.replace('https://', '')}</a>
    </p>
    <p class="item__seen">
        <input type="checkbox" ${links_checked} name="item_imp_2" id="item_imp_2">
    </p>
    <p class="item__desc">${link1_desc}</p>
    <ul class="item__tags">
        <li class="item__tag">${link1_tag1.toLowerCase()}</li>
        <li class="item__tag">${link1_tag2.toLowerCase()}</li>
    </ul>
</article>`;

const link2 = `<article class="data__item">
    <p class="item__url">
        <a href="${link2_url}" target="_blank">${link2_url.replace('https://','')}</a>
    </p>
    <p class="item__seen">
        <input type="checkbox" ${links_checked} name="item_imp_1" id="item_imp_1">
    </p>
    <p class="item__desc">${link2_desc}</p>
    <ul class="item__tags">
        <li class="item__tag">${link2_tag1.toLowerCase()}</li>
        <li class="item__tag">${link2_tag2.toLowerCase()}</li>
    </ul>
</article>`;

const link3 = `<article class="data__item">
    <p class="item__url">
        <a href="${link3_url}" target="_blank" rel="noopener noreferrer">${link3_url.replace('https://', '')}</a>
    </p>
    <p class="item__seen">
        <input type="checkbox" name="item_imp_2" id="item_imp_2">
    </p>
    <p class="item__desc">${link3_desc}</p>
    <ul class="item__tags">
        <li class="item__tag">${link3_tag1.toLowerCase()}</li>
        <li class="item__tag">${link3_tag2.toLowerCase()}</li>
    </ul>
</article>`;

let html = '';


// search "materiales"

const input_search_desc = document.querySelector('.js-data-search__tag');
input_search_desc.value = 'materiales';
const descrSearchText = input_search_desc.value;

if (link1_desc.includes(descrSearchText) === true) {
    html += `<li class="data__listitem">${link1}</li>`;
}

if (link2_desc.includes(descrSearchText) === true) {
    html += `<li class="data__listitem">${link2}</li>`;
}

if (link3_desc.includes(descrSearchText) === true) {
    html += `<li class="data__listitem">${link3}</li>`;
}

const listLinks = document.querySelector('.js-data__list');
listLinks.innerHTML = html;


// change tableview -> listview or listview -> tableview

const data = document.querySelector('.js-data');

if (data.classList.contains('tableview') === true) {
    data.classList.remove('tableview');
    data.classList.add('listview');
} else if (data.classList.contains('listview') === true) {
    data.classList.remove('listview');
    data.classList.add('tableview');
}