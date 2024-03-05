import { Fragment } from "react";
import Card from "./Card";
import Links from "./Links";
import type { Link } from "./types";

type Experience = {
  title: string;
  dates: string;
  tasks: string[];
  links: Link[];
}[];

const Experiences = ({ which }: { which: Experience }) =>
  which.map(({ title, dates, tasks, links }) => {
    const lastTaskInd = tasks.length - 1;
    return (
      <Card key={title} style={{ width: "100%" }}>
        <div className="flex flex-col gap-6 text-center">
          <div className="flex flex-col gap-2">
            <h4>{title}</h4>
            <p className="opacity-80">{dates}</p>
          </div>
          <ul className=" flex flex-col gap-2 sm:w-8/12 mx-auto">
            {tasks.map((task, i) => (
              <Fragment key={i}>
                <li>{task}</li>
                {i !== lastTaskInd && (
                  <hr className="border-[1px] border-dashed border-light-400/70" />
                )}
              </Fragment>
            ))}
          </ul>
          <Links links={links} />
        </div>
      </Card>
    );
  });

export default Experiences;
