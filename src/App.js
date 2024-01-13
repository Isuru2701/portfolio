import { Button } from 'react-bootstrap';
import './App.css';

import { ReactComponent as GmailIcon } from './icons/gmail.svg';
import { ReactComponent as GithubIcon } from './icons/github.svg';
import { ReactComponent as LinkedinIcon } from './icons/linkedin.svg';
import { ReactComponent as InstagramIcon } from './icons/instagram.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        ISURU YAHAMPATH

        <span className="Sub-header">
          <p style={{marginLeft: 100}}>Ruru ルール</p>

          <span className='Sub-header-grid'>
            <Button className="Icon-button" name="gmail">
              <GmailIcon />
            </Button>

            <Button className="Icon-button" name="github">
              <GithubIcon />
            </Button>

            <Button className="Icon-button" name="linkedin">
              <LinkedinIcon />

            </Button>

            <Button className="Icon-button" name="instagram">
              <InstagramIcon />

            </Button>
          </span>
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
