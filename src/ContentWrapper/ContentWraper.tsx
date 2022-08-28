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
    <Container>
      <Section>
        <div className='column-wrapper'>
          {header && <h2 className='body-header'>{header}</h2>}
          <div className={!reverse ? 'row-wrapper' : 'row-wrapper row-reverse'}>
            <a className="image-ref" href={manualUrl}>
              <div className={'image-wrapper'}>
                <img alt={backgroundDigit} src={imageSrc} />
              </div>
            </a>
            <BackgroundDigit className={reverse ? "reverse-digit" : ""} text={backgroundDigit} />
            <BodyTextBox
              title={title}
              header={subheader}
              text={text}
            />
          </div>
        </div>
      </Section>
    </Container>
  )
};

export default ContentWrapper;
