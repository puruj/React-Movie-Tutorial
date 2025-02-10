import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
  <div>
    <MovieCard movie={{title: 'The Godfather', release_date: 'March 24, 1972', url: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg'}} />
    <MovieCard movie={{title: 'The Shawshank Redemption', release_date: 'September 23, 1994', url: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg'}} />
  </div>
  )
}

export default App
