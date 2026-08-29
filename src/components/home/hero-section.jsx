import SectionCard from './section-card.jsx';

/**
 * HeroSection 컴포넌트
 *
 * Home 페이지 1번 섹션. 메인 비주얼 / 이름 / 간단 소개가 들어갈 영역의 자리표시자.
 * 흰색 배경 카드로 두어 깔끔하게 첫인상을 전달한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <SectionCard
      index={1}
      title="Hero"
      accent="primary"
      variant="light"
      description="여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다."
    />
  );
}

export default HeroSection;
