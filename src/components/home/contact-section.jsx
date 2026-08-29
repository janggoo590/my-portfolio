import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SectionCard from './section-card.jsx';

/**
 * ContactSection 컴포넌트
 *
 * Home 페이지 5번 섹션. 연락처 / SNS / 간단한 메시지 폼의 자리표시자.
 * "컬러 팔레트 디자인 시스템.md" 의 "라벤더는 서브 섹션 1곳으로 제한" 규칙에 따라
 * 이 섹션만 라벤더(secondary) 배경으로 채운다. 폼은 비활성화 상태로 형태만 보여준다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ContactSection />
 */
const FIELD_SX = {
  '& .MuiInputBase-root': { bgcolor: 'rgba(255, 255, 255, 0.65)' },
  '& .MuiInputLabel-root': { color: 'rgba(11, 11, 11, 0.7)' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(11, 11, 11, 0.25)' },
};

function ContactSection() {
  return (
    <SectionCard
      index={5}
      title="Contact"
      accent="secondary"
      variant="filled"
      badgeSx={{
        /** 배지 배경 = 카드 background(secondary.main) 을 자기 자신과 곱한(multiply) 값 */
        bgcolor: 'secondary.main',
        color: 'text.primary',
        mixBlendMode: 'multiply',
      }}
      description="여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다."
    >
      <Stack spacing={2} sx={{ maxWidth: 420 }}>
        <TextField label="이름" size="small" disabled fullWidth sx={FIELD_SX} />
        <TextField
          label="메시지"
          size="small"
          disabled
          fullWidth
          multiline
          minRows={2}
          sx={FIELD_SX}
        />
        <Box>
          <Button
            variant="contained"
            disabled
            sx={{
              fontWeight: 700,
              borderRadius: 999,
              px: 3,
              bgcolor: 'interactive.buttonDark',
              color: 'surface.onDarkText',
              '&.Mui-disabled': {
                bgcolor: 'rgba(11, 11, 11, 0.45)',
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
          >
            보내기
          </Button>
        </Box>
      </Stack>
    </SectionCard>
  );
}

export default ContactSection;
