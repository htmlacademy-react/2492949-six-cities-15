export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export type TCardInfo = {
  id: number;
  isPremium: boolean;
  src: string;
  price: number;
  description: string;
  type: string;
  isInBookmarks: boolean;
};

export const CARDS_COUNT = 5;

export const CARDS_ON_OFFER: TCardInfo[] = [
  {
    id: 2,
    isPremium: false,
    src: 'img/room.jpg',
    price: 80,
    description: 'Wood and stone place',
    type: 'Room',
    isInBookmarks: true,
  },
  {
    id: 3,
    isPremium: false,
    src: 'img/apartment-02.jpg',
    price: 132,
    description: 'Canal View Prinsengracht',
    type: 'Apartment',
    isInBookmarks: false,
  },
  {
    id: 4,
    isPremium: true,
    src: 'img/apartment-03.jpg',
    price: 180,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isInBookmarks: false,
  },
];

type TOfferGallery = {
  id: number;
  src: string;
};

export const OFFER_GALLERY: TOfferGallery[] = [
  {
    id: 1,
    src: 'img/room.jpg',
  },
  {
    id: 2,
    src: 'img/apartment-01.jpg',
  },
  {
    id: 3,
    src: 'img/apartment-02.jpg',
  },
  {
    id: 4,
    src: 'img/apartment-03.jpg',
  },
  {
    id: 5,
    src: 'img/studio-01.jpg',
  },
  {
    id: 6,
    src: 'img/apartment-01.jpg',
  },
];

export const enum LivingTypes {
  apartment = 'apartment',
  room = 'room',
  house = 'house',
  hotel = 'hotel',
}

export const OfferInsideItems = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge',
] as const;
