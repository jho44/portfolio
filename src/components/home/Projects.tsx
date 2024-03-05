import { Fragment } from "react";
import Card from "./Card";
import Video from "./Video";
import Links from "./Links";
import type { Link } from "./types";

type Project = {
  title: string;
  dates: string;
  description: string;
  techStack: { purpose: string; name: string }[];
  links: Link[];
  demoVidLinks: string[];
};

const projects: Project[] = [
  {
    title: "Housing Finder",
    dates: "NOV 2023 - NOV 2023",
    description:
      "Facebook Housing Groups remains a longstanding avenue for connecting roomies and lessee to leasors. However, FB Groups aren't tailored for housing searches. Sifting through 100+ posts on any day can be overwhelming and frustrating, especially when only some are relevant to your needs. FB Groups lack essential search and filtering features, such as keyword searches and price range filters, making the housing hunt unnecessarily cumbersome. Enter HousingFinder — an innovative solution providing the tools you need to streamline your search within the Facebook community.",
    techStack: [
      {
        purpose: "Web Dev",
        name: "Next.js",
      },
      {
        purpose: "NER",
        name: "GPT-4",
      },
      {
        purpose: "Web Scraping",
        name: "Puppeteer",
      },
      {
        purpose: "Database",
        name: "MongoDB",
      },
    ],
    demoVidLinks: [
      "https://drive.google.com/file/d/1ciR_m0JNe1l4bNcs24zXePKQZzDbWTry/preview",
    ],
    links: [
      {
        label: "Try it out!",
        href: "https://housing-finder.vercel.app",
      },
      {
        label: "Repo",
        href: "https://github.com/jho44/HousingFinder",
      },
    ],
  },
  {
    title: "CAPTCHA Solver",
    dates: "FEB 2024 - MAR 2024",
    description:
      "A browser extension CAPTCHA solver for text CAPTCHAs in Global Interpark; easily extensible to other ticket platforms",
    techStack: [
      {
        purpose: "ML",
        name: "HuggingFace",
      },
      {
        purpose: "Browser Extension Dev",
        name: "Plasmo",
      },
      {
        purpose: "Programming",
        name: "JS / TS",
      },
    ],
    demoVidLinks: [
      "https://drive.google.com/file/d/1wmGMPbiEk1Kw0veuzVIaIMsCOnAqEA3V/preview",
    ],
    links: [],
  },
  // {
  //   title: "COVID Prediction",
  //   dates: "SEPT 2020 - DEC 2020",
  //   tasks: [
  //     "Co-led group of 4 to clean and feature engineer 20k+ data points on COVID statistics and graph data from hospitals across the US",
  //     "Produced regression models which beat baseline by 32%",
  //   ],
  //   links: [
  //     {
  //       label: "Kaggle Competition",
  //       href: "https://www.kaggle.com/competitions/ucla2020-cs145-covid19-prediction/overview",
  //     },
  //   ],
  // },
  // {
  //   title: "Cookies.co Sales Projection",
  //   dates: "SEPT 2021 - DEC 2021",
  //   tasks: [
  //     "Developed data pipeline on company sales data to project future sales and determine strongest factors with high confidence",
  //   ],
  // },
  // {
  //   title: "Neural Data Compression",
  //   dates: "SEPT 2022 - DEC 2022",
  //   tasks: [
  //     "With a group of 3, trained 3 families of neural network models to compress weather data by at least 50% while retaining similar accuracy in downstream tasks as using uncompressed dataset",
  //   ],
  // },
  // {
  //   title: "Pseudo-alignment",
  //   dates: "JAN 2022 - MAR 2022",
  //   tasks: [
  //     "Wrote code to pseudo-align +1.2M RNA-Sequence reads to transcriptome of +7K transcripts to get genomic loci that read came from",
  //   ],
  // },
  // {
  //   title: "TIL Mapping with GNNs",
  //   dates: "APR 2022 - JUN 2022",
  //   tasks: [
  //     "Map TILs (Tumor-Infiltrating Lymphocytes) with GNNs (Graph Neural Networks)",
  //   ],
  // },
];

const Projects = () =>
  projects.map(
    ({ title, dates, description, techStack, links, demoVidLinks }) => {
      const lastTechInd = techStack.length - 1;
      return (
        <Card key={title} style={{ width: "100%" }}>
          <div className="flex flex-col gap-6 text-center">
            <div className="flex flex-col gap-2">
              <h4>{title}</h4>
              <p className="opacity-80">{dates}</p>
            </div>
            <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row items-center justify-between">
              <p className="sm:w-2/3">{description}</p>
              <ul className="flex flex-col gap-2 sm:w-1/4 mx-auto">
                {techStack.map((tech, i) => (
                  <Fragment key={i}>
                    <li>
                      {tech.purpose} - {tech.name}
                    </li>
                    {i !== lastTechInd && (
                      <hr className="border-[1px] border-dashed border-light-400/70" />
                    )}
                  </Fragment>
                ))}
              </ul>
            </div>
            {demoVidLinks.map((src) => (
              <Video src={src} key={src} />
            ))}
            <Links links={links} />
          </div>
        </Card>
      );
    }
  );

export default Projects;
