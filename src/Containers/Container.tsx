import { DOMAttributes, FC } from "react";

const Container: FC<DOMAttributes<any>> = ({ ...props }) => {
  return <article className="container">{props.children}</article>;
};

export default Container;
