import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

function CtaSection2(props) {
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      id={props.id}
    >
      <Container>
        <Box textAlign="center">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={4}
          />
          <Link href={props.buttonPath} passHref={true}>
            <Button variant="contained" size="large" color={props.buttonColor}>
              {props.buttonText}
            </Button>
          </Link>
        </Box>
      </Container>
    </Section>
  );
}

export default CtaSection2;
