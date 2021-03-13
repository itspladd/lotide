const assertEqual = require('../assertEqual');
const verbose = process.argv[2];

if (verbose === '-v') {
  console.log('Tests for assertEqual:')
  console.log('The following assertions should fail:')
  assertEqual("LighthouseLabs", "Bootcamp");
  assertEqual("pladd", "goober");
  console.log('The following assertions should pass:')
  assertEqual(1, 1);
  assertEqual("1", "1");
}