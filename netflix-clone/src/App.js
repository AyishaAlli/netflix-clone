import './App.css';
import Row from './Row';
import Banner from './Banner'
import requests from './requests'
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      {/* Navbar  */}
      <Nav />
      {/* Banner  */}
      <Banner />
      {/* Categories */}
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumantaries}/>
    </div>
  );
}

export default App;
