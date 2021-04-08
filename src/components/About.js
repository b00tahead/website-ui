import { CodeIcon } from "@heroicons/react/solid";

import SectionHeading from "./common/SectionHeading";

function About(props) {
  return (
    <section className={props.spacing}>
      <SectionHeading heading={props.heading} />
      <div className="text-gray text-sm">
        {props.description.map((item) => (
          <p className="mb-4 leading-relaxed">{item}</p>
        ))}
      </div>
      <div className="grid grid-flow-row grid-cols-2 mt-4">
        {props.skills.map((skill) => (
          <div className="text-sm">
            <span className="flex flex-row content-center mb-2">
              <CodeIcon className="text-green h-5 mr-2" />
              <span>{skill}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
