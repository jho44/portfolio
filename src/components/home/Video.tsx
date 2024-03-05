import { list } from "@vercel/blob";
import { Suspense } from "react";

const Video = async ({
  fileName,
  posterPath,
}: {
  fileName: string;
  posterPath?: string;
}) => {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <div className="flex items-center justify-center">
      <div className="w-full sm:w-3/4 pt-[56.25%] sm:pt-[42.1875%] overflow-hidden relative">
        <Suspense fallback={<p>Loading video...</p>}>
          <video
            poster={posterPath}
            controls
            preload="none"
            aria-label="Video player"
            className="absolute left-0 top-0 w-full h-full"
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Suspense>
      </div>
    </div>
  );
};

export default Video;
