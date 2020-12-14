export default function searchItem() {
  const form = document.forms[0];
  const list = [...document.querySelector('.list').children];

  form.addEventListener('keyup', (e) => {
    const search = form.search.value.trim();

    list.filter((item) => !item.textContent.includes(search)).forEach((item) => item.classList.add('filtered'));

    list.filter((item) => item.textContent.includes(search)).forEach((item) => item.classList.remove('filtered'));
  })
}

