import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import SectionCard from './section-card.jsx';

/**
 * SkillTreeSection 컴포넌트
 *
 * Home 페이지 3번 섹션. 기술 스택을 트리 / 프로그레스바로 시각화할 영역의 자리표시자.
 * 실제 데이터 대신 예시 프로그레스바 3개로 형태만 보여준다.
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
      accent="secondary"
      description="여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다."
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {SAMPLE_SKILLS.map((skill) => (
          <Box key={skill.name}>
            <Typography
              sx={{ fontSize: '0.875rem', color: 'text.secondary', mb: 0.5 }}
            >
              {skill.name}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skill.value}
              color="secondary"
              sx={{ height: 8, borderRadius: 4, bgcolor: 'rgba(255, 255, 255, 0.08)' }}
            />
          </Box>
        ))}
      </Box>
    </SectionCard>
  );
}

export default SkillTreeSection;
