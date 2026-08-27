import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

/**
 * NavBar 컴포넌트
 *
 * 상단 고정 네비게이션. Home / About Me / Projects 3개 탭을 제공하며
 * 현재 경로에 맞는 탭을 활성화한다. 탭 클릭 시 React Router 로 이동한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <NavBar />
 */
const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = NAV_ITEMS.some((item) => item.path === location.pathname)
    ? location.pathname
    : '/';

  const handleChange = (_event, nextPath) => {
    navigate(nextPath);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Toolbar
          disableGutters
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'stretch', sm: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 1, sm: 0 },
            py: { xs: 1.5, sm: 0 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              textAlign: { xs: 'center', sm: 'left' },
              fontSize: { xs: '1.1rem', md: '1.25rem' },
            }}
          >
            My Portfolio
          </Typography>

          <Tabs
            value={currentPath}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
            sx={{
              minHeight: 48,
              '& .MuiTab-root': {
                color: 'text.secondary',
                fontWeight: 600,
                minHeight: 48,
              },
              '& .MuiTab-root.Mui-selected': { color: 'primary.main' },
              '& .MuiTabs-indicator': { backgroundColor: 'primary.main', height: 3 },
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Tab key={item.path} label={item.label} value={item.path} />
            ))}
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
