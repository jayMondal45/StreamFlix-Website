const carouselMovies = [
  {
    title: "Game of Thrones",
    rating: "⭐ 9.3/10",
    genres: ["Fantasy", "Drama", "Adventure"],
    duration: "8 Seasons",
    description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia. An epic tale of power, betrayal, and the struggle for the Iron Throne.",
    cast: "Creator: David Benioff, D.B. Weiss | Cast: Emilia Clarke, Kit Harington, Peter Dinklage",
    video: "https://vimeo.com/1143719127?fl=ip&fe=ec",
    hero_bg: "img/Game_of_Thrones.jpg",
    poster: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Stranger Things",
    rating: "⭐ 8.7/10",
    genres: ["Sci-Fi", "Horror", "Drama"],
    duration: "4 Seasons",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl. Set in the 1980s, this thrilling series blends nostalgia with supernatural horror.",
    cast: "Creators: The Duffer Brothers | Cast: Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
    video: "https://vimeo.com/1143438246?fl=ip&fe=ec",
    hero_bg: "img/stranger.jpg",
    poster: "https://m.media-amazon.com/images/M/MV5BNjRiMTA4NWUtNmE0ZC00NGM0LWJhMDUtZWIzMDM5ZDIzNTg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Breaking Bad",
    rating: "⭐ 9.5/10",
    genres: ["Crime", "Drama", "Thriller"],
    duration: "5 Seasons",
    description: "A chemistry teacher diagnosed with terminal cancer partners with a former student to manufacture and sell methamphetamine. What begins as a desperate attempt to secure his family's future transforms him into a criminal mastermind.",
    cast: "Creator: Vince Gilligan | Cast: Bryan Cranston, Aaron Paul, Anna Gunn",
    video: "https://vimeo.com/1143714788?share=copy&fl=sv&fe=ci",
    hero_bg: "img/breaking_bad.jpg",
    poster: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Interstellar",
    rating: "⭐ 8.7/10",
    genres: ["Sci-Fi", "Drama", "Adventure"],
    duration: "2h 49min",
    description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    cast: "Director: Christopher Nolan | Cast: Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine",
    video: "https://vimeo.com/1143437764?fl=ip&fe=ec",
    hero_bg: "img/intersteller.jpg",
    poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Dark",
    rating: "⭐ 8.7/10",
    genres: ["Sci-Fi", "Mystery", "Thriller"],
    duration: "3 Seasons",
    description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families and reveals a time-travel conspiracy spanning several generations.",
    cast: "Creators: Baran bo Odar, Jantje Friese | Cast: Louis Hofmann, Karoline Eichhorn, Lisa Vicari, Maja Schöne",
    video: "https://vimeo.com/1143715034?fl=ip&fe=ec",
    hero_bg: "img/dark.jpg",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ApenbR-AZkjJySI-VBzjMJYPWFoqUgCxfkGyvXpCru89imX7jzAdmaDSgEVOY4MIDnR_&s=10",
  },
  {
    title: "The Dark Knight",
    rating: "⭐ 9.0/10",
    genres: ["Action", "Crime", "Thriller"],
    duration: "2h 32min",
    hero_bg: "img/the_dark_knight.jpg",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice and confront his darkest fears.",
    cast: "Director: Christopher Nolan | Cast: Christian Bale, Heath Ledger, Aaron Eckhart",
    video: "https://vimeo.com/1143715157?fl=ip&fe=ec",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
  }
];

