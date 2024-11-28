// #region importazioni
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// layout
import DefaulLayout from './pages/DefaultLayout';

// pagine
import Home from './pages/Home.jsx';
import FilmList from './pages/FilmList.jsx';
import About from './pages/About.jsx';

// context

// stile
import './App.css';

// #endregion importazioni

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaulLayout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/films' element={<FilmList />}/>
            {/* <Route path='/' element={<Home />}/> // questa sarà la rotta della FilmCard */}
            <Route path='/about' element={<About />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
