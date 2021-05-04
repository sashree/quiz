class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide()

    background("yellow")
textSize(30)
    text("result of the quiz",340,50)
    text("--------------------------------------",320,65)

    Contestant.getPlayerInfo()

  if (allContestants!=undefined){
    var da=230
    textSize(20)
    fill ("blue")
    text("note:contestant who answered correct are highlited in green color",130,230)

    for (var plr in allContestants){
      var correctAnswer="2"

      if (correctAnswer==allContestants[plr].answer){
        fill ("green")
      }
      else {fill ("red")}
      da+=30
      textSize(20)
      text(allContestants[plr].name+":"+allContestants[plr].answer,250,da)
    }
  
  }

    
   
    
  }

}
