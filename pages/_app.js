
import Router from 'next/router';

import NProgress from 'nprogress';

import '../styles/style.css'


import 'nprogress/nprogress.css';


Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeSError', NProgress.done);
Router.events.on('routeChangeComplete', NProgress.done);



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
