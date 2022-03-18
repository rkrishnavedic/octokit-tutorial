require('dotenv').config();
const {Octokit, App} = require('octokit');
const {encode, decode} = require('js-base64');

const octokit = new Octokit({auth: process.env.API_TOKEN});

const login = async ()=>{
    const log = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}',{
        owner: 'kshanasmedia',
        repo: 'database',
        path: 'new.md'
    });
    console.log(decode(log?.data.content));
}

login();