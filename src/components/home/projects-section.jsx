import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SectionCard from './section-card.jsx';

/**
 * ProjectsSection 컴포넌트
 *
 * Home 페이지 4번 섹션. 대표작 썸네일 3~4개와 '더 보기' 버튼의 자리표시자.
 * 썸네일 자리는 비어 있는 박스로 표시하고, 버튼은 Projects 페이지로 이동한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsSection />
 */
const THUMBNAIL_SLOTS = ['작품 1', '작품 2', '작품 3', '작품 4'];

function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <SectionCard
      index={4}
      title="Projects"
      accent="primary"
      description="여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다."
    >
      <Grid container spacing={2}>
        {THUMBNAIL_SLOTS.map((label) => (
          <Grid key={label} size={{ xs: 6, md: 3 }}>
            <Box
              sx={{
                aspectRatio: '4 / 3',
                borderRadius: 2,
                border: '1px dashed',
                borderColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.secondary',
                fontSize: '0.8rem',
              }}
            >
              {label}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 2.5 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate('/projects')}
          sx={{ fontWeight: 700 }}
        >
          더 보기
        </Button>
      </Box>

      <Typography sx={{ mt: 1, fontSize: '0.75rem', color: 'text.secondary' }}>
        * 썸네일은 자리표시자입니다.
      </Typography>
    </SectionCard>
  );
}

export default ProjectsSection;
