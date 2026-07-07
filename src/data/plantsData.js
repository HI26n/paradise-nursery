// Central catalogue for Paradise Nursery.
// Each plant carries everything ProductList / CartItem need to render:
// id, name, price, category, a short blurb, and thumbnail styling props
// (consumed by <PlantIcon /> instead of an external image file).

const plantsData = [
  {
    category: 'Succulents & Cacti',
    plants: [
      {
        id: 'echeveria-elegans',
        name: 'Echeveria Elegans',
        price: 14.99,
        description: 'A tidy blue-green rosette that thrives on a sunny windowsill.',
        icon: { variant: 'rosette', pot: 'terracotta', colors: ['#8FB39A', '#6E9C82', '#4F7D66'] },
      },
      {
        id: 'aloe-vera',
        name: 'Aloe Vera',
        price: 12.5,
        description: 'The classic healing succulent — low water, high reward.',
        icon: { variant: 'spiky', pot: 'clay', colors: ['#7FAE6C', '#5F9450', '#457038'] },
      },
      {
        id: 'zebra-haworthia',
        name: 'Zebra Haworthia',
        price: 10.99,
        description: 'Compact striped leaves that stack up like tiny towers.',
        icon: { variant: 'spiky', pot: 'stone', colors: ['#5C8D6E', '#3F6E51', '#2C523B'] },
      },
    ],
  },
  {
    category: 'Air-Purifying Plants',
    plants: [
      {
        id: 'snake-plant',
        name: 'Snake Plant',
        price: 18.0,
        description: 'Nearly indestructible, upright blades that filter indoor air overnight.',
        icon: { variant: 'blades', pot: 'terracotta', colors: ['#3F6255', '#2E4C42', '#1F362E'] },
      },
      {
        id: 'peace-lily',
        name: 'Peace Lily',
        price: 16.75,
        description: 'Glossy leaves and quiet white blooms even in low light.',
        icon: { variant: 'broadleaf', pot: 'clay', colors: ['#3F7A4E', '#2F5F3B', '#22452B'] },
      },
      {
        id: 'areca-palm',
        name: 'Areca Palm',
        price: 24.0,
        description: 'Feathery fronds that bring a breezy, tropical feel indoors.',
        icon: { variant: 'palm', pot: 'stone', colors: ['#4C8A5A', '#3A6E46', '#295031'] },
      },
    ],
  },
  {
    category: 'Flowering Plants',
    plants: [
      {
        id: 'anthurium',
        name: 'Anthurium',
        price: 21.5,
        description: 'Waxy heart-shaped blooms that last for months at a time.',
        icon: { variant: 'bloom', pot: 'terracotta', colors: ['#4B7A50', '#B9433F', '#E0BB4A'] },
      },
      {
        id: 'phalaenopsis-orchid',
        name: 'Phalaenopsis Orchid',
        price: 28.99,
        description: 'Elegant arching stems of butterfly-shaped petals.',
        icon: { variant: 'bloom', pot: 'stone', colors: ['#4E7B54', '#8A5FA8', '#D8C64E'] },
      },
      {
        id: 'hibiscus',
        name: 'Hibiscus',
        price: 19.25,
        description: 'Bold trumpet flowers that keep blooming through summer.',
        icon: { variant: 'bloom', pot: 'clay', colors: ['#4A7A4F', '#D8664A', '#E8A94C'] },
      },
    ],
  },
];

export default plantsData;
