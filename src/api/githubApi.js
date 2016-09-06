import request from 'superagent';
import Promise from 'promise';
import { githubApi } from '../../config/config.json';
import { format } from 'util';

const {
  urls,
  timeout,
  token
} = githubApi;

function createRequest(options = {}) {
  const {
    url,
    body = {},
    method = 'get',
    query
  } = options;

  return new Promise((resolve, reject) => {
    request[method](urls.base + url)
      .timeout(timeout)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json; charset=utf-8')
      .send(body)
      .query(query)
      .end((error, response = {}) => {
        if (error) {
          reject(error);
        }

        resolve(response.body);
      });
  });
}

export function getRepos(args) {
  const { username } = args;

  return createRequest({ url: format(urls.repos, username) });
}

export function getFollowers(args) {
  const { username } = args;

  return createRequest({ url: format(urls.followers, username) });
}

export function getEmojis() {
  return createRequest({ url: urls.emojis });
}

export function getUsers() {
  return createRequest({ url: urls.users });
}

export function getUser(args) {
  const { username } = args;

  return createRequest({ url: format(urls.user, username) });
}

export function getGitignoreTemplates() {
  return createRequest({ url: urls.gitignoreTemplates });
}

//-------------------------------------------------------------//
//    Sample for the POST request                              //
//-------------------------------------------------------------//
export function postResource(args = {}) {
  const { username, ...body } = args;
  return createRequest({
    url: format(urls.anotherRequest, username),
    method: 'post',
    body
  });
}
