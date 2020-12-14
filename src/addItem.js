import ListItem from './ListItem';

export default function addItem() {
  const form = document.forms[1];
  const list = document.querySelector('.list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const item = form.item.value.trim();
    if (item !== '') {
      list.innerHTML += new ListItem(item).render();
      form.reset();
    }
  });
}
