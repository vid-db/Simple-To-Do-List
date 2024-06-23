import { Todo } from "../type/todo";

interface TodoItemProps {
    todo: Todo;
}
export default function TodoItem ({ todo }: TodoItemProps)  {
  return (
    <div>
        <label className="flex items-center gap-2 border rounded-md p-3 border-gray-400 bg-white hover:bg-opacity-50">
            <input type="checkbox" className="scale-125"/>
            <span className={todo.completed ? "line-through text-gray-400" : ""}>
                {todo.title}
            </span>

        </label>
      

    </div>
  )
}

