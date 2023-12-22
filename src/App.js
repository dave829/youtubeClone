import { Outlet } from "react-router-dom";
import { SearchHeader } from "./components/SearchHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { VideosContextProvider } from "./context/VideosContext";

function App() {
  const qureyClient = new QueryClient();
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={qureyClient}>
        <VideosContextProvider>
          <Outlet />
        </VideosContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
