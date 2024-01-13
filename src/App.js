import { Button } from 'react-bootstrap';
import './App.css';

import GithubIcon from './components/GitHubIcon';
import GmailIcon from './components/GmailIcon';
import LinkedinIcon from './components/LinkedinIcon';
import InstagramIcon from './components/InstagramIcon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        ISURU YAHAMPATH

        <span className="Sub-header">
          Ruru ルール

          <Button className="Icon-button" name="gmail">
              <GmailIcon />
          </Button>

          <Button className="Icon-button" name="github">

          </Button>

          <Button className="Icon-button" name="linkedin">

          </Button>
          
          <Button className="Icon-button" name="instagram">
          
          </Button>
        </span>

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
