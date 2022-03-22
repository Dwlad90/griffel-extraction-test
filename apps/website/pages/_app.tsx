/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createDOMRenderer,
  RendererProvider,
  TextDirectionProvider,
} from '@griffel/react';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

function GriffelApp(props: AppProps) {
  const { Component, pageProps, renderer } = props as any;

  return (
    <TextDirectionProvider dir="rtl">
      <RendererProvider renderer={renderer || createDOMRenderer()}>
        <Head>
          <meta
            // eslint-disable-next-line max-len
            content="minimum-scale=1, width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
            name="viewport"
          />
        </Head>
        <Component {...pageProps} />
      </RendererProvider>
    </TextDirectionProvider>
  );
}

// Wraps all components in the tree with the data provider
export default GriffelApp;
