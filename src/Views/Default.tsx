import { Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { MainContainer, TitleRow } from "../Layout";

export function Default(): JSX.Element {
	return (
		<MainContainer sx={Styles}>
			<TitleRow />
			<Typography variant="retro-list-title">Retrospective</Typography>
			<div className="retro-lists-scroll">
				<div className="retro-section-container">
					<div className="retro-section">
						<div className="retro-section-title">section title</div>
						<div className="retro-section-list">section list</div>
					</div>
					<div className="retro-section">
						<div className="retro-section-title">section title</div>
						<div className="retro-section-list">section list</div>
					</div>
					<div className="retro-section">
						<div className="retro-section-title">section title</div>
						<div className="retro-section-list">section list</div>
					</div>
				</div>
			</div>
		</MainContainer>
	);
}

const Styles = (theme: Theme): SystemStyleObject<Theme> => {
	return {
		"& .retro-section-container": {
			display: "grid",
			gridTemplateColumns: "repeat(3, minmax(220px, 33%))",
		},
		"& .retro-section": {
			border: `1px solid ${theme.palette.divider}`
		}
	};
};
