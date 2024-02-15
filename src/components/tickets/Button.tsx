import Image from "next/image";

export default function Button({
  onClick,
  imgSrc,
  imgAlt,
}: {
  onClick: () => void;
  imgSrc: string;
  imgAlt: string;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-[#fff5ed] w-10 h-10 flex items-center justify-center"
    >
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={0}
        height={0}
        style={{
          width: "20px",
          height: "auto",
        }}
      />
    </button>
  );
}
