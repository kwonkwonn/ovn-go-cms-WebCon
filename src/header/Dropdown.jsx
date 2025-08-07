function DropDown({ type }) {
  if (type === "file") {
    return (
      <div className="flex flex-col w-full bg-white">
        <button className="p-2 text-left text-black hover:bg-gray-100 border-b">
          새 파일
        </button>
        <button className="p-2 text-left text-black hover:bg-gray-100 border-b">
          파일 열기
        </button>
        <button className="p-2 text-left text-black hover:bg-gray-100 border-b">
          최근 파일
        </button>
        <button className="p-2 text-left text-black hover:bg-gray-100">
          저장
        </button>
      </div>
    );
  }

  if (type === "connection") {
    return (
      <div className="flex flex-col w-full bg-white">
        <button className="p-2 text-left text-black hover:bg-gray-100 border-b">
          새 연결
        </button>
        <button className="p-2 text-left text-black hover:bg-gray-100 border-b">
          연결 관리
        </button>
        <button className="p-2 text-left text-black hover:bg-gray-100 border-b">
          연결 테스트
        </button>
        <button className="p-2 text-left text-black hover:bg-gray-100">
          연결 끊기
        </button>
      </div>
    );
  }

  if (type === "tools") {
    return (
      <div className="flex flex-col w-full bg-white">
        <button className="p-2 text-left text-black hover:bg-gray-100 border-b">
          설정
        </button>
        <button className="p-2 text-left text-black hover:bg-gray-100 border-b">
          도구 모음
        </button>
        <button className="p-2 text-left text-black hover:bg-gray-100 border-b">
          플러그인
        </button>
        <button className="p-2 text-left text-black hover:bg-gray-100">
          도움말
        </button>
      </div>
    );
  }

  // 다른 타입에 대한 처리 로직을 추가할 수 있습니다.
  return null;
}

export default DropDown;
