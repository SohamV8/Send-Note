import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import {
  IconUsersGroup,
  IconMessages,
  IconBell,
  IconBrain,
} from "@tabler/icons-react";

import workshop from "../../assets/workshop.jpg";
import Community from "../../assets/community.jpg";
import Group from "../../assets/Group.jpg";
import Campus from "../../assets/Campus.jpg";

const items = [
  {
    image: workshop,
    title: "Emotional Well-being Workshop",
    description:
      "Access guided resources, workshops, and events focused on mental health support.",
    className: "md:col-span-2",
    icon: <IconBrain className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    image: Community,
    title: "Community Building",
    description:
      "Connect with peers through curated groups based on shared interests and goals.",
    icon: <IconUsersGroup className="h-5 w-5 text-green-600 dark:text-green-400" />,
  },
  {
    image: Group,
    title: "Group Therapy",
    description:
      "Join moderated group conversations to share, reflect, and grow together.",
    icon: <IconMessages className="h-5 w-5 text-pink-600 dark:text-pink-400" />,
  },
  {
    image: Campus,
    title: "Campus Buzz",
    description:
      "Stay in the loop with real-time updates on clubs, societies, and campus-wide events.",
    className: "md:col-span-2",
    icon: <IconBell className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />,
  },
];

const BentoGridMain = () => {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem key={i} {...item} />
      ))}
    </BentoGrid>
  );
};

export default BentoGridMain;
