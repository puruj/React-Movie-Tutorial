import MovieCard from "../components/MovieCard";
import {useState} from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: 'The Godfather', release_date: 'March 24, 1972', url: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg'},
        {id: 2, title: 'The Shawshank Redemption', release_date: 'September 23, 1994', url: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg'},
        {id: 3, title: 'The Dark Knight', release_date: 'July 18, 2008', url: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg'}
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for ${searchQuery}`);
    }

    return ( 
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;