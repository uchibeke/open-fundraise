import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import config from "util/config";
import { formatCurrencyNumber } from "util/util";
import { styled } from "@material-ui/core/styles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core/";
import InvestmentDialog from "components/InvestmentDetailDialog";

const PREFIX = "Balance";

const classes = {
  root: `${PREFIX}-root`,
  invested: `${PREFIX}-invested`,
  avatar: `${PREFIX}-avatar`,
  differenceIcon: `${PREFIX}-differenceIcon`,
  differenceValue: `${PREFIX}-differenceValue`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.root}`]: {
    height: "100%",
    margin: theme.spacing(1),
    display: "flex",
  },
  [`& .${classes.invested}`]: {
    height: "100%",
    margin: theme.spacing(1),
    display: "flex",
    borderColor: "red",
  },

  [`& .${classes.avatar}`]: {
    backgroundColor: theme.palette.primary.main,
    height: 56,
    width: 56,
  },

  [`& .${classes.differenceIcon}`]: {
    color: theme.palette.primary.main,
  },

  [`& .${classes.differenceValue}`]: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  },
}));

function InvestmentSection(props) {
  const [investing, setInvesting] = useState(false);
  const [investmentDetails, setInvestmentDetails] = useState({});

  const investmentInitiated = ({ amount, tierValuation, tierName, index }) => {
    if (!Array.isArray(props.investments)) return false;
    const res = props.investments.find((i) => {
      const investment = i.meta.openFundraise;
      return (
        investment.investmentAmount === amount &&
        investment.investmentValuation === tierValuation &&
        investment.investmentAmountIndex === index
      );
    });
    return res;
  };
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="lg">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Container maxWidth="xl" disableGutters={true}>
          {config.investmentTiers.map((tier) => (
            <Grid key={tier.tierName}>
              <br></br>
              <Typography color="textPrimary" gutterBottom variant="h5">
                ${formatCurrencyNumber(tier.tierValuation, 0)} Valuation Cap
              </Typography>
              <Typography color="textPrimary" gutterBottom variant="subtitle1">
                {tier.tierName}
              </Typography>
              <hr></hr>{" "}
              <Grid>
                {tier.fundingOptions.map((amount, index) => {
                  const initiatedInvestment = investmentInitiated({
                    ...tier,
                    amount,
                    index,
                  });
                  const formatedAmount = formatCurrencyNumber(amount, 0);
                  return (
                    <StyledGrid
                      item
                      md={props.width || 4}
                      sm={props.width || 6}
                      xs={props.width || 12}
                      style={{ display: "inline-block" }}
                      key={index}
                    >
                      <Card className={classes.root} elevation={2}>
                        {/* <Card className={classes.root} {...rest}> */}
                        <CardContent>
                          <Grid
                            container
                            justifyContent="space-between"
                            spacing={3}
                          >
                            <Grid item>
                              <Typography
                                color="textPrimary"
                                className="chi-font-semibold"
                                variant="h6"
                              >
                                ${formatCurrencyNumber(amount, 0)}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Box my={2} display="flex" alignItems="center">
                            <Typography color="textPrimary" variant="caption">
                              {/* {tier.tierTargetAmount} */}
                              Preview terms and invest $
                              {formatCurrencyNumber(amount, 0)} at a $
                              {formatCurrencyNumber(tier.tierValuation, 0)}{" "}
                              Valuation Cap on a SAFE
                            </Typography>{" "}
                          </Box>
                          <Box
                            my={2}
                            display="flex"
                            className=" chi-space-x-3"
                            alignItems="center"
                          >
                            <Button
                              className="chi-rounded-2xl"
                              variant="contained"
                              color="primary"
                              onClick={() => {
                                setInvesting(true);
                                setInvestmentDetails({
                                  amount,
                                  investmentAmountIndex: index,
                                  ...tier,
                                });
                              }}
                              size="small"
                              disabled={initiatedInvestment}
                            >
                              {initiatedInvestment
                                ? initiatedInvestment.status == "unpaid"
                                  ? `Reserved $${formatedAmount}`
                                  : `Funded $${formatedAmount}`
                                : `Invest $${formatedAmount}`}
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </StyledGrid>
                  );
                })}
              </Grid>
            </Grid>
          ))}
        </Container>
        <br />
        <br />
      </Container>
      <InvestmentDialog
        investing={investing}
        setInvesting={(state) => setInvesting(state)}
        investmentDetails={investmentDetails}
      />
    </Section>
  );
}

export default InvestmentSection;
