import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import SectionCard from './section-card.jsx';

/**
 * AboutSection 컴포넌트
 *
 * Home 페이지 2번 섹션. 간단한 자기소개와 '더 알아보기' 버튼의 자리표시자.
 * 버튼을 누르면 About Me 페이지로 이동한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutSection />
 */
function AboutSection() {
  const navigate = useNavigate();

  return (
    <SectionCard
      index={2}
      title="About Me"
      accent="primary"
      variant="plain"
      description="여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다."
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/about')}
        sx={{ fontWeight: 700, color: 'primary.contrastText' }}
      >
        더 알아보기
      </Button>
    </SectionCard>
  );
}

export default AboutSection;
