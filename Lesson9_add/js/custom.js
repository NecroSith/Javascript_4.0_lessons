
let age = document.getElementById('age'),
    value = age.value;

console.log(value);
 
function showUser(surname, name, value) {
    this.surname = surname;
    this.name = name;
    this.value = value;
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser("Пустынный", "Ян", value);