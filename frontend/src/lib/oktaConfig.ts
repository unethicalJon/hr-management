export const oktaConfig = {
    clientId: '0oaegsbtamo7dHzWy5d7',
    issuer: 'https://dev-90002106.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openId', 'profile', 'email'],
    pkce: true,
    disableHttpsChek: true,
}