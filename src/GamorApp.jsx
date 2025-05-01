import { AuthProvider } from './context/AuthContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { ModalProvider } from './context/ModalContext';
import {
  Navbar,
  MainBoard,
  TrendingCategories,
  ToggleButton,
  ModalLogin
} from './components';

import "./styles/main.css";

function GamorApp() {

  return (
    <DarkModeProvider>
      <AuthProvider>
        <ModalProvider>
          <Navbar />
          <MainBoard />
          <TrendingCategories />
          <ToggleButton />
          <ModalLogin />
        </ModalProvider>
      </AuthProvider>
    </DarkModeProvider>
  );
}

export default GamorApp;
