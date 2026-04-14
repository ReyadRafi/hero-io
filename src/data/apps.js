const APPS_DATA = [
  {
    id: 1,
    image: "https://play-lh.googleusercontent.com/NWRVVF6zXvmcqspJwdFOKcQG6OlsNwpMOxED_DgB6B2BBDeWwAeWZKZxGhgqU0LQVJU",
    title: "Forest: Focus For Productivity",
    companyName: "SEEKRTECH CO., LTD.",
    description:
      "Stay focused and be present. Forest provides an effective way to fight phone addiction. You can plant a virtual tree when you want to stay focused. This little tree will grow when you stay focused. If you cannot resist the temptation and leave the app, the tree will wither. With Forest, you can grow your own forest while getting things done!",
    size: 45.2,
    reviews: 312400,
    ratingAvg: 4.8,
    downloads: 9200000,
    ratings: [
      { name: "1 star", count: 1200 },
      { name: "2 star", count: 2400 },
      { name: "3 star", count: 8900 },
      { name: "4 star", count: 48000 },
      { name: "5 star", count: 251900 },
    ],
  },
  {
    id: 2,
    image: "https://placehold.co/300x300/059669/ffffff?text=SmPlan",
    title: "SmPlan: ToDo List With Reminder",
    companyName: "SmartDay Inc.",
    description:
      "SmPlan is your all-in-one productivity companion. Organize tasks, set reminders, and achieve your daily goals effortlessly. With its sleek interface and powerful features, SmPlan makes task management a joy rather than a chore.",
    size: 38.7,
    reviews: 198600,
    ratingAvg: 4.7,
    downloads: 8800000,
    ratings: [
      { name: "1 star", count: 980 },
      { name: "2 star", count: 1800 },
      { name: "3 star", count: 7200 },
      { name: "4 star", count: 42000 },
      { name: "5 star", count: 146620 },
    ],
  },
  {
    id: 3,
    image: "https://placehold.co/300x300/DC2626/ffffff?text=FLIP",
    title: "FLIP - Focus Timer For Study",
    companyName: "UIDesignLab",
    description:
      "FLIP is the best study timer app that helps you stay focused. Flip your phone face down and FLIP will start tracking your focused time. Set your study goals and see how much time you spend studying each day with detailed statistics.",
    size: 52.1,
    reviews: 245800,
    ratingAvg: 4.9,
    downloads: 9500000,
    ratings: [
      { name: "1 star", count: 450 },
      { name: "2 star", count: 1200 },
      { name: "3 star", count: 5600 },
      { name: "4 star", count: 38000 },
      { name: "5 star", count: 200550 },
    ],
  },
  {
    id: 4,
    image: "https://placehold.co/300x300/F59E0B/ffffff?text=Pomocat",
    title: "Pomocat - Cute Pomodoro Timer",
    companyName: "CatApp Studio",
    description:
      "Boost your productivity with adorable cats! Pomocat uses the Pomodoro Technique to help you manage your time effectively. Work in focused 25-minute intervals separated by short breaks, guided by your cute virtual cat companion.",
    size: 29.4,
    reviews: 87200,
    ratingAvg: 4.6,
    downloads: 4200000,
    ratings: [
      { name: "1 star", count: 600 },
      { name: "2 star", count: 1400 },
      { name: "3 star", count: 5800 },
      { name: "4 star", count: 22000 },
      { name: "5 star", count: 57400 },
    ],
  },
  {
    id: 5,
    image: "https://placehold.co/300x300/7C3AED/ffffff?text=TimePlanner",
    title: "Time Planner: Schedule & Tasks",
    companyName: "Avaz Inc.",
    description:
      "Time Planner is a powerful daily planner and schedule organizer. Plan your day hour by hour, track your time, and achieve a perfect work-life balance. Comes with beautiful themes, detailed statistics, and smart reminders.",
    size: 67.3,
    reviews: 156900,
    ratingAvg: 4.7,
    downloads: 7600000,
    ratings: [
      { name: "1 star", count: 780 },
      { name: "2 star", count: 1600 },
      { name: "3 star", count: 8200 },
      { name: "4 star", count: 40000 },
      { name: "5 star", count: 106320 },
    ],
  },
  {
    id: 6,
    image: "https://placehold.co/300x300/10B981/ffffff?text=MorningHabits",
    title: "Morning Habits - Daily Routine",
    companyName: "Leap Fitness Group",
    description:
      "Build powerful morning habits that transform your life! Morning Habits app helps you create and maintain a consistent morning routine. Track your daily habits, set streak goals, and watch yourself grow into a healthier, happier person.",
    size: 41.8,
    reviews: 203400,
    ratingAvg: 4.5,
    downloads: 8100000,
    ratings: [
      { name: "1 star", count: 1100 },
      { name: "2 star", count: 2800 },
      { name: "3 star", count: 12000 },
      { name: "4 star", count: 48000 },
      { name: "5 star", count: 139500 },
    ],
  },
  {
    id: 7,
    image: "https://placehold.co/300x300/0EA5E9/ffffff?text=FocusPlant",
    title: "Focus Plant: Pomodoro Forest",
    companyName: "Shenzhen Sunflower Inc.",
    description:
      "Focus Plant combines the Pomodoro Technique with a satisfying plant-growing simulation. Stay focused to grow beautiful plants and build your own garden. A perfect blend of productivity and relaxation.",
    size: 35.6,
    reviews: 119700,
    ratingAvg: 4.6,
    downloads: 5400000,
    ratings: [
      { name: "1 star", count: 700 },
      { name: "2 star", count: 1500 },
      { name: "3 star", count: 7400 },
      { name: "4 star", count: 28000 },
      { name: "5 star", count: 82100 },
    ],
  },
  {
    id: 8,
    image: "https://placehold.co/300x300/EF4444/ffffff?text=Alarmy",
    title: "Alarmy - Alarm Clock & Sleep",
    companyName: "Alar Labs Inc.",
    description:
      "The world's most annoying alarm app - in the best way! Alarmy forces you out of bed with unique missions: take a photo of a specific location, do math problems, shake your phone, or scan a barcode. Never oversleep again!",
    size: 78.2,
    reviews: 478300,
    ratingAvg: 4.7,
    downloads: 9800000,
    ratings: [
      { name: "1 star", count: 2100 },
      { name: "2 star", count: 3400 },
      { name: "3 star", count: 12000 },
      { name: "4 star", count: 58000 },
      { name: "5 star", count: 402800 },
    ],
  },
  {
    id: 9,
    image: "https://placehold.co/300x300/8B5CF6/ffffff?text=Notion",
    title: "Notion - Notes & Docs",
    companyName: "Notion Labs, Inc.",
    description:
      "Notion is the all-in-one workspace for notes, docs, databases, and project management. Whether you're a student organizing class notes or a team managing complex projects, Notion adapts to your needs beautifully.",
    size: 95.4,
    reviews: 892100,
    ratingAvg: 4.8,
    downloads: 15200000,
    ratings: [
      { name: "1 star", count: 3200 },
      { name: "2 star", count: 5600 },
      { name: "3 star", count: 18000 },
      { name: "4 star", count: 120000 },
      { name: "5 star", count: 745300 },
    ],
  },
  {
    id: 10,
    image: "https://placehold.co/300x300/F97316/ffffff?text=Todoist",
    title: "Todoist: To-Do List & Planner",
    companyName: "Doist Inc.",
    description:
      "Todoist is the world's #1 task manager and to-do list app. Capture and organize tasks the moment they pop into your head. Remember deadlines with reminders. Prioritize your tasks with due dates and priority levels.",
    size: 55.7,
    reviews: 654200,
    ratingAvg: 4.8,
    downloads: 12800000,
    ratings: [
      { name: "1 star", count: 1800 },
      { name: "2 star", count: 3200 },
      { name: "3 star", count: 15000 },
      { name: "4 star", count: 96000 },
      { name: "5 star", count: 538200 },
    ],
  },
  {
    id: 11,
    image: "https://placehold.co/300x300/14B8A6/ffffff?text=Headspace",
    title: "Headspace: Sleep & Meditation",
    companyName: "Headspace Inc.",
    description:
      "Headspace is your guide to mindfulness and meditation. With hundreds of guided sessions focused on sleep, stress, and focus, Headspace helps you build life-changing healthy habits in just a few minutes a day.",
    size: 112.3,
    reviews: 723500,
    ratingAvg: 4.9,
    downloads: 11400000,
    ratings: [
      { name: "1 star", count: 1200 },
      { name: "2 star", count: 2800 },
      { name: "3 star", count: 9600 },
      { name: "4 star", count: 92000 },
      { name: "5 star", count: 617900 },
    ],
  },
  {
    id: 12,
    image: "https://placehold.co/300x300/6366F1/ffffff?text=Calm",
    title: "Calm - Sleep, Meditate, Relax",
    companyName: "Calm.com, Inc.",
    description:
      "Calm is the #1 app for sleep and meditation. Join the millions experiencing lower stress, less anxiety, and more restful sleep with our guided meditations, Sleep Stories, breathing programs, and relaxing music.",
    size: 88.9,
    reviews: 834600,
    ratingAvg: 4.8,
    downloads: 13600000,
    ratings: [
      { name: "1 star", count: 2400 },
      { name: "2 star", count: 4100 },
      { name: "3 star", count: 14000 },
      { name: "4 star", count: 108000 },
      { name: "5 star", count: 706100 },
    ],
  },
  {
    id: 13,
    image: "https://placehold.co/300x300/EC4899/ffffff?text=MyFitnessPal",
    title: "MyFitnessPal: Calorie Counter",
    companyName: "MyFitnessPal, Inc.",
    description:
      "Lose weight and keep it off with MyFitnessPal. Track your calories and macros with the largest food database of any nutrition app. Log meals in seconds and get insights into your eating habits with detailed nutritional data.",
    size: 134.7,
    reviews: 1245800,
    ratingAvg: 4.7,
    downloads: 18900000,
    ratings: [
      { name: "1 star", count: 4200 },
      { name: "2 star", count: 7800 },
      { name: "3 star", count: 24000 },
      { name: "4 star", count: 168000 },
      { name: "5 star", count: 1041800 },
    ],
  },
  {
    id: 14,
    image: "https://placehold.co/300x300/0891B2/ffffff?text=Duolingo",
    title: "Duolingo - Language Lessons",
    companyName: "Duolingo",
    description:
      "Learn a new language for free with Duolingo! The fun, effective way to learn 40+ languages. Science-based lessons keep you motivated with short, game-like exercises that adapt to your learning style.",
    size: 156.2,
    reviews: 2876400,
    ratingAvg: 4.7,
    downloads: 28400000,
    ratings: [
      { name: "1 star", count: 8400 },
      { name: "2 star", count: 14200 },
      { name: "3 star", count: 48000 },
      { name: "4 star", count: 324000 },
      { name: "5 star", count: 2481800 },
    ],
  },
  {
    id: 15,
    image: "https://placehold.co/300x300/7C3AED/ffffff?text=Habitica",
    title: "Habitica: Gamify Your Tasks",
    companyName: "HabitRPG, Inc.",
    description:
      "Habitica is a free habit-building and productivity app that treats your real life like a game. Level up your character, earn rewards, and fight monsters — all by completing your real-world tasks and building healthy habits!",
    size: 48.3,
    reviews: 289100,
    ratingAvg: 4.5,
    downloads: 6700000,
    ratings: [
      { name: "1 star", count: 1600 },
      { name: "2 star", count: 3200 },
      { name: "3 star", count: 18000 },
      { name: "4 star", count: 72000 },
      { name: "5 star", count: 194300 },
    ],
  },
{
  id: 16,
  image: "https://placehold.co/300x300/D97706/ffffff?text=Streaks",
  title: "Streaks - The Habit Tracker",
  companyName: "Crunchy Bagel Pty Ltd",
  description:
    "Streaks is the to-do list that helps you form good habits. Every day you complete a task, your streak grows. Choose any 12 tasks you want to achieve daily and keep your streak alive. Miss a day and you'll have to start over!",
  size: 22.8,
  reviews: 167400,
  ratingAvg: 4.8,
  downloads: 5200000,
  ratings: [
    { name: "1 star", count: 500 },
    { name: "2 star", count: 1200 },
    { name: "3 star", count: 6800 },
    { name: "4 star", count: 42000 },
    { name: "5 star", count: 116900 },
  ],
},
{
  "id": 17,
    "image": "https://placehold.co/300x300/3B82F6/ffffff?text=TickTick",
    "title": "TickTick: To-Do List & Calendar",
    "companyName": "TickTick Team",
    "description": "TickTick is a powerful to-do list and task manager that helps you organize your day, never miss a deadline, and achieve work-life balance. Features include calendar view, habit tracking, and a built-in Pomodoro timer.",
    "size": 62.4,
    "reviews": 412300,
    "ratingAvg": 4.8,
    "downloads": 11200000,
    "ratings": [
      { "name": "1 star", "count": 1800 },
      { "name": "2 star", "count": 3200 },
      { "name": "3 star", "count": 14500 },
      { "name": "4 star", "count": 86000 },
      { "name": "5 star", "count": 306800 }
    ]
  },
  {
    "id": 18,
    "image": "https://placehold.co/300x300/A855F7/ffffff?text=Forestly",
    "title": "Forestly: Focus & Mindfulness",
    "companyName": "Green Labs Ltd.",
    "description": "Forestly combines deep focus with mindfulness exercises. Plant a tree each time you concentrate on your work. Over time, watch your forest grow while your productivity soars. Includes ambient sounds and breathing guides.",
    "size": 47.5,
    "reviews": 98700,
    "ratingAvg": 4.7,
    "downloads": 3100000,
    "ratings": [
      { "name": "1 star", "count": 400 },
      { "name": "2 star", "count": 1100 },
      { "name": "3 star", "count": 5600 },
      { "name": "4 star", "count": 24000 },
      { "name": "5 star", "count": 67600 }
    ]
  },
  {
    "id": 19,
    "image": "https://placehold.co/300x300/EF4444/ffffff?text=FocusMate",
    "title": "FocusMate - Virtual Coworking",
    "companyName": "FocusMate Inc.",
    "description": "Beat procrastination with virtual coworking sessions. Join a focused community, set a timer, and work alongside real people from around the world. Accountability and structure without the distractions.",
    "size": 33.2,
    "reviews": 187600,
    "ratingAvg": 4.9,
    "downloads": 5900000,
    "ratings": [
      { "name": "1 star", "count": 600 },
      { "name": "2 star", "count": 1100 },
      { "name": "3 star", "count": 4800 },
      { "name": "4 star", "count": 34000 },
      { "name": "5 star", "count": 147100 }
    ]
  },
  {
    "id": 20,
    "image": "https://placehold.co/300x300/06B6D4/ffffff?text=YogaNow",
    "title": "YogaNow: Daily Yoga & Meditation",
    "companyName": "Wellness Studio",
    "description": "YogaNow brings expert-led yoga and meditation to your home. With personalized plans, soothing music, and pose libraries, it's perfect for beginners and advanced practitioners alike. Reduce stress and increase flexibility.",
    "size": 78.9,
    "reviews": 234500,
    "ratingAvg": 4.7,
    "downloads": 7300000,
    "ratings": [
      { "name": "1 star", "count": 1100 },
      { "name": "2 star", "count": 2400 },
      { "name": "3 star", "count": 12100 },
      { "name": "4 star", "count": 56000 },
      { "name": "5 star", "count": 162900 }
    ]
  },
  {
    "id": 21,
    "image": "https://placehold.co/300x300/10B981/ffffff?text=WaterMinder",
    "title": "WaterMinder: Hydration Tracker",
    "companyName": "Fitness Apps Co.",
    "description": "Stay hydrated and healthy with WaterMinder. Set daily water goals, log intake quickly, and get smart reminders. Beautiful charts show your progress and help you build a lasting hydration habit.",
    "size": 28.6,
    "reviews": 156800,
    "ratingAvg": 4.6,
    "downloads": 4800000,
    "ratings": [
      { "name": "1 star", "count": 900 },
      { "name": "2 star", "count": 2000 },
      { "name": "3 star", "count": 9800 },
      { "name": "4 star", "count": 42000 },
      { "name": "5 star", "count": 102100 }
    ]
  },
  {
    "id": 22,
    "image": "https://placehold.co/300x300/EC4899/ffffff?text=SleepCycle",
    "title": "Sleep Cycle: Alarm & Tracker",
    "companyName": "Sleep Labs AB",
    "description": "Wake up feeling rested with Sleep Cycle. It analyzes your sleep patterns and wakes you during your lightest sleep phase within a 30-minute window. Track snoring, sleep trends, and get detailed insights.",
    "size": 92.4,
    "reviews": 567200,
    "ratingAvg": 4.8,
    "downloads": 14600000,
    "ratings": [
      { "name": "1 star", "count": 2100 },
      { "name": "2 star", "count": 4500 },
      { "name": "3 star", "count": 18900 },
      { "name": "4 star", "count": 112000 },
      { "name": "5 star", "count": 429700 }
    ]
  },
  {
    "id": 23,
    "image": "https://placehold.co/300x300/8B5CF6/ffffff?text=NotionCal",
    "title": "Notion Calendar: Time & Tasks",
    "companyName": "Notion Labs, Inc.",
    "description": "Notion Calendar brings your schedules, tasks, and databases together. Sync with Google Calendar, drag-and-drop to reschedule, and see everything in one unified timeline. Perfect for power users.",
    "size": 104.3,
    "reviews": 187900,
    "ratingAvg": 4.7,
    "downloads": 4100000,
    "ratings": [
      { "name": "1 star", "count": 800 },
      { "name": "2 star", "count": 1800 },
      { "name": "3 star", "count": 11200 },
      { "name": "4 star", "count": 48000 },
      { "name": "5 star", "count": 126100 }
    ]
  },
  {
    "id": 24,
    "image": "https://placehold.co/300x300/F59E0B/ffffff?text=Minimalist",
    "title": "Minimalist: Simple To-Do List",
    "companyName": "Boring Studio",
    "description": "A beautifully simple to-do list that helps you focus on what matters. No distractions, no ads, no signup required. Just a clean list where you can organize tasks, set priorities, and check things off.",
    "size": 12.5,
    "reviews": 54300,
    "ratingAvg": 4.5,
    "downloads": 1700000,
    "ratings": [
      { "name": "1 star", "count": 400 },
      { "name": "2 star", "count": 1100 },
      { "name": "3 star", "count": 5400 },
      { "name": "4 star", "count": 18000 },
      { "name": "5 star", "count": 29400 }
    ]
  },
  {
    "id": 25,
    "image": "https://placehold.co/300x300/0891B2/ffffff?text=MindShift",
    "title": "MindShift: CBT for Anxiety",
    "companyName": "Anxiety Canada",
    "description": "MindShift uses evidence-based Cognitive Behavioral Therapy (CBT) to help you manage anxiety, stress, and worry. Learn coping skills, track your mood, and challenge negative thoughts with guided exercises.",
    "size": 41.7,
    "reviews": 289400,
    "ratingAvg": 4.9,
    "downloads": 8400000,
    "ratings": [
      { "name": "1 star", "count": 700 },
      { "name": "2 star", "count": 1300 },
      { "name": "3 star", "count": 6500 },
      { "name": "4 star", "count": 52000 },
      { "name": "5 star", "count": 228900 }
    ]
  },
  {
    "id": 26,
    "image": "https://placehold.co/300x300/DC2626/ffffff?text=StudyBuff",
    "title": "StudyBuff: Flashcards & Notes",
    "companyName": "EduTech Solutions",
    "description": "StudyBuff transforms your notes into smart flashcards. Use spaced repetition to remember more in less time. Create, share, and discover study sets. Perfect for students preparing for exams.",
    "size": 54.8,
    "reviews": 123400,
    "ratingAvg": 4.6,
    "downloads": 3600000,
    "ratings": [
      { "name": "1 star", "count": 600 },
      { "name": "2 star", "count": 1900 },
      { "name": "3 star", "count": 8900 },
      { "name": "4 star", "count": 34000 },
      { "name": "5 star", "count": 78000 }
    ]
  },
  {
    "id": 27,
    "image": "https://placehold.co/300x300/6366F1/ffffff?text=GoalTracker",
    "title": "GoalTracker: Milestones & Habits",
    "companyName": "Achieve Labs",
    "description": "Set, track, and smash your goals with GoalTracker. Break big dreams into daily actions, visualize your progress, and celebrate milestones. Perfect for New Year's resolutions, fitness goals, or learning a skill.",
    "size": 36.9,
    "reviews": 87900,
    "ratingAvg": 4.5,
    "downloads": 2200000,
    "ratings": [
      { "name": "1 star", "count": 500 },
      { "name": "2 star", "count": 1400 },
      { "name": "3 star", "count": 7600 },
      { "name": "4 star", "count": 24000 },
      { "name": "5 star", "count": 54400 }
    ]
  },
  {
    "id": 28,
    "image": "https://placehold.co/300x300/EA580C/ffffff?text=Breathwork",
    "title": "Breathwork: Calm & Relax",
    "companyName": "Breathe Easy Inc.",
    "description": "Master the art of breathing with guided sessions. Reduce anxiety, improve focus, and fall asleep faster with scientifically-backed breathing techniques. Customize patterns and get real-time feedback.",
    "size": 29.3,
    "reviews": 145200,
    "ratingAvg": 4.8,
    "downloads": 4700000,
    "ratings": [
      { "name": "1 star", "count": 400 },
      { "name": "2 star", "count": 1100 },
      { "name": "3 star", "count": 6800 },
      { "name": "4 star", "count": 34000 },
      { "name": "5 star", "count": 102900 }
    ]
  },
  {
    "id": 29,
    "image": "https://placehold.co/300x300/14B8A6/ffffff?text=TimeLogger",
    "title": "TimeLogger: Automatic Tracker",
    "companyName": "Timing Software",
    "description": "TimeLogger automatically tracks how you spend time on your phone and across apps. Get detailed reports, set productivity goals, and reduce screen time. No manual entry required – just insights.",
    "size": 48.2,
    "reviews": 67800,
    "ratingAvg": 4.4,
    "downloads": 1900000,
    "ratings": [
      { "name": "1 star", "count": 800 },
      { "name": "2 star", "count": 2200 },
      { "name": "3 star", "count": 9600 },
      { "name": "4 star", "count": 22000 },
      { "name": "5 star", "count": 33200 }
    ]
  },
  {
    "id": 30,
    "image": "https://placehold.co/300x300/7C3AED/ffffff?text=NoteLedge",
    "title": "NoteLedge: Notebook & Journal",
    "companyName": "Creative Apps Ltd.",
    "description": "NoteLedge is a powerful digital notebook that combines handwriting, typing, sketching, and media clipping. Organize ideas, annotate PDFs, and sync across all devices. Your creative canvas.",
    "size": 118.6,
    "reviews": 98200,
    "ratingAvg": 4.6,
    "downloads": 2800000,
    "ratings": [
      { "name": "1 star", "count": 600 },
      { "name": "2 star", "count": 1500 },
      { "name": "3 star", "count": 8200 },
      { "name": "4 star", "count": 28000 },
      { "name": "5 star", "count": 59900 }
    ]
  },
  {
    "id": 31,
    "image": "https://placehold.co/300x300/22C55E/ffffff?text=EcoHabit",
    "title": "EcoHabit: Green Routine",
    "companyName": "Sustainable Future",
    "description": "Build eco-friendly habits that help the planet. Track your carbon footprint, get tips for reducing waste, and join community challenges. Every small action adds up to a big change.",
    "size": 32.5,
    "reviews": 56300,
    "ratingAvg": 4.7,
    "downloads": 1500000,
    "ratings": [
      { "name": "1 star", "count": 300 },
      { "name": "2 star", "count": 800 },
      { "name": "3 star", "count": 4100 },
      { "name": "4 star", "count": 16000 },
      { "name": "5 star", "count": 35100 }
    ]
  },
  {
    "id": 32,
    "image": "https://placehold.co/300x300/3B82F6/ffffff?text=DeepWork",
    "title": "Deep Work: Focus Music",
    "companyName": "AudioFocus Inc.",
    "description": "Boost concentration with scientifically-designed focus music. Binaural beats, alpha waves, and ambient soundscapes mask distractions and put your brain in a flow state. Timer and analytics included.",
    "size": 66.8,
    "reviews": 178500,
    "ratingAvg": 4.8,
    "downloads": 5500000,
    "ratings": [
      { "name": "1 star", "count": 500 },
      { "name": "2 star", "count": 1300 },
      { "name": "3 star", "count": 7200 },
      { "name": "4 star", "count": 42000 },
      { "name": "5 star", "count": 127500 }
    ]
  },
  {
    "id": 33,
    "image": "https://placehold.co/300x300/F97316/ffffff?text=Prompted",
    "title": "Prompted: Daily Journaling",
    "companyName": "Mindful Tech",
    "description": "Journaling made easy with thoughtful daily prompts. Reflect on your day, express gratitude, and track your mental health journey. Private, secure, and beautifully designed to build a lasting journal habit.",
    "size": 27.9,
    "reviews": 112400,
    "ratingAvg": 4.9,
    "downloads": 3400000,
    "ratings": [
      { "name": "1 star", "count": 250 },
      { "name": "2 star", "count": 600 },
      { "name": "3 star", "count": 3600 },
      { "name": "4 star", "count": 24000 },
      { "name": "5 star", "count": 83950 }
    ]
  },
  {
    "id": 34,
    "image": "https://placehold.co/300x300/A855F7/ffffff?text=Noise",
    "title": "Noise: Ambient Sounds",
    "companyName": "SoundHealing LLC",
    "description": "A collection of high-quality ambient sounds to help you focus, sleep, or relax. Rain, ocean waves, coffee shop, white noise – mix and match to create your perfect sound environment.",
    "size": 44.3,
    "reviews": 219700,
    "ratingAvg": 4.7,
    "downloads": 6900000,
    "ratings": [
      { "name": "1 star", "count": 800 },
      { "name": "2 star", "count": 2100 },
      { "name": "3 star", "count": 11400 },
      { "name": "4 star", "count": 56000 },
      { "name": "5 star", "count": 149400 }
    ]
  },
  {
    "id": 35,
    "image": "https://placehold.co/300x300/EF4444/ffffff?text=PomodoroPro",
    "title": "Pomodoro Pro: Timer & Tasks",
    "companyName": "TimeFlow Studio",
    "description": "Advanced Pomodoro timer with task integration, statistics, and customization. Work in focused intervals, track completed sessions, and analyze your productivity patterns. Syncs across devices.",
    "size": 38.1,
    "reviews": 145600,
    "ratingAvg": 4.6,
    "downloads": 4300000,
    "ratings": [
      { "name": "1 star", "count": 700 },
      { "name": "2 star", "count": 1800 },
      { "name": "3 star", "count": 10200 },
      { "name": "4 star", "count": 38000 },
      { "name": "5 star", "count": 94900 }
    ]
  },
  {
    "id": 36,
    "image": "https://placehold.co/300x300/06B6D4/ffffff?text=HabitHub",
    "title": "HabitHub: Habit Tracker",
    "companyName": "StreakSoft",
    "description": "Track unlimited habits with beautiful calendars and heatmaps. Set reminders, view detailed statistics, and join challenges with friends. The most flexible habit tracker on mobile.",
    "size": 35.7,
    "reviews": 289300,
    "ratingAvg": 4.8,
    "downloads": 8900000,
    "ratings": [
      { "name": "1 star", "count": 900 },
      { "name": "2 star", "count": 2100 },
      { "name": "3 star", "count": 11500 },
      { "name": "4 star", "count": 64000 },
      { "name": "5 star", "count": 210800 }
    ]
  },
  {
    "id": 37,
    "image": "https://placehold.co/300x300/8B5CF6/ffffff?text=RescueTime",
    "title": "RescueTime: Digital Balance",
    "companyName": "RescueTime Inc.",
    "description": "Automatically track your digital habits and get a clear picture of where your time goes. Set focus goals, block distractions, and improve your productivity with detailed reports and insights.",
    "size": 53.2,
    "reviews": 198400,
    "ratingAvg": 4.5,
    "downloads": 5200000,
    "ratings": [
      { "name": "1 star", "count": 1200 },
      { "name": "2 star", "count": 3400 },
      { "name": "3 star", "count": 15600 },
      { "name": "4 star", "count": 54000 },
      { "name": "5 star", "count": 124200 }
    ]
  },
  {
    "id": 38,
    "image": "https://placehold.co/300x300/10B981/ffffff?text=ZenFocus",
    "title": "ZenFocus: Minimal Timer",
    "companyName": "Zen Labs",
    "description": "A beautifully minimal Pomodoro timer inspired by Zen principles. No ads, no clutter – just a clean timer, gentle notifications, and a calm interface to help you enter flow state.",
    "size": 18.4,
    "reviews": 73200,
    "ratingAvg": 4.9,
    "downloads": 2100000,
    "ratings": [
      { "name": "1 star", "count": 150 },
      { "name": "2 star", "count": 400 },
      { "name": "3 star", "count": 2800 },
      { "name": "4 star", "count": 16000 },
      { "name": "5 star", "count": 53850 }
    ]
  },
  {
    "id": 39,
    "image": "https://placehold.co/300x300/D97706/ffffff?text=TaskHero",
    "title": "TaskHero: Gamified To-Do",
    "companyName": "RPG Productivity",
    "description": "Turn your tasks into an RPG adventure! Create a character, gain XP for completing chores, level up, and unlock rewards. Beat procrastination by making productivity fun and addictive.",
    "size": 67.8,
    "reviews": 234100,
    "ratingAvg": 4.7,
    "downloads": 7100000,
    "ratings": [
      { "name": "1 star", "count": 1100 },
      { "name": "2 star", "count": 2800 },
      { "name": "3 star", "count": 13400 },
      { "name": "4 star", "count": 58000 },
      { "name": "5 star", "count": 158800 }
    ]
  },
  {
    "id": 40,
    "image": "https://placehold.co/300x300/EC4899/ffffff?text=Reflectly",
    "title": "Reflectly: AI Journal",
    "companyName": "Reflectly ApS",
    "description": "Reflectly uses AI to help you journal smarter. Get personalized prompts, track your mood patterns, and uncover insights about your emotional well-being. A beautiful space for daily reflection.",
    "size": 72.4,
    "reviews": 301200,
    "ratingAvg": 4.6,
    "downloads": 8600000,
    "ratings": [
      { "name": "1 star", "count": 1600 },
      { "name": "2 star", "count": 3800 },
      { "name": "3 star", "count": 19200 },
      { "name": "4 star", "count": 76000 },
      { "name": "5 star", "count": 200600 }
    ]
  }
];

export default APPS_DATA;
