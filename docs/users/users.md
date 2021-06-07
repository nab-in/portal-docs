---
id: users
title: Users
---

## Welcome to the user module API specification

- This section will define APIs for the users feature/module. It will include API documentation for all CRUD operations involving a user.

A single user object, has the following keys

| Key         | Description                                                         | Required      | Type        |
| ----------- | ------------------------------------------------------------------- | ------------- | ----------- |
| id          | Unique identifier(Autogenerated)                                    | Autogenerated | Number      |
| uid         | 13 varying characters <br /> used for CRUD operations               | NO            | String(UID) |
| firstname   | Defines the user's given first name                                 | YES           | String      |
| lastname    | Defines the user's given last name                                  | YES           | String      |
| lastname    | Defines the user's unique username across the system                | YES           | String      |
| verified    | If a user verified themselves by using an email address or phone    | NO            | Boolean     |
| enabled     | A user might be or might not be enabled depending on their activity | NO            | Boolean     |
| company     | User's company of any                                               | NO            | String      |
| created     | User's date of creation                                             | NO            | Date        |
| lastupdated | User's date for when it was last updated                            | NO            | Date        |
| email       | Contact person's address                                            | NO            | String      |

## Creating users

- Crud operations involving creating a single user, can be done in two ways,

  - A standalone user, these will mainly be job seekers
  - A user who belongs to a company

_Method: POST_

### Creating a standalone user

`Endpoint`

```JS
/api/users/register
```

`Request Payload`

```JSON
{
    "firstname":"Portal",
    "password": "yourstrongpassword",
    "lastname":"Admin",
    "username":"admin",
    "email": "admin@portal.social",
}
```

`Response`

- These responses can vary depending on success and failure however, to here we will show the success reponse.

```JSON
{
  "message": "Item successfully created",
  "payload": {
    "id": "iHWO6i7JFTI8Y",
    "created": "2021-04-26T09:06:47.990Z",
    "lastupdated": "2021-04-26T09:06:47.990Z",
    "firstname": "Portal",
    "email": "admin@portal.social",
    "lastname": "Admin",
    "username": "admin",
    "verified": false,
    "enabled": true
  }
}
```

<p> <strong>NOTE</strong>: By default, a user will be enabled and not verified when they first signup. After verifying their email address, a user will be verified.</p>

### Creating a user who belongs to a company

`Endpoint`

```JS
/api/users/register
```

`Request Payload`

```JSON
{
    "firstname":"Portal",
    "password": "yourstrongpassword",
    "lastname":"Admin",
    "username":"admin",
    "email": "admin@portal.social",
    "company": {"id":"LrlisrzoAppk3"}
}
```

`Response`

- These responses can vary depending on success and failure however, to here we will show the success reponse.

```JSON
{
  "message": "Item successfully created",
  "payload": {
    "id": "iHWO6i7JFTI8Y",
    "created": "2021-04-26T09:06:47.990Z",
    "lastupdated": "2021-04-26T09:06:47.990Z",
    "firstname": "Portal",
    "email": "admin@portal.social",
    "lastname": "Admin",
    "username": "admin",
    "verified": false,
    "enabled": true
  }
}
```

<p> <strong>NOTE</strong>: By default, a user will be enabled and not verified when they first signup. After verifying their email address, a user will be verified.</p>

## Get Users

_Method: GET_

`Endpoint`

```JS
/api/users
```

`Response`

```JSON
{
  "pager": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "total": 1,
    "nextPage": "/api/users?page=2"
  },
  "users": [
    {
      "id": "FbKroGm4tZuga",
      "created": "2021-04-26T09:36:10.740Z",
      "lastupdated": "2021-04-26T09:36:10.740Z",
      "firstname": "Admin",
      "email": "portal@admin.portal",
      "lastname": "Portal",
      "username": "admin",
      "verified": true,
      "enabled": true
    }
  ]
}
```

## Get One User(By ID)

`Endpoint`

```JS
/api/users/FbKroGm4tZuga
```

`Response`

```JSON
{
  "id": "FbKroGm4tZuga",
  "created": "2021-04-26T09:36:10.740Z",
  "lastupdated": "2021-04-26T09:36:10.740Z",
  "firstname": "Admin",
  "email": "portal@admin.portal",
  "lastname": "Portal",
  "username": "admin",
  "verified": true,
  "enabled": true
}
```

## Get Users(By Specifying fields)

<p> <strong>NOTE</strong>: On getting users, whether a single user or the whole list, we can also specify the fields and relations we want</p>

`Endpoint`

```JS
/api/users?fields=id,firstname,username
```

`Response`

```JSON
{
  "pager": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "total": 1,
    "nextPage": "/api/users?page=2"
  },
  "users": [
    {
      "id": "FbKroGm4tZuga",
      "firstname": "Admin",
      "username": "admin"
    }
  ]
}
```

## Get Users(By filtering fields)

- We can filter users depending on certain fields, more like a search strategy, in the example below, we will find all user with username equal to `admin`

`Endpoint`

```JS
/api/users?filter=username:eq:admin
```

`Response`

```JSON
{
  "pager": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "total": 1,
    "nextPage": "/api/users?page=2"
  },
  "users": [
    {
      "id": "FbKroGm4tZuga",
      "created": "2021-04-26T09:36:10.740Z",
      "lastupdated": "2021-04-26T09:36:10.740Z",
      "firstname": "Admin",
      "email": "portal@admin.portal",
      "lastname": "Portal",
      "username": "admin",
      "verified": true,
      "enabled": true
    }
  ]
}
```

<p> <strong>NOTE</strong>: All filtering mechanisms, can be combined to produce a lobust search strategy</p>

- Available search and filter Operators

| Operator | Types                                                                                 | Value Required | Description                             |
| -------- | ------------------------------------------------------------------------------------- | -------------- | --------------------------------------- |
| eq       | string \| boolean \| integer \| float \| enum \| collection (checks for size) \| date | true           | Equality                                |
| like     | string                                                                                | true           | Case sensitive string, match anywhere   |
| ilike    | string                                                                                | true           | Case insensitive string, match anywhere |
| in       | string \| boolean \| integer \| float \| date                                         | true           | Find objects matching 1 or more values  |

## Update a user

_Method: PUT_

`Endpoint`

```JS
/api/users/FbKroGm4tZuga
```

`Request Payload`

```JSON
{
  "firstname": "Portal Admin",
  "email": "super@admin.portal",
  "lastname": "Super Admin",
  "username": "admin",
  "enabled": false
}
```

`Response`

```JSON
{
  "message": "Item with id FbKroGm4tZuga updated successfully.",
  "payload": {
    "id": "FbKroGm4tZuga",
    "created": "2021-04-26T09:36:10.740Z",
    "lastupdated": "2021-04-26T09:36:10.740Z",
    "firstname": "Portal Admin",
    "email": "super@admin.portal",
    "lastname": "Super Admin",
    "username": "admin",
    "verified": true,
    "enabled": false
  }
}
```

## Delete a user

_Method: DELETE_

`Endpoint`

```JS
/api/users/D67ZA1LulF2kf
```

`Response`

```JSON
{
  "message": "Object with identifier D67ZA1LulF2kf deleted successfully"
}
```