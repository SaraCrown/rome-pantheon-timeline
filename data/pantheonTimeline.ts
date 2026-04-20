export type TimelineItem = {
  id: string;
  date: string;
  title: string;
  description: string;
  category: "construction" | "history" | "restoration" | "discovery";
  diagram?: string;
  details?: {
    architecture?: string[];
    historicalContext?: string[];
    significance?: string;
  };
};

export const pantheonTimeline: TimelineItem[] = [
  {
    id: "27bc",
    date: "25–27 BC",
    title: "A Temple for a New Empire",
    category: "construction",
    description:
      "Built under Marcus Vipsanius Agrippa during the rule of Augustus. The Pantheon begins not as a masterpiece, but as state messaging in architectural form.",
    details: {
      architecture: [
        "Likely a traditional rectangular Roman temple",
        "Columned façade, raised podium, timber roof",
        "Dedicated to 12 Roman gods + the emperor",
      ],
      historicalContext: [
        "Rome has just become an empire after centuries of civil war",
        "Augustus is using architecture as propaganda",
        "Temples = political stability made visible in stone",
      ],
      significance:
        "The Pantheon begins as a symbol of a new political order, transforming Rome's architectural landscape.",
    },
  },
  {
    id: "80ad",
    date: "80 AD",
    title: "Fire and Instability Beneath the Surface",
    category: "history",
    description:
      "The original temple is destroyed in a major fire. The Pantheon becomes an idea that refuses to die, even when buildings do.",
    details: {
      architecture: [
        "Temporary rebuilds come and go",
        "No stable surviving design",
        "Early Roman concrete experimentation begins quietly in the background",
      ],
      historicalContext: [
        "Rome is growing rapidly, dense, and fragile",
        "Fires are common in wooden urban structures",
        "Emperors are short-lived",
        "Architecture becomes more experimental out of necessity",
      ],
      significance: "A pivotal moment where necessity drives architectural innovation.",
    },
  },
  {
    id: "118-125ad",
    date: "118–125 AD",
    title: "Hadrian's Architectural Revolution",
    category: "construction",
    description:
      "Rebuilt under Emperor Hadrian. This is the turning point where everything changes. Rome is now shaping gravity itself.",
    details: {
      architecture: [
        "Perfect sphere contained inside a cylinder (cosmos in built form)",
        "The largest unreinforced concrete dome ever built",
        "Concrete intentionally structured: heavy at base, lightweight volcanic aggregates at top",
        "Wall thickness decreases as height increases",
        "9-meter oculus opening at dome's center—the only source of direct light",
        "Coffered dome with recessed geometric panels reducing weight while creating visual depth",
        "Exterior: traditional Greek temple façade; Interior: radical Roman concrete dome space",
      ],
      historicalContext: [
        "Emperors claim divine authority",
        "The building literally opens to the heavens",
        "Power is now framed as cosmic order",
        "Rome is outgrowing Greek architectural influence",
      ],
      significance:
        "An engineering and philosophical masterpiece that defines what Roman architecture can achieve. The oculus functions as solar time indicator, ventilation system, and structural stress relief.",
    },
  },
  {
    id: "608ad",
    date: "608 AD",
    title: "Survival Through Transformation",
    category: "history",
    description:
      "Under Pope Boniface IV, the Pantheon is converted into Santa Maria ad Martyres. Christianity does not erase the building—it inherits it.",
    details: {
      architecture: [
        "Converted into Santa Maria ad Martyres",
        "Minimal structural alteration",
        "Christian altar introduced inside pagan geometry",
      ],
      historicalContext: [
        "Many Roman temples are being destroyed or repurposed",
        "The Pantheon survives because it becomes useful to the new religion",
        "A unique case of religious and cultural continuity",
      ],
      significance: "The building's adaptability ensures its survival through one of history's greatest religious transformations.",
    },
  },
  {
    id: "renaissance",
    date: "1300s–1600s",
    title: "Renaissance — Rediscovery of Perfection",
    category: "discovery",
    description:
      "Architects and artists return to Rome's ancient ruins. The Pantheon becomes a design obsession for Raphael and others. The Pantheon becomes proof that the ancient world understood perfection.",
    details: {
      architecture: [
        "Central-plan churches inspired by its geometry",
        "Domes become symbols of Renaissance harmony",
        "Perfect proportions studied and replicated",
      ],
      historicalContext: [
        "The Renaissance is trying to revive 'lost' Roman knowledge",
        "Classical ideals are being reexamined and emulated",
      ],
      significance:
        "The Pantheon influences an entire era of architectural thought and becomes the gold standard for Renaissance design.",
    },
  },
  {
    id: "baroque",
    date: "1600s",
    title: "Bernini's Intervention",
    category: "restoration",
    description:
      "Architect Gian Lorenzo Bernini adds two bell towers to the roofline. The public rejects it, calling them 'donkey ears'—seen as breaking classical harmony.",
    details: {
      architecture: [
        "Twin towers added to the roofline",
        "Intended to 'complete' the façade visually",
      ],
      historicalContext: [
        "Baroque Rome is about drama and reinterpretation",
        "Classical restraint is no longer the goal",
        "Visual impact becomes the priority",
      ],
      significance:
        "An attempt to reinterpret the Pantheon through a new aesthetic lens—ultimately rejected by public consensus.",
    },
  },
  {
    id: "1883",
    date: "1883",
    title: "Restoration of the Original Silhouette",
    category: "restoration",
    description:
      "The bell towers are removed. The façade returns to Hadrian's intended proportions, with clean classical geometry restored.",
    details: {
      architecture: [
        "Façade returns to Hadrian's intended proportions",
        "Clean classical geometry restored",
        "Towers completely removed",
      ],
      historicalContext: [
        "19th-century Europe is obsessed with 'authentic antiquity'",
        "The goal becomes preservation, not reinterpretation",
      ],
      significance:
        "A conscious choice to prioritize historical authenticity over contemporary artistic vision.",
    },
  },
  {
    id: "modern",
    date: "1900s–Present",
    title: "A Living Architectural Reference",
    category: "history",
    description:
      "Still a functioning church, a monument of Roman engineering, and a global reference point for dome construction. Unlike most ancient structures, the Pantheon was never replaced—it kept being reinterpreted.",
    details: {
      architecture: [
        "Still a functioning church",
        "A monument of Roman engineering",
        "Global reference point for dome construction",
      ],
      historicalContext: [
        "Continues to influence modern architecture",
        "Studied by engineers and architects worldwide",
        "Adapts to modern needs while preserving historical integrity",
      ],
      significance:
        "A timeless structure that bridges ancient wisdom with contemporary understanding, proving that great design transcends time.",
    },
  },
];