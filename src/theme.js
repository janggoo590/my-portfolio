import { createTheme } from '@mui/material/styles';

/**
 * MUI 테마
 *
 * "컬러 팔레트 디자인 시스템.md" 에서 추출한 CSS 변수 값을 MUI palette 로 매핑한다.
 * 배경은 화이트(#fff) 라이트 모드를 사용하며, Primary(라임)/Secondary(라벤더)는
 * 팔레트 가이드에 따라 라이트 모드에서도 채도를 유지해 브랜드 정체성을 지킨다.
 */
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ddff50',
      light: '#e9ff8d',
      dark: '#9bb238',
      contrastText: '#0b0b0b',
    },
    secondary: {
      main: '#cab8f6',
      light: '#e0d6fb',
      dark: '#a293c5',
      contrastText: '#0b0b0b',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#0b0b0b',
      secondary: '#5f5f5f',
    },
    divider: 'rgba(11, 11, 11, 0.12)',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      lineHeight: 1.3,
    },
  },
  spacing: 8,
});

export default theme;
