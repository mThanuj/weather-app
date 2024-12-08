import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { ThemeProvider } from "./context/theme-provider";
import WeatherDashboard from "./pages/weather-dashboard";
import CityDashboard from "./pages/city-dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {};

const queryClient = new QueryClient();

const App = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="system">
          <Layout>
            <Routes>
              <Route path="/" element={<WeatherDashboard />} />
              <Route path="/city/:cityName" element={<CityDashboard />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
