import AppProvider from "./shared/providers/AppProvider"
import AppRoute from "./shared/route/AppRoute"


function App() {
	return (
		<AppProvider>
			<AppRoute/>
		</AppProvider>
    )
}

export default App
