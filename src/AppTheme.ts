import { ThemeOptions, createTheme, Theme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

const defaultTheme = createTheme();
const myTheme: ThemeOptions = {
	palette: {
		primary: {
			main: "#556cd6",
		},
		secondary: {
			main: "#19857b",
		},
	},
	typography: {
		h1: { ...defaultTheme.typography.h3 },
		h2: { ...defaultTheme.typography.h4 },
		h3: { ...defaultTheme.typography.h4 },
	},
};

export function AppTheme(themeOptions: ThemeOptions): Theme {
	const options = deepmerge(myTheme, themeOptions);
	return createTheme(options);
};
