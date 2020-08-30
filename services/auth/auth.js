const config = require("./config");
const { v4: uuidv4 } = require("uuid");
const db = require("./db");
const axios = require("axios");
const { selectChallenge } = require("./db");

const GITHUB_REDIRECT_URI = `https://github.com/login/oauth/authorize?client_id=${config.GITHUB_CLIENT_ID}&scope=user:email`;

const generateGitHubRedirectUri = async () => {
  const random_string = uuidv4();
  await db.insertChallenge(random_string);
  return `${GITHUB_REDIRECT_URI}&state=${random_string}`;
};

const authenticateGitHub = async (code, state) => {
  const body = {
    client_id: config.GITHUB_CLIENT_ID,
    client_secret: config.GITHUB_CLIENT_SECRET,
    code,
    state,
  };
  const isMatch = await selectChallenge(state);
  console.log(isMatch, state);
  if (!isMatch) {
    return false;
  }
  const opts = { headers: { accept: "application/json" } };
  const { data } = await axios.post(
    "https://github.com/login/oauth/access_token",
    body,
    opts
  );
  const { access_token } = data;
  return access_token;
};

const getGitHubEmail = async (access_token) => {
  const { data: emails } = await axios.get(
    "https://api.github.com/user/emails",
    {
      headers: { 'Authorization': `token ${access_token}` },
    }
  );

  const { email } = emails.find(({ primary }) => primary);
  return email;
};

const createAccount = async (email) => {
  const account = await db.selectAccountByEmail(email);
  if (!account) {
    const newAccount = await db.insertAccount(email);
    return newAccount;
  }
  return account;
};

const generateAccessToken = async () => {
  
}

module.exports = {
  authenticateGitHub,
  generateGitHubRedirectUri,
  getGitHubEmail,
  createAccount,
};
