import Auth0 from 'react-native-auth0';

const AUTH0_DOMAIN = 'dev-n70u8jb2vjjnoavs.us.auth0.com';
const CLIENT_ID = 'fkSGXLkbMYO8GStQA8Yt0bvsWUKNawZr';

const auth0 = new Auth0({
  domain: `${AUTH0_DOMAIN}`,
  clientId: `${CLIENT_ID}`,
});

export {auth0, AUTH0_DOMAIN, CLIENT_ID};
