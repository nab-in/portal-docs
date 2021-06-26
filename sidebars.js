/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  portalSideBar: [
    "intro",
    {
      type: "category",
      label: "Features",
      items: [
        {
          type: "category",
          label: "Users",
          items: ["users/auth", "users/users", "users/userroles"],
        },
        {
          type: "category",
          label: "Jobs",
          items: ["jobs/jobs", "jobs/jobcategories", "jobs/reviews"],
        },
        "companies/companies",
      ],
    },
  ],
};
