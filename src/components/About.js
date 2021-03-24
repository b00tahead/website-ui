function About(props) {
  return (
    <section className="py-24">
      <h2 className="font-display font-bold text-green uppercase text-sm mb-3">
        {props.heading}
      </h2>
      <div className="text-gray text-sm">
        {props.description.map((item) => (
          <p className="mb-4 leading-relaxed">{item}</p>
        ))}
      </div>
      <div className="grid grid-flow-row grid-cols-2 mt-4">
        {props.skills.map((skill) => (
          <div className="text-sm">
            <span className="flex flex-row content-center mb-2">
              <svg
                className="text-green h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>{skill}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

{
  /*  */
}
