import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Alert from '@mui/material/Alert';
import SendIcon from '@mui/icons-material/Send';

/** 방명록에서 고를 수 있는 긍정적이고 귀여운 이모지 목록 */
const EMOJI_OPTIONS = ['😊', '🎉', '👍', '🌟', '💚', '🙌', '✨', '🥳'];

/** 방명록 내용 최대 글자 수 */
const MESSAGE_MAX_LENGTH = 500;

/** 방명록 포인트 컬러 (이미지 기준) */
const POINT_COLOR = '#7b45ff';

/** 입력 필드 공통 스타일 (라벤더 카드 위에서 흰색 배경으로 가독성 확보) */
const FIELD_SX = {
  '& .MuiOutlinedInput-root': { borderRadius: '8px' },
  '& .MuiInputBase-root': { bgcolor: 'rgba(255, 255, 255, 0.75)' },
  '& .MuiInputBase-input': { color: 'text.primary' },
  '& .MuiInputBase-input::placeholder': { color: 'rgba(11, 11, 11, 0.35)', opacity: 1 },
  '& .MuiInputLabel-root': { color: 'rgba(11, 11, 11, 0.4)' },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(11, 11, 11, 0.18)',
  },
  /** focus(클릭) 상태: 테두리·포커스 링을 포인트 컬러로 표시 */
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: POINT_COLOR,
    borderWidth: 2,
  },
  '& .MuiInputLabel-root.Mui-focused': { color: POINT_COLOR },
};

/**
 * GuestbookForm 컴포넌트
 *
 * 방명록 입력 폼. 이름(빈 값이면 익명), 내용(필수), 소속/직업(선택),
 * 이메일/sns계정(선택·기본 비공개), 이모티콘 선택으로 구성된다.
 * "이메일을 방명록에 공개합니다" 체크박스를 선택한 경우에만 이메일이 목록에 노출된다.
 *
 * Props:
 * @param {function} onSubmit - 방명록 등록 핸들러 (payload) => Promise<void> [Required]
 *   payload: { name, message, affiliation, email, emoji, snsAccount, isEmailPublic }
 *
 * Example usage:
 * <GuestbookForm onSubmit={handleCreate} />
 */
function GuestbookForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [email, setEmail] = useState('');
  const [snsAccount, setSnsAccount] = useState('');
  const [isEmailPublic, setIsEmailPublic] = useState(false);
  const [emoji, setEmoji] = useState('😊');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message.trim()) return;
    setStatus('submitting');
    try {
      await onSubmit({ name, message, affiliation, email, emoji, snsAccount, isEmailPublic });
      setName('');
      setMessage('');
      setAffiliation('');
      setEmail('');
      setSnsAccount('');
      setIsEmailPublic(false);
      setEmoji('😊');
      setStatus('success');
      window.setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('error');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {status === 'success' && (
          <Alert severity="success">방명록이 등록되었습니다. 감사합니다!</Alert>
        )}
        {status === 'error' && (
          <Alert severity="error">
            등록에 실패했습니다. 잠시 후 다시 시도해 주세요.
          </Alert>
        )}

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="이름 (비워두면 익명)"
              size="small"
              fullWidth
              value={name}
              onChange={(event) => setName(event.target.value)}
              slotProps={{ htmlInput: { maxLength: 40 } }}
              sx={FIELD_SX}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="소속 / 직업 (선택)"
              size="small"
              fullWidth
              value={affiliation}
              onChange={(event) => setAffiliation(event.target.value)}
              slotProps={{ htmlInput: { maxLength: 60 } }}
              sx={FIELD_SX}
            />
          </Grid>
        </Grid>

        <Box>
          <Typography
            sx={{
              fontSize: '0.9rem',
              fontWeight: 700,
              color: 'text.primary',
              mb: 0.75,
            }}
          >
            이모티콘
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
                  borderColor: POINT_COLOR,
                  '&:hover': { bgcolor: 'accents.blue' },
                },
              },
            }}
          >
            {EMOJI_OPTIONS.map((item) => (
              <ToggleButton key={item} value={item} aria-label={`이모티콘 ${item}`}>
                {item}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Box>
          <TextField
            placeholder="방명록을 남겨주세요."
            size="small"
            fullWidth
            required
            multiline
            minRows={3}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            slotProps={{ htmlInput: { maxLength: MESSAGE_MAX_LENGTH } }}
            sx={FIELD_SX}
          />
          <Typography sx={{ fontSize: '0.75rem', color: 'rgba(11, 11, 11, 0.5)', mt: 0.5 }}>
            {message.length} / {MESSAGE_MAX_LENGTH}
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="이메일 (선택)"
              size="small"
              type="email"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              slotProps={{ htmlInput: { maxLength: 254 } }}
              sx={FIELD_SX}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="sns계정 (선택)"
              size="small"
              fullWidth
              value={snsAccount}
              onChange={(event) => setSnsAccount(event.target.value)}
              slotProps={{ htmlInput: { maxLength: 100 } }}
              sx={FIELD_SX}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isEmailPublic}
                onChange={(event) => setIsEmailPublic(event.target.checked)}
                size="small"
                sx={{
                  color: 'rgba(11, 11, 11, 0.35)',
                  '&.Mui-checked': { color: POINT_COLOR },
                }}
              />
            }
            label="이메일을 방명록에 공개합니다."
            sx={{ ml: 0, '& .MuiFormControlLabel-label': { fontSize: '0.82rem', color: 'rgba(11, 11, 11, 0.45)' } }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={status === 'submitting' || !message.trim()}
            endIcon={<SendIcon />}
            sx={{
              fontWeight: 700,
              borderRadius: 999,
              px: 3,
              bgcolor: 'rgba(123, 69, 255, 0.12)',
              color: POINT_COLOR,
              '&:hover': { bgcolor: POINT_COLOR, color: '#ffffff' },
              '&.Mui-disabled': {
                bgcolor: 'rgba(11, 11, 11, 0.15)',
                color: 'rgba(11, 11, 11, 0.4)',
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
