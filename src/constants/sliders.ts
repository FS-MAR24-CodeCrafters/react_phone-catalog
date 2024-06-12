type Slide = {
  id: number;
  src: {
    tablet: string;
    mobile: string;
  },
  link: string;
  alt: string;
  background: string;
}

export const sliders: Slide[] = [
  {
    id: 1,
    src: {
      tablet: 'src/img/main-slider/banner-main.png',
      mobile: 'src/img/main-slider/banner-main-sm.png',
    },
    link: 'phones',
    alt: 'Link to Phones page',
    background: '#201D24',
  },
  {
    id: 2,
    src: {
      tablet: 'src/img/main-slider/banner-phones.png',
      mobile: 'src/img/main-slider/banner-phones.png',
    },
    link: 'phones',
    alt: 'Link to Phones page',
    background: '#FBF7F4',
  },
  {
    id: 3,
    src: {
      tablet: 'src/img/main-slider/banner-tablets.png',
      mobile: 'src/img/main-slider/banner-tablets.png',
    },
    link: 'tablets',
    alt: 'Link to Tablets page',
    background: '#faf7f2',
  },
  {
    id: 4,
    src: {
      tablet: 'src/img/main-slider/banner-accessories.png',
      mobile: 'src/img/main-slider/banner-accessories.png',
    },
    link: 'accessories',
    alt: 'Link to Accessories page',
    background: '#6ba1c4',
  },
];
