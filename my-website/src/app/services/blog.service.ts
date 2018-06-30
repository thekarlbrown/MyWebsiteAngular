import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  private blogContainer = {'changetheworld': `<h5 align="center">'Change the World' Project Analysis</h5>
  <p>My Senior Capstone project, Change the World, was hands down the most positive and influential experience I have had thus far at CNU. The passion I was able to put into my Capstone as a result of how geared it was to my skillset really made it such a positive experience for me. The structure, a fully open-ended exploration of anything of my choosing computer science related as an illustration of my skillset, perfectly fit my direct, passion-driven, and inquisitive work style. Being able to redefine my understanding of the professional world and work with industry standards was an added bonus. Winning the Software Faire and getting recognition for my hard work was simply icing on the cake.
  <br><br>One of the key requirements of the capstone project was having the ability to teach oneself new concepts and skills, which served me quite well as I am primarily self-taught. Over the course of the capstone I Google’d perpetually, having to close 30+ open tabs after each night of work. Furthermore, I was able to utilize freenode IRC channels to enjoy the environment I flourish in best for coding discourse: one or more individuals actively and directly engaging in conversation with and teaching me various things over chat. These selfless, faceless, and nameless individuals were crucial to my database/frontend/backend learning, encapsulated one of my favourite means of educating myself, and are thanked in my GitHub for their services. Finally, my Algorithms/Capstone professor was instrumental to my Capstone in pointing me in the right direction of working with Entity Relationship Diagrams (ERD’s). The ERD-focused mentality of database design combined with easy visualization and exporting to a Debian Server using MySQL Workstation greatly improved how I went about every step of the database process, which ultimately powers the finished product.
  <br><br>Although I learned a lot directly, the challenges I faced also served as a powerful teacher. One of the biggest struggles I experienced while coding was navigating the balance between fixing a problem or implementing a feature a certain way versus taking an entirely different approach to the situation at hand. In one instance, I spent multiple hours analyzing a User Interface (UI) component implemented with a certain View the way I liked, only to decide that it was not worth my time and instead visualized the UI element with a completely different View subclass. Situations such as these taught me a great deal about knowing when and how to give up strategically. Programming is an art, and one must know when to switch brushes in order to utilize their time wisely. I developed a powerful tactic of not only writing down a log of what I did and how long I spent each session, but also began adding items on my agenda to two separate lists as either bugs to fix or future features to be implemented. This was not only extremely rewarding, but served an additional means of addressing the aforementioned struggle. I found myself fixing lots of these issues later indirectly or in a manner unforeseen at the time, teaching me an important programming lesson on how to better code in a substantial modular environment. 
  <br><br>One of the things I know I would do differently in my future applications would be to conform to Android design standards. I spent a serious amount of time creating a unique bar across the top of the screen, as I wanted my app to look very seamless. But after undergoing User Experience (UX) testing and reading books on UI/UX, I began to realize that the more directly an app conformed to design standards, the better. How comfortable a user feels when an application is laid out traditionally, how easily they are able to rapidly navigate an application without additional instruction, and how painlessly they recover from doing the wrong thing is extremely important from a UI/UX perspective. After initial UX testing, I ascertained that I had taken a mediocre approach to design. I redid my colour scheme then underwent UX testing and altered my UI accordingly. Unfortunately, individuals still at times attempted to use a certain common Android design standard that was ingrained in their brain that my app did not implement. In the future, I will read up on a devices design standards before creating an application for that specific platform.
  <br><br>Ultimately, this project completely transformed me as a developer. I gained professional insight on my previously sub-par coding attitudes and learned significantly about full stack development and other current industry buzzwords and standards. I ended the experience with a wide breadth of knowledge that I did not have when I started. But the ultimate boon of this experience, as generic as it may come across, was being forced to tie all my skills together constructively. In order to do so, I relearned some of the areas I was less proficient in. But when forced to do so with the desire to come out a better developer, I ended up learning more than I had ever before in each subject area. Furthermore, when inhabiting the environment of skilled developers on IRC or implementing required functionality between each aspect of my application (UI/UX, Front-End, Back-End, Database, Server), quality code in each component of my Capstone was perpetuated. The Capstone processes itself felt like one long positive feedback loop, from start to finish. I can only hope my future forays into full stack development are as rewarding as this experience has been. 
  </p>`,
  'greed': `<h5 align="center">Greed Algorithm Writeup</h5>
  <p>For quite some time, I was been looking for a way to showcase my Object-Oriented programming skills using Java, but had not yet found a project that would suit this purpose. However, one Friday night after a casual Poker game with my friends, someone introduced me to the dice game Greed. When I learned the rules of Greed, I realized that much of this game could be determined by applying my Software Engineering knowledge to create an Algorithm that would calculate the average points scored per round depending on the various decisions you could make in the game, and use this knowledge to make better choices while playing in real life. The rules of Greed are as follows:
  </p>
<br><p>
-	Each round, each player takes turns rolling five dice.
<br>
-	You receive one point for rolling a 1 and .5 points for rolling a 5.
<br>
-	If you roll 3 of a kind, you receive the number rolled in points (Three 3’s are worth three points) unless you roll three 1’s, which gives you 10 points.
<br>
-	4 of a kind count for double those values, 5 of a kind count for quadruple those values.
<br>
-	You can reroll any non-scoring dice, and any amount of scoring dice as long as at least one scoring die remains from that roll.
<br>
-	If you ever do not roll any points, you get zero points for the round and it becomes the next player’s turn.
<br>
-	If you have 5 scoring dice, you can choose to keep those points and re-roll 5 new dice, but if you don’t roll a single scoring die on any subsequent rolls, you still receive zero points for the round.
<br>
</p>
<br><p>
General tactics for greed include deciding how riskily to play based on how many points you have compared to your opponent(s) and, in general, deciding when to take risks. With this in mind, I started thinking about how to best write this algorithm and realized that the best approach would be to isolate point values at which a certain decision would switch from being a favorable risk to an unfavorable risk. For example, how many points do you have to have before it becomes unwise to re-roll 4 available non-scoring dice?
</p><br><p>
Using this approach, I decided to write code that would create a configuration file that included values for each of these decision points. Then, using the configuration file, the algorithm knows how to make each of the Greed decisions and determine the resulting average points per round. Using this, you can determine whether the way you are making the decision positively or negatively affects the average points scored per round by comparing it to a simulation that uses different point values for those key decision points. To create my algorithm, I started by making a list of every decision I would take into consideration.
</p><br><p>
The Github code is available <a href="https://github.com/thekarlbrown/GreedAlgorithm/tree/master/src/com/company">here</a> One of my biggest blockers occurred while I was trying to figure out how to order all of the different decisions and organize the flow in a way which would lead to a logical decision making process. After some thought, I realized that I should first segregate the decision making processes based on the number of non-scoring re-rollable dice. In terms of coding best practices, I did some refactoring early on when I realized the most optimal and cleanest way of handling all of the configuration creation was to create a standalone configuration class and place all the accompanying logic inside it.
</p><br><p>
Although I have yet to delve very deep into figuring out what is optimal, I have come to some interesting conclusions thus far. For example, I know that, when simulating 100,000,000 rounds of the game Greed, I saw that if the computer chooses never to re-roll dice and always keeps the points scored on its initial roll, its average number of points per round will be 2.26. I intend to figure out what decisions are almost always very bad and what decisions are key to maximizing your score. Then I will hone in on every possible configuration surrounding the decisions that matter, in ranges of point values. I will subsequently do a massive simulation to try to get graph-friendly comparable data in order to find out the PERFECT way to play a game of Greed. However, it is important to note that these conclusions will only apply to the first few rounds of a game of Greed, as my Algorithm does not take into consideration how a player’s score compares to other players’ and the potential motivation to make riskier decisions when one has started losing.
</p>`
  };
  constructor() { }

  public getPost(postName: string): string {
    if ((postName in this.blogContainer)) {
      return this.blogContainer[postName];
    } else {
      return 'The blog post was not found! Did you specify the correct URL?';
    }
  }

}
