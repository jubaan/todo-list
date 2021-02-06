const removeItem = () => {
  const list = document.querySelector('.list');

  list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      e.target.parentElement.remove();
    }
  });
};

export default removeItem;
