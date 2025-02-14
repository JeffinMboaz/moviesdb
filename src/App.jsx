import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import PopularMovies from './components/movies/PopularMovies';
import Tvshows from './components/Tvshows/Tvshows';
import Upcomingmovies from './components/movies/Upcomingmovies';
import Toprated from './components/movies/Toprated';
import Topratedtv from './components/Tvshows/Topratedtv';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/popularMovies" element={<PopularMovies />} />
            <Route path="/tvshows" element={<Tvshows />} />
            <Route path="/upcomingmovies" element={<Upcomingmovies />} />
            <Route path="/topratedmovies" element={<Toprated />} />
            <Route path="/topratedshows" element={<Topratedtv />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
