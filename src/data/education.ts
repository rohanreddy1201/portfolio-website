export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: Honor[];
  activities: Activity[];
}

export const education: Education = {
  degree: "Master of Science – Computer Science (AI Specialization)",
  school: "Portland State University",
  location: "Portland, Oregon, United States",
  startDate: "Apr 2023",
  endDate: "Dec 2024",
  gpa: "3.82",
  honors: [
    { name: "Graduate Teaching Assistant – Reinforcement Learning" },
    { name: "LLM Research Project Contributor" },
    { name: "Mentored Junior Students in Reinforcement Learning" },
  ],
  activities: [
    { name: "Indian Student Association – Member" },
  ],
};
