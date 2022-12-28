import React, { useState, useEffect } from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import InvestmentSection from "components/InvestmentSection";
import config from "util/config";
import investmentHandler from "util/investment";

function InvestPage(props) {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    investmentHandler
      .getInvestments({})
      .then(async (res) => {
        setInvestments(res?.data);
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);

  return (
    <>
      <Meta />
      <Navbar color="default" logo={config.logo} logoInverted={config.logo} />
      <InvestmentSection
        bgColor="default"
        size="large"
        bgImage=""
        bgImageOpacity={1}
        title={`Invest in ${config.companyName}`}
        subtitle=""
        investments={investments}
      />
    </>
  );
}

export default InvestPage;
