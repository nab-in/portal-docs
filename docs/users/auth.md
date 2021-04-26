---
id: auth
title: Authentication
---

## Authentication module specification

### Login

_Method: POST_

`Endpoint`

```JS
/api/login
```

`Request Payload`

```JSON
{
  "username":"admin",
  "password":"yourstrongpassword"
}
```

`Reponse`

```JSON
{
  "id": "FbKroGm4tZuga",
  "created": "2021-04-26T09:36:10.740Z",
  "lastupdated": "2021-04-26T09:36:10.740Z",
  "firstname": "Portal Admin",
  "email": "super@admin.portal",
  "lastname": "Super Admin",
  "username": "admin",
  "verified": true,
  "enabled": true
}
```

### Logout

_Method: GET_

`Endpoint`

```JS
/api/logout
```

`Response`

```JSON
{
  "message": "User logged out successfully"
}
```
