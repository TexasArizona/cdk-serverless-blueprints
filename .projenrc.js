const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'ns',
  authorAddress: 'ns20092009@live.de',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-serverless-blueprints',
  repositoryUrl: 'https://github.com/TexasArizona/cdk-serverless-blueprints.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();