function generateReport() {
  const output = document.getElementById('output');

  const headers = Array.from(document.querySelectorAll('thead th'));

  const selected = headers
    .map((th, index) => {
      const checkbox = th.querySelector('input[type="checkbox"]');
      return { index, name: checkbox.name, checked: checkbox.checked };
    })
    .filter(x => x.checked);

  const rows = Array.from(document.querySelectorAll('tbody tr'));
  const result = [];

  for (const row of rows) {
    const cells = Array.from(row.children);
    const obj = {};

    for (const col of selected) {
      obj[col.name] = cells[col.index].textContent.trim();
    }

    result.push(obj);
  }

  output.value = JSON.stringify(result, null, 2);
}