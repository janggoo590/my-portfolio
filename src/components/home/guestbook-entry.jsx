import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import { formatDate } from '../../utils/format-date.js';

/** 방명록 포인트 컬러 (이미지 기준) */
const POINT_COLOR = '#7b45ff';

/** 이메일/sns계정 뱃지 공통 스타일 */
const CONTACT_BADGE_SX = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 0.5,
  px: 1,
  py: 0.25,
  borderRadius: 999,
  bgcolor: '#f3f3f3',
  color: POINT_COLOR,
  fontSize: '0.75rem',
};

/**
 * GuestbookEntry 컴포넌트
 *
 * 방명록 한 건을 카드 형태로 표시한다. 원형 아바타에는 임의의 프로필 아이콘을 표시하고,
 * 작성자 이름(빈 값이면 '익명') 옆에 작성 시 선택한 이모지를 붙여 보여준다.
 * 소속 정보(있는 경우)는 알약 배지로, 작성 날짜는 오른쪽에 표시한다. 메시지 아래에는
 * 작성자가 공개 동의한 이메일(email_display)과 sns계정을 배지 형태로 노출한다.
 * 비공개로 저장된 email 컬럼 자체는 표시하지 않는다.
 *
 * Props:
 * @param {object} entry - 방명록 항목 [Required]
 *   { id, name, message, affiliation, emoji, sns_account, email_display, created_at }
 *
 * Example usage:
 * <GuestbookEntry entry={entry} />
 */
function GuestbookEntry({ entry }) {
  const displayName = entry.name?.trim() ? entry.name : '익명';
  const hasContactBadges = Boolean(entry.email_display || entry.sns_account);

  return (
    <Box
      sx={{
        p: '26px',
        borderRadius: '10px',
        bgcolor: '#ffffff',
        border: '1px solid rgba(11, 11, 11, 0.1)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flexWrap: 'wrap',
          mb: 1,
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            borderRadius: '50%',
            bgcolor: POINT_COLOR,
            color: '#ffffff',
            flexShrink: 0,
          }}
        >
          <PersonIcon sx={{ fontSize: '1.1rem' }} />
        </Box>
        <Typography sx={{ fontWeight: 700, color: 'text.primary' }}>
          {displayName}
          {entry.emoji && (
            <Box component="span" sx={{ ml: 0.5 }}>
              {entry.emoji}
            </Box>
          )}
        </Typography>
        {entry.affiliation && (
          <Box
            sx={{
              px: 1,
              py: 0.25,
              borderRadius: 999,
              bgcolor: 'rgba(219, 209, 255, 0.5)',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: 'rgba(11, 11, 11, 0.65)',
            }}
          >
            {entry.affiliation}
          </Box>
        )}
        <Typography
          sx={{
            ml: 'auto',
            fontSize: '0.78rem',
            color: 'rgba(11, 11, 11, 0.35)',
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
          mb: hasContactBadges ? 1 : 0,
        }}
      >
        {entry.message}
      </Typography>
      {hasContactBadges && (
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
          {entry.email_display && (
            <Box sx={CONTACT_BADGE_SX}>
              <Box component="span" sx={{ fontWeight: 700 }}>이메일</Box>
              <Box
                component="a"
                href={`mailto:${entry.email_display}`}
                sx={{ color: 'inherit' }}
              >
                {entry.email_display}
              </Box>
            </Box>
          )}
          {entry.sns_account && (
            <Box sx={CONTACT_BADGE_SX}>
              <Box component="span" sx={{ fontWeight: 700 }}>sns계정</Box>
              <Box component="span" sx={{ color: 'inherit' }}>
                {entry.sns_account}
              </Box>
            </Box>
          )}
        </Stack>
      )}
    </Box>
  );
}

export default GuestbookEntry;
