import { VitesseThemes } from './colors';

type StyleArgs = ['dark' | 'light'] | ['dark' | 'light', 'soft' | 'black'];

const UNSET = '#FF00FF'; // Not set yet

export function getStyle(...args: StyleArgs) {
	const color = colorGetter(...args);
	return {
		border: color('border'),
		'border.variant': color('border'),
		'border.focused': color('border'),
		'border.selected': color('border'),
		'border.transparent': color('border'),
		'border.disabled': color('border'),
		'elevated_surface.background': color('background'),
		'surface.background': color('background'),
		background: color('background'),
		// "element.background": "#2e343eff",
		// "element.hover": "#363c46ff",
		// 'element.active': '#FFFF00',
		// "element.selected": "#454a56ff",
		// "element.disabled": "#2e343eff",
		// "drop_target.background": "#83899480",
		// "ghost_element.background": "#00000000",
		// "ghost_element.hover": "#363c46ff",
		// "ghost_element.active": "#454a56ff",
		// "ghost_element.selected": "#454a56ff",
		// "ghost_element.disabled": "#2e343eff",
		text: color('foreground'),
		'text.muted': color('secondaryForeground'),
		'text.placeholder': color('ignored'),
		'text.disabled': color('ignored'),
		'text.accent': color('primary'),
		icon: color('foreground'),
		'icon.muted': UNSET,
		'icon.disabled': UNSET,
		'icon.placeholder': UNSET,
		'icon.accent': UNSET,
		'status_bar.background': color('background'),
		'title_bar.background': color('background'),
		'title_bar.inactive_background': UNSET,
		'toolbar.background': color('activeBackground'),
		'tab_bar.background': color('background'),
		'tab.inactive_background': color('background'),
		'tab.active_background': color('activeBackground'),
		'search.match_background': color('activeBackground'),
		'panel.background': color('background'),
		// "panel.focused_border": null,
		// "pane.focused_border": null,
		// "scrollbar.thumb.background": "#c8ccd44c",
		// "scrollbar.thumb.hover_background": "#363c46ff",
		// "scrollbar.thumb.border": "#363c46ff",
		// "scrollbar.track.background": "#00000000",
		// "scrollbar.track.border": "#2e333cff",
		// "link_text.hover": "#74ade8ff",

		'editor.foreground': color('foreground'),
		'editor.background': color('background'),
		'editor.gutter.background': color('background'),
		'editor.subheader.background': color('background'),
		'editor.active_line.background': color('background'),
		'editor.highlighted_line.background': color('background'),
		'editor.line_number': color('foreground'),
		'editor.active_line_number': color('activeForeground'),
		'editor.invisible': color('selectionBackground'),
		'editor.wrap_guide': UNSET,
		'editor.active_wrap_guide': UNSET,
		'editor.document_highlight.read_background': color('activeBackground'),
		'editor.document_highlight.write_background': UNSET,

		'terminal.background': color('background'),
		'terminal.foreground': color('foreground'),
		'terminal.bright_foreground': UNSET,
		'terminal.dim_foreground': UNSET,
		'terminal.ansi.black': args[0] === 'dark' ? color('foreground') : color('background'),
		'terminal.ansi.bright_black': args[0] === 'dark' ? '#777777' : '#aaaaaa',
		'terminal.ansi.dim_black': args[0] === 'dark' ? '#777777' : '#aaaaaa',
		'terminal.ansi.red': color('red'),
		'terminal.ansi.bright_red': color('red'),
		'terminal.ansi.dim_red': color('red'),
		'terminal.ansi.green': color('green'),
		'terminal.ansi.bright_green': color('green'),
		'terminal.ansi.dim_green': color('green'),
		'terminal.ansi.yellow': color('yellow'),
		'terminal.ansi.bright_yellow': color('yellow'),
		'terminal.ansi.dim_yellow': color('yellow'),
		'terminal.ansi.blue': color('blue'),
		'terminal.ansi.bright_blue': color('blue'),
		'terminal.ansi.dim_blue': color('blue'),
		'terminal.ansi.magenta': color('magenta'),
		'terminal.ansi.bright_magenta': color('magenta'),
		'terminal.ansi.dim_magenta': color('magenta'),
		'terminal.ansi.cyan': color('cyan'),
		'terminal.ansi.bright_cyan': color('cyan'),
		'terminal.ansi.dim_cyan': color('cyan'),
		'terminal.ansi.white': '#dbd7ca',
		'terminal.ansi.bright_white': '#dbd7ca',
		'terminal.ansi.dim_white': '#dbd7ca',

		conflict: color('orange'),
		'conflict.background': null,
		'conflict.border': null,
		created: color('green'),
		'created.background': null,
		'created.border': null,
		deleted: color('red'),
		'deleted.background': null,
		'deleted.border': null,
		error: color('red'),
		'error.background': null,
		'error.border': null,
		hidden: UNSET,
		'hidden.background': null,
		'hidden.border': null,
		hint: color('punctuation'),
		'hint.background': null,
		'hint.border': null,
		ignored: color('ignored'),
		'ignored.background': null,
		'ignored.border': null,
		info: color('blue'),
		'info.background': null,
		'info.border': null,
		modified: color('blue'),
		'modified.background': null,
		'modified.border': null,
		predictive: color('punctuation'),
		'predictive.background': null,
		'predictive.border': null,
		renamed: color('cyan'),
		'renamed.background': 'null',
		'renamed.border': 'null',
		success: color('green'),
		'success.background': null,
		'success.border': null,
		unreachable: UNSET,
		'unreachable.background': null,
		'unreachable.border': null,
		warning: color('orange'),
		'warning.background': null,
		'warning.border': null,

		players: [
			{
				cursor: color('foreground'),
				background: color('foreground'),
				selection: color('selectionBackground'),
			},
		],

		syntax: {
			attribute: syntax(color('variable')),
			boolean: syntax(color('boolean')),
			comment: syntax(color('comment')),
			'comment.doc': syntax(color('comment')),
			constant: syntax(color('constant')),
			constructor: syntax(color('keyword')),
			embedded: syntax(UNSET),
			emphasis: syntax(UNSET),
			'emphasis.strong': syntax(UNSET),
			enum: syntax(UNSET),
			function: syntax(color('function')),
			hint: syntax(UNSET),
			keyword: syntax(color('operator')),
			label: syntax(color('keyword')),
			link_text: syntax(UNSET),
			link_uri: syntax(UNSET),
			number: syntax(color('number')),
			operator: syntax(color('operator')),
			predictive: syntax(UNSET),
			preproc: syntax(UNSET),
			primary: syntax(color('primary')),
			property: syntax(color('property')),
			punctuation: syntax(color('punctuation')),
			'punctuation.bracket': syntax(color('punctuation')),
			'punctuation.delimiter': syntax(color('punctuation')),
			'punctuation.list_marker': syntax(color('punctuation')),
			'punctuation.special': syntax(color('punctuation')),
			string: syntax(color('string')),
			'string.escape': syntax(color('string')),
			'string.regex': syntax(color('string')),
			'string.special': syntax(color('string')),
			'string.special.symbol': syntax(color('string')),
			tag: syntax(UNSET),
			'text.literal': syntax(UNSET),
			title: syntax(UNSET),
			type: syntax(color('type')),
			variable: syntax(color('variable')),
			'variable.special': syntax(color('variable')),
			variant: syntax(UNSET),
		},
	};
}

function colorGetter(...args: StyleArgs) {
	return (key: keyof typeof VitesseThemes) => {
		if (args.length === 2) {
			const variantKey = args[1] + key[0].toUpperCase() + key.slice(1);
			if (variantKey in VitesseThemes) {
				key = variantKey as keyof typeof VitesseThemes;
			}
		}
		const color = VitesseThemes[key];
		if (typeof color === 'string') {
			return color;
		}
		return color[args[0] === 'dark' ? 0 : 1];
	};
}

function syntax(color: string) {
	return { color, font_style: null, font_weight: null };
}
