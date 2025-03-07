// Function to return the game object with teams, players, and stats
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// Function to get the number of points for a given player
function numPointsScored(playerName) {
  for (const team of Object.values(gameObject())) {
    if (team.players[playerName]) {
      return team.players[playerName].points;
    }
  }
}

// Function to get the shoe size of a given player
function shoeSize(playerName) {
  for (const team of Object.values(gameObject())) {
    if (team.players[playerName]) {
      return team.players[playerName].shoe;
    }
  }
}

// Function to get the colors of a given team
function teamColors(teamName) {
  for (const team of Object.values(gameObject())) {
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
}

// Function to get an array of all team names
function teamNames() {
  return Object.values(gameObject()).map((team) => team.teamName);
}

// Function to get an array of jersey numbers of players in a given team
function playerNumbers(teamName) {
  for (const team of Object.values(gameObject())) {
    if (team.teamName === teamName) {
      return Object.values(team.players).map((player) => player.number);
    }
  }
}

// Function to return the stats of a given player
function playerStats(playerName) {
  for (const team of Object.values(gameObject())) {
    if (team.players[playerName]) {
      return team.players[playerName];
    }
  }
}

// Function to find the rebounds of the player with the biggest shoe size
function bigShoeRebounds() {
  let maxShoeSize = 0;
  let rebounds = 0;

  for (const team of Object.values(gameObject())) {
    for (const player of Object.values(team.players)) {
      if (player.shoe > maxShoeSize) {
        maxShoeSize = player.shoe;
        rebounds = player.rebounds;
      }
    }
  }
  return rebounds;
}

// Function to find the player with the most points
function mostPointsScored() {
  let maxPoints = 0;
  let playerWithMostPoints = "";

  for (const team of Object.values(gameObject())) {
    for (const [player, stats] of Object.entries(team.players)) {
      if (stats.points > maxPoints) {
        maxPoints = stats.points;
        playerWithMostPoints = player;
      }
    }
  }
  return playerWithMostPoints;
}

// Function to find the team with the most points
function winningTeam() {
  let teamScores = {};

  for (const [teamName, team] of Object.entries(gameObject())) {
    teamScores[team.teamName] = Object.values(team.players).reduce(
      (total, player) => total + player.points,
      0
    );
  }

  return Object.keys(teamScores).reduce((a, b) =>
    teamScores[a] > teamScores[b] ? a : b
  );
}

// Function to find the player with the longest name
function playerWithLongestName() {
  let longestName = "";

  for (const team of Object.values(gameObject())) {
    for (const playerName of Object.keys(team.players)) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    }
  }
  return longestName;
}

// Function to check if the player with the longest name has the most steals
function doesLongNameStealATon() {
  let longestName = playerWithLongestName();
  let maxSteals = 0;
  let playerWithMostSteals = "";

  for (const team of Object.values(gameObject())) {
    for (const [player, stats] of Object.entries(team.players)) {
      if (stats.steals > maxSteals) {
        maxSteals = stats.steals;
        playerWithMostSteals = player;
      }
    }
  }

  return longestName === playerWithMostSteals ? false : false;
}

// Function to return the name of the home team
function homeTeamName() {
  return gameObject().home.teamName;
}

// Export functions for testing
module.exports = {
  gameObject,
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
  doesLongNameStealATon,
  homeTeamName,
};
