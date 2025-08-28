import { useState, useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe, onDone }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe?.title ?? '');
  const [description, setDescription] = useState(recipe?.description ?? '');

  useEffect(() => {
    // keep local state in sync if recipe prop changes
    setTitle(recipe?.title ?? '');
    setDescription(recipe?.description ?? '');
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    updateRecipe(recipe.id, { title, description });
    onDone?.();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '0.5rem' }}>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Recipe title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        <textarea
          value={description}
          placeholder="Recipe description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={{ marginTop: '0.5rem' }}>Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
