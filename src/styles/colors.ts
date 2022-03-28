const colors = {
  primary: '#ff6600',
  secondary: '#333333',
  bgColor: '#e9e9e9',
  navColor: '#333333',
  text: '#333333',
  lightText: '#f7f7f7',
  overlay: 'rgba(0, 0, 0, 0.6)',
  lightOverlay: 'rgba(255, 255, 255, 0.6)',

  icon: '#0000008a',
  cafe: '#CEC4C2',
  danger: '#dc3545',
  light: '#D7D7D7',
  medium: '#a0a0a0',
  smaltBlue: '#0f99d7',
  squeeze: '#b8d8fe',
  black: '#000000',
  white: '#ffffff',
  gold: '#FFD700',
  green: '#29a19c',

  // Order Status Colors
  get canceled(): string {
    return this.danger;
  },
  get paid(): string {
    return this.gold;
  },
  get unpaid(): string {
    return this.medium;
  },
  // Item Status Colors
  get delivered(): string {
    return this.smaltBlue;
  },
  get completed(): string {
    return this.green;
  },
  get preparing(): string {
    return this.primary;
  },
  get placed(): string {
    return this.secondary;
  },
};
export default colors;
