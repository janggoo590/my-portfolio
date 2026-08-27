import { createTheme } from '@mui/material/styles';

/**
 * MUI 테마
 *
 * "컬러 팔레트 디자인 시스템.md" 에서 추출한 CSS 변수 값을 MUI palette 로 매핑한다.
 * 원본 디자인이 블랙 베이스이므로 mode 는 'dark' 를 기본값으로 사용한다.
 */
const theme = createTheme({
  palette: {
    mode: 'dark',
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
      default: '#0b0b0b',
      paper: '#191919',
    },
    text: {
      primary: '#ffffff',
      secondary: '#919191',
    },
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
