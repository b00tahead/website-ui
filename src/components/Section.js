function Section(props) {
  return (
    <section className="py-24">
      <h2 className="font-display font-bold text-green uppercase text-sm">
        {props.heading}
      </h2>
    </section>
  );
}

export default Section;
