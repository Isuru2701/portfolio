import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        ISURU YAHAMPATH

        <div className="Button-grid">
          <Button className="Grid-Button" name="about">
              About me
          </Button>
          
          <Button className="Grid-Button" name="projects">
              Projects
          </Button>
          
          <Button className="Grid-Button" name="cv">
              CV
          </Button>
        </div>
      </header>

    </div>
  );
}

export default App;
