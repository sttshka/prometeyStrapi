"use strict";

const noop =
  (strapi) =>
  ({ nexus }) => ({});

const extensions = [noop];

module.exports = (strapi) => {
  const extensionService = strapi.plugin("graphql").service("extension");

  for (const extension of extensions) {
    extensionService.use(extension(strapi));
  }
};
