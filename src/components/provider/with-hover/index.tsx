import { ComponentType, useState } from "react";

export default function withHover<T>(Element: ComponentType<T>) {
  return (props: T) => {
    const [hovering, setHover] = useState(false);
    return (
      <Element
        {...props}
        hovering={hovering}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    );
  };
}
