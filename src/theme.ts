import { getStyle } from './styles';

export const theme = {
	$schema: 'https://zed.dev/schema/themes/v0.2.0.json',
	name: 'Vitesse Theme Refined',
	author: 'Colin Lienard',
	themes: [
		{
			name: 'Vitesse Refined Dark',
			appearance: 'dark',
			style: getStyle('dark'),
		},
		{
			name: 'Vitesse Refined Black',
			appearance: 'dark',
			style: getStyle('dark', 'black'),
		},
		{
			name: 'Vitesse Refined Light',
			appearance: 'light',
			style: getStyle('light'),
		},
		{
			name: 'Vitesse Refined Dark Soft',
			appearance: 'dark',
			style: getStyle('dark', 'soft'),
		},
		{
			name: 'Vitesse Refined Light Soft',
			appearance: 'light',
			style: getStyle('light', 'soft'),
		},
	],
};
