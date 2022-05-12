'use strict';

/**
 * client-logo service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-logo.client-logo');
