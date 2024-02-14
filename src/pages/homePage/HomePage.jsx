import {
  Aside,
  ComplementaryAside,
  Navbar,
  Search,
  Posts,
  Videos,
} from "../../components";
import { posts } from "/public/fakeData";
import { useParams } from "react-router-dom";
import FriendsPage from "../FriendsPage/FriendsPage";
import Portfolio from "../Portfolio/Portfolio";
import Jobs from "../Jobs/Jobs";
import Contects from "../../components/Contects/Contects";
import PortfolioJob from "../../components/PortfolioJob/PortfolioJob";
import Settings from "../../components/Settings/Settings";
import Researches from "../Portfolio/components/researches";
import SkillesInfo from "../Portfolio/components/SkillesInfo";
import UserCV from "../Portfolio/components/cv";
import We from "../We/We";
import PolicyAndPrivacy from "../PolicyAndPrivacy/PolicyAndPrivacy";
import AccountSettings from "../AccountSettings/AccountSettings";

import { CategorizedPosts } from "/src/pages";
import { PrivacySettings } from "../../components/Settings/components";
import Notifcations from "../notifications/notifications";
// import Support from "../Support/Support";
// import { CategorizedPosts } from "../";  all these imports need to be fixed either this way or the one above

export default function HomePage() {
  const name = useParams().name;

  return (
    <div className="max-w-[1920px] m-auto">
      <Navbar />
      <section className="flex justify-between gap-2 lg:mx-4 p-1">
        <div className="hidden md:block">
          <Aside />
        </div>
        <main className="w-full">
          {name == "friends" ? (
            <FriendsPage activeTypeFriend={"allFriends"} />
          ) : name == "all-friends" ? (
            <FriendsPage activeTypeFriend={"suggestions"} />
          ) : name == "Followers" ? (
            <FriendsPage activeTypeFriend={"Followers"} />
          ) : name == "Following" ? (
            <FriendsPage activeTypeFriend={"Following"} />
          ) : name == "friend-request" ? (
            <FriendsPage activeTypeFriend={"request"} />
          ) : name == "profile" ? (
            <Portfolio />
          ) : name == "content-request" ? (
            <Jobs activeJobs={"content-request"} />
          ) : name == "job" ? (
            <Jobs activeJobs="job" />
          ) : name == "contect" ? (
            <Contects />
          ) : name == "portfolioJob" ? (
            <PortfolioJob />
          ) : name == "researches" ? (
            <Researches />
          ) : name == "skillesInfo" ? (
            <SkillesInfo />
          ) : name == "userCV" ? (
            <UserCV />
          ) : name == "videos" ? (
            <Videos data={posts} />
          ) : name == "we" ? (
            <We />
          ) : name == "accountSettings" ? (
            <AccountSettings />
          ) : name == "policyAndPrivacy" ? (
            <PolicyAndPrivacy />
          ) : // )
          // :
          // name == "support" ? (
          //   <Support />
          name == "policyAndPrivacy" ? (
            <PolicyAndPrivacy />
          ) : name == "privacySettings" ? (
            <PrivacySettings />
          ) : name == "policyAndPrivacy" ? (
            <PolicyAndPrivacy />
          ) : name == "userCV" ? (
            <UserCV />
          ) : name == "userCV" ? (
            <UserCV />
          ) : name == "friends" ? (
            <FriendsPage />
          ) : name == "search" ? (
            <Search />
          ) : name == "categorized-Posts" ? (
            <CategorizedPosts data={posts} />
          ) : name == "articles" ? (
            <CategorizedPosts data={posts} />
          ) : name == "news" ? (
            <CategorizedPosts data={posts} />
          ) : name == "summaries" ? (
            <CategorizedPosts data={posts} />
          ) : name == "notifcations" ? (
            <Notifcations />
          ) : (
            <Posts data={posts} />
          )}
        </main>
        <div className="hidden  b2-5xl">
          <ComplementaryAside />
        </div>
      </section>
    </div>
  );
}
