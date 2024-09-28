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
const externId= inputData.externId;
const firstName= inputData.firstName;
const lastName= inputData.lastName;
const address1= inputData.address1;
const city= inputData.city;
const state= inputData.state;
const zip= inputData.zip;
const email= inputData.email;
const auxData1= inputData.auxData1;
const auxData2= inputData.auxData2;
const auxData3= inputData.auxData3;
const auxData4= inputData.auxData4;
const auxData5= inputData.auxData5;


const url = `${baseURL}/api/v1/admin/accounts/${accountId}/campaigns/${campaignId}/leadLoader/direct`;


const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${accessToken}`
};



output = [{id: 123, hello: "world"}];
