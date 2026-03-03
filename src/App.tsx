import AppProvider from "./providers/AppProvider"
import AppRoute from "./route/AppRoute"

function App() {
	return (
		<AppProvider>
			<AppRoute/>
		</AppProvider>
    )
}

export default App
