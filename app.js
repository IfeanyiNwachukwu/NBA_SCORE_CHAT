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

const ulParent = document.createElement('ul');

const makeChart = (games, targetTeam) => {
    for(let game of games){
        const {homeTeam, awayTeam} = game;
    
        const gameLi = document.createElement('li');
      
        let isAWin = isWinner(game, targetTeam);
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

// const chart1 = makeChart(warriorsGames, 'Golden State');
const chart2 = makeChart(warriorsGames, 'Houston');

document.body.prepend(ulParent);
