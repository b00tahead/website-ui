function Footer() {
  return (
    <footer className="pt-20 font-display">
      <p className="text-xs leading-5 tracking-wide">
        Designed in{" "}
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer"
          className="text-green font-bold"
        >
          Figma
        </a>
        . Built with{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
          className="text-green font-bold"
        >
          React.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          className="text-green font-bold"
        >
          Tailwind CSS
        </a>
        . Hosted on{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noreferrer"
          className="text-green font-bold"
        >
          Netlify
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
