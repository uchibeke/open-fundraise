<p align="center">
  <a href="https://github.com/uchibeke/open-fundraise">
    <img src="https://imagedelivery.net/FWOxhF6qUOoRrmL6RllgbQ/f8505565-ad39-4d0e-c6ac-e9f647300500/public" alt="Logo" style="height:200px">

  </a>

  <h3 align="center">Open Fundraise - Powered by Chimoney</h3>

  <p align="center">
    <br />
    <br />
    <a href="https://twitter.com/chimoney_io">Twitter</a>
    ·
    <a href="https://chimoney.io">Website</a>
    ·
    <a href="https://github.com/uchibeke/open-fundraise/issues">Issues</a>

  </p>
</p>

## About Open Fundraise
Run your fundraise like a champ and builder!


### Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [MUI](https://mui.com/)
- [Render](https://render.com/)

## Features

- Host your Pitch Deck and Pitch Video in your very own fundraise website
- Customize investment terms and have multiple tiers to incentivize early Backers
- Automate the process of collecting Expressions of Interest with email confirmations and payment instructions to investors built in (Powered by Chimoney) (_optional_)
- Automate Payment collection with Wire Payments or Payments from a Chimoney Wallet (_optional_)
- Accept Crypto like a USD Stablecoin on any EVM chain (powered by Chimoney) (_optional_)

<div style="width:100%">
   <img src="https://imagedelivery.net/FWOxhF6qUOoRrmL6RllgbQ/04cb3113-0da7-4702-2b06-a8d041f89600/public" width="49%"></img>
   <img src="https://imagedelivery.net/FWOxhF6qUOoRrmL6RllgbQ/502c3c1e-96ef-4723-26f7-7301a0733700/public" width="49%"></img>
</div>
<div style="width:100%">
   <img src="https://imagedelivery.net/FWOxhF6qUOoRrmL6RllgbQ/1f3385ba-803b-4f6f-a705-4d1e08b17100/public" width="49%"></img>
   <img src="https://imagedelivery.net/FWOxhF6qUOoRrmL6RllgbQ/71c7c2d0-7d1d-4089-c578-5afbc0a7e300/public" width="49%"></img>
</div>

## 👉 Get Started

### Prerequisites

Here is what you need to be able to run Open Fundraise.

- Node.js (Version: >=15.x <17)
- Yarn _(recommended)_
- [ChiConnect](https://chimoney.readme.io/) (Chimoney's API)
- A Pitch Deck saves as a Google presentation. See the `env.example` file for the embed link format
- A Video hosted on Youtube. See the `env.example` file for the embed link format

## Development

### Setup

1. Clone the repo into a public GitHub repository (or fork https://github.com/uchibeke/open-fundraise/fork). If you plan to distribute the code, keep the source code public to comply with [MIT](https://github.com/uchibeke/open-fundraise/blob/main/LICENSE).

   ```sh
   git clone https://github.com/uchibeke/open-fundraise.git
   ```

2. Go to the project folder

   ```sh
   cd open-fundraise
   ```

3. Install packages with yarn

   ```sh
   yarn
   ```

4. Set up your .env file
   - Duplicate `.env.example` to `.env`
   - Add the correct credentials
   - Optionally, get a Chimoney API secret by following the instructions outlined [Chimoney/chimoney-community-projects](https://github.com/Chimoney/chimoney-community-projects#get-started). Mention that you need access for Open Fundraise.

5. Edit the `/src/util/config.js` file and add company name, logo, investment Tiers and terms, etc

6. Start the project

   ```sh
   npm run dev
   ```

When the above command completes you'll be able to view your website at `http://localhost:3000`

