const formulario = document.querySelector("form");

const users = [];

const getData = () => {
    const firstName = document.querySelector(".first-name").value;
    const lastName = document.querySelector(".last-name").value;
    const email = document.querySelector(".Email").value;
    const password = document.querySelector(".Password").value;

    const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    }
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users))
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    getData();
    const dataJS = JSON.parse(localStorage.getItem("users"));
    dataJS.forEach(data => {
        console.log(data);
    });
});
