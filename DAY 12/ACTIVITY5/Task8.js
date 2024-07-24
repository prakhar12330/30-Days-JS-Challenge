
const url = "https://jsonplaceholdertypicode.com/users";
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
