function search() {
  const searchText = document.getElementById('searchText').value.toLowerCase();
  const towns = document.querySelectorAll('#towns li');
  const result = document.getElementById('result');

  let matches = 0;

  for (const town of towns) {
    town.style.fontWeight = 'normal';
    town.style.textDecoration = 'none';

    if (town.textContent.toLowerCase().includes(searchText) && searchText !== '') {
      town.style.fontWeight = 'bold';
      town.style.textDecoration = 'underline';
      matches++;
    }
  }

  result.textContent = `${matches} matches found`;
}