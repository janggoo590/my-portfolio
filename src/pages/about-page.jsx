import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PageShell from '../components/common/page-shell.jsx';

/**
 * AboutPage 컴포넌트
 *
 * About Me 상세 페이지의 자리표시자. 추후 상세한 자기소개가 들어갈 공간이다.
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutPage />
 */
function AboutPage() {
  return (
    <PageShell maxWidth="md">
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, color: 'primary.main' }}
      >
        About Me
      </Typography>

      <Card
        elevation={0}
        sx={{
          borderRadius: 3,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          bgcolor: 'background.paper',
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.6, color: 'grey.300' }}>
            About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
          </Typography>
        </CardContent>
      </Card>
    </PageShell>
  );
}

export default AboutPage;
