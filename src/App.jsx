// #region importazioni
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// layout
import DefaulLayout from './pages/DefaultLayout';

// pagine
// import Home from './pages/Home.jsx';
import FilmList from './pages/FilmList.jsx';
// import About from './pages/About.jsx';

// context
import { CallMovieProvider } from './contexts/CallMovieContext.jsx';

// stile
import './App.css';

// #endregion importazioni

function App() {
  return (
    <>
      <CallMovieProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaulLayout />}>
              {/* <Route path='/' element={<Home />}/> */}

              {/* RICORDA: cambia la rotta in /film in seguito */}
              <Route path='/' element={<FilmList />} />
              {/* <Route path='/' element={<Home />}/> // questa sarà la rotta della FilmCard */}
              {/* <Route path='/about' element={<About />}/> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </CallMovieProvider>
    </>
  )
}

export default App
