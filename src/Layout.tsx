import { PropsWithChildren } from "react";
import { ToggleModeButton } from "./AppThemeContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Theme, SxProps } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";

export function MainContainer({ sx, children }: PropsWithChildren<{ sx?: SxProps<Theme>; }>): JSX.Element {
	const sxProps: SxProps = Array.isArray(sx) ? sx : [sx];
	return (
		<Box sx={[Styles, ...sxProps]}>
			{children}
		</Box>
	);
}

export function TitleRow(): JSX.Element {
	return (
		<div className="title-row">
			<Typography variant="h5" component="h1">Hello World!</Typography>
			<ToggleModeButton />
		</div>
	);
}


const Styles = (t: Theme): SystemStyleObject<Theme> => {
	return {
		minHeight: "100vh",
		px: 2,
		"& .title-row": {
			mx: -2,
			p: 2,
			background: t.palette.primary.main,
			color: t.palette.primary.contrastText,
			display: "flex",
			alignItems: "center",
			"& > h1": { flexGrow: 1 },
		},
	};
};
