import { Fragment, ReactNode } from "react";
import Card from "./Card";
import Links from "./Links";
import Video from "./Video";
import type { Link } from "./types";

type Project = {
  title: string;
  dates: string;
  description: string | ReactNode;
  techStack: { purpose: string; name: string | ReactNode }[];
  links: Link[];
  demoVidLinks?: { fileName: string; posterPath?: string }[];
};

const projects: Project[] = [
  {
    title: "ZeroDayComics",
    dates: "MAR 2024 - PRESENT",
    description:
      "Web app which shortens the cleaning-translation-typesetting process to mere minutes. For inputs, currently supports scraping from Pixiv's free web serials as well as uploaded image files.",
    techStack: [
      {
        purpose: "Backend",
        name: "AIOHTTP (Python)",
      },
      {
        purpose: "Translation",
        name: "GPT, DeepL, Llama 3",
      },
      {
        purpose: "OCR",
        name: (
          <a href="https://github.com/kha-white/manga-ocr" target="_blank">
            manga-ocr
          </a>
        ),
      },
      {
        purpose: "Text Detector",
        name: (
          <a
            href="https://github.com/dmMaze/comic-text-detector"
            target="_blank"
          >
            comic-text-detector
          </a>
        ),
      },
    ],
    links: [
      {
        label: "Repo",
        href: "https://github.com/jho44/ZeroDayComics",
      },
      {
        label: "Latest demo vid",
        href: "https://drive.google.com/file/d/1B9BI-bFbToTr7C9MZx5yQEcYrGl846_W/view?usp=sharing",
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
      {
        fileName: "captcha-solver.mp4",
        posterPath: "/imgs/captcha-solver.webp",
      },
    ],
    links: [
      {
        label: "Demo vid",
        href: "https://drive.google.com/file/d/10EJUAB8mzbBLjFWCB6xnO06gbH7cscVv/view",
      },
    ],
  },
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
      {
        fileName: "housing-finder.mp4",
        posterPath: "/imgs/housing-finder.webp",
      },
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
      {
        label: "Demo vid",
        href: "https://drive.google.com/file/d/1Nr42l96ZAyJr1zeiK-nXApLQSMf5jhvH/view",
      },
    ],
  },
  {
    title: "NB-IoT Analyzer",
    dates: "SEPT 2022 - DEC 2022",
    description:
      "Comprehensive tool for visualizing traffic patterns of Qualcomm mobile devices communicating with NB-IoT (Narrowband Internet of Things)",
    techStack: [
      {
        purpose: "Backend",
        name: "Flask",
      },
      {
        purpose: "Frontend",
        name: "React",
      },
      {
        purpose: "QMDL Parsing",
        name: "MobileInsight",
      },
    ],
    links: [
      {
        label: "Presentation",
        href: "https://docs.google.com/presentation/d/1jJqNw46n_Z8459AslFjxVv4Aer-Q3_EEeSTabSaiN10/edit?usp=sharing",
      },
      {
        label: "Repo",
        href: "https://github.com/jho44/nbiot-dashboard",
      },
      {
        label: "Demo vid",
        href: "https://drive.google.com/file/d/1flaRW0bG2b6bh5wQDJSInO-edmYDlo_7/view?usp=sharing",
      },
    ],
  },
  {
    title: "LambDa",
    dates: "JAN 2022 - MAR 2022",
    description: (
      <span>
        Prototype mobile render farm as an alternative to{" "}
        <a href="https://www.sheepit-renderfarm.com/" target="_blank">
          SheepIt
        </a>
      </span>
    ),
    techStack: [
      {
        purpose: "Supplier of Render Jobs",
        name: "Blender",
      },
      {
        purpose: "Communication",
        name: "TCP Sockets + Threads",
      },
      {
        purpose: "Power Server/Clients/Workers",
        name: "Python",
      },
      {
        purpose: "Workers",
        name: "Android + Ubuntu Linux",
      },
    ],
    links: [
      {
        label: "Presentation",
        href: "https://docs.google.com/presentation/d/1YyBRRLg5VBqnqSq4AR5kT44-dVMsG4ASymExekV4VA4/edit?usp=sharing",
      },
      {
        label: "Repo",
        href: "https://github.com/luckiday/LambDa",
      },
      {
        label: "Demo vid",
        href: "https://drive.google.com/file/d/1lHFd3mc4Pf_W9VaMGQgNp3tMdBsOY6Fg/view?usp=sharing",
      },
    ],
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
          <div className="pt-1 sm:pt-2 flex flex-col gap-6 text-center">
            <div className="flex flex-col gap-2">
              <h4>{title}</h4>
              <p className="opacity-80">{dates}</p>
            </div>
            <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row items-center justify-between">
              <p className="sm:w-7/12">{description}</p>
              <ul className="flex flex-col gap-2 sm:w-1/3 mx-auto">
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
            {/* {demoVidLinks.map(({ fileName, posterPath }) => (
              <Video
                fileName={fileName}
                posterPath={posterPath}
                key={fileName}
              />
            ))} */}
            <Links links={links} />
          </div>
        </Card>
      );
    }
  );

export default Projects;
