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
        'main/mushroom_bour',
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
        'desserts/vegan_mousse',
        'desserts/espresso_brownies'
      ],
    },
  ]
};

module.exports = sidebars;
