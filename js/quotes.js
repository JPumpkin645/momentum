// http://koonhous.blogspot.com/2019/11/famous-people-quotes.html
const quotes = [
    {
        quote: "Working hard for something we don't care about is called stressed, working hard for something we love is called passion.",
        author: "Simon Sinek",
    },
    {
        quote: "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.",
        author: "Brian Tracy",
    },
    {
        quote: "Don't let the fear of losing be greater than the excitement of winning.",
        author: "Robert Kiyosaki",
    },
    {
        quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        author: "Dale Carnegie",
    },
    {
        quote: "Action is the foundational key to all success.",
        author: "Pablo Picasso",
    },
    {
        quote: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
        author: "Vince Lombardi",
    },
    {
        quote: "It is your determination and persistence that will make you a successful person.",
        author: "Kenneth J Hutchins",
    },
    {
        quote: "You can waste your life drawing lines. Or you can live your life crossing them.",
        author: "Shonda Rhimes",
    },
    {
        quote: "Be poor, humble and driven. Don't be afraid to shift or pivot.",
        author: "Alex Rodriguez",
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = ` - ${randomQuote.author}`;
