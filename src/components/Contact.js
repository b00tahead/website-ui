function Contact(props) {
  return (
    <section className={props.spacing + " text-center"}>
      <h2 className="font-display text-xl font-black mb-4">Get in touch!</h2>
      <p className="text-gray text-xs leading-5 mb-6">
        While I'm not looking for any new opportunities at the moment, my inbox
        is always open. If you have any questions or would like to get in touch,
        I will get back to you as soon as possible!
      </p>
      <a
        href="mailto:smay44@gmail.com"
        className="bg-green text-xs uppercase font-bold px-8 py-2 rounded-full"
      >
        Say hello
      </a>
    </section>
  );
}

export default Contact;
