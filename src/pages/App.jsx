import LinksSection from "../components/LinksSection";
import ProfileSection from "../components/ProfileSection";
import SlackIcon from "../assets/slack.svg";
import GitHub from "../assets/github.svg";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <div className="container">
        <ProfileSection />
        <LinksSection />
        <div className="flex items-center justify-center space-x-4 mt-10">
          <img src={SlackIcon} alt="" className="cursor-pointer" />
          <img src={GitHub} alt="" className="cursor-pointer" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
