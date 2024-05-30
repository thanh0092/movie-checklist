import Nav from "@/components/Nav";
import TrendTab from "@/components/TrendTab";
import { StoreProvider } from "@/context";
import "@/styles/globals.scss";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <SWRConfig
        value={{
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <StoreProvider>
          <div className="min-h-screen">
            <div className="container mx-auto">
              <Nav />
              <TrendTab />
              <Component {...pageProps} />
            </div>
          </div>
        </StoreProvider>
      </SWRConfig>
    </>
  );
}
