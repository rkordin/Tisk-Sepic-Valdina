import React from "react";
import { TeamOneItem } from "./TeamOneItem";
import teamMember1 from "../../assets/img/team/01.png";
import teamMember2 from "../../assets/img/team/02.png";
import teamMember3 from "../../assets/img/team/03.png";
import teamMember4 from "../../assets/img/team/04.png";
import { useCmsContent } from "../../hooks/useCmsContent";

const TEAM_IMAGES = [teamMember1, teamMember2, teamMember3, teamMember4];

const DEFAULT_TEAM = {
  section_label: "Ekipa",
  heading: "Naša ekipa",
  members: [
    { name: "Tjaša Šepic", designation: "Direktorica" },
    { name: "Danijela Klemenčič", designation: "Direktorica kakovosti" },
    { name: "Vanja Potočar", designation: "Računovodstvo" },
    { name: "Katja Kren", designation: "Administracija" },
  ],
};

export const TeamOne = () => {
  const { content } = useCmsContent("home");
  const team = content?.team || DEFAULT_TEAM;
  const members = (team.members || DEFAULT_TEAM.members).map((m, i) => ({
    delay: `${0.3 + i * 0.1}s`,
    src: TEAM_IMAGES[i] || TEAM_IMAGES[0],
    title: m.name,
    designation: m.designation,
  }));

  return (
    <div className="td-team-area td-grey-bg pt-140 pb-100">
      <div className="container">
        <div className="row">
          {/* header */}
          <div className="col-12">
            <div
              className="td-team-title-wrap text-center mb-95 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10" data-editable="team-label">
                {team.section_label || "Ekipa"}
              </span>
              <h2 className="td-section-title" data-editable="team-heading">
                {team.heading || "Naša ekipa"}
              </h2>
            </div>
          </div>

          {/* Team members */}
          {members.map((member, index) => (
            <TeamOneItem key={index} index={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};
