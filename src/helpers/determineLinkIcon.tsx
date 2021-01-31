import React from 'react';
import {
  TwitterIcon, FacebookIcon, SlackIcon,
  WebsiteIcon, EmailIcon,
} from '../Components/VisualUtilities/IconPresets'
import { ThemeInfo } from '../Components/UI_InfoProvider/UI_InfoProvider';
import { FACEBOOK, TWITTER, WEBSITE, SLACK, EMAIL } from '../constants';

export const determineLinkIcon = (name: string, themeInfo: ThemeInfo) => {
  let linkIcon;

  switch(name) {
    case FACEBOOK:
      linkIcon = <FacebookIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize} />;
      break;
    case TWITTER:
      linkIcon = <TwitterIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize} />;
      break;
    case SLACK:
      linkIcon = <SlackIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize} />;
      break;
    case EMAIL:
      linkIcon = <EmailIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize} />;
      break;
    case WEBSITE:
      linkIcon = <WebsiteIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize} />;
      break;
    default: break;
  }

  return linkIcon;
}
