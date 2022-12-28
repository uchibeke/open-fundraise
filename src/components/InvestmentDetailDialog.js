import React from "react";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import config from "util/config";
import { Grid, Typography, Button } from "@material-ui/core/";
import { formatCurrencyNumber } from "util/util";
import InvestmentForm from "components/InvestmentForm";

function InvestmentDialog(props) {
  const { setInvesting, investmentDetails } = props;
  const { tierValuation, amount } = investmentDetails || {};

  investmentDetails.config = config;
  return (
    <Dialog
      open={props.investing}
      onClose={() => props.setInvesting(false)}
      aria-labelledby="form-dialog-title"
      fullScreen
      maxWidth="md"
      disableGutters
    >
      <Container maxWidth="sm" disableGutters>
        <DialogTitle id="form-dialog-title" align="center">
          Invest in {config.companyName}
        </DialogTitle>

        <DialogContent>
          <Container maxWidth="sm" align="center" disableGutters>
            <Grid>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Invest ${formatCurrencyNumber(amount, 0)}
              </Typography>
              <Typography color="textPrimary" gutterBottom variant="subtitle1">
                at a ${formatCurrencyNumber(tierValuation, 0)} Valuation Cap on
                a SAFE
              </Typography>
              <hr></hr>{" "}
              <Grid align="center">
                <br />
                <InvestmentForm {...investmentDetails} />
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
        <br />
        <DialogActions>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setInvesting(false);
            }}
            style={{ position: "absolute", bottom: "50px" }}
          >
            Cancel
          </Button>
        </DialogActions>
        <br />
        <br />
      </Container>
    </Dialog>
  );
}

export default InvestmentDialog;
