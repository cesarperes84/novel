import React from 'react';
import Head from "next/head";

const Meta = (): JSX.Element => (
  <Head>
    <title>Novell App</title>
    <meta
      name="description"
      content="Novel é uma aplicação web onde diariamente há um desafio para descobrir qual a novela do dia."
    />
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
    />
    <meta property="og:url" content="https://novel-app-web.vercel.app/" />
    <meta property="og:title" content="Qual é a novela? | Novel" />
    <meta
      property="og:description"
      content="Novel é uma aplicação web onde diariamente há um desafio para descobrir qual a novela do dia."
    />
    <meta
      property="og:image"
      content="https://novel-app-web.vercel.app/logo.png"
    />
  </Head>
);


export default Meta;