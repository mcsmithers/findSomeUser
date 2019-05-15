import { Users } from './users-list';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  // This is mock data
  private users: Users[] = [
    {
      "login": "smitherson",
      "id": 301237,
      "node_id": "MDQ6VXNlcjMwMTIzNw==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/301237?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/smitherson",
      "html_url": "https://github.com/smitherson",
      "followers_url": "https://api.github.com/users/smitherson/followers",
      "following_url": "https://api.github.com/users/smitherson/following{/other_user}",
      "gists_url": "https://api.github.com/users/smitherson/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/smitherson/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/smitherson/subscriptions",
      "organizations_url": "https://api.github.com/users/smitherson/orgs",
      "repos_url": "https://api.github.com/users/smitherson/repos",
      "events_url": "https://api.github.com/users/smitherson/events{/privacy}",
      "received_events_url": "https://api.github.com/users/smitherson/received_events",
      "type": "User",
      "site_admin": false,
      "score": 74.14881
    },
    {
        "login": "jonsmithers",
        "id": 2660313,
        "node_id": "MDQ6VXNlcjI2NjAzMTM=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/2660313?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/jonsmithers",
        "html_url": "https://github.com/jonsmithers",
        "followers_url": "https://api.github.com/users/jonsmithers/followers",
        "following_url": "https://api.github.com/users/jonsmithers/following{/other_user}",
        "gists_url": "https://api.github.com/users/jonsmithers/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/jonsmithers/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/jonsmithers/subscriptions",
        "organizations_url": "https://api.github.com/users/jonsmithers/orgs",
        "repos_url": "https://api.github.com/users/jonsmithers/repos",
        "events_url": "https://api.github.com/users/jonsmithers/events{/privacy}",
        "received_events_url": "https://api.github.com/users/jonsmithers/received_events",
        "type": "User",
        "site_admin": false,
        "score": 57.663097
    },
    {
        "login": "SmithersJr",
        "id": 13539331,
        "node_id": "MDQ6VXNlcjEzNTM5MzMx",
        "avatar_url": "https://avatars3.githubusercontent.com/u/13539331?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/SmithersJr",
        "html_url": "https://github.com/SmithersJr",
        "followers_url": "https://api.github.com/users/SmithersJr/followers",
        "following_url": "https://api.github.com/users/SmithersJr/following{/other_user}",
        "gists_url": "https://api.github.com/users/SmithersJr/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/SmithersJr/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/SmithersJr/subscriptions",
        "organizations_url": "https://api.github.com/users/SmithersJr/orgs",
        "repos_url": "https://api.github.com/users/SmithersJr/repos",
        "events_url": "https://api.github.com/users/SmithersJr/events{/privacy}",
        "received_events_url": "https://api.github.com/users/SmithersJr/received_events",
        "type": "User",
        "site_admin": false,
        "score": 47.114376
    },
    {
        "login": "SmithersA",
        "id": 34685983,
        "node_id": "MDQ6VXNlcjM0Njg1OTgz",
        "avatar_url": "https://avatars3.githubusercontent.com/u/34685983?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/SmithersA",
        "html_url": "https://github.com/SmithersA",
        "followers_url": "https://api.github.com/users/SmithersA/followers",
        "following_url": "https://api.github.com/users/SmithersA/following{/other_user}",
        "gists_url": "https://api.github.com/users/SmithersA/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/SmithersA/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/SmithersA/subscriptions",
        "organizations_url": "https://api.github.com/users/SmithersA/orgs",
        "repos_url": "https://api.github.com/users/SmithersA/repos",
        "events_url": "https://api.github.com/users/SmithersA/events{/privacy}",
        "received_events_url": "https://api.github.com/users/SmithersA/received_events",
        "type": "User",
        "site_admin": false,
        "score": 41.117584
    },
    {
      "login": "SmithersAssistant",
      "id": 16765370,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjE2NzY1Mzcw",
      "avatar_url": "https://avatars2.githubusercontent.com/u/16765370?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/SmithersAssistant",
      "html_url": "https://github.com/SmithersAssistant",
      "followers_url": "https://api.github.com/users/SmithersAssistant/followers",
      "following_url": "https://api.github.com/users/SmithersAssistant/following{/other_user}",
      "gists_url": "https://api.github.com/users/SmithersAssistant/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/SmithersAssistant/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/SmithersAssistant/subscriptions",
      "organizations_url": "https://api.github.com/users/SmithersAssistant/orgs",
      "repos_url": "https://api.github.com/users/SmithersAssistant/repos",
      "events_url": "https://api.github.com/users/SmithersAssistant/events{/privacy}",
      "received_events_url": "https://api.github.com/users/SmithersAssistant/received_events",
      "type": "Organization",
      "site_admin": false,
      "score": 38.129032
    }
  ];

  constructor() { }

  all(): Users[] {
    return this.users;
  }
}
