import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
