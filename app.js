const warriorsGames = [
    {
    awayTeam: {
        team: 'Golden State',
        points: 119,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 106,
        isWinner: false
    }
    },
   
   
    {
    awayTeam: {
        team: 'Golden State',
        points: 105,
        isWinner: false
    },
    homeTeam: {
        team: 'Houston',
        points: 127,
        isWinner: true
    }
    },
  
    {
    homeTeam: {
        team: 'Golden State',
        points: 126,
        isWinner: true
    },
    awayTeam: {
        team: 'Houston',
        points: 85,
        isWinner: false
    }
    },
  
  
    {
    homeTeam: {
        team: 'Golden State',
        points: 92,
        isWinner: false
    },
    awayTeam: {
        team: 'Houston',
        points: 95,
        isWinner: true
    }
    },
  
  
    {
    awayTeam: {
        team: 'Golden State',
        points: 94,
        isWinner: false
    },
    homeTeam: {
        team: 'Houston',
        points: 98,
        isWinner: true
    }
    },
  
  
    {
    homeTeam: {
        team: 'Golden State',
        points: 115,
        isWinner: true
    },
    awayTeam: {
        team: 'Houston',
        points: 86,
        isWinner: false
    }
    },
  
  
    {
    awayTeam: {
        team: 'Golden State',
        points: 101,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 92,
        isWinner: false   
    }
    }
]



const makeChart = (games, targetTeam) => {

    //console.log(`target team -> ${targetTeam}`);
    const ulParent = document.createElement('ul');
    for(let game of games){
        const {homeTeam, awayTeam} = game;
    
        const gameLi = document.createElement('li');
      
        let isAWin = isWinner(game, targetTeam);
        console.log(`Is A Win -> ${isAWin}`);
        let className;
        if(isAWin){
            className = 'win'
        }
        else{
            className = 'loss'
        }
         
    
        // console.log(warriors);
    
        gameLi.classList.add(className);
        gameLi.innerHTML = getScoreLine(game);
        ulParent.appendChild(gameLi);
      
        
        // console.log(awayTeam.team, homeTeam.team);
    }
    return ulParent;
}

const isWinner = ({ homeTeam, awayTeam },targetTeam) =>{
     const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
     return target.isWinner;
}

const getScoreLine = ({ homeTeam, awayTeam }) => {
    const { team:hteam, points:hpoints } = homeTeam;
    const { team:ateam, points:apoints } = awayTeam;

    const teamNames = `${ateam} @ ${hteam}`

    let scoreLine;

    if(apoints > hpoints){
        scoreLine = `<b>${apoints}</b> - ${hpoints}`;
    }
    else{
        scoreLine = `${apoints} - <b>${hpoints}</b>`;
    }

    return `${teamNames}  ${scoreLine}`;
}

const gsSection = document.querySelector('#gs');
const houstonSection =  document.querySelector('#h');

const gsChart = makeChart(warriorsGames, 'Golden State');
const hrChart = makeChart(warriorsGames, 'Houston');

gsSection.appendChild(gsChart);
houstonSection.appendChild(hrChart);
