import Header from "@/components/Header";
import HeroStory from "@/components/HeroStory";
import FeaturedStories from "@/components/FeaturedStories";
import FeatureSpread from "@/components/FeatureSpread";
import IssueSection from "@/components/IssueSection";
import QuoteSection from "@/components/QuoteSection";
import LatestStories from "@/components/LatestStories";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="grain min-h-screen bg-paper text-ink antialiased">
      <Header />
      <main>
        <HeroStory />
        <FeaturedStories />
        <FeatureSpread />
        <IssueSection />
        <QuoteSection />
        <LatestStories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
