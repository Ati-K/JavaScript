window.onload = () => {
  async function getStarWarsInfo() {
    try {
      const result = await fetch("https://swapi.dev/api/people");
      const data = await result.json();
      const array = data.results;
      const filteredArray = array.map(
        ({ name, height, hair_color, skin_color, eye_color, birth_year }) => ({
          name,
          height,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
        })
      );
      var table = document.createElement("table");
      var parent = document.body;
      parent.appendChild(table);
      for (var i = 0; i < filteredArray.length; i++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for (let key in filteredArray[i]) {
          var td = document.createElement("td");
          td.innerText = key + ": " + " " + filteredArray[i][key];
          tr.appendChild(td);
          console.log(key);
          console.log(filteredArray[i][key]);
          tr.style.border = "2px solid #c83cbc";
        }
      }
      //   Object.values(filteredArray[i]).forEach((x, value) => {
      //     var tr = document.createElement("tr");
      //     var td = document.createElement("td");
      //     console.log(x);
      //     tr.innerHTML = td;
      //     td.innerHTML = value;
      //     table.appendChild(tr);
      //     tr.appendChild(td);
      //   });
      console.log(filteredArray);
      table.style.border = "4px solid #c83cbc";
      table.style.backgroundColor = "#08a4a7";
      table.style.borderCollapse = "collapse";
    } catch (error) {
      console.log(error);
    }
  }

  getStarWarsInfo();
};
