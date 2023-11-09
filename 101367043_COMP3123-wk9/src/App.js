import './App.css';
import School from './Components/School/School';
import Student from './Components/Student/Student';
import logo from './logo.svg';


const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Welcome to Fullstack Development - I
        </h2>
        <h3>
          React JS Programming Week09 Lab Exercise 
        </h3>
        <Student 
          name={"Raul England Pelenio"}
          stuId={101367043}
        />
        <School 
          name={"George Brown College"}
          location={"Toronto"}
        />
      </header>
    </div>
  );
}

export default App;
