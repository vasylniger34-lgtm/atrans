export const COUNTRIES = [
  { id: 'DE', name: 'Німеччина', basePrice: 450 },
  { id: 'PL', name: 'Польща', basePrice: 200 },
  { id: 'NL', name: 'Нідерланди', basePrice: 550 },
  { id: 'ES', name: 'Іспанія', basePrice: 850 },
  { id: 'IT', name: 'Італія', basePrice: 650 },
  { id: 'FR', name: 'Франція', basePrice: 600 },
];

export const UA_CITIES = [
  { id: 'lviv', name: 'Львів (+0€)' },
  { id: 'kyiv', name: 'Київ (+100€)' },
  { id: 'odesa', name: 'Одеса (+150€)' },
  { id: 'dnipro', name: 'Дніпро (+180€)' },
];

export const BODY_TYPES = [
  { id: 'hatchback', name: 'Хетчбек / Купе', multiplier: 1.0 },
  { id: 'sedan', name: 'Седан / Універсал', multiplier: 1.1 },
  { id: 'suv', name: 'Позашляховик (SUV)', multiplier: 1.3 },
  { id: 'van', name: 'Мікроавтобус', multiplier: 1.5 },
];

export const CAR_CONDITIONS = [
  { id: 'driving', name: 'На ходу (заводиться)', addon: 0 },
  { id: 'rolling', name: 'Котиться (не заводиться)', addon: 50 },
  { id: 'crashed', name: 'Після ДТП (потрібна лебідка)', addon: 150 },
];

// Calculation formula
export const calculateComplexPrice = (countryId, cityId, bodyId, condId) => {
  const c = COUNTRIES.find(x => x.id === countryId) || COUNTRIES[0];
  const b = BODY_TYPES.find(x => x.id === bodyId) || BODY_TYPES[0];
  const cond = CAR_CONDITIONS.find(x => x.id === condId) || CAR_CONDITIONS[0];
  
  let base = c.basePrice * b.multiplier;
  
  if(cityId === 'kyiv') base += 100;
  if(cityId === 'odesa') base += 150;
  if(cityId === 'dnipro') base += 180;
  
  return Math.round(base + cond.addon);
};
