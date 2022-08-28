import { DOMAttributes, FC } from "react";

const Section: FC<DOMAttributes<any>> = ({ ...props }) => {

  return (
    <section className="section">
      {props.children}
    </section>
  )
}

export default Section