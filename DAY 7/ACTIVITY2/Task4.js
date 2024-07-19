const book = {
    title: "Client Server Computing ",
    author: "Lalit Kumar",
    year: "2012",
    changeYear:function(yr){
        this.year=yr;
        console.log("Published year is changed")
    }
}

console.log(book.year);
book.changeYear(2022);
console.log(book.year);

