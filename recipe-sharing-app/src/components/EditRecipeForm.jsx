import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();  // <--- This prevents page reload
    updateRecipe({ id: recipe.id, title, description });
    onClose(); // Optional: close the edit form after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        placeholder="Title" 
      />
      <textarea 
        value={description} 
        onChange={e => setDescription(e.target.value)} 
        placeholder="Description" 
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
