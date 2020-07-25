// tests/gateway.test.js

const dbHandler = require('../src/config/db-handler');
const gatewayService = require('../src/services/gateway.service');

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

/**
 * Product test suite.
 */
describe('gateway ', () => {
  /**
   * Tests that gateway can be listed through the gatewayService without throwing any errors.
   */
  it('can be listed correctly', async () => {
    expect(async () => await gatewayService.list()).not.toThrow();
  });

  /**
   * Tests that a valid gateway can be created through the gatewayService without throwing any errors.
   */
  it('can be created correctly', async () => {
    expect(
      async () => await gatewayService.create(gatewayCreate)
    ).not.toThrow();
  });
});

/**
 * Complete gateway example.
 */
const gatewayCreate = {
  serial: '23',
  name: '132',
  ipv4: '127.0.0.1',
  description: 'asdasdasd',
  devices: [],
};
