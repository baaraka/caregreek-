import About from "./about/About";
import "./App.css";
import Home from "./home/Home";
import TopBar from "./topBar/TopBar";

export default function App() {
  return (
    <div className="app">
      <TopBar />
      <Home />
      <About />
    </div>
  );
}