const allMovies = [
  {
    title: "The Shawshank Redemption",
    image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    rating: "9.3",
    duration: "2h 22m",
    age: "R",
    quality: "4K",
    category: "top-ten",
    genre: "Drama",
  },
  {
    title: "The Godfather",
    image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    rating: "9.2",
    duration: "2h 55m",
    age: "R",
    quality: "4K",
    category: "top-ten",
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    rating: "9.0",
    duration: "2h 32m",
    age: "PG-13",
    quality: "4K",
    category: "top-ten",
    genre: "Action",
  },
  {
    title: "3 Idiots",
    image: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    rating: "8.4",
    duration: "2h 50m",
    age: "PG-13",
    quality: "4K",
    category: "top-ten",
    genre: "Comedy",
  },
  {
    title: "12 Angry Men",
    image: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    rating: "9.0",
    duration: "1h 36m",
    age: "Approved",
    quality: "HD",
    category: "top-ten",
    genre: "Drama",
  },
  {
    title: "Schindler's List",
    image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    rating: "9.0",
    duration: "3h 15m",
    age: "R",
    quality: "4K",
    category: "top-ten",
    genre: "Biography",
  },
  {
    title: "Baahubali 2: The Conclusion",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAZddfdsmgj84MRQyRDfNxl-swkZRxt2IQX3gnLkzHl3EEzyD3dduWibKdNCCqOTyaL3WIw&s=10",
    rating: "8.2",
    duration: "2h 47m",
    age: "13+",
    quality: "4K",
    category: "top-ten",
    genre: "Action",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    rating: "8.9",
    duration: "2h 58m",
    age: "PG-13",
    quality: "4K",
    category: "top-ten",
    genre: "Fantasy",
  },
  {
    title: "Dangal",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg",
    rating: "8.3",
    duration: "2h 41m",
    age: "PG",
    quality: "4K",
    category: "top-ten",
    genre: "Biography",
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    image: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    rating: "8.7",
    duration: "2h 04m",
    age: "PG",
    quality: "4K",
    category: "top-ten",
    genre: "Sci-Fi",
  },
  {
    title: "Vikram",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVn0y7RuNHnktmebSF6Uf_bv6Ue5ZxMmrRR1I_Yz9Bvs51_P1AMV5ku8qB98PmOVTFK_oh&s=10",
    rating: "8.3",
    duration: "2h 54m",
    age: "16+",
    quality: "4K",
    category: "top-ten",
    genre: "Action",
  },
  {
    title: "Fight Club",
    image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    rating: "8.8",
    duration: "2h 19m",
    age: "R",
    quality: "4K",
    category: "top-ten",
    genre: "Drama",
  },
  {
    title: "Drishyam",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7T7F4y7gL_rzFbpv48CdEitsaxyJmYYeanPA9DYKLa46KJnW_B2BYPtgj0EbdSEdbw4FfQ&s=10",
    rating: "8.2",
    duration: "2h 43m",
    age: "13+",
    quality: "4K",
    category: "top-ten",
    genre: "Thriller",
  },
  {
    title: "The Godfather Part II",
    image: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    rating: "9.0",
    duration: "3h 22m",
    age: "R",
    quality: "4K",
    category: "top-ten",
    genre: "Crime",
  },
  {
    title: "RRR",
    image: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    rating: "7.8",
    duration: "3h 07m",
    age: "PG-13",
    quality: "4K",
    category: "top-ten",
    genre: "Action",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    image: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    rating: "9.0",
    duration: "3h 21m",
    age: "PG-13",
    quality: "4K",
    category: "trending",
    genre: "Fantasy",
  },
  {
    title: "Pulp Fiction",
    image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    rating: "8.9",
    duration: "2h 34m",
    age: "R",
    quality: "4K",
    category: "trending",
    genre: "Crime",
  },
  {
    title: "Jawan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3giEteXGggow1hYtpRIuy3bDLO_Z9aoximYp_tuFK0Bb0N_fnmPaChKv1l_mgBxiiOwN3&s=10",
    rating: "7.2",
    duration: "2h 49m",
    age: "13+",
    quality: "4K",
    category: "trending",
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    rating: "8.8",
    duration: "2h 22m",
    age: "PG-13",
    quality: "4K",
    category: "trending",
    genre: "Drama",
  },
  {
    title: "KGF: Chapter 2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5Vo2OulSEXWfroqvIjx0VvYqYjVGLaUHUsfHV7laaYxIQ7qFvkQGD_eao-dt0eIM-JJHag&s=10",
    rating: "8.4",
    duration: "2h 48m",
    age: "16+",
    quality: "4K",
    category: "trending",
    genre: "Action",
  },
  {
    title: "Oppenheimer",
    image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
    rating: "8.3",
    duration: "3h 00m",
    age: "R",
    quality: "IMAX",
    category: "trending",
    genre: "Biography",
  },
  {
    title: "Pathaan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOHA0DTAKNAhDRUKyhxR2U6iokt9boztD3ur53XbnoOGkzBm9C-qckStDmlMnJZvYDFAM&s=10",
    rating: "6.1",
    duration: "2h 26m",
    age: "13+",
    quality: "4K",
    category: "trending",
    genre: "Action",
  },
  {
    title: "Dune: Part Two",
    image: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    rating: "8.5",
    duration: "2h 46m",
    age: "PG-13",
    quality: "IMAX",
    category: "trending",
    genre: "Sci-Fi",
  },
  {
    title: "Leo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZorcQ8q5HnwPB8MfA2I7-_BLk92pyAYlV5GPh9RvyznAjCBCzHs7LwdNVnJ3eELehoQSk&s=10",
    rating: "7.2",
    duration: "2h 44m",
    age: "16+",
    quality: "4K",
    category: "trending",
    genre: "Action",
  },
  {
    title: "Inception",
    image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    rating: "8.8",
    duration: "2h 28m",
    age: "PG-13",
    quality: "4K",
    category: "trending",
    genre: "Sci-Fi",
  },
  {
    title: "Kantara",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGRn9XQGPisR-C8rnctHJnPeQTXIyV43e_aBgqXL0HIq3gV0QS5_botr-EZfnA11T72JPLQ&s=10",
    rating: "8.2",
    duration: "2h 28m",
    age: "16+",
    quality: "4K",
    category: "trending",
    genre: "Action",
  },
  {
    title: "Gladiator",
    image: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    rating: "8.5",
    duration: "2h 35m",
    age: "R",
    quality: "4K",
    category: "trending",
    genre: "Action",
  },
  {
    title: "Tumbbad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Cc7_JeFsWMofnLhAmAmezUe6xIvM-g6rcHLK0XY-n7bXB488IoY-M-iTqh6cLTCRYTz6&s=10",
    rating: "8.2",
    duration: "1h 44m",
    age: "13+",
    quality: "4K",
    category: "trending",
    genre: "Horror",
  },
  {
    title: "The Departed",
    image: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
    rating: "8.5",
    duration: "2h 31m",
    age: "R",
    quality: "4K",
    category: "trending",
    genre: "Crime",
  },
  {
    title: "Jailer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDg4IkitIG8cCq4VvLx4JDDrGBhr39RkJpWjru13tywmTexYkBHb65nzwLELUgaMvvpXYl&s=10",
    rating: "7.1",
    duration: "2h 48m",
    age: "16+",
    quality: "4K",
    category: "trending",
    genre: "Action",
  },
  {
    title: "Avatar: Fire and Ash",
    image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg",
    rating: "N/A",
    duration: "TBA",
    age: "PG-13",
    quality: "IMAX",
    category: "upcoming",
    genre: "Sci-Fi",
  },
  {
    title: "Mission: Impossible 8",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CltbhynMNm8Wa9Kzzegsj-c0b8_fbMixTsPM_SzceDr-gMM2oqziu-QybMWHXUghWqW9&s=10",
    rating: "N/A",
    duration: "TBA",
    age: "PG-13",
    quality: "IMAX",
    category: "upcoming",
    genre: "Action",
  },
  {
    title: "Superman: Legacy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGnS5AO1k3OpZnSm3tRpSE6QMwI6nD1wZAcbPrTsNa9FZQcBttmU_WNWdTX2IpZu2Dmca9g&s=10",
    rating: "N/A",
    duration: "TBA",
    age: "PG-13",
    quality: "IMAX",
    category: "upcoming",
    genre: "Action",
  },
  {
    title: "Thunderbolts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHwW25lnlRJI4kiwVOcIIzSpq95EpDLajAe4WEeZ-vcbyozX-IU4rXlm0UB623pRccoGGz&s=10",
    rating: "N/A",
    duration: "TBA",
    age: "PG-13",
    quality: "IMAX",
    category: "upcoming",
    genre: "Action",
  },
  {
    title: "Captain America: Brave New World",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxIkn7_0YU05hQxPSNNivqBRingNRFQNUjiAsyrs2L04G2MYyqmDGGHSCESudQ1Ju8FLamg&s=10",
    rating: "N/A",
    duration: "TBA",
    age: "PG-13",
    quality: "IMAX",
    category: "upcoming",
    genre: "Action",
  },
  {
    title: "The Fantastic Four: First Steps",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJBESuOsvi8aWujZZXsZwlvl2D-h_6LA9NCDzQ82PJqmAZLPoOxS2rmIJ0RLJXAxQjricGw&s=10",
    rating: "N/A",
    duration: "TBA",
    age: "PG-13",
    quality: "IMAX",
    category: "upcoming",
    genre: "Action",
  },
  {
    title: "Jurassic World Rebirth",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMD-En_5i2eMnPj2MCzqCdXNxfT1tYqcJ2_5aMDfVyq76b-oP6NMzKIV_0WZXfR9oYp9udRA&s=10",
    rating: "N/A",
    duration: "TBA",
    age: "PG-13",
    quality: "IMAX",
    category: "upcoming",
    genre: "Action",
  },
  {
    title: "Zootopia 2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqU-w52lblFgRaE9zJo5hubrfeyRK-O9hkv6pbSQYKoqzmKEupxh9SoPGt2KvwcjuTgO-v&s=10",
    rating: "N/A",
    duration: "TBA",
    age: "PG",
    quality: "4K",
    category: "upcoming",
    genre: "Animation",
  },
  {
    title: "How to Train Your Dragon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhLTo24-Thdfk9GLYhNV4Z7XgW0tldQDBjxDdF7v75EekpDZ0CWwO5bX3yN0ecYatbHQ-&s=10",
    rating: "N/A",
    duration: "TBA",
    age: "PG",
    quality: "4K",
    category: "upcoming",
    genre: "Adventure",
  },
  {
    title: "Snow White",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzFvrcnn6OQD5e680fSBX_fMiyeCCzxLjzinwOJ8mtsifd2cTXlSWAs0Rw_bl406BdHFL&s=10",
    rating: "N/A",
    duration: "TBA",
    age: "PG",
    quality: "4K",
    category: "upcoming",
    genre: "Fantasy",
  },
  {
    title: "War 2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapJpL_PpzYAOCAGATi0FgAGexDdmAXeIgErt8OS995_j0SDr4F6VcR4tRxth4UqbaWQm52g&s=10",
    rating: "N/A",
    duration: "TBA",
    age: "13+",
    quality: "4K",
    category: "upcoming",
    genre: "Action",
  },
  {
    title: "Sikandar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqbdmhu4e3bVUst-7DTlUA7wSrEeqxNSjKjWc1C8uXHYSMpM7W4N38vMzdE2JzNp6297L&s=10",
    rating: "N/A",
    duration: "TBA",
    age: "13+",
    quality: "4K",
    category: "upcoming",
    genre: "Action",
  },
  {
    title: "Jolly LLB 3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvs9Pyu6rsIuNlGUMc2w5fYvJhag-YY_dTgMyOu2JNC8zNhxOPfHn7UyUGaencsJazsu0q&s=10",
    rating: "N/A",
    duration: "TBA",
    age: "13+",
    quality: "4K",
    category: "upcoming",
    genre: "Comedy",
  },
  {
    title: "Pushpa 2: The Rule",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPAQigFcssBJaq24TnvsQbwgnVywJ-mLWev97pMYKSjxGXwMou8vDNK_gvdWRI15UyOEZ02A&s=10",
    rating: "N/A",
    duration: "TBA",
    age: "16+",
    quality: "4K",
    category: "upcoming",
    genre: "Action",
  },
];

