import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="welcome-text display-4 mb-4">메모메이트에 오신 것을 환영합니다</h1>
      <br/>
      <br/>
      <p className="welcome2-text lead mb-4">당신의 메모를 보호하고, 아이디어를 기록하세요.</p>
      <Link href='/sign-in'>시작하기</Link>
    </div>
  );
}