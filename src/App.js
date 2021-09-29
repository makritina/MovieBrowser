import './sass/main.min.css';
import {useState, useEffect } from 'react'
import Navbar from './components/Navbar.js'
import HomeView from './components/HomeView.js'
import Trending from './components/Trending.js'
import TopRated from './components/TopRated.js'
import SearchView from './components/SearchView'
import MovieView from './components/MovieView'
import {Switch, Route} from 'react-router-dom'


function App() {

const [searchResults, setSearchResults] = useState ([])
const [searchText, setSearchText] = useState('')

useEffect(() => {

  if(searchText){
  console.log(searchText)
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=776d38251dae661e04c01631cfa95286&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data =>{
   setSearchResults(data.results)
 })
}
}, [searchText])




  return (
    <div>

    <Navbar searchText={searchText} setSearchText={setSearchText}/>
    <Switch>
    <Route path="/" exact>
<HomeView/>
</Route>
<Route path="/trending" component={Trending}/>
<Route path="/search">
<SearchView keyword={searchText} searchResults={searchResults}/>
</Route>
<Route path="/movies/:id" component={MovieView}/>
<Route path="/topRated" component={TopRated}/>
</Switch>

    </div>
  );
}

export default App;
