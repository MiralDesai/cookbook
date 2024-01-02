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
      collapsed: false,
      items: [
        'main/mushroom_bourguigon',
        'main/peanut_butter_curry',
        'main/mushroom_pasta'
      ],
    },
    {
      type: 'category',
      label: 'Desserts',
      collapsed: false,
      items: [
        'desserts/cherry_pie',
        'desserts/chilli_chocolate_tart',
        'desserts/espresso_brownies',
        'desserts/lemon_polenta_cake',
        'desserts/mini_chocolate_tarts',
        'desserts/vegan_mousse'
      ],
    },
  ]
};

module.exports = sidebars;