const webSeriesData = [
  {
    id: 1,
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    rating: "8.7/10",
    year: "2016-2025",
    seasons: 5,
    episodes: 42,
    rank: 1,
    image: "https://i.pinimg.com/1200x/03/d5/1a/03d51a0402fee29871e5b104c348d984.jpg",
    genres: ["Sci-Fi", "Horror", "Drama", "Mystery"],
    seasonsData: {
      1: [
        {
          episode: 1,
          title: "Chapter One: The Vanishing of Will Byers",
          duration: "49m",
          image: "https://assets.vogue.com/photos/59ee5bdc66bc9a48abff6cf8/master/w_2560%2Cc_limit/00-story-image-stranger-things.jpg"
        },
        {
          episode: 2,
          title: "Chapter Two: The Weirdo on Maple Street",
          duration: "56m",
          image: "https://www.nme.com/wp-content/uploads/2016/10/2016_StrangerThings_3_200716-2-1.jpg"
        },
        {
          episode: 3,
          title: "Chapter Three: Holly, Jolly",
          duration: "52m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoy0FSO4NLDoiK6Hyu4_inaDgdm5vYjsUFew&s"
        },
        {
          episode: 4,
          title: "Chapter Four: The Body",
          duration: "51m",
          image: "https://assets.vogue.com/photos/59ee5bdc66bc9a48abff6cf8/master/w_2560%2Cc_limit/00-story-image-stranger-things.jpg"
        },
        {
          episode: 5,
          title: "Chapter Five: The Flea and the Acrobat",
          duration: "53m",
          image: "https://www.nme.com/wp-content/uploads/2016/10/2016_StrangerThings_3_200716-2-1.jpg"
        },
        {
          episode: 6,
          title: "Chapter Six: The Monster",
          duration: "47m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoy0FSO4NLDoiK6Hyu4_inaDgdm5vYjsUFew&s"
        },
        {
          episode: 7,
          title: "Chapter Seven: The Bathtub",
          duration: "43m",
          image: "https://assets.vogue.com/photos/59ee5bdc66bc9a48abff6cf8/master/w_2560%2Cc_limit/00-story-image-stranger-things.jpg"
        },
        {
          episode: 8,
          title: "Chapter Eight: The Upside Down",
          duration: "55m",
          image: "https://www.nme.com/wp-content/uploads/2016/10/2016_StrangerThings_3_200716-2-1.jpg"
        }
      ],
      2: [
        {
          episode: 1,
          title: "Chapter One: MADMAX",
          duration: "48m",
          image: "https://variety.com/wp-content/uploads/2017/10/stranger-things-2.jpg"
        },
        {
          episode: 2,
          title: "Chapter Two: Trick or Treat, Freak",
          duration: "56m",
          image: "https://s3.r29static.com/bin/entry/f4b/0,0,2000,1050/x,80/2212141/image.jpg"
        },
        {
          episode: 3,
          title: "Chapter Three: The Pollywog",
          duration: "51m",
          image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2017/10/Millie-Bobby-Brown-as-Eleven-in-Stranger-Things.jpg"
        },
        {
          episode: 4,
          title: "Chapter Four: Will the Wise",
          duration: "46m",
          image: "https://variety.com/wp-content/uploads/2017/10/stranger-things-2.jpg"
        },
        {
          episode: 5,
          title: "Chapter Five: Dig Dug",
          duration: "57m",
          image: "https://s3.r29static.com/bin/entry/f4b/0,0,2000,1050/x,80/2212141/image.jpg"
        },
        {
          episode: 6,
          title: "Chapter Six: The Spy",
          duration: "52m",
          image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2017/10/Millie-Bobby-Brown-as-Eleven-in-Stranger-Things.jpg"
        },
        {
          episode: 7,
          title: "Chapter Seven: The Lost Sister",
          duration: "45m",
          image: "https://variety.com/wp-content/uploads/2017/10/stranger-things-2.jpg"
        },
        {
          episode: 8,
          title: "Chapter Eight: The Mind Flayer",
          duration: "48m",
          image: "https://s3.r29static.com/bin/entry/f4b/0,0,2000,1050/x,80/2212141/image.jpg"
        },
        {
          episode: 9,
          title: "Chapter Nine: The Gate",
          duration: "62m",
          image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2017/10/Millie-Bobby-Brown-as-Eleven-in-Stranger-Things.jpg"
        }
      ],
      3: [
        {
          episode: 1,
          title: "Chapter One: Suzie, Do You Copy?",
          duration: "51m",
          image: "https://hips.hearstapps.com/hmg-prod/images/finn-wolfhard-millie-bobby-brown-stranger-things-season-4-67fcaf8b4e448.jpg?resize=980:*"
        },
        {
          episode: 2,
          title: "Chapter Two: The Mall Rats",
          duration: "49m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8L0hE0tC-SSLpDU2aKfEOXmqygWzrWx7ig&s"
        },
        {
          episode: 3,
          title: "Chapter Three: The Case of the Missing Lifeguard",
          duration: "52m",
          image: "https://hips.hearstapps.com/hmg-prod/images/finn-wolfhard-millie-bobby-brown-stranger-things-season-4-67fcaf8b4e448.jpg?resize=980:*"
        },
        {
          episode: 4,
          title: "Chapter Four: The Sauna Test",
          duration: "52m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyA_lWEUWM0t_P894MI_cbtgi7Hv_m-cXRaA&s"
        },
        {
          episode: 5,
          title: "Chapter Five: The Flayed",
          duration: "55m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8L0hE0tC-SSLpDU2aKfEOXmqygWzrWx7ig&s"
        },
        {
          episode: 6,
          title: "Chapter Six: E Pluribus Unum",
          duration: "57m",
          image: "https://hips.hearstapps.com/hmg-prod/images/finn-wolfhard-millie-bobby-brown-stranger-things-season-4-67fcaf8b4e448.jpg?resize=980:*"
        },
        {
          episode: 7,
          title: "Chapter Seven: The Bite",
          duration: "51m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyA_lWEUWM0t_P894MI_cbtgi7Hv_m-cXRaA&s"
        },
        {
          episode: 8,
          title: "Chapter Eight: The Battle of Starcourt",
          duration: "78m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8L0hE0tC-SSLpDU2aKfEOXmqygWzrWx7ig&s"
        }
      ],
      4: [
        {
          episode: 1,
          title: "Chapter One: The Hellfire Club",
          duration: "78m",
          image: "https://cdn.mos.cms.futurecdn.net/2vQtF6xUjq7edV4DSb7jUh.jpg"
        },
        {
          episode: 2,
          title: "Chapter Two: Vecna's Curse",
          duration: "78m",
          image: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQbjb9XI6V-LAVt55Z-xpC14Jx-Q_qNf3XYb7yUZYvuUzKda64I_bGiC5eUSZoH-PDoPY08kQOoaK-HTqcANHdia_js5TUiutuio_VGbS1x-FcHyFVZEhukp1pY2rOnJ68KvjcRzJYidqOJapMpQUQXlUKko.jpg?r=e2c"
        },
        {
          episode: 3,
          title: "Chapter Three: The Monster and the Superhero",
          duration: "63m",
          image: "https://hips.hearstapps.com/hmg-prod/images/t-6-unit-02910-r-1656604419.jpg?crop=1xw:0.84375xh;0,0.0938xh"
        },
        {
          episode: 4,
          title: "Chapter Four: Dear Billy",
          duration: "78m",
          image: "https://media.vanityfair.com/photos/59f49b5220586235aaecf93b/master/w_2560%2Cc_limit/wv_publicity_pre_launch_A_still_7.000001.jpeg"
        },
        {
          episode: 5,
          title: "Chapter Five: The Nina Project",
          duration: "75m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs_DCkJBqCibIUr1H0sy4PYXKvl1nhHIaABQ&s"
        },
        {
          episode: 6,
          title: "Chapter Six: The Dive",
          duration: "68m",
          image: "https://assets-prd.ignimgs.com/2022/07/05/eddie-munson-1657006478785.png"
        },
        {
          episode: 7,
          title: "Chapter Seven: The Massacre at Hawkins Lab",
          duration: "98m",
          image: "https://ew.com/thmb/O_K4iRkmsHe0X6P-an1eu7ZCt3Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stranger-Things-405-27233387e25e4e8ea21b2a39a28299b8.jpg"
        },
        {
          episode: 8,
          title: "Chapter Eight: Papa",
          duration: "85m",
          image: "https://www.cnet.com/a/img/resize/205b7aa1b3630c0f995db9f8e913f144da8342ca/hub/2022/06/14/ce2e69f0-4761-4b6b-9831-f466d8df13ec/square-stranger-things-season-4-eleven-dr.jpg?auto=webp&fit=crop&height=675&width=1200"
        },
        {
          episode: 9,
          title: "Chapter Nine: The Piggyback",
          duration: "150m",
          image: "https://deadline.com/wp-content/uploads/2022/07/Stranger-Things-Sadie-Sink.jpg?w=681&h=383&crop=1"
        }
      ],
      5: [
        {
          episode: 1,
          title: "Chapter One: The Crawl",
          duration: "87m",
          image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/06/mike-in-stranger-things-season-5-s-teaser.jpg?w=1600&h=1200&fit=crop",
          releaseDate: "November 26, 2025"
        },
        {
          episode: 2,
          title: "Chapter Two: The Vanishing of Holly Wheeler",
          duration: "82m",
          image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/06/mike-in-stranger-things-season-5-s-teaser.jpg?w=1600&h=1200&fit=crop",
        },
        {
          episode: 3,
          title: "Chapter Three: The Turnbow Trap",
          duration: "75m",
          image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/06/mike-in-stranger-things-season-5-s-teaser.jpg?w=1600&h=1200&fit=crop",
          releaseDate: "November 26, 2025"
        },
        {
          episode: 4,
          title: "Chapter Four: Sorcerer",
          duration: "55m",
          image: "https://deadline.com/wp-content/uploads/2025/07/StrangerThings_S5_0011.jpg?w=800",
          releaseDate: "November 26, 2025"
        },
        {
          episode: 5,
          title: "Chapter Five: Shock Jock",
          duration: "70m",
          image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/10/will-byers-looking-angry-and-screaming-in-stranger-things-season-5.jpg?w=1600&h=900&fit=crop",
          releaseDate: "December 25, 2025"
        },
        {
          episode: 6,
          title: "Chapter Six: Escape from Camazotz",
          duration: "78m",
          image: "https://ca-times.brightspotcdn.com/dims4/default/bd2b48c/2147483647/strip/true/crop/2880x1920+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F3d%2F49e787d348c6a5262c5c81a40ade%2Fstrangerthings-strangerthings4-8-00-02-52-15.jpg",
          releaseDate: "December 25, 2025"
        },
        {
          episode: 7,
          title: "Chapter Seven: The Bridge",
          duration: "85m",
          image: "https://hips.hearstapps.com/hmg-prod/images/strangerthings-s5-0020-687703b1e2791.jpg?crop=1xw:0.84xh;0,0.00726xh",
          releaseDate: "December 25, 2025"
        },
        {
          episode: 8,
          title: "Chapter Eight: The Rightside Up",
          duration: "140m",
          image: "https://people.com/thmb/rU9NB7cNLUb6YW9ivQFfklyFpN4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/millie-bobby-brown-stranger-things-103025-9f5ef573378441e6a3e79e792b2d7825.jpg",
          releaseDate: "December 31, 2025",
          note: "Series Finale - Also releasing in theaters"
        }
      ]
    }
  },
  {
    id: 2,
    title: "Game of Thrones",
    description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    rating: "9.2/10",
    year: "2011",
    seasons: 8,
    episodes: 73,
    rank: 1,
    image: "https://images8.alphacoders.com/403/thumb-1920-403589.png",
    genres: ["Fantasy", "Drama", "Adventure", "Action"],
    seasonsData: {
      1: [
        {
          episode: 1,
          title: "Winter Is Coming",
          duration: "62m",
          image: "https://resizing.flixster.com/ajtANROYYdtHssw6m0iLLlSY9Rw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8681514_b_v8_aa.jpg"
        },
        {
          episode: 2,
          title: "The Kingsroad",
          duration: "56m",
          image: "https://static01.nyt.com/images/2011/04/10/arts/THRONES-6/THRONES-6-superJumbo-v2.jpg"
        },
        {
          episode: 3,
          title: "Lord Snow",
          duration: "58m",
          image: "https://www.indiewire.com/wp-content/uploads/2019/05/game-of-thrones-jon-snow-bran-PUPPIES.jpg?w=800"
        },
        {
          episode: 4,
          title: "Cripples, Bastards, and Broken Things",
          duration: "57m",
          image: "https://resizing.flixster.com/ajtANROYYdtHssw6m0iLLlSY9Rw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8681514_b_v8_aa.jpg"
        },
        {
          episode: 5,
          title: "The Wolf and the Lion",
          duration: "55m",
          image: "https://static01.nyt.com/images/2011/04/10/arts/THRONES-6/THRONES-6-superJumbo-v2.jpg"
        },
        {
          episode: 6,
          title: "A Golden Crown",
          duration: "53m",
          image: "https://www.indiewire.com/wp-content/uploads/2019/05/game-of-thrones-jon-snow-bran-PUPPIES.jpg?w=800"
        },
        {
          episode: 7,
          title: "You Win or You Die",
          duration: "59m",
          image: "https://resizing.flixster.com/ajtANROYYdtHssw6m0iLLlSY9Rw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8681514_b_v8_aa.jpg"
        },
        {
          episode: 8,
          title: "The Pointy End",
          duration: "59m",
          image: "https://static01.nyt.com/images/2011/04/10/arts/THRONES-6/THRONES-6-superJumbo-v2.jpg"
        },
        {
          episode: 9,
          title: "Baelor",
          duration: "57m",
          image: "https://www.indiewire.com/wp-content/uploads/2019/05/game-of-thrones-jon-snow-bran-PUPPIES.jpg?w=800"
        },
        {
          episode: 10,
          title: "Fire and Blood",
          duration: "62m",
          image: "https://resizing.flixster.com/ajtANROYYdtHssw6m0iLLlSY9Rw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8681514_b_v8_aa.jpg"
        }
      ],
      2: [
        {
          episode: 1,
          title: "The North Remembers",
          duration: "53m",
          image: "https://hips.hearstapps.com/hmg-prod/images/kahl-drogo-episode-1-series-1-game-of-thrones-1613493430.jpg?crop=1.00xw:0.635xh;0,0.0194xh"
        },
        {
          episode: 2,
          title: "The Night Lands",
          duration: "54m",
          image: "https://m.media-amazon.com/images/M/MV5BMmI1NDY4MzAtMmFhNi00YjZmLTk0NGItNmEyMTQ4MDQ5NGQ0XkEyXkFqcGc@._V1_.jpg"
        },
        {
          episode: 3,
          title: "What Is Dead May Never Die",
          duration: "53m",
          image: "https://akns-images.eonline.com/eol_images/Entire_Site/201251/1024.GoT3.mh.060112.jpg?fit=around%7C776:576&output-quality=90&crop=776:576;center,top"
        },
        {
          episode: 4,
          title: "Garden of Bones",
          duration: "51m",
          image: "https://hips.hearstapps.com/hmg-prod/images/kahl-drogo-episode-1-series-1-game-of-thrones-1613493430.jpg?crop=1.00xw:0.635xh;0,0.0194xh"
        },
        {
          episode: 5,
          title: "The Ghost of Harrenhal",
          duration: "55m",
          image: "https://m.media-amazon.com/images/M/MV5BMmI1NDY4MzAtMmFhNi00YjZmLTk0NGItNmEyMTQ4MDQ5NGQ0XkEyXkFqcGc@._V1_.jpg"
        },
        {
          episode: 6,
          title: "The Old Gods and the New",
          duration: "54m",
          image: "https://akns-images.eonline.com/eol_images/Entire_Site/201251/1024.GoT3.mh.060112.jpg?fit=around%7C776:576&output-quality=90&crop=776:576;center,top"
        },
        {
          episode: 7,
          title: "A Man Without Honor",
          duration: "56m",
          image: "https://hips.hearstapps.com/hmg-prod/images/kahl-drogo-episode-1-series-1-game-of-thrones-1613493430.jpg?crop=1.00xw:0.635xh;0,0.0194xh"
        },
        {
          episode: 8,
          title: "The Prince of Winterfell",
          duration: "53m",
          image: "https://m.media-amazon.com/images/M/MV5BMmI1NDY4MzAtMmFhNi00YjZmLTk0NGItNmEyMTQ4MDQ5NGQ0XkEyXkFqcGc@._V1_.jpg"
        },
        {
          episode: 9,
          title: "Blackwater",
          duration: "55m",
          image: "https://hips.hearstapps.com/hmg-prod/images/kahl-drogo-episode-1-series-1-game-of-thrones-1613493430.jpg?crop=1.00xw:0.635xh;0,0.0194xh"
        },
        {
          episode: 10,
          title: "Valar Morghulis",
          duration: "64m",
          image: "https://m.media-amazon.com/images/M/MV5BMmI1NDY4MzAtMmFhNi00YjZmLTk0NGItNmEyMTQ4MDQ5NGQ0XkEyXkFqcGc@._V1_.jpg"
        }
      ],
      3: [
        {
          episode: 1,
          title: "Valar Dohaeris",
          duration: "55m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9uOc2-Qu6_-iOz2XYh0LiAERefbBDLCtnfg&s"
        },
        {
          episode: 2,
          title: "Dark Wings, Dark Words",
          duration: "56m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5UaSzZPi7xD8AD6Aj8LeAsTZcfXGNLz0eg&s"
        },
        {
          episode: 3,
          title: "Walk of Punishment",
          duration: "53m",
          image: "https://m.media-amazon.com/images/M/MV5BMjIzMzU1NjM1MF5BMl5BanBnXkFtZTcwMzIxODg4OQ@@._V1_.jpg"
        },
        {
          episode: 4,
          title: "And Now His Watch Is Ended",
          duration: "53m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCHGbP0a16sWGg-YS1BReOkD2zvVTFjbS1g&s"
        },
        {
          episode: 5,
          title: "Kissed by Fire",
          duration: "57m",
          image: "https://m.media-amazon.com/images/M/MV5BMjIzMzU1NjM1MF5BMl5BanBnXkFtZTcwMzIxODg4OQ@@._V1_.jpg"
        },
        {
          episode: 6,
          title: "The Climb",
          duration: "53m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCHGbP0a16sWGg-YS1BReOkD2zvVTFjbS1g&s"
        },
        {
          episode: 7,
          title: "The Bear and the Maiden Fair",
          duration: "58m",
          image: "https://m.media-amazon.com/images/M/MV5BMjIzMzU1NjM1MF5BMl5BanBnXkFtZTcwMzIxODg4OQ@@._V1_.jpg"
        },
        {
          episode: 8,
          title: "Second Sons",
          duration: "56m",
          image: "https://patricksponaugle.com/wp-content/uploads/2015/06/game-of-thrones-season-3-daenerys-unsullied.jpg"
        },
        {
          episode: 9,
          title: "The Rains of Castamere",
          duration: "51m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCHGbP0a16sWGg-YS1BReOkD2zvVTFjbS1g&s"
        },
        {
          episode: 10,
          title: "Mhysa",
          duration: "63m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxrDL2iUAAIRW5MJZ6j_OWoUfWWlLiO9B0w&s"
        }
      ],
      4: [
        {
          episode: 1,
          title: "Two Swords",
          duration: "58m",
          image: "https://beam-images.warnermediacdn.com/2025-07/robert-stark-1920.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=600"
        },
        {
          episode: 2,
          title: "The Lion and the Rose",
          duration: "51m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2OXoHLjoOcvXQ7Prb1E0jYi6EBerbfMA8A&s"
        },
        {
          episode: 3,
          title: "Breaker of Chains",
          duration: "57m",
          image: "https://beam-images.warnermediacdn.com/2025-07/robert-stark-1920.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=600"
        },
        {
          episode: 4,
          title: "Oathkeeper",
          duration: "54m",
          image: "https://i.insider.com/52eff1e06da811780e3e1f62?width=959&format=jpeg"
        },
        {
          episode: 5,
          title: "First of His Name",
          duration: "53m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2OXoHLjoOcvXQ7Prb1E0jYi6EBerbfMA8A&s"
        },
        {
          episode: 6,
          title: "The Laws of Gods and Men",
          duration: "51m",
          image: "https://beam-images.warnermediacdn.com/2025-07/robert-stark-1920.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=600"
        },
        {
          episode: 7,
          title: "Mockingbird",
          duration: "50m",
          image: "https://i.insider.com/52eff1e06da811780e3e1f62?width=959&format=jpeg"
        },
        {
          episode: 8,
          title: "The Mountain and the Viper",
          duration: "52m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2OXoHLjoOcvXQ7Prb1E0jYi6EBerbfMA8A&s"
        },
        {
          episode: 9,
          title: "The Watchers on the Wall",
          duration: "51m",
          image: "https://beam-images.warnermediacdn.com/2025-07/robert-stark-1920.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=600"
        },
        {
          episode: 10,
          title: "The Children",
          duration: "66m",
          image: "https://i.insider.com/52eff1e06da811780e3e1f62?width=959&format=jpeg"
        }
      ],
      5: [
        {
          episode: 1,
          title: "The Wars to Come",
          duration: "53m",
          image: "https://hips.hearstapps.com/hmg-prod/images/arya-stark-episode-1-1613410305.jpg?crop=1xw:0.7498494003597122xh;center,top"
        },
        {
          episode: 2,
          title: "The House of Black and White",
          duration: "56m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxBJenRs792cby9zxcdt0-toTUool2NjySw&s"
        },
        {
          episode: 3,
          title: "High Sparrow",
          duration: "60m",
          image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/game-of-thrones/5/5b/Robb_stark.jpg"
        },
        {
          episode: 4,
          title: "Sons of the Harpy",
          duration: "51m",
          image: "https://hips.hearstapps.com/hmg-prod/images/arya-stark-episode-1-1613410305.jpg?crop=1xw:0.7498494003597122xh;center,top"
        },
        {
          episode: 5,
          title: "Kill the Boy",
          duration: "57m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC3b6Qe53ED4sXbOTP54JjrRespQx6aY4LAQ&s"
        },
        {
          episode: 6,
          title: "Unbowed, Unbent, Unbroken",
          duration: "54m",
          image: "https://hips.hearstapps.com/hmg-prod/images/arya-stark-episode-1-1613410305.jpg?crop=1xw:0.7498494003597122xh;center,top"
        },
        {
          episode: 7,
          title: "The Gift",
          duration: "59m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxBJenRs792cby9zxcdt0-toTUool2NjySw&s"
        },
        {
          episode: 8,
          title: "Hardhome",
          duration: "61m",
          image: "https://hips.hearstapps.com/hmg-prod/images/arya-stark-episode-1-1613410305.jpg?crop=1xw:0.7498494003597122xh;center,top"
        },
        {
          episode: 9,
          title: "The Dance of Dragons",
          duration: "52m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBfQAOvBdAMiMRVnC4glAyPaBg_fMJaQjOw&s"
        },
        {
          episode: 10,
          title: "Mother's Mercy",
          duration: "61m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nFHwyLIulr7tTmFruABIMkiWDvgoaw1o7A&s"
        }
      ],
      6: [
        {
          episode: 1,
          title: "The Red Woman",
          duration: "50m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGZbgSkdKZtxvG8Bdz8bQW7pvJ7uj96YJew&s"
        },
        {
          episode: 2,
          title: "Home",
          duration: "54m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NQHov6C4B4Y2MvX5FDH5dYJZSbbWo1w01w&s"
        },
        {
          episode: 3,
          title: "Oathbreaker",
          duration: "52m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCzfNbL4sfG9xi841NF5iCqIHEmAqv0Td8g&s"
        },
        {
          episode: 4,
          title: "Book of the Stranger",
          duration: "59m",
          image: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2016/01/JonSnow.jpg?fit=618%2C412&quality=89&ssl=1"
        },
        {
          episode: 5,
          title: "The Door",
          duration: "57m",
          image: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2016/01/JonSnow.jpg?fit=618%2C412&quality=89&ssl=1"
        },
        {
          episode: 6,
          title: "Blood of My Blood",
          duration: "52m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13sxeT2Nkrnu_METQGXOXW5TRFqAWY888JQ&s"
        },
        {
          episode: 7,
          title: "The Broken Man",
          duration: "51m",
          image: "https://ew.com/thmb/ckVYY3SL5k4WCKzLE0KsMU9dWCc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/thrones-004_0-7a8350f1ec62457989c69c08cb4ee1e4.jpg"
        },
        {
          episode: 8,
          title: "No One",
          duration: "59m",
          image: "https://variety.com/wp-content/uploads/2016/04/maisie-williams-e1460471989648.jpg?w=1000&h=666&crop=1"
        },
        {
          episode: 9,
          title: "Battle of the Bastards",
          duration: "60m",
          image: "https://i.insider.com/576196dddd089567738b4b6f?width=700"
        },
        {
          episode: 10,
          title: "The Winds of Winter",
          duration: "68m",
          image: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2016/01/JonSnow.jpg?fit=618%2C412&quality=89&ssl=1"
        }
      ],
      7: [
        {
          episode: 1,
          title: "Dragonstone",
          duration: "59m",
          image: "https://media.newyorker.com/photos/598872045839136c88e91dfb/master/w_2560%2Cc_limit/Larson-GoT-Season-7-Episode-4-Recap.jpg"
        },
        {
          episode: 2,
          title: "Stormborn",
          duration: "59m",
          image: "https://beam-images.warnermediacdn.com/2025-07/daenarys-1920.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=600"
        },
        {
          episode: 3,
          title: "The Queen's Justice",
          duration: "63m",
          image: "https://images.firstpost.com/wp-content/uploads/2017/08/DFrkDWiWAAE1qzR.jpg"
        },
        {
          episode: 4,
          title: "The Spoils of War",
          duration: "50m",
          image: "https://media.newyorker.com/photos/598872045839136c88e91dfb/master/w_2560%2Cc_limit/Larson-GoT-Season-7-Episode-4-Recap.jpg"
        },
        {
          episode: 5,
          title: "Eastwatch",
          duration: "59m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIppcadqtBCA6MwDGXKJ7wtksIunWPNX4lTw&s"
        },
        {
          episode: 6,
          title: "Beyond the Wall",
          duration: "70m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA4vtZGj7IE5odY3LiFbI8xGDtoAGHhP00dQ&s"
        },
        {
          episode: 7,
          title: "The Dragon and the Wolf",
          duration: "80m",
          image: "https://ew.com/thmb/nnu5LQwQ4ZRQtCmpH0qNoPNws_o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/got3-2000-2f3fed8c4af74a2abe1c17e6e6ff2d50.jpg"
        }
      ],
      8: [
        {
          episode: 1,
          title: "Winterfell",
          duration: "54m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0IP6fJZF2esYqo_g25PYraN9dh1Mm87ysLQ&s"
        },
        {
          episode: 2,
          title: "A Knight of the Seven Kingdoms",
          duration: "58m",
          image: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/01/18/Pictures/_3156f4e2-1b31-11e9-b190-a6170a1d34c9.jpg"
        },
        {
          episode: 3,
          title: "The Long Night",
          duration: "82m",
          image: "https://assets3.thrillist.com/v1/image/2820012/792x552/scale;webp=auto;jpeg_quality=60;progressive.jpg"
        },
        {
          episode: 4,
          title: "The Last of the Starks",
          duration: "78m",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGV2GzB9-45XW8fFYSf5Nd_zDAWnAOasLHWw&s"
        },
        {
          episode: 5,
          title: "The Bells",
          duration: "80m",
          image: "https://m.media-amazon.com/images/M/MV5BZTNlNjQ3YzUtYmI4MS00ZmZiLWI5NzYtZThhOTc1ZjIzNGIxXkEyXkFqcGc@._V1_.jpg"
        },
        {
          episode: 6,
          title: "The Iron Throne",
          duration: "80m",
          image: "https://www.cnet.com/a/img/resize/433d5f96f1b4a27fc25232f068c5d9bd195a9673/hub/2019/05/20/86f90080-88c5-44ef-87d5-7250852d1557/throneysysyes.png?auto=webp&width=1200"
        }
      ]
    }
  },

  // ADD MORE SERIES HERE - Copy the template above
];

