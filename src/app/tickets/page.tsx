"use client";
import InfoCopy from "@/components/tickets/InfoRow";
import { useRef, useState } from "react";

export default function Tickets() {
  const latestFieldId = useRef(1);
  const [infoFields, setInfoFields] = useState([
    {
      id: 1,
      val: "",
    },
  ]);

  const addInfoField = (i: number) => {
    setInfoFields((prev) => {
      latestFieldId.current++;
      return [
        ...prev.slice(0, i + 1),
        { id: latestFieldId.current, val: "" },
        ...prev.slice(i + 1),
      ];
    });
  };

  const rmInfoField = (i: number) => {
    setInfoFields((prev) => [...prev.slice(0, i), ...prev.slice(i + 1)]);
  };

  const setInfoField = (i: number, val: string) => {
    setInfoFields((prev) => [
      ...prev.slice(0, i),
      {
        ...prev[i],
        val,
      },
      ...prev.slice(i + 1),
    ]);
  };

  const showRmBtn = infoFields.length > 1;
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      {infoFields.map(({ id, val }, i) => (
        <InfoCopy
          key={id}
          val={val}
          showRmBtn={showRmBtn}
          clickRm={() => rmInfoField(i)}
          clickAdd={() => addInfoField(i)}
          setVal={(val: string) => setInfoField(i, val)}
        />
      ))}
    </div>
  );
}
