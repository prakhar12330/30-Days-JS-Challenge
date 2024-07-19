const book = {
    title: "Client Server Computing",
    author: "Lalit Kumar",
    year: "2012",
    returnString: function () {
        return `${this.title} in year ${this.year}`
    }
}

console.log(book.returnString());