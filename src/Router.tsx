import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefautLayout/DefaultLayout'

import { History } from './pages/History'
import { Home } from './pages/Home/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
