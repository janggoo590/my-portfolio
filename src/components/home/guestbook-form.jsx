import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Alert from '@mui/material/Alert';
import SendIcon from '@mui/icons-material/Send';

/** 방명록에서 고를 수 있는 긍정적이고 귀여운 이모지 목록 */
const EMOJI_OPTIONS = ['😊', '🎉', '👍', '🌟', '💚', '🙌', '✨', '🥳'];

/** 입력 필드 공통 스타일 (라벤더 카드 위에서 흰색 배경으로 가독성 확보) */
const FIELD_SX = {
  '& .MuiInputBase-root': { bgcolor: 'rgba(255, 255, 255, 0.75)' },
  '& .MuiInputLabel-root': { color: 'rgba(11, 11, 11, 0.7)' },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(11, 11, 11, 0.25)',
  },
  /** focus(클릭) 상태: 테두리·포커스 링을 어두운 라일락(secondary.dark)으로 표시 */
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'secondary.dark',
    borderWidth: 2,
  },
  '& .MuiInputLabel-root.Mui-focused': { color: 'secondary.dark' },
};

/**
 * GuestbookForm 컴포넌트
 *
 * 방명록 입력 폼. 이름(빈 값이면 익명), 내용(필수), 소속/직업(선택),
 * 이메일(선택·비공개 저장), 이모지 선택으로 구성된다.
 *
 * Props:
 * @param {function} onSubmit - 방명록 등록 핸들러 (payload) => Promise<void> [Required]
 *   payload: { name, message, affiliation, email, emoji }
 *
 * Example usage:
 * <GuestbookForm onSubmit={handleCreate} />
 */
function GuestbookForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [email, setEmail] = useState('');
  const [emoji, setEmoji] = useState('😊');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message.trim()) return;
    setStatus('submitting');
    try {
      await onSubmit({ name, message, affiliation, email, emoji });
      setName('');
      setMessage('');
      setAffiliation('');
      setEmail('');
      setEmoji('😊');
      setStatus('success');
      window.setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('error');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{ maxWidth: 480 }}>
        {status === 'success' && (
          <Alert severity="success">방명록이 등록되었습니다. 감사합니다!</Alert>
        )}
        {status === 'error' && (
          <Alert severity="error">
            등록에 실패했습니다. 잠시 후 다시 시도해 주세요.
          </Alert>
        )}

        <TextField
          label="이름 (비워두면 익명)"
          size="small"
          fullWidth
          value={name}
          onChange={(event) => setName(event.target.value)}
          slotProps={{ htmlInput: { maxLength: 40 } }}
          sx={FIELD_SX}
        />
        <TextField
          label="내용"
          size="small"
          fullWidth
          required
          multiline
          minRows={3}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          slotProps={{ htmlInput: { maxLength: 1000 } }}
          sx={FIELD_SX}
        />
        <TextField
          label="소속 / 직업 (선택)"
          size="small"
          fullWidth
          value={affiliation}
          onChange={(event) => setAffiliation(event.target.value)}
          slotProps={{ htmlInput: { maxLength: 60 } }}
          sx={FIELD_SX}
        />
        <TextField
          label="이메일 (선택)"
          size="small"
          type="email"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          helperText="비공개로 저장되며 방명록에 노출되지 않습니다."
          slotProps={{ htmlInput: { maxLength: 254 } }}
          sx={FIELD_SX}
        />

        <Box>
          <Typography
            sx={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'rgba(11, 11, 11, 0.7)',
              mb: 0.75,
            }}
          >
            이모지 선택
          </Typography>
          <ToggleButtonGroup
            value={emoji}
            exclusive
            onChange={(_event, value) => value && setEmoji(value)}
            sx={{
              flexWrap: 'wrap',
              gap: 0.5,
              '& .MuiToggleButton-root': {
                border: '1px solid rgba(11, 11, 11, 0.2)',
                borderRadius: '10px !important',
                bgcolor: 'rgba(255, 255, 255, 0.75)',
                fontSize: '1.1rem',
                px: 1.25,
                py: 0.5,
                '&.Mui-selected': {
                  bgcolor: 'accents.blue',
                  '&:hover': { bgcolor: 'accents.blue' },
                },
              },
            }}
          >
            {EMOJI_OPTIONS.map((item) => (
              <ToggleButton key={item} value={item} aria-label={`이모지 ${item}`}>
                {item}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Box>
          <Button
            type="submit"
            variant="contained"
            disabled={status === 'submitting' || !message.trim()}
            endIcon={<SendIcon />}
            sx={{
              fontWeight: 700,
              borderRadius: 999,
              px: 3,
              bgcolor: 'secondary.main',
              color: 'secondary.contrastText',
              '&:hover': { bgcolor: 'secondary.main', opacity: 0.9 },
              '&.Mui-disabled': {
                bgcolor: 'rgba(11, 11, 11, 0.45)',
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
          >
            {status === 'submitting' ? '등록 중...' : '방명록 남기기'}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default GuestbookForm;
