import { apiRequestExternal } from "./util.js";

const endpoint = `/api/create-chimoney-payout`;

function invest(data) {
  return apiRequestExternal(`/api/create-chimoney-payout`, "POST", data);
}

function getInvestments(data) {
  return apiRequestExternal(`/api/get-chimoney-payouts`, "POST", data);
}

const contact = { invest, getInvestments };

export default contact;
