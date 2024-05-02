import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { auth } from "@clerk/nextjs/server";
import '../styles/homepage.css'; // 새로운 CSS 파일 import

const HomePage = () => {
  const { userId } = auth();

  return (
    <Container fluid className="homepage-container">
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} className="text-center">
          <h1 className="welcome-text display-4 mb-4">메모메이트에 오신 것을 환영합니다</h1>
          <br/>
          <br/>
          <p className="welcome2-text lead mb-4">당신의 메모를 보호하고, 아이디어를 기록하세요.</p>  
          {userId ? (
            <Link href="/memolist">시작하기</Link>
          ) : (
            <Link href="/sign-in">시작하기</Link>
          )}     
          
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
