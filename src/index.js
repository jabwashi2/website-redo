import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectCategoriesPage from './pages/ProjectCategoriesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SectionPage } from "./pages/SectionPage";

// an array of objects, can create a function that will generate this array based on the project categories
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/Projects",
    element: <ProjectCategoriesPage />
  },
  {
    path: "/About",
    element: <AboutPage />
  },
  {
    path: "/Contact",
    element: <ContactPage />
  },
  {
    path: "/Sections",
    element: <SectionPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
