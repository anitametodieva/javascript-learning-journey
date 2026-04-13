function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll("button");
  const[input, output] = document.querySelectorAll("textarea");
  const tableRef = document.querySelector("table tbody");

  generateBtn.addEventListener("click", onGenerate);
  buyBtn.addEventListener("click", onGenerateOrder);

  function onGenerate(event){
    const data = JSON.parse(input.value);

    for(let el of data){
      const tr = createTableRow(el);
      tableRef.appendChild(tr);
    }
    input.value = "";
  }

  function onGenerateOrder(event){
    const selectItem = document.querySelectorAll("input[type='checkbox']:checked");

    let names = [];
    let sum = 0;
    let decFactorSum = 0;

    for(const item of selectItem){
      const tr = item.parentElement.parentElement;
      const [imgTD, nameTD, priceTD, decFactorTD] = tr.children;
      const name = nameTD.children[0].textContent;
      let price = priceTD.children[0].textContent;
      let decFactor = decFactorTD.children[0].textContent;

      price = Number(price);
      decFactor = Number(decFactor);

      names.push(name);
      sum += price;
      decFactorSum += decFactor;
    }

    let buff = `Bought furniture: ${names.join(", ")}\n`
    buff += `Total price: ${sum.toFixed(2)}\n`;
    buff += `Average decoration factor: ${decFactorSum / names.length}`;

    output.value = buff;
  }

  function createTableRow(el){
    const tr = document.createElement("tr");
    const imgTD = document.createElement("td");
    const img = document.createElement("img");
    img.src = el.img;

    imgTD.appendChild(img);
    tr.appendChild(imgTD);

    const nameTD = document.createElement("td");
    const nameP = document.createElement("p");
    nameP.textContent = el.name;

    nameTD.appendChild(nameP);
    tr.appendChild(nameTD);

    const priceTD = document.createElement("td");
    const priceP = document.createElement("p");
    priceP.textContent = el.price;

    tr.appendChild(priceTD);
    priceTD.appendChild(priceP);

    const decFactorTD = document.createElement("td");
    const decFactorP = document.createElement("p");
    decFactorP.textContent = el.decFactor;

    tr.appendChild(decFactorTD);
    decFactorTD.appendChild(decFactorP);

    const inputTd = document.createElement("td");
    const input = document.createElement("input");
    input.type = "checkbox";

    inputTd.appendChild(input);
    tr.appendChild(inputTd);

    return tr;
  }
}