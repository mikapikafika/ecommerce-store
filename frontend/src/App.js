import logo from './logo.svg';
import './App.css';
import Header from "./components/Website/Header";
import Main from "./components/Website/Main";
import Footer from "./components/Website/Footer";

function App() {
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
