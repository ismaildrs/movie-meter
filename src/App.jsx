import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import MovieSerie from './Pages/MovieSerie';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import PageNotFound from './Pages/PageNotFound';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/">
            <Route path=':id' element={<MovieSerie />} />
            <Route index element={<Movies />} />
          </Route>
          <Route path="series/">
            <Route path=':id' element={<MovieSerie />} />
            <Route index element={<Series />} />
          </Route>
          
        </Route>
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;