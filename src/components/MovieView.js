import Hero from './Hero';
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const MovieView = () => {
  const { id } = useParams ()
  const [movieDetails, setMovieDetails] = useState({})
  const [isLoading, setIsLoading] = useState (true)

  useEffect(() =>{
    console.log('make an api request')
   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=776d38251dae661e04c01631cfa95286&language=en-US`)
.then(response => response.json())
.then(data => {
  setMovieDetails(data)
  setIsLoading(false)
})
  }, [id])

function renderMovieDetails() {
  if(isLoading){
    return <Hero text="Loading.. "/>
  }
  if(movieDetails) {
    const posterPath= `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
    const backdropUrl =`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

 return (
   <div className="custombg">
  <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
<div className="container my-5 text-white ">
  <div className="row">
  <div className="col-md-3 ">
  <img src={posterPath} alt={movieDetails.original_title} className="img-fluid shadow rounded"/>
  </div>
  <div className="col-md-9 ">
  <h2 className="text-center">{movieDetails.original_title}</h2>
<p className="lead"><h3>Overview</h3> {movieDetails.overview} </p>
<div className="col-md-9 ">
<p className="lead"><h3>Status</h3>{movieDetails.status} </p>
</div>
<div className="col-md-9 ">
<p className="lead"><h3>Rating</h3> {movieDetails.vote_average} <i class="fas fa-star"></i></p>
</div>

  </div>

  </div>

   </div>
   <Footer/>
</div>

 )
  }
}

  return renderMovieDetails()
}

export default MovieView;
