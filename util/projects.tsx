export const PROJECTS = [
  {
    projectName: 'Spotify Clone',
    image: 's3://al-nextjs-portfolio/static/Assets/SpotifyClone.PNG',
    altDescription: 'Spotify Clone',
    paragraph1:
      "Heavily using Spotify's APIs and Web Playback SDK, re-created Spotify mimicking core functionality including the ability to playback music, full search functionality, playlist retrieval and more.",
    paragraph2:
      'Optimized handling of states and props in React by creating small re-usable components. This allowed me to scale the application while keeping the code base small.',
    builtUsing:
      'Built using Typescript, React, AWS (S3, Lambda, DynamoDB, API Gateway), MUI, Spotify API, Spotify Web SDK',
    liveLink: 'http://al.spotify-clone.s3-website.us-east-2.amazonaws.com/',
    githubLink: 'https://github.com/AndrewLin95/spotify_clone'
  },
  {
    projectName: 'Hotpot Buddy',
    image: 's3://al-nextjs-portfolio/static/Assets/HotpotBuddy.PNG',
    altDescription: 'Hot Pot Buddy',
    paragraph1:
      'Collaborated, within a small team, a mobile-focused web application that assists users in determining when a food item is cooked.',
    paragraph2:
      'Designed and planned using Jira with a robust versioning system and roadmaps. An extensive list of upcoming features and identified issues based on feedback collected from test users. Heavily version controlled using Git',
    builtUsing:
      'Built using Typescript, React, NodeJs, AWS (S3, Lambda, DynamoDB, API Gateway), MUI',
    liveLink: 'https://reddragonsquad.github.io/Hotpot-Buddy/',
    githubLink: 'https://github.com/RedDragonSquad/Hotpot-Buddy'
  },
  {
    projectName: 'Find the Object!',
    image: 's3://al-nextjs-portfolio/static/Assets/WheresWaldo.PNG',
    altDescription: "Where's Waldo Clone",
    paragraph1:
      'A fully responsive full stack photo tagging web application game.',
    paragraph2:
      "The data points are stored using absolute values in Googles's Cloud Firestore NoSQL database where the values are transformed based on the relative position of the browser viewport.",
    builtUsing: 'Built using Typescript, React and Google Firebase',
    liveLink: 'https://andrewlin95.github.io/wheres_waldo/',
    githubLink: 'https://github.com/AndrewLin95/wheres_waldo/'
  }
];
