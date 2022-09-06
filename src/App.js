import About from "./about/About";
import "./App.css";
import TopBar from "./topBar/TopBar";

export default function App() {
  return (
    <div className="app">
      <TopBar />
      <About />
    </div>
  );
}
