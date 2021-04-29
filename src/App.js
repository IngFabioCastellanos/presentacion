import Home from "./components/Home";
import Nav from "./components/Nav";
import Proyects from "./components/Proyects";
import Services from "./components/Services";
import image from "./img/background-image.jpg";

function App() {
  return (
    <div
      className="border-8 border-solid App"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Nav />
      <Home />
      <Services />
      <Proyects />
    </div>
  );
}

export default App;
