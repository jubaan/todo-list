function search(form) {
  const list = [...document.querySelector('.list').children];
  const search = form.search.value.trim();

  list.filter((item) => !item.textContent.includes(search)).forEach((item) => item.classList.add('filtered'));

  list.filter((item) => item.textContent.includes(search)).forEach((item) => item.classList.remove('filtered'));
}

export default function searchItem() {
  const form = document.forms[0];

  form.addEventListener('keyup', (e) => {
    e.preventDefault();

    search(form);
  });
}
