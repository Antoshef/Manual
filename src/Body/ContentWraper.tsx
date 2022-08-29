import { FC } from "react";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import BackgroundDigit from "../TextBox/BackgroundDigit";
import BodyTextBox from "../TextBox/BodyTextBox";
import { manualUrl } from "../TextBox/constants";

type Props = {
  reverse?: boolean;
  header?: string;
  title: string;
  subheader: string;
  text: string;
  imageSrc: string;
  backgroundDigit: string;
};

const ContentWrapper: FC<Props> = ({
  reverse = false,
  header,
  backgroundDigit,
  imageSrc,
  subheader,
  text,
  title,
}) => {
  return (
    <Section>
        <Container>
        <div className="body">
          {header && <h2 className="body-title">{header}</h2>}
          <div className={!reverse ? "body-article" : "body-article body-article-reverse"}>
            <a className="body-article-image-ref" href={manualUrl}>
              <div className={"body-article-image"}>
                <img alt={backgroundDigit} src={imageSrc} />
              </div>
            </a>
            <BackgroundDigit
              className={reverse ? "body-article-background-reverse" : ""}
              text={backgroundDigit}
            />
            <BodyTextBox title={title} header={subheader} text={text} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContentWrapper;
