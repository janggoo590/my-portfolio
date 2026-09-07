import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import SectionCard from './section-card.jsx';
import ContactInfo from './contact-info.jsx';
import Guestbook from './guestbook.jsx';

/**
 * ContactSection 컴포넌트
 *
 * Home 페이지 5번 섹션. 연락처(이메일 + SNS)를 위에, 방명록을 아래에 배치한다.
 * "컬러 팔레트 디자인 시스템.md" 의 "라벤더는 서브 섹션 1곳으로 제한" 규칙에 따라
 * 이 섹션만 라벤더(secondary) 배경으로 채운다.
 * 방명록은 Supabase 와 직접 연동되어 실제로 작성·조회된다.
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
      variant="filled"
      badgeSx={{
        /** 배지 배경 = 카드 background(secondary.main) 을 자기 자신과 곱한(multiply) 값 */
        bgcolor: 'secondary.main',
        color: 'text.primary',
        mixBlendMode: 'multiply',
      }}
      description="궁금한 점이나 제안이 있다면 편하게 연락 주세요. 아래 방명록도 환영합니다."
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <ContactInfo />
        <Divider sx={{ my: 3, borderColor: 'rgba(11, 11, 11, 0.15)' }} />
        <Guestbook />
      </Box>
    </SectionCard>
  );
}

export default ContactSection;
