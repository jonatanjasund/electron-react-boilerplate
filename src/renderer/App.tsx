import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from 'antd';
import icon from '../../assets/icon.png';
import './App.css';

function Hello() {
  return (
    <div>
      <h2>Packiyo</h2>
      <div className="container">
        <p>
          Last export:
          <span> 02.06.2025</span>
        </p>
        <Button type="primary">PRESS ME</Button>
        <button type="button">Hent CSV</button>
      </div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
