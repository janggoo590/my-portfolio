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
      /** 카드 배경만 흰색으로 변경 (제목 색상은 기본값 유지) */
      cardSxOverride={{ bgcolor: '#fff' }}
      badgeSx={{
        /** 포인트 컬러 배경 + 흰 글자의 선명한 배지 */
        bgcolor: '#7b45ff',
        color: '#ffffff',
      }}
      description="궁금한 점이나 제안이 있다면 아래의 이메일 또는 방명록을 남겨주세요."
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
