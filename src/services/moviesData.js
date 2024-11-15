import TopGun from "../assets/top-gun.jpg"
import Fantastic from "../assets/fantastic-beast.png"

export const moviesData = [
  {
    id: 1,
    Title: "Top Gun: Maverick",
    Year: "2022",
    Rated: "PG-13",
    Released: "27 May 2022",
    Runtime: "131 min",
    Genre: "Action, Drama",
    Director: "Joseph Kosinski",
    Writer: "Peter Craig, Justin Marks",
    Actors: "Tom Cruise, Jennifer Connelly, Miles Teller",
    Plot: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot.",
    Language: "English",
    Country: "United States",
    Awards: "6 wins & 23 nominations",
    Poster: `${TopGun}`,
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.3/10" },
      { Source: "Rotten Tomatoes", Value: "96%" },
      { Source: "Metacritic", Value: "78/100" }
    ],
    Metascore: "78",
    imdbRating: "8.3",
    imdbVotes: "400,000",
    imdbID: "tt1745960",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$1,482,400,000",
    Production: "Skydance Media, Paramount Pictures",
    Website: "N/A",
    Response: "True"
  },
  {
    id: 2,
    Title: "Fantastic Beasts: The Secrets of Dumbledore",
    Year: "2022",
    Rated: "PG-13",
    Released: "15 Apr 2022",
    Runtime: "142 min",
    Genre: "Adventure, Family, Fantasy",
    Director: "David Yates",
    Writer: "J.K. Rowling, Steve Kloves",
    Actors: "Eddie Redmayne, Jude Law, Ezra Miller",
    Plot: "Albus Dumbledore assigns Newt and his allies with a mission related to the rising power of Grindelwald.",
    Language: "English",
    Country: "United Kingdom, United States",
    Awards: "3 nominations",
    Poster: `${Fantastic}`,
    Ratings: [
      { Source: "Internet Movie Database", Value: "6.8/10" },
      { Source: "Rotten Tomatoes", Value: "47%" },
      { Source: "Metacritic", Value: "52/100" }
    ],
    Metascore: "52",
    imdbRating: "6.8",
    imdbVotes: "130,000",
    imdbID: "tt4123432",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$405,161,334",
    Production: "Warner Bros.",
    Website: "N/A",
    Response: "True"
  }
];
