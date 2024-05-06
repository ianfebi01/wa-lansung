import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import { LandingProvider } from './context/LandingContext'
import Home from './pages'

function App() {
	return (
		<div className="flex flex-col h-screen items-center">
			<LandingProvider>
				<Navbar />
				<div className="mt-20 px-4 mb-4 md:max-w-4xl grow-[1] md:flex md:flex-col md:justify-center">
					<Home />
				</div>
				<Footer />
			</LandingProvider>
		</div>
	)
}

export default App
