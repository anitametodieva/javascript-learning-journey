function solve() {
  document.getElementById('btnSend').addEventListener('click', onClick);

  function onClick() {
    const input = JSON.parse(document.querySelector('#inputs textarea').value);

    const restaurants = {};

    for (const line of input) {
      const [restaurantName, workersData] = line.split(' - ');

      if (!restaurants[restaurantName]) {
        restaurants[restaurantName] = [];
      }

      const workers = workersData.split(', ');

      for (const worker of workers) {
        const [name, salary] = worker.split(' ');
        restaurants[restaurantName].push({
          name,
          salary: Number(salary)
        });
      }
    }

    let bestRestaurant = '';
    let bestAvgSalary = 0;

    for (const restaurant in restaurants) {
      const salaries = restaurants[restaurant].map(w => w.salary);
      const avgSalary =
        salaries.reduce((a, b) => a + b, 0) / salaries.length;

      if (avgSalary > bestAvgSalary) {
        bestAvgSalary = avgSalary;
        bestRestaurant = restaurant;
      }
    }

    const bestWorkers = restaurants[bestRestaurant]
      .sort((a, b) => b.salary - a.salary);

    const bestSalary = bestWorkers[0].salary;

    document.querySelector('#bestRestaurant p').textContent =
      `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

    document.querySelector('#workers p').textContent =
      bestWorkers
        .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
        .join(' ');
  }
}