import './utils/variables.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <Header/>
        <main>
          <HeroSection
            title="Little Lemon"
            subtitle="Chicago"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            imgSrc=""
            imgAlt=""
          />
        </main>
      <Footer/>
    </div>
  );
}

export default App;
