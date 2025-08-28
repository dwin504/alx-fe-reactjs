import { useParams, useNavigate, Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">← Back to list</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <Link to="..">← Back</Link>
      <h1 style={{ marginTop: '0.5rem' }}>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3 style={{ marginTop: '1.25rem' }}>Edit this recipe</h3>
      <EditRecipeForm recipe={recipe} onDone={() => navigate(`/recipes/${recipe.id}`)} />

      <div style={{ marginTop: '1rem' }}>
        <DeleteRecipeButton
          recipeId={recipe.id}
          onDeleted={() => navigate('/')}
        />
      </div>
    </div>
  );
};

export default RecipeDetails;
