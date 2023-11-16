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
    <span id='topNav'>Blogs</span>
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
