(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return j}));var a=n(3),b=n(7),l=(n(0),n(89)),i=["components"],r={id:"jobs",title:"Jobs"},o={unversionedId:"jobs/jobs",id:"jobs/jobs",isDocsHomePage:!1,title:"Jobs",description:"Welcome to the job module API specification",source:"@site/docs/jobs/jobs.md",sourceDirName:"jobs",slug:"/jobs/jobs",permalink:"/portal-docs/docs/jobs/jobs",editUrl:"https://github.com/nab-in/portal-docs/edit/develop/docs/jobs/jobs.md",version:"current",frontMatter:{id:"jobs",title:"Jobs"},sidebar:"portalSideBar",previous:{title:"Users",permalink:"/portal-docs/docs/users/users"},next:{title:"Job Categories",permalink:"/portal-docs/docs/jobs/jobcategories"}},c=[{value:"Welcome to the job module API specification",id:"welcome-to-the-job-module-api-specification",children:[]},{value:"Creating a job",id:"creating-a-job",children:[{value:"Creating a standalone job",id:"creating-a-standalone-job",children:[]}]},{value:"Get jobs",id:"get-jobs",children:[]},{value:"Pagination and Page sizes",id:"pagination-and-page-sizes",children:[]},{value:"Get One job(By ID)",id:"get-one-jobby-id",children:[]},{value:"Get jobs(By Specifying fields)",id:"get-jobsby-specifying-fields",children:[]},{value:"Get jobs(By filtering fields)",id:"get-jobsby-filtering-fields",children:[]},{value:"Update a job",id:"update-a-job",children:[]},{value:"Delete a job",id:"delete-a-job",children:[]},{value:"Apply to a job",id:"apply-to-a-job",children:[]},{value:"Un-Apply a job",id:"un-apply-a-job",children:[]}],p={toc:c};function j(e){var t=e.components,n=Object(b.a)(e,i);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"welcome-to-the-job-module-api-specification"},"Welcome to the job module API specification"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This section will define APIs for the jobs feature/module. It will include API documentation for all CRUD operations involving a job.")),Object(l.b)("p",null,"A single job object, has the following keys"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Key"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"Unique identifier(Autogenerated)"),Object(l.b)("td",{parentName:"tr",align:null},"Autogenerated"),Object(l.b)("td",{parentName:"tr",align:null},"Number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"uid"),Object(l.b)("td",{parentName:"tr",align:null},"13 varying characters ",Object(l.b)("br",null)," used for CRUD operations"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"String(UID)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"Defines the job's given name"),Object(l.b)("td",{parentName:"tr",align:null},"YES"),Object(l.b)("td",{parentName:"tr",align:null},"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"logo"),Object(l.b)("td",{parentName:"tr",align:null},"Defines the job's logo"),Object(l.b)("td",{parentName:"tr",align:null},"YES"),Object(l.b)("td",{parentName:"tr",align:null},"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"location"),Object(l.b)("td",{parentName:"tr",align:null},"Defines the job's physical location"),Object(l.b)("td",{parentName:"tr",align:null},"YES"),Object(l.b)("td",{parentName:"tr",align:null},"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"website"),Object(l.b)("td",{parentName:"tr",align:null},"jobs website if any"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"title"),Object(l.b)("td",{parentName:"tr",align:null},"jobs title"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"about"),Object(l.b)("td",{parentName:"tr",align:null},"job's brief description"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"created"),Object(l.b)("td",{parentName:"tr",align:null},"job's date of creation"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Date")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lastupdated"),Object(l.b)("td",{parentName:"tr",align:null},"job's date for when it was last updated"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Date")))),Object(l.b)("h2",{id:"creating-a-job"},"Creating a job"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Crud operations involving creating a single job, can be done in two ways,"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"A standalone job, these will mainly be job seekers"),Object(l.b)("li",{parentName:"ul"},"A job who belongs to a job")))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Method: POST")),Object(l.b)("h3",{id:"creating-a-standalone-job"},"Creating a standalone job"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/jobs\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n    "name":"job Name",\n    "location": "job location",\n    "website":"job website",\n    "title":"job Title",\n    "bio":"job brief description"\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"These responses can vary depending on success and failure however, to here we will show the success reponse.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Item successfully created",\n  "payload": {\n    "id": "iHWO6i7JFTI8Y",\n    "created": "2021-04-26T09:06:47.990Z",\n    "lastupdated": "2021-04-26T09:06:47.990Z",\n    "name":"job Name",\n    "location": "job location",\n    "website":"job website",\n    "title":"job Title",\n    "bio":"job brief description"\n  }\n}\n')),Object(l.b)("h2",{id:"get-jobs"},"Get jobs"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Method: GET")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/jobs\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/jobs?page=2"\n  },\n  "jobs": [\n    {\n      "id": "FbKroGm4tZuga",\n      "created": "2021-04-26T09:36:10.740Z",\n      "lastupdated": "2021-04-26T09:36:10.740Z",\n      "name":"job Name",\n      "location": "job location",\n      "website":"job website",\n      "title":"job Title",\n      "bio":"job brief description"\n    }\n  ]\n}\n')),Object(l.b)("h2",{id:"pagination-and-page-sizes"},"Pagination and Page sizes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can define pages you want and the data per page size you want by passing query params in get request i.e page=2&pageSize=400"),Object(l.b)("li",{parentName:"ul"},"This will return data of page two with size of 400 records per page"),Object(l.b)("li",{parentName:"ul"},"If page and page size are not defined, the default is 1 and 100 respectively")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Method: GET")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/jobs?page=3&pageSize=100\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can also pass params to get all data without pagination by passing in ",Object(l.b)("inlineCode",{parentName:"li"},"paging=false"))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Method: GET")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/jobs?paging=false\n")),Object(l.b)("h2",{id:"get-one-jobby-id"},"Get One job(By ID)"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/jobs/FbKroGm4tZuga\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "FbKroGm4tZuga",\n  "created": "2021-04-26T09:36:10.740Z",\n  "lastupdated": "2021-04-26T09:36:10.740Z",\n  "name":"job Name",\n  "location": "job location",\n  "website":"job website",\n  "title":"job Title",\n  "bio":"job brief description"\n}\n')),Object(l.b)("h2",{id:"get-jobsby-specifying-fields"},"Get jobs(By Specifying fields)"),Object(l.b)("p",null," ",Object(l.b)("strong",null,"NOTE"),": On getting jobs, whether a single job or the whole list, we can also specify the fields and relations we want"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/jobs?fields=id,name,location\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/jobs?page=2"\n  },\n  "jobs": [\n    {\n      "id": "FbKroGm4tZuga",\n      "name":"job Name",\n      "location": "job location",\n    }\n  ]\n}\n')),Object(l.b)("h2",{id:"get-jobsby-filtering-fields"},"Get jobs(By filtering fields)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"We can filter jobs depending on certain fields, more like a search strategy, in the example below, we will find all job with jobname equal to ",Object(l.b)("inlineCode",{parentName:"li"},"admin"))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/jobs?filter=name:eq:job Name\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/jobs?page=2"\n  },\n  "jobs": [\n    {\n      "id": "FbKroGm4tZuga",\n      "created": "2021-04-26T09:36:10.740Z",\n      "lastupdated": "2021-04-26T09:36:10.740Z",\n      "name":"job Name",\n      "location": "job location",\n      "website":"job website",\n      "title":"job Title",\n      "bio":"job brief description"\n    }\n  ]\n}\n')),Object(l.b)("p",null," ",Object(l.b)("strong",null,"NOTE"),": All filtering mechanisms, can be combined to produce a lobust search strategy"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Available search and filter Operators")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Operator"),Object(l.b)("th",{parentName:"tr",align:null},"Types"),Object(l.b)("th",{parentName:"tr",align:null},"Value Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eq"),Object(l.b)("td",{parentName:"tr",align:null},"string ","|"," boolean ","|"," integer ","|"," float ","|"," enum ","|"," collection (checks for size) ","|"," date"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"Equality")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"like"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"Case sensitive string, match anywhere")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ilike"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"Case insensitive string, match anywhere")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"in"),Object(l.b)("td",{parentName:"tr",align:null},"string ","|"," boolean ","|"," integer ","|"," float ","|"," date"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"Find objects matching 1 or more values")))),Object(l.b)("h2",{id:"update-a-job"},"Update a job"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Method: PUT")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/jobs/FbKroGm4tZuga\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n\n    "name":"Erick Baney Name",\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Item with id FbKroGm4tZuga updated successfully.",\n  "payload": {\n    "id": "FbKroGm4tZuga",\n    "created": "2021-04-26T09:36:10.740Z",\n    "lastupdated": "2021-04-26T09:36:10.740Z",\n    "name":"Erick Baney Name",\n    "location": "job location",\n    "website":"job website",\n    "title":"job Title",\n    "bio":"job brief description"\n  }\n}\n')),Object(l.b)("h2",{id:"delete-a-job"},"Delete a job"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Method: DELETE")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/jobs/D67ZA1LulF2kf\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Object with identifier D67ZA1LulF2kf deleted successfully"\n}\n')),Object(l.b)("h2",{id:"apply-to-a-job"},"Apply to a job"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Method: POST")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/jobs/D67ZA1LulF2kf/apply\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Where ",Object(l.b)("em",{parentName:"li"},"D67ZA1LulF2kf")," is the job ID")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "You have successfully applied to this job"\n}\n')),Object(l.b)("h2",{id:"un-apply-a-job"},"Un-Apply a job"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Method: DELETE")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/jobs/D67ZA1LulF2kf/revoke\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Where ",Object(l.b)("em",{parentName:"li"},"D67ZA1LulF2kf")," is the job ID")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "You have revoked successfully your application from this job"\n}\n')))}j.isMDXComponent=!0}}]);