
import './App.css';
import Button from './Button';
import Counter from './Counter';
import Forms from './Forms';
import Greeting from './Greeting';
import List from './List';

function App() {
  return (
    <div className="App">
      <Button/>
      <Counter/>
      <Forms/>
      <Greeting name="Nithish"></Greeting>
      <List>Nithish <br></br>Senthil Kumar <br></br>Vanitha <br></br></List>
    </div>
  );
}

export default App;
