export const WEIGHT_CATEGORIES = [
  { id: 'w1', name: 'До 1500 кг' },
  { id: 'w2', name: '1500 - 2000 кг' },
  { id: 'w3', name: '2000 - 2950 кг' }
];

export const DESTINATIONS = [
  {
    countryId: 'BE',
    countryName: 'Бельгія',
    groups: [
      {
        id: 'be_g1',
        name: 'Брюгге, Гент, Кортрейк, Антверпен, Брюссель, Шарлеруа',
        prices: { w1: 1000, w2: 1100, w3: 1150 }
      },
      {
        id: 'be_g2',
        name: 'Хасселт, Льєж',
        prices: { w1: 970, w2: 1020, w3: 1100 }
      }
    ]
  },
  {
    countryId: 'LU',
    countryName: 'Люксембург',
    groups: [
      {
        id: 'lu_g1',
        name: 'Всі міста',
        prices: { w1: 970, w2: 1020, w3: 1100 }
      }
    ]
  },
  {
    countryId: 'CH',
    countryName: 'Швейцарія',
    groups: [
      {
        id: 'ch_g1',
        name: 'Берн, Цюріх',
        prices: { w1: 1100, w2: 1150, w3: 1250 }
      }
    ]
  },
  {
    countryId: 'LI',
    countryName: 'Ліхтенштейн',
    groups: [
      {
        id: 'li_g1',
        name: 'Всі міста',
        prices: { w1: 1100, w2: 1150, w3: 1250 }
      }
    ]
  },
  {
    countryId: 'DK',
    countryName: 'Данія',
    groups: [
      {
        id: 'dk_g1',
        name: 'Ольборг, Копенгаген',
        prices: { w1: 1100, w2: 1150, w3: 1250 }
      },
      {
        id: 'dk_g2',
        name: 'Оденсе, Орхус, Раннерс, Есб\'єрг',
        prices: { w1: 1000, w2: 1050, w3: 1100 }
      }
    ]
  },
  {
    countryId: 'NL',
    countryName: 'Нідерланди',
    groups: [
      {
        id: 'nl_g1',
        name: 'Амстердам, Гаага, Гронінген, Роттердам',
        prices: { w1: 1000, w2: 1050, w3: 1100 }
      },
      {
        id: 'nl_g2',
        name: 'Енсхеде, Неймеген, Ейндговен, Венло, Рурмонд, Маастрихт',
        prices: { w1: 970, w2: 1020, w3: 1100 }
      }
    ]
  },
  {
    countryId: 'AT',
    countryName: 'Австрія',
    groups: [
      {
        id: 'at_g1',
        name: 'Інсбрук, Філлах, Клагенфурт',
        prices: { w1: 980, w2: 1050, w3: 1150 }
      },
      {
        id: 'at_g2',
        name: 'Лінц, Грац, Відень',
        prices: { w1: 870, w2: 920, w3: 1050 }
      }
    ]
  },
  {
    countryId: 'CZ',
    countryName: 'Чехія',
    groups: [
      {
        id: 'cz_g1',
        name: 'Пльзень, Чеські Будейовиці, Прага',
        prices: { w1: 720, w2: 770, w3: 820 }
      },
      {
        id: 'cz_g2',
        name: 'Брно, Острава',
        prices: { w1: 670, w2: 720, w3: 770 }
      }
    ]
  },
  {
    countryId: 'LT',
    countryName: 'Литва',
    groups: [
      {
        id: 'lt_g1',
        name: 'Клайпеда',
        prices: { w1: 720, w2: 770, w3: 820 }
      },
      {
        id: 'lt_g2',
        name: 'Каунас, Вільнюс',
        prices: { w1: 670, w2: 720, w3: 770 }
      }
    ]
  },
  {
    countryId: 'PL',
    countryName: 'Польща',
    groups: [
      {
        id: 'pl_g1',
        name: 'Гдиня, Гданськ, Щецин, Бидгощ',
        prices: { w1: 670, w2: 720, w3: 800 }
      },
      {
        id: 'pl_g2',
        name: 'Познань, Вроцлав, Лодзь, Варшава',
        prices: { w1: 520, w2: 570, w3: 620 }
      },
      {
        id: 'pl_g3',
        name: 'Катовіце',
        prices: { w1: 470, w2: 520, w3: 570 }
      },
      {
        id: 'pl_g4',
        name: 'Краків, Люблін',
        prices: { w1: 420, w2: 470, w3: 520 }
      },
      {
        id: 'pl_g5',
        name: 'Перемишль',
        prices: { w1: 220, w2: 270, w3: 320 }
      }
    ]
  }
];

export const calculatePrice = (countryId, groupId, weightId) => {
  const country = DESTINATIONS.find(c => c.countryId === countryId);
  if (!country) return 0;
  
  const group = country.groups.find(g => g.id === groupId);
  if (!group) return 0;
  
  return group.prices[weightId] || 0;
};
