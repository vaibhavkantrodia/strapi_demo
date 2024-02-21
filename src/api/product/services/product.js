'use strict';

/**
 * product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product.product', ({ strapi }) => ({

  async getProductList({ pagination, filters }) {
    pagination = pagination || { start: 0, limit: 100 };
    const productList = await strapi.query('api::product.product').findMany({ offset: pagination.start, limit: pagination.limit, where: filters });

    const total = await strapi.query('api::product.product').count({ where: filters });
    return {
      data: productList,
      totalCount: total
    };
  },

  async findOne(id) {
    const product = await strapi.db.query('api::product.product').findOne({ where: { id }, populate: ['category'] });
    return product;
  },
})
);
