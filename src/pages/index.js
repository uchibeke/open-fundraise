import React from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import VideoSection from "components/VideoSection";
import DeckSection from "components/DeckSection";
import CtaSection from "components/CtaSection";
import CtaSection2 from "components/CtaSection2";
import FaqSection from "components/FaqSection";
import config from "util/config";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <Navbar color="default" logo={config.logo} logoInverted={config.logo} />
      <VideoSection
        bgColor="default"
        size="large"
        bgImage=""
        bgImageOpacity={1}
        title={`Invest in ${config.companyName}`}
        subtitle=""
        embedUrl={config.videoYoutubeURL}
        id="video"
      />
      <CtaSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
        buttonText="Invest now"
        buttonColor="primary"
        buttonPath="/invest"
      />
      <DeckSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Pitch Deck"
        subtitle=""
        embedUrl={config.pitcDeckGoogleSlideURL}
        id="deck"
      />
      <CtaSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to invest now?"
        subtitle=""
        buttonText="Invest now"
        buttonColor="primary"
        buttonPath="/invest"
      />
      <FaqSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="FAQs"
        subtitle=""
        id="faq"
      />
    </>
  );
}

export default IndexPage;
