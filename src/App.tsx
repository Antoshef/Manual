import { useCallback, useState } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {
  ED_BODY,
  ED_HEADER,
  ED_TITLE,
  HAIR_BODY,
  HAIR_HEADER,
  HAIR_HEADING,
  HAIR_TITLE,
} from "./TextBox/constants";
import HairLossImage from "./img/hair_loss.png";
import EDImage from "./img/ed.png";
import ContentWrapper from "./ContentWrapper/ContentWraper";
import QuizContainer from "./Quiz/QuizContainer";

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuizHandler = useCallback(() => {
    setIsQuizOpen(true);
  }, []);

  const closeQuizHandler = useCallback(() => {
    setIsQuizOpen(false);
  }, []);

  return (
    <main className="App">
      {isQuizOpen ? (
        <QuizContainer onClose={closeQuizHandler} />
      ) : (
        <>
          <Header openQuizHandler={openQuizHandler} />
          <ContentWrapper
            backgroundDigit="01"
            imageSrc={HairLossImage}
            header={HAIR_HEADING}
            title={HAIR_TITLE}
            subheader={HAIR_HEADER}
            text={HAIR_BODY}
          />
          <ContentWrapper
            backgroundDigit="02"
            imageSrc={EDImage}
            reverse
            title={ED_TITLE}
            subheader={ED_HEADER}
            text={ED_BODY}
          />
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
