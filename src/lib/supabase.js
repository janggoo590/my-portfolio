import { createClient } from '@supabase/supabase-js';

/**
 * Supabase 클라이언트
 *
 * 백엔드 없이 프론트엔드에서 직접 Supabase 에 접근한다. (방명록 전용)
 * URL / anon 키는 .env (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) 에서 주입한다.
 * anon 키는 공개되어도 안전한 값이며, 데이터 보호는 DB 의 RLS 정책과 컬럼 권한이 담당한다.
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase 환경 변수가 없습니다. .env 파일에 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY 를 설정하세요.',
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
