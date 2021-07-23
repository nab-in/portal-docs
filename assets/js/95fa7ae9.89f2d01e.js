(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var a=t(3),l=t(7),r=(t(0),t(89)),b=["components"],i={id:"users",title:"Users"},s={unversionedId:"users/users",id:"users/users",isDocsHomePage:!1,title:"Users",description:"Welcome to the user module API specification",source:"@site/docs/users/users.md",sourceDirName:"users",slug:"/users/users",permalink:"/portal-docs/docs/users/users",editUrl:"https://github.com/nab-in/portal-docs/edit/develop/docs/users/users.md",version:"current",frontMatter:{id:"users",title:"Users"},sidebar:"portalSideBar",previous:{title:"Authentication",permalink:"/portal-docs/docs/users/auth"},next:{title:"User Roles",permalink:"/portal-docs/docs/users/userroles"}},p=[{value:"Welcome to the user module API specification",id:"welcome-to-the-user-module-api-specification",children:[]},{value:"Creating users",id:"creating-users",children:[{value:"Creating a standalone user",id:"creating-a-standalone-user",children:[]},{value:"Creating a user who belongs to a company",id:"creating-a-user-who-belongs-to-a-company",children:[]},{value:"Creating a user with user roles",id:"creating-a-user-with-user-roles",children:[]}]},{value:"Get Users",id:"get-users",children:[]},{value:"Pagination and Page sizes",id:"pagination-and-page-sizes",children:[]},{value:"Get One User(By ID)",id:"get-one-userby-id",children:[]},{value:"Get Users(By Specifying fields)",id:"get-usersby-specifying-fields",children:[]},{value:"Get Users(By filtering fields)",id:"get-usersby-filtering-fields",children:[]},{value:"Update a user",id:"update-a-user",children:[]},{value:"Delete a user",id:"delete-a-user",children:[]},{value:"Check a user&#39;s company",id:"check-a-users-company",children:[]},{value:"Get Applied Jobs",id:"get-applied-jobs",children:[]},{value:"Get Created Jobs",id:"get-created-jobs",children:[]},{value:"Get Saved Jobs",id:"get-saved-jobs",children:[]},{value:"Update user Password",id:"update-user-password",children:[]},{value:"Upload/Update DP",id:"uploadupdate-dp",children:[]},{value:"Upload/Update CV",id:"uploadupdate-cv",children:[]}],c={toc:p};function u(e){var n=e.components,t=Object(l.a)(e,b);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"welcome-to-the-user-module-api-specification"},"Welcome to the user module API specification"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This section will define APIs for the users feature/module. It will include API documentation for all CRUD operations involving a user.")),Object(r.b)("p",null,"A single user object, has the following keys"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Key"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"id"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier(Autogenerated)"),Object(r.b)("td",{parentName:"tr",align:null},"Autogenerated"),Object(r.b)("td",{parentName:"tr",align:null},"Number")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"uid"),Object(r.b)("td",{parentName:"tr",align:null},"13 varying characters ",Object(r.b)("br",null)," used for CRUD operations"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"String(UID)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"firstname"),Object(r.b)("td",{parentName:"tr",align:null},"Defines the user's given first name"),Object(r.b)("td",{parentName:"tr",align:null},"YES"),Object(r.b)("td",{parentName:"tr",align:null},"String")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"lastname"),Object(r.b)("td",{parentName:"tr",align:null},"Defines the user's given last name"),Object(r.b)("td",{parentName:"tr",align:null},"YES"),Object(r.b)("td",{parentName:"tr",align:null},"String")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"lastname"),Object(r.b)("td",{parentName:"tr",align:null},"Defines the user's unique username across the system"),Object(r.b)("td",{parentName:"tr",align:null},"YES"),Object(r.b)("td",{parentName:"tr",align:null},"String")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"verified"),Object(r.b)("td",{parentName:"tr",align:null},"If a user verified themselves by using an email address or phone"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"Boolean")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"enabled"),Object(r.b)("td",{parentName:"tr",align:null},"A user might be or might not be enabled depending on their activity"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"Boolean")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"company"),Object(r.b)("td",{parentName:"tr",align:null},"User's company of any"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"String")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"created"),Object(r.b)("td",{parentName:"tr",align:null},"User's date of creation"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"Date")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"lastupdated"),Object(r.b)("td",{parentName:"tr",align:null},"User's date for when it was last updated"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"Date")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"email"),Object(r.b)("td",{parentName:"tr",align:null},"Contact person's address"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"String")))),Object(r.b)("h2",{id:"creating-users"},"Creating users"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Crud operations involving creating a single user, can be done in two ways,"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A standalone user, these will mainly be job seekers"),Object(r.b)("li",{parentName:"ul"},"A user who belongs to a company")))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Method: POST")),Object(r.b)("h3",{id:"creating-a-standalone-user"},"Creating a standalone user"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/register\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n    "firstname":"Portal",\n    "password": "yourstrongpassword",\n    "lastname":"Admin",\n    "username":"admin",\n    "email": "admin@portal.social",\n}\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"These responses can vary depending on success and failure however, to here we will show the success reponse.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Item successfully created",\n  "payload": {\n    "id": "iHWO6i7JFTI8Y",\n    "created": "2021-04-26T09:06:47.990Z",\n    "lastupdated": "2021-04-26T09:06:47.990Z",\n    "firstname": "Portal",\n    "email": "admin@portal.social",\n    "lastname": "Admin",\n    "username": "admin",\n    "verified": false,\n    "enabled": true\n  }\n}\n')),Object(r.b)("p",null," ",Object(r.b)("strong",null,"NOTE"),": By default, a user will be enabled and not verified when they first signup. After verifying their email address, a user will be verified."),Object(r.b)("h3",{id:"creating-a-user-who-belongs-to-a-company"},"Creating a user who belongs to a company"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/register\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n    "firstname":"Portal",\n    "password": "yourstrongpassword",\n    "lastname":"Admin",\n    "username":"admin",\n    "email": "admin@portal.social",\n    "company": {"id":"LrlisrzoAppk3"}\n}\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"These responses can vary depending on success and failure however, to here we will show the success reponse.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Item successfully created",\n  "payload": {\n    "id": "iHWO6i7JFTI8Y",\n    "created": "2021-04-26T09:06:47.990Z",\n    "lastupdated": "2021-04-26T09:06:47.990Z",\n    "firstname": "Portal",\n    "email": "admin@portal.social",\n    "lastname": "Admin",\n    "username": "admin",\n    "verified": false,\n    "enabled": true\n  }\n}\n')),Object(r.b)("h3",{id:"creating-a-user-with-user-roles"},"Creating a user with user roles"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/register\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n    "firstname":"Portal",\n    "password": "yourstrongpassword",\n    "lastname":"Admin",\n    "username":"admin",\n    "email": "admin@portal.social",\n    "userRoles": [{"id":"LrlisrzoAppk3"}, {"id":"PQis920aApik3"}]\n}\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"These responses can vary depending on success and failure however, to here we will show the success reponse.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Item successfully created",\n  "payload": {\n    "id": "iHWO6i7JFTI8Y",\n    "created": "2021-04-26T09:06:47.990Z",\n    "lastupdated": "2021-04-26T09:06:47.990Z",\n    "firstname": "Portal",\n    "email": "admin@portal.social",\n    "lastname": "Admin",\n    "username": "admin",\n    "verified": false,\n    "enabled": true\n  }\n}\n')),Object(r.b)("p",null," ",Object(r.b)("strong",null,"NOTE"),": By default, a user will be enabled and not verified when they first signup. After verifying their email address, a user will be verified."),Object(r.b)("h2",{id:"get-users"},"Get Users"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Method: GET")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/users?page=2"\n  },\n  "users": [\n    {\n      "id": "FbKroGm4tZuga",\n      "created": "2021-04-26T09:36:10.740Z",\n      "lastupdated": "2021-04-26T09:36:10.740Z",\n      "firstname": "Admin",\n      "email": "portal@admin.portal",\n      "lastname": "Portal",\n      "username": "admin",\n      "verified": true,\n      "enabled": true\n    }\n  ]\n}\n')),Object(r.b)("h2",{id:"pagination-and-page-sizes"},"Pagination and Page sizes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can define pages you want and the data per page size you want by passing query params in get request i.e page=2&pageSize=400"),Object(r.b)("li",{parentName:"ul"},"This will return data of page two with size of 400 records per page"),Object(r.b)("li",{parentName:"ul"},"If page and page size are not defined, the default is 1 and 100 respectively")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Method: GET")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users?page=3&pageSize=100\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can also pass params to get all data without pagination by passing in ",Object(r.b)("inlineCode",{parentName:"li"},"paging=false"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Method: GET")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/jobs?paging=false\n")),Object(r.b)("h2",{id:"get-one-userby-id"},"Get One User(By ID)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/FbKroGm4tZuga\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "FbKroGm4tZuga",\n  "created": "2021-04-26T09:36:10.740Z",\n  "lastupdated": "2021-04-26T09:36:10.740Z",\n  "firstname": "Admin",\n  "email": "portal@admin.portal",\n  "lastname": "Portal",\n  "username": "admin",\n  "verified": true,\n  "enabled": true\n}\n')),Object(r.b)("h2",{id:"get-usersby-specifying-fields"},"Get Users(By Specifying fields)"),Object(r.b)("p",null," ",Object(r.b)("strong",null,"NOTE"),": On getting users, whether a single user or the whole list, we can also specify the fields and relations we want"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users?fields=id,firstname,username\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/users?page=2"\n  },\n  "users": [\n    {\n      "id": "FbKroGm4tZuga",\n      "firstname": "Admin",\n      "username": "admin"\n    }\n  ]\n}\n')),Object(r.b)("h2",{id:"get-usersby-filtering-fields"},"Get Users(By filtering fields)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We can filter users depending on certain fields, more like a search strategy, in the example below, we will find all user with username equal to ",Object(r.b)("inlineCode",{parentName:"li"},"admin"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users?filter=username:eq:admin\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/users?page=2"\n  },\n  "users": [\n    {\n      "id": "FbKroGm4tZuga",\n      "created": "2021-04-26T09:36:10.740Z",\n      "lastupdated": "2021-04-26T09:36:10.740Z",\n      "firstname": "Admin",\n      "email": "portal@admin.portal",\n      "lastname": "Portal",\n      "username": "admin",\n      "verified": true,\n      "enabled": true\n    }\n  ]\n}\n')),Object(r.b)("p",null," ",Object(r.b)("strong",null,"NOTE"),": All filtering mechanisms, can be combined to produce a lobust search strategy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Available search and filter Operators")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Operator"),Object(r.b)("th",{parentName:"tr",align:null},"Types"),Object(r.b)("th",{parentName:"tr",align:null},"Value Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"eq"),Object(r.b)("td",{parentName:"tr",align:null},"string ","|"," boolean ","|"," integer ","|"," float ","|"," enum ","|"," collection (checks for size) ","|"," date"),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"Equality")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"like"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"Case sensitive string, match anywhere")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ilike"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"Case insensitive string, match anywhere")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"in"),Object(r.b)("td",{parentName:"tr",align:null},"string ","|"," boolean ","|"," integer ","|"," float ","|"," date"),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"Find objects matching 1 or more values")))),Object(r.b)("h2",{id:"update-a-user"},"Update a user"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Method: PUT")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/FbKroGm4tZuga\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "firstname": "Portal Admin",\n  "email": "super@admin.portal",\n  "lastname": "Super Admin",\n  "username": "admin",\n  "enabled": false\n}\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Item with id FbKroGm4tZuga updated successfully.",\n  "payload": {\n    "id": "FbKroGm4tZuga",\n    "created": "2021-04-26T09:36:10.740Z",\n    "lastupdated": "2021-04-26T09:36:10.740Z",\n    "firstname": "Portal Admin",\n    "email": "super@admin.portal",\n    "lastname": "Super Admin",\n    "username": "admin",\n    "verified": true,\n    "enabled": false\n  }\n}\n')),Object(r.b)("h2",{id:"delete-a-user"},"Delete a user"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Method: DELETE")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/D67ZA1LulF2kf\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Object with identifier D67ZA1LulF2kf deleted successfully"\n}\n')),Object(r.b)("h2",{id:"check-a-users-company"},"Check a user's company"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Method: GET")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/belongstocompany?company=OBiivREPMQ3dm\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Where ",Object(r.b)("inlineCode",{parentName:"li"},"OBiivREPMQ3dm")," is the company ID")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response on Success")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": true\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Response on failure depends on the different criterias with a reponse object of key error with an appropriate message.")),Object(r.b)("h2",{id:"get-applied-jobs"},"Get Applied Jobs"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"METHOD: GET")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Requires authentication: ",Object(r.b)("inlineCode",{parentName:"li"},"YES"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/appliedJobs\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response on Success")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1\n  },\n  "jobs": [\n    {\n      "id": "AOvMkuzYCKfU4",\n      "name": "description",\n      "created": "2021-07-05T20:10:34.267Z",\n      "lastupdated": "2021-07-05T20:10:34.267Z",\n      "description": "description"\n    }\n  ]\n}\n')),Object(r.b)("h2",{id:"get-created-jobs"},"Get Created Jobs"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"METHOD: GET")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Requires authentication: ",Object(r.b)("inlineCode",{parentName:"li"},"YES"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/createdJobs\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response on Success")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1\n  },\n  "jobs": [\n    {\n      "id": "AOvMkuzYCKfU4",\n      "name": "description",\n      "created": "2021-07-05T20:10:34.267Z",\n      "lastupdated": "2021-07-05T20:10:34.267Z",\n      "description": "description"\n    }\n  ]\n}\n')),Object(r.b)("h2",{id:"get-saved-jobs"},"Get Saved Jobs"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"METHOD: GET")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Requires authentication: ",Object(r.b)("inlineCode",{parentName:"li"},"YES"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/savedJobs\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response on Success")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1\n  },\n  "jobs": [\n    {\n      "id": "AOvMkuzYCKfU4",\n      "name": "description",\n      "created": "2021-07-05T20:10:34.267Z",\n      "lastupdated": "2021-07-05T20:10:34.267Z",\n      "description": "description"\n    }\n  ]\n}\n')),Object(r.b)("h2",{id:"update-user-password"},"Update user Password"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"METHOD: PUT")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Requires authentication: ",Object(r.b)("inlineCode",{parentName:"li"},"YES"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/passwordupdate\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'  {\n    "oldPassword":"oldPassword",\n    "newPassword":"newPassword"\n  }\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response on Success")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Your Password has been changed successfully"\n}\n')),Object(r.b)("h2",{id:"uploadupdate-dp"},"Upload/Update DP"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"METHOD: POST")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Requires authentication: ",Object(r.b)("inlineCode",{parentName:"li"},"YES"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/dp\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Only files")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response on Success")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n\n  "path": "http://localhost:5000/api/users/K91ziWRDIsGPe.png/dp",\n  "message": "Profile picture saved successfully"\n}\n')),Object(r.b)("h2",{id:"uploadupdate-cv"},"Upload/Update CV"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"METHOD: POST")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Requires authentication: ",Object(r.b)("inlineCode",{parentName:"li"},"YES"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/cv\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Only files")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response on Success")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n\n  "path": "http://localhost:5000/api/users/K91ziWRDIsGPe.png/cv",\n  "message": "CV saved successfully"\n}\n')))}u.isMDXComponent=!0},89:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=l.a.createContext({}),c=function(e){var n=l.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return l.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},o=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),o=a,m=u["".concat(b,".").concat(o)]||u[o]||d[o]||r;return t?l.a.createElement(m,i(i({ref:n},p),{},{components:t})):l.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,b=new Array(r);b[0]=o;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<r;p++)b[p]=t[p];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,t)}o.displayName="MDXCreateElement"}}]);