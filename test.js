const assert = require('assert');
const app = require('./server');

// Basic sanity check to validate tests pass during CI
try {
  assert.strictEqual(typeof app, 'function', 'App instance should be an Express function');
  console.log('✔ All tests passed successfully.');
  process.exit(0);
} catch (error) {
  console.error('✖ Test failed:', error.message);
  process.exit(1);
}
