(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(7),r=(n(0),n(90)),b=["components"],i={id:"users",title:"Users"},s={unversionedId:"users/users",id:"users/users",isDocsHomePage:!1,title:"Users",description:"Welcome to the user module API specification",source:"@site/docs/users/users.md",sourceDirName:"users",slug:"/users/users",permalink:"/portal-docs/docs/users/users",editUrl:"https://github.com/nab-in/portal-docs/edit/develop/docs/users/users.md",version:"current",frontMatter:{id:"users",title:"Users"},sidebar:"portalSideBar",previous:{title:"Authentication",permalink:"/portal-docs/docs/users/auth"},next:{title:"Jobs",permalink:"/portal-docs/docs/jobs/jobs"}},c=[{value:"Welcome to the user module API specification",id:"welcome-to-the-user-module-api-specification",children:[]},{value:"Creating users",id:"creating-users",children:[{value:"Creating a standalone user",id:"creating-a-standalone-user",children:[]},{value:"Creating a user who belongs to a company",id:"creating-a-user-who-belongs-to-a-company",children:[]}]},{value:"Get Users",id:"get-users",children:[]},{value:"Get One User(By ID)",id:"get-one-userby-id",children:[]},{value:"Get Users(By Specifying fields)",id:"get-usersby-specifying-fields",children:[]},{value:"Get Users(By filtering fields)",id:"get-usersby-filtering-fields",children:[]},{value:"Update a user",id:"update-a-user",children:[]},{value:"Delete a user",id:"delete-a-user",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(l.a)(e,b);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"welcome-to-the-user-module-api-specification"},"Welcome to the user module API specification"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This section will define APIs for the users feature/module. It will include API documentation for all CRUD operations involving a user.")),Object(r.b)("p",null,"A single user object, has the following keys"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Key"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"id"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier(Autogenerated)"),Object(r.b)("td",{parentName:"tr",align:null},"Autogenerated"),Object(r.b)("td",{parentName:"tr",align:null},"Number")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"uid"),Object(r.b)("td",{parentName:"tr",align:null},"13 varying characters ",Object(r.b)("br",null)," used for CRUD operations"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"String(UID)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"firstname"),Object(r.b)("td",{parentName:"tr",align:null},"Defines the user's given first name"),Object(r.b)("td",{parentName:"tr",align:null},"YES"),Object(r.b)("td",{parentName:"tr",align:null},"String")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"lastname"),Object(r.b)("td",{parentName:"tr",align:null},"Defines the user's given last name"),Object(r.b)("td",{parentName:"tr",align:null},"YES"),Object(r.b)("td",{parentName:"tr",align:null},"String")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"lastname"),Object(r.b)("td",{parentName:"tr",align:null},"Defines the user's unique username across the system"),Object(r.b)("td",{parentName:"tr",align:null},"YES"),Object(r.b)("td",{parentName:"tr",align:null},"String")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"verified"),Object(r.b)("td",{parentName:"tr",align:null},"If a user verified themselves by using an email address or phone"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"Boolean")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"enabled"),Object(r.b)("td",{parentName:"tr",align:null},"A user might be or might not be enabled depending on their activity"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"Boolean")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"company"),Object(r.b)("td",{parentName:"tr",align:null},"User's company of any"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"String")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"created"),Object(r.b)("td",{parentName:"tr",align:null},"User's date of creation"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"Date")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"lastupdated"),Object(r.b)("td",{parentName:"tr",align:null},"User's date for when it was last updated"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"Date")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"email"),Object(r.b)("td",{parentName:"tr",align:null},"Contact person's address"),Object(r.b)("td",{parentName:"tr",align:null},"NO"),Object(r.b)("td",{parentName:"tr",align:null},"String")))),Object(r.b)("h2",{id:"creating-users"},"Creating users"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Crud operations involving creating a single user, can be done in two ways,"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A standalone user, these will mainly be job seekers"),Object(r.b)("li",{parentName:"ul"},"A user who belongs to a company")))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Method: POST")),Object(r.b)("h3",{id:"creating-a-standalone-user"},"Creating a standalone user"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/register\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n    "firstname":"Portal",\n    "password": "yourstrongpassword",\n    "lastname":"Admin",\n    "username":"admin",\n    "email": "admin@portal.social",\n}\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"These responses can vary depending on success and failure however, to here we will show the success reponse.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Item successfully created",\n  "payload": {\n    "id": "iHWO6i7JFTI8Y",\n    "created": "2021-04-26T09:06:47.990Z",\n    "lastupdated": "2021-04-26T09:06:47.990Z",\n    "firstname": "Portal",\n    "email": "admin@portal.social",\n    "lastname": "Admin",\n    "username": "admin",\n    "verified": false,\n    "enabled": true\n  }\n}\n')),Object(r.b)("p",null," ",Object(r.b)("strong",null,"NOTE"),": By default, a user will be enabled and not verified when they first signup. After verifying their email address, a user will be verified."),Object(r.b)("h3",{id:"creating-a-user-who-belongs-to-a-company"},"Creating a user who belongs to a company"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/register\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n    "firstname":"Portal",\n    "password": "yourstrongpassword",\n    "lastname":"Admin",\n    "username":"admin",\n    "email": "admin@portal.social",\n    "company": {"id":"LrlisrzoAppk3"}\n}\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"These responses can vary depending on success and failure however, to here we will show the success reponse.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Item successfully created",\n  "payload": {\n    "id": "iHWO6i7JFTI8Y",\n    "created": "2021-04-26T09:06:47.990Z",\n    "lastupdated": "2021-04-26T09:06:47.990Z",\n    "firstname": "Portal",\n    "email": "admin@portal.social",\n    "lastname": "Admin",\n    "username": "admin",\n    "verified": false,\n    "enabled": true\n  }\n}\n')),Object(r.b)("p",null," ",Object(r.b)("strong",null,"NOTE"),": By default, a user will be enabled and not verified when they first signup. After verifying their email address, a user will be verified."),Object(r.b)("h2",{id:"get-users"},"Get Users"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Method: GET")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/users?page=2"\n  },\n  "users": [\n    {\n      "id": "FbKroGm4tZuga",\n      "created": "2021-04-26T09:36:10.740Z",\n      "lastupdated": "2021-04-26T09:36:10.740Z",\n      "firstname": "Admin",\n      "email": "portal@admin.portal",\n      "lastname": "Portal",\n      "username": "admin",\n      "verified": true,\n      "enabled": true\n    }\n  ]\n}\n')),Object(r.b)("h2",{id:"get-one-userby-id"},"Get One User(By ID)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/FbKroGm4tZuga\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "FbKroGm4tZuga",\n  "created": "2021-04-26T09:36:10.740Z",\n  "lastupdated": "2021-04-26T09:36:10.740Z",\n  "firstname": "Admin",\n  "email": "portal@admin.portal",\n  "lastname": "Portal",\n  "username": "admin",\n  "verified": true,\n  "enabled": true\n}\n')),Object(r.b)("h2",{id:"get-usersby-specifying-fields"},"Get Users(By Specifying fields)"),Object(r.b)("p",null," ",Object(r.b)("strong",null,"NOTE"),": On getting users, whether a single user or the whole list, we can also specify the fields and relations we want"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users?fields=id,firstname,username\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/users?page=2"\n  },\n  "users": [\n    {\n      "id": "FbKroGm4tZuga",\n      "firstname": "Admin",\n      "username": "admin"\n    }\n  ]\n}\n')),Object(r.b)("h2",{id:"get-usersby-filtering-fields"},"Get Users(By filtering fields)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We can filter users depending on certain fields, more like a search strategy, in the example below, we will find all user with username equal to ",Object(r.b)("inlineCode",{parentName:"li"},"admin"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users?filter=username:eq:admin\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/users?page=2"\n  },\n  "users": [\n    {\n      "id": "FbKroGm4tZuga",\n      "created": "2021-04-26T09:36:10.740Z",\n      "lastupdated": "2021-04-26T09:36:10.740Z",\n      "firstname": "Admin",\n      "email": "portal@admin.portal",\n      "lastname": "Portal",\n      "username": "admin",\n      "verified": true,\n      "enabled": true\n    }\n  ]\n}\n')),Object(r.b)("p",null," ",Object(r.b)("strong",null,"NOTE"),": All filtering mechanisms, can be combined to produce a lobust search strategy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Available search and filter Operators")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Operator"),Object(r.b)("th",{parentName:"tr",align:null},"Types"),Object(r.b)("th",{parentName:"tr",align:null},"Value Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"eq"),Object(r.b)("td",{parentName:"tr",align:null},"string ","|"," boolean ","|"," integer ","|"," float ","|"," enum ","|"," collection (checks for size) ","|"," date"),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"Equality")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"like"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"Case sensitive string, match anywhere")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ilike"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"Case insensitive string, match anywhere")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"in"),Object(r.b)("td",{parentName:"tr",align:null},"string ","|"," boolean ","|"," integer ","|"," float ","|"," date"),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"Find objects matching 1 or more values")))),Object(r.b)("h2",{id:"update-a-user"},"Update a user"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Method: PUT")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/FbKroGm4tZuga\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "firstname": "Portal Admin",\n  "email": "super@admin.portal",\n  "lastname": "Super Admin",\n  "username": "admin",\n  "enabled": false\n}\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Item with id FbKroGm4tZuga updated successfully.",\n  "payload": {\n    "id": "FbKroGm4tZuga",\n    "created": "2021-04-26T09:36:10.740Z",\n    "lastupdated": "2021-04-26T09:36:10.740Z",\n    "firstname": "Portal Admin",\n    "email": "super@admin.portal",\n    "lastname": "Super Admin",\n    "username": "admin",\n    "verified": true,\n    "enabled": false\n  }\n}\n')),Object(r.b)("h2",{id:"delete-a-user"},"Delete a user"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Method: DELETE")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/D67ZA1LulF2kf\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Object with identifier D67ZA1LulF2kf deleted successfully"\n}\n')))}p.isMDXComponent=!0}}]);