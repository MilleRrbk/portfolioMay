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
import k4 from '@/assets/imgs/projekter/kaffemik/k5.png'
import k5 from '@/assets/imgs/projekter/kaffemik/k6.png'
import kP1 from '@/assets/imgs/projekter/kaffemik/kaffemik-process1.png'
import kP2 from '@/assets/imgs/projekter/kaffemik/kaffemik-process2.png'
import kP3 from '@/assets/imgs/projekter/kaffemik/kP3.png'
import kP4 from '@/assets/imgs/projekter/kaffemik/kP4.png'
import kP5 from '@/assets/imgs/projekter/kaffemik/kP5.png'

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
import sushitrain from '@/assets/imgs/projekter/sushi-train/sushitrain.PNG'
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
    longIntro: 'I et forløb om 3D-modellering, arbejdede vi med at skabe vores egen ø i Blender. <br><br>Jeg valgte at designe en surealistisk ø fyldt med intense farver og lange hunde. Øen inviterer os med ind i et mystisk univers med både humor og absurditet.<br><br>Opgaven bestod i at rendere både et totalbillede og flere closeups.',
    thumbs: [ liT1, liT2],
    moreText: 'Closeup renderingerne trækker os tættere ind i hundenes univers. Form og materialer er nu i fokus, og giver mulighed for at udforske rum og følelser.',
    thumbs2: [liP1, liP2, liP3],
    moreText2:'Jeg startede med idéudvikling og en masse skitser, og begyndte derefter at modellere mine low-poly figurer i Blender. Da det var mit første projekt i programmet, eksperimenterede jeg meget undervejs. <br><br>Resultatet blev en række ukonventionelle modeller - men jeg lærte en masse om Blender og lykkedes med at føre min idé helt i mål.<br><br><br><b><u>Værktøjer:</u></b><br><br>Blender (3D-modellering)<br><br>',
  },
  
  { id: 2, 
    slug: 'kaffe-mik',
    title: 'Virtuel kaffemik - Grønlandsk gæstfrihed', 
    heroImage: kaffemikFinalScene, 
    longIntro: 'I dette experiencesite inviteres brugeren ind i et grønlandsk hjem til en virtuel kaffemik - en uformel og traditionsrig sammenkomst med kaffe, kage og personlige fortællinger. <br><br>Gennem interaktive objekter i rummet kan man udforske små historier om Grønlands kultur, natur og hverdagsliv. <br><br>Projektet er udviklet i Blender og Three.js med en varm, low-poly æstetik, som en slags kulturformidling gennem interaktiv storytelling og 3D.',
    thumbs: [ k3, k1, k2 ],
    moreText: 'Interaktive objekter lyser op, så brugeren ved hvad der kan klikkes på. Det gøres nemt at gå på opdagelse i scenen', 
    thumbs2: [kP3, kP4, kP5],
    moreText2:'Jeg begyndte med research i kaffemik-traditionen og indsamlede referencer til grønlandske hjem, genstande og stemninger. På baggrund af dette lavede jeg skitser og planlagde rummets opsætning, indhold og fortællinger.<br><br>Herefter byggede jeg scenen i Blender og gav objekterne en pastelpræget farvepalette for at skabe en blød og hyggelig stemning.<br><br>Jeg fokuserede på en tydelig komposition og genkendelige objekter med strategisk placering, så de indbød til interaktion og nysgerrighed.<br><br>Efter modelleringen eksporterede jeg hele scenen som glTF og importerede den til mit Three.js-projekt. Her begyndte jeg at eksperimentere med lys og kameravinkler, så brugeren føler sig til stede i rummet.<br><br>Jeg gjorde udvalgte objekter klikbare med raycasting og bandt dem op til små fortællinger.<br><br><br><b><u>Værktøjer:</u></b><br><br>Blender (3D-modellering)<br><br>Three.js (webbaseret 3D og interaktion)<br><br>HTML, CSS & JavaScript<br><br>VS Code (kodeeditor)<br><br>',
   },
  
  { id: 3, 
    slug: 'eternal-harvest',
    title: 'Eternal Harvest - three.js', 
    heroImage: eh1,  
    longIntro: 'The Eternal Harvest er en interaktiv 3D-fortælling skabt i Three.js og Blender, hvor spilleren lander på en fjern planet i jagten på en svamp, der siges at kunne give evigt liv til mennesket. <br><br>Gennem atmosfærisk visualisering, klikbare objekter og spor fra fortiden, udfolder historien sig gradvist. <br><br>Spilleren opdager efterladte noter og forladt teknologi, som afslører en uhyggelig sandhed - tidligere ekspeditioner er aldrig vendt hjem - fanget i en evig tilstand mellem liv og forfald, hvor tiden ikke længere giver mening. <br><br>Fortællingen udforsker temaer som kontrol, udødelighed og konsekvenserne af menneskelig grådighed.',
    thumbs: [ eternalharvest, eh2, eh3 ],
    moreText: 'These are the closeup renders of my project',  
    thumbs2: [ eh4, eh6, eh7],
    moreText2: 'hej',
  },
  
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


