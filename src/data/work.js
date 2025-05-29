// all data that can be shown on WORK page
import ide     from '@/assets/imgs/projekter/algo-camo/ide.jpeg'

//studiekort
import studieKort from '@/assets/imgs/projekter/studiekort/studieKort.png'

//long island
import liFULL from '@/assets/imgs/projekter/long-island/liFULL.png'

import liT1 from '@/assets/imgs/projekter/long-island/liT1.png'
import liT2 from '@/assets/imgs/projekter/long-island//liT2.png'
import liT3 from '@/assets/imgs/projekter/long-island//liT3.png'
import liP1 from '@/assets/imgs/projekter/long-island//liP1.jpg'
import liP2 from '@/assets/imgs/projekter/long-island//liP2.jpg'
import liP3 from '@/assets/imgs/projekter/long-island//liP3.jpg'

//kaffemik
import kaffemikFinalScene from '@/assets/imgs/projekter/kaffemik/kaffemik-finalscene.png'

import k1 from '@/assets/imgs/projekter/kaffemik/kaffemik1.png'
import k2 from '@/assets/imgs/projekter/kaffemik/kaffemik2.png'
import k3 from '@/assets/imgs/projekter/kaffemik/kaffemik3.png'
import kP1 from '@/assets/imgs/projekter/kaffemik/kaffemik-process1.png'
import kP2 from '@/assets/imgs/projekter/kaffemik/kaffemik-process2.png'

//eternal harvest
import eh1 from '@/assets/imgs/projekter/threejs-eternalharvest/eh1.png'

import eternalharvest from '@/assets/imgs/projekter/threejs-eternalharvest/eternalharvest.png'
import eh2 from '@/assets/imgs/projekter/threejs-eternalharvest/eh2.png'
import eh3 from '@/assets/imgs/projekter/threejs-eternalharvest/eh3.png'
import eh4 from '@/assets/imgs/projekter/threejs-eternalharvest/eh4.png'
import eh5 from '@/assets/imgs/projekter/threejs-eternalharvest/eh5.png'
import eh6 from '@/assets/imgs/projekter/threejs-eternalharvest/eh6.png'
import eh7 from '@/assets/imgs/projekter/threejs-eternalharvest/eh7.png'

//sushi train
import sushitrain from '@/assets/imgs/projekter/sushi-train/sushitrain.png'
import stP1 from '@/assets/imgs/projekter/sushi-train/stP1.JPG'

//drill, spill, kill - sos poster
import sos from '@/assets/imgs/projekter/sos/sos.png'
import sos1 from '@/assets/imgs/projekter/sos/sos1.jpeg'

//algoritmisk camoflague
import eyes from '@/assets/imgs/projekter/algo-camo/eyes.jpeg'
import eyesBig from '@/assets/imgs/projekter/algo-camo/eyesBig.jpeg'
import eyesFull from '@/assets/imgs/projekter/algo-camo/eyesFull.jpeg'

//2. eksamen - while in battle
import WIBposter from '@/assets/imgs/projekter/2eksamen/WIBposter.png'
import WIBidentitet from '@/assets/imgs/projekter/2eksamen/WIBidentitet.png'

//3. eksamen - balance
import bLogo from '@/assets/imgs/projekter/3eksamen/bLogo.png'

export const workProjects = [
  { id: 1, 
    slug: 'long-island',
    title: 'Long Island - 3D scene', 
    heroImage: liFULL, 
    longIntro: 'I vores forløb om 3D-modellering, skulle vi lave en ø i Blender. <br><br>Jeg valgte at lave en surealistisk ø med intense farver og lange hunde.<br><br>Vi skulle rendere et totalbillede og nogle closeups.<br><br>Selve øen inviterer os ind i et skævt univers, med humor og underlige væsner. <br><br>Farver, lys og materialer bidrager til en kontrast mellem det søde og absurde.',
    thumbs: [ liT1, liT2, liT3],
    moreText: 'These are the closeup renders of my project',
    thumbs2: [liP1, liP2, liP3],
    moreText2:'hej',
  },
  
  { id: 2, 
    slug: 'kaffe-mik',
    title: 'Experiencesite - Kaffemik', 
    heroImage: kaffemikFinalScene, 
    longIntro: 'I denne opgave, skulle vi lave et oplevelsessite, som omhandlede Grønland',
    thumbs: [ k3, k1, k2 ],
    moreText: 'These are the closeup renders of my project',  },
  
  { id: 3, 
    slug: 'eternal-harvest',
    title: 'Eternal Harvest - three.js', 
    heroImage: eh1,  
    longIntro: 'I vores three.js forløb, skulle vi lave en oplevelse i form at et spil',
    thumbs: [ eternalharvest, eh2, eh3, eh4, eh6, eh7 ],
    moreText: 'These are the closeup renders of my project',  },
  
    //{ id: 4, 
    //slug: 'studie-kort',
    //title: 'Studiekort', 
    //heroImage: studieKort,  
    //longIntro: 'For this project we were tasked to make a 3D island using Blender',
    //thumbs: [ studieKort],
    //moreText: 'These are the closeup renders of my project',  
  //},

    { id: 5, 
    slug: 'sushi-train',
    title: 'Sushi Train - 3D model', 
    heroImage: sushitrain,  
    longIntro: 'Sushitrain er en 3D rendering',
    thumbs: [ stP1 ],
    moreText: 'These are the closeup renders of my project',  
  },
  
  { id: 6, 
  slug: 'sos',
  title: 'Politisk plakat - illustrator', 
  heroImage: sos,  
  longIntro: 'Under vores forløb semiotik og retorik, skulle vi hver især skabe en politisk plakat, om omhandlede et emne vi selv synes var spændende/vigtigt',
  thumbs: [ sos1 ],
  moreText: 'These are the closeup renders of my project',  
},
  { id: 7, 
  slug: 'algoritmisk-camoflague',
  title: 'Algoritmisk camoflague - p5.js', 
  heroImage: eyes,  
  longIntro: 'algoritmisk camoflague',
  thumbs: [ eyesBig, eyesFull ],
  moreText: 'These are the closeup renders of my project',  
},
  { id: 8, 
  slug: '2-eksamen',
  title: '1. års eksamensprojekt - While in battle im free, never free to rest', 
  heroImage: WIBposter,  
  longIntro: 'algoritmisk camoflague',
  thumbs: [ WIBidentitet ],
  moreText: 'These are the closeup renders of my project',  
},
  { id: 9, 
  slug: '3-eksamen',
  title: '3. semester eksamensprojekt - nakkesmerte-app', 
  heroImage: bLogo,  
  longIntro: 'Dette er en nakkesmerteapp',
  thumbs: [ bLogo ],
  moreText: 'These are the closeup renders of my project',  
},
  { id: 10, 
  slug: 'data-visualisering',
  title: 'Datavisualisering', 
  heroImage: bLogo,  
  longIntro: 'Dette er en nakkesmerteapp',
  thumbs: [ bLogo ],
  moreText: 'These are the closeup renders of my project',  
},
]


