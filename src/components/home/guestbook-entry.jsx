import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { formatDate } from '../../utils/format-date.js';

/**
 * GuestbookEntry 컴포넌트
 *
 * 방명록 한 건을 카드 형태로 표시한다. 작성자 이름(빈 값이면 '익명'), 이모지,
 * 소속 정보(있는 경우), 메시지 내용, 작성 날짜를 보여준다.
 * 이메일은 비공개 저장이므로 표시하지 않는다.
 *
 * Props:
 * @param {object} entry - 방명록 항목 [Required]
 *   { id, name, message, affiliation, emoji, created_at }
 *
 * Example usage:
 * <GuestbookEntry entry={entry} />
 */
function GuestbookEntry({ entry }) {
  const displayName = entry.name?.trim() ? entry.name : '익명';

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: '14px',
        bgcolor: 'rgba(255, 255, 255, 0.7)',
        border: '1px solid rgba(11, 11, 11, 0.1)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 1,
          flexWrap: 'wrap',
          mb: 0.75,
        }}
      >
        {entry.emoji && (
          <Box component="span" sx={{ fontSize: '1.1rem', lineHeight: 1 }}>
            {entry.emoji}
          </Box>
        )}
        <Typography sx={{ fontWeight: 700, color: 'text.primary' }}>
          {displayName}
        </Typography>
        {entry.affiliation && (
          <Typography sx={{ fontSize: '0.8rem', color: 'rgba(11, 11, 11, 0.6)' }}>
            · {entry.affiliation}
          </Typography>
        )}
        <Typography
          sx={{
            ml: 'auto',
            fontSize: '0.78rem',
            color: 'rgba(11, 11, 11, 0.55)',
          }}
        >
          {formatDate(entry.created_at)}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: 'text.primary',
          lineHeight: 1.6,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
      >
        {entry.message}
      </Typography>
    </Box>
  );
}

export default GuestbookEntry;