function setupUserDropdown() {
  const userTrigger = document.getElementById('userProfileTrigger');
  const userDropdown = document.getElementById('userDropdown');
  const dropdownArrow = document.getElementById('dropdownArrow');

  if (!userTrigger || !userDropdown) return;

  userDropdown.style.display = 'none';

  userTrigger.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (userDropdown.style.display === 'block') {
      userDropdown.style.display = 'none';
      userTrigger.classList.remove('active');
      if (dropdownArrow) dropdownArrow.style.transform = 'rotate(0deg)';
    } else {
      const triggerRect = userTrigger.getBoundingClientRect();
      userDropdown.style.cssText = `
        position: fixed !important;
        top: ${triggerRect.bottom + 5}px !important;
        right: ${window.innerWidth - triggerRect.right}px !important;
        background: #141414 !important;
        border: 2px solid #e50914 !important;
        border-radius: 8px !important;
        padding: 15px 0 !important;
        min-width: 200px !important;
        z-index: 1001 !important;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(229, 9, 20, 0.7) !important;
        display: block !important;
      `;
      userDropdown.style.display = 'block';
      userTrigger.classList.add('active');
      if (dropdownArrow) dropdownArrow.style.transform = 'rotate(180deg)';
    }
  });

  document.addEventListener('click', function (e) {
    if (!userTrigger.contains(e.target) && !userDropdown.contains(e.target)) {
      userDropdown.style.display = 'none';
      userTrigger.classList.remove('active');
      if (dropdownArrow) dropdownArrow.style.transform = 'rotate(0deg)';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      userDropdown.style.display = 'none';
      userTrigger.classList.remove('active');
      if (dropdownArrow) dropdownArrow.style.transform = 'rotate(0deg)';
    }
  });

  userDropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
      userDropdown.style.display = 'none';
      userTrigger.classList.remove('active');
      if (dropdownArrow) dropdownArrow.style.transform = 'rotate(0deg)';
    });
  });
}

