const baseURL= inputData.baseURL;
const accountId= inputData.accountId;
const campaignId= inputData.campaignId;
const accessToken= inputData.accessToken;
const description= inputData.description;
const dialPriority= inputData.dialPriority;
const duplicateHandling= inputData.duplicateHandling;
const listState= inputData.listState;
const timeZoneOption= inputData.timeZoneOption;
const leadPhone= inputData.leadPhone;
const externId= inputData.externId || "";
const firstName= inputData.firstName || "";
const lastName= inputData.lastName || "";
const address1= inputData.address1 || "";
const city= inputData.city || "";
const state= inputData.state || "";
const zip= inputData.zip || null;
const email= inputData.email || "";
const auxData1= inputData.auxData1 || "";
const auxData2= inputData.auxData2 || "";
const auxData3= inputData.auxData3 || "";
const auxData4= inputData.auxData4 || "";
const auxData5= inputData.auxData5 || "";
const leadId= inputData.leadId;
const auxPhone= inputData.leadPhone

const url = `${baseURL}/api/v1/admin/accounts/${accountId}/campaignLeads/${leadId}?campaignId=${campaignId}`;


const headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': `${accessToken}`
};

const data = {
    "email": email,
    "leadPhone": leadPhone,
    "firstName": firstName,
    "lastName": lastName,
    "address1": address1,
    "externId": externId,
    "city": city,
    "state": state,
    "zip": zip,
    "auxData1": auxData1,
    "auxData2": auxData2,
    "auxData3": auxData3,
    "auxData4": auxData4,
    "auxData5": auxData5,
    "auxPhone": leadPhone,
    "extendedLeadData": {
        "Email": email,
        "FirstName": firstName,
        "LastName": lastName,
        "Phone": leadPhone,
        "RecordId": externId,
        "State": state,
        "ZipCode": zip,
        "Street": address1,
        "City": city
      }
};

const res = await fetch(url, {
  method: 'PUT',
  headers: headers,
  body: JSON.stringify(data)
})
const body = await res.text();
return {result: body};