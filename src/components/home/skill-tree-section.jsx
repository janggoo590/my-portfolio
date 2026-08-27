import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import SectionCard from './section-card.jsx';

/**
 * SkillTreeSection 컴포넌트
 *
 * Home 페이지 3번 섹션. 기술 스택을 트리 / 프로그레스바로 시각화할 영역의 자리표시자.
 * "컬러 팔레트 디자인 시스템.md" 의 "다크 블록 = 신뢰·실적" 규칙에 따라 다크 배경으로 두고,
 * 라임(primary) 프로그레스바로 수치를 강조한다. 실제 데이터 대신 예시 3개로 형태만 보여준다.
 *
 * Props: 없음
 *
 * Example usage:
 * <SkillTreeSection />
 */
const SAMPLE_SKILLS = [
  { name: 'Skill A (예시)', value: 80 },
  { name: 'Skill B (예시)', value: 60 },
  { name: 'Skill C (예시)', value: 45 },
];

function SkillTreeSection() {
  return (
    <SectionCard
      index={3}
      title="Skill Tree"
      accent="primary"
      variant="dark"
      description="여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다."
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {SAMPLE_SKILLS.map((skill) => (
          <Box key={skill.name}>
            <Typography
              sx={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.72)', mb: 0.5 }}
            >
              {skill.name}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skill.value}
              color="primary"
              sx={{ height: 8, borderRadius: 4, bgcolor: 'rgba(255, 255, 255, 0.12)' }}
            />
          </Box>
        ))}
      </Box>
    </SectionCard>
  );
}

export default SkillTreeSection;
