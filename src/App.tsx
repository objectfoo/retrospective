import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

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
			<Typography variant="h5" component="h1">Hello World!</Typography>
		</Box>
	);
}

const Styles = (_t: Theme): SystemStyleObject<Theme> => {
	return {
		minHeight: "100vh",
		pt: 6,
		pb: 4,
		px: 4,
	};
};
