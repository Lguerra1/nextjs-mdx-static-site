import React from 'react';
import Container from './Container';
import styled from 'react-emotion';
import {
  FacebookShareButton,
  FacebookIcon,
  GooglePlusShareButton,
  GooglePlusIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';
import { siteURL, twitterHandle } from '../site.config';

const StyledDiv = styled.div`
  display: flex;
  padding: 20px 0;
`;

const ShareButtons = ({ url }) => {
  return (
    <Container>
      <StyledDiv>
        <FacebookShareButton url={siteURL + url}>
          <FacebookIcon size={30} />
        </FacebookShareButton>
        <TwitterShareButton url={siteURL + url} via={twitterHandle}>
          <TwitterIcon size={30} />
        </TwitterShareButton>
        <RedditShareButton url={siteURL + url}>
          <RedditIcon size={30} />
        </RedditShareButton>
      </StyledDiv>
    </Container>
  );
};

export default ShareButtons;
