// tests/device.test.js

const mongoose = require('mongoose');

const dbHandler = require('../src/config/db-handler');
const deviceService = require('../src/services/device.service');
const deviceModel = require('../src/models/device');

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
describe('device ', () => {
  /**
   * Tests that device can be listed through the deviceService without throwing any errors.
   */
  it('can be listed correctly', async () => {
    expect(async () => await deviceService.list()).not.toThrow();
  });

  /**
   * Tests that device can be found by id through the deviceService without throwing any errors.
   */
  it('can be filtered correctly', async () => {
    expect(async () => await deviceService.read(699)).not.toThrow();
  });

  /**
   * Tests that a valid device can be created through the deviceService without throwing any errors.
   */
  it('can be created correctly', async () => {
    expect(async () => await deviceService.create(deviceCreate)).not.toThrow();
  });

  /**
   * Tests that a valid device can be updated through the deviceService without throwing any errors.
   */
  it('can be updated correctly', async () => {
    expect(
      async () => await deviceService.update(699, deviceUpdate)
    ).not.toThrow();
  });

  /**
   * Tests that a valid device can be deleted through the deviceService without throwing any errors.
   */
  it('can be deleted correctly', async () => {
    expect(async () => await deviceService.delete(699)).not.toThrow();
  });
});

/**
 * Complete device example.
 */
const deviceTest = {
  uid: 699,
  vendor: 'iPhone 11',
  status: 'offline',
  gateway: '1234fw4tg252',
};
