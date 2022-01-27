import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <div className="App">
      <CakeContainer />
      <HooksCakeContainer />
      <HooksIceCreamContainer />
      <NewCakeContainer/>
    </div>
  );
}

export default App;
