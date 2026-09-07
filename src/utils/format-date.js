/**
 * 날짜 포맷 유틸리티
 */

/**
 * ISO 날짜 문자열을 "YYYY.MM.DD" 형태로 변환한다.
 *
 * @param {string} isoString - ISO 8601 날짜 문자열
 * @returns {string} 포맷된 날짜 문자열
 */
export function formatDate(isoString) {
  const date = new Date(isoString);
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())}`;
}
