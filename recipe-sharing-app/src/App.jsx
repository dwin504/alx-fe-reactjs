// src/App.jsx
import AddRecipeForm from './components/AddRecipeForm/AddRecipeForm';
import RecipeList from './components/RecipeList/RecipeList';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🍲 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
