import SectionCard from './section-card.jsx';

/**
 * HeroSection 컴포넌트
 *
 * Home 페이지 1번 섹션. 메인 비주얼 / 이름 / 간단 소개가 들어갈 영역의 자리표시자.
 * 라임(primary) 컬러로 배경을 채워 가장 먼저 시선을 끌도록 한다
 * (컬러 팔레트 디자인 시스템.md - Primary 사용 가이드).
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
      variant="filled"
      description="여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다."
    />
  );
}

export default HeroSection;
