
import './styles.css';

import {Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos[0].imprimirClase();


todoList.todos.forEach(todo => crearTodoHtml(todo))
