import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * SectionCard 컴포넌트
 *
 * Home 페이지의 각 섹션(Hero, About Me, Skill Tree, Projects, Contact)을
 * 동일한 형태로 감싸는 공통 카드. 상단에 섹션 순번 배지와 제목, 아래에 설명 텍스트를 둔다.
 * "컬러 팔레트 디자인 시스템.md" 의 위계 규칙(라임 = 시선 집중 / 다크 블록 = 신뢰·실적 /
 * 라벤더 = 프로세스 강조)에 따라 variant 로 배경 처리를 바꾼다.
 *
 * Props:
 * @param {number} index - 섹션 순번 (1부터) [Required]
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 섹션 역할 설명 텍스트 [Required]
 * @param {string} accent - 강조 컬러 키 ('primary' | 'secondary') [Optional, 기본값: 'primary']
 * @param {string} variant - 배경 처리 ('plain' | 'filled' | 'dark') [Optional, 기본값: 'plain']
 * @param {React.ReactNode} children - 설명 아래에 추가로 렌더링할 요소(버튼 등) [Optional]
 *
 * Example usage:
 * <SectionCard index={1} title="Hero" description="..." accent="primary" variant="filled" />
 */
function SectionCard({ index, title, description, accent = 'primary', variant = 'plain', children }) {
  const accentColor = `${accent}.main`;
  const isFilled = variant === 'filled';
  const isDark = variant === 'dark';

  const cardSx = {
    plain: {
      bgcolor: 'surface.subtle',
      borderColor: 'border.light',
      color: 'text.primary',
    },
    filled: {
      bgcolor: accentColor,
      borderColor: accentColor,
      color: `${accent}.contrastText`,
    },
    dark: {
      bgcolor: 'surface.dark',
      borderColor: 'border.onDark',
      color: 'surface.onDarkText',
    },
  }[variant];

  const badgeSx = {
    plain: { bgcolor: accentColor, color: `${accent}.contrastText` },
    filled: { bgcolor: 'rgba(11, 11, 11, 0.12)', color: `${accent}.contrastText` },
    dark: { bgcolor: accentColor, color: `${accent}.contrastText` },
  }[variant];

  const descColor = isFilled
    ? `${accent}.contrastText`
    : isDark
      ? 'rgba(255, 255, 255, 0.72)'
      : 'text.primary';

  return (
    <Card
      component="section"
      elevation={0}
      sx={{
        width: '100%',
        borderRadius: 3,
        border: '1px solid',
        ...cardSx,
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
          <Box
            sx={{
              fontSize: { xs: '0.75rem', md: '0.8rem' },
              fontWeight: 700,
              letterSpacing: 1,
              px: 1,
              py: 0.25,
              borderRadius: 1,
              ...badgeSx,
            }}
          >
            {String(index).padStart(2, '0')}
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700,
              color: isFilled ? `${accent}.contrastText` : accentColor,
            }}
          >
            {title}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: 1.6,
            color: descColor,
          }}
        >
          {description}
        </Typography>

        {children && <Box sx={{ mt: 2.5 }}>{children}</Box>}
      </CardContent>
    </Card>
  );
}

export default SectionCard;
