/*
 * This method is meant to be run after the Nuxt build process.
 * It will rename the Nuxt server function to a custom name.
 * This is done to avoid conflicts with the Firebase Functions handler function.
 * The Firebase Functions handler function is named "nuxtSSRHandler".
 * Because sometimes you want to upload more than one Nuxt app to Firebase Functions.
 */

const nodeFs = require('node:fs');
const readFile = nodeFs.readFile;
const writeFileSync = nodeFs.writeFileSync;
const serverFunctionName = 'nuxtSSRHandler';

readFile('.output/server/index.mjs', 'utf-8', (errRead, contents) => {
  if (errRead) {
    return console.error(errRead);
  }

  console.log('Found index.mjs file contents:', contents);

  const updated = contents.replace(
    /{ s as server }/gi,
    '{ s as ' + serverFunctionName + ' }',
  );

  console.log('Replacing nuxt server function name with ' + serverFunctionName);

  writeFileSync('.output/server/index.mjs', updated, 'utf-8');
});
