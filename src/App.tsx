import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { AppLayout } from './common/components/layout'
import { Battle, Home, Pokedex, History, Error } from './pages'
import { QueryClient, QueryClientProvider } from 'react-query'
import './styles/main.scss'
import { Provider } from 'react-redux'
import store from 'redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const oneHoursInMs = 1000 * 60 * 60 * 1
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: true,
      staleTime: oneHoursInMs,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/battle" element={<Battle />} />
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/history" element={<History />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer position="bottom-left" limit={3} theme="colored" />
      </Provider>
    </QueryClientProvider>
  )
}

export default App
