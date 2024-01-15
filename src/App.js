import { Button } from 'react-bootstrap';
import './assets/styles/App.css';

import { ReactComponent as GmailIcon } from './assets/icons/gmail.svg';
import { ReactComponent as GithubIcon } from './assets/icons/github.svg';
import { ReactComponent as LinkedinIcon } from './assets/icons/linkedin.svg';
import { ReactComponent as InstagramIcon } from './assets/icons/instagram.svg';

function App() {

  //redirects
  const redirect = (name) => {
    switch (name) {
      case "gmail":
        window.open("mailto:isuruyahampath1@gmail.com", '_blank');
        break;
      case "github":
        window.open("https://www.github.com/Isuru2701", '_blank');
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/isuru-yahampath/", '_blank');
        break;
      case "instagram":
        window.open("https://www.instagram.com/ruwuru2701", '_blank');
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        ISURU YAHAMPATH

        <span className="Sub-header">
          Ruru ルール
          <span>
            <Button className="Icon-button" name="gmail" onClick={() => redirect("gmail")}>
              <GmailIcon />
            </Button>

            <Button className="Icon-button" name="github" onClick={() => redirect("github")}>
              <GithubIcon />
            </Button>

            <Button className="Icon-button" name="linkedin" onClick={() => redirect("linkedin")}>
              <LinkedinIcon />

            </Button>

            <Button className="Icon-button" name="instagram" onClick={() => redirect("instagram")}>
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
