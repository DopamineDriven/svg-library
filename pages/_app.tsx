import { AppProps } from 'next/app';
import { ReactElement } from 'react';

export function reportWebVitals(metric: any): void {
	// These metrics can be sent to any analytics service
	console.log(metric);
}

function App({ Component, pageProps }: AppProps): ReactElement {
	return <Component {...pageProps} />;
}

export default App;