import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import config from "util/config";

function Meta(props) {
  const { children, ...customPageMeta } = props;
  const router = useRouter();
  const title = `${config.companyName}'s Fundraise using Open Fundraise`;

  const globalMeta = {
    // Site name
    siteName: title,
    domain: "",
    twitterHandle: "@chimoney_io",
  };

  // Default meta values for current page (override with props)
  const defaultPageMeta = {
    title: title,
    description: `Invest in ${config.companyName}. This website is built using Open Fundraise, an open soruce project powered by Chimoney`,
    image: config.logo,
    type: "website",
  };

  // Construct meta object from global, default, and custom meta
  const meta = { ...globalMeta, ...defaultPageMeta, ...customPageMeta };

  // Note: Each tag should have a unique `key` so that they are de-deduped if other
  // `Meta` components are rendered on the same page or within nested components.
  // prettier-ignore
  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" key="description" />
      {meta.domain && <link rel="canonical" href={`${meta.domain}${router.asPath}`} key="canonical" />}

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} key="og-title" />
      <meta property="og:description" content={meta.description} key="og-description" />
      <meta property="og:site_name" content={meta.siteName} key="og-site-name" />
      <meta property="og:type" content="website" key="og-type" />
      {meta.domain && <meta property="og:url" content={`${meta.domain}${router.asPath}`} key="og-url" />}
      {meta.domain && meta.image && <meta property="og:image" content={`${meta.domain}${meta.image}`} key="og-image" />}

      {/* Twitter */}
      <meta name="twitter:title" content={meta.title} key="twitter-title" />
      <meta name="twitter:description" content={meta.description} key="twitter-description"/>
      <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
      {meta.twitterHandle && <meta name="twitter:site" content={meta.twitterHandle} key="twitter-site" />}
      {meta.domain && meta.image && <meta name="twitter:image" content={`${meta.domain}${meta.image}`} key="twitter-image" />}
    </Head>
  );
}

export default Meta;
