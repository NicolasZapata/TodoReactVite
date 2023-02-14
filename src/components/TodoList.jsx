import Todo from './Todo'

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <Todo 
          setTodoList={setTodoList}
          todoItem={todoItem}
          key={todoItem.id}
          todoList={todoList}
        />
      ))}
    </div>
  )
}

export default TodoList
