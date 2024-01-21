import styles from "@/styles/home.module.css";

export default function Hero() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div
        className={`${styles.enter} w-full h-full max-h-[540px] max-w-[960px] bg-gradient-to-br from-light-400 to-light-800 rounded-2xl p-4 flex flex-col gap-4 items-center justify-center text-center m-4`}
      >
        <div className="flex flex-col gap-3 font-medium">
          <h2 className="tracking-tight">Jessica Ho</h2>
          <h4>Software Engineer</h4>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <div className="flex gap-1">
            {["Web Dev", "•", "Data Science", "•", "ML/AI"].map((s, i) => {
              if (i % 2)
                return (
                  <span key={i} className="opacity-70">
                    •
                  </span>
                );
              else
                return (
                  <span key={i} className="opacity-60">
                    {s}
                  </span>
                );
            })}
          </div>

          <div className="flex gap-1">
            <a className="opacity-50" href="https://www.linkedin.com/in/jho44/">
              LinkedIn
            </a>
            <span className="opacity-60">•</span>
            <a className="opacity-50" href="https://github.com/jho44">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
