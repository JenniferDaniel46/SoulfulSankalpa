//////// example offering template
const example = [
  //////// vvvvv copy below this line for new studio or location  vvvvv ////////////////
  {
  title: "name of gym or location",
  address: "address of class",
  url: "https://www.website-of-location.com",
  classes: [
    //////// vvvvv copy below this line for new class type vvvvv ///////////////
    {
      name: "name of class 1",
      description: `description of class 1`,
    },
    /////// ^^^^^ copy above this line for new class type ^^^^^ ////////////////
    {
      name: "name of class 2",
      description: `description of class 2`
    },
  ],
  schedule: [
    /////// vvvvv copy below this line for new class time or schedule vvvvv /////////////////
    {
      day: "day of class ex Monday - day must be capitalized and singular",
      time: "10:00am",
      name: "name of class this must exactly match the name of the class entered in with the desription for the description to be tied to this class",
    },
    ////// ^^^^^ copy above this line for new class time or schedule ^^^^ //////////////
  ]
},
//////// ^^^^^ copy above this line for new studio or location ^^^^^ //////////////////
]

////////// vvv List of offerings vvv /////////////
export const offerings = [

  {
    title: "Esporta Fitnesss",
    address: "3301 E Bell Rd Phoenix, AZ 85032",
    url: "",
    classes: [
      {
        name: "All Levels Practice",
        description: " Available for Esporta and LA Fitness members: Suitable for all levels of experience, beginners welcome! We explore poses for extended time with attention on the breath, alignment and the sensations of the body. Deeper and more advanced expressions of the pose will be offered but not required for practice.",
      }
    ],
    schedule: [
      {
        day: "Monday",
        time: "9:45am",
        name: "All Levels Practice"
      },
      {
        day: "Wednesday",
        time: "9:45am",
        name: "All Levels Practice"
      }
    ]
  },
  {
    title: "Healing Space Yoga Studio",
    address: "8765 W. Kelton Ln., Peoria, AZ, 85382, US",
    url: "https://azhealingspace.com/schedule/",
    classes: [{
      name: "Yoga Nidra and Sound Bath",
      description: `Yoga Nidra is translated as “Yogic Sleep” and is an ancient meditation practice. This meditation/relaxation technique uses a mix of somatic and cognitive techniques to address a wide range of conditions. Sound healing also offers profound benefits to the body, mind and spirit.
      It assists to balance both hemispheres of the brain, reduce stress and anxiety, increase focus and mental clarity. These practices individually do wonders for the mind and body. Together they can create an amazing practice to help invite more peace, clarity and calm not only into your day but when practiced regularly, we can feel these benefits in the long term as well.
      `,
    },
    {
      name: "Slow Flow",
      description: "Practice with intention in this slow flow class. We warm up the body and then move through the flow slowly like a moving meditation. Let the transitions from one pose to the next be fluid and intentional. Great practice for all levels of experience.",
    },
    {
      name: "Power Flow",
      description: "Flow style class that builds strength and flexibility. Designed to be challenging yet accessible, movement combines breath with flowing sequences, as well as time in poses to build strength and find alignment. This class will allow you to leave feeling empowered and invigorated."
    },
    ],
    schedule: [
      {
        day: "Tuesday",
        time: "8:00am",
        name: "Power Flow",
      },
      {
        day: "Tuesday",
        time: "9:15am",
        name: "Yoga Nidra and Sound Bath",
      },
      {
        day: "Thursday",
        time: "6:00pm",
        name: "Slow Flow",
      }
    ]
  },
  {
    title: "Kula Yoga",
    address: "12240 N 51st Ave in Glendale, Arizona 85304",
    url: "https://www.kulayogaaz.com/schedule-1",
    classes: [
      {
        name: "Vinyasa Flow",
        description: "Vinyasa: This practice is best for experienced yogis; it is a more intermediate to advanced level of practice. Vinyasa uses breath to movement to flow through the practice as we move in a more vigorous way. This is a great practice to build strength, flexibility and increase your stamina. Classes are lightly heated around 80 degrees no higher than 85 degrees. "
      }
    ],
    schedule: [
      {
        day: "Wednesday",
        time: "4:30pm",
        name: "Vinyasa Flow",
      }
    ]
  },
  {
    title: "Yoga Pura",
    address: "15440 North 7th St  |  Phoenix, AZ 85022",
    url: "https://www.yogapura.com/schedule",
    classes: [
      {
        name: "Restorative and Yoga Nidra",
        description: `Restorative: This is a gentle, slow-paced class. In a restorative practice all poses are supported with props to allow the practitioner to release muscular effort and allow the body to be fully supported in the pose. This is a great practice for people with limited mobility, recovering from injury as well as a great addition to anyone’s regular practice.

        Yoga Nidra is translated as “Yogic Sleep” and is an ancient meditation practice. This meditation/relaxation technique uses a mix of somatic and cognitive techniques to address a wide range of conditions.
        Sound healing also offers profound benefits to the body, mind and spirit. It assists to balance both hemispheres of the brain, reduce stress and anxiety, increase focus and mental clarity.
        These practices individually do wonders for the mind and body. Together they can create an amazing practice to help invite more peace, clarity and calm not only into your day but when practiced regularly, we can feel these benefits in the long term as well.`,
      },
      {
        name: "Essential Basics",
        description: `Learn the foundation of your practice here. Focusing on the alignment, breath and posture of the pose as well as learning the philosophy of the practice.
        You’ll also learn basic meditation and breath practices and how to translate what you learn on the mat out into the world. It’s important to remember “basic” doesn’t always mean easy.
        You’ll encounter discomfort and begin to learn what it is to meet your edge in a pose and why its important to feel discomfort and how to ground yourself in those moments.`,
      },
      {
        name: "Vinyasa",
        description: "Vinyasa: This practice is best for experienced yogis; it is a more intermediate to advanced level of practice. Vinyasa uses breath to movement to flow through the practice as we move in a more vigorous way. This is a great practice to build strength, flexibility and increase your stamina. Classes are lightly heated around 80 degrees no higher than 85 degrees. "
      }
    ],
    schedule: [
      {
        day: "Friday",
        time: "6:00pm",
        name: "Restorative and Yoga Nidra"
      },
      {
        day: "Saturday",
        time: "9:00am",
        name: "Essential Basics"
      },
      {
        day: "Sunday",
        time: "9:00am",
        name: "Vinyasa"
      },
    ]
  },
]

export interface Offer {
  title: string,
  address: string,
  url: string,
  classes: {name: string, description: string}[],
  schedule: {day: string, time: string, name:string}[]
  day: string,
  description?: string,
  name: string,
  time: string,
}