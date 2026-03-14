import React from "react";
import { Layout } from "../../layouts/Layout";
import { ImpressionOne } from "../../components/impressions/ImpressionOne";
import { TeamMember } from "../../components/teams/TeamMember";
import man1 from "../../assets/img/team/team5/man1.jpg";
import man2 from "../../assets/img/team/team5/man2.jpg";
import man3 from "../../assets/img/team/team5/man3.jpg";
import man4 from "../../assets/img/team/team5/man4.jpg";
import man5 from "../../assets/img/team/team5/man5.jpg";
import man6 from "../../assets/img/team/team5/man6.jpg";
import man7 from "../../assets/img/team/team5/man7.jpg";
import man8 from "../../assets/img/team/team5/man8.jpg";

export const Team = () => {
  const teamMembers = [
    {
      delay: 0.3,
      src: man1,
      href: "/team-details",
      title: "Miranda H. Halim",
      designation: "Founder",
    },
    {
      delay: 0.4,
      src: man2,
      href: "/team-details",
      title: "Teresa L. Marion",
      designation: "Financial Officer",
    },
    {
      delay: 0.5,
      src: man3,
      href: "/team-details",
      title: "Donna D. Dicken",
      designation: "Head of Customer Relations",
    },
    {
      delay: 0.6,
      src: man4,
      href: "/team-details",
      title: "Rosalina D. William",
      designation: "Chief Executive Officer",
    },
    {
      delay: 0.3,
      src: man5,
      href: "/team-details",
      title: "Taylor Davis",
      designation: "Chief Technology Officer (CTO)",
    },
    {
      delay: 0.4,
      src: man6,
      href: "/team-details",
      title: "Riley Taylor",
      designation: "Content Strategist",
    },
    {
      delay: 0.5,
      src: man7,
      href: "/team-details",
      title: "Jordan Brown",
      designation: "Marketing Director",
    },
    {
      delay: 0.6,
      src: man8,
      href: "/team-details",
      title: "Parker Martinez",
      designation: "Sales Director",
    },
  ];

  return (
    <Layout breadcrumbTitle={"Our Team"} breadcrumbSubtitle={"Team"}>
      {/* team members */}
      <div className="td-team-area pt-140 pb-60">
        <div className="container">
          <div className="row">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>

      {/* impression */}
      <ImpressionOne />
    </Layout>
  );
};
