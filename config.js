/**
 * TAS Connect — Configuration
 * ─────────────────────────────────────────────────────────────
 * Edit this file to connect your Google Sheet and Google Form.
 * Everything else is in index.html — you shouldn't need to touch it.
 */

const CONFIG = {

  /**
   * SHEET_URL
   * Your Google Sheet published as JSON.
   *
   * How to get this:
   * 1. Open your Google Sheet (linked to your Google Form responses)
   * 2. File → Share → Publish to web
   * 3. Choose your sheet tab → "Comma-separated values (.csv)" → Publish
   * 4. Find your Sheet ID in the URL bar (the long string between /d/ and /edit)
   * 5. Replace YOUR_SHEET_ID below with that ID
   */
  SHEET_URL: "https://docs.google.com/spreadsheets/d/1bD2ZlJWzCn6cb8ZCjDUr1v0FdOlLGNVflSugMq1ZDYg/gviz/tq?tqx=out:json",

  /**
   * FORM_URL
   * The direct link to your Google Form so members can join.
   *
   * How to get this:
   * 1. Open your Google Form
   * 2. Click the eye icon (Preview) — copy that URL
   * 3. Paste it below
   */
  FORM_URL: "https://docs.google.com/forms/d/1qH4WAe-Ufq4SA8nrNrQPuXtJn6NahDrKXN7-Ws4_2W8/preview",

  /**
   * COMMUNITY_NAME
   * Shown in various places on the site. Change to suit.
   */
  COMMUNITY_NAME: "Adventure Singles",

};
