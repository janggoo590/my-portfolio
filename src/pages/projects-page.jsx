import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PageShell from '../components/common/page-shell.jsx';

/**
 * ProjectsPage 컴포넌트
 *
 * Projects 상세 페이지의 자리표시자. 추후 포트폴리오 작품들이 들어갈 공간이다.
 * 이 페이지의 강조 마커는 라벤더(secondary)를 사용해 프로세스/카테고리 성격을 드러낸다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsPage />
 */
function ProjectsPage() {
  return (
    <PageShell maxWidth="md">
      <Box>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, color: 'text.primary' }}
        >
          Projects
        </Typography>
        <Box
          sx={{ width: 56, height: 4, borderRadius: 2, bgcolor: 'secondary.main', mt: 1.5 }}
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
            Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
          </Typography>
        </CardContent>
      </Card>
    </PageShell>
  );
}

export default ProjectsPage;
