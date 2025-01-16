"use client";

import withHover from "@/components/provider/with-hover";
import withLoader from "@/components/provider/with-loader";
import Image from "next/image";

interface DogImagesProps {
  data: {
    message: string[];
    status: string;
  };
  hovering: boolean;
}

function DogImages(props: DogImagesProps) {
  return (
    <div {...props} className="relative">
      {props.hovering && (
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

export default withHover(
  withLoader(DogImages, "https://dog.ceo/api/breed/labrador/images/random/6")
);
