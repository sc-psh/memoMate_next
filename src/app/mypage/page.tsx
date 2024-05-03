"use client"

import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const MyPage = () => {

  const [userid, setUserid] = useState("사용자 아이디");
  const [email, setEmail] = useState("example@example.com");
  const [password, setPassword] = useState("");

  const handleUpdate = (event) => {
    event.preventDefault();
    // 여기에서 사용자 정보를 업데이트하거나 API로 전송하는 등의 로직을 수행합니다.
    // 예를 들어, 서버로 사용자 정보를 전송하고 성공적으로 업데이트된 경우 홈 페이지로 이동할 수 있습니다.
    // router.push('/home'); // router.push 함수를 사용하여 페이지 이동
  };

  return (
    <>
      <Container className="py-4">
        <h2 className="mb-4">마이페이지</h2>
        <Form onSubmit={handleUpdate}>
          <Form.Group controlId="username">
            <Form.Label>사용자 이름</Form.Label>
            <Form.Control
              type="text"
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>이메일 주소</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>새로운 비밀번호</Form.Label>
            <Form.Control
              type="password"
              placeholder="새로운 비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>이름</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
            />
          </Form.Group>

          <Form.Group controlId="nickname">
            <Form.Label>닉네임</Form.Label>
            <Form.Control
              type="text"
              name="nickname"
              placeholder="닉네임를 입력하세요"
            />
          </Form.Group>

          <Form.Group controlId="gender">
            <Form.Label>성별</Form.Label>
            <Form.Control as="select" name="gender">
              <option value="">성별을 선택하세요</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            정보 업데이트
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default MyPage;
