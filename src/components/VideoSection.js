import React from "react";
import Container from "@material-ui/core/Container";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import VideoEmbed from "components/VideoEmbed";

function VideoSection(props) {
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      id={props.id}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Container maxWidth="xl" disableGutters={true}>
          <VideoEmbed url={props.embedUrl} />
        </Container>
      </Container>
    </Section>
  );
}

export default VideoSection;
