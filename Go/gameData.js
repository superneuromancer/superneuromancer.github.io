// Game Data Structure - Wizard's Choice 1
const gameData = {
    intro: {
        image: "wcv1_intro.jpg",
        text: `<p><strong>Wizard's Choice 1</strong></p>
               <p>By Sam Landstrom</p>
               <p><em>Summary:</em> You play the part of a wizard in a medieval fantasy world. This is the first part of an epic series.</p>
               <p><em>Content warning:</em> Violence and dark themes.</p>`,
        choices: [
            { text: "Begin!", target: "firstChoice" }
        ]
    },
    
    firstChoice: {
        image: "wcv1_intro.jpg",
        text: `<p>You are a young wizard seeking treasure and glory. You are walking along a path in the forest one day's journey from Ring City, your beloved home. Night has just fallen and you're thinking about how it might be a good idea to find a campsite. After all, you're in goblin territory, and it's dangerous to travel in the dark.</p>
               <p>Suddenly, you smell something awful.</p>
               <p>"Reginold! Are you responsible for that outrageous smell?" you ask the warrior striding ahead of you.</p>
               <p>"Pray, no! I am always downwind from my companions when I squeeze the bellows," Reginold answers.</p>
               <p>You realize that you have never encountered this stench before, and it is close... and, perhaps it's your imagination, but is that muffled breathing you just heard?</p>
               <p>What do you do?</p>`,
        choices: [
            { text: "Shout a warning to Reginold.", target: "shoutWarningToReginoldNew" },
            { text: "Dive flat on your face.", target: "diveChoice" },
            { text: "Hide.", target: "hideChoice" },
            { text: "Stop and listen.", target: "listenChoice" }
        ]
    },
    
    shoutWarningToReginoldNew: {
        analytics: "firstChoiceDone",
        text: `<p>"It is an ambush!" you shout.</p>
               <p>Startled, Reginold springs off the ground like a jackrabbit, his chain armor jingling.</p>
               <p>Just then, out of the brush rush several snarling goblins, their eyes glowing green in the murky darkness. They charge with their short spears.</p>`,
        choices: [
            { text: "Continue", target: "shoutWarningToReginoldNew2" }
        ]
    },
    
    shoutWarningToReginoldNew2: {
        manaDown: 2,
        moraleUp: 1,
        text: `<p>With an arcane word and a flourish of one hand, you send a bolt of fire into the leader of the charge, who drops to the ground thrashing in flames. Reginold hacks down another with his sword. The remaining three run away, whooping and yipping.</p>
               <p>Their cries are joined by others from the dark forest all around you. Many calls from far too many goblins to fight toe-to-toe.</p>
               <p>"It's a hunting party! Probably tracking wild game. We humans are a delicacy, much better than mutton," Reginold says.</p>
               <p>You regard the two dead goblins on the ground. Dead goblins are worth ten gold pieces per head in the city. Luckily, you don't need to carry their heads around. The city authorities will accept their left ears.</p>
               <p>What do you do?</p>`,
        choices: [
            { text: "Cut the ears off.", target: "cutEarsChoice" },
            { text: "Just run.", target: "noCutEarsChoice" }
        ]
    },
    
    diveChoice: {
        analytics: "firstChoiceDone",
        text: `<p>"Dive! They have bows!" you shout as you fling yourself down onto the hard dirt path.</p>
               <p>"Wha?" Reginold looks back. "Who has bows?"</p>
               <p>Just then, out of the brush rush several snarling goblins, their eyes glowing green in the murky darkness. They surrounded you in no time and charge with their short spears. With his sword at the ready, Reginold steps forward to meet the first of them.</p>`,
        choices: [
            { text: "Continue", target: "diveChoice2" }
        ]
    },
    
    diveChoice2: {
        manaDown: 2,
        moraleUp: 1,
        text: `<p>You can't cast spells very well lying face-down in the dirt, and so it takes you a second to get up. As you stand, a small spear whistles past. With an arcane word and a flourish of one hand, you send a small bolt of fire into the one who threw the spear. The goblin drops to the ground thrashing in flames. Reginold hacks down another. The remaining three run away, whooping and yipping.</p>
               <p>Their cries are joined by others from the dark forest all around you. The calls are numerous, and you estimate there are far too many goblins to fight toe-to-toe.</p>
               <p>"It's a hunting party! Probably tracking wild game. We humans are a delicacy, much better than mutton," Reginold says.</p>
               <p>You regard the two dead goblins on the ground. Dead goblins are worth ten gold pieces per head in the city. Luckily, you don't need to carry their heads around. The city authorities will accept their left ears.</p>
               <p>What do you do?</p>`,
        choices: [
            { text: "Cut the ears off.", target: "cutEarsChoice" },
            { text: "Just run.", target: "noCutEarsChoice" }
        ]
    },
    
    hideChoice: {
        manaDown: 2,
        moraleUp: 2,
        analytics: "firstChoiceDone",
        reward: "sneaky",
        text: `<p>When in doubt, hiding is a fine strategy. And the forest offers plenty of cover.</p>
               <p>You motion to Reginold as you creep off the trail. Now inside the brush, you can see glowing eyes staring at you from behind a tree several paces away. You hear a snort as several green-skinned goblins charge out of hiding toward you.</p>
               <p>With an arcane word and a flourish of one hand, you send a bolt of fire into the leader of the charge, who drops to the ground thrashing in flames. Reginold hacks down another with his sword. The remaining three run away, whooping and yipping.</p>
               <p>Their cries are joined by others from the dark forest all around you. Many calls from far too many goblins to fight toe-to-toe.</p>
               <p>"It's a hunting party! Probably tracking wild game. We humans are a delicacy, much better than mutton," Reginold says.</p>
               <p>You regard the two dead goblins on the ground. Dead goblins are worth ten gold pieces per head in the city. Luckily, you don't need to carry their heads around. The city authorities will accept their left ears.</p>
               <p>What do you do?</p>`,
        choices: [
            { text: "Cut the ears off.", target: "cutEarsChoice" },
            { text: "Just run.", target: "noCutEarsChoice" }
        ]
    },
    
    listenChoice: {
        manaDown: 2,
        moraleUp: 2,
        analytics: "firstChoiceDone",
        reward: "clever",
        text: `<p><em>No need to panic yet,</em> you think. You grab Reginold by the shoulder and gesture for him to be quiet.</p>
               <p>The two of you stand motionless for a few long seconds before you hear a low wheezing sort of breathing. Reginold must have heard it, too, because he raises his sword defensively.</p>
               <p>A series of snorts is followed by several goblins with green-tinted skin charging out of hiding toward you.</p>
               <p>With an arcane word and a flourish of one hand, you send a bolt of fire into the leader of the charge, who drops to the ground thrashing in flames. Reginold hacks down another with his sword. The remaining three run away, whooping and yipping.</p>
               <p>Soon their cries are joined by others from the dark forest all around you. Many calls from far too many goblins to fight toe-to-toe.</p>
               <p>"It is a hunting party tracking wild game, I wager. Human is a delicacy, much better than mutton," Reginold says.</p>
               <p>You regard the two dead goblins on the ground. Dead goblins are worth ten gold pieces per head in the city. Luckily, you don't need to carry their heads around. The city authorities will accept their left ears.</p>
               <p>What do you do?</p>`,
        choices: [
            { text: "Cut the ears off.", target: "cutEarsChoice" },
            { text: "Just run.", target: "noCutEarsChoice" }
        ]
    },
    
    cutEarsChoice: {
        goldUp: 10,
        text: `<p>"Get the ears! Get the ears!" you exclaim as you pull out your razor-sharp dagger from your belt.</p>
               <p>For a second, your sometimes slow-witted warrior side-kick doesn't understand, but as you start sawing away at the first ear, he gets the idea and fishes out his own dagger. Soon you have a bloody goblin ear stuffed into your pocket, and Reginold has one of his own. Nasty? Very. However, ten gold pieces are nearly six months of wages to a common laborer, so you're willing to take the hit.</p>
               <p>"What now?" Reginold asks. "Certainly there are excellent places to hide in the forest. If we can just make it until morning..."</p>
               <p>"True. The goblins may have dogs, and their own sense of smell is keen," you say.</p>
               <p>"We might climb a tree, then. That would at least be defensible," Reginold suggests.</p>
               <p>"You wish to be treed like a fox with goblins barking underneath?"</p>
               <p>"If you wish a position that is both defensible and allows some freedom of movement, we should hasten to Castle Inverness. It is near, and we could fortify ourselves behind those walls," Reginold says.</p>
               <p>You frown. "It is a fortress, yes, but inhabited by what? Gods know what manner of creatures may have taken up residence in that ruin over the years."</p>`,
        choices: [
            { text: "Hide in the forest.", target: "hideInForestChoice" },
            { text: "Garrison in the ruin walls.", target: "goToCastle1Choice" },
            { text: "Climb a large tree.", target: "climbTreeChoice" }
        ]
    },
    
    noCutEarsChoice: {
        text: `<p>"The forest is crawling with goblins! It is time to flee!" you shout, and the two of you run into the forest in a direction from which you do not yet hear their cries.</p>
               <p>"What now?" Reginold asks, panting after you have run for a stretch. "Certainly there are excellent places to hide in the forest. If we can just survive until morning..."</p>
               <p>"Exactly. The goblins may have hunting dogs or even wolves, and their own sense of smell is keen," you say.</p>
               <p>"We might climb a tree, then. That would at least be defensible," Reginold suggests.</p>
               <p>"You wish to be treed like a fox with goblins barking underneath?"</p>
               <p>"If you wish a position that is both defensible and allows some freedom of movement, we should hasten to Castle Inverness. It is near, and we could fortify ourselves behind those walls," Reginold says.</p>
               <p>You frown. "It is a fortress, yes, but inhabited by what? Gods know what manner of creatures may have taken up residence in that ruin over the years."</p>`,
        choices: [
            { text: "Hide in the forest", target: "hideInForestChoice" },
            { text: "Climb a large tree", target: "climbTreeChoice" },
            { text: "Garrison in the ruin", target: "goToCastle1Choice" }
        ]
    },
    
    climbTreeChoice: {
        moraleUp: 1,
        reward: "clever",
        text: `<p>"Let's find a tall tree and climb high into the branches. It will be a trifle to kill them if they try to climb after us," you say.</p>
               <p>It does not take you long to find a suitable tree. The first branches are high enough to be out of reach of the goblins, but low enough for the two of you to jump up and grasp. By the time the goblins show up, their glowing eyes glaring, the two of you are high in the branches. Reginold fires several shots from his bow but only manages to hit one. It is a difficult shot with only the eyes providing a target and the branches below providing the creatures with cover.</p>
               <p>Undeterred by Reginold's ineffective fire, the goblins are busy at some scheme as they make trips back and forth from your tree and the surrounding forest. It is only when you see the flames that you realize what they have been up to.</p>
               <p>"Nevel's scat!" Reginold curses. "They set to burn us!"</p>
               <p>"Now what?" you ask. There is a spell you can cast that will turn their fire into a blazing light. Perhaps such a light would blind these nocturnal creatures. Or you could elect for the direct approach: fight fire with fire and simply blast them with a fire spell. Finally, you could just allow Reginold to use his bow. Now that the fire has started down there, he can see them much better. If he can force them into retreat, you could escape.</p>`,
        choices: [
            { text: "Let Reginold handle it!", target: "reginoldBowChoice" },
            { text: "Blind them! (Mana 2)", target: "blindGoblins1Choice", manaReq: 2 },
            { text: "Blast them! (Mana 4)", target: "blastGoblins1Choice", manaReq: 4 }
        ]
    },
    
    reginoldBowChoice: {
        moraleUp: 1,
        text: `<p>"Show them your skill with the bow, my friend!" you encourage Reginold.</p>
               <p>With the fire providing better light, Reginold's archery improves dramatically. Arrow after arrow finds its mark, and soon the remaining goblins flee into the darkness, leaving their dead behind.</p>
               <p>The two of you climb down carefully, avoiding the still-burning brush. "Well done!" you congratulate your companion.</p>
               <p>"The fire will die down soon, but we should move on. More may come," Reginold says wisely.</p>
               <p>You decide to head toward Castle Inverness for shelter.</p>`,
        choices: [
            { text: "Continue to the castle", target: "goToCastle1Choice" }
        ]
    },
    
    blindGoblins1Choice: {
        manaDown: 2,
        moraleUp: 1,
        text: `<p>"Shut your eyes!" you shout to Reginold as you put your hand over his face. WHOOSH! The fire brightens into a terrific flash as your spell takes effect. The goblins nearby scream as they stagger about, blinded. The two of you waste no time climbing down and leaping off to the side of the fire. You meet no resistance from the goblins so far, and you are tempted to kill some of them for their ears; however, you decide not to push your luck. The fire has died down, and there are many more goblins in the forest.</p>
               <p>The two of you run from the tree, back to the trail. You decide the castle is your best defense.</p>
               <p><em>Stone does not burn,</em> you think to yourself.</p>`,
        choices: [
            { text: "Continue to the castle", target: "goToCastle1Choice" }
        ]
    },
    
    blastGoblins1Choice: {
        manaDown: 4,
        moraleUp: 2,
        reward: "aoe_spell",
        text: `<p>It is time to burn these fools. You climb down a few branches to get a bit closer. After a brief incantation, you spread out the fingers of both hands toward the goblins below and release the spell. Sheets of flames shoot out, engulfing those closest while the rest run for cover.</p>
               <p><em>Hunt us will you? Now I hunt you!</em></p>
               <p>You and Reginold climb down to the lowest branch and jump out and away from the now merrily crackling fire below. You are tempted to take a few ears from the burnt corpses but decide not to push your luck. Those who scattered will soon regroup with the others gathering firewood.</p>
               <p>The two of you run from the tree, back to the trail. You decide the castle is your best defense.</p>
               <p><em>Stone does not burn,</em> you think to yourself.</p>`,
        choices: [
            { text: "Continue to the castle", target: "goToCastle1Choice" }
        ]
    },
    
    hideInForestChoice: {
        lifeDown: 1,
        text: `<p>Hunting party or not, the goblins will have their work cut out for them finding you in this dense forest. If you can just hold out until morning, those little sun-hating beasts will be driven back to their holes.</p>
               <p>You know this region well enough to be certain there are no rivers nearby, but Reginold hopes to find at least a stream for the two of you to wade through to destroy your scent trail.</p>
               <p>Unfortunately, you cannot find one, even after hours of running through the forest.</p>
               <p>You are exhausted!</p>
               <p>Meanwhile, the howls of your pursuers become even louder. At this point, you have found another trail and have decided to use it for speed, hoping your long legs can at least give you some distance from the smaller goblins. The two of you dash up to a fork in the road. The path to the right is apparently seldom used since it is nearly overgrown. Reginold believes that it leads to the castle ruins. The path to the left is clear, and you think you see firelight down that way. Could this fire belong to the goblins? Or, if you're lucky, is it the campfire of another friendly adventuring party?</p>
               <p>What do you do?</p>`,
        choices: [
            { text: "Castle! Never question a wizard!", target: "goToCastle2Choice" },
            { text: "Investigate fire", target: "investigateFireChoice" }
        ]
    },
    
    goToCastle1Choice: {
        text: `<p>"Castle Inverness is near. Let us take refuge behind those stone walls," you say.</p>
               <p>Goblin hunting calls echo from all around in the forest as the two of you dash up the path a hundred meters or so, where you find a fork in the road. The path to the right appears to be seldom used since it is nearly overgrown. The path to the left is clear, and you think you see firelight down that way. Could this fire belong to the goblins? Or, if you're lucky, is it the campfire of another friendly adventuring party?</p>
               <p>What do you do?</p>`,
        choices: [
            { text: "Castle! Never question a wizard!", target: "goToCastle2Choice" },
            { text: "Investigate fire.", target: "investigateFireChoice" }
        ]
    },
    
    goToCastle2Choice: {
        text: `<p>You take the overgrown path to the right, pushing through brambles and low-hanging branches. After what feels like an eternity, you emerge into a clearing where the ruins of Castle Inverness loom before you in the moonlight.</p>
               <p>The castle is indeed a ruin, with crumbling walls and a partially collapsed tower. However, the main structure appears sound enough to provide shelter. As you approach the entrance, you notice that the heavy wooden doors hang open, creaking ominously in the night breeze.</p>
               <p>"This place gives me the shivers," Reginold mutters, but he follows you inside nonetheless.</p>
               <p>The interior is dark and musty, filled with the scent of decay and something else... something unpleasant. Your footsteps echo in the vast entrance hall.</p>
               <p>What do you do?</p>`,
        choices: [
            { text: "Light a torch and explore", target: "exploreCastleChoice" },
            { text: "Find a defensible room and rest", target: "restInCastleChoice" },
            { text: "This place is too dangerous - leave", target: "leaveCastleChoice" }
        ]
    },
    
    investigateFireChoice: {
        text: `<p>Curiosity gets the better of you, and you decide to investigate the mysterious firelight. As you approach, you can make out voices - human voices! Your heart lifts with hope.</p>
               <p>However, as you get closer, you realize the voices are chanting in a language you don't recognize. The firelight flickers strangely, casting dancing shadows that seem to move independently of the flames.</p>
               <p>"I don't like this," Reginold whispers. "Those aren't friendly travelers."</p>
               <p>Through the trees, you can see several hooded figures gathered around a large bonfire. They appear to be performing some sort of ritual, and there are strange symbols drawn in the dirt around the fire.</p>
               <p>What do you do?</p>`,
        choices: [
            { text: "Sneak closer to observe", target: "sneakCloserChoice" },
            { text: "Attack while they're distracted", target: "attackRitualistsChoice" },
            { text: "Retreat to the castle", target: "goToCastle2Choice" }
        ]
    },
    
    exploreCastleChoice: {
        manaDown: 1,
        text: `<p>You conjure a small flame in your palm to light your way. The magical fire casts eerie shadows on the stone walls as you and Reginold explore the castle's interior.</p>
               <p>The main hall is vast and empty, with a grand staircase leading to the upper floors. Tapestries hang in tatters from the walls, and debris litters the floor. As you move deeper into the castle, you discover a library with books scattered everywhere, and what appears to be a dining hall with a long table still set for a feast that was never eaten.</p>
               <p>"Look at this," Reginold says, pointing to scratches on the walls. "Claw marks. Something large lived here."</p>
               <p>Suddenly, you hear a sound from somewhere deeper in the castle - a low, mournful wailing that makes your blood run cold.</p>
               <p>What do you do?</p>`,
        choices: [
            { text: "Investigate the sound", target: "investigateSoundChoice" },
            { text: "Barricade yourselves in the library", target: "barricadeChoice" },
            { text: "Leave the castle immediately", target: "leaveCastleChoice" }
        ]
    },
    
    restInCastleChoice: {
        lifeUp: 2,
        manaUp: 1,
        text: `<p>Deciding that discretion is the better part of valor, you find a small chamber off the main hall that has a sturdy door and no other entrances. You and Reginold barricade the door with some fallen stones and settle in for the night.</p>
               <p>Despite the ominous atmosphere, you manage to get some rest. Your magical energies recover somewhat, and you feel refreshed by morning.</p>
               <p>As dawn breaks, sunlight streams through a crack in the wall, and you hear the sounds of the goblins retreating deeper into the forest. It seems you've survived the night.</p>
               <p>"Well, that wasn't so bad," Reginold says, stretching. "Though I could have done without the strange noises in the night."</p>
               <p>What do you do now?</p>`,
        choices: [
            { text: "Explore the castle in daylight", target: "exploreCastleDayChoice" },
            { text: "Leave and return to Ring City", target: "returnToCityChoice" },
            { text: "Search for treasure before leaving", target: "searchTreasureChoice" }
        ]
    },
    
    leaveCastleChoice: {
        text: `<p>"This place reeks of evil," you declare. "We're leaving. Now."</p>
               <p>Reginold doesn't argue. The two of you quickly exit the castle and make your way back into the forest. However, you can still hear the goblin hunting calls in the distance, and you realize you're not out of danger yet.</p>
               <p>As you debate your next move, you notice a faint path leading away from both the castle and the main road. It appears to wind its way toward higher ground.</p>
               <p>What do you do?</p>`,
        choices: [
            { text: "Take the high path", target: "highPathChoice" },
            { text: "Try to sneak back to the main road", target: "sneakRoadChoice" },
            { text: "Return to the castle after all", target: "goToCastle2Choice" }
        ]
    },
    
    // Victory ending
    victoryEnding: {
        goldUp: 50,
        moraleUp: 3,
        text: `<p><strong>Victory!</strong></p>
               <p>Through cunning, courage, and a bit of luck, you and Reginold have survived your first major adventure together. The goblins have been defeated, and you've discovered valuable treasures in the ruins of Castle Inverness.</p>
               <p>As you make your way back to Ring City, you reflect on the lessons learned and the bonds forged in battle. This is just the beginning of your career as an adventuring wizard.</p>
               <p>Your reputation in Ring City grows, and soon other adventurers seek you out for future quests. The world is full of mysteries and dangers, and you're ready to face them all.</p>
               <p><strong>Congratulations! You have completed Wizard's Choice 1!</strong></p>`,
        choices: [
            { text: "Start New Adventure", target: "intro" }
        ]
    },
    
    // Death ending
    deathEnding: {
        text: `<p><strong>Your Adventure Ends Here</strong></p>
               <p>Despite your best efforts, the dangers of the world have proven too great. Your story comes to a tragic end, but such is the fate of many who seek glory and treasure in these dark times.</p>
               <p>Perhaps another wizard will take up where you left off, learning from your mistakes and achieving the success that eluded you.</p>
               <p>Thank you for playing Wizard's Choice 1!</p>`,
        choices: [
            { text: "Try Again", target: "intro" }
        ]
    },
    
    // Additional story branches to create more complete experience
    searchTreasureChoice: {
        goldUp: 25,
        text: `<p>Your greed gets the better of you, and you decide to search the castle for treasure before leaving. In the library, you discover a hidden compartment containing a pouch of gold coins and a scroll with a minor healing spell.</p>
               <p>"Not bad for a night's work," you say, pocketing the gold.</p>
               <p>However, your treasure hunting has taken time, and you hear voices approaching the castle. It seems other adventurers - or perhaps something worse - have arrived.</p>`,
        choices: [
            { text: "Hide and observe", target: "hideAndObserveChoice" },
            { text: "Greet the newcomers", target: "greetNewcomersChoice" },
            { text: "Escape through a window", target: "escapeWindowChoice" }
        ]
    },
    
    returnToCityChoice: {
        goldUp: 10,
        moraleUp: 1,
        text: `<p>Deciding that you've had enough adventure for one night, you and Reginold make your way back to Ring City. The journey is uneventful, and you arrive safely as the sun rises over the city walls.</p>
               <p>You sell the goblin ears you collected to the city guard for a modest reward, and spend the day resting at your favorite tavern, regaling other patrons with tales of your adventure.</p>
               <p>While not the most glorious of adventures, you've gained valuable experience and lived to fight another day. Sometimes, that's victory enough.</p>`,
        choices: [
            { text: "Plan your next adventure", target: "victoryEnding" }
        ]
    },
    
    // Game over condition
    gameOver: {
        text: `<p><strong>Game Over</strong></p>
               <p>Your adventure has come to an end. Thank you for playing Wizard's Choice 1!</p>
               <p>Would you like to start over?</p>`,
        choices: [
            { text: "Start New Game", target: "intro" }
        ]
    }
};

// Initial player stats
const initialStats = {
    mana: 10,
    morale: 10,
    life: 10,
    gold: 0
};

// Achievement definitions
const achievements = {
    sneaky: "Sneaky - You chose the stealthy approach!",
    clever: "Clever - Your wisdom served you well!",
    manners: "Good Manners - Chivalry is not dead!",
    lmao: "Humorous - You found the funny option!",
    aoe_spell: "Area of Effect - Magical devastation!",
    got_medieval: "Got Medieval - Up close and personal!",
    crushingmove: "Crushing Move - Tactical brilliance!",
    you_cad: "You Cad - Questionable choices...",
    survivor: "Survivor - You lived to fight another day!",
    treasure_hunter: "Treasure Hunter - Gold calls to you!",
    brave: "Brave - Courage in the face of danger!",
    wise: "Wise - Knowledge is power!"
};
