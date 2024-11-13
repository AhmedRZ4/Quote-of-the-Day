let quotesData = [];
fetch("https://ahmedrz4.github.io/Quote-of-the-Day/data/quotes.json")
    .then(res => res.json())
    .then(d => {
        quotesData = d.quotes;
    })
    .catch(error => {
        console.error("Error loading quotes:", error);
    });

const ranCurrent = document.getElementById("_lastQ");
ranCurrent.value = 0;
function getQuote() {
    if (quotesData.length === 0) {
        console.error("Quotes data is not loaded yet.");
        return;
    }
    let ran;
    do {
        ran = Math.floor(Math.random() * quotesData.length);
    } while (ran == ranCurrent.value)
    const selectedQuote = quotesData[ran];
    document.getElementById("Q").innerHTML = `“${selectedQuote.quote}”`;
    document.getElementById("autherQ").innerHTML = `--${selectedQuote.author}`;
    ranCurrent.value = ran;
}
