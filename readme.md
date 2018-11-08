# DBZ-Game

Technologies used:
HTML
CSS
Javascript
Jquery
Canvas

Approach taken:
I initially wanted to make a game where you had to race Frieza to get 7 dragonballs first. Frieza would collect his own dragonballs.
12 dragonballs would have generated and Frieza would fly to random dragonballs that spawn randomly automatically (then 1 more if it's tied
6-6) but it proved a little tougher than expected. I changed my game conditions and make Frieza fly randomly across the map where the 
dragonballs spawn and made the lose condition happen when Frieza captures (collides) Goku.

I began by making my canvas and drawing my characters on them. I then constructed my necessary classes, with a future thought to create
inheritance to be able to select different characters, villains, and maybe even scenarios. After my classes were made, I worked on making
Goku move and clearing the canvas. I then worked on spawning the dragonballs, enemies, and was working on my Frieza logic/character throughout.

Once the movements and logic were mostly finished. I worked on adding a beginning story page and fixing path ways to images on deployment. 

Lastly, I worked on adding different animations and audio sounds.

Unsolved problems:
- When Frieza touches an y (top or bottom) axis, movement stops. Must add logic to make him bounce off
- Having issues with canvas splicing out enemies and dragonballs faster and animation function

Things to add:
- Level difficulties
  - easy - not as many enemies, frieza relatively slow movements across canvas
  - medium - normal rate of enemies, frieza normal movements across canvas
  - hard - high rate of enemies, frieza high movements across canvas
  - ssgss - nearly impossible, extreme rate of enemies, frieza extremely fast across canvas, dragonballs won't spawn for additional time
- Power ups to goku and frieza, depending on how many dragonballs Goku has collected
    a. power ups could include making their speeds faster
    b. changing animations
- Avatar selection to different Z heros/ different villains
- Extra sound effects
- Maybe adding small fighting options?