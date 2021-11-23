import Hero from './Hero'
import { Link } from 'react-router-dom'

// TMDB api key 776d38251dae661e04c01631cfa95286

const MovieCard = ({ movie}) => {
  const posterUrl =`https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`

  return(
    <div className= "col-lg-4 col-md-3 col-2 mt-3 mb-3 text-center d-flex align-items-stretch">
  <div className="card h-100 border border-warning "  >
  <img src={posterUrl} class="card-img-top" alt={movie.original_title}/>
  <div className="card-body text-white bg-warning ">
    <h5 className="card-title">{movie.original_title}</h5>
    <Link to={detailUrl} class="btn btn-danger ">Show details</Link>
  </div>
</div>
</div>
)
}
const SearchView = ({keyword, searchResults}) => {
  const title = `You are searching for ${keyword}`
  const resultsHtml = searchResults.map((obj, i) => {
return <MovieCard movie={obj} key={i} />

})

  return(
    <div className="custombg">
<Hero text={title}/>
{resultsHtml &&
      <div className="container">
       <div className="row">
       {resultsHtml}
       </div>
       </div>}
    </div>
  );
};

export default SearchView;
