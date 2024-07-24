async function fetchFromAPI() {
    try {
        const url = "https://jsonplaceholdertypicode.com/users";
        let responsePromise = await fetch(url);
        return responsePromise;
    } catch (err) {
        console.log(err);
    }
}

fetchFromAPI().then((response) => {
    return response.json();
}).then((users) => {
    console.log(users);
})