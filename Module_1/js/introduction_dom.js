class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hola, mi nombre es ${this.name} y mi edad es ${this.age} años.`;
    }
}

document.getElementById("createPerson").addEventListener("click", function() {
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const resultDiv = document.getElementById("result");

    if (name === "" || age === "" || isNaN(age) || age <= 0) {
        resultDiv.innerText = "Please enter a valid name and age.";
        resultDiv.style.color = "red";
        return;
    }

    const person = new Person(name, age);
    resultDiv.innerText = person.greet();
    resultDiv.style.color = "black";
});