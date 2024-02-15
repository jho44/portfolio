import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

export default function InfoRow({
  showRmBtn,
  val,
  clickAdd,
  clickRm,
  setVal,
}: {
  showRmBtn: boolean;
  val: string;
  clickAdd: () => void;
  clickRm: () => void;
  setVal: (val: string) => void;
}) {
  const [copied, setCopied] = useState(false);

  if (copied) {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(val);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex gap-4 text-xl items-center">
      <input
        className="p-2 rounded-md"
        onChange={(e) => setVal(e.target.value)}
      />
      {showRmBtn && (
        <button
          onClick={clickRm}
          className="rounded-md bg-[#fff5ed] w-10 h-10 flex items-center justify-center"
        >
          <Image
            src="/icons/minus.png"
            alt="Minus icons created by Freepik - Flaticon"
            width={0}
            height={0}
            style={{
              width: "20px",
              height: "auto",
            }}
          />
        </button>
      )}

      <Button
        onClick={clickAdd}
        imgSrc="/icons/plus.png"
        imgAlt="Copy icons created by Fuzzee - Flaticon"
      />

      <Button
        onClick={() => {
          copyToClipboard();
          setCopied(true);
        }}
        imgSrc={copied ? "/icons/check.png" : "/icons/copy.png"}
        imgAlt={
          copied
            ? "Foursquare check in icons created by icon wind - Flaticon"
            : "Correct icons created by Freepik - Flaticon"
        }
      />
    </div>
  );
}
