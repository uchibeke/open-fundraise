import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useForm } from "react-hook-form";
import investmentHandler from "util/investment";
import { useRouter } from "next/router";
import Loading from "components/Loading";

function Contact(props) {
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm();
  const router = useRouter();
  const { tierName, tierValuation, amount, config, investmentAmountIndex } =
    props || {};

  const onSubmit = (data) => {
    const openFundraise = {
      companyName: config.companyName,
      pitcDeckGoogleSlideURL: config.pitcDeckGoogleSlideURL,
      videoYoutubeURL: config.videoYoutubeURL,
      SAFEDocumentURL: config.SAFEDocumentURL,
      paymentInstructionURL: config.paymentInstructionURL,
      investorEmail: data.email,
      investorName: data.name,
      investmentValuation: tierValuation,
      investmentAmount: amount,
      investmentTier: tierName,
      investmentAmountIndex,
      acceptedAgreement: data.acceptedAgreement,
    };
    const chimoneyData = {
      chimoneys: [
        {
          valueInUSD: amount,
          personalizedMessage: data.message,
          meta: { openFundraise },
          twitter: "@",
        },
      ],
    };
    setPending(true);

    investmentHandler
      .invest(chimoneyData)
      .then((res, dd) => {
        const data = res.data;
        if (data.status === "error") {
          setFormAlert({
            type: "error",
            message: data.error?.message || data.error,
          });
        } else {
          reset();
          setFormAlert({
            type: "success",
            message:
              "Your interest has been recorded. Please check your email!",
          });
          router.reload();
        }
      })
      .catch((error) => {
        setFormAlert({
          type: "error",
          message: error.message,
        });
      })
      .finally(() => {
        setPending(false);
      });
  };

  return (
    <>
      {formAlert && (
        <Box mb={3}>
          <Alert severity={formAlert.type}>{formAlert.message}</Alert>
        </Box>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={12} md={6}>
            <TextField
              variant="outlined"
              type="text"
              label="Name"
              name="name"
              error={errors.name ? true : false}
              helperText={errors.name && errors.name.message}
              fullWidth={true}
              inputRef={register({
                required: "Please enter your name",
              })}
            />
          </Grid>

          <Grid item={true} xs={12} md={6}>
            <TextField
              variant="outlined"
              type="email"
              label="Email"
              name="email"
              error={errors.email ? true : false}
              helperText={errors.email && errors.email.message}
              fullWidth={true}
              inputRef={register({
                required: "Please enter your email",
              })}
            />
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <TextField
              variant="outlined"
              type="number"
              label="Amount"
              name="amount"
              defaultValue={amount}
              error={errors.amount ? true : false}
              helperText={errors.amount && errors.amount.message}
              fullWidth={true}
              disabled
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <TextField
              variant="outlined"
              type="number"
              label="Valuation"
              name="valuation"
              defaultValue={tierValuation}
              error={errors.Valuation ? true : false}
              helperText={errors.Valuation && errors.Valuation.message}
              fullWidth={true}
              disabled
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField
              variant="outlined"
              type="text"
              label="Why are you investing?"
              name="message"
              multiline={true}
              rows={5}
              error={errors.message ? true : false}
              helperText={errors.message && errors.message.message}
              fullWidth={true}
              inputRef={register({
                required: "Reason for investing is required",
              })}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField
              type="checkbox"
              name="acceptedAgreement"
              error={errors.acceptedAgreement ? true : false}
              helperText={
                errors.acceptedAgreement && errors.acceptedAgreement.message
              }
              inputRef={register({
                required: "Please accept the Agreement",
              })}
            />
            <span>
              {" "}
              Accept{" "}
              <a href={config.SAFEDocumentURL} target="_blank">
                Investment Agreement
              </a>
            </span>
          </Grid>
          <Grid item={true} xs={12}>
            {pending && <Loading height="20px" />}
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              disabled={pending}
            >
              <span>{pending ? "Sending" : "Send now"}</span>
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Contact;
