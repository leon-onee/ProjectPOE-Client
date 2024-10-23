import { ThemeProvider } from '@/components/theme-provider'

import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import { CookiesProvider, useCookies  } from 'react-cookie';

const App: React.FC = () => {
	const [cookies] = useCookies(['poessid']);
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<CookiesProvider>
				{cookies.poessid ? <HomePage /> : <LoginPage />}
			</CookiesProvider>
		</ThemeProvider>
	)
}

export default App
