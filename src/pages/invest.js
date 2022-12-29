import React, { useState, useEffect } from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import InvestmentSection from "components/InvestmentSection";
import Loading from "components/Loading";
import config from "util/config";
import investmentHandler from "util/investment";

function InvestPage(props) {
  const [investments, setInvestments] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    investmentHandler
      .getInvestments({})
      .then(async (res) => {
        setInvestments(res?.data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <>
      <Meta />
      <Navbar color="default" logo={config.logo} logoInverted={config.logo} />
      {loaded ? (
        <InvestmentSection
          bgColor="default"
          size="large"
          bgImage=""
          bgImageOpacity={1}
          title={`Invest in ${config.companyName}`}
          subtitle=""
          investments={investments}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}

export default InvestPage;