function setupSearch() {
  const searchBox = document.querySelector('.search-box');
  const searchInput = document.querySelector('.search-input');
  const searchIcon = document.querySelector('.search-icon');
  const searchClose = document.querySelector('.search-close');

  if (!searchBox || !searchInput) return;

  let searchResults = document.querySelector('.search-results');
  if (!searchResults) {
    searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    searchResults.style.display = 'none';
    document.querySelector('.search-container').appendChild(searchResults);
  }

  searchResults.style.cssText = '';

  searchIcon?.addEventListener('click', function (e) {
    e.stopPropagation();
    if (!searchBox.classList.contains('active')) {
      searchBox.classList.add('active');
      searchInput.focus();
    }
  });

  searchClose?.addEventListener('click', function (e) {
    e.stopPropagation();
    searchBox.classList.remove('active');
    searchInput.value = '';
    searchResults.style.display = 'none';
    searchResults.innerHTML = '';
  });

  searchInput.addEventListener('input', function (e) {
    const query = e.target.value.trim().toLowerCase();

    if (query.length < 2) {
      searchResults.style.display = 'none';
      searchResults.innerHTML = '';
      return;
    }

    const allSearchData = [...carouselMovies, ...allMovies, ...webSeriesData];
    const searchResultsData = allSearchData.filter(item =>
      item.title.toLowerCase().includes(query)
    );

    searchResults.style.cssText = `
      position: fixed;
      top: 130px !important;
      background: #000000;
      background-color: #000000;
      border: 2px solid #e50914;
      border-radius: 8px;
      z-index: 1005;
      overflow-y: auto;
      display: block;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    `;

    if (window.innerWidth <= 768) {
      searchResults.style.top = '130px';
      searchResults.style.left = '15px';
      searchResults.style.right = '15px';
      searchResults.style.width = 'calc(100vw - 30px)';
      searchResults.style.maxHeight = '60vh';
      searchResults.style.overflowY = 'auto';
    } else {
      const rect = searchBox.getBoundingClientRect();
      searchResults.style.top = (rect.bottom + 5) + 'px';
      searchResults.style.left = rect.left + 'px';
      searchResults.style.width = rect.width + 'px';
      searchResults.style.maxHeight = '400px';
      searchResults.style.overflowY = 'auto';
    }

    if (searchResultsData.length === 0) {
      searchResults.innerHTML = `
        <div style="text-align: center; padding: 30px 20px; color: #888; background: #000000;">
          <i class="fas fa-search" style="font-size: 40px; color: #e50914; margin-bottom: 10px;"></i>
          <p style="background: #000000;">No results for "${query}"</p>
        </div>
      `;
    } else {
      let html = `
        <div style="background: #000000;">
          <h4 style="margin: 0; padding: 15px; color: #e50914; border-bottom: 1px solid #e50914; background: #000000;">
            Search Results (${searchResultsData.length})
          </h4>
      `;

      searchResultsData.slice(0, 10).forEach(item => {
        const image = item.poster || item.image || 'https://via.placeholder.com/50x50/333/666?text=No+Image';
        const genre = item.genre || (item.genres ? item.genres[0] : 'Movie');
        const duration = item.duration || (item.seasons ? `${item.seasons} Seasons` : 'N/A');

        html += `
          <div style="display: flex; align-items: center; padding: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); cursor: pointer; background: #000000;" data-title="${item.title}">
            <img src="${image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px; margin-right: 15px;">
            <div>
              <div style="color: white; font-weight: bold; margin-bottom: 5px; background: #000000;">${item.title}</div>
              <div style="color: #aaa; font-size: 12px; background: #000000;">${genre} • ${duration}</div>
            </div>
          </div>
        `;
      });

      html += '</div>';
      searchResults.innerHTML = html;

      searchResults.querySelectorAll('div[data-title]').forEach(item => {
        item.addEventListener('click', function () {
          alert(`🎬 Playing: ${this.getAttribute('data-title')}`);
          searchBox.classList.remove('active');
          searchInput.value = '';
          searchResults.style.display = 'none';
        });
      });
    }

    searchResults.style.display = 'block';
  });

  document.addEventListener('click', function (e) {
    if (!searchBox.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      searchResults.style.display = 'none';
    }
  });
}

