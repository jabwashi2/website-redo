import './styles/App.css';
import { Navbar } from './components/Navbar.js';
import ProjectCategoriesPage from './pages/ProjectCategoriesPage.js';
import { AboutPage } from './pages/AboutPage.js';
import { ContactPage } from './pages/ContactPage.js';
import dataJSON from './content.json'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProjectCategoriesPage props={dataJSON}/>
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;
