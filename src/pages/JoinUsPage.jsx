import { ArrowLeft } from "lucide-react";
import JoinUs from "../components/JoinUs/JoinUs";
import { joinUs } from "../data/siteData";
import "./JoinUsPage.css";

export default function JoinUsPage({ onBack }) {
  return (
    <div className="joinus-page">
      <div className="joinus-page__topbar container">
        <button className="joinus-page__back" onClick={onBack}>
          <ArrowLeft size={16} />
          Retour au site
        </button>
      </div>
      <JoinUs joinUs={joinUs} />
    </div>
  );
}
