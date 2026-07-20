export const cewaStatusMap = {
  'approved': 'approved',
  'approved-conditions': 'conditional',
  'under-review': 'review',
  'not-approved': 'restricted',
  'not-reviewed': 'unreviewed',
};

export const statusOf = (tool) => cewaStatusMap[tool.cewaStatus] || 'unreviewed';
