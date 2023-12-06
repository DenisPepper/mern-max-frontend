import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UsersPage } from './users/pages/users-page';
import { NewPlace } from './places/pages/new-place';
import { MainNavigation } from './shared/components/navigation/main-navigation';

export default function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<UsersPage />} />
          <Route path='/places/new' element={<NewPlace />} />
        </Routes>
      </main>
    </Router>
  );
}
