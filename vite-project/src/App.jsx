import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Home Page
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our React application!</p>
    </div>
  );
}

// About Page
function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This page provides information about us.</p>
    </div>
  );
}

// Contact Page
function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Email us at contact@example.com.</p>
    </div>
  );
}

// Main Application
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>React Router Navigation</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;