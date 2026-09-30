import { Header } from "@/components/Header";
import { HeroStory } from "@/components/HeroStory";
import { StoryGrid } from "@/components/StoryGrid";
import { FeatureStory } from "@/components/FeatureStory";
import { IssueSection } from "@/components/IssueSection";
import { QuoteSection } from "@/components/QuoteSection";
import { LatestStories } from "@/components/LatestStories";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroStory />
        <StoryGrid />
        <FeatureStory />
        <IssueSection />
        <QuoteSection />
        <LatestStories />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
