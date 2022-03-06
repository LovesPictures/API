@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

/* Global reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

:root {
  --primary: #fecacc; /* pink :) */
  --secondary: #373737; /* dark grey */
  --light-1: #ededee; /* light grey  */
  --light: #d4d4d4; /* mid grey  */
  --accent: #ffff; /* white */
  --d-accent: #808080; /*grey */

  /* font */
  --font-primary: "Roboto", sans-serif;
}

html,
body {
  margin: auto;
  font-family: var(--font-primary);
  /* font-family: 'Roboto', sans-serif; */
}

a:link {
  text-decoration: none !important;
}

h1 {
  text-align: center;
  padding: 60px 10px 10px 10px;
  font-size: 14px;
  font-size: 26px;
  font-family: inherit;
  color: var(--light);
}

h3 {
  text-align: center;
  font-family: inherit;
  font-size: 24px;
  padding: 10px 0px;
  /* color: var(--light); */
}

/* link  */
h5 {
  text-align: center;
  font-family: inherit;
  font-size: 20px;
  padding: 10px 0px;
}

p {
  font-family: inherit;
  font-size: 15px;
  padding: 10px 0px;
  color: var(--d-dark);
  line-height: 1.4;
}

/* GRID CONTENT -------------------*/
.sidebar {
  grid-area: sidebar;
}

.sidebar2 {
  grid-area: sidebar2;
}

.content {
  grid-area: content;
  max-height: 1000px;
}

/* INNER GRID --------------------*/

.grid-2 {
  display: grid;
  margin: 20px 0px 10px 0px;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(280px));
  align-items: stretch;
}

article {
  border: 1px solid var(--light-1);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
}

img {
  width: 100%;
  object-fit: cover;
  padding: 10px 0px 10px 0px;
}

.header {
  grid-area: header;
}

.footer {
  grid-area: footer;
}

.wrapper {
  height: 100vh;
  /* background-color: var(--light-1); */
}

.wrapper {
  display: grid;
  /* grid-gap: 0.3em; */
  grid-template-rows: 0.5fr 0.3fr 3fr auto;
  grid-template-areas:
    "header"
    "sidebar"
    "content"
    "sidebar2"
    "footer";
}

@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: 2fr auto;
    grid-template-rows: 0.5fr 0.5fr 3fr 1fr;
    grid-template-areas:
      "header   header"
      "sidebar  sidebar"
      "content  content"
      "sidebar2 sidebar2"
      "footer   footer";
  }
}

@media (min-width: 600px) {
  .wrapper {
    /* grid-gap: 5px; */
    grid-template-columns: 1.8fr 1fr 1.8fr;
    grid-template-rows: 0.5fr 0.5fr 3fr 1fr;
    grid-template-areas:
      "header  header  header"
      "sidebar content sidebar2"
      "sidebar content sidebar2"
      "footer  footer  footer";
  }
}

.box {
  background-color: var(--secondary);
  color: #fff;
  padding: 10px;
  font-size: 150%;
}

.header,
.footer {
  background-color: var(--secondary);
}

.sidebar2 {
  background-color: var(--secondary);
}

/* FORM-------------------------- */
.form-control {
  width: 100%;
  height: 30px;
  border-radius: 3px;
}

input {
  padding: 5px;
}

/* BUTTON ------------------------- */

button {
  width: 100%;
  height: 40px;
  background-color: var(--accent);
  border-radius: 3px;
  border: none;
  transition: 0.6s;
  overflow: hidden;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  color: var(--d-accent);
}
/* button hover */
button:hover {
  background-color: var(--d-accent);
  color: var(--accent);
}

/* FACT ------------------------------------ */
#fact {
  /* Hides the fact text until the data is fetched  */
  display: none;
}

/* FOOTER ------------------------------------ */

.footer a {
  color: var(--light);
  outline: none;
  text-decoration: none;
  transition: 0.8s;
}

/* hover  */
.footer a:hover {
  color: var(--accent);
}
