import Header from "./components/NavBar";
import Logo from "./components/logo";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';


export default function App() {
  return (
    <div>
      <Logo />
      <Header></Header>
      <ItemListContainer greeting="Bienvenido a Huemul Clothes"></ItemListContainer>
    </div>
  );
}


