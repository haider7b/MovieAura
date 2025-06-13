import {heroImg,poster} from "../utils/index.js"



export const webName="MovieAura";
export const navLinks=["home","content","categories","subscribe"];
export const categories=["Action","Comedy","Drama","Horror","Romance"];
export const genres=["Action","Adventure","Animation","Comedy","Drama","Fantasy","Horror","Mystery","Romance","Sci-Fi","Thriller","War","Western"];

export const moviesNames=[
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Lord of the Rings: The Two Towers",
    "The Lord of the Rings: The Return of the King",
    "The Lord of the Rings: The Hobbit: An Unexpected Journey",
    "The Lord of the Rings: The Hobbit: The Desolation of Smaug",
    "The Lord of the Rings: The Hobbit: The Battle of the Five Armies",
    
]

export const movies =[
    {
        "title":"The Shawshank Redemption",
        "year":1994,
        "rating":9.3,
        "img":heroImg,
        "poster":poster,
        "genre":"Drama",
        "url":"https://www.imdb.com/The%20Shawshank%20Redemption/tt0111161/",
        "description":"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        "title":"The Godfather",
        "year":1972,
        "rating":9.2,
        "img":heroImg,
        "poster":poster,
        "genre":"Drama",
        "url":"https://www.imdb.com/The%20Godfather/tt0068646/",
        "description":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        "title":"The Dark Knight",
        "year":2008,
        "rating":9,
        "img":heroImg,
        "poster":poster,
        "genre":"Action",
        "url":"https://www.imdb.com/The%20Dark%20Knight/tt0468569/",
        "description":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
        "title":"Pulp Fiction",
        "year":1994,
        "rating":8.9,
        "img":heroImg,
        "poster":poster,
        "genre":"Crime",
        "url":"https://www.imdb.com/Pulp%20Fiction/tt0110912/",
        "description":"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
        "title":"The Lord of the Rings: The Fellowship of the Ring",
        "year":2001,
        "rating":8.8,
        "img":heroImg,
        "poster":poster,
        "genre":"Adventure",
        "url":"https://www.imdb.com/The%20Lord%20of%20the%20Rings%3A%20The%20Fellowship%20of%20the%20Ring/tt0120737/",
        "description":"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
    },
    {
        "title":"The Lord of the Rings: The Two Towers",
        "year":2002,
        "rating":8.7,
        "img":heroImg,
        "poster":poster,
        "genre":"Adventure",
        "url":"https://www.imdb.com/The%20Lord%20of%20the%20Rings%3A%20The%20Two%20Towers/tt0167260/",
        "description":"While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his henchmen."
    },
    {
        "title":"The Lord of the Rings: The Return of the King",
        "year":2003,
        "rating":8.9,
        "img":heroImg,
        "poster":poster,
        "genre":"Adventure",
        "url":"https://www.imdb.com/The%20Lord%20of%20the%20Rings%3A%20The%20Return%20of%20the%20King/tt0167261/",
        "description":"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
    },
    {
        "title":"The Lord of the Rings: The Hobbit: An Unexpected Journey",
        "year":2012,
        "rating":8.7,
        "img":heroImg,
        "poster":poster,
        "genre":"Adventure",
        "url":"https://www.imdb.com/The%20Lord%20of%20the%20Rings%3A%20The%20Hobbit%3A%20An%20Unexpected%20Journey/tt0903624/",
        "description":"Bilbo Baggins, a hobbit, embarks on a quest to destroy the One Ring and save Middle-earth from the Dark Lord Sauron."
    },
    {
        "title":"The Lord of the Rings: The Hobbit: The Desolation of Smaug",
        "year":2013,
        "rating":8.7,
        "img":heroImg,
        "poster":poster,
        "genre":"Adventure",
        "url":"https://www.imdb.com/The%20Lord%20of%20the%20Rings%3A%20The%20Hobbit%3A%20The%20Desolation%20of%20Smaug/tt0903624/",
        "description":"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
    },
    {
        "title":"The Lord of the Rings: The Hobbit: The Battle of the Five Armies",
        "year":2014,
        "rating":8.7,
        "img":heroImg,
        "poster":poster,
        "genre":"Adventure",
        "url":"https://www.imdb.com/The%20Lord%20of%20the%20Rings%3A%20The%20Hobbit%3A%20The%20Battle%20of%20the%20Five%20Armies/tt0903624/",
        "description":"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
    },
]


export const plans=[
    {
        "plan":"free",
        "price":"0$ USD/month",
        "movies":{
            "content":"10 ber day",
            "ads":"true",
            "download":"false" 
        },
        "tvShows":{
            "content":"10 ber day",
            "ads":"true",
            "download":"false"
        }
    },
    {
        "plan":"premium",
        "price":"10$ USD/month",
        "movies":{
            "content":"unlimited",
            "ads":"false",
            "download":"true"
        },
        "tvShows":{
            "content":"unlimited",
            "ads":"false",
            "download":"true"
        }
    },{
        "plan":"vip",
        "price":"20$ USD/month",
        "movies":{
            "content":"unlimited",
            "ads":"false",
            "download":"true"
        },
        "tvShows":{
            "content":"unlimited",
            "ads":"false",
            "download":"true"
        }
    }
]



export const latestWatched=[
    movies[0],
    movies[1],
    movies[2],
    movies[3],
    movies[4],
]

export const favorites=[
    movies[5],
    movies[6],
    movies[7],
    movies[8],
    movies[9],
]

export const watchLater=[
    movies[0],
    movies[1],
    movies[4],
    movies[7],
    movies[9],
]