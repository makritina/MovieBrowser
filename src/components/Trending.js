import Footer from './Footer'
import Hero from './Hero';
import React from 'react';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const TrendingCard = ({ trending}) => {
  const trendPosterUrl =`https://image.tmdb.org/t/p/w500${trending.poster_path}`
  const trendDetailUrl = `/movies/${trending.id}`

  return(
    <div className= "col-lg-4 col-md-4 col-sm-6 mt-3">
  <div className="card text-center  mb-5 border border-warning" >
  <img src={trendPosterUrl} class="card-img-top" alt={trending.original_title}/>
<div className="card-body h-100 bg-warning">
    <h5 className="card-title">{trending.original_title}</h5>
  <Link to={trendDetailUrl} class="btn btn-danger">Show details</Link>
  </div>
</div>
</div>
)
}

const TrendingView = (data) => {
  const [trendingResults, setTrendingResults] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=776d38251dae661e04c01631cfa95286"
    )
      .then((response) => response.json())
      .then((data) => {
        setTrendingResults(data.results);
      });
  });


  const trendingHtml = React.useMemo(()=> trendingResults?.map((obj, i) => {
    return (<TrendingCard trending={obj} key={i} />)
  }),[trendingResults])

  return (
    <div className="custombg">
      <Hero text="Trending Now" />
      {trendingHtml && (
        <div className="container">
          <div className="row">{trendingHtml}</div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default TrendingView;
