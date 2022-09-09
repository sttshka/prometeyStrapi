module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    if (data && data.title && String(data.title)) {
      data.title = data.title?.toLowerCase();
    }
  },
  beforeUpdate(event) {
    const { data, where, select, populate } = event.params;
    if (data && data.title && String(data.title)) {
      data.title = data.title.toLowerCase();
    }
  },
};
