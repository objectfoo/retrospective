import * as React from "react";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4Rounded";
import Brightness7Icon from "@mui/icons-material/Brightness7Rounded";
import type { Theme, ThemeOptions } from "@mui/material";

type ModeFn = () => void;
interface ColorMode {
	toggleMode: ModeFn;
}

type ModeOptions = "light" | "dark";
const ColorModeContext = React.createContext<ColorMode>({
	toggleMode: () => {
		null;
	},
});

export function AppThemeContext(props: { children: React.ReactNode }): JSX.Element {
	const [mode, setMode] = React.useState<ModeOptions>("light");
	const theme = React.useMemo(() => CreateAppTheme({ palette: { mode: mode } }), [mode]);
	const colorMode = React.useMemo<ColorMode>(() => ({
		toggleMode: (): void => {
			setMode((m) => (m === "light" ? "dark" : "light"));
		},
	}), []);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<GlobalStyles styles={{ body: { margin: 0 } }} />
				<ScopedCssBaseline>{props.children}</ScopedCssBaseline>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export function ToggleModeButton(): JSX.Element {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);

	return (
		<Box
			sx={{
				flexGrow: 0,
				"& .MuiButton-root": { flexGrow: 0 },
				"& .MuiSvgIcon-root": { ml: 1 },
			}}>
			<Button size="small" color="inherit" onClick={colorMode.toggleMode}>
				mode
				{theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
			</Button>
		</Box>
	);
}

function CreateAppTheme(themeOptions: ThemeOptions): Theme {
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
		components: {
			MuiTypography: {
				variants: [
					{
						props: { variant: "retro-list-title" },
						style: {
							color: themeOptions.palette?.mode === "dark" ? "#f0f0f0" : defaultTheme.palette.grey[800],
						},
					},
				],
			},
		},
	};
	const options = deepmerge(myTheme, themeOptions);
	return createTheme(options);
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		"retro-list-title": true;
	}
}

