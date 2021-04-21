import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react'
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import '../styles/tailwind.css';
global.fetch = require('node-fetch');

import {Provider as ReduxProvider} from 'react-redux';
import store from '../redux/store';

const client = new ApolloClient({
    fetchOptions: {
        credentials: 'include'
    }
});


class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        // const config = { apiKey: API_KEY, shopOrigin: Cookies.get('shopOrigin'), forceRedirect: true }
        const config = { apiKey: API_KEY, shopOrigin: Cookies.get('shopOrigin'), forceRedirect: true }

        return (
            <React.Fragment>
                <Head>
                    <title>GlobalID App</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
                    <meta charSet="utf-8" />
                </Head>
                        <ReduxProvider store={store}>
                <Provider config={config}>
                    <AppProvider i18n={translations}>
                            <ApolloProvider client={client}>
                                <Component {...pageProps} />
                            </ApolloProvider>
                    </AppProvider>
                </Provider>
                        </ReduxProvider>
            </React.Fragment>
        );
    }
}

export default MyApp;