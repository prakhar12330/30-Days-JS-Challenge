//XMLHttpRequest: boilerplate heavy and doesn't use promises

const url = "https://jsonplaceholder.typicode.com/users";
const fetchPromise = fetch(url);


console.log(fetchPromise);

fetchPromise
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.error(`Fetch error: ${error}`);
    });
