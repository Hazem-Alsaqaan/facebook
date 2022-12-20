import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/pages/home/Home';
import Account from './components/pages/account/Account';
import Watch from './components/pages/watch/Watch';
import Shopping from './components/pages/shopping/Shopping';
import Groups from './components/pages/groups/Groups';
import Games from './components/pages/games/Games';
import MainPage from './components/pages/mainPage/MainPage';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route  path='/home' element= {<Home/>}/>
        <Route path='/watch' element= {<Watch />}/>
        <Route path='/shopping' element= {<Shopping/>}/>
        <Route path='/groups' element= {<Groups/>}/>
        <Route path='/games' element= {<Games/>}/>
        <Route path='/account' element= {<Account/>}/>
      </Routes>
    </div>
  );
}

export default App;
