import { Outlet } from "react-router-dom";
import { SearchHeader } from "./components/SearchHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const qureyClient = new QueryClient();
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={qureyClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
