import React from "react";
import { linkData } from "../../linkData";
import Link from "./Link";

const LinksSection = () => {
  const linksLists = linkData.map((link) => (
    <Link
      key={link.id}
      url={link.url}
      id={link.id}
      name={link.name}
      subText={link.subText}
    />
  ));

  return <div className="space-y-4 mt-10">{linksLists}</div>;
};

export default LinksSection;
