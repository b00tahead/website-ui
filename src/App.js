import Data from "./data";
// import Section from "./components/Section.js";
import About from "./components/About.js";

function App() {
  return (
    <div>
      <section className="py-24">
        <h1 className="font-display font-black text-2xl text-center">
          Hello, I'm <span className="text-green">Scott</span>.
        </h1>
      </section>
      <About
        heading="About Me"
        description={Data.about.description}
        skills={Data.about.skills}
      />
    </div>
  );
}

export default App;
