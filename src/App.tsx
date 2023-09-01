import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { AppLayout } from './common/components/layout'
import { Battle, Home, List, History, Error } from './pages'
import { QueryClient, QueryClientProvider } from 'react-query'
import './styles/main.scss'
import { Provider } from 'react-redux'
import store from 'redux/store'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/battle" element={<Battle />} />
              <Route path="/list" element={<List />} />
              <Route path="/history" element={<History />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
