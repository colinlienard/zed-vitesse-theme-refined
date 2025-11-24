import { theme } from './theme';

await Bun.write('./themes/vitesse-theme-refined.json', JSON.stringify(theme, null, 2));
console.log('Theme generated');
