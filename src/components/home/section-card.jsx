import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * SectionCard 컴포넌트
 *
 * Home 페이지의 각 섹션(Hero, About Me, Skill Tree, Projects, Contact)을
 * 동일한 형태로 감싸는 공통 카드. 상단에 '01 / HERO' 형태의 둥근 태그 라벨을 두고,
 * 그 아래 줄에 굵은 제목, 다시 아래에 설명 텍스트를 둔다.
 * 태그 라벨 색상은 index 에 따라 BADGE_PALETTE 를 순환하여 카드마다 다르게 표시한다.
 * "컬러 팔레트 디자인 시스템.md" 의 위계 규칙(라임 = 시선 집중 / 다크 블록 = 신뢰·실적 /
 * 라벤더 = 프로세스 강조)에 따라 variant 로 배경 처리를 바꾼다.
 *
 * Props:
 * @param {number} index - 섹션 순번 (1부터) [Required]
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 섹션 역할 설명 텍스트 [Required]
 * @param {string} accent - 강조 컬러 키 ('primary' | 'secondary') [Optional, 기본값: 'primary']
 * @param {string} variant - 배경 처리 ('plain' | 'filled' | 'dark' | 'light') [Optional, 기본값: 'plain']
 * @param {string} titleColor - 제목 색상 override (MUI 팔레트 경로) [Optional]
 * @param {object} badgeSx - 태그 라벨 배지의 sx override (기본 팔레트 대신 사용) [Optional]
 * @param {object} cardSxOverride - variant 로 계산된 카드 배경/테두리 sx 위에 덮어쓸 값 [Optional]
 * @param {React.ReactNode} children - 설명 아래에 추가로 렌더링할 요소(버튼 등) [Optional]
 *
 * Example usage:
 * <SectionCard index={1} title="Hero" description="..." accent="primary" variant="filled" />
 */
/**
 * 배지(태그 라벨) 컬러 팔레트.
 * theme.js 의 primary/secondary/accents 토큰을 활용해 카드마다 다른 색을 순환시킨다.
 * 모두 밝은 파스텔 계열이므로 글자색은 어두운 text.primary 로 통일해 대비를 확보한다.
 */
const BADGE_PALETTE = [
  { bgcolor: 'primary.main', color: 'primary.contrastText' },
  { bgcolor: '#ff9e99', color: 'text.primary' },
  { bgcolor: 'accents.cyan', color: 'text.primary' },
  { bgcolor: 'accents.peach', color: 'text.primary' },
  { bgcolor: 'accents.mint', color: 'text.primary' },
];

function SectionCard({
  index,
  title,
  description,
  accent = 'primary',
  variant = 'plain',
  titleColor,
  badgeSx,
  cardSxOverride,
  children,
}) {
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
    light: {
      bgcolor: 'background.default',
      borderColor: 'text.primary',
      borderWidth: 2,
      color: 'text.primary',
    },
  }[variant];

  /**
   * 배지 스타일 우선순위:
   * 1) badgeSx prop 이 주어지면 그대로 사용
   * 2) 검정 배경(dark) 카드는 포인트 컬러를 라임(primary.main #ddff50) 으로 고정
   * 3) 그 외에는 index 에 따라 BADGE_PALETTE 를 순환
   */
  const resolvedBadgeSx =
    badgeSx ??
    (isDark
      ? { bgcolor: 'primary.main', color: 'primary.contrastText' }
      : BADGE_PALETTE[(index - 1) % BADGE_PALETTE.length]);

  const descColor = isFilled
    ? `${accent}.contrastText`
    : isDark
      ? 'rgba(255, 255, 255, 0.72)'
      : 'text.primary';

  const resolvedTitleColor =
    titleColor ??
    (isDark
      ? 'surface.onDarkText'
      : isFilled
        ? `${accent}.contrastText`
        : 'text.primary');

  const tagLabel = `${String(index).padStart(2, '0')} / ${title.toUpperCase()}`;

  return (
    <Card
      component="section"
      elevation={0}
      sx={{
        width: '100%',
        borderRadius: '20px',
        border: '1px solid',
        ...cardSx,
        ...cardSxOverride,
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1.25, mb: 1.5 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: { xs: '0.7rem', md: '0.75rem' },
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              px: 1.5,
              py: 0.5,
              borderRadius: 999,
              ...resolvedBadgeSx,
            }}
          >
            {tagLabel}
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 800,
              color: resolvedTitleColor,
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
            maxWidth: '640px',
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
