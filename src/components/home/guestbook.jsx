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
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: 1.5,
          textTransform: 'uppercase',
          color: 'rgba(11, 11, 11, 0.6)',
          mb: 1,
        }}
      >
        Guestbook
      </Typography>
      <Typography sx={{ fontWeight: 800, fontSize: '1.15rem', mb: 2, color: 'text.primary' }}>
        방명록을 남겨주세요
      </Typography>

      <GuestbookForm onSubmit={handleCreate} />

      <Divider sx={{ my: 3, borderColor: 'rgba(11, 11, 11, 0.15)' }} />

      {hasError ? (
        <Alert severity="error">방명록을 불러오지 못했습니다.</Alert>
      ) : (
        <GuestbookList entries={entries} isLoading={isLoading} />
      )}
    </Box>
  );
}

export default Guestbook;
