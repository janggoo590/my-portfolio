import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PageShell from '../components/common/page-shell.jsx';

/**
 * AboutPage 컴포넌트
 *
 * About Me 상세 페이지의 자리표시자. 추후 상세한 자기소개가 들어갈 공간이다.
 * 화이트 베이스 팔레트에 맞춰 밝은 카드 + 얇은 테두리, 블랙 텍스트를 사용한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutPage />
 */
function AboutPage() {
  return (
    <PageShell maxWidth="md">
      <Box>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, color: 'text.primary' }}
        >
          About Me
        </Typography>
        <Box
          sx={{ width: 56, height: 4, borderRadius: 2, bgcolor: 'primary.main', mt: 1.5 }}
        />
      </Box>

      <Card
        elevation={0}
        sx={{
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'border.light',
          bgcolor: 'surface.subtle',
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Typography
            sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.6, color: 'text.primary' }}
          >
            About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
          </Typography>
        </CardContent>
      </Card>
    </PageShell>
  );
}

export default AboutPage;
