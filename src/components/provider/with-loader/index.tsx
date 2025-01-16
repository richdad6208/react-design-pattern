"use client";

import { ComponentType, useEffect, useState } from "react";

export default function withLoader<T extends object>(
  Element: ComponentType<T>,
  url: string
) {
  return (props: T) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();

        setData(data);
      }
      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={data} />;
  };
}
