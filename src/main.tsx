import ReactDOM from "react-dom/client";
import App from "./App";
import { AppThemeContext } from "./AppThemeContext";

const el = document.getElementById("root");
if (el === null) {
	throw new Error("Can't find root element");
}
ReactDOM.createRoot(el).render(
	<AppThemeContext>
		<App />
	</AppThemeContext>
);
