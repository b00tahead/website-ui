import { ArrowRightIcon } from "@heroicons/react/solid";
import { CodeIcon } from "@heroicons/react/solid";

import SectionHeading from "./common/SectionHeading";

function Experience(props) {
  console.log(props.positions);
  return (
    <section className={props.spacing}>
      <SectionHeading heading={props.heading} />
      <div>
        {props.positions.map((position) => (
          <div className="pb-4 mb-4 border-b border-green border-opacity-25 last:border-0 last:p-0 last:m-0">
            <h3 className="mb-1 font-display font-bold">{position.title}</h3>
            <h4 className="mb-1 font-display font-bold text-green text-sm">
              {position.employer}
            </h4>
            <p className="mb-2 text-xs tracking-wide">
              {position.startDate} - {position.endDate}
            </p>
            <div className="mb-4">
              {position.responsibilities.map((responsibility) => (
                <div className="grid grid-cols-8 text-xs text-gray tracking-wide mb-2">
                  <CodeIcon className="text-green h-4 mr-2" />
                  <span className="col-span-7">{responsibility}</span>
                </div>
              ))}
            </div>
            <p className="text-xs tracking-wide font-bold">
              <a href={position.externalLink.url} className="inline-flex">
                <span>{position.externalLink.text}</span>
                <ArrowRightIcon className="h-4 w-3 text-green text-xs ml-1" />
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
