import fs from 'node:fs';
import { getStyle } from './styles';

const theme = {
	$schema: 'https://zed.dev/schema/themes/v0.2.0.json',
	name: 'Vitesse Theme Patched',
	author: 'Colin Lienard',
	themes: [
		{
			name: 'Vitesse Patched Dark',
			appearance: 'dark',
			style: getStyle('dark'),
		},
		{
			name: 'Vitesse Patched Black',
			appearance: 'dark',
			style: getStyle('dark', 'black'),
		},
		{
			name: 'Vitesse Patched Light',
			appearance: 'light',
			style: getStyle('light'),
		},
		{
			name: 'Vitesse Patched Dark Soft',
			appearance: 'dark',
			style: getStyle('dark', 'soft'),
		},
		{
			name: 'Vitesse Patched Light Soft',
			appearance: 'light',
			style: getStyle('light', 'soft'),
		},
	],
};

fs.writeFileSync('./themes/vitesse-theme-patched.json', JSON.stringify(theme, null, 2));
