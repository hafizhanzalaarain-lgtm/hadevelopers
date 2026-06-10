import app from "./app.js";

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`HA Developers API running on http://localhost:${port}`);
});
