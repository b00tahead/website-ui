import Data from "./data";

import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const sectionSpacing = "py-20";

  return (
    <div>
      <Header />
      <section className={sectionSpacing}>
        <h1 className="font-display font-black text-2xl text-center">
          Hello, I'm <span className="text-green">Scott</span>.
        </h1>
      </section>
      <About
        spacing={sectionSpacing}
        heading="About Me"
        description={Data.about.description}
        skills={Data.about.skills}
      />
      <Experience
        spacing={sectionSpacing}
        heading="Experience"
        positions={Data.experience.positions}
      />
      <Contact spacing={sectionSpacing} />
      <Footer />
    </div>
  );
}

export default App;
