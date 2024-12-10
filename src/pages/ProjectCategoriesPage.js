import { CategoryThumbnail } from '../components/CategoryThumbnail.js';

function ProjectCategoriesPage(props) {
  return (
    <div id="CategoriesPage">
        {props.props.categories.map((category) => <CategoryThumbnail title={category.title} path={category.path} />)}
    </div>
  );
};

export default ProjectCategoriesPage;