import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GuestbookEntry from './guestbook-entry.jsx';

/** 방명록 포인트 컬러 (이미지 기준) */
const POINT_COLOR = '#7b45ff';

/** 모바일/태블릿에서 펼쳤을 때 한 페이지에 보여줄 개수(최신 1개 제외) */
const PAGE_SIZE = 4;

/**
 * GuestbookList 컴포넌트
 *
 * 방명록 목록 영역. 로딩 중에는 스켈레톤, 비어 있으면 안내 문구를 보여준다.
 * 데스크톱에서는 전체 목록을 그대로 나열하지만, 모바일/태블릿(md 미만)에서는
 * 최신 글 1개만 먼저 보여주고 '더보기' 버튼으로 나머지를 펼친다.
 * 펼친 뒤에는 나머지 글을 4개 단위로 나눠 번호 페이지네이션으로 넘겨볼 수 있다.
 *
 * Props:
 * @param {Array<object>} entries - 방명록 항목 배열 [Required]
 * @param {boolean} isLoading - 로딩 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <GuestbookList entries={entries} isLoading={isLoading} />
 */
function GuestbookList({ entries, isLoading = false }) {
  const theme = useTheme();
  const isCompact = useMediaQuery(theme.breakpoints.down('md'));
  const [isExpanded, setIsExpanded] = useState(false);
  const [page, setPage] = useState(1);

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

  const [latest, ...rest] = entries;
  const showCollapse = isCompact && rest.length > 0;
  const pageCount = Math.ceil(rest.length / PAGE_SIZE);
  const pagedRest = rest.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
    setPage(1);
  };

  return (
    <Stack spacing={1.5}>
      <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(11, 11, 11, 0.7)' }}>
        방명록 {entries.length}개
      </Typography>

      <GuestbookEntry entry={latest} />

      {showCollapse && isExpanded && pagedRest.map((entry) => (
        <GuestbookEntry key={entry.id} entry={entry} />
      ))}

      {!showCollapse && rest.map((entry) => (
        <GuestbookEntry key={entry.id} entry={entry} />
      ))}

      {showCollapse && (
        <Button
          onClick={handleToggle}
          endIcon={
            <ExpandMoreIcon
              sx={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
            />
          }
          sx={{
            alignSelf: 'center',
            fontWeight: 700,
            color: POINT_COLOR,
            textTransform: 'none',
          }}
        >
          {isExpanded ? '접기' : `더보기 (${rest.length})`}
        </Button>
      )}

      {showCollapse && isExpanded && pageCount > 1 && (
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_event, value) => setPage(value)}
          size="small"
          sx={{
            alignSelf: 'center',
            '& .MuiPaginationItem-root.Mui-selected': {
              bgcolor: POINT_COLOR,
              color: '#ffffff',
              '&:hover': { bgcolor: POINT_COLOR },
            },
          }}
        />
      )}
    </Stack>
  );
}

export default GuestbookList;
