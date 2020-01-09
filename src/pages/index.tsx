import React from 'react';
import { NextPage } from 'next';
import 'semantic-ui-css/semantic.min.css';
import { Message } from 'semantic-ui-react';

const IndexPage: NextPage = () => {
  return <Message success header="Hello, nextjs-pwa-sample!!" content="This is a sample page" />;
};

export default IndexPage;
