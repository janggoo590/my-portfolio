import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SectionCard from './section-card.jsx';

/**
 * ContactSection 컴포넌트
 *
 * Home 페이지 5번 섹션. 연락처 / SNS / 간단한 메시지 폼의 자리표시자.
 * 폼은 비활성화 상태로 형태만 보여준다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  return (
    <SectionCard
      index={5}
      title="Contact"
      accent="secondary"
      description="여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다."
    >
      <Stack spacing={2} sx={{ maxWidth: 420 }}>
        <TextField label="이름" size="small" disabled fullWidth />
        <TextField label="메시지" size="small" disabled fullWidth multiline minRows={2} />
        <Box>
          <Button variant="contained" color="secondary" disabled sx={{ fontWeight: 700 }}>
            보내기
          </Button>
        </Box>
      </Stack>
    </SectionCard>
  );
}

export default ContactSection;
