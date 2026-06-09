import React from 'react'
import "./Styles/MovieModal.css"

const MovieModal = ({movie,closeModal}) => {

    //if nothing data in movies that will show null
    if(!movie) return null;
    
  return (
    <div className='modal-overlay' onClick={closeModal}  >
      <div className='modal-content' onClick={(e)=>e.stopPropagation()} >
            <button className='close-btn' onClick={closeModal}>
                X
            </button>
            <img src={movie.poster} alt="" />
            <div className='modal-info'>
                <h2>{movie.title} ({movie.year})</h2>
                <p>{movie.rating}</p>
                <p>{movie.overview}</p>
                <button className='modal-action-btn'>Watch Trailer</button>
            </div>

      </div>
    </div>
  )
}

export default MovieModal
