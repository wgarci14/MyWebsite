function getQuote() {
  var quotes = new Array();
  var source = new Array();

  quotes[0] = "If you think you are worth what you know, you are very wrong. Your knowledge today does not have much value beyond a couple of years. Your value is what you can learn and how easily you can adapt to the changes this profession brings so often.";
  source[0] = "Jose M. Aguilar.";

  quotes[1] = "Mostly, when you see programmers, they aren’t doing anything.  One of the attractive things about programmers is that you cannot tell whether or not they are working simply by looking at them.  Very often they’re sitting there seemingly drinking coffee and gossiping, or just staring into space.  What the programmer is trying to do is get a handle on all the individual and unrelated ideas that are scampering around in his head.";
  source[1] = "Charles M. Strauss";

  quotes[2] = "Commenting your code is like cleaning your bathroom — you never want to do it, but it really does create a more pleasant experience for you and your guests.";
  source[2] = "Ryan Campbell";

  quotes[3] = "It’s OK to figure out murder mysteries, but you shouldn’t need to figure out code.  You should be able to read it.";
  source[3] = "Steve McConnell";

  quotes[4] = "Looking at code you wrote more than two weeks ago is like looking at code you are seeing for the first time.";
  source[4] = "Dan Hurvitz";

  quotes[5] = "The computer was born to solve problems that did not exist before.";
  source[5] = "Bill Gates";

  quotes[6] = "Everybody in this country should learn to program a computer because it teaches you how to think";
  source[6] = "Steve Jobs";

  quotes[7] = "Before software can be reusable it first has to be usable";
  source[7] = "Ralph Johnson";

  quotes[8] = "Code is like humor. When you have to explain it, it’s bad";
  source[8] = "Cory House";

  quotes[9] = "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.";
  source[9] = "Dan Salomon";
  
  quotes[10] = "Java is to JavaScript what car is to Carpet";
  source[10] = "Chris Heilmann";
  
  quotes[11] = "In order to be irreplaceable, one must always be different";
  source[11] = "Coco Chanel";
  
  quotes[12] = "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.";
  source[12] = "Muhammad Waseem";
  
  quotes[13] = "The most important property of a program is whether it accomplishes the intention of its user.";
  source[13] = "C.A.R. Hoare";
  
  quotes[14] = "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?";
  source[14] = "Brian Kernighan";

  quotes[15] = "Some of the best programming is done on paper, really. Putting it into the computer is just a minor detail.";
  source[15] = "Max Kanat-Alexander";

  i = Math.floor(Math.random() * quotes.length);

  document.write("<h3 class=\"q\">\"" + quotes[i] + "\"</h3>")
  document.write("<em class=\"q\">- " + source[i] + "</em>");
  
}


