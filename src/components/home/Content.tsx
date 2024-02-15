import { Fragment } from "react";
import Card from "@/components/home/Card";

const tools = [
  {
    type: "UI",
    list: ["React.js", "Vue.js", "Tailwind CSS"],
  },
  {
    type: "Backend",
    list: ["Express", "Flask", "FastAPI"],
  },
  {
    type: "Web Dev",
    list: ["Next.js", "SvelteKit"],
  },
  {
    type: "ORMs",
    list: ["Mongoose", "Prisma"],
  },
  {
    type: "Databases",
    list: ["PostgreSQL", "MongoDB"],
  },
  {
    type: "Cloud Tech",
    list: ["Firebase", "Cloudflare", "Supabase", "Vercel"],
  },
  {
    type: "Languages",
    list: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    type: "Data Science",
    list: ["scikit-learn", "pandas", "matplotlib"],
  },
  {
    type: "AI",
    list: ["GPT", "Claude"],
  },
];

const Tools = () =>
  tools.map(({ type, list }) => (
    <Card key={type}>
      <div className="flex flex-col gap-2 items-center text-center justify-center w-[200px] h-[200px]">
        <h5>{type}</h5>
        <ul>
          {list.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      </div>
    </Card>
  ));

type Experience = {
  title: string;
  dates: string;
  tasks: string[];
  links: { label: string; href: string }[];
}[];
const jobs = [
  {
    title: "Prezo, Full Stack Engineer",
    dates: "FEB 2023 - JAN 2024",
    tasks: [
      "Revamped marketing site with a sneak peek of the generation flow to incentivize new user sign up",
      "Facilitated the launch of presentations as websites with personalizable subdomains and suffixes",
      "Tailored data flow for LLM to dynamically populate client's master deck with contextual information",
      "Developed chatbot to offer users presentation improvement advice and assist with rote tasks",
      "Enabled subscription plans via Stripe",
      "Introduced backend-generated PDFs as paid feature, boosting export speed by >10x and eliminating UI freezes",
    ],
    links: [
      {
        label: "Try it out!",
        href: "https://prezo.ai",
      },
      {
        label: "Changelog",
        href: "https://comms.prezo.site/changelog",
      },
    ],
  },
  {
    title: "Software Engineer (Freelance)",
    dates: "FEB 2023 - OCT 2023",
    tasks: [
      "Designed and developed open source Playdate web app from given spec, including authentication via magic links, and real-time communication via Twilio",
      "Orchestrated complete database setup by writing Prisma schemas to connect backend to PostgreSQL",
      "Ensured app functionality by writing e2e tests",
      "Enhanced user engagement by implementing proactive reminder system via cron jobs",
    ],
    links: [
      {
        label: "Try it out!",
        href: "https://playdate.help",
      },
      {
        label: "Repo",
        href: "https://github.com/lilith/playdate",
      },
    ],
  },
  {
    title: "Lob.com Inc., DevEx Engineer",
    dates: "JUN 2021 - JAN 2023",
    tasks: [
      "Automated generation of SDK + API docs in 7 programming languages to heighten better API usability and accelerate API updates",
      "Deployed cross-platform PWA to demo product",
      "Continuously monitored the performance of products in production by automating test pipelines",
      "Regularly coordinated with other teams (internal/external engineers, Customer Success) over the intersection between API and developer tools",
    ],
    links: [
      {
        label: "Docs",
        href: "https://docs.lob.com",
      },
      {
        label: "Docs Repo",
        href: "https://github.com/lob/lob-openapi",
      },
      {
        label: "SDK Repos (pinned)",
        href: "https://github.com/lob",
      },
    ],
  },
  // {
  //   title: "Avenu, Frontend Lead",
  //   dates: "MAR 2021 - MAY 2021",
  //   tasks: [
  //     "Actualized frontend pages according to mock designs, developed REST API in Flask backend, and integrated them",
  //     "Trained 3 others by creating code templates and presentation slides",
  //     "Championed the usage of newer app state management framework to save weeks of work and keep code small",
  //   ],
  //   links: [
  //     {
  //       label: "Site",
  //       href: "https://www.avenuapp.com",
  //     },
  //   ],
  // },
];

const research = [
  {
    title: "Data Mining Lab - Full Stack / ML Engineer",
    dates: "OCT 2021 - JUL 2022",
    tasks: [
      "Created dashboard which enables researchers to efficiently visualize network of ~300K Tweets by their political polarities",
      "Implemented data pipeline which retrieves, cleans, and regularly rehydrates posts from Twitter API to ensure data displayed is always up to date and conforms to Privacy Laws",
      "Led group of 4 to achieve simpler model than existing political polarity predictor while yielding comparable results",
    ],
    links: [
      {
        label: "EGCN vs HGCN Repo",
        href: "https://github.com/jho44/EGCNvsHGCN",
      },
      {
        label: "Dashboard Repo",
        href: "https://github.com/jho44/politicians_dashboard",
      },
    ],
  },
  {
    title: "Micro and Nano Manufacturing Lab - Frontend Engineer",
    dates: "OCT 2020 - OCT 2021",
    tasks: [
      "Collaborated with designer and researcher to create GUI PWA which enabled operation of DMF chips with customizable electrode patterns",
    ],
    links: [
      {
        label:
          "Paper (accepted for publication at IEEE International Conference on MEMS!)",
        href: "https://drive.google.com/file/d/1135j8KGN8gH9f8D_p3qGg-AmHxQUz6rh/view?usp=sharing",
      },
    ],
  },
];

const projects = [
  {
    title: "Housing Finder",
    dates: "NOV 2023 - NOV 2023",
    tasks: [
      "Facebook Housing Groups remains a longstanding avenue for connecting roomies and lessee to leasors. However, FB Groups aren't tailored for housing searches. Sifting through 100+ posts on any day can be overwhelming and frustrating, especially when only some are relevant to your needs. FB Groups lack essential search and filtering features, such as keyword searches and price range filters, making the housing hunt unnecessarily cumbersome. Enter HousingFinder — an innovative solution providing the tools you need to streamline your search within the Facebook community.",
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

const Experiences = ({ which }: { which: Experience }) =>
  which.map(({ title, dates, tasks, links }) => {
    const lastTaskInd = tasks.length - 1;
    const lastLinkInd = links.length - 1;
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
          <div className="flex gap-1 justify-center">
            {links.map(({ label, href }, i) => (
              <Fragment key={label}>
                <a className="opacity-80" href={href}>
                  {label}
                </a>
                {i !== lastLinkInd && <span className="opacity-60">•</span>}
              </Fragment>
            ))}
          </div>
        </div>
      </Card>
    );
  });

const Jobs = () => <Experiences which={jobs} />;
const Research = () => <Experiences which={research} />;
const Projects = () => <Experiences which={projects} />;

export default function Content() {
  return (
    <div className="flex flex-col justify-center items-center gap-[10vh] pb-[10%]">
      <div className="w-full max-w-[960px] flex flex-col items-center gap-4">
        <h3>Tools</h3>
        <div className="flex flex-wrap justify-center">
          <Tools />
        </div>
      </div>
      <div className="w-full max-w-[960px] flex flex-col items-center gap-4 px-4">
        <h3>Experiences</h3>
        <div className="flex flex-col gap-4 justify-center">
          <Jobs />
        </div>
      </div>
      <div className="w-full max-w-[960px] flex flex-col items-center gap-4 px-4">
        <h3>Research at UCLA</h3>
        <div className="flex flex-col gap-4 justify-center">
          <Research />
        </div>
      </div>
      <div className="w-full max-w-[960px] flex flex-col items-center gap-4 px-4">
        <h3>Projects</h3>
        <div className="flex flex-col gap-4 justify-center">
          <Projects />
        </div>
      </div>
    </div>
  );
}
