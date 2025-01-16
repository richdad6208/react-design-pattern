"use client";

import withLoader from "@/components/provider/with-loader";
import useHover from "@/hooks/use-hover";
import Image from "next/image";
import { RefObject } from "react";

interface DogImagesProps {
  data: {
    message: string[];
    status: string;
  };
  hovering: boolean;
}

function DogImages(props: DogImagesProps) {
  const [hoverRef, hovering] = useHover();

  return (
    <div
      ref={hoverRef as unknown as RefObject<HTMLDivElement>}
      {...props}
      className="relative"
    >
      {hovering && (
        <div className="fixed top-0 bg-blue-300 w-fit px-3 py-2 rounded-md">
          Hovering
        </div>
      )}
      <div>
        {props.data.message.map((dog: string, index: number) => (
          <Image src={dog} width={300} height={300} alt="dog" key={index} />
        ))}
      </div>
    </div>
  );
}

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);
