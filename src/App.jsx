import { Header } from './components/Header/Header.jsx';
import { TodoForm } from './components/TodoForm/TodoForm';
import styles from './App.module.css';
import { TodoList } from './components/TodoList/TodoList.jsx';

const App = () => {
  return (
    <div className={styles.App}>
      <div className=''></div>
      <Header/>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
