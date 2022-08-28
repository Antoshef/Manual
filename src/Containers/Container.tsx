import { DOMAttributes, FC } from "react";

const Container: FC<DOMAttributes<any>> = ({ ...props }) => {

  return (
    <section className="container">
      {props.children}
    </section>
  )
}

export default Container