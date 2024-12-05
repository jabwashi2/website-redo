import { CategoryThumbnail } from '../components/CategoryThumbnail.js';

function ProjectCategoriesPage(props) {
  GenerateCategories(props);
  console.log("project categories=" + props.categories)
  return (
    
    <div className="CategoriesPage">
      {/* {props.map((item)=>(
        <CategoryThumbnail title={item.categories.title} path={item.categories.path} />
      ))} */}
      {/* <CategoryThumbnail title={props.title} path={props.path}/>
      <CategoryThumbnail title="Unity"/>
      <CategoryThumbnail title="DirectX11"/> */}
    </div>
  );
};

function GenerateCategories(props) {
  
  let currentSection = document.getElementById('CategoriesPage');
  // looping through array of projects to get relevant thumbnail info
  for (let i = 0; i < props.categories.length; i++){
      let current = props.categories[i];

      let currentThumbnail = <CategoryThumbnail title={current.title} path={current.path} />

      currentSection.appendChild(currentThumbnail);
  }

}

export default ProjectCategoriesPage;