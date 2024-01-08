import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>

      <ReactQueryDevtools client={queryClient} />
    </QueryClientProvider>
  </React.StrictMode>
);
