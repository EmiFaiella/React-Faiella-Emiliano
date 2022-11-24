import './App.css';
import Navbar from './Navbar/navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Buenos días!"}/>
    </>
      
  );
}

export default App;