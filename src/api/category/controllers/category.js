'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({ strapi }) => ({

  async findAll(ctx) {
    const { pagination, filters } = ctx.query;
    const categoryList = await strapi.services.category.findAll({ pagination, filters });
    return categoryList;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const category = await strapi.services.category.findOne(id);
    return category;
  },
})
);
