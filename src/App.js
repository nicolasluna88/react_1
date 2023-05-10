import logo from './logo.svg';
import './App.css';
//import GreetingF from './components/pure/greetingF'
//import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio*/}
        {/*<Greeting name = 'Nicolas'></Greeting>*/}
        {/*Componente funcional*/}
        {/*<GreetingF name="Nicolas"></GreetingF>*/}
        {/*Componente de listado de tareas*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        <ContactListComponent></ContactListComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
