import Counter from './components/counter';
import './App.css';

const App=()=> {
  const initial=20;
  console.log("App component runs");
  return (
    <div className="App">
     <Counter  initial={initial}/>
    </div>
  );
}

export default App;
