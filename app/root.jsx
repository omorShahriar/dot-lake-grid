import { ClientOnly } from "remix-utils";
import Layout from "./components/Layout";
import NoDevTools from "./components/NoDevTools";
import styles from "./styles/app.css";

const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require("@remix-run/react");

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta = () => ({
  charset: "utf-8",
  title: "DOT Lake Village",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>

      <body
        className=" font-noto bg-dotOrange "
        onDragStart={(e) => e.preventDefault()}
        onDrop={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        onCopy={(e) => e.preventDefault()}
      >
        <Layout>
          <Outlet />
        </Layout>
        {/* <ClientOnly>{() => <NoDevTools />}</ClientOnly> */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className=" bg-dotOrange flex items-center justify-center w-screen h-screen ">
        <h1 className=" text-7xl max-w-3xl text-center text-white ">
          Ooops! Nothing is here.
        </h1>
        <Scripts />
      </body>
    </html>
  );
}
