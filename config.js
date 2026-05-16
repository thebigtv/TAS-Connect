/**
 * TAS Connect — Configuration
 * ─────────────────────────────────────────────────────────────
 * Edit this file only. Everything else is in index.html / admin.html.
 */

const CONFIG = {

  // Your Google Sheet (member profiles) published as JSON
  SHEET_URL: "https://docs.google.com/spreadsheets/d/1bD2ZlJWzCn6cb8ZCjDUr1v0FdOlLGNVflSugMq1ZDYg/gviz/tq?tqx=out:json",

  // Your Google Sheet Settings tab
  SETTINGS_URL: "https://docs.google.com/spreadsheets/d/1bD2ZlJWzCn6cb8ZCjDUr1v0FdOlLGNVflSugMq1ZDYg/gviz/tq?tqx=out:json&sheet=Settings",

  // Your Google Form link
  FORM_URL: "https://docs.google.com/forms/d/1qH4WAe-Ufq4SA8nrNrQPuXtJn6NahDrKXN7-Ws4_2W8/preview",

  // Password members use to unlock contact details on the site
  // Once SETTINGS_URL is active, the site reads this from the Sheet instead
  MEMBER_PASSWORD: "adventures",

  // Password to access the admin panel at /admin
  // Change this to something only you know — never share this one!
  ADMIN_PASSWORD: "tasadmin2026",

  // Community name
  COMMUNITY_NAME: "Adventure Singles",

};
