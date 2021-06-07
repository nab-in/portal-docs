(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{77:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return p})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return r})),a.d(n,"default",(function(){return m}));var t=a(3),l=a(7),i=(a(0),a(90)),b=["components"],p={id:"companies",title:"Companies"},c={unversionedId:"companies/companies",id:"companies/companies",isDocsHomePage:!1,title:"Companies",description:"Welcome to the company module API specification",source:"@site/docs/companies/companies.md",sourceDirName:"companies",slug:"/companies/companies",permalink:"/portal-docs/docs/companies/companies",editUrl:"https://github.com/nab-in/portal-docs/edit/develop/docs/companies/companies.md",version:"current",frontMatter:{id:"companies",title:"Companies"},sidebar:"portalSideBar",previous:{title:"Jobs",permalink:"/portal-docs/docs/jobs/jobs"}},r=[{value:"Welcome to the company module API specification",id:"welcome-to-the-company-module-api-specification",children:[]},{value:"Creating a Company",id:"creating-a-company",children:[{value:"Creating a standalone company",id:"creating-a-standalone-company",children:[]}]},{value:"Get companies",id:"get-companies",children:[]},{value:"Pagination and Page sizes",id:"pagination-and-page-sizes",children:[]},{value:"Get One company(By ID)",id:"get-one-companyby-id",children:[]},{value:"Get companies(By Specifying fields)",id:"get-companiesby-specifying-fields",children:[]},{value:"Get companies(By filtering fields)",id:"get-companiesby-filtering-fields",children:[]},{value:"Update a company",id:"update-a-company",children:[]},{value:"Delete a company",id:"delete-a-company",children:[]}],o={toc:r};function m(e){var n=e.components,a=Object(l.a)(e,b);return Object(i.b)("wrapper",Object(t.a)({},o,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"welcome-to-the-company-module-api-specification"},"Welcome to the company module API specification"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This section will define APIs for the companies feature/module. It will include API documentation for all CRUD operations involving a company.")),Object(i.b)("p",null,"A single company object, has the following keys"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Key"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"id"),Object(i.b)("td",{parentName:"tr",align:null},"Unique identifier(Autogenerated)"),Object(i.b)("td",{parentName:"tr",align:null},"Autogenerated"),Object(i.b)("td",{parentName:"tr",align:null},"Number")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"uid"),Object(i.b)("td",{parentName:"tr",align:null},"13 varying characters ",Object(i.b)("br",null)," used for CRUD operations"),Object(i.b)("td",{parentName:"tr",align:null},"NO"),Object(i.b)("td",{parentName:"tr",align:null},"String(UID)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"name"),Object(i.b)("td",{parentName:"tr",align:null},"Defines the company's given name"),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"String")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"logo"),Object(i.b)("td",{parentName:"tr",align:null},"Defines the company's logo"),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"String")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"location"),Object(i.b)("td",{parentName:"tr",align:null},"Defines the company's physical location"),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"String")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"website"),Object(i.b)("td",{parentName:"tr",align:null},"Companies website if any"),Object(i.b)("td",{parentName:"tr",align:null},"NO"),Object(i.b)("td",{parentName:"tr",align:null},"Boolean")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"title"),Object(i.b)("td",{parentName:"tr",align:null},"Companies title"),Object(i.b)("td",{parentName:"tr",align:null},"NO"),Object(i.b)("td",{parentName:"tr",align:null},"Boolean")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"about"),Object(i.b)("td",{parentName:"tr",align:null},"company's brief description"),Object(i.b)("td",{parentName:"tr",align:null},"NO"),Object(i.b)("td",{parentName:"tr",align:null},"String")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"created"),Object(i.b)("td",{parentName:"tr",align:null},"company's date of creation"),Object(i.b)("td",{parentName:"tr",align:null},"NO"),Object(i.b)("td",{parentName:"tr",align:null},"Date")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"lastupdated"),Object(i.b)("td",{parentName:"tr",align:null},"company's date for when it was last updated"),Object(i.b)("td",{parentName:"tr",align:null},"NO"),Object(i.b)("td",{parentName:"tr",align:null},"Date")))),Object(i.b)("h2",{id:"creating-a-company"},"Creating a Company"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Crud operations involving creating a single company, can be done in two ways,"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A standalone company, these will mainly be job seekers"),Object(i.b)("li",{parentName:"ul"},"A company who belongs to a company")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Method: POST")),Object(i.b)("h3",{id:"creating-a-standalone-company"},"Creating a standalone company"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JS"},"/api/companies/register\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JSON"},'{\n    "name":"Company Name",\n    "location": "Company location",\n    "website":"Company website",\n    "title":"Company Title",\n    "bio":"Company brief description"\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Response")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"These responses can vary depending on success and failure however, to here we will show the success reponse.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Item successfully created",\n  "payload": {\n    "id": "iHWO6i7JFTI8Y",\n    "created": "2021-04-26T09:06:47.990Z",\n    "lastupdated": "2021-04-26T09:06:47.990Z",\n    "name":"Company Name",\n    "location": "Company location",\n    "website":"Company website",\n    "title":"Company Title",\n    "bio":"Company brief description"\n  }\n}\n')),Object(i.b)("h2",{id:"get-companies"},"Get companies"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Method: GET")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JS"},"/api/companies\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Response")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/companies?page=2"\n  },\n  "companies": [\n    {\n      "id": "FbKroGm4tZuga",\n      "created": "2021-04-26T09:36:10.740Z",\n      "lastupdated": "2021-04-26T09:36:10.740Z",\n      "name":"Company Name",\n      "location": "Company location",\n      "website":"Company website",\n      "title":"Company Title",\n      "bio":"Company brief description"\n    }\n  ]\n}\n')),Object(i.b)("h2",{id:"pagination-and-page-sizes"},"Pagination and Page sizes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can define pages you want and the data per page size you want by passing query params in get request i.e page=2&pageSize=400"),Object(i.b)("li",{parentName:"ul"},"This will return data of page two with size of 400 records per page"),Object(i.b)("li",{parentName:"ul"},"If page and page size are not defined, the default is 1 and 100 respectively")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Method: GET")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JS"},"/api/companies?page=3&pageSize=100\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can also pass params to get all data without pagination by passing in ",Object(i.b)("inlineCode",{parentName:"li"},"paging=false"))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Method: GET")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JS"},"/api/companies?paging=false\n")),Object(i.b)("h2",{id:"get-one-companyby-id"},"Get One company(By ID)"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JS"},"/api/companies/FbKroGm4tZuga\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Response")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "FbKroGm4tZuga",\n  "created": "2021-04-26T09:36:10.740Z",\n  "lastupdated": "2021-04-26T09:36:10.740Z",\n  "name":"Company Name",\n  "location": "Company location",\n  "website":"Company website",\n  "title":"Company Title",\n  "bio":"Company brief description"\n}\n')),Object(i.b)("h2",{id:"get-companiesby-specifying-fields"},"Get companies(By Specifying fields)"),Object(i.b)("p",null," ",Object(i.b)("strong",null,"NOTE"),": On getting companies, whether a single company or the whole list, we can also specify the fields and relations we want"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JS"},"/api/companies?fields=id,name,location\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Response")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/companies?page=2"\n  },\n  "companies": [\n    {\n      "id": "FbKroGm4tZuga",\n      "name":"Company Name",\n      "location": "Company location",\n    }\n  ]\n}\n')),Object(i.b)("h2",{id:"get-companiesby-filtering-fields"},"Get companies(By filtering fields)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We can filter companies depending on certain fields, more like a search strategy, in the example below, we will find all company with companyname equal to ",Object(i.b)("inlineCode",{parentName:"li"},"admin"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JS"},"/api/companies?filter=name:eq:Company Name\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Response")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/companies?page=2"\n  },\n  "companies": [\n    {\n      "id": "FbKroGm4tZuga",\n      "created": "2021-04-26T09:36:10.740Z",\n      "lastupdated": "2021-04-26T09:36:10.740Z",\n      "name":"Company Name",\n      "location": "Company location",\n      "website":"Company website",\n      "title":"Company Title",\n      "bio":"Company brief description"\n    }\n  ]\n}\n')),Object(i.b)("p",null," ",Object(i.b)("strong",null,"NOTE"),": All filtering mechanisms, can be combined to produce a lobust search strategy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Available search and filter Operators")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Operator"),Object(i.b)("th",{parentName:"tr",align:null},"Types"),Object(i.b)("th",{parentName:"tr",align:null},"Value Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"eq"),Object(i.b)("td",{parentName:"tr",align:null},"string ","|"," boolean ","|"," integer ","|"," float ","|"," enum ","|"," collection (checks for size) ","|"," date"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"Equality")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"like"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"Case sensitive string, match anywhere")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ilike"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"Case insensitive string, match anywhere")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"in"),Object(i.b)("td",{parentName:"tr",align:null},"string ","|"," boolean ","|"," integer ","|"," float ","|"," date"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"Find objects matching 1 or more values")))),Object(i.b)("h2",{id:"update-a-company"},"Update a company"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Method: PUT")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JS"},"/api/companies/FbKroGm4tZuga\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Request Payload")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JSON"},'{\n\n    "name":"Erick Baney Name",\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Response")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Item with id FbKroGm4tZuga updated successfully.",\n  "payload": {\n    "id": "FbKroGm4tZuga",\n    "created": "2021-04-26T09:36:10.740Z",\n    "lastupdated": "2021-04-26T09:36:10.740Z",\n    "name":"Erick Baney Name",\n    "location": "Company location",\n    "website":"Company website",\n    "title":"Company Title",\n    "bio":"Company brief description"\n  }\n}\n')),Object(i.b)("h2",{id:"delete-a-company"},"Delete a company"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Method: DELETE")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JS"},"/api/companies/D67ZA1LulF2kf\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Response")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Object with identifier D67ZA1LulF2kf deleted successfully"\n}\n')))}m.isMDXComponent=!0}}]);