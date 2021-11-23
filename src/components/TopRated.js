import Footer from './Footer'
import Hero from './Hero';
import React from 'react';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const TopRatedCard = ({ topRated }) => {
  const topRatedPosterUrl =`https://image.tmdb.org/t/p/w500${topRated.poster_path}`
  const topRatedDetailUrl = `/movies/${topRated.id}`

  return(
    <div className= "col-lg-4 col-md-4 col-sm-6 mt-3 d-flex align-items-stretch">
  <div className="card text-center  mb-5 border border-warning" >
  <img src={topRatedPosterUrl} class="card-img-top" alt={topRated.original_title}/>
<div className="card-body h-100 bg-warning">
    <h5 className="card-title">{topRated.original_title}</h5>
  <Link to={topRatedDetailUrl} class="btn btn-danger">Show details</Link>
  </div>
</div>
</div>
)
}



const TopRatedView = (data) => {

  const [topRatedResults, setTopRatedResults] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=776d38251dae661e04c01631cfa95286&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setTopRatedResults(data.results);
      });
  });


  const topRatedHtml = React.useMemo(()=> topRatedResults?.map((obj, i) => {
    return (<TopRatedCard topRated={obj} key={i} />)
  }), [topRatedResults])

  return (
    <div className="custombg">
      <Hero text="Top Rated Movies" />
      {topRatedHtml && (
        <div className="container">
          <div className="row">{topRatedHtml}</div>
        </div>
      )}
      
    </div>
  );

};

export default TopRatedView;
