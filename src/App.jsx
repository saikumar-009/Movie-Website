import React,{useState,useEffect} from 'react'
import "./App.css"
import mockMovies from "./data/mockMovies"
import MovieCard from './components/MovieCard'
import MovieModal from './components/MovieModal'
import Header from './components/Header'


//creating tow variable for displaying initially and loaded
const MOVIES_INITIAL = 20
const MOVIES_PER_LOAD = 10

const App = () => {

  const[movies, setMovies] = useState([]);
  const[visibleCount, setVisibleCount] = useState(MOVIES_INITIAL);
  const[modalMovies,setModalMovies] = useState(null);
  const[searchTerm,setSearchTerm] = useState("");
  const[sortYear,setSortYear] = useState(null);
  const[darkMode,setDarkMode] = useState(false);
  console.log(darkMode);

  useEffect(()=>{
    setMovies(mockMovies);
  },[]);

const filteredMovies = movies.filter((movie)=>
  movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

if(sortYear === "asc"){
  filteredMovies.sort((a, b) => a.year - b.year);
}else if (sortYear ==="desc"){
  filteredMovies.sort((a, b) => b.year - a.year);
}

const displayedMovies = filteredMovies.slice(0,visibleCount);

const handleMoremovies = ()=>{
  //acces 20 movies
  setVisibleCount((prev)=> prev + MOVIES_PER_LOAD);
}



  return (
    <div className={darkMode ? "app dark" : "app"} >


      <Header searchTerm={searchTerm}
       setSearchTerm={setSearchTerm}
        sortYear={sortYear} 
        setSortYear={setSortYear} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        />


      <div className="movie-list" >
        {

          //map function to use displaying all movies at a time
          //each indudival movie target so we use movie
          displayedMovies.map((movie)=>(
            
            <MovieCard key={movie.id} movie={movie} openModal={setModalMovies} />))
        }
      </div>
       
      {
        // when ever count length is less then movies length displaying button
        //using conditional rendering
        visibleCount < movies.length && (
          <div className='load-more-container' >
            <button className='load-more-btn' onClick={handleMoremovies } >Show More</button>
          </div>
        )
      }

      {
        //intial null && oparator will fail in true && oparator execute 
        modalMovies && (
          <MovieModal movie={modalMovies} closeModal={()=>setModalMovies(null)} />
        )
      }
    </div>
  )
}

export default App
