import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Homepage from "./Components/Homepage/Homepage";
import { Routes, Route } from "react-router";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  //  TODO ad routes to the components we've created so far
  return (
    <div>
      <header>
        <h1>This is React</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/effects" element={<EffectsComponent />} />
          <Route path="/state" element={<MyStateComponent />} />
          <Route path="/props" element={<PropsComponent person={person} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
