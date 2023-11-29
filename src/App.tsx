import "./App.scss";
import Header from "./components/UI/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <div>
      <ContextProvider>
        <Header />
        <MainContainer />
      </ContextProvider>
    </div>
  );
}

export default App;
