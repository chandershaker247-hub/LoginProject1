async function loadUsers() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    let output = "";

    users.forEach(user => {
        output += `<p>${user.name}</p>`;
    });

    document.getElementById("users").innerHTML = output;
}
