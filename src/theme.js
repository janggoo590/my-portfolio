import { createTheme } from '@mui/material/styles';

/**
 * MUI 테마
 *
 * "컬러 팔레트 디자인 시스템.md" (AI SEARCH OPTIMIZATION LAB by MASSTIGE 분석) 의
 * CSS 변수 값을 MUI palette 로 매핑한다.
 * 원본은 화이트 베이스 + 다크 섹션 블록 구조이므로 mode 는 'light' 를 기본값으로 사용한다.
 * 다크 블록/버튼에서 참조할 수 있도록 surface, border 커스텀 키를 추가로 정의한다.
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
      paper: '#ffffff',
    },
    text: {
      primary: '#0b0b0b',
      secondary: '#8a8a8a',
    },
    divider: '#ecedea',
    /** 섹션 배경 토큰 (컬러 팔레트 디자인 시스템.md - Background Colors) */
    surface: {
      subtle: '#f7f7f5',
      dark: '#0b0b0b',
      darkElevated: '#191919',
      onDarkText: '#ffffff',
    },
    /** 테두리 토큰 (컬러 팔레트 디자인 시스템.md - Border Colors) */
    border: {
      light: '#ecedea',
      strong: '#e5e5e5',
      onDark: 'rgba(255, 255, 255, 0.1)',
    },
    /** 버튼/링크 토큰 (컬러 팔레트 디자인 시스템.md - Interactive Colors) */
    interactive: {
      buttonHover: '#c7e63f',
      buttonDark: '#0b0b0b',
      link: '#a293c5',
      linkHover: '#7a6ba8',
    },
    /** 보조 파스텔 액센트 (일러스트/소형 카드 전용, 소량 사용) */
    accents: {
      cyan: '#7fe0f0',
      blue: '#a8c7ff',
      peach: '#ffcba9',
      mint: '#7fe0c1',
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
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          '&:hover': { backgroundColor: '#c7e63f' },
        },
      },
    },
  },
});

export default theme;
