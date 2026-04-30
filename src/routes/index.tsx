import { createFileRoute } from "@tanstack/react-router";
import { BananaHorrorGame } from "@/components/BananaHorrorGame";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "黄鬼" },
      {
        name: "description",
        content:
          "ポップで不気味な2Dホラー。りんごを5つ集めて、髪の生えたバナナから逃げ延びろ。WebAudio合成によるサウンドスケープ。",
      },
      { property: "og:title", content: "黄鬼" },
      {
        property: "og:description",
        content: "りんごを5つ集めて脱出するポップ・ホラーゲーム",
      },
    ],
  }),
});

function Index() {
  return <BananaHorrorGame />;
}
