"use client";

// Shared modules
import { Button } from "@haru/ui";
import { useEffect } from "react";

export default function Page(): JSX.Element {
  useEffect(() => {
    document.documentElement.classList.add("light");
  }, []);

  return (
    <main>
      <Button>디자인 토큰 테스트 버튼</Button>
    </main>
  );
}
