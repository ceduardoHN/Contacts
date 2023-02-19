import './App.css';
import Header from "./Header";

function App() {
  return (
    /**
     * - El elemento de la linea siguiente se llama 'fragmento'.
     * - Este tipo de funcion solo permite que sus componentes tengan un solo
     * elemento padre, de lo contrario da error y pide que se ponga todo
     * codigo en un fragment, definido anteriormente.
     * - Esto es debido a que asi funciona un elemento JSX(JavaScript Extension).
     * - Pueden usarse tambien arrow functions para los JSX.
     */
    <>
      <Header></Header>
    </>
  );
}

export default App;
