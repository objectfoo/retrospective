import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToggleModeButton } from "./AppThemeContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";

export default function App(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<View />} />
			</Routes>
		</BrowserRouter>
	);
}

function View(): JSX.Element {
	return (
		<Box sx={[Styles]}>
			<div className="title-row">
				<Typography variant="h5" component="h1">Hello World!</Typography>
				<ToggleModeButton />
			</div>
		</Box>
	);
}

const Styles = (_t: Theme): SystemStyleObject<Theme> => {
	return {
		minHeight: "100vh",
		pt: 6,
		pb: 4,
		px: 4,
		"& .title-row": {
			display: "flex",
			alignItems: "center",
			"& > h1": { flexGrow: 1, },
		},
	};
};
