'use strict';

/**
 * category service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::category.category', ({ strapi }) => ({

  async findAll({ pagination, filters }) {
    pagination = pagination || { start: 0, limit: 100 };
    const categoryList = await strapi.query('api::category.category').findMany({ offset: pagination.start, limit: pagination.limit, where: filters });

    const total = await strapi.query('api::category.category').count({ where: filters });
    return {
      data: categoryList,
      totalCount: total
    };
  },

  async findOne(id) {
    const category = await strapi.db.query('api::category.category').findOne({ where: { id }, populate: ['products'] });
    return category;
  },
})
);

