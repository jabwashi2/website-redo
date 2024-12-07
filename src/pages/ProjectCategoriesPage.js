import { CategoryThumbnail } from '../components/CategoryThumbnail.js';

function ProjectCategoriesPage(props) {
  
  console.log(props.props.categories)
  GenerateCategories(props);
  return (
    <div id="CategoriesPage">
    </div>
  );
};

function GenerateCategories(props) {
  
  let currentSection = document.createElement('div');
  currentSection.id = 'CategoriesPage';
  console.log(document.querySelector('#CategoriesPage'))

  return (props.props.categories)
  // looping through array of projects to get relevant thumbnail info
  // for (let i = 0; i < props.props.categories.length; i++){
  //     let current = props.props.categories[i];

  //     let currentThumbnail = <CategoryThumbnail title={current.title} path={current.path} />

  //     currentSection.appendChild(currentThumbnail);
  // }

}

export default ProjectCategoriesPage;