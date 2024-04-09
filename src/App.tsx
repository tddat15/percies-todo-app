import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
interface TodoInterface {
  title: string;
  description: string;
  completedAt?: string;
}
function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);

  const [allTodos, setAllTodos] = useState<TodoInterface[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescrtiption, setNewDescrtiption] = useState('');
  const [completedTodos, setCompletedTodos] = useState<TodoInterface[]>([]);

  const titleInputRef = useRef<HTMLInputElement>(null);
  const addNewTodoHandle = () => {
    const newTodoItem = {
      title: newTitle,
      description: newDescrtiption,
    };
    const newAllTodo = [...allTodos];
    newAllTodo.push(newTodoItem);

    setAllTodos(newAllTodo);
    setNewTitle('');
    setNewDescrtiption('');

    localStorage.setItem('todoList', JSON.stringify(newAllTodo));

    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  };

  const handleEnterKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        addNewTodoHandle();
      }
    },
    [addNewTodoHandle],
  );

  const deleteTaskHandle = (index: number) => {
    const reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(reducedTodo));

    setAllTodos(reducedTodo);
  };

  const completeTaskHandle = (index: number) => {
    const filteredItem = allTodos[index];
    const now = new Date();
    filteredItem.completedAt =
      now.getFullYear() +
      '-' +
      now.getMonth() +
      '-' +
      now.getDate() +
      ' at ' +
      now.getHours() +
      ':' +
      now.getMinutes();
    const newAllCompletedTodo = [...completedTodos];
    console.log(newAllCompletedTodo);
    newAllCompletedTodo.push(filteredItem);
    setCompletedTodos(newAllCompletedTodo);

    localStorage.setItem(
      'completedTodoList',
      JSON.stringify(newAllCompletedTodo),
    );
    deleteTaskHandle(index);
  };

  const handleDeleteCompletedTodo = (index: number) => {
    const reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);

    localStorage.setItem('completedTodoList', JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEnterKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEnterKeyPress);
    };
  }, [handleEnterKeyPress]);

  useEffect(() => {
    const saveTodoString = localStorage.getItem('todoList');
    const completedTodoList = localStorage.getItem('completedTodoList');
    if (saveTodoString) {
      const saveTodo: TodoInterface[] = JSON.parse(saveTodoString);
      if (Array.isArray(saveTodo)) {
        setAllTodos(saveTodo);
      }
    }

    if (completedTodoList) {
      const saveCompletedTodo: TodoInterface[] = JSON.parse(completedTodoList);
      if (Array.isArray(saveCompletedTodo)) {
        setCompletedTodos(saveCompletedTodo);
      }
    }
  }, []);

  return (
    <>
      <h1>Percies Todos App</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              ref={titleInputRef}
              value={newTitle}
              placeholder="What you want to do today?"
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className="todo-input-item">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={newDescrtiption}
              placeholder="Detail what exactly you going to do?"
              onChange={(e) => setNewDescrtiption(e.target.value)}
            />
          </div>

          <div className="todo-input-item">
            <button
              type="button"
              className="primaryBtn"
              onClick={addNewTodoHandle}
            >
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn ${!isCompleteScreen && 'active'}`}
            onClick={() => setIsCompleteScreen(false)}
            type="button"
          >
            To do
          </button>

          <button
            className={`secondaryBtn ${isCompleteScreen && 'active'}`}
            onClick={() => setIsCompleteScreen(true)}
            type="button"
          >
            Completed
          </button>
        </div>

        <div className="todo-list">
          {!isCompleteScreen &&
            allTodos.map((todo, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      className="icon"
                      onClick={() => deleteTaskHandle(index)}
                    />
                    <FaCheck
                      className="check-icon"
                      onClick={() => completeTaskHandle(index)}
                    />
                  </div>
                </div>
              );
            })}

          {isCompleteScreen &&
            completedTodos.map((todo, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>
                      <small>Completed on: {todo.completedAt}</small>
                    </p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      className="icon"
                      onClick={() => handleDeleteCompletedTodo(index)}
                      title="Detele?"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
