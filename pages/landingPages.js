import React from 'react';
import { withRouter } from 'next/router';
import _ from 'lodash';
import Head from '../components/Head';
import { landingPages } from '../utils/exportPosts';

const LandingPage = withRouter(({ router: { query: { url } } }) => {
  console.log('url', url);
  const { title, Component } = _.find(landingPages, { url: url });
  return (
    <>
      <Head title={title} />
      <Component />
    </>
  );
  return null;
});

export default LandingPage;
