import './App.css'
import Navigation from "@/components/Navigation/Navigation.jsx";
import Header from "@/components/Header/Header.jsx";
import Main from "@/components/Main/Main.jsx";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <hr className="separator" />
        <Header />
        <Main />
      </div>
    </>
  )
}

export default App
