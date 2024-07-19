const book = {
    title: "Client Server Computing",
    author: "Lalit Kumar",
    year: "2012",
}

for(bk in book){
    console.log(`Property: ${bk} | Value: ${book[bk]}`)
}