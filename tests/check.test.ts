import { expect, it } from 'bun:test';
import generated from '../themes/vitesse-theme-refined.json';
import { theme } from '../src/theme';

it('should match the generated theme', () => {
	expect(theme).toEqual(generated);
});
