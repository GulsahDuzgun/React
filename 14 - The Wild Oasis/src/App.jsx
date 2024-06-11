import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Cabins from "./pages/Cabins";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="account" element={<Account />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
