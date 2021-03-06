// Possible refactor: Consider removing duplicate lyric lines
const lyrics = [
  "You're walking in the woods",
  "There's no one around and your phone is dead",
  "Out of the corner of your eye you spot him",
  "Shia LaBeouf",
  "He's following you, about 30 feet back",
  "He gets down on all fours and breaks into a sprint",
  "He's gaining on you",
  "Shia LaBeouf",
  "You're looking for you car but you're all turned around",
  "He's almost upon you now",
  "And you can see there's blood on his face",
  "My God, there's blood everywhere!",
  "Running for you life (from Shia LaBeouf)",
  "He's brandishing a knife (it's Shia LaBeouf)",
  "Lurking in the shadows",
  "Hollywood superstar Shia LaBeouf",
  "Living in the woods (Shia LaBeouf)",
  "Killing for sport (Shia LaBeouf)",
  "Eating all the bodies",
  "Actual cannibal Shia LaBeouf",
  "Now it's dark, and you seem to have lost him",
  "But you're hopelessly lost yourself",
  "Stranded with a murderer",
  "You creep silently through the underbrush",
  "Aha! In the distance",
  "A small cottage with a light on",
  "Hope! You move stealthily toward it",
  "But your leg! Ah! It's caught in a bear trap!",
  "Gnawing off your leg (quiet, quiet)",
  "Limping to the cottage (quiet, quiet)",
  "Now you're on the doorstep",
  "Sitting inside",
  "Shia LaBeouf",
  "Sharpening an axe (Shia LaBeouf)",
  "But he doesn't hear you enter (Shia LaBeouf)",
  "You're sneaking up behind him",
  "Strangling superstar",
  "Shia LaBeouf",
  "Fighting for your life with Shia LaBeouf",
  "Wrestling a knife from Shia LaBeouf",
  "Stab him in his kidney",
  "Safe at last from Shia LaBeouf",
  "You limp into the dark woods",
  "Blood oozing from your stump leg",
  "You've beaten Shia LaBeouf",
  "Wait! He isn't dead (Shia surprise)",
  "There's a gun to your head and death in his eyes",
  "But you can do jiu-jitsu",
  "Body slam superstar Shia LaBeouf",
  "Legendary fight with Shia LaBeouf",
  "Normal Tuesday night for Shia LaBeouf",
  "You try to swing an axe at Shia LaBeouf",
  "But blood is draining fast from your stump leg",
  "He's dodging every swipe, he parries to the left",
  "You counter to the right, you catch him in the neck",
  "You're chopping his head now",
  "You have just decapitated Shia LaBeouf",
  "His head topples to the floor, expressionless",
  "You fall to your knees and catch your breath",
  "You're finally safe from Shia LaBeouf"
];

// Possible refactor: Eventually move this to local storage? Possibly a lightweight database. Requires research
const savedImages = [
  `1-1-1`,
  '8-1-4'
];

const links = {
  'youtube': 'https://www.youtube.com/channel/UCtccbWvR1RQb976Jo6Mt7Yw',
  'spotify': 'https://open.spotify.com/artist/1NtYiv70buGwaMspHuD49I'
}

export { lyrics, savedImages, links }