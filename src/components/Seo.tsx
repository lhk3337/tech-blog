import { useSiteMetadata } from "hooks/use-site-metadata";
import React from "react";
interface Props {
  title: string;
}
export default function Seo({ title: pageTitle }: Props) {
  const {
    title: siteTitle,
    siteUrl,
    description,
    file: { publicURL },
  } = useSiteMetadata();

  return (
    <>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={publicURL} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@author_handle" />
      <meta name="twitter:title" content={siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@author_handle" />
      <meta name="twitter:image" content={publicURL} />

      <meta name="google-site-verification" content="-bEp6qApLyHi109x85kjQCHSLAp15SRSlaTTqvRKm70" />

      <meta name="naver-site-verification" content="c78512d8a5b78f43ecd4ea7fa1ab32e00c938ab7" />

      <html lang="ko" />
      <title>
        {pageTitle} | {siteTitle}
      </title>
    </>
  );
}
