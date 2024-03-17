import Intro from "@/sections/Home/Intro";
import TopCategories from "@/sections/Home/TopCategories";
import TrendingProducts from "@/sections/Home/TrendingProducts";

export default function Home() {
  return (
    <main>
      <Intro />
      <TopCategories />
      <TrendingProducts className="mt-8" />
    </main>
  );
}
