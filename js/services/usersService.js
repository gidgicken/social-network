angular.module('app').service('usersService', function($http){

  var view = 'login';
  var self = this;

  self.addUser = function(pname, ptagline, pimageUrl, pbio){
      var users = [];
      var newUserId = makeid();
      if(localStorage.getItem('localStoreUsers')){
        users = JSON.parse(localStorage.getItem('localStoreUsers'));
      }
      var newUser = {
        _id: newUserId,
        name: pname,
        tagline: ptagline,
        profileUrl: pimageUrl,
        bio: pbio,
        friends: []
      }
      users.push(newUser);
      localStorage.setItem("loggedInUser", JSON.stringify(newUser));
      localStorage.setItem('localStoreUsers', JSON.stringify(users));
  }
  this.getLoggedInUser = function(){
    if(localStorage.getItem('loggedInUser')){
      return JSON.parse(localStorage.getItem('loggedInUser'));
    }
  }
  this.getUsers = function(){
    if(localStorage.getItem('localStoreUsers')){
      return JSON.parse(localStorage.getItem('localStoreUsers'));
    }
  }

  this.usersMinusFriends = function(){
    var users = JSON.parse(localStorage.getItem('localStoreUsers'));
    var usersAdjusted = [];
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    for(var i = 0; i < users.length; i++){
      if(loggedInUser.friends.indexOf(users[i]._id) === -1 && users[i]._id != loggedInUser._id){
        usersAdjusted.push(users[i]);
      }
    }
    return usersAdjusted;
  }

  this.updateInfo = function(newName, newTagline, newProfileUrl, newBio){
    var users = JSON.parse(localStorage.getItem('localStoreUsers'));
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if(newName){loggedInUser.name = newName;}
    if(newTagline){loggedInUser.tagline = newTagline;}
    if(newProfileUrl){loggedInUser.profileUrl = newProfileUrl;}
    if(newBio){loggedInUser.bio = newBio;}

    for(var i = 0; i < users.length; i++){
      if(users[i]._id === loggedInUser._id){
        users[i] = loggedInUser;
        break;
      }
    }
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    localStorage.setItem('localStoreUsers', JSON.stringify(users));
  }

  this.getCurrentFriends = function(){
    var users = JSON.parse(localStorage.getItem('localStoreUsers'));
    var currentFriends = [];
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    for(var i = 0; i < users.length; i++){
      if(loggedInUser.friends.indexOf(users[i]._id) != -1){
        currentFriends.push(users[i]);
      }
    }
    return currentFriends;
  }

  this.getSelectedFriend = function(id){
    var users = JSON.parse(localStorage.getItem('localStoreUsers'));
    for(var i = 0; i < users.length; i++){
      if(users[i]._id === id){
        return users[i];
      }
    }
    return false;
  }

  function changeView(newView){
    view = newView;
  }
  this.getView = function(){
    return view;
  }

  this.tryLogin = function(fullName){
      var users = JSON.parse(localStorage.getItem('localStoreUsers'));
      for(var i = 0; i < users.length; i++){
        if(fullName === users[i].name){
          localStorage.setItem('loggedInUser', JSON.stringify(users[i]));
          changeView('myprofile');
          return;
        }
      }
      localStorage.setItem('loggedInUser', JSON.stringify({name: 'INVALID'}));
      changeView('login');
    }

  this.isCurrentFriend = function(id){
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if(loggedInUser.friends.indexOf(id) != -1){
      return true;
    }else{
      return false;
    }
  }

  this.getUsersMinusSelf = function(){
    var users = JSON.parse(localStorage.getItem('localStoreUsers'));
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    var usersMinusSelf = [];
    for(var i = 0; i < users.length; i++){
      if(users[i]._id != loggedInUser._id){
        usersMinusSelf.push(users[i]);
      }
    }
    return usersMinusSelf;
  }

  this.updateView = function(){
    if(JSON.parse(localStorage.getItem('loggedInUser')).name === 'INVALID'){
      return 'login';
    }else{
      return 'myprofile';
    }
  }

  this.fillUsers = function(){
    if(!localStorage.getItem('localStoreUsers')){
      self.addUser('Kevin Durant', 'Just clutch enough to win 3. Not clutch enough to win it all', 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png&w=350&h=254', 'Kevin Wayne Durant (born September 29, 1988) is an American professional basketball player for the Oklahoma City Thunder of the National Basketball Association (NBA). He has played the small forward position for the Thunder, formerly the Seattle SuperSonics. Durant has won an NBA Most Valuable Player Award, four NBA scoring titles, the NBA Rookie of the Year Award, and an Olympic gold medal. He has also been selected to six All-NBA teams and seven All-Star teams.');
      self.addUser('Boba Fett', 'I got 99 problems, but my dad ain\'t one', 'https://upload.wikimedia.org/wikipedia/en/3/3e/FettbobaJB.png', 'With his customized Mandalorian armor, deadly weaponry, and silent demeanor, Boba Fett was one of the most feared bounty hunters in the galaxy. A genetic clone of his “father,” bounty hunter Jango Fett, Boba learned combat and martial skills from a young age. Over the course of his career, which included contracts for the Empire and the criminal underworld, he became a legend.');
      self.addUser('Jeremy Robertson', "I NEVER say 'always' or 'never'. So if I do, NEVER ignore it. Always.", 'https://pbs.twimg.com/profile_images/608487994467573760/DEGj834d_400x400.png', 'Organa yavin moff jinn. Organa kashyyyk amidala calrissian moff jinn sidious binks. Moff grievous moff moff. Mandalore wedge moff dantooine dantooine moff skywalker tusken raider skywalker. Ackbar lars dagobah droid dagobah kashyyyk darth lando skywalker. Sidious antilles kit gamorrean. Jabba yoda wampa lobot. Grievous wampa antilles antilles dagobah padmé coruscant. Jinn greedo skywalker ben darth c-3p0 grievous mon. Mon moff sebulba ackbar k-3po mara antilles. Droid moff hutt jango amidala moff anakin.');
      self.addUser('Lotney Sloth Fratelli', 'HEYYYY YOOOOU GUUUUUYS!', 'http://assets.nydailynews.com/polopoly_fs/1.99805.1313909065!/img/httpImage/gal-gn-johnmatuszak-1-jpg.jpg', 'Sloth is the first child of Mama Fratelli.He didn\'t have very good relationships with his family member,especially with his two brothers.Jack and Francis.After meeting Chunk of the Goonies he started to have more selfestem in his self and starts to protect in a kind of way the other Goonies from his mother and his two brothers.After the young fellas descover the pirate treasure Sloth has a reniunion with his mother,who tells him that she loved him more than his two other brothers.');
      self.addUser('Sir Ian McKellen', 'That\'s what they used to call me', 'https://pbs.twimg.com/profile_images/3633670448/8ddcdf11c5fb8fb8851c8c0457e85383_400x400.jpeg', 'Sir Ian Murray McKellen, CH, CBE (born 25 May 1939) is an English actor.[2][3] He is the recipient of six Laurence Olivier Awards, a Tony Award, a Golden Globe Award, a Screen Actors Guild Award, a BIF Award, two Saturn Awards, four Drama Desk Awards and two Critics\' Choice Awards. He has also received two Academy Award nominations, four BAFTA nominations and five Emmy Award nominations. McKellen\'s work spans genres ranging from Shakespearean and modern theatre to popular fantasy and science fiction. His most well known film roles include Gandalf in The Lord of the Rings and The Hobbit trilogies and Magneto in the X-Men films.');
      self.addUser('Dipsy', 'Bad-a** break-dancer. Gets all up in yo\' kid\'s grill', 'http://cdn-gulli.ladmedia.fr/var/jeunesse/storage/images/tiji/tout-tiji/ti-heros/teletubbies/tout-savoir/personnages/dipsy/5903-3-fre-FR/Dipsy.jpg', 'Dipsy is the second Teletubby with an antenna that refers to a dipstick because of the name. Dipsy has a darker face than the other Teletubbies, implying that he is Black. He is jolly and likes talking to himself. He wears a white hat with black spots. ');
      self.addUser('Sweet Brown', "I didn't grab no shoes or nuthin'", 'http://www.blackenterprise.com/wp-content/blogs.dir/1/files/2012/11/SweetBrown300232.jpg', 'In April 2013, Sweet Brown sued Apple for selling a song called "I Got Bronchitis" on iTunes for profit, using catchphrases uttered by her in the video, such as "Ain\'t nobody got time for that?", "Ran for my life," and "Oh, Lord Jesus, it\'s a fire!"');
      self.addUser('He-Man', 'I said HEEyyEEyyEEEyyyEyey', 'https://pbs.twimg.com/profile_images/633817680286384128/TMHEs83b.jpg', "He-Man is the principal character of a series of comic books and several animated television series, characterized by his superhuman strength. In most variations, he is the alter ego of Prince Adam. He-Man and his friends attempt to defend the realm of Eternia and the secrets of Castle Grayskull from the evil forces of Skeletor.");
      self.addUser('Smoke Monster', 'Takatakataka *TRAIN NOISE* *whisper whisper*', 'http://lostringtones.com/ringtones/smoke_monster/img.jpg', "Born on the Island in the Classical Roman era, the Man in Black and his twin brother Jacob spent their childhood with Mother in a cave. He was raised to believe that nothing existed across the sea from the Island, that the other people living on the Island were bad, and that his destiny was to protect the Heart of the Island from them at all cost. During this time, the Man in Black played games with Jacob and received preferential treatment from Mother, who favored his curious mind and thought of him as special. One day he saw a manifestation of his actual mother Claudia, who revealed how his childhood was a lie. She explained that the other people on the Island had shipwrecked with her, that he was taken from her as a baby following his birth, and that Mother had killed her immediately afterward. Enraged, the Man in Black defected to the camp of his mother's people and denounced the Island as his home.");
      self.addUser('Neil deGrasse Tyson', 'And you thought you hated science BEFORE!', 'http://static.parade.com/wp-content/uploads/2014/01/1-12-14-Neil-deGrasse-Tyson-inside-main-ftr.jpg', 'Neil deGrasse Tyson (born October 5, 1958) is an American astrophysicist, cosmologist, author, and science communicator. Since 1996, he has been the Frederick P. Rose Director of the Hayden Planetarium at the Rose Center for Earth and Space in New York City. The center is part of the American Museum of Natural History, where Tyson founded the Department of Astrophysics in 1997 and has been a research associate in the department since 2003.');
      self.addUser("Brian Scalabrine","The White Mamba","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/2/384/384/p2_302_4615.png","Now, here on this ragged patch of earth called Plataea, Xerxes' hordes face obliteration! Just there the barbarians huddle, sheer terror gripping tight their hearts with icy fingers - knowing full well what merciless horrors they suffered at the swords and spears of 300. Yet they stare now across the plain at 10,000 Spartans commanding 30,000 free Greeks!...\n\nThe enemy outnumber us a paltry 3 to 1, good odds for any Greek. This day, we rescue a world from mysticism and tyranny and usher in a future brighter than anything we can imagine. Give thanks, men, to Leonidas and the brave 300. TO VICTORY!");
    }
  }

  this.changeView = function(param_id){
    $state.go('profile({id = param_id})');
  }

  function makeid(){
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for( var i=0; i < 10; i++ )text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
  }

})
