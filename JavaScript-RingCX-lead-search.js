const baseURL= inputData.baseURL;
const accountId= inputData.accountId;
const campaignId= inputData.campaignId;
const accessToken= inputData.accessToken;
const externId= inputData.externId;


const url = `${baseURL}/api/v1/admin/accounts/${accountId}/campaignLeads/leadSearch`;


const headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': `${accessToken}`
};

const data = {
      "externIds": [externId],
      "campaignId":campaignId,
      "listIds":[],
      "agentDispositions":[],
      "systemDispositions":[],
      "leadStates":[],
      "physicalStates":[],
      "leadTimezones":[],
      "suppressed":"ALL",
      "campaignIds":[campaignId]
}

const res = await fetch(url, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data)
})
const body = await res.json();
return {result: body};