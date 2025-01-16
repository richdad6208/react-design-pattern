"use client";

import withLoader from "@/components/provider/with-loader";
import Image from "next/image";

interface DogImagesProps {
  data?: {
    message: string[];
    status: string;
  };
}

function DogImages({ data }: DogImagesProps) {
  if (!data) return null;

  return data.message.map((dog: string, index: number) => (
    <Image src={dog} width={300} height={300} alt="dog" key={index} />
  ));
}

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);
