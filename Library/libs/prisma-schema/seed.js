#!/usr/bin/env node

// Import reflect-metadata for decorators
require('reflect-metadata');

const path = require('path');

// Register ts-node and tsconfig-paths
require('ts-node').register({
  project: path.resolve(__dirname, 'tsconfig.seed.json'),
});

// Register path mappings
require('tsconfig-paths').register({
  baseUrl: path.resolve(__dirname, '../../'),
  paths: {
    '@404-library/dto': ['libs/dto/src/index.ts'],
    '@404/prisma-client': ['libs/prisma-client/src/index.ts'],
  },
});

// Run the seed file
require('./prisma/seed.ts');
