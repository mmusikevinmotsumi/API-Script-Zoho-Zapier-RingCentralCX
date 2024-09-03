const clientId = input_data['clientId']; // Replace with your Client ID
const clientSecret = input_data['clientSecret ']; // Replace with your Client Secret
const username = input_data['username ']; // Replace with your RingCentral username
const extension = input_data['extension ']; // Replace with your extension, or leave blank if not using one
const password = input_data['password ']; // Replace with your RingCentral password

const encodedCredentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

const tokenUrl = 'https://platform.ringcentral.com/restapi/oauth/token';

const body = `grant_type=password&username=${encodeURIComponent(username)}&extension=${encodeURIComponent(extension)}&password=${encodeURIComponent(password)}`;

fetch(tokenUrl, {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${encodedCredentials}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: body
})
  .then(response => response.json())
  .then(data => {
    if (data.access_token) {
      // Return the access token so you can use it in further Zapier actions
      callback(null, { access_token: data.access_token });
      output = [{ access_token: data.access_token }];
    } else {
      callback(null, { error: 'Failed to obtain access token', details: data });
      output = [{ error: 'Failed to obtain access token', details: data }];
    }
  })
  .catch(error => {
    callback(error);
    output = [{ error: 'Request failed', details: error.message }];
  });