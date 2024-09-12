const clientId = inputData.clientId;
const clientSecret = inputData.clientSecret;
const grantType = inputData.grantType;
const assertion = inputData.jwt;

// Base64 encoding for client credentials
const concatenatedString = `${clientId}:${clientSecret}`;
const base64Encoded = btoa(concatenatedString);

const tokenUrl = 'https://platform.ringcentral.com/restapi/oauth/token';

// Prepare the token request data
const tokenRequestData = new URLSearchParams({
    grant_type: grantType,
    assertion: assertion
});

// Asynchronous function to fetch the access token
const fetchAccessToken = async () => {
    try {
        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + base64Encoded
            },
            body: tokenRequestData
        });

        if (!response.ok) {
            // Handle HTTP errors
            const errorText = await response.text();
            throw new Error(`HTTP error ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        return { AccessToken: data.access_token }; // Return the access token
    } catch (error) {
        // Handle and return the error
        return { error: 'Failed to fetch access token: ' + error.message };
    }
};

// Execute the function and handle the result
return fetchAccessToken();