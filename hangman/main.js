let passwordDiv = document.getElementById("pass");
let score = 0;
let fixedLetterLists = "abcdefghijklmnopqrstuwxyzv".split("");


function hide(inp) {
  let out = [];
  for (let i = 0; i < inp.length; i++) {
    if (fixedLetterLists.includes(inp[i])) {
      out.push("*");
    } else if (inp[i] == " ") {
      out.push(" ");
    } else {
    }
  }
  return out.join("");
}
let passwordList = `abruptly,absurd,abyss,affix,askew,avenue,awkward,axiom,azure,bagpipes,bandwagon,banjo,bayou,beekeeper,bikini,blitz,blizzard,boggle,bookworm,boxcar,boxful,buckaroo,buffalo,buffoon,buxom,buzzard,buzzing,buzzwords,caliph,cobweb,cockiness,croquet,crypt,curacao,cycle,daiquiri,dirndl,disavow,dizzying,duplex,dwarves,embezzle,equip,espionage,euouae,exodus,faking,fishhook,fixable,fjord,flapjack,flopping,fluffiness,flyby,foxglove,frazzled,frizzled,fuchsia,funny,gabby,galaxy,galvanize,gazebo,giaour,gizmo,glowworm,glyph,gnarly,gnostic,gossip,grogginess,haiku,haphazard,hyphen,iatrogenic,icebox,injury,ivory,ivy,jackpot,jaundice,jawbreaker,jaywalk,jazziest,jazzy,jelly,jigsaw,jinx,jiujitsu,jockey,jogging,joking,jovial,joyful,juicy,jukebox,jumbo,kayak,kazoo,keyhole,khaki,kilobyte,kiosk,kitsch,kiwifruit,klutz,knapsack,larynx,lengths,lucky,luxury,lymph,marquis,matrix,megahertz,microwave,mnemonic,mystify,naphtha,nightclub,nowadays,numbskull,nymph,onyx,ovary,oxidize,oxygen,pajama,peekaboo,phlegm,pixel,pizazz,pneumonia,polka,pshaw,psyche,puppy,puzzling,quartz,queue,quips,quixotic,quiz,quizzes,quorum,razzmatazz,rhubarb,rhythm,rickshaw,schnapps,scratch,shiv,snazzy,sphinx,spritz,squawk,staff,strength,strengths,stretch,stronghold,stymied,subway,swivel,syndrome,thriftless,thumbscrew,topaz,transcript,transgress,transplant,triphthong,twelfth,twelfths,unknown,unworthy,unzip,uptown,vaporize,vixen,vodka,voodoo,vortex,voyeurism,walkway,waltz,wave,wavy,waxy,wellspring,wheezy,whiskey,whizzing,whomever,wimpy,witchcraft,wizard,woozy,wristwatch,wyvern,xylophone,yachtsman,yippee,yoked,youthful,yummy,zephyr,zigzag,zigzagging,zilch,zipper,zodiac,zombie`.split(",")





let password = passwordList[Math.round(Math.random()*passwordList.length)];
let hiddenPassword = hide(password);
passwordDiv.innerHTML = hiddenPassword;

function trans(char) {
  let passwd = password.split("");
  let pass2 = hiddenPassword.split("");
  for (let i = 0; i < passwd.length; i++) {
    if (passwd[i].toLowerCase() == char.toLowerCase()) {
      pass2[i] = passwd[i].toLowerCase();
    }
  }

  if (hiddenPassword == pass2.join("")) {
    score++;
    document.getElementById("drawing").innerHTML = `<img src="./img/i${score}.png">` 
    

  }

  hiddenPassword = pass2.join("");

  passwordDiv.innerHTML = hiddenPassword;
}
let egzystencjalny = false;
document.addEventListener("keydown", (e) => {
  if (!egzystencjalny) {
    if (fixedLetterLists.includes(e.key.toLowerCase())) {
      trans(e.key);
      if (!hiddenPassword.split("").includes("*")) {
        alert("wygrałeś brawo");
        egzystencjalny = true
      }
      if (score ==5) {
        
        document.getElementById("drawing").innerHTML = `<img src="./img/i${score}.png">` 
        alert("przegrałeś, nie brawo");
        egzystencjalny = true
    }
    }
  }
});
