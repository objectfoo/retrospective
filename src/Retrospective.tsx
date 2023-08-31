import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Default } from "./Views/Default";


export default function App(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Default />} />
			</Routes>
		</BrowserRouter>
	);
}
