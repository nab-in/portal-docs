---
id: metrics
title: Job Portal Metrics
---

## Get Metrics for companies

_Method: GET_

- Requires authentication: `YES`

`Endpoint`

```JS
/api/companies/h0P9zvV0DD9Yh/metrics
```

- Where `h0P9zvV0DD9Yh` is the company ID

`Response on Success`

```JSON
{
  "message": "Metrics for Blah",
  "metrics": {
    "applicants": 1,
    "jobs": 1,
    "interviews": 1
  }
}
```

## Get Admin Metrics

_Method: GET_

- Requires authentication: `YES`

`Endpoint`

```JS
/api/metrics
```

`Response on Success`

```JSON
{
  "message": "Job POrtal Admin Metrics",
  "metrics": {
    "users": 2,
    "companies": 1,
    "applications": 1,
    "jobs": 1
  }
}
```

## Get metrics with date ranges

_Method: GET_

- Requires authentication: `YES`

`Endpoint`

```JS
/api/metrics?startDate=2020-10-28&endDate=2020-11-28
```

`Response on Success`

```JSON
{
  "message": "Job Portal Admin Metrics from 2020-10-28 to 2020-11-28",
  "metrics": {
    "users": 2,
    "companies": 1,
    "applications": 1,
    "jobs": 1
  }
}
```
