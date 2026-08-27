import { Routes, Route, Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import NavBar from './components/common/nav-bar.jsx';
import HomePage from './pages/home-page.jsx';
import AboutPage from './pages/about-page.jsx';
import ProjectsPage from './pages/projects-page.jsx';

/**
 * App 컴포넌트
 *
 * 상단 고정 네비게이션(Home / About Me / Projects) + React Router 라우팅을 구성한다.
 * 모든 페이지는 반응형 중앙정렬 레이아웃을 페이지 컴포넌트 내부에서 적용한다.
 */
function App() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
      }}
    >
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', width: '100%' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
