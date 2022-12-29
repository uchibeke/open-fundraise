const config = {
  logo: "https://imagedelivery.net/FWOxhF6qUOoRrmL6RllgbQ/82cf0f6c-6acc-46cb-0345-e7412fe51400/public",
  companyName: "Chimoney",
  videoYoutubeURL: process.env.NEXT_YOUTUBE_URL,
  pitcDeckGoogleSlideURL: process.env.NEXT_DECK_URL,
  SAFEDocumentURL: process.env.NEXT_SAFE_URL,
  paymentInstructionURL: process.env.NEXT_PAYMENT_URL,
  investmentTiers: [
    {
      tierName: "Family and Friends: $400,000 Target",
      tierTargetAmount: 400000,
      tierValuation: 10000000,
      fundingOptions: [2000, 5000, 5000, 100000, 150000, 150000],
    },
    {
      tierName: "Early Pre-seed: First $1,000,000",
      tierTargetAmount: 1000000,
      tierValuation: 15000000,
      fundingOptions: [
        5000, 10000, 10000, 30000, 50000, 100000, 100000, 200000, 500000,
      ],
    },
    {
      tierName: "Pre-seed: Next $3,000,000",
      tierTargetAmount: 3000000,
      tierValuation: 30000000,
      fundingOptions: [
        10000, 10000, 30000, 50000, 100000, 100000, 100000, 100000, 250000,
        250000, 500000, 500000, 1000000,
      ],
    },
  ],
};

export default config;
