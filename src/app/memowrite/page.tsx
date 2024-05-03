"use client"

import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const MemoFormPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newMemo = {
      title: title,
      content: content,
    };

    try {
      const response = await fetch("/api/memos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMemo),
      });
      const data = await response.json();
      console.log("새로운 메모가 성공적으로 추가되었습니다:", data);
    } catch (error) {
      console.error("새로운 메모를 추가하는 동안 오류가 발생했습니다:", error);
    }
  };

  return (
    <>
      <Container fluid className="d-flex justify-content-center align-items-center py-4">
        <div style={{ minWidth: '300px', maxWidth: '500px' }}>
          <h2 className="mb-4">새로운 메모 추가</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title" className="mb-3">
              <Form.Label>제목</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="제목을 입력하세요"
                style={{ minWidth: '300px' }}
              />
            </Form.Group>
            <Form.Group controlId="content" className="mb-3">
              <Form.Label>내용</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={handleContentChange}
                placeholder="내용을 입력하세요"
                style={{ minWidth: '300px' }}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                저장
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default MemoFormPage;
