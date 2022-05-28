import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import TopAnime from './components/pages/top-anime/TopAnime';
import SeasonalAnime from './components/pages/seasonal-anime/SeasonalAnime';
import Anime from './components/pages/anime/Anime';
import SearchResults from './components/pages/search-results/SearchResults';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <main className='main-layout'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/top' element={<TopAnime />}></Route>
            <Route path='/seasonal' element={<SeasonalAnime />}></Route>
            <Route path='/anime/:id' element={<Anime />}></Route>
            <Route path='/search-results/:name' element={<SearchResults />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
