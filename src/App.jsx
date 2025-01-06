import { Experience } from "./Components/Experience/Experience.jsx";
import { Nav } from "./Components/Nav/Nav.jsx";
import { SobreMi } from "./Components/SobreMi/SobreMi";
import { Technologies } from "./Components/Technologies/Tecnologies.jsx";
import { FormularioDeContacto } from "./Components/FormularioDeContacto.jsx";

function App() {

  return (
    <div className="flex flex-col bg-[#1b1b1b] items-center justify-center">
      <Nav />
      <Experience />
      <SobreMi />
      <Technologies />
      <FormularioDeContacto />

    </div>
  )
}
    
export default App