function setupCarousel() {
  let currentIndex = 0;
  const sliderTrack = document.getElementById('sliderTrack');
  const heroBg = document.getElementById('heroBg');
  const mobileSliderTrack = document.getElementById('mobileSliderTrack');

  if (!sliderTrack || carouselMovies.length === 0) return;

  // Initialize hero background with first movie
  heroBg.style.backgroundImage = `url('${carouselMovies[0].hero_bg}')`;
  heroBg.style.backgroundSize = 'cover';
  heroBg.style.backgroundPosition = 'top center';
  heroBg.style.backgroundRepeat = 'no-repeat';

  sliderTrack.innerHTML = '';

  carouselMovies.forEach((movie, index) => {
    const card = document.createElement('div');
    card.className = `movie-card ${index === 0 ? 'active' : 'inactive'}`;
    card.setAttribute('data-index', index);
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <div class="mini-genre">${movie.genres[0]}</div>
      </div>
    `;

    card.addEventListener('click', () => {
      updateCarouselContent(index);
      updateCardStates(index);
      currentIndex = index;
      centerActiveCard();
      centerActiveMobileCard();
    });

    sliderTrack.appendChild(card);
  });

  if (mobileSliderTrack) {
    mobileSliderTrack.innerHTML = '';
    carouselMovies.forEach((movie, index) => {
      const card = document.createElement('div');
      card.className = `movie-card ${index === 0 ? 'active' : 'inactive'}`;
      card.style.width = '160px';
      card.style.height = '240px';
      card.setAttribute('data-index', index);
      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" loading="lazy" style="width: 100vw; height: 100vh; object-fit: cover;">
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <div class="mini-genre">${movie.genres[0]}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        updateCarouselContent(index);
        updateMobileCardStates(index);
        updateCardStates(index);
        currentIndex = index;
        centerActiveCard();
        centerActiveMobileCard();
      });

      mobileSliderTrack.appendChild(card);
    });
  }

  function updateCarouselContent(index) {
    const movie = carouselMovies[index];

    // Update text content
    document.getElementById('movieTitle').textContent = movie.title;
    document.getElementById('movieRating').textContent = movie.rating;
    document.getElementById('movieDuration').textContent = movie.duration;
    document.getElementById('movieDescription').textContent = movie.description;
    document.getElementById('castCrew').textContent = movie.cast;

    // Update genre tags
    const genreTags = document.getElementById('genreTags');
    genreTags.innerHTML = '';
    movie.genres.forEach(genre => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = genre;
      genreTags.appendChild(tag);
    });

    // Update hero background image
    heroBg.style.backgroundImage = `url('${movie.hero_bg}')`;
    
    // Add smooth transition effect
    heroBg.style.opacity = '0.8';
    setTimeout(() => {
      heroBg.style.opacity = '1';
    }, 300);
  }

  function centerActiveCard() {
    if (window.innerWidth > 991) {
      const rightSlider = document.querySelector('.right-slider');
      if (!rightSlider) return;

      const sliderHeight = rightSlider.offsetHeight;
      const activeCard = document.querySelector('#sliderTrack .movie-card.active');
      if (!activeCard) return;

      const allCards = document.querySelectorAll('#sliderTrack .movie-card');
      let totalHeight = 0;
      allCards.forEach(card => {
        if (card.classList.contains('active')) {
          totalHeight += 380;
        } else {
          totalHeight += 220;
        }
      });

      totalHeight -= 20;
      let activeCardPosition = 0;
      for (let i = 0; i < currentIndex; i++) {
        if (i === currentIndex) break;
        if (i === 0) {
          activeCardPosition += 200;
        } else {
          activeCardPosition += 220;
        }
      }

      activeCardPosition += 190;
      const sliderCenter = sliderHeight / 2;
      const offset = sliderCenter - activeCardPosition;

      sliderTrack.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      sliderTrack.style.transform = `translateY(${offset}px)`;
    }
  }

  function centerActiveMobileCard() {
    if (window.innerWidth <= 991 && mobileSliderTrack) {
      const mobileSlider = document.querySelector('.mobile-right-slider');
      if (!mobileSlider) return;

      const containerWidth = mobileSlider.offsetWidth;
      const activeCard = document.querySelector('#mobileSliderTrack .movie-card.active');
      if (!activeCard) return;

      const cardWidth = 160;
      const gap = 15;
      const centerPosition = (containerWidth / 2) - (cardWidth / 2);
      const cardPosition = currentIndex * (cardWidth + gap);
      const offset = centerPosition - cardPosition;

      mobileSliderTrack.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      mobileSliderTrack.style.transform = `translateX(${offset}px)`;
    }
  }

  function updateCardStates(activeIndex) {
    const cards = document.querySelectorAll('#sliderTrack .movie-card');
    cards.forEach((card, index) => {
      card.classList.toggle('active', index === activeIndex);
      card.classList.toggle('inactive', index !== activeIndex);
    });
  }

  function updateMobileCardStates(activeIndex) {
    const cards = document.querySelectorAll('#mobileSliderTrack .movie-card');
    cards.forEach((card, index) => {
      card.classList.toggle('active', index === activeIndex);
      card.classList.toggle('inactive', index !== activeIndex);
    });
  }

  // Navigation button event listeners
  document.getElementById('sliderPrevBtn')?.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselMovies.length - 1;
    updateCarouselContent(currentIndex);
    updateCardStates(currentIndex);
    updateMobileCardStates(currentIndex);
    centerActiveCard();
    centerActiveMobileCard();
  });

  document.getElementById('sliderNextBtn')?.addEventListener('click', () => {
    currentIndex = currentIndex < carouselMovies.length - 1 ? currentIndex + 1 : 0;
    updateCarouselContent(currentIndex);
    updateCardStates(currentIndex);
    updateMobileCardStates(currentIndex);
    centerActiveCard();
    centerActiveMobileCard();
  });

  document.getElementById('mobileSliderPrevBtn')?.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselMovies.length - 1;
    updateCarouselContent(currentIndex);
    updateMobileCardStates(currentIndex);
    updateCardStates(currentIndex);
    centerActiveCard();
    centerActiveMobileCard();
  });

  document.getElementById('mobileSliderNextBtn')?.addEventListener('click', () => {
    currentIndex = currentIndex < carouselMovies.length - 1 ? currentIndex + 1 : 0;
    updateCarouselContent(currentIndex);
    updateMobileCardStates(currentIndex);
    updateCardStates(currentIndex);
    centerActiveCard();
    centerActiveMobileCard();
  });

  // Initialize with first movie
  updateCarouselContent(0);

  // Center cards after initial render
  setTimeout(() => {
    centerActiveCard();
    centerActiveMobileCard();
  }, 300);

  // Handle window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 991) {
      document.querySelector('.right-slider')?.style.setProperty('display', 'none', 'important');
      document.querySelector('.vertical-slider-nav')?.style.setProperty('display', 'none', 'important');
      document.querySelector('.mobile-right-slider')?.style.setProperty('display', 'none', 'important');

      if (mobileSliderTrack) {
        mobileSliderTrack.style.transition = 'none';
        centerActiveMobileCard();
      }
    } else {
      document.querySelector('.right-slider')?.style.setProperty('display', 'block', 'important');
      document.querySelector('.vertical-slider-nav')?.style.setProperty('display', 'flex', 'important');
      document.querySelector('.mobile-right-slider')?.style.setProperty('display', 'none', 'important');

      if (sliderTrack) {
        sliderTrack.style.transition = 'none';
        centerActiveCard();
      }
    }

    setTimeout(() => {
      centerActiveCard();
      centerActiveMobileCard();
    }, 100);
  });

  // Initialize based on screen size
  if (window.innerWidth <= 991) {
    centerActiveMobileCard();
  } else {
    centerActiveCard();
  }
}

function generateMovieCards() {
  const sections = [
    { id: 'upcoming-wrapper', category: 'upcoming' },
    { id: 'top-ten-wrapper', category: 'top-ten' },
    { id: 'suggested-wrapper', category: 'upcoming' },
    { id: 'trending-today-wrapper', category: 'trending' },
    { id: 'trending-week-wrapper', category: 'trending' },
    { id: 'trending-month-wrapper', category: 'trending' }
  ];

  sections.forEach(section => {
    const container = document.getElementById(section.id);
    if (!container) return;

    container.innerHTML = '';

    const filteredMovies = allMovies.filter(movie => movie.category === section.category);

    filteredMovies.forEach(movie => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `
        <div class="movie-card-section">
          <div class="card-img-box">
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            <div class="card-hover-actions">
              <button class="action-icon play"><i class="fas fa-play"></i></button>
              <button class="action-icon"><i class="fas fa-plus"></i></button>
              <button class="action-icon"><i class="fas fa-thumbs-up"></i></button>
            </div>
          </div>
          <div class="card-details">
            <h5 class="card-title">${movie.title}</h5>
            <div class="card-meta">
              <span>${movie.duration}</span>
              <span class="card-quality">${movie.quality}</span>
            </div>
          </div>
        </div>
      `;

      slide.querySelector('.play').addEventListener('click', (e) => {
        e.stopPropagation();
        alert(`Now playing: ${movie.title}`);
      });

      container.appendChild(slide);
    });
  });
}

function initializeSwipers() {
  if (typeof Swiper === 'undefined') return;

  document.querySelectorAll('.content-swiper').forEach(swiperEl => {
    new Swiper(swiperEl, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: swiperEl.querySelector('.swiper-button-next'),
        prevEl: swiperEl.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 15 },
        480: { slidesPerView: 1, spaceBetween: 20 },
        576: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        992: { slidesPerView: 4, spaceBetween: 25 },
        1200: { slidesPerView: 5, spaceBetween: 25 },
        1400: { slidesPerView: 6, spaceBetween: 30 }
      }
    });
  });

  document.querySelectorAll('.trending-tab').forEach(tab => {
    tab.addEventListener('click', function () {
      const tabId = this.getAttribute('data-tab');

      document.querySelectorAll('.trending-tab').forEach(t => {
        t.classList.remove('active');
      });
      this.classList.add('active');

      document.querySelectorAll('.trending-content').forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(tabId).classList.add('active');
    });
  });
}

function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger-menu');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileNavClose = document.querySelector('.mobile-nav-close');

  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', function () {
    const isActive = hamburger.classList.contains('active');
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    mobileNavOverlay.classList.toggle('active');
    document.body.style.overflow = isActive ? '' : 'hidden';
  });

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', function () {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      mobileNavOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', function () {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      mobileNavOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
}

let currentSeriesIndex = 0;
let currentSeason = 1;

function setupWebSeries() {
  const webSeriesSection = document.querySelector('.web-series-section');
  if (!webSeriesSection) return;

  updateSeriesDisplay();
  setupSeriesNavigation();
}

function updateSeriesDisplay() {
  const series = webSeriesData[currentSeriesIndex];

  const currentSeriesNum = document.getElementById('currentSeriesNum');
  if (currentSeriesNum) {
    currentSeriesNum.textContent = series.id;
  }

  const seriesBg = document.getElementById('seriesBg');
  if (seriesBg) {
    seriesBg.style.backgroundImage = `url('${series.image}')`;
  }

  const seriesRank = document.getElementById('seriesRank');
  const seriesTitle = document.getElementById('seriesTitle');
  const seriesRating = document.getElementById('seriesRating');
  const seriesYear = document.getElementById('seriesYear');
  const seriesSeasons = document.getElementById('seriesSeasons');
  const seriesEpisodes = document.getElementById('seriesEpisodes');
  const seriesDescription = document.getElementById('seriesDescription');
  const seasonsCount = document.getElementById('seasonsCount');

  if (seriesRank) seriesRank.textContent = series.id;
  if (seriesTitle) seriesTitle.textContent = series.title;
  if (seriesRating) seriesRating.textContent = series.rating;
  if (seriesYear) seriesYear.textContent = series.year;
  if (seriesSeasons) seriesSeasons.textContent = `${series.seasons} Seasons`;
  if (seriesEpisodes) seriesEpisodes.textContent = `${series.episodes} Episodes`;
  if (seriesDescription) seriesDescription.textContent = series.description;
  if (seasonsCount) seasonsCount.textContent = `${series.seasons} Seasons`;

  const genresContainer = document.getElementById('seriesGenres');
  if (genresContainer) {
    genresContainer.innerHTML = series.genres.map(genre =>
      `<span class="genre-tag">${genre}</span>`
    ).join('');
  }

  updateSeasonsTabs();
  updateEpisodesList();
}

function updateSeasonsTabs() {
  const series = webSeriesData[currentSeriesIndex];
  const tabsContainer = document.getElementById('seasonsTabs');

  if (!tabsContainer) return;

  tabsContainer.innerHTML = '';

  for (let seasonNum = 1; seasonNum <= series.seasons; seasonNum++) {
    const tab = document.createElement('div');
    tab.className = `season-tab ${seasonNum === currentSeason ? 'active' : ''}`;
    tab.textContent = `Season ${seasonNum}`;
    tab.dataset.season = seasonNum;

    tab.addEventListener('click', () => {
      currentSeason = seasonNum;
      document.querySelectorAll('.season-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      updateEpisodesList();
    });

    tabsContainer.appendChild(tab);
  }
}

function updateEpisodesList() {
  const series = webSeriesData[currentSeriesIndex];
  const episodes = series.seasonsData[currentSeason] || [];
  const episodesList = document.getElementById('episodesList');
  const seasonTitle = document.getElementById('currentSeasonTitle');
  const episodesCount = document.getElementById('episodesCount');

  if (seasonTitle) {
    seasonTitle.textContent = `Season ${currentSeason}`;
  }

  if (episodesCount) {
    episodesCount.textContent = `${episodes.length} Episodes`;
  }

  if (!episodesList) return;

  episodesList.innerHTML = episodes.map(ep => `
    <div class="episode-item" onclick="playEpisode(${currentSeriesIndex + 1}, ${currentSeason}, ${ep.episode})">
      <div class="episode-image-container">
        <img src="${ep.image}" alt="${ep.title}" class="episode-image">
        <div class="episode-overlay">
          <i class="fas fa-play"></i>
        </div>
        <div class="episode-number">Episode ${ep.episode}</div>
      </div>
      <div class="episode-content">
        <div class="episode-title">${ep.title}</div>
        <div class="episode-meta">
          <div class="episode-duration">
            <i class="far fa-clock"></i>
            <span>${ep.duration}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function setupSeriesNavigation() {
  const prevBtn = document.querySelector('.series-prev');
  const nextBtn = document.querySelector('.series-next');
  const playBtn = document.querySelector('.series-play-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentSeriesIndex = (currentSeriesIndex - 1 + webSeriesData.length) % webSeriesData.length;
      currentSeason = 1;
      updateSeriesDisplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentSeriesIndex = (currentSeriesIndex + 1) % webSeriesData.length;
      currentSeason = 1;
      updateSeriesDisplay();
    });
  }

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      playSeries(currentSeriesIndex);
    });
  }
}

