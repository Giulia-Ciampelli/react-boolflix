// #region importazioni
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// layout
import DefaulLayout from './pages/DefaultLayout';

// pagine
// import Home from './pages/Home.jsx';
import List from './pages/List.jsx';
// import About from './pages/About.jsx';

// context
import { CallResultsProvider } from './contexts/CallResultsContext.jsx';
import { CallPopularsProvider } from './contexts/CallPopularsContext.jsx';
import { CallFlagsProvider } from './contexts/CallFlagsContext.jsx';

// stile
import './App.css';

// #endregion importazioni

function App() {
  return (
    <>
      <CallResultsProvider>
        <CallPopularsProvider>
          <CallFlagsProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<DefaulLayout />}>
                  {/* <Route path='/' element={<Home />}/> */}
                  {/* RICORDA: cambia la rotta in /film in seguito */}
                  <Route path='/' element={<List />} />
                  {/* <Route path='/' element={<Home />}/> // questa sarà la rotta della FilmCard */}
                  {/* <Route path='/about' element={<About />}/> */}
                </Route>
              </Routes>
            </BrowserRouter>
          </CallFlagsProvider>
        </CallPopularsProvider>
      </CallResultsProvider>
    </>
  )
}

export default App
