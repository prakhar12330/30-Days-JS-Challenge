const book = {
    title: "Client Server Computing",
    author: "Lalit Kumar",
    year: "2012",
    returnString: function(){
        return `${this.title} by ${this.author}`
    }
}

console.log(book.returnString());