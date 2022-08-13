const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction'
    },
    {
      type: 'category',
      label: 'Main dishes',
      items: ['main/mushroom_bour'],
    },
    {
      type: 'category',
      label: 'Desserts',
      items: [
        'desserts/cherry_pie',
        'desserts/chilli_chocolate_tart'
      ],
    },
  ]
};

module.exports = sidebars;
