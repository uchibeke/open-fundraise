import React from "react";
import Container from "@material-ui/core/Container";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

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
          <div>
            <embed
              src={`${props.embedUrl}&embedded=true&single=false&widget=false&headers=false&chrome=false&overridemobile=true&loop=true&delayms=60000`}
              style={{
                height: "70vh",
                width: "100%",
                maxWidth: "100vw !important",
                maxHeight: "100vh !important",
              }}
              allowFullScreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></embed>
          </div>
        </Container>
      </Container>
    </Section>
  );
}

export default VideoSection;
