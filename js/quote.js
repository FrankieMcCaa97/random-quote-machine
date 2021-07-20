var colors = [
    'red',
    'blue',
    'green',
    'black',
    'orange'
];

window.onload = run;
function run() {
    $("#new-quote").click(function() {
        randomQuote();
    });

    $("#tweet-qupte").click(function() {
        
    });
    randomQuote();
}

function randomQuote() {
    var quotes = [{
        id: 1,
        text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today",
        person: "Malcolm X"
    },
    {
        id: 2,
        text: "Injustice anywhere is a threat to justice everywhere",
        person: "Martin Luther King Jr"
    },
    {
        id: 3,
        text: "Greed has driven the world crazy. And I think I'm lucky that I have a place over here that I can call home",
        person: "Nina Simone"
    },
    {
        id: 4,
        text: "Love is like a faucet, it turns off and on",
        person: "Billie Holiday"
    },
    {
        id: 5,
        text: "I'm not wise, but the beginning of wisdom is there; it's like relaxing into - and an acceptance of - things",
        person: "Tina Turner"
    }
];
    var randQuote = quotes[Math.floor(Math.random() * (quotes.length))];
    $("#text").html(randQuote.text);
    $("#author").html(randQuote.person);
    $("#tweet-quote").attr("href", stringToClickToTweetURL('"' + randQuote.text + '" - ' + randQuote.person));
}

function stringToClickToTweetURL(str){
    var stringToConvert = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");

    var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;

    return resultString;
}

