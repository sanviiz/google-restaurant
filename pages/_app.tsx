import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@components/Layout/Layout'
import { ContextWrapper } from '@hooks/context'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ContextWrapper>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ContextWrapper>
	)
}

export default MyApp
