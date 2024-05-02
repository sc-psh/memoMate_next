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
    fetch("http://localhost:3000/api/memos")
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
    <>
      <Container className="py-4">
        <h2 className="mb-4">My Memo List</h2>
        {memos.map((memo: Memo) => (
          <Card
            key={memo.id}
            className="mb-3"
            onClick={() => handleMemoClick(memo.id)}
          >
            <Card.Body>
              <Card.Title>{memo.title}</Card.Title>
              <Card.Text>{memo.content}</Card.Text>
              <Link href={`/memo-detail/${memo.id}`}>
                <Button variant="primary">자세히 보기</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default MemoListPage;
