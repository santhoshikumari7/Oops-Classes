
import './App.css';
import SSCStudent from './classes/SSCStudent';
import TenthStudent from './components/TenthStudent';

function App() {

 let jahnavi = new SSCStudent("Jahnavi","K",77,88,99,55,66,44);
 jahnavi.calculateResult();

 let Vanitha = new SSCStudent("Vanith","J",56,77,68,57,32,55);
 Vanitha.calculateResult();

  return (
    <div className="App">
     <TenthStudent firstName="Bindu" 
     lastName="T" 
     eng="86" 
     tel="95" 
     hind="76"
      math="93" 
      sci="66" 
      soci="77"
      ></TenthStudent>

    <TenthStudent firstName="Renu" 
     lastName="G" 
     eng="66" 
     tel="85" 
     hind="67"
      math="78" 
      sci="54" 
      soci="88"
      ></TenthStudent>
    </div>
  );
}

export default App;
