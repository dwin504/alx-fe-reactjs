import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes yet. Add one!</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <h3 style={{ margin: 0 }}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p style={{ marginTop: '0.25rem' }}>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View details →</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