window.sr = ScrollReveal();

  
if(screen.width >= 1025) {

  // sr.reveal('.navbar', {
  //   duration: 1000,
  //   origin: 'top',
  //   distance: "50px"
  // });
  
  //quote
  sr.reveal('.quote', {
    duration: 1000,
    delay: 150,
    easing: 'ease-in'
    // origin: 'left',
    // distance: '300px',
    // viewFactor: 0.2
  });
  
  // about me
  sr.reveal('.avatar', {
    duration: 1500,
    delay: 250,
    origin: 'top',
    distance: "200px",
    viewFactor: 0.7
  });
  sr.reveal('.aboutme', {
    duration: 1500,
    delay: 500,
    origin: 'bottom',
    distance: "50px",
    viewFactor: 0.8
  });
  
  //my offer
  sr.reveal('.offer1', {
      duration: 750,
      delay: 0,
      origin: 'top',
      easing: 'ease-in',
  });
  sr.reveal('.offer2', {
      duration: 750,
      delay: 250,
      origin: 'top',
      easing: 'ease-in',
  });
  sr.reveal('.offer3', {
      duration: 750,
      delay: 500,
      origin: 'top',
      easing: 'ease-in',
  });
  sr.reveal('.offer4', {
      duration: 750,
      delay: 750,
      origin: 'top',
      easing: 'ease-in',
  });
  sr.reveal('.offer5', {
      duration: 750,
      delay: 1000,
      origin: 'top',
      easing: 'ease-in',
  });
  sr.reveal('.offer6', {
      duration: 750,
      delay: 1250,
      origin: 'top',
      easing: 'ease-in',
  });
  sr.reveal('.offer7', {
      duration: 750,
      delay: 1500,
      origin: 'top',
      easing: 'ease-in',
  });
  sr.reveal('.offer8', {
      duration: 750,
      delay: 1750,
      origin: 'top',
      easing: 'ease-in',
  });
  sr.reveal('.offer9', {
      duration: 750,
      delay: 2000,
      origin: 'top',
      easing: 'ease-in',
  });
  
  //education
  sr.reveal('.education-left', {
    duration: 1500,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.3
  });
  sr.reveal('.education-right', {
    duration: 1500,
    origin: 'right',
    distance: '200px',
    viewFactor: 0.3
  });
  
  // // programming section
  // sr.reveal('#programming', {
  //   duration: 1500,
  //   origin: 'bottom',
  //   distance: '300px',
  //   viewFactor: 0.3
  // });
  sr.reveal('.javasection', {
    duration: 2000,
    delay: 500,
    origin: 'right',
    distance: '300px',
    scale: .25,
  });
  sr.reveal('.bootstrapsection', {
    duration: 2000,
    delay: 500,
    origin: 'top',
    distance: '300px',
    scale: .25,
  });
  sr.reveal('.htmlsection', {
    duration: 2000,
    delay: 500,
    origin: 'top',
    distance: '300px',
    scale: .25,
  });
  sr.reveal('.csssection', {
    duration: 2000,
    delay: 500,
    origin: 'left',
    distance: '300px',
    scale: .25,
  });
  sr.reveal('.javascriptsection', {
    duration: 2000,
    delay: 500,
    origin: 'right',
    distance: '300px',
    scale: .25,
  });
  sr.reveal('.pythonsection', {
    duration: 2000,
    delay: 500,
    origin: 'bottom',
    distance: '300px',
    scale: .25,
  });
  sr.reveal('.nodesection', {
    duration: 2000,
    delay: 500,
    origin: 'left',
    distance: '300px',
    scale: .25,
  });
  
  //operating system section
  sr.reveal('.applecontainer', {
    duration: 1500,
    easing: 'ease-out',
    origin: 'top',
    distance: '500px',
    viewFactor: 0.5
  });
  sr.reveal('.windowscontainer', {
    duration: 1250,
    delay: 250,
    easing: 'ease-out',
    origin: 'top',
    distance: '350px',
    viewFactor: 0.9
  });
  sr.reveal('.androidcontainer', {
    duration: 1000,
    delay: 500,
    easing: 'ease-out',
    origin: 'top',
    distance: '350px',
    viewFactor: 0.9
  });
  
  //software
  sr.reveal('.listOfSoftware', {
    duration: 1500,
    delay: 500,
    distance: '200px',
  });

  //experience
  sr.reveal('.Turners', {
    duration: 1000,
    delay: 250,
    origin: 'top',
    easing: 'ease-in',
    viewFactor: 0.4
  });
  sr.reveal('.mpi', {
    duration: 1000,
    delay: 250,
    origin: 'top',
    easing: 'ease-in',
    viewFactor: 0.4
  });
  sr.reveal('.woodcare', {
    duration: 1000,
    delay: 250,
    origin: 'top',
    easing: 'ease-in',
    viewFactor: 0.4
  });
  sr.reveal('.interntech', {
    duration: 1000,
    delay: 250,
    origin: 'top',
    easing: 'ease-in',
    viewFactor: 0.4
  });
  
  //Project section
  sr.reveal('.Aria', {
    duration: 1250,
    delay: 250,
    origin: 'top',
    easing: 'ease-in',
    viewFactor: 0.3
  });
  sr.reveal('.project-left', {
    duration: 1500,
    origin: 'top',
    viewFactor: 0.4,
    scale: .5,
  });
  sr.reveal('.project-right', {
    duration: 2000,
    origin: 'top',
    viewFactor: 0.4,
    scale: 0.5
  });
  sr.reveal('.Website', {
    duration: 1250,
    delay: 250,
    origin: 'top',
    easing: 'ease-in',
    viewFactor: 0.3
  });
  
  //contact section
  sr.reveal('.info', {
    duration: 1250,
    ease:'ease-in-out',
    origin: 'left',
    distance: '300px',
    viewFactor: 0.4
  });
  sr.reveal('.map', {
    duration: 2000,
    delay: 750,
    ease:'ease-in-out',
    origin: 'bottom',
    distance: '300px',
    viewFactor: 0.4
  });
}