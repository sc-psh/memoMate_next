"use client"

import Link from 'next/link';
import { Container, Button, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

interface Memo {
  id: number;
  title: string;
  content: string;
}

const MemoListPage = () => {
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    console.log('Fetching memos...');
    fetch("http://localhost:5000/api/memos")
      .then((response) => {
        console.log('response memos:', response);
        return response.json();
      })
      .then((data: Memo[]) => {
        console.log('Received memos:', data);
        setMemos(data);
      })
      .catch((error) => console.error("Error fetching memos:", error));
  }, []);

  const handleMemoClick = (memoId: number) => {
    // 페이지 이동 로직
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">My Memo</h2>
      {memos.map((memo: Memo, index: number) => (
        <div key={memo.id} className="memo-post">
          <Card className="mb-3">
            <Card.Body>
              <h3 className="post-title">제목 : {memo.title}</h3>
              <p className="post-content">내용 : {memo.content}</p>
              <br/>
              <Link href={`/memo-detail/${memo.id}`}>
                <Button variant="primary">자세히 보기</Button>
              </Link>
            </Card.Body>
          </Card>
          {index !== memos.length - 1 && <hr />} {/* 마지막 메모가 아닐 경우에만 구분선 추가 */}
        </div>
      ))}
      <style jsx>{`
        .memo-post {
          margin-bottom: 30px;
        }
        .post-title {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .post-content {
          line-height: 1.6;
        }
      `}</style>
    </Container>
  );
};

export default MemoListPage;