function playEpisode(seriesId, season, episode) {
  const series = webSeriesData[seriesId - 1];
  const episodeData = series.seasonsData[season]?.find(ep => ep.episode === episode);
  if (episodeData) {
    alert(`🎬 Playing: ${series.title}\nSeason ${season}, Episode ${episode}: ${episodeData.title}`);
  }
}

function playSeries(seriesIndex) {
  const series = webSeriesData[seriesIndex];
  alert(`🎬 Starting: ${series.title}\nPlaying Season 1, Episode 1`);
}

function setupContinueWatching() {
  const continueMovies = [
  {
    title: "Dune: Part Two",
    date: "Mar-2024",
    image: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.5,
    progress: 65
  },
  {
    title: "The Batman",
    date: "Mar-2022",
    image: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
    rating: 4.7,
    progress: 42
  },
  {
    title: "Inception",
    date: "Jul-2010",
    image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    rating: 4.8,
    progress: 78
  },
  {
    title: "Interstellar",
    date: "Nov-2014",
    image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    rating: 4.6,
    progress: 23
  },
  {
    title: "Mad Max: Fury Road",
    date: "May-2015",
    image: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    rating: 4.5,
    progress: 89
  },
  {
    title: "Avatar: The Way of Water",
    date: "Dec-2022",
    image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
    rating: 4.7,
    progress: 55
  },
  {
    title: "Parasite",
    date: "Nov-2019",
    image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
    rating: 4.9,
    progress: 92
  },
  {
    title: "Top Gun: Maverick",
    date: "May-2022",
    image: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
    rating: 4.8,
    progress: 71
  },
  {
    title: "The Dark Knight",
    date: "Jul-2008",
    image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    rating: 4.9,
    progress: 34
  },
  {
    title: "Spider-Man: No Way Home",
    date: "Dec-2021",
    image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    rating: 4.6,
    progress: 48
  },
  {
    title: "The Shawshank Redemption",
    date: "Sep-1994",
    image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    rating: 4.9,
    progress: 67
  },
  {
    title: "Oppenheimer",
    date: "Jul-2023",
    image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg",
    rating: 4.8,
    progress: 81
  },
  {
    title: "La La Land",
    date: "Dec-2016",
    image: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_FMjpg_UX1000_.jpg",
    rating: 4.7,
    progress: 56
  },
  {
    title: "Everything Everywhere All at Once",
    date: "Mar-2022",
    image: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg",
    rating: 4.8,
    progress: 39
  },
  {
    title: "Avengers: Endgame",
    date: "Apr-2019",
    image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
    rating: 4.7,
    progress: 74
  }
];

  const container = document.getElementById('continueMoviesContainer');
  if (!container) return;

  container.innerHTML = continueMovies.map(movie => `
    <div class="continue-movie-card" onclick="playMovie('${movie.title}')">
      <img src="${movie.image}" alt="${movie.title}" loading="lazy">
      <div class="continue-movie-info">
        <div class="continue-movie-title">${movie.title}</div>
        <div class="continue-movie-meta">
          <span class="continue-movie-date">${movie.date}</span>
          <span class="continue-movie-rating">★ ${movie.rating}</span>
        </div>
      </div>
      <div class="continue-progress-bar" style="width: ${movie.progress}%"></div>
    </div>
  `).join('');

  const prevBtn = document.querySelector('.continue-prev');
  const nextBtn = document.querySelector('.continue-next');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
}

