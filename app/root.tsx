import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';

import resetStylesUrl from "./styles/reset.css";

export const meta: MetaFunction = () => {
  return { title: 'Neuralyzer' };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: resetStylesUrl,
    },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
