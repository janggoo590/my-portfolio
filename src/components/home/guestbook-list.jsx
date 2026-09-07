import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import GuestbookEntry from './guestbook-entry.jsx';

/**
 * GuestbookList 컴포넌트
 *
 * 방명록 목록 영역. 로딩 중에는 스켈레톤, 비어 있으면 안내 문구,
 * 그 외에는 최신순 방명록 카드를 나열한다.
 *
 * Props:
 * @param {Array<object>} entries - 방명록 항목 배열 [Required]
 * @param {boolean} isLoading - 로딩 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <GuestbookList entries={entries} isLoading={isLoading} />
 */
function GuestbookList({ entries, isLoading = false }) {
  if (isLoading) {
    return (
      <Stack spacing={1.5}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} variant="rounded" height={92} />
        ))}
      </Stack>
    );
  }

  if (entries.length === 0) {
    return (
      <Box
        sx={{
          p: 3,
          textAlign: 'center',
          borderRadius: '14px',
          border: '1px dashed rgba(11, 11, 11, 0.25)',
          color: 'rgba(11, 11, 11, 0.6)',
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>
          아직 방명록이 없습니다. 첫 번째 방명록을 남겨보세요!
        </Typography>
      </Box>
    );
  }

  return (
    <Stack spacing={1.5}>
      <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(11, 11, 11, 0.7)' }}>
        방명록 {entries.length}개
      </Typography>
      {entries.map((entry) => (
        <GuestbookEntry key={entry.id} entry={entry} />
      ))}
    </Stack>
  );
}

export default GuestbookList;
