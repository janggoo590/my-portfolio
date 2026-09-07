import { supabase } from './supabase.js';

/**
 * 방명록 데이터 접근 계층
 *
 * public.guestbook 테이블에 대한 조회/작성을 담당한다.
 * email 컬럼은 DB 컬럼 권한상 조회가 불가능하므로(비공개 저장), 목록 응답에 포함되지 않는다.
 */

/** 목록/작성에서 공통으로 쓰는 조회 컬럼 (email 제외) */
const SELECT_COLUMNS = 'id, name, message, affiliation, emoji, created_at';

/**
 * 방명록 항목을 최신순으로 조회한다.
 *
 * @returns {Promise<Array<object>>} { id, name, message, affiliation, emoji, created_at }
 */
export async function fetchGuestbookEntries() {
  const { data, error } = await supabase
    .from('guestbook')
    .select(SELECT_COLUMNS)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data ?? [];
}

/**
 * 방명록을 작성한다.
 *
 * @param {object} payload - 입력값
 * @param {string} payload.name - 작성자 이름 (빈 값이면 익명 처리) [Optional]
 * @param {string} payload.message - 메시지 내용 [Required]
 * @param {string} payload.affiliation - 소속/직업 [Optional]
 * @param {string} payload.email - 이메일 (비공개 저장) [Optional]
 * @param {string} payload.emoji - 선택한 이모지 [Optional]
 * @returns {Promise<object>} 생성된 항목 (email 제외)
 */
export async function createGuestbookEntry({
  name,
  message,
  affiliation,
  email,
  emoji,
}) {
  const row = {
    name: name?.trim() ? name.trim() : null,
    message: message.trim(),
    affiliation: affiliation?.trim() ? affiliation.trim() : null,
    email: email?.trim() ? email.trim() : null,
    emoji: emoji ?? null,
  };

  const { data, error } = await supabase
    .from('guestbook')
    .insert(row)
    .select(SELECT_COLUMNS)
    .single();
  if (error) throw error;
  return data;
}