function playMovie(title) {
  alert(`🎬 Playing: ${title}`);
}

function playSeries(seriesIndex) {
  const series = webSeriesData[seriesIndex];
  alert(`🎬 Starting: ${series.title}\nPlaying Season 1, Episode 1`);
}

function playEpisode(seriesId, season, episode) {
  const series = webSeriesData[seriesId - 1];
  const episodeData = series.seasonsData[season]?.find(ep => ep.episode === episode);
  if (episodeData) {
    alert(`🎬 Playing: ${series.title}\nSeason ${season}, Episode ${episode}: ${episodeData.title}`);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('🎬 NEXUS Streaming Platform Initializing...');

  setupUserDropdown();
  setupSearch();
  setupMobileMenu();
  setupCarousel();
  generateMovieCards();
  setupContinueWatching();
  setupWebSeries();

  setTimeout(initializeSwipers, 500);

  console.log('✅ All features initialized successfully!');
  console.log(`📺 ${webSeriesData.length} Web Series Loaded:`);
  webSeriesData.forEach(series => {
    console.log(`   ${series.id}. ${series.title} - ${series.seasons} Seasons, ${series.episodes} Episodes`);
  });

  // Set initial display based on screen size
  if (window.innerWidth <= 991) {
    document.querySelector('.right-slider')?.style.setProperty('display', 'none', 'important');
    document.querySelector('.vertical-slider-nav')?.style.setProperty('display', 'none', 'important');
    document.querySelector('.mobile-right-slider')?.style.setProperty('display', 'flex', 'important');
  }
});

window.addEventListener('resize', function () {
  const userDropdown = document.getElementById('userDropdown');
  const userTrigger = document.getElementById('userProfileTrigger');

  if (userDropdown && userDropdown.style.display === 'block' && userTrigger) {
    const triggerRect = userTrigger.getBoundingClientRect();
    userDropdown.style.top = `${triggerRect.bottom + 5}px`;
    userDropdown.style.right = `${window.innerWidth - triggerRect.right}px`;
  }

  const searchResults = document.querySelector('.search-results');
  const searchBox = document.querySelector('.search-box');

  if (searchResults && searchResults.style.display === 'block' && searchBox) {
    const searchRect = searchBox.getBoundingClientRect();
    searchResults.style.top = `${searchRect.bottom + 5}px`;
    searchResults.style.left = `${searchRect.left}px`;
    searchResults.style.width = `${searchRect.width}px`;
  }

  // Ensure hero background maintains proper sizing
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    heroBg.style.backgroundSize = 'cover';
    heroBg.style.backgroundPosition = 'center';
  }

  if (window.innerWidth <= 991) {
    document.querySelector('.right-slider')?.style.setProperty('display', 'none', 'important');
    document.querySelector('.vertical-slider-nav')?.style.setProperty('display', 'none', 'important');
    document.querySelector('.mobile-right-slider')?.style.setProperty('display', 'flex', 'important');
  } else {
    document.querySelector('.right-slider')?.style.setProperty('display', 'block', 'important');
    document.querySelector('.vertical-slider-nav')?.style.setProperty('display', 'flex', 'important');
    document.querySelector('.mobile-right-slider')?.style.setProperty('display', 'none', 'important');
  }

  // Re-center cards after resize
  setTimeout(() => {
    const activeCard = document.querySelector('.movie-card.active');
    if (activeCard) {
      const currentIndex = parseInt(activeCard.getAttribute('data-index')) || 0;
      if (window.innerWidth > 991) {
        centerActiveCard();
      } else {
        centerActiveMobileCard();
      }
    }
  }, 150);
});

window.addEventListener('scroll', function () {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.visibility = 'visible';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.visibility = 'hidden';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  