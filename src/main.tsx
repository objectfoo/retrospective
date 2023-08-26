import ReactDOM from "react-dom/client";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import App from "./App.tsx";
import { AppTheme } from "./AppTheme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={AppTheme({ palette: { mode: "light" } })}>
		<GlobalStyles styles={{ body: { margin: 0 } }} />
		<ScopedCssBaseline>
			<App />
		</ScopedCssBaseline>
	</ThemeProvider>
);
