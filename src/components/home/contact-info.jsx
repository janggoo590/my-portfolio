import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import emailIcon from '../../assets/icons/email-icon.png';

/**
 * 연락처 정보
 * jange7964@gmail.com 는 기획안에 명시된 공개 이메일.
 * SNS 링크는 실제 주소로 교체해서 사용한다. (네이버 URL 은 자리표시자)
 */
const CONTACT_EMAIL = 'jange7964@gmail.com';
const SOCIAL_LINKS = [
  {
    key: 'github',
    label: 'GitHub',
    href: 'https://github.com/janggoo590',
    icon: <GitHubIcon fontSize="small" />,
    brandColor: '#24292f',
  },
  {
    key: 'naver',
    label: '네이버',
    href: 'https://blog.naver.com',
    icon: (
      <Box component="span" sx={{ fontWeight: 800, fontSize: '0.85rem', lineHeight: 1 }}>
        N
      </Box>
    ),
    brandColor: '#03c75a',
  },
];

/**
 * ContactInfo 컴포넌트
 *
 * Contact 섹션의 연락처 영역. 이메일을 아이콘 + 텍스트로 정렬해 보여주고(복사 버튼 포함),
 * 그 아래에 동그란 SNS 아이콘 버튼(GitHub, 네이버)을 나란히 배치한다.
 * 파란색 계열 포인트를 절제해서 사용하고, 과한 장식은 피한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ContactInfo />
 */
function ContactInfo() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 1800);
    } catch {
      /* 클립보드 접근 불가 시 무시 */
    }
  };

  return (
    <Stack spacing={1.5}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
        <Box component="img" src={emailIcon} alt="" sx={{ width: 20, height: 20, display: 'block' }} />
        <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.95rem', md: '1rem' }, color: 'text.primary' }}>
          이메일 :{' '}
          <Box
            component="a"
            href={`mailto:${CONTACT_EMAIL}`}
            sx={{ color: 'text.primary', textDecoration: 'none' }}
          >
            {CONTACT_EMAIL}
          </Box>
        </Typography>
        <Tooltip title={isCopied ? '복사됨' : '이메일 복사'}>
          <IconButton
            onClick={handleCopy}
            size="small"
            aria-label="이메일 주소 복사"
            sx={{ color: 'text.primary' }}
          >
            {isCopied ? (
              <CheckIcon fontSize="small" />
            ) : (
              <ContentCopyIcon fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      <Stack direction="row" spacing={1}>
        {SOCIAL_LINKS.map((social) => (
          <Tooltip key={social.key} title={social.label}>
            <IconButton
              component="a"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              sx={{
                width: 34,
                height: 34,
                bgcolor: '#ffffff',
                color: social.brandColor,
                border: '1px solid rgba(11, 11, 11, 0.2)',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(11, 11, 11, 0.05)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {social.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Stack>
    </Stack>
  );
}

export default ContactInfo;
