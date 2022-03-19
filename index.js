const app = require('./src/app');

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
