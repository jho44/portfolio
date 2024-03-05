import { Suspense } from "react";

const Video = ({ src }: { src: string }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full sm:w-3/4 pt-[56.25%] sm:pt-[42.1875%] overflow-hidden relative">
        <Suspense fallback={<p>Vid loading...</p>}>
          <iframe
            src={src}
            allowFullScreen
            className="absolute left-0 top-0 w-full h-full"
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Video;
