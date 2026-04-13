function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchFieldRef = document.getElementById("searchField");
   const tableRowRef = document.querySelectorAll("tbody tr");

   function onClick() {
      let searchText = searchFieldRef.value;

      if(!searchText){
         return;
      }

      searchFieldRef.value = "";

   for(let i = 0; i < tableRowRef.length; i++){
      const tdRef = tableRowRef[i].querySelectorAll("td");
      for(let col = 0; col < tdRef.length; col++){
         const tdText = tdRef[col].textContent;

         if(tdText.includes(searchText)){
            tableRowRef[i].classList.add("select");
            break;
         } else {
            tableRowRef[i].classList.remove("select");
         }
      }
   }
   }

}