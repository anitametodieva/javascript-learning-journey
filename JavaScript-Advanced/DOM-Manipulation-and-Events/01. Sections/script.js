function create(words) {
   const contentRef = document.getElementById("content");

   for(let i = 0; i < words.length; i++){
      const divEl = document.createElement("div");
      const pEl = document.createElement("p");
      pEl.textContent = words[i];
      pEl.style.display = "none";
      divEl.appendChild(pEl);
      contentRef.append(divEl);

      divEl.addEventListener("click", onClick)
   }

   function onClick(event){
      const target = event.currentTarget;
      const p = target.children[0];
      const currentState = p.style.display;
      p.style.display = currentState === "none" ? "block" : "none";
   }
}