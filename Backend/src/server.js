import App from './lambda.js';

const PORT = 3000; // valor fijo

App.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
