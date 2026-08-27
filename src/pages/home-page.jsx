import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageShell from '../components/common/page-shell.jsx';
import HeroSection from '../components/home/hero-section.jsx';
import AboutSection from '../components/home/about-section.jsx';
import SkillTreeSection from '../components/home/skill-tree-section.jsx';
import ProjectsSection from '../components/home/projects-section.jsx';
import ContactSection from '../components/home/contact-section.jsx';

/**
 * HomePage 컴포넌트
 *
 * 포트폴리오 메인 페이지. 5개 섹션(Hero, About Me, Skill Tree, Projects, Contact)을
 * 세로로 나열한다. 각 섹션은 독립 컴포넌트로 모듈화되어 있다.
 *
 * Props: 없음
 *
 * Example usage:
 * <HomePage />
 */
function HomePage() {
  return (
    <PageShell maxWidth="md">
      <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 2 } }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            color: 'text.primary',
          }}
        >
          Portfolio Home
        </Typography>
        <Box
          sx={{
            width: 56,
            height: 4,
            borderRadius: 2,
            bgcolor: 'primary.main',
            mx: 'auto',
            mt: 1.5,
          }}
        />
        <Typography
          sx={{
            mt: 1.5,
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            color: 'text.secondary',
          }}
        >
          아래 5개 섹션으로 구성된 포트폴리오 템플릿입니다.
        </Typography>
      </Box>

      <HeroSection />
      <AboutSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
    </PageShell>
  );
}

export default HomePage;
