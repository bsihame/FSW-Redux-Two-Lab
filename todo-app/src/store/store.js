import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer, {
  // todoList: [],
  todos: {
    1: { id: 1, text: "Buy groceries", completed: false },
    2: { id: 2, text: "Do laundry", completed: false }
  }
}
)
export default store;