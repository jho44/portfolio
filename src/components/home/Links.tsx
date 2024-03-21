import { Fragment } from "react";
import { Link } from "./types";

const Links = ({ links }: { links: Link[] }) => {
  const lastLinkInd = links.length - 1;
  return (
    <div className="flex gap-1 justify-center">
      {links.map(({ label, href }, i) => (
        <Fragment key={label}>
          <a target="_blank" className="opacity-80" href={href}>
            {label}
          </a>
          {i !== lastLinkInd && <span className="opacity-60">•</span>}
        </Fragment>
      ))}
    </div>
  );
};

export default Links;
