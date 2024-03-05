import Card from "./Card";

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

export default Tools;
