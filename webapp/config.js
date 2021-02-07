var tenantName = '';
var tenantID = '';
var clientID = '';
var clientSecret = '';

exports.creds = {
    identityMetadata: 'https://login.microsoftonline.com/' + tenantName + '.onmicrosoft.com/.well-known/openid-configuration',
    clientID: clientID,
    responseType: 'code id_token',
    responseMode: 'form_post',
    redirectUrl: 'http://localhost:3000/auth/openid/return',
    allowHttpForRedirectUrl: true, // change to false for production
    clientSecret: clientSecret,
    validateIssuer: true,
    isB2C: false,
    issuer: 'https://sts.windows.net/' + tenantID + '/',
    passReqToCallback: false,
    useCookieInsteadOfSession: true,
    cookieEncryptionKeys: [
        { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
        { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' },
    ],
    scope: null,
    loggingLevel: 'info',
    nonceLifetime: null,
    nonceMaxAmount: 5,
    clockSkew: 300,
}

exports.destroySessionUrl = 'https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=http://localhost:3000';

// For calling API
exports.resourceURL = 'https://<tenant_name>.onmicrosoft.com/<api_path>';
