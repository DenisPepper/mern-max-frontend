import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UsersPage } from './users/pages/users-page';
import { NewPlace } from './places/pages/new-place-page';
import { MainNavigation } from './shared/components/navigation/main-navigation';
import { UserPlacesPage } from './places/pages/user-places-page';

export default function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<UsersPage />} />
          <Route path='/:uid/places' element={<UserPlacesPage />} />
          <Route path='/places/new' element={<NewPlace />} />
        </Routes>
      </main>
    </Router>
  );
}
