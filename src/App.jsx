import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const notify = () => toast("Welcome to my portfolio!");
  return (
    <div className={styles.App}>
      {/* <button onClick={notify}>Click me!</button>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        draggable
        pauseOnHover
        theme="dark"
      /> */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;
