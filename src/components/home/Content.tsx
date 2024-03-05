import Experiences from "./Experiences";
import Projects from "./Projects";
import Tools from "./Tools";

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

const Jobs = () => <Experiences which={jobs} />;
const Research = () => <Experiences which={research} />;

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
        <h3>Projects</h3>
        <div className="flex flex-col gap-4 justify-center">
          <Projects />
        </div>
      </div>
      <div className="w-full max-w-[960px] flex flex-col items-center gap-4 px-4">
        <h3>Research at UCLA</h3>
        <div className="flex flex-col gap-4 justify-center">
          <Research />
        </div>
      </div>
    </div>
  );
}
