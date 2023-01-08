import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import config from "util/config";

function FaqSection(props) {
  const items = [
    {
      question: "What is this Website?",
      answer: `This website is created by ${config.companyName} to raise funds for their Startup. It is built using Open Fundraise, an open source project`,
    },
    {
      question: "What is Open Fundraise?",
      answer:
        "Open Fundraise is a project that enables builders to raise money from Family, Friends and close VCs. The goal is to simplify the process accepting investments from supporters while also incentiving early backers.",
    },
    {
      question:
        "Does completing the interest form in the Invest Page mean an Investor has commited?",
      answer:
        "No. It is highly unlikely that an indication of interest is a commitement to invest. An investor still needs to sign an Agreement like SAFE and send the payment.",
    },
    {
      question: "Is my information safe?",
      answer:
        "The Developers of the open source tool and the Startup commit to not publicly share the investment information with anyone for any reason.",
    },
    {
      question: "What legal and compliance issues should I be worried about?",
      answer:
        "The code for this website is open source and original built by Uchi Uchibeke for Chimoney's pre-seed. It is provided as an Experiment with no guarantees, or warranties. Developers using this code need to update the code and deploy it for themselves to use it. Although this tool automates the process of sending a Deck and Agreements like a SAFE, please, consult your lawyer and look up the laws in your country before using this tool. The original Developers will not be responsible for any issues that arise from using this tool or the code.",
    },
    {
      question:
        "As a Developer looking to raise using the Open Fundraise, why do I need a Chimoney Account and API Key?",
      answer:
        "Chimoney's infrastructure is used to manage Investor Interest, process payment (on a case-by-case basis), and enable accepting of Crypto and enable cash out to Banks and other options. Please, feel free to customize the tool to work without the Chimoney option. Basically, you can use the code for building an informational website about your Fundraise and Manage the Agreements + Payments manually.",
    },
    {
      question: "I have more questions. Where do I send them?",
      answer:
        "Please reach out to the person who sent you this link. Alternatively, contact support@chimoney.io or create a issue at github.com/uchibeke/open-fundraise/issues.",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      id={props.id}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Box pt={2}>
          {items.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq-panel-${index}`}
              >
                <Typography variant="h6">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails id={`faq-panel-${index}`}>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Section>
  );
}

export default FaqSection;
