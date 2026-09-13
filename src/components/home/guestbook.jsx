import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import GuestbookForm from './guestbook-form.jsx';
import GuestbookList from './guestbook-list.jsx';
import {
  fetchGuestbookEntries,
  createGuestbookEntry,
} from '../../lib/guestbook-api.js';

/** 방명록 포인트 컬러 (이미지 기준) */
const POINT_COLOR = '#7b45ff';

/**
 * Guestbook 컴포넌트
 *
 * Contact 섹션의 방명록 영역. Supabase 에서 방명록을 불러오고, 새 방명록을 등록하면
 * 목록 상단에 즉시 반영한다. (백엔드 없이 Supabase 직접 연동)
 *
 * Props: 없음
 *
 * Example usage:
 * <Guestbook />
 */
function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let ignore = false;
    fetchGuestbookEntries()
      .then((data) => {
        if (ignore) return;
        setEntries(data);
        setIsLoading(false);
      })
      .catch(() => {
        if (ignore) return;
        setHasError(true);
        setIsLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, []);

  const handleCreate = async (payload) => {
    const created = await createGuestbookEntry(payload);
    setEntries((prev) => [created, ...prev]);
  };

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: { xs: '1.05rem', md: '1.15rem' },
          color: POINT_COLOR,
          mb: 0.75,
        }}
      >
        방명록
      </Typography>
      <Typography sx={{ fontSize: '0.85rem', color: 'rgba(11, 11, 11, 0.6)', mb: 2 }}>
        이름을 비워두면 익명으로 표시됩니다. 이메일 및 정보는 선택하지않으면 비공개로 저장돼요.
      </Typography>

      <Divider sx={{ mb: 3, borderColor: 'rgba(11, 11, 11, 0.15)' }} />

      <GuestbookForm onSubmit={handleCreate} />

      <Divider sx={{ my: 3, borderColor: 'rgba(11, 11, 11, 0.15)' }} />

      <Box sx={{ bgcolor: '#f8f6ff', borderRadius: '16px', p: { xs: 2, md: 2.5 } }}>
        {hasError ? (
          <Alert severity="error">방명록을 불러오지 못했습니다.</Alert>
        ) : (
          <GuestbookList entries={entries} isLoading={isLoading} />
        )}
      </Box>
    </Box>
  );
}

export default Guestbook;
