let create = '';
const proxy = "https://cors-anywhere.herokuapp.com/";
const url = `${proxy}https://randomuser.me/api/?results=20`;

fetch(url, { method: 'get' }).then(function(response) {
    return response.json();
})
.then(function(data) {
    const users = data.results;
    console.log(users);
    for(let i = 0; i<users.length; i++){
        let name = users[i].name.first.charAt(0).toUpperCase() + users[i].name.first.substring(1);
        let surname = users[i].name.last.charAt(0).toUpperCase() + users[i].name.last.substring(1);
        let date = users[i].dob.date.substring(0, 10);

        create += "<li class='user'>";
            create += `
            <div>
                <h1>
                    <strong>${name} ${surname}<br></strong>
                </h1>
                <p>
                    ${date}
                </p>
            </div>
            `;
            create += "<li>";
    }
    document.getElementById('users').innerHTML += create;
});

function sortListByName() {
    var list, i, switching, b, c, shouldSwitch;
    list = document.getElementById("users");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("DIV");
      c = list.getElementsByTagName("H1");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (c[i].innerHTML.toLowerCase() > c[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }
function sortListByDate() {
    var list, i, switching, b, c, shouldSwitch;
    list = document.getElementById("users");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("DIV");
      c = list.getElementsByTagName("P");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (c[i].innerHTML.toLowerCase() > c[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
}