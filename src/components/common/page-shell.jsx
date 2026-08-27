import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

/**
 * PageShell 컴포넌트
 *
 * 모든 페이지 공통 레이아웃 래퍼. 화면 전체 너비를 사용하면서 콘텐츠를
 * 가로 중앙에 정렬하고, 반응형 패딩과 Container 최대 너비를 적용한다.
 *
 * Props:
 * @param {string} maxWidth - Container 최대 너비 [Optional, 기본값: 'md']
 * @param {React.ReactNode} children - 페이지 본문 [Required]
 *
 * Example usage:
 * <PageShell maxWidth="lg">
 *   <SomeSection />
 * </PageShell>
 */
function PageShell({ maxWidth = 'md', children }) {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container
        maxWidth={maxWidth}
        sx={{
          px: { xs: 2, md: 3 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 3, md: 4 },
        }}
      >
        {children}
      </Container>
    </Box>
  );
}

export default PageShell;
