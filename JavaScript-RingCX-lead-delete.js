const baseURL= inputData.baseURL;
const accountId= inputData.accountId;
const accessToken= inputData.accessToken;
const leadId= inputData.leadId;

const url = `${baseURL}/api/v1/admin/accounts/${accountId}/campaignLeads/actions?accountId=${accountId}&leadAction=DELETE_LEADS`;


const headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': `${accessToken}`
};

const data = {
    "campaignLeadSearchCriteria":
    {
        "leadIds":[
          leadId
          ]
    }
};

const res = await fetch(url, {
  method: 'PUT',
  headers: headers,
  body: JSON.stringify(data)
})
const body = await res.text();
return {result: body};