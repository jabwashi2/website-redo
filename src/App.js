import './styles/App.css';
import { Navbar } from './components/Navbar.js';
import ProjectCategoriesPage from './pages/ProjectCategoriesPage.js';
import { AboutPage } from './pages/AboutPage.js';
import { ContactPage } from './pages/ContactPage.js';
import {ReadJSONFile} from './Helpers.js'

function App() {
  // <RouterSetup />
  ReadJSONFile();
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to Jabrecia Washintgon's Portfolio</h1>
      <ProjectCategoriesPage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;
