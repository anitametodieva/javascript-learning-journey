function solve() {
  const input = document.getElementById("input").value;
  const outputRef = document.getElementById("output");
  outputRef.innerHTML = "";

  const text = input.split(".").filter(x => !!x);

  for(let i = 0; i < text.length; i += 3){
    let result = [];
    for(x = 0; x < 3; x++){
       if(!text[i + x]){
          break;
        }
      result.push(text[i + x])
    }

    let buff = result.join(".") + ".";
    outputRef.innerHTML += `<p>${buff.trim()}</p>`

  }
}