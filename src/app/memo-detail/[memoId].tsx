"use client"

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MemoDetailPage = () => {
  const router = useRouter();
  const { memoId } = router.query;
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    if (memoId) {
      // memoId를 사용하여 해당 메모의 정보를 가져오는 API 호출
      fetch(`http://localhost:5000/api/memos/${memoId}`)
        .then(response => response.json())
        .then(data => setMemo(data))
        .catch(error => console.error('Error fetching memo:', error));
    }
  }, [memoId]);

  return (
    <div>
      <h1>Memo Detail Page</h1>
      {memo && (
        <div>
          <h2>Title: {memo.title}</h2>
          <p>Content: {memo.content}</p>
        </div>
      )}
    </div>
  );
};

export default MemoDetailPage;
