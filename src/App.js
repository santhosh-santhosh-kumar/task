import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {All, All1} from './All';
import {Full, TopFull } from './Full';
import {Data, TopData } from './Data';
import {Cyber, TopCyber } from './Cyber';
import {Career, TopCareer } from './Career';

function App() {
  return (
    <>
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src="data:image/png;base64,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" className='navImage'></img>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item itemNav">
          <span>COURSES</span>
        </li>
        <li className="nav-item itemNav">
          <span>LIVE CLASSES</span>
        </li>
        <li className="nav-item itemNav">
          <span>PRACTICE</span>
        </li>
        <li className="nav-item itemNav">
          <span>RESOURCES</span>
        </li>
        <li className="nav-item itemNav">
          <span>OUR PRODUCTS</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <Routes>
          <Route path="/" element={<All1 />}></Route>
          <Route path="/FullStackDevelopment" element={<TopFull />} />
          <Route path="/ds" element={<TopData />} />
          <Route path="/CyberSecurity" element={<TopCyber />} />
          <Route path="/Career" element={<TopCareer />} />

          </Routes>
      {/* <All1 /> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li class="nav-item">
                  <span>
                    <Link className="nav-link1" to="/">All</Link>
                  </span>
                  </li>
                <li class="nav-item">
                  <span>
                    <Link className="nav-link1" to={"/FullStackDevelopment"}>Full Stack Development</Link>
                  </span>
                </li>
                <li className="nav-item">
                  <span>
                    <Link className="nav-link1" to={"/ds"}>Data Science</Link>
                  </span>
                </li>
                <li className="nav-item">
                  <span>
                    <Link className="nav-link1" to={"/CyberSecurity"}>Cyber Security</Link>
                  </span>
                </li>
                <li className="nav-item">
                  <span>
                    <Link className="nav-link1" to={"/Career"}>Career</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<All />}></Route>
          <Route path="/FullStackDevelopment" element={<Full />} />
          <Route path="/ds" element={<Data />} />
          <Route path="/CyberSecurity" element={<Cyber />} />
          <Route path="/Career" element={<Career />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
