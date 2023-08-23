import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;

    const todo = {
      id: new Date().getTime(),
      description,
      done: false
    };
    onNewTodo(todo);
    onResetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Aprender..."
        autoComplete="off"
        className="form-control"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1 btn-block">
        Agregar
      </button>
    </form>
  );
};
