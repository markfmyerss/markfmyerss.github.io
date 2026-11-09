// Verified 2026 MLB snapshot with substantial team roles and primary-only league pools.
const MLB_TEAM_INFO = {
  "Athletics": {
    "name": "Athletics",
    "code": "ATH",
    "nickname": "Athletics",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "West",
    "mlbId": 133,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Brent Rooker",
      "Gage Jump",
      "J.T. Ginn",
      "Jacob Wilson",
      "Justin Sterner",
      "Luis Severino",
      "Mark Leiter Jr.",
      "Max Muncy",
      "Nick Kurtz",
      "Tyler Soderstrom"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/133/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/ATH.svg",
    "colors": {
      "primary": "#003831",
      "accent": "#EFB21E",
      "highlight": "#EFB21E",
      "ink": "#101014"
    }
  },
  "Houston Astros": {
    "name": "Houston Astros",
    "code": "HOU",
    "nickname": "Astros",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "West",
    "mlbId": 117,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-30",
    "snapshotRound": "Wild Card Series",
    "baseRosterCount": 26,
    "injuryAdditions": [
      "Carlos Correa",
      "Jake Meyers",
      "Mike Burrows"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/117/roster?rosterType=active&season=2026&date=2026-09-30&hydrate=person",
    "logo": "assets/mlb/logos/HOU.svg",
    "colors": {
      "primary": "#002D62",
      "accent": "#EB6E1F",
      "highlight": "#EB6E1F",
      "ink": "#101014"
    }
  },
  "Los Angeles Angels": {
    "name": "Los Angeles Angels",
    "code": "LAA",
    "nickname": "Angels",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "West",
    "mlbId": 108,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Ben Joyce",
      "George Klassen",
      "Jack Kochanowicz",
      "Nolan Schanuel",
      "Samy Natera Jr.",
      "Yoán Moncada"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/108/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/LAA.svg",
    "colors": {
      "primary": "#BA0021",
      "accent": "#003263",
      "highlight": "#003263",
      "ink": "#101014"
    }
  },
  "Seattle Mariners": {
    "name": "Seattle Mariners",
    "code": "SEA",
    "nickname": "Mariners",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "West",
    "mlbId": 136,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Andrés Muñoz",
      "Brendan Donovan",
      "Colt Emerson",
      "Emerson Hancock",
      "Logan Evans",
      "Luke Raley",
      "Matt Brash"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/136/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/SEA.svg",
    "colors": {
      "primary": "#0C2C56",
      "accent": "#005C5C",
      "highlight": "#005C5C",
      "ink": "#101014"
    }
  },
  "Texas Rangers": {
    "name": "Texas Rangers",
    "code": "TEX",
    "nickname": "Rangers",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "West",
    "mlbId": 140,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Cole Winn",
      "Jack Leiter",
      "Jalen Beeks",
      "Joc Pederson",
      "Josh Jung",
      "Kyle Higashioka"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/140/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/TEX.svg",
    "colors": {
      "primary": "#003278",
      "accent": "#C0111F",
      "highlight": "#C0111F",
      "ink": "#101014"
    }
  },
  "Baltimore Orioles": {
    "name": "Baltimore Orioles",
    "code": "BAL",
    "nickname": "Orioles",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "East",
    "mlbId": 110,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Blaze Alexander",
      "Jackson Holliday",
      "Jordan Westburg",
      "Keegan Akin",
      "Kyle Bradish",
      "Luis Robert Jr.",
      "Ryan Helsley",
      "Ryan Mountcastle",
      "Samuel Basallo",
      "Tyler O'Neill",
      "Zach Eflin"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/110/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/BAL.svg",
    "colors": {
      "primary": "#DF4601",
      "accent": "#000000",
      "highlight": "#000000",
      "ink": "#101014"
    }
  },
  "Boston Red Sox": {
    "name": "Boston Red Sox",
    "code": "BOS",
    "nickname": "Red Sox",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "East",
    "mlbId": 111,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-30",
    "snapshotRound": "Wild Card Series",
    "baseRosterCount": 26,
    "injuryAdditions": [
      "Eli White",
      "Justin Slaten"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2026&date=2026-09-30&hydrate=person",
    "logo": "assets/mlb/logos/BOS.svg",
    "colors": {
      "primary": "#BD3039",
      "accent": "#0C2340",
      "highlight": "#0C2340",
      "ink": "#101014"
    }
  },
  "New York Yankees": {
    "name": "New York Yankees",
    "code": "NYY",
    "nickname": "Yankees",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "East",
    "mlbId": 147,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-10-07",
    "snapshotRound": "Division Series",
    "baseRosterCount": 26,
    "injuryAdditions": [
      "Fernando Cruz"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/147/roster?rosterType=active&season=2026&date=2026-10-07&hydrate=person",
    "logo": "assets/mlb/logos/NYY.svg",
    "colors": {
      "primary": "#132448",
      "accent": "#E4002C",
      "highlight": "#E4002C",
      "ink": "#101014"
    }
  },
  "Tampa Bay Rays": {
    "name": "Tampa Bay Rays",
    "code": "TB",
    "nickname": "Rays",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "East",
    "mlbId": 139,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-10-28",
    "snapshotRound": "World Series",
    "baseRosterCount": 26,
    "injuryAdditions": [
      "Edwin Uceta",
      "Gavin Lux",
      "Ryan Pepiot"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/139/roster?rosterType=active&season=2026&date=2026-10-28&hydrate=person",
    "logo": "assets/mlb/logos/TB.svg",
    "colors": {
      "primary": "#092C5C",
      "accent": "#8FBCE6",
      "highlight": "#8FBCE6",
      "ink": "#101014"
    }
  },
  "Toronto Blue Jays": {
    "name": "Toronto Blue Jays",
    "code": "TOR",
    "nickname": "Blue Jays",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "East",
    "mlbId": 141,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Addison Barger",
      "Bowden Francis",
      "Dylan Cease",
      "Jameson Taillon",
      "José Berríos",
      "Luis Urías",
      "Patrick Corbin",
      "Shane Bieber"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/141/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/TOR.svg",
    "colors": {
      "primary": "#134A8E",
      "accent": "#E8291C",
      "highlight": "#E8291C",
      "ink": "#101014"
    }
  },
  "Chicago White Sox": {
    "name": "Chicago White Sox",
    "code": "CWS",
    "nickname": "White Sox",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "Central",
    "mlbId": 145,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-10-10",
    "snapshotRound": "Division Series",
    "baseRosterCount": 26,
    "injuryAdditions": [
      "Brooks Baldwin",
      "Jordan Leasure",
      "Mike Vasil"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/145/roster?rosterType=active&season=2026&date=2026-10-10&hydrate=person",
    "logo": "assets/mlb/logos/CWS.svg",
    "colors": {
      "primary": "#27251F",
      "accent": "#C4CED4",
      "highlight": "#C4CED4",
      "ink": "#101014"
    }
  },
  "Cleveland Guardians": {
    "name": "Cleveland Guardians",
    "code": "CLE",
    "nickname": "Guardians",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "Central",
    "mlbId": 114,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-10-19",
    "snapshotRound": "League Championship Series",
    "baseRosterCount": 26,
    "injuryAdditions": [],
    "source": "https://statsapi.mlb.com/api/v1/teams/114/roster?rosterType=active&season=2026&date=2026-10-19&hydrate=person",
    "logo": "assets/mlb/logos/CLE.svg",
    "colors": {
      "primary": "#002B5C",
      "accent": "#E50022",
      "highlight": "#E50022",
      "ink": "#101014"
    }
  },
  "Detroit Tigers": {
    "name": "Detroit Tigers",
    "code": "DET",
    "nickname": "Tigers",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "Central",
    "mlbId": 116,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Colt Keith",
      "Kerry Carpenter",
      "Kyle Finnegan",
      "Matt Vierling",
      "Reese Olson",
      "Trey Sweeney",
      "Troy Melton",
      "Wenceel Pérez",
      "Will Vest"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/116/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/DET.svg",
    "colors": {
      "primary": "#0C2C56",
      "accent": "#FA4616",
      "highlight": "#FA4616",
      "ink": "#101014"
    }
  },
  "Kansas City Royals": {
    "name": "Kansas City Royals",
    "code": "KC",
    "nickname": "Royals",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "Central",
    "mlbId": 118,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Carlos Estévez",
      "Cole Ragans",
      "Jonathan India",
      "Luinder Avila",
      "Nick Mears",
      "Stephen Kolek"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/118/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/KC.svg",
    "colors": {
      "primary": "#004687",
      "accent": "#BD9B60",
      "highlight": "#BD9B60",
      "ink": "#101014"
    }
  },
  "Minnesota Twins": {
    "name": "Minnesota Twins",
    "code": "MIN",
    "nickname": "Twins",
    "singular": "player",
    "league": "MLB",
    "conference": "AL",
    "division": "Central",
    "mlbId": 142,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Anthony Banda",
      "Byron Buxton",
      "Cole Sands",
      "David Festa",
      "Jeff Hoffman",
      "Mike Paredes",
      "Pablo López",
      "Trevor Larnach"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/142/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/MIN.svg",
    "colors": {
      "primary": "#091F40",
      "accent": "#D31145",
      "highlight": "#D31145",
      "ink": "#101014"
    }
  },
  "Arizona Diamondbacks": {
    "name": "Arizona Diamondbacks",
    "code": "AZ",
    "nickname": "D-backs",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "West",
    "mlbId": 109,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Corbin Burnes",
      "Ryan Thompson"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/109/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/AZ.svg",
    "colors": {
      "primary": "#AA182C",
      "accent": "#E3D4AD",
      "highlight": "#E3D4AD",
      "ink": "#101014"
    }
  },
  "Colorado Rockies": {
    "name": "Colorado Rockies",
    "code": "COL",
    "nickname": "Rockies",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "West",
    "mlbId": 115,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Chase Dollander",
      "Willi Castro"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/115/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/COL.svg",
    "colors": {
      "primary": "#33006F",
      "accent": "#C4CED4",
      "highlight": "#C4CED4",
      "ink": "#101014"
    }
  },
  "Los Angeles Dodgers": {
    "name": "Los Angeles Dodgers",
    "code": "LAD",
    "nickname": "Dodgers",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "West",
    "mlbId": 119,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-10-15",
    "snapshotRound": "League Championship Series",
    "baseRosterCount": 26,
    "injuryAdditions": [
      "Ben Casparius",
      "Eric Lauer",
      "Will Klein"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/119/roster?rosterType=active&season=2026&date=2026-10-15&hydrate=person",
    "logo": "assets/mlb/logos/LAD.svg",
    "colors": {
      "primary": "#005A9C",
      "accent": "#EF3E42",
      "highlight": "#EF3E42",
      "ink": "#101014"
    }
  },
  "San Diego Padres": {
    "name": "San Diego Padres",
    "code": "SD",
    "nickname": "Padres",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "West",
    "mlbId": 135,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-10-07",
    "snapshotRound": "Division Series",
    "baseRosterCount": 26,
    "injuryAdditions": [
      "Casey Mize",
      "Lucas Giolito",
      "Luis Rengifo",
      "Ramón Laureano"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/135/roster?rosterType=active&season=2026&date=2026-10-07&hydrate=person",
    "logo": "assets/mlb/logos/SD.svg",
    "colors": {
      "primary": "#2F241C",
      "accent": "#FFC425",
      "highlight": "#FFC425",
      "ink": "#101014"
    }
  },
  "San Francisco Giants": {
    "name": "San Francisco Giants",
    "code": "SF",
    "nickname": "Giants",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "West",
    "mlbId": 137,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Adrian Houser",
      "Blade Tidwell",
      "Bryce Eldridge",
      "Carson Whisenhunt",
      "Casey Schmitt",
      "Harrison Bader",
      "Hayden Birdsong",
      "JT Brubaker",
      "José Buttó",
      "Jung Hoo Lee",
      "Keaton Winn",
      "Logan Webb",
      "Matt Chapman",
      "Matt Gage",
      "Rafael Devers",
      "Randy Rodríguez",
      "Trevor McDonald",
      "Willy Adames"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/137/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/SF.svg",
    "colors": {
      "primary": "#FD5A1E",
      "accent": "#27251F",
      "highlight": "#27251F",
      "ink": "#101014"
    }
  },
  "Atlanta Braves": {
    "name": "Atlanta Braves",
    "code": "ATL",
    "nickname": "Braves",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "East",
    "mlbId": 144,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-10-07",
    "snapshotRound": "Division Series",
    "baseRosterCount": 26,
    "injuryAdditions": [
      "Joey Wentz",
      "Spencer Schwellenbach",
      "Spencer Strider"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/144/roster?rosterType=active&season=2026&date=2026-10-07&hydrate=person",
    "logo": "assets/mlb/logos/ATL.svg",
    "colors": {
      "primary": "#CE1141",
      "accent": "#13274F",
      "highlight": "#13274F",
      "ink": "#101014"
    }
  },
  "Miami Marlins": {
    "name": "Miami Marlins",
    "code": "MIA",
    "nickname": "Marlins",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "East",
    "mlbId": 146,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Andrew Nardi",
      "Anthony Bender",
      "Max Meyer",
      "Owen Caissie",
      "Pete Fairbanks",
      "Ronny Henriquez",
      "Tyler Zuber"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/146/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/MIA.svg",
    "colors": {
      "primary": "#00A3E0",
      "accent": "#EF3340",
      "highlight": "#EF3340",
      "ink": "#101014"
    }
  },
  "New York Mets": {
    "name": "New York Mets",
    "code": "NYM",
    "nickname": "Mets",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "East",
    "mlbId": 121,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Christian Scott",
      "Jared Young",
      "Jorge Polanco",
      "Reed Garrett",
      "Robert Stock",
      "Tylor Megill"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/121/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/NYM.svg",
    "colors": {
      "primary": "#002D72",
      "accent": "#FF5910",
      "highlight": "#FF5910",
      "ink": "#101014"
    }
  },
  "Philadelphia Phillies": {
    "name": "Philadelphia Phillies",
    "code": "PHI",
    "nickname": "Phillies",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "East",
    "mlbId": 143,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-10-01",
    "snapshotRound": "Wild Card Series",
    "baseRosterCount": 26,
    "injuryAdditions": [
      "Adolis García",
      "Brad Keller",
      "Caleb Kilian"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/143/roster?rosterType=active&season=2026&date=2026-10-01&hydrate=person",
    "logo": "assets/mlb/logos/PHI.svg",
    "colors": {
      "primary": "#E81828",
      "accent": "#002D72",
      "highlight": "#002D72",
      "ink": "#101014"
    }
  },
  "Washington Nationals": {
    "name": "Washington Nationals",
    "code": "WSH",
    "nickname": "Nationals",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "East",
    "mlbId": 120,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Mitchell Parker",
      "Orlando Ribalta",
      "PJ Poulin"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/120/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/WSH.svg",
    "colors": {
      "primary": "#AB0003",
      "accent": "#14225A",
      "highlight": "#14225A",
      "ink": "#101014"
    }
  },
  "Chicago Cubs": {
    "name": "Chicago Cubs",
    "code": "CHC",
    "nickname": "Cubs",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "Central",
    "mlbId": 112,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-30",
    "snapshotRound": "Wild Card Series",
    "baseRosterCount": 26,
    "injuryAdditions": [
      "Ben Brown",
      "Cade Horton",
      "Phil Maton",
      "Shelby Miller"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/112/roster?rosterType=active&season=2026&date=2026-09-30&hydrate=person",
    "logo": "assets/mlb/logos/CHC.svg",
    "colors": {
      "primary": "#0E3386",
      "accent": "#CC3433",
      "highlight": "#CC3433",
      "ink": "#101014"
    }
  },
  "Cincinnati Reds": {
    "name": "Cincinnati Reds",
    "code": "CIN",
    "nickname": "Reds",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "Central",
    "mlbId": 113,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-21",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Chase Burns",
      "Hunter Greene",
      "Julian Garcia",
      "Michael Toglia",
      "Tony Santillan"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/113/roster?rosterType=active&season=2026&date=2026-09-21&hydrate=person",
    "logo": "assets/mlb/logos/CIN.svg",
    "colors": {
      "primary": "#C6011F",
      "accent": "#000000",
      "highlight": "#000000",
      "ink": "#101014"
    }
  },
  "Milwaukee Brewers": {
    "name": "Milwaukee Brewers",
    "code": "MIL",
    "nickname": "Brewers",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "Central",
    "mlbId": 158,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-10-28",
    "snapshotRound": "World Series",
    "baseRosterCount": 26,
    "injuryAdditions": [
      "Angel Zerpa",
      "Quinn Priester"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/158/roster?rosterType=active&season=2026&date=2026-10-28&hydrate=person",
    "logo": "assets/mlb/logos/MIL.svg",
    "colors": {
      "primary": "#12284B",
      "accent": "#FFC52F",
      "highlight": "#FFC52F",
      "ink": "#101014"
    }
  },
  "Pittsburgh Pirates": {
    "name": "Pittsburgh Pirates",
    "code": "PIT",
    "nickname": "Pirates",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "Central",
    "mlbId": 134,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Braxton Ashcraft",
      "Esmerlyn Valdez",
      "Isaac Mattson",
      "Mitch Keller"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/134/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/PIT.svg",
    "colors": {
      "primary": "#FFCE34",
      "accent": "#27251F",
      "highlight": "#27251F",
      "ink": "#101014"
    }
  },
  "St. Louis Cardinals": {
    "name": "St. Louis Cardinals",
    "code": "STL",
    "nickname": "Cardinals",
    "singular": "player",
    "league": "MLB",
    "conference": "NL",
    "division": "Central",
    "mlbId": 138,
    "verified": "November 9, 2026",
    "snapshotDate": "2026-09-27",
    "snapshotRound": "Final 28-man roster",
    "baseRosterCount": 28,
    "injuryAdditions": [
      "Hunter Dobbins"
    ],
    "source": "https://statsapi.mlb.com/api/v1/teams/138/roster?rosterType=active&season=2026&date=2026-09-27&hydrate=person",
    "logo": "assets/mlb/logos/STL.svg",
    "colors": {
      "primary": "#BE0A14",
      "accent": "#0C2340",
      "highlight": "#0C2340",
      "ink": "#101014"
    }
  }
};
const MLB_ROSTERS = {
  "Athletics": [
    {
      "id": "MLB-675961",
      "mlbId": 675961,
      "name": "Alika Williams",
      "number": "12",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/alika-williams-675961"
    },
    {
      "id": "MLB-669620",
      "mlbId": 669620,
      "name": "Brady Basso",
      "number": "66",
      "position": "RP",
      "positions": [
        "RP",
        "SP"
      ],
      "rosterPosition": "RP/SP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/brady-basso-669620"
    },
    {
      "id": "MLB-667670",
      "mlbId": 667670,
      "name": "Brent Rooker",
      "number": "25",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/brent-rooker-667670",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-661531",
      "mlbId": 661531,
      "name": "Brian Serven",
      "number": "10",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/brian-serven-661531"
    },
    {
      "id": "MLB-666126",
      "mlbId": 666126,
      "name": "Carlos Cortes",
      "number": "26",
      "position": "RF",
      "positions": [
        "RF",
        "LF"
      ],
      "rosterPosition": "RF/LF",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/carlos-cortes-666126"
    },
    {
      "id": "MLB-688297",
      "mlbId": 688297,
      "name": "Chris Roycroft",
      "number": "56",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/chris-roycroft-688297"
    },
    {
      "id": "MLB-672016",
      "mlbId": 672016,
      "name": "Denzel Clarke",
      "number": "1",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/denzel-clarke-672016"
    },
    {
      "id": "MLB-622268",
      "mlbId": 622268,
      "name": "Donovan Walton",
      "number": "29",
      "position": "2B",
      "positions": [
        "2B",
        "3B"
      ],
      "rosterPosition": "2B/3B",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/donovan-walton-622268"
    },
    {
      "id": "MLB-680723",
      "mlbId": 680723,
      "name": "Drew Rom",
      "number": "39",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/drew-rom-680723"
    },
    {
      "id": "MLB-665660",
      "mlbId": 665660,
      "name": "Elvis Alvarado",
      "number": "37",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/elvis-alvarado-665660"
    },
    {
      "id": "MLB-695611",
      "mlbId": 695611,
      "name": "Gage Jump",
      "number": "61",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/gage-jump-695611",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-664129",
      "mlbId": 664129,
      "name": "Geoff Hartlieb",
      "number": "31",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/geoff-hartlieb-664129"
    },
    {
      "id": "MLB-703607",
      "mlbId": 703607,
      "name": "Henry Bolte",
      "number": "33",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/henry-bolte-703607"
    },
    {
      "id": "MLB-663687",
      "mlbId": 663687,
      "name": "Hogan Harris",
      "number": "36",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/hogan-harris-663687"
    },
    {
      "id": "MLB-669372",
      "mlbId": 669372,
      "name": "J.T. Ginn",
      "number": "35",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/j-t-ginn-669372",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-678022",
      "mlbId": 678022,
      "name": "Jack Perkins",
      "number": "50",
      "position": "RP",
      "positions": [
        "RP",
        "SP"
      ],
      "rosterPosition": "RP/SP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/jack-perkins-678022"
    },
    {
      "id": "MLB-682052",
      "mlbId": 682052,
      "name": "Jacob Lopez",
      "number": "57",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/jacob-lopez-682052"
    },
    {
      "id": "MLB-805779",
      "mlbId": 805779,
      "name": "Jacob Wilson",
      "number": "5",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/jacob-wilson-805779",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-643446",
      "mlbId": 643446,
      "name": "Jeff McNeil",
      "number": "22",
      "position": "2B",
      "positions": [
        "2B",
        "1B"
      ],
      "rosterPosition": "2B/1B",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/jeff-mcneil-643446"
    },
    {
      "id": "MLB-605488",
      "mlbId": 605488,
      "name": "Jeffrey Springs",
      "number": "59",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/jeffrey-springs-605488"
    },
    {
      "id": "MLB-641680",
      "mlbId": 641680,
      "name": "Jonah Heim",
      "number": "15",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/jonah-heim-641680"
    },
    {
      "id": "MLB-811965",
      "mlbId": 811965,
      "name": "Joshua Kuroda-Grauer",
      "number": "44",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/joshua-kuroda-grauer-811965"
    },
    {
      "id": "MLB-686993",
      "mlbId": 686993,
      "name": "Justin Sterner",
      "number": "60",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/justin-sterner-686993",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-671732",
      "mlbId": 671732,
      "name": "Lawrence Butler",
      "number": "4",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/lawrence-butler-671732"
    },
    {
      "id": "MLB-665622",
      "mlbId": 665622,
      "name": "Luis Medina",
      "number": "46",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/luis-medina-665622"
    },
    {
      "id": "MLB-622663",
      "mlbId": 622663,
      "name": "Luis Severino",
      "number": "40",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/luis-severino-622663",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-643410",
      "mlbId": 643410,
      "name": "Mark Leiter Jr.",
      "number": "38",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/mark-leiter-jr-643410",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-686930",
      "mlbId": 686930,
      "name": "Mason Barnett",
      "number": "63",
      "position": "RP",
      "positions": [
        "RP",
        "SP"
      ],
      "rosterPosition": "RP/SP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/mason-barnett-686930"
    },
    {
      "id": "MLB-691777",
      "mlbId": 691777,
      "name": "Max Muncy",
      "number": "3",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/max-muncy-691777",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-683021",
      "mlbId": 683021,
      "name": "Michael Stefanic",
      "number": "17",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/michael-stefanic-683021"
    },
    {
      "id": "MLB-701762",
      "mlbId": 701762,
      "name": "Nick Kurtz",
      "number": "16",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/nick-kurtz-701762",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-656240",
      "mlbId": 656240,
      "name": "Scott Blewett",
      "number": "49",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/scott-blewett-656240"
    },
    {
      "id": "MLB-686751",
      "mlbId": 686751,
      "name": "Seth Johnson",
      "number": "52",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/seth-johnson-686751"
    },
    {
      "id": "MLB-669127",
      "mlbId": 669127,
      "name": "Shea Langeliers",
      "number": "23",
      "position": "C",
      "positions": [
        "C",
        "DH"
      ],
      "rosterPosition": "C/DH",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/shea-langeliers-669127"
    },
    {
      "id": "MLB-695720",
      "mlbId": 695720,
      "name": "Tommy White",
      "number": "47",
      "position": "1B",
      "positions": [
        "1B",
        "3B"
      ],
      "rosterPosition": "1B/3B",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/tommy-white-695720"
    },
    {
      "id": "MLB-691016",
      "mlbId": 691016,
      "name": "Tyler Soderstrom",
      "number": "21",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/tyler-soderstrom-691016",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-814305",
      "mlbId": 814305,
      "name": "Yunior Tur",
      "number": "70",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/yunior-tur-814305"
    },
    {
      "id": "MLB-680869",
      "mlbId": 680869,
      "name": "Zack Gelof",
      "number": "20",
      "position": "3B",
      "positions": [
        "3B",
        "2B"
      ],
      "rosterPosition": "3B/2B",
      "team": "Athletics",
      "profile": "https://www.mlb.com/player/zack-gelof-680869"
    }
  ],
  "Houston Astros": [
    {
      "id": "MLB-805123",
      "mlbId": 805123,
      "name": "AJ Blubaugh",
      "number": "69",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/aj-blubaugh-805123"
    },
    {
      "id": "MLB-656986",
      "mlbId": 656986,
      "name": "Bennett Sousa",
      "number": "62",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/bennett-sousa-656986"
    },
    {
      "id": "MLB-650556",
      "mlbId": 650556,
      "name": "Bryan Abreu",
      "number": "52",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/bryan-abreu-650556"
    },
    {
      "id": "MLB-687911",
      "mlbId": 687911,
      "name": "Bryan King",
      "number": "74",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/bryan-king-687911"
    },
    {
      "id": "MLB-701358",
      "mlbId": 701358,
      "name": "Cam Smith",
      "number": "11",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/cam-smith-701358"
    },
    {
      "id": "MLB-621043",
      "mlbId": 621043,
      "name": "Carlos Correa",
      "number": "1",
      "position": "SS",
      "positions": [
        "SS",
        "3B"
      ],
      "rosterPosition": "SS/3B",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/carlos-correa-621043",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-543877",
      "mlbId": 543877,
      "name": "Christian Vázquez",
      "number": "2",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/christian-vazquez-543877"
    },
    {
      "id": "MLB-572233",
      "mlbId": 572233,
      "name": "Christian Walker",
      "number": "8",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/christian-walker-572233"
    },
    {
      "id": "MLB-669713",
      "mlbId": 669713,
      "name": "Hayden Wesneski",
      "number": "39",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/hayden-wesneski-669713"
    },
    {
      "id": "MLB-686613",
      "mlbId": 686613,
      "name": "Hunter Brown",
      "number": "58",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/hunter-brown-686613"
    },
    {
      "id": "MLB-670623",
      "mlbId": 670623,
      "name": "Isaac Paredes",
      "number": "15",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/isaac-paredes-670623"
    },
    {
      "id": "MLB-676694",
      "mlbId": 676694,
      "name": "Jake Meyers",
      "number": "6",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/jake-meyers-676694",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-665161",
      "mlbId": 665161,
      "name": "Jeremy Peña",
      "number": "3",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/jeremy-pena-665161"
    },
    {
      "id": "MLB-694388",
      "mlbId": 694388,
      "name": "Joey Loperfido",
      "number": "10",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/joey-loperfido-694388"
    },
    {
      "id": "MLB-514888",
      "mlbId": 514888,
      "name": "Jose Altuve",
      "number": "27",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/jose-altuve-514888"
    },
    {
      "id": "MLB-623352",
      "mlbId": 623352,
      "name": "Josh Hader",
      "number": "71",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/josh-hader-623352"
    },
    {
      "id": "MLB-681973",
      "mlbId": 681973,
      "name": "Josh Hendrickson",
      "number": "61",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/josh-hendrickson-681973"
    },
    {
      "id": "MLB-701121",
      "mlbId": 701121,
      "name": "Logan VanWey",
      "number": "64",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/logan-vanwey-701121"
    },
    {
      "id": "MLB-828599",
      "mlbId": 828599,
      "name": "Lucas Spence",
      "number": "28",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/lucas-spence-828599"
    },
    {
      "id": "MLB-699044",
      "mlbId": 699044,
      "name": "Miguel Ullola",
      "number": "66",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/miguel-ullola-699044"
    },
    {
      "id": "MLB-681347",
      "mlbId": 681347,
      "name": "Mike Burrows",
      "number": "50",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/mike-burrows-681347",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-676369",
      "mlbId": 676369,
      "name": "Nelson Velázquez",
      "number": "30",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/nelson-velazquez-676369"
    },
    {
      "id": "MLB-669397",
      "mlbId": 669397,
      "name": "Nick Allen",
      "number": "20",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/nick-allen-669397"
    },
    {
      "id": "MLB-663567",
      "mlbId": 663567,
      "name": "Peter Lambert",
      "number": "38",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/peter-lambert-663567"
    },
    {
      "id": "MLB-669384",
      "mlbId": 669384,
      "name": "Raynel Delgado",
      "number": "29",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/raynel-delgado-669384"
    },
    {
      "id": "MLB-837227",
      "mlbId": 837227,
      "name": "Tatsuya Imai",
      "number": "45",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/tatsuya-imai-837227"
    },
    {
      "id": "MLB-666211",
      "mlbId": 666211,
      "name": "Taylor Trammell",
      "number": "26",
      "position": "LF",
      "positions": [
        "LF",
        "CF"
      ],
      "rosterPosition": "LF/CF",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/taylor-trammell-666211"
    },
    {
      "id": "MLB-673237",
      "mlbId": 673237,
      "name": "Yainer Diaz",
      "number": "21",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/yainer-diaz-673237"
    },
    {
      "id": "MLB-670541",
      "mlbId": 670541,
      "name": "Yordan Alvarez",
      "number": "44",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Houston Astros",
      "profile": "https://www.mlb.com/player/yordan-alvarez-670541"
    }
  ],
  "Los Angeles Angels": [
    {
      "id": "MLB-624428",
      "mlbId": 624428,
      "name": "Adam Frazier",
      "number": "20",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/adam-frazier-624428"
    },
    {
      "id": "MLB-690829",
      "mlbId": 690829,
      "name": "Ben Joyce",
      "number": "44",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/ben-joyce-690829",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-676620",
      "mlbId": 676620,
      "name": "Blake Weiman",
      "number": "68",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/blake-weiman-676620"
    },
    {
      "id": "MLB-669326",
      "mlbId": 669326,
      "name": "Bryce Teodosio",
      "number": "22",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/bryce-teodosio-669326"
    },
    {
      "id": "MLB-695681",
      "mlbId": 695681,
      "name": "Christian Moore",
      "number": "4",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/christian-moore-695681"
    },
    {
      "id": "MLB-694203",
      "mlbId": 694203,
      "name": "Denzer Guzman",
      "number": "23",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/denzer-guzman-694203"
    },
    {
      "id": "MLB-691946",
      "mlbId": 691946,
      "name": "George Klassen",
      "number": "58",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/george-klassen-691946",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-680570",
      "mlbId": 680570,
      "name": "Grayson Rodriguez",
      "number": "21",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/grayson-rodriguez-680570"
    },
    {
      "id": "MLB-686799",
      "mlbId": 686799,
      "name": "Jack Kochanowicz",
      "number": "41",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/jack-kochanowicz-686799",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-820862",
      "mlbId": 820862,
      "name": "José Fermin",
      "number": "65",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/jose-fermin-820862"
    },
    {
      "id": "MLB-642350",
      "mlbId": 642350,
      "name": "Jose Siri",
      "number": "28",
      "position": "LF",
      "positions": [
        "LF",
        "CF"
      ],
      "rosterPosition": "LF/CF",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/jose-siri-642350"
    },
    {
      "id": "MLB-666139",
      "mlbId": 666139,
      "name": "Josh Lowe",
      "number": "3",
      "position": "LF",
      "positions": [
        "LF",
        "RF"
      ],
      "rosterPosition": "LF/RF",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/josh-lowe-666139"
    },
    {
      "id": "MLB-684665",
      "mlbId": 684665,
      "name": "Luke Murphy",
      "number": "72",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/luke-murphy-684665"
    },
    {
      "id": "MLB-545361",
      "mlbId": 545361,
      "name": "Mike Trout",
      "number": "27",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/mike-trout-545361"
    },
    {
      "id": "MLB-815083",
      "mlbId": 815083,
      "name": "Mitch Farris",
      "number": "70",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/mitch-farris-815083"
    },
    {
      "id": "MLB-694208",
      "mlbId": 694208,
      "name": "Moisés Ballesteros",
      "number": "13",
      "position": "DH",
      "positions": [
        "DH",
        "C"
      ],
      "rosterPosition": "DH/C",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/moises-ballesteros-694208"
    },
    {
      "id": "MLB-694384",
      "mlbId": 694384,
      "name": "Nolan Schanuel",
      "number": "18",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/nolan-schanuel-694384",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-672724",
      "mlbId": 672724,
      "name": "Oswald Peraza",
      "number": "2",
      "position": "2B",
      "positions": [
        "2B",
        "3B"
      ],
      "rosterPosition": "2B/3B",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/oswald-peraza-672724"
    },
    {
      "id": "MLB-672282",
      "mlbId": 672282,
      "name": "Reid Detmers",
      "number": "48",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/reid-detmers-672282"
    },
    {
      "id": "MLB-696270",
      "mlbId": 696270,
      "name": "Ryan Johnson",
      "number": "32",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/ryan-johnson-696270"
    },
    {
      "id": "MLB-670245",
      "mlbId": 670245,
      "name": "Ryan Watson",
      "number": "56",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/ryan-watson-670245"
    },
    {
      "id": "MLB-696147",
      "mlbId": 696147,
      "name": "Sam Bachman",
      "number": "40",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/sam-bachman-696147"
    },
    {
      "id": "MLB-671111",
      "mlbId": 671111,
      "name": "Sammy Peralta",
      "number": "67",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/sammy-peralta-671111"
    },
    {
      "id": "MLB-696519",
      "mlbId": 696519,
      "name": "Samy Natera Jr.",
      "number": "52",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/samy-natera-jr-696519",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-642048",
      "mlbId": 642048,
      "name": "Tayler Saucedo",
      "number": "55",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/tayler-saucedo-642048"
    },
    {
      "id": "MLB-518595",
      "mlbId": 518595,
      "name": "Travis d'Arnaud",
      "number": "25",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/travis-d-arnaud-518595"
    },
    {
      "id": "MLB-694680",
      "mlbId": 694680,
      "name": "Trevor Martin",
      "number": "54",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/trevor-martin-694680"
    },
    {
      "id": "MLB-623168",
      "mlbId": 623168,
      "name": "Tyler Heineman",
      "number": "31",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/tyler-heineman-623168"
    },
    {
      "id": "MLB-687093",
      "mlbId": 687093,
      "name": "Vaughn Grissom",
      "number": "5",
      "position": "1B",
      "positions": [
        "1B",
        "2B",
        "3B"
      ],
      "rosterPosition": "1B/2B/3B",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/vaughn-grissom-687093"
    },
    {
      "id": "MLB-685133",
      "mlbId": 685133,
      "name": "Wade Meckler",
      "number": "53",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/wade-meckler-685133"
    },
    {
      "id": "MLB-700712",
      "mlbId": 700712,
      "name": "Walbert Ureña",
      "number": "57",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/walbert-urena-700712"
    },
    {
      "id": "MLB-660162",
      "mlbId": 660162,
      "name": "Yoán Moncada",
      "number": "10",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/yoan-moncada-660162",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-579328",
      "mlbId": 579328,
      "name": "Yusei Kikuchi",
      "number": "16",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/yusei-kikuchi-579328"
    },
    {
      "id": "MLB-687263",
      "mlbId": 687263,
      "name": "Zach Neto",
      "number": "9",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Los Angeles Angels",
      "profile": "https://www.mlb.com/player/zach-neto-687263"
    }
  ],
  "Seattle Mariners": [
    {
      "id": "MLB-662253",
      "mlbId": 662253,
      "name": "Andrés Muñoz",
      "number": "75",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/andres-munoz-662253",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-680977",
      "mlbId": 680977,
      "name": "Brendan Donovan",
      "number": "33",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/brendan-donovan-680977",
      "injuryInclusion": "Injured 7-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-693433",
      "mlbId": 693433,
      "name": "Bryan Woo",
      "number": "22",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/bryan-woo-693433"
    },
    {
      "id": "MLB-682243",
      "mlbId": 682243,
      "name": "Bryce Miller",
      "number": "50",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/bryce-miller-682243"
    },
    {
      "id": "MLB-663728",
      "mlbId": 663728,
      "name": "Cal Raleigh",
      "number": "29",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/cal-raleigh-663728"
    },
    {
      "id": "MLB-672841",
      "mlbId": 672841,
      "name": "Carlos Vargas",
      "number": "54",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/carlos-vargas-672841"
    },
    {
      "id": "MLB-702284",
      "mlbId": 702284,
      "name": "Cole Young",
      "number": "2",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/cole-young-702284"
    },
    {
      "id": "MLB-806068",
      "mlbId": 806068,
      "name": "Colt Emerson",
      "number": "4",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/colt-emerson-806068",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-681867",
      "mlbId": 681867,
      "name": "Cooper Criswell",
      "number": "88",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/cooper-criswell-681867"
    },
    {
      "id": "MLB-686527",
      "mlbId": 686527,
      "name": "Dominic Canzone",
      "number": "8",
      "position": "DH",
      "positions": [
        "DH",
        "RF"
      ],
      "rosterPosition": "DH/RF",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/dominic-canzone-686527"
    },
    {
      "id": "MLB-660825",
      "mlbId": 660825,
      "name": "Eduard Bazardo",
      "number": "83",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/eduard-bazardo-660825"
    },
    {
      "id": "MLB-676106",
      "mlbId": 676106,
      "name": "Emerson Hancock",
      "number": "26",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/emerson-hancock-676106",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-642100",
      "mlbId": 642100,
      "name": "Gabe Speier",
      "number": "55",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/gabe-speier-642100"
    },
    {
      "id": "MLB-669923",
      "mlbId": 669923,
      "name": "George Kirby",
      "number": "68",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/george-kirby-669923"
    },
    {
      "id": "MLB-571948",
      "mlbId": 571948,
      "name": "Hoby Milner",
      "number": "41",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/hoby-milner-571948"
    },
    {
      "id": "MLB-641487",
      "mlbId": 641487,
      "name": "J.P. Crawford",
      "number": "3",
      "position": "SS",
      "positions": [
        "SS",
        "3B"
      ],
      "rosterPosition": "SS/3B",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/j-p-crawford-641487"
    },
    {
      "id": "MLB-640902",
      "mlbId": 640902,
      "name": "Jhonny Pereda",
      "number": "5",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/jhonny-pereda-640902"
    },
    {
      "id": "MLB-678606",
      "mlbId": 678606,
      "name": "José A. Ferrer",
      "number": "45",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/jose-a-ferrer-678606"
    },
    {
      "id": "MLB-647304",
      "mlbId": 647304,
      "name": "Josh Naylor",
      "number": "12",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/josh-naylor-647304"
    },
    {
      "id": "MLB-677594",
      "mlbId": 677594,
      "name": "Julio Rodríguez",
      "number": "44",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/julio-rodriguez-677594"
    },
    {
      "id": "MLB-807739",
      "mlbId": 807739,
      "name": "Kade Anderson",
      "number": "13",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/kade-anderson-807739"
    },
    {
      "id": "MLB-703155",
      "mlbId": 703155,
      "name": "Lazaro Montes",
      "number": "99",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/lazaro-montes-703155"
    },
    {
      "id": "MLB-660844",
      "mlbId": 660844,
      "name": "Leo Rivas",
      "number": "76",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/leo-rivas-660844"
    },
    {
      "id": "MLB-688138",
      "mlbId": 688138,
      "name": "Logan Evans",
      "number": "23",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/logan-evans-688138",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-669302",
      "mlbId": 669302,
      "name": "Logan Gilbert",
      "number": "36",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/logan-gilbert-669302"
    },
    {
      "id": "MLB-670042",
      "mlbId": 670042,
      "name": "Luke Raley",
      "number": "20",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/luke-raley-670042",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-666374",
      "mlbId": 666374,
      "name": "Matt Brash",
      "number": "47",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/matt-brash-666374",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-703197",
      "mlbId": 703197,
      "name": "Michael Arroyo",
      "number": "96",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/michael-arroyo-703197"
    },
    {
      "id": "MLB-621074",
      "mlbId": 621074,
      "name": "Michael Rucker",
      "number": "38",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/michael-rucker-621074"
    },
    {
      "id": "MLB-668227",
      "mlbId": 668227,
      "name": "Randy Arozarena",
      "number": "56",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/randy-arozarena-668227"
    },
    {
      "id": "MLB-622554",
      "mlbId": 622554,
      "name": "Seranthony Domínguez",
      "number": "58",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/seranthony-dominguez-622554"
    },
    {
      "id": "MLB-621493",
      "mlbId": 621493,
      "name": "Taylor Ward",
      "number": "27",
      "position": "LF",
      "positions": [
        "LF",
        "DH"
      ],
      "rosterPosition": "LF/DH",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/taylor-ward-621493"
    },
    {
      "id": "MLB-700187",
      "mlbId": 700187,
      "name": "Troy Taylor",
      "number": "59",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/troy-taylor-700187"
    },
    {
      "id": "MLB-645302",
      "mlbId": 645302,
      "name": "Victor Robles",
      "number": "10",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/victor-robles-645302"
    },
    {
      "id": "MLB-642215",
      "mlbId": 642215,
      "name": "Weston Wilson",
      "number": "31",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Seattle Mariners",
      "profile": "https://www.mlb.com/player/weston-wilson-642215"
    }
  ],
  "Texas Rangers": [
    {
      "id": "MLB-696030",
      "mlbId": 696030,
      "name": "Alejandro Osuna",
      "number": "19",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/alejandro-osuna-696030"
    },
    {
      "id": "MLB-607043",
      "mlbId": 607043,
      "name": "Brandon Nimmo",
      "number": "24",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/brandon-nimmo-607043"
    },
    {
      "id": "MLB-695508",
      "mlbId": 695508,
      "name": "Cam Cauley",
      "number": "27",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/cam-cauley-695508"
    },
    {
      "id": "MLB-681217",
      "mlbId": 681217,
      "name": "Chase Silseth",
      "number": "63",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/chase-silseth-681217"
    },
    {
      "id": "MLB-674003",
      "mlbId": 674003,
      "name": "Cody Bradford",
      "number": "61",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/cody-bradford-674003"
    },
    {
      "id": "MLB-683227",
      "mlbId": 683227,
      "name": "Cody Freeman",
      "number": "39",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/cody-freeman-683227"
    },
    {
      "id": "MLB-668390",
      "mlbId": 668390,
      "name": "Cole Winn",
      "number": "60",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/cole-winn-668390",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-608369",
      "mlbId": 608369,
      "name": "Corey Seager",
      "number": "5",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/corey-seager-608369"
    },
    {
      "id": "MLB-643376",
      "mlbId": 643376,
      "name": "Danny Jansen",
      "number": "9",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/danny-jansen-643376"
    },
    {
      "id": "MLB-553869",
      "mlbId": 553869,
      "name": "Elias Díaz",
      "number": "35",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/elias-diaz-553869"
    },
    {
      "id": "MLB-694497",
      "mlbId": 694497,
      "name": "Evan Carter",
      "number": "32",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/evan-carter-694497"
    },
    {
      "id": "MLB-677649",
      "mlbId": 677649,
      "name": "Ezequiel Duran",
      "number": "20",
      "position": "SS",
      "positions": [
        "SS",
        "2B",
        "3B"
      ],
      "rosterPosition": "SS/2B/3B",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/ezequiel-duran-677649"
    },
    {
      "id": "MLB-683004",
      "mlbId": 683004,
      "name": "Jack Leiter",
      "number": "22",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/jack-leiter-683004",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-594798",
      "mlbId": 594798,
      "name": "Jacob deGrom",
      "number": "48",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/jacob-degrom-594798"
    },
    {
      "id": "MLB-656641",
      "mlbId": 656641,
      "name": "Jacob Latz",
      "number": "67",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/jacob-latz-656641"
    },
    {
      "id": "MLB-669394",
      "mlbId": 669394,
      "name": "Jake Burger",
      "number": "21",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/jake-burger-669394"
    },
    {
      "id": "MLB-596001",
      "mlbId": 596001,
      "name": "Jakob Junis",
      "number": "16",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/jakob-junis-596001"
    },
    {
      "id": "MLB-656222",
      "mlbId": 656222,
      "name": "Jalen Beeks",
      "number": "68",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/jalen-beeks-656222",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-592626",
      "mlbId": 592626,
      "name": "Joc Pederson",
      "number": "3",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/joc-pederson-592626",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-656756",
      "mlbId": 656756,
      "name": "Jordan Montgomery",
      "number": "52",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/jordan-montgomery-656756"
    },
    {
      "id": "MLB-673962",
      "mlbId": 673962,
      "name": "Josh Jung",
      "number": "6",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/josh-jung-673962",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-679822",
      "mlbId": 679822,
      "name": "Justin Foscue",
      "number": "14",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/justin-foscue-679822"
    },
    {
      "id": "MLB-677958",
      "mlbId": 677958,
      "name": "Kumar Rocker",
      "number": "80",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/kumar-rocker-677958"
    },
    {
      "id": "MLB-543309",
      "mlbId": 543309,
      "name": "Kyle Higashioka",
      "number": "11",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/kyle-higashioka-543309",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-669022",
      "mlbId": 669022,
      "name": "MacKenzie Gore",
      "number": "1",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/mackenzie-gore-669022"
    },
    {
      "id": "MLB-680737",
      "mlbId": 680737,
      "name": "Michael Helman",
      "number": "23",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/michael-helman-680737"
    },
    {
      "id": "MLB-543135",
      "mlbId": 543135,
      "name": "Nathan Eovaldi",
      "number": "17",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/nathan-eovaldi-543135"
    },
    {
      "id": "MLB-670032",
      "mlbId": 670032,
      "name": "Nicky Lopez",
      "number": "33",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/nicky-lopez-670032"
    },
    {
      "id": "MLB-682608",
      "mlbId": 682608,
      "name": "Peyton Gray",
      "number": "75",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/peyton-gray-682608"
    },
    {
      "id": "MLB-695239",
      "mlbId": 695239,
      "name": "Robby Ahlstrom",
      "number": "54",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/robby-ahlstrom-695239"
    },
    {
      "id": "MLB-676395",
      "mlbId": 676395,
      "name": "Robert Garcia",
      "number": "62",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/robert-garcia-676395"
    },
    {
      "id": "MLB-592866",
      "mlbId": 592866,
      "name": "Trevor Williams",
      "number": "51",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/trevor-williams-592866"
    },
    {
      "id": "MLB-641302",
      "mlbId": 641302,
      "name": "Tyler Alexander",
      "number": "13",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/tyler-alexander-641302"
    },
    {
      "id": "MLB-694671",
      "mlbId": 694671,
      "name": "Wyatt Langford",
      "number": "36",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Texas Rangers",
      "profile": "https://www.mlb.com/player/wyatt-langford-694671"
    }
  ],
  "Baltimore Orioles": [
    {
      "id": "MLB-544150",
      "mlbId": 544150,
      "name": "Albert Suárez",
      "number": "49",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/albert-suarez-544150"
    },
    {
      "id": "MLB-695380",
      "mlbId": 695380,
      "name": "Alex Hoppe",
      "number": "26",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/alex-hoppe-695380"
    },
    {
      "id": "MLB-552640",
      "mlbId": 552640,
      "name": "Andrew Kittredge",
      "number": "39",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/andrew-kittredge-552640"
    },
    {
      "id": "MLB-689296",
      "mlbId": 689296,
      "name": "Anthony Nunez",
      "number": "66",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/anthony-nunez-689296"
    },
    {
      "id": "MLB-677942",
      "mlbId": 677942,
      "name": "Blaze Alexander",
      "number": "23",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/blaze-alexander-677942",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-687064",
      "mlbId": 687064,
      "name": "Brandon Young",
      "number": "63",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/brandon-young-687064"
    },
    {
      "id": "MLB-676742",
      "mlbId": 676742,
      "name": "Cam Sanders",
      "number": "73",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/cam-sanders-676742"
    },
    {
      "id": "MLB-665966",
      "mlbId": 665966,
      "name": "Carlos Narváez",
      "number": "75",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/carlos-narvaez-665966"
    },
    {
      "id": "MLB-605135",
      "mlbId": 605135,
      "name": "Chris Bassitt",
      "number": "40",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/chris-bassitt-605135"
    },
    {
      "id": "MLB-687952",
      "mlbId": 687952,
      "name": "Christian Encarnacion-Strand",
      "number": "32",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/christian-encarnacion-strand-687952"
    },
    {
      "id": "MLB-681047",
      "mlbId": 681047,
      "name": "Christian Franklin",
      "number": "27",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/christian-franklin-681047"
    },
    {
      "id": "MLB-691723",
      "mlbId": 691723,
      "name": "Coby Mayo",
      "number": "16",
      "position": "3B",
      "positions": [
        "3B",
        "1B",
        "DH"
      ],
      "rosterPosition": "3B/1B/DH",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/coby-mayo-691723"
    },
    {
      "id": "MLB-681297",
      "mlbId": 681297,
      "name": "Colton Cowser",
      "number": "17",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/colton-cowser-681297"
    },
    {
      "id": "MLB-687637",
      "mlbId": 687637,
      "name": "Dylan Beavers",
      "number": "12",
      "position": "LF",
      "positions": [
        "LF",
        "RF"
      ],
      "rosterPosition": "LF/RF",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/dylan-beavers-687637"
    },
    {
      "id": "MLB-642585",
      "mlbId": 642585,
      "name": "Félix Bautista",
      "number": "74",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/felix-bautista-642585"
    },
    {
      "id": "MLB-664991",
      "mlbId": 664991,
      "name": "Grant Wolfram",
      "number": "48",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/grant-wolfram-664991"
    },
    {
      "id": "MLB-683002",
      "mlbId": 683002,
      "name": "Gunnar Henderson",
      "number": "2",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/gunnar-henderson-683002"
    },
    {
      "id": "MLB-677008",
      "mlbId": 677008,
      "name": "Heston Kjerstad",
      "number": "13",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/heston-kjerstad-677008"
    },
    {
      "id": "MLB-702616",
      "mlbId": 702616,
      "name": "Jackson Holliday",
      "number": "7",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/jackson-holliday-702616",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-669236",
      "mlbId": 669236,
      "name": "Jeremiah Jackson",
      "number": "82",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/jeremiah-jackson-669236"
    },
    {
      "id": "MLB-676059",
      "mlbId": 676059,
      "name": "Jordan Westburg",
      "number": "11",
      "position": "3B",
      "positions": [
        "3B",
        "2B"
      ],
      "rosterPosition": "3B/2B",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/jordan-westburg-676059",
      "injuryInclusion": "Missed the 2026 season; elbow surgery"
    },
    {
      "id": "MLB-676480",
      "mlbId": 676480,
      "name": "José Barrero",
      "number": "54",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/jose-barrero-676480"
    },
    {
      "id": "MLB-677020",
      "mlbId": 677020,
      "name": "Josh Walker",
      "number": "61",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/josh-walker-677020"
    },
    {
      "id": "MLB-669211",
      "mlbId": 669211,
      "name": "Keegan Akin",
      "number": "45",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/keegan-akin-669211",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-680694",
      "mlbId": 680694,
      "name": "Kyle Bradish",
      "number": "38",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/kyle-bradish-680694",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-665750",
      "mlbId": 665750,
      "name": "Leody Taveras",
      "number": "30",
      "position": "CF",
      "positions": [
        "CF",
        "RF"
      ],
      "rosterPosition": "CF/RF",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/leody-taveras-665750"
    },
    {
      "id": "MLB-673357",
      "mlbId": 673357,
      "name": "Luis Robert Jr.",
      "number": "88",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/luis-robert-jr-673357",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-624413",
      "mlbId": 624413,
      "name": "Pete Alonso",
      "number": "25",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/pete-alonso-624413"
    },
    {
      "id": "MLB-677956",
      "mlbId": 677956,
      "name": "Rece Hinds",
      "number": "62",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/rece-hinds-677956"
    },
    {
      "id": "MLB-670329",
      "mlbId": 670329,
      "name": "Rico Garcia",
      "number": "50",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/rico-garcia-670329"
    },
    {
      "id": "MLB-664854",
      "mlbId": 664854,
      "name": "Ryan Helsley",
      "number": "21",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/ryan-helsley-664854",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-663624",
      "mlbId": 663624,
      "name": "Ryan Mountcastle",
      "number": "6",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/ryan-mountcastle-663624",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-694212",
      "mlbId": 694212,
      "name": "Samuel Basallo",
      "number": "29",
      "position": "C",
      "positions": [
        "C",
        "DH"
      ],
      "rosterPosition": "C/DH",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/samuel-basallo-694212",
      "injuryInclusion": "Injured 7-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-669358",
      "mlbId": 669358,
      "name": "Shane Baz",
      "number": "34",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/shane-baz-669358"
    },
    {
      "id": "MLB-669432",
      "mlbId": 669432,
      "name": "Trevor Rogers",
      "number": "28",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/trevor-rogers-669432"
    },
    {
      "id": "MLB-641933",
      "mlbId": 641933,
      "name": "Tyler O'Neill",
      "number": "9",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/tyler-o-neill-641933",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-666974",
      "mlbId": 666974,
      "name": "Yennier Cano",
      "number": "78",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/yennier-cano-666974"
    },
    {
      "id": "MLB-650968",
      "mlbId": 650968,
      "name": "Yohel Pozo",
      "number": "79",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/yohel-pozo-650968"
    },
    {
      "id": "MLB-621107",
      "mlbId": 621107,
      "name": "Zach Eflin",
      "number": "24",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Baltimore Orioles",
      "profile": "https://www.mlb.com/player/zach-eflin-621107",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    }
  ],
  "Boston Red Sox": [
    {
      "id": "MLB-668939",
      "mlbId": 668939,
      "name": "Adley Rutschman",
      "number": "31",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/adley-rutschman-668939"
    },
    {
      "id": "MLB-687941",
      "mlbId": 687941,
      "name": "Alec Gamboa",
      "number": "68",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/alec-gamboa-687941"
    },
    {
      "id": "MLB-655316",
      "mlbId": 655316,
      "name": "Andruw Monasterio",
      "number": "32",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/andruw-monasterio-655316"
    },
    {
      "id": "MLB-547973",
      "mlbId": 547973,
      "name": "Aroldis Chapman",
      "number": "44",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/aroldis-chapman-547973"
    },
    {
      "id": "MLB-678394",
      "mlbId": 678394,
      "name": "Brayan Bello",
      "number": "66",
      "position": "RP",
      "positions": [
        "RP",
        "SP"
      ],
      "rosterPosition": "RP/SP",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/brayan-bello-678394"
    },
    {
      "id": "MLB-702332",
      "mlbId": 702332,
      "name": "Caleb Durbin",
      "number": "5",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/caleb-durbin-702332"
    },
    {
      "id": "MLB-678882",
      "mlbId": 678882,
      "name": "Ceddanne Rafaela",
      "number": "3",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/ceddanne-rafaela-678882"
    },
    {
      "id": "MLB-657136",
      "mlbId": 657136,
      "name": "Connor Wong",
      "number": "12",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/connor-wong-657136"
    },
    {
      "id": "MLB-678554",
      "mlbId": 678554,
      "name": "Curtis Mead",
      "number": "11",
      "position": "3B",
      "positions": [
        "3B",
        "1B"
      ],
      "rosterPosition": "3B/1B",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/curtis-mead-678554"
    },
    {
      "id": "MLB-642201",
      "mlbId": 642201,
      "name": "Eli White",
      "number": "38",
      "position": "RF",
      "positions": [
        "RF",
        "LF",
        "CF"
      ],
      "rosterPosition": "RF/LF/CF",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/eli-white-642201",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-669062",
      "mlbId": 669062,
      "name": "Erik Miller",
      "number": "67",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/erik-miller-669062"
    },
    {
      "id": "MLB-676979",
      "mlbId": 676979,
      "name": "Garrett Crochet",
      "number": "35",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/garrett-crochet-676979"
    },
    {
      "id": "MLB-676477",
      "mlbId": 676477,
      "name": "Garrett Whitlock",
      "number": "22",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/garrett-whitlock-676477"
    },
    {
      "id": "MLB-669711",
      "mlbId": 669711,
      "name": "Greg Weissert",
      "number": "57",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/greg-weissert-669711"
    },
    {
      "id": "MLB-643396",
      "mlbId": 643396,
      "name": "Isiah Kiner-Falefa",
      "number": "2",
      "position": "2B",
      "positions": [
        "2B",
        "SS"
      ],
      "rosterPosition": "2B/SS",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/isiah-kiner-falefa-643396"
    },
    {
      "id": "MLB-663330",
      "mlbId": 663330,
      "name": "Jahmai Jones",
      "number": "37",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/jahmai-jones-663330"
    },
    {
      "id": "MLB-687562",
      "mlbId": 687562,
      "name": "Jake Bennett",
      "number": "64",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/jake-bennett-687562"
    },
    {
      "id": "MLB-680776",
      "mlbId": 680776,
      "name": "Jarren Duran",
      "number": "16",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/jarren-duran-680776"
    },
    {
      "id": "MLB-686580",
      "mlbId": 686580,
      "name": "Justin Slaten",
      "number": "63",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/justin-slaten-686580",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-681987",
      "mlbId": 681987,
      "name": "Nate Eaton",
      "number": "18",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/nate-eaton-681987"
    },
    {
      "id": "MLB-686765",
      "mlbId": 686765,
      "name": "Nick Sogard",
      "number": "20",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/nick-sogard-686765"
    },
    {
      "id": "MLB-801139",
      "mlbId": 801139,
      "name": "Payton Tolle",
      "number": "70",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/payton-tolle-801139"
    },
    {
      "id": "MLB-624133",
      "mlbId": 624133,
      "name": "Ranger Suarez",
      "number": "55",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/ranger-suarez-624133"
    },
    {
      "id": "MLB-543243",
      "mlbId": 543243,
      "name": "Sonny Gray",
      "number": "54",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/sonny-gray-543243"
    },
    {
      "id": "MLB-596115",
      "mlbId": 596115,
      "name": "Trevor Story",
      "number": "10",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/trevor-story-596115"
    },
    {
      "id": "MLB-575929",
      "mlbId": 575929,
      "name": "Willson Contreras",
      "number": "40",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/willson-contreras-575929"
    },
    {
      "id": "MLB-677800",
      "mlbId": 677800,
      "name": "Wilyer Abreu",
      "number": "52",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/wilyer-abreu-677800"
    },
    {
      "id": "MLB-681544",
      "mlbId": 681544,
      "name": "Wyatt Olds",
      "number": "75",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Boston Red Sox",
      "profile": "https://www.mlb.com/player/wyatt-olds-681544"
    }
  ],
  "New York Yankees": [
    {
      "id": "MLB-645305",
      "mlbId": 645305,
      "name": "Ali Sánchez",
      "number": "39",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/ali-sanchez-645305"
    },
    {
      "id": "MLB-683011",
      "mlbId": 683011,
      "name": "Anthony Volpe",
      "number": "11",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/anthony-volpe-683011"
    },
    {
      "id": "MLB-669224",
      "mlbId": 669224,
      "name": "Austin Wells",
      "number": "28",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/austin-wells-669224"
    },
    {
      "id": "MLB-700250",
      "mlbId": 700250,
      "name": "Ben Rice",
      "number": "22",
      "position": "DH",
      "positions": [
        "DH",
        "1B"
      ],
      "rosterPosition": "DH/1B",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/ben-rice-700250"
    },
    {
      "id": "MLB-687396",
      "mlbId": 687396,
      "name": "Brent Headrick",
      "number": "47",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/brent-headrick-687396"
    },
    {
      "id": "MLB-693645",
      "mlbId": 693645,
      "name": "Cam Schlittler",
      "number": "31",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/cam-schlittler-693645"
    },
    {
      "id": "MLB-607074",
      "mlbId": 607074,
      "name": "Carlos Rodón",
      "number": "55",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/carlos-rodon-607074"
    },
    {
      "id": "MLB-641355",
      "mlbId": 641355,
      "name": "Cody Bellinger",
      "number": "35",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/cody-bellinger-641355"
    },
    {
      "id": "MLB-670280",
      "mlbId": 670280,
      "name": "David Bednar",
      "number": "53",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/david-bednar-670280"
    },
    {
      "id": "MLB-518585",
      "mlbId": 518585,
      "name": "Fernando Cruz",
      "number": "63",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/fernando-cruz-518585",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-806146",
      "mlbId": 806146,
      "name": "George Lombard Jr.",
      "number": "96",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/george-lombard-jr-806146"
    },
    {
      "id": "MLB-543037",
      "mlbId": 543037,
      "name": "Gerrit Cole",
      "number": "45",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/gerrit-cole-543037"
    },
    {
      "id": "MLB-519317",
      "mlbId": 519317,
      "name": "Giancarlo Stanton",
      "number": "27",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/giancarlo-stanton-519317"
    },
    {
      "id": "MLB-671218",
      "mlbId": 671218,
      "name": "Heliot Ramos",
      "number": "34",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/heliot-ramos-671218"
    },
    {
      "id": "MLB-665862",
      "mlbId": 665862,
      "name": "Jazz Chisholm Jr.",
      "number": "13",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/jazz-chisholm-jr-665862"
    },
    {
      "id": "MLB-670167",
      "mlbId": 670167,
      "name": "John Schreiber",
      "number": "56",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/john-schreiber-670167"
    },
    {
      "id": "MLB-676609",
      "mlbId": 676609,
      "name": "José Caballero",
      "number": "72",
      "position": "SS",
      "positions": [
        "SS",
        "2B",
        "3B"
      ],
      "rosterPosition": "SS/2B/3B",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/jose-caballero-676609"
    },
    {
      "id": "MLB-671277",
      "mlbId": 671277,
      "name": "Luis García Jr.",
      "number": "26",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/luis-garcia-jr-671277"
    },
    {
      "id": "MLB-608331",
      "mlbId": 608331,
      "name": "Max Fried",
      "number": "54",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/max-fried-608331"
    },
    {
      "id": "MLB-621112",
      "mlbId": 621112,
      "name": "Paul Blackburn",
      "number": "58",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/paul-blackburn-621112"
    },
    {
      "id": "MLB-502671",
      "mlbId": 502671,
      "name": "Paul Goldschmidt",
      "number": "48",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/paul-goldschmidt-502671"
    },
    {
      "id": "MLB-641857",
      "mlbId": 641857,
      "name": "Ryan McMahon",
      "number": "19",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/ryan-mcmahon-641857"
    },
    {
      "id": "MLB-677960",
      "mlbId": 677960,
      "name": "Ryan Weathers",
      "number": "40",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/ryan-weathers-677960"
    },
    {
      "id": "MLB-642232",
      "mlbId": 642232,
      "name": "Ryan Yarbrough",
      "number": "33",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/ryan-yarbrough-642232"
    },
    {
      "id": "MLB-682987",
      "mlbId": 682987,
      "name": "Spencer Jones",
      "number": "78",
      "position": "CF",
      "positions": [
        "CF",
        "RF"
      ],
      "rosterPosition": "CF/RF",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/spencer-jones-682987"
    },
    {
      "id": "MLB-663757",
      "mlbId": 663757,
      "name": "Trent Grisham",
      "number": "12",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/trent-grisham-663757"
    },
    {
      "id": "MLB-701542",
      "mlbId": 701542,
      "name": "Will Warren",
      "number": "29",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "New York Yankees",
      "profile": "https://www.mlb.com/player/will-warren-701542"
    }
  ],
  "Tampa Bay Rays": [
    {
      "id": "MLB-810938",
      "mlbId": 810938,
      "name": "Ben Williamson",
      "number": "15",
      "position": "2B",
      "positions": [
        "2B",
        "SS"
      ],
      "rosterPosition": "2B/SS",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/ben-williamson-810938"
    },
    {
      "id": "MLB-641329",
      "mlbId": 641329,
      "name": "Bryan Baker",
      "number": "47",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/bryan-baker-641329"
    },
    {
      "id": "MLB-592155",
      "mlbId": 592155,
      "name": "Cam Booser",
      "number": "62",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/cam-booser-592155"
    },
    {
      "id": "MLB-656775",
      "mlbId": 656775,
      "name": "Cedric Mullins",
      "number": "31",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/cedric-mullins-656775"
    },
    {
      "id": "MLB-802415",
      "mlbId": 802415,
      "name": "Chandler Simpson",
      "number": "14",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/chandler-simpson-802415"
    },
    {
      "id": "MLB-642121",
      "mlbId": 642121,
      "name": "Cole Sulser",
      "number": "71",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/cole-sulser-642121"
    },
    {
      "id": "MLB-656876",
      "mlbId": 656876,
      "name": "Drew Rasmussen",
      "number": "57",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/drew-rasmussen-656876"
    },
    {
      "id": "MLB-670955",
      "mlbId": 670955,
      "name": "Edwin Uceta",
      "number": "63",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/edwin-uceta-670955",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-642547",
      "mlbId": 642547,
      "name": "Freddy Peralta",
      "number": "51",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/freddy-peralta-642547"
    },
    {
      "id": "MLB-664076",
      "mlbId": 664076,
      "name": "Garrett Cleavinger",
      "number": "60",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/garrett-cleavinger-664076"
    },
    {
      "id": "MLB-666158",
      "mlbId": 666158,
      "name": "Gavin Lux",
      "number": "11",
      "position": "DH",
      "positions": [
        "DH",
        "LF"
      ],
      "rosterPosition": "DH/LF",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/gavin-lux-666158",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-643377",
      "mlbId": 643377,
      "name": "Griffin Jax",
      "number": "22",
      "position": "SP",
      "positions": [
        "SP",
        "RP"
      ],
      "rosterPosition": "SP/RP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/griffin-jax-643377"
    },
    {
      "id": "MLB-693855",
      "mlbId": 693855,
      "name": "Ian Seymour",
      "number": "61",
      "position": "RP",
      "positions": [
        "RP",
        "SP"
      ],
      "rosterPosition": "RP/SP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/ian-seymour-693855"
    },
    {
      "id": "MLB-666018",
      "mlbId": 666018,
      "name": "Jonathan Aranda",
      "number": "8",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/jonathan-aranda-666018"
    },
    {
      "id": "MLB-676356",
      "mlbId": 676356,
      "name": "Jonny DeLuca",
      "number": "21",
      "position": "RF",
      "positions": [
        "RF",
        "CF"
      ],
      "rosterPosition": "RF/CF",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/jonny-deluca-676356"
    },
    {
      "id": "MLB-622761",
      "mlbId": 622761,
      "name": "Jorge Mateo",
      "number": "9",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/jorge-mateo-622761"
    },
    {
      "id": "MLB-691406",
      "mlbId": 691406,
      "name": "Junior Caminero",
      "number": "13",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/junior-caminero-691406"
    },
    {
      "id": "MLB-687330",
      "mlbId": 687330,
      "name": "Kevin Kelly",
      "number": "49",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/kevin-kelly-687330"
    },
    {
      "id": "MLB-689414",
      "mlbId": 689414,
      "name": "Liam Hicks",
      "number": "34",
      "position": "C",
      "positions": [
        "C",
        "1B",
        "DH"
      ],
      "rosterPosition": "C/1B/DH",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/liam-hicks-689414"
    },
    {
      "id": "MLB-663743",
      "mlbId": 663743,
      "name": "Nick Fortes",
      "number": "40",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/nick-fortes-663743"
    },
    {
      "id": "MLB-607259",
      "mlbId": 607259,
      "name": "Nick Martinez",
      "number": "28",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/nick-martinez-607259"
    },
    {
      "id": "MLB-680700",
      "mlbId": 680700,
      "name": "Richie Palacios",
      "number": "1",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/richie-palacios-680700"
    },
    {
      "id": "MLB-686752",
      "mlbId": 686752,
      "name": "Ryan Pepiot",
      "number": "44",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/ryan-pepiot-686752",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-668723",
      "mlbId": 668723,
      "name": "Ryan Vilade",
      "number": "26",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/ryan-vilade-668723"
    },
    {
      "id": "MLB-571927",
      "mlbId": 571927,
      "name": "Steven Matz",
      "number": "32",
      "position": "RP",
      "positions": [
        "RP",
        "SP"
      ],
      "rosterPosition": "RP/SP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/steven-matz-571927"
    },
    {
      "id": "MLB-670764",
      "mlbId": 670764,
      "name": "Taylor Walls",
      "number": "6",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/taylor-walls-670764"
    },
    {
      "id": "MLB-669330",
      "mlbId": 669330,
      "name": "Tyler Wells",
      "number": "68",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/tyler-wells-669330"
    },
    {
      "id": "MLB-683748",
      "mlbId": 683748,
      "name": "Victor Mesa Jr.",
      "number": "25",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/victor-mesa-jr-683748"
    },
    {
      "id": "MLB-650490",
      "mlbId": 650490,
      "name": "Yandy Díaz",
      "number": "2",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Tampa Bay Rays",
      "profile": "https://www.mlb.com/player/yandy-diaz-650490"
    }
  ],
  "Toronto Blue Jays": [
    {
      "id": "MLB-680718",
      "mlbId": 680718,
      "name": "Addison Barger",
      "number": "47",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/addison-barger-680718",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-672386",
      "mlbId": 672386,
      "name": "Alejandro Kirk",
      "number": "30",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/alejandro-kirk-672386"
    },
    {
      "id": "MLB-665926",
      "mlbId": 665926,
      "name": "Andrés Giménez",
      "number": "0",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/andres-gimenez-665926"
    },
    {
      "id": "MLB-670102",
      "mlbId": 670102,
      "name": "Bowden Francis",
      "number": "44",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/bowden-francis-670102",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-678218",
      "mlbId": 678218,
      "name": "Brandon Valenzuela",
      "number": "59",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/brandon-valenzuela-678218"
    },
    {
      "id": "MLB-680755",
      "mlbId": 680755,
      "name": "Braydon Fisher",
      "number": "63",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/braydon-fisher-680755"
    },
    {
      "id": "MLB-676454",
      "mlbId": 676454,
      "name": "Brendan Cellucci",
      "number": "70",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/brendan-cellucci-676454"
    },
    {
      "id": "MLB-663893",
      "mlbId": 663893,
      "name": "Brendon Little",
      "number": "54",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/brendon-little-663893"
    },
    {
      "id": "MLB-703520",
      "mlbId": 703520,
      "name": "Brett Bateman",
      "number": "21",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/brett-bateman-703520"
    },
    {
      "id": "MLB-689149",
      "mlbId": 689149,
      "name": "Chad Dallas",
      "number": "37",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/chad-dallas-689149"
    },
    {
      "id": "MLB-807727",
      "mlbId": 807727,
      "name": "Charles McAdoo",
      "number": "26",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/charles-mcadoo-807727"
    },
    {
      "id": "MLB-695445",
      "mlbId": 695445,
      "name": "Chase Lee",
      "number": "52",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/chase-lee-695445"
    },
    {
      "id": "MLB-676914",
      "mlbId": 676914,
      "name": "Davis Schneider",
      "number": "36",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/davis-schneider-676914"
    },
    {
      "id": "MLB-656302",
      "mlbId": 656302,
      "name": "Dylan Cease",
      "number": "84",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/dylan-cease-656302",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-676391",
      "mlbId": 676391,
      "name": "Ernie Clement",
      "number": "22",
      "position": "2B",
      "positions": [
        "2B",
        "3B",
        "SS"
      ],
      "rosterPosition": "2B/3B/SS",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/ernie-clement-676391"
    },
    {
      "id": "MLB-543807",
      "mlbId": 543807,
      "name": "George Springer",
      "number": "4",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/george-springer-543807"
    },
    {
      "id": "MLB-592791",
      "mlbId": 592791,
      "name": "Jameson Taillon",
      "number": "56",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/jameson-taillon-592791",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-804619",
      "mlbId": 804619,
      "name": "John Klein",
      "number": "65",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/john-klein-804619"
    },
    {
      "id": "MLB-621244",
      "mlbId": 621244,
      "name": "José Berríos",
      "number": "17",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/jose-berrios-621244",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-667755",
      "mlbId": 667755,
      "name": "José Soriano",
      "number": "40",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/jose-soriano-667755"
    },
    {
      "id": "MLB-669701",
      "mlbId": 669701,
      "name": "Josh Smith",
      "number": "9",
      "position": "2B",
      "positions": [
        "2B",
        "3B"
      ],
      "rosterPosition": "2B/3B",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/josh-smith-669701"
    },
    {
      "id": "MLB-672960",
      "mlbId": 672960,
      "name": "Kazuma Okamoto",
      "number": "7",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/kazuma-okamoto-672960"
    },
    {
      "id": "MLB-686973",
      "mlbId": 686973,
      "name": "Louis Varland",
      "number": "77",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/louis-varland-686973"
    },
    {
      "id": "MLB-649966",
      "mlbId": 649966,
      "name": "Luis Urías",
      "number": "48",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/luis-urias-649966",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-689254",
      "mlbId": 689254,
      "name": "Mason Fluharty",
      "number": "68",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/mason-fluharty-689254"
    },
    {
      "id": "MLB-453286",
      "mlbId": 453286,
      "name": "Max Scherzer",
      "number": "31",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/max-scherzer-453286"
    },
    {
      "id": "MLB-664702",
      "mlbId": 664702,
      "name": "Myles Straw",
      "number": "3",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/myles-straw-664702"
    },
    {
      "id": "MLB-664770",
      "mlbId": 664770,
      "name": "Nathan Lukes",
      "number": "38",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/nathan-lukes-664770"
    },
    {
      "id": "MLB-571578",
      "mlbId": 571578,
      "name": "Patrick Corbin",
      "number": "46",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/patrick-corbin-571578",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-623149",
      "mlbId": 623149,
      "name": "Paul Sewald",
      "number": "43",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/paul-sewald-623149"
    },
    {
      "id": "MLB-815873",
      "mlbId": 815873,
      "name": "Sean Keys",
      "number": "20",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/sean-keys-815873"
    },
    {
      "id": "MLB-669456",
      "mlbId": 669456,
      "name": "Shane Bieber",
      "number": "57",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/shane-bieber-669456",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-693686",
      "mlbId": 693686,
      "name": "Spencer Miles",
      "number": "62",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/spencer-miles-693686"
    },
    {
      "id": "MLB-702056",
      "mlbId": 702056,
      "name": "Trey Yesavage",
      "number": "39",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/trey-yesavage-702056"
    },
    {
      "id": "MLB-643511",
      "mlbId": 643511,
      "name": "Tyler Rogers",
      "number": "71",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/tyler-rogers-643511"
    },
    {
      "id": "MLB-665489",
      "mlbId": 665489,
      "name": "Vladimir Guerrero Jr.",
      "number": "27",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Toronto Blue Jays",
      "profile": "https://www.mlb.com/player/vladimir-guerrero-jr-665489"
    }
  ],
  "Chicago White Sox": [
    {
      "id": "MLB-643217",
      "mlbId": 643217,
      "name": "Andrew Benintendi",
      "number": "23",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/andrew-benintendi-643217"
    },
    {
      "id": "MLB-641743",
      "mlbId": 641743,
      "name": "Anthony Kay",
      "number": "18",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/anthony-kay-641743"
    },
    {
      "id": "MLB-695731",
      "mlbId": 695731,
      "name": "Braden Montgomery",
      "number": "24",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/braden-montgomery-695731"
    },
    {
      "id": "MLB-686668",
      "mlbId": 686668,
      "name": "Brenton Doyle",
      "number": "7",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/brenton-doyle-686668"
    },
    {
      "id": "MLB-681460",
      "mlbId": 681460,
      "name": "Brooks Baldwin",
      "number": "27",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/brooks-baldwin-681460",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-663542",
      "mlbId": 663542,
      "name": "Bryan Hudson",
      "number": "60",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/bryan-hudson-663542"
    },
    {
      "id": "MLB-805367",
      "mlbId": 805367,
      "name": "Chase Meidroth",
      "number": "10",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/chase-meidroth-805367"
    },
    {
      "id": "MLB-695657",
      "mlbId": 695657,
      "name": "Colson Montgomery",
      "number": "12",
      "position": "SS",
      "positions": [
        "SS",
        "3B"
      ],
      "rosterPosition": "SS/3B",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/colson-montgomery-695657"
    },
    {
      "id": "MLB-689818",
      "mlbId": 689818,
      "name": "David Sandlin",
      "number": "54",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/david-sandlin-689818"
    },
    {
      "id": "MLB-663436",
      "mlbId": 663436,
      "name": "Davis Martin",
      "number": "65",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/davis-martin-663436"
    },
    {
      "id": "MLB-607200",
      "mlbId": 607200,
      "name": "Erick Fedde",
      "number": "47",
      "position": "RP",
      "positions": [
        "RP",
        "SP"
      ],
      "rosterPosition": "RP/SP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/erick-fedde-607200"
    },
    {
      "id": "MLB-691799",
      "mlbId": 691799,
      "name": "Grant Taylor",
      "number": "31",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/grant-taylor-691799"
    },
    {
      "id": "MLB-696146",
      "mlbId": 696146,
      "name": "Hagen Smith",
      "number": "32",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/hagen-smith-696146"
    },
    {
      "id": "MLB-668670",
      "mlbId": 668670,
      "name": "Jake Rogers",
      "number": "28",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/jake-rogers-668670"
    },
    {
      "id": "MLB-663855",
      "mlbId": 663855,
      "name": "Jordan Hicks",
      "number": "44",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/jordan-hicks-663855"
    },
    {
      "id": "MLB-673929",
      "mlbId": 673929,
      "name": "Jordan Leasure",
      "number": "49",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/jordan-leasure-673929",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-691019",
      "mlbId": 691019,
      "name": "Kyle Teel",
      "number": "8",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/kyle-teel-691019"
    },
    {
      "id": "MLB-682668",
      "mlbId": 682668,
      "name": "Luisangel Acuña",
      "number": "0",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/luisangel-acuna-682668"
    },
    {
      "id": "MLB-678246",
      "mlbId": 678246,
      "name": "Miguel Vargas",
      "number": "20",
      "position": "3B",
      "positions": [
        "3B",
        "1B"
      ],
      "rosterPosition": "3B/1B",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/miguel-vargas-678246"
    },
    {
      "id": "MLB-678024",
      "mlbId": 678024,
      "name": "Mike Vasil",
      "number": "61",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/mike-vasil-678024",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-808959",
      "mlbId": 808959,
      "name": "Munetaka Murakami",
      "number": "5",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/munetaka-murakami-808959"
    },
    {
      "id": "MLB-702273",
      "mlbId": 702273,
      "name": "Noah Schultz",
      "number": "22",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/noah-schultz-702273"
    },
    {
      "id": "MLB-545341",
      "mlbId": 545341,
      "name": "Randal Grichuk",
      "number": "34",
      "position": "LF",
      "positions": [
        "LF",
        "DH"
      ],
      "rosterPosition": "LF/DH",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/randal-grichuk-545341"
    },
    {
      "id": "MLB-803011",
      "mlbId": 803011,
      "name": "Sam Antonacci",
      "number": "17",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/sam-antonacci-803011"
    },
    {
      "id": "MLB-680732",
      "mlbId": 680732,
      "name": "Sean Burke",
      "number": "59",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/sean-burke-680732"
    },
    {
      "id": "MLB-656794",
      "mlbId": 656794,
      "name": "Sean Newcomb",
      "number": "15",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/sean-newcomb-656794"
    },
    {
      "id": "MLB-502054",
      "mlbId": 502054,
      "name": "Tommy Pham",
      "number": "21",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/tommy-pham-502054"
    },
    {
      "id": "MLB-671976",
      "mlbId": 671976,
      "name": "Tristan Peters",
      "number": "29",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/tristan-peters-671976"
    },
    {
      "id": "MLB-699823",
      "mlbId": 699823,
      "name": "Tyler Davis",
      "number": "63",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago White Sox",
      "profile": "https://www.mlb.com/player/tyler-davis-699823"
    }
  ],
  "Cleveland Guardians": [
    {
      "id": "MLB-694197",
      "mlbId": 694197,
      "name": "Angel Genao",
      "number": "17",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/angel-genao-694197"
    },
    {
      "id": "MLB-682657",
      "mlbId": 682657,
      "name": "Angel Martínez",
      "number": "1",
      "position": "LF",
      "positions": [
        "LF",
        "RF"
      ],
      "rosterPosition": "LF/RF",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/angel-martinez-682657"
    },
    {
      "id": "MLB-595978",
      "mlbId": 595978,
      "name": "Austin Hedges",
      "number": "27",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/austin-hedges-595978"
    },
    {
      "id": "MLB-677587",
      "mlbId": 677587,
      "name": "Brayan Rocchio",
      "number": "4",
      "position": "SS",
      "positions": [
        "SS",
        "2B"
      ],
      "rosterPosition": "SS/2B",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/brayan-rocchio-677587"
    },
    {
      "id": "MLB-671922",
      "mlbId": 671922,
      "name": "Cade Smith",
      "number": "36",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/cade-smith-671922"
    },
    {
      "id": "MLB-800050",
      "mlbId": 800050,
      "name": "Chase DeLauter",
      "number": "24",
      "position": "RF",
      "positions": [
        "RF",
        "DH"
      ],
      "rosterPosition": "RF/DH",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/chase-delauter-800050"
    },
    {
      "id": "MLB-682982",
      "mlbId": 682982,
      "name": "Daniel Espino",
      "number": "41",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/daniel-espino-682982"
    },
    {
      "id": "MLB-681807",
      "mlbId": 681807,
      "name": "David Fry",
      "number": "6",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/david-fry-681807"
    },
    {
      "id": "MLB-681870",
      "mlbId": 681870,
      "name": "Erik Sabrowski",
      "number": "62",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/erik-sabrowski-681870"
    },
    {
      "id": "MLB-656492",
      "mlbId": 656492,
      "name": "Foster Griffin",
      "number": "22",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/foster-griffin-656492"
    },
    {
      "id": "MLB-668909",
      "mlbId": 668909,
      "name": "Gavin Williams",
      "number": "32",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/gavin-williams-668909"
    },
    {
      "id": "MLB-683769",
      "mlbId": 683769,
      "name": "Hunter Gaddis",
      "number": "33",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/hunter-gaddis-683769"
    },
    {
      "id": "MLB-666176",
      "mlbId": 666176,
      "name": "Jo Adell",
      "number": "7",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/jo-adell-666176"
    },
    {
      "id": "MLB-676282",
      "mlbId": 676282,
      "name": "Joey Cantillo",
      "number": "54",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/joey-cantillo-676282"
    },
    {
      "id": "MLB-608070",
      "mlbId": 608070,
      "name": "José Ramírez",
      "number": "11",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/jose-ramirez-608070"
    },
    {
      "id": "MLB-670036",
      "mlbId": 670036,
      "name": "Matt Festa",
      "number": "52",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/matt-festa-670036"
    },
    {
      "id": "MLB-663993",
      "mlbId": 663993,
      "name": "Nathaniel Lowe",
      "number": "46",
      "position": "1B",
      "positions": [
        "1B",
        "DH"
      ],
      "rosterPosition": "1B/DH",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/nathaniel-lowe-663993"
    },
    {
      "id": "MLB-800048",
      "mlbId": 800048,
      "name": "Parker Messick",
      "number": "77",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/parker-messick-800048"
    },
    {
      "id": "MLB-672275",
      "mlbId": 672275,
      "name": "Patrick Bailey",
      "number": "16",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/patrick-bailey-672275"
    },
    {
      "id": "MLB-690984",
      "mlbId": 690984,
      "name": "Petey Halpin",
      "number": "0",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/petey-halpin-690984"
    },
    {
      "id": "MLB-542888",
      "mlbId": 542888,
      "name": "Shawn Armstrong",
      "number": "43",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/shawn-armstrong-542888"
    },
    {
      "id": "MLB-677944",
      "mlbId": 677944,
      "name": "Slade Cecconi",
      "number": "44",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/slade-cecconi-677944"
    },
    {
      "id": "MLB-680757",
      "mlbId": 680757,
      "name": "Steven Kwan",
      "number": "38",
      "position": "CF",
      "positions": [
        "CF",
        "LF"
      ],
      "rosterPosition": "CF/LF",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/steven-kwan-680757"
    },
    {
      "id": "MLB-676440",
      "mlbId": 676440,
      "name": "Tanner Bibee",
      "number": "28",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/tanner-bibee-676440"
    },
    {
      "id": "MLB-682120",
      "mlbId": 682120,
      "name": "Tim Herrin",
      "number": "29",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/tim-herrin-682120"
    },
    {
      "id": "MLB-683953",
      "mlbId": 683953,
      "name": "Travis Bazzana",
      "number": "37",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Cleveland Guardians",
      "profile": "https://www.mlb.com/player/travis-bazzana-683953"
    }
  ],
  "Detroit Tigers": [
    {
      "id": "MLB-689225",
      "mlbId": 689225,
      "name": "Beau Brieske",
      "number": "4",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/beau-brieske-689225"
    },
    {
      "id": "MLB-701162",
      "mlbId": 701162,
      "name": "Ben Malgeri",
      "number": "53",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/ben-malgeri-701162"
    },
    {
      "id": "MLB-814430",
      "mlbId": 814430,
      "name": "Brett Callahan",
      "number": "34",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/brett-callahan-814430"
    },
    {
      "id": "MLB-690993",
      "mlbId": 690993,
      "name": "Colt Keith",
      "number": "33",
      "position": "3B",
      "positions": [
        "3B",
        "DH"
      ],
      "rosterPosition": "3B/DH",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/colt-keith-690993",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-693307",
      "mlbId": 693307,
      "name": "Dillon Dingler",
      "number": "13",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/dillon-dingler-693307"
    },
    {
      "id": "MLB-623454",
      "mlbId": 623454,
      "name": "Drew Anderson",
      "number": "38",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/drew-anderson-623454"
    },
    {
      "id": "MLB-805427",
      "mlbId": 805427,
      "name": "Drew Sommers",
      "number": "51",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/drew-sommers-805427"
    },
    {
      "id": "MLB-680664",
      "mlbId": 680664,
      "name": "Eduardo Valencia",
      "number": "32",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/eduardo-valencia-680664"
    },
    {
      "id": "MLB-664285",
      "mlbId": 664285,
      "name": "Framber Valdez",
      "number": "59",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/framber-valdez-664285"
    },
    {
      "id": "MLB-650402",
      "mlbId": 650402,
      "name": "Gleyber Torres",
      "number": "25",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/gleyber-torres-650402"
    },
    {
      "id": "MLB-701678",
      "mlbId": 701678,
      "name": "Hao-Yu Lee",
      "number": "50",
      "position": "2B",
      "positions": [
        "2B",
        "3B"
      ],
      "rosterPosition": "2B/3B",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/hao-yu-lee-701678"
    },
    {
      "id": "MLB-690291",
      "mlbId": 690291,
      "name": "Jace Jung",
      "number": "17",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/jace-jung-690291"
    },
    {
      "id": "MLB-656427",
      "mlbId": 656427,
      "name": "Jack Flaherty",
      "number": "9",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/jack-flaherty-656427"
    },
    {
      "id": "MLB-695549",
      "mlbId": 695549,
      "name": "Jackson Jobe",
      "number": "21",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/jackson-jobe-695549"
    },
    {
      "id": "MLB-621097",
      "mlbId": 621097,
      "name": "Jacob Waguespack",
      "number": "58",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/jacob-waguespack-621097"
    },
    {
      "id": "MLB-595879",
      "mlbId": 595879,
      "name": "Javier Báez",
      "number": "28",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/javier-baez-595879"
    },
    {
      "id": "MLB-807726",
      "mlbId": 807726,
      "name": "John Peck",
      "number": "18",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/john-peck-807726"
    },
    {
      "id": "MLB-434378",
      "mlbId": 434378,
      "name": "Justin Verlander",
      "number": "35",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/justin-verlander-434378"
    },
    {
      "id": "MLB-672456",
      "mlbId": 672456,
      "name": "Keider Montero",
      "number": "54",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/keider-montero-672456"
    },
    {
      "id": "MLB-445276",
      "mlbId": 445276,
      "name": "Kenley Jansen",
      "number": "74",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/kenley-jansen-445276"
    },
    {
      "id": "MLB-681481",
      "mlbId": 681481,
      "name": "Kerry Carpenter",
      "number": "30",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/kerry-carpenter-681481",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-805808",
      "mlbId": 805808,
      "name": "Kevin McGonigle",
      "number": "7",
      "position": "SS",
      "positions": [
        "SS",
        "3B"
      ],
      "rosterPosition": "SS/3B",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/kevin-mcgonigle-805808"
    },
    {
      "id": "MLB-640448",
      "mlbId": 640448,
      "name": "Kyle Finnegan",
      "number": "67",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/kyle-finnegan-640448",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-663837",
      "mlbId": 663837,
      "name": "Matt Vierling",
      "number": "8",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/matt-vierling-663837",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-703601",
      "mlbId": 703601,
      "name": "Max Clark",
      "number": "15",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/max-clark-703601"
    },
    {
      "id": "MLB-681857",
      "mlbId": 681857,
      "name": "Reese Olson",
      "number": "45",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/reese-olson-681857",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-682985",
      "mlbId": 682985,
      "name": "Riley Greene",
      "number": "31",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/riley-greene-682985"
    },
    {
      "id": "MLB-689981",
      "mlbId": 689981,
      "name": "River Ryan",
      "number": "77",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/river-ryan-689981"
    },
    {
      "id": "MLB-679529",
      "mlbId": 679529,
      "name": "Spencer Torkelson",
      "number": "20",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/spencer-torkelson-679529"
    },
    {
      "id": "MLB-700242",
      "mlbId": 700242,
      "name": "Trey Sweeney",
      "number": "27",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/trey-sweeney-700242",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-675512",
      "mlbId": 675512,
      "name": "Troy Melton",
      "number": "52",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/troy-melton-675512",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-680744",
      "mlbId": 680744,
      "name": "Ty Madden",
      "number": "36",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/ty-madden-680744"
    },
    {
      "id": "MLB-663947",
      "mlbId": 663947,
      "name": "Tyler Holton",
      "number": "87",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/tyler-holton-663947"
    },
    {
      "id": "MLB-641755",
      "mlbId": 641755,
      "name": "Tyler Kinley",
      "number": "55",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/tyler-kinley-641755"
    },
    {
      "id": "MLB-672761",
      "mlbId": 672761,
      "name": "Wenceel Pérez",
      "number": "46",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/wenceel-perez-672761",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-676684",
      "mlbId": 676684,
      "name": "Will Vest",
      "number": "19",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/will-vest-676684",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-656716",
      "mlbId": 656716,
      "name": "Zach McKinstry",
      "number": "39",
      "position": "RF",
      "positions": [
        "RF",
        "2B",
        "SS"
      ],
      "rosterPosition": "RF/2B/SS",
      "team": "Detroit Tigers",
      "profile": "https://www.mlb.com/player/zach-mckinstry-656716"
    }
  ],
  "Kansas City Royals": [
    {
      "id": "MLB-656638",
      "mlbId": 656638,
      "name": "Alex Lange",
      "number": "56",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/alex-lange-656638"
    },
    {
      "id": "MLB-543238",
      "mlbId": 543238,
      "name": "Anthony Gose",
      "number": "34",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/anthony-gose-543238"
    },
    {
      "id": "MLB-677951",
      "mlbId": 677951,
      "name": "Bobby Witt Jr.",
      "number": "7",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/bobby-witt-jr-677951"
    },
    {
      "id": "MLB-608032",
      "mlbId": 608032,
      "name": "Carlos Estévez",
      "number": "53",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/carlos-estevez-608032",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-695600",
      "mlbId": 695600,
      "name": "Carter Jensen",
      "number": "22",
      "position": "C",
      "positions": [
        "C",
        "DH"
      ],
      "rosterPosition": "C/DH",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/carter-jensen-695600"
    },
    {
      "id": "MLB-666142",
      "mlbId": 666142,
      "name": "Cole Ragans",
      "number": "55",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/cole-ragans-666142",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-671162",
      "mlbId": 671162,
      "name": "Connor Thomas",
      "number": "50",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/connor-thomas-671162"
    },
    {
      "id": "MLB-663738",
      "mlbId": 663738,
      "name": "Daniel Lynch IV",
      "number": "41",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/daniel-lynch-iv-663738"
    },
    {
      "id": "MLB-686555",
      "mlbId": 686555,
      "name": "Isaac Collins",
      "number": "1",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/isaac-collins-686555"
    },
    {
      "id": "MLB-695506",
      "mlbId": 695506,
      "name": "Jac Caglianone",
      "number": "14",
      "position": "RF",
      "positions": [
        "RF",
        "1B"
      ],
      "rosterPosition": "RF/1B",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/jac-caglianone-695506"
    },
    {
      "id": "MLB-663704",
      "mlbId": 663704,
      "name": "James McArthur",
      "number": "66",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/james-mcarthur-663704"
    },
    {
      "id": "MLB-670231",
      "mlbId": 670231,
      "name": "John Rave",
      "number": "16",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/john-rave-670231"
    },
    {
      "id": "MLB-663697",
      "mlbId": 663697,
      "name": "Jonathan India",
      "number": "6",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/jonathan-india-663697",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-621016",
      "mlbId": 621016,
      "name": "Jose Cuas",
      "number": "74",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/jose-cuas-621016"
    },
    {
      "id": "MLB-668942",
      "mlbId": 668942,
      "name": "Josh Rojas",
      "number": "40",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/josh-rojas-668942"
    },
    {
      "id": "MLB-664728",
      "mlbId": 664728,
      "name": "Kyle Isbel",
      "number": "28",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/kyle-isbel-664728"
    },
    {
      "id": "MLB-668674",
      "mlbId": 668674,
      "name": "Lucas Erceg",
      "number": "60",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/lucas-erceg-668674"
    },
    {
      "id": "MLB-679883",
      "mlbId": 679883,
      "name": "Luinder Avila",
      "number": "58",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/luinder-avila-679883",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-571912",
      "mlbId": 571912,
      "name": "Luke Maile",
      "number": "18",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/luke-maile-571912"
    },
    {
      "id": "MLB-672580",
      "mlbId": 672580,
      "name": "Maikel Garcia",
      "number": "11",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/maikel-garcia-672580"
    },
    {
      "id": "MLB-683090",
      "mlbId": 683090,
      "name": "Matthew Lugo",
      "number": "24",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/matthew-lugo-683090"
    },
    {
      "id": "MLB-686681",
      "mlbId": 686681,
      "name": "Michael Massey",
      "number": "19",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/michael-massey-686681"
    },
    {
      "id": "MLB-608379",
      "mlbId": 608379,
      "name": "Michael Wacha",
      "number": "52",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/michael-wacha-608379"
    },
    {
      "id": "MLB-663878",
      "mlbId": 663878,
      "name": "Nate Pearson",
      "number": "61",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/nate-pearson-663878"
    },
    {
      "id": "MLB-683232",
      "mlbId": 683232,
      "name": "Nick Mears",
      "number": "31",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/nick-mears-683232",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-702070",
      "mlbId": 702070,
      "name": "Noah Cameron",
      "number": "65",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/noah-cameron-702070"
    },
    {
      "id": "MLB-676510",
      "mlbId": 676510,
      "name": "Nolan Hoffman",
      "number": "35",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/nolan-hoffman-676510"
    },
    {
      "id": "MLB-677976",
      "mlbId": 677976,
      "name": "Randy Dobnak",
      "number": "62",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/randy-dobnak-677976"
    },
    {
      "id": "MLB-521692",
      "mlbId": 521692,
      "name": "Salvador Perez",
      "number": "13",
      "position": "DH",
      "positions": [
        "DH",
        "C",
        "1B"
      ],
      "rosterPosition": "DH/C/1B",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/salvador-perez-521692"
    },
    {
      "id": "MLB-607625",
      "mlbId": 607625,
      "name": "Seth Lugo",
      "number": "67",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/seth-lugo-607625"
    },
    {
      "id": "MLB-702352",
      "mlbId": 702352,
      "name": "Spencer Bivens",
      "number": "76",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/spencer-bivens-702352"
    },
    {
      "id": "MLB-663568",
      "mlbId": 663568,
      "name": "Stephen Kolek",
      "number": "32",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/stephen-kolek-663568",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-686475",
      "mlbId": 686475,
      "name": "Tyler Tolbert",
      "number": "2",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/tyler-tolbert-686475"
    },
    {
      "id": "MLB-686469",
      "mlbId": 686469,
      "name": "Vinnie Pasquantino",
      "number": "9",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Kansas City Royals",
      "profile": "https://www.mlb.com/player/vinnie-pasquantino-686469"
    }
  ],
  "Minnesota Twins": [
    {
      "id": "MLB-621345",
      "mlbId": 621345,
      "name": "A.J. Minter",
      "number": "33",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/a-j-minter-621345"
    },
    {
      "id": "MLB-693306",
      "mlbId": 693306,
      "name": "Aaron Sabato",
      "number": "31",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/aaron-sabato-693306"
    },
    {
      "id": "MLB-702176",
      "mlbId": 702176,
      "name": "Alan Roden",
      "number": "18",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/alan-roden-702176"
    },
    {
      "id": "MLB-702193",
      "mlbId": 702193,
      "name": "Andrew Morris",
      "number": "78",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/andrew-morris-702193"
    },
    {
      "id": "MLB-607455",
      "mlbId": 607455,
      "name": "Anthony Banda",
      "number": "43",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/anthony-banda-607455",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-668885",
      "mlbId": 668885,
      "name": "Austin Martin",
      "number": "16",
      "position": "RF",
      "positions": [
        "RF",
        "LF"
      ],
      "rosterPosition": "RF/LF",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/austin-martin-668885"
    },
    {
      "id": "MLB-641927",
      "mlbId": 641927,
      "name": "Bailey Ober",
      "number": "17",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/bailey-ober-641927"
    },
    {
      "id": "MLB-805346",
      "mlbId": 805346,
      "name": "Ben Ross",
      "number": "1",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/ben-ross-805346"
    },
    {
      "id": "MLB-686797",
      "mlbId": 686797,
      "name": "Brooks Lee",
      "number": "22",
      "position": "3B",
      "positions": [
        "3B",
        "SS"
      ],
      "rosterPosition": "3B/SS",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/brooks-lee-686797"
    },
    {
      "id": "MLB-621439",
      "mlbId": 621439,
      "name": "Byron Buxton",
      "number": "25",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/byron-buxton-621439",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-663485",
      "mlbId": 663485,
      "name": "Cole Sands",
      "number": "44",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/cole-sands-663485",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-687570",
      "mlbId": 687570,
      "name": "Connor Prielipp",
      "number": "61",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/connor-prielipp-687570"
    },
    {
      "id": "MLB-701581",
      "mlbId": 701581,
      "name": "David Festa",
      "number": "58",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/david-festa-701581",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-665152",
      "mlbId": 665152,
      "name": "Dean Kremer",
      "number": "13",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/dean-kremer-665152"
    },
    {
      "id": "MLB-691181",
      "mlbId": 691181,
      "name": "Emmanuel Rodriguez",
      "number": "21",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/emmanuel-rodriguez-691181"
    },
    {
      "id": "MLB-656546",
      "mlbId": 656546,
      "name": "Jeff Hoffman",
      "number": "24",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/jeff-hoffman-656546",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-657746",
      "mlbId": 657746,
      "name": "Joe Ryan",
      "number": "41",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/joe-ryan-657746"
    },
    {
      "id": "MLB-605137",
      "mlbId": 605137,
      "name": "Josh Bell",
      "number": "56",
      "position": "DH",
      "positions": [
        "DH",
        "1B"
      ],
      "rosterPosition": "DH/1B",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/josh-bell-605137"
    },
    {
      "id": "MLB-701785",
      "mlbId": 701785,
      "name": "Kaelen Culpepper",
      "number": "12",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/kaelen-culpepper-701785"
    },
    {
      "id": "MLB-665019",
      "mlbId": 665019,
      "name": "Kody Clemens",
      "number": "2",
      "position": "2B",
      "positions": [
        "2B",
        "1B"
      ],
      "rosterPosition": "2B/1B",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/kody-clemens-665019"
    },
    {
      "id": "MLB-681892",
      "mlbId": 681892,
      "name": "Kody Funderburk",
      "number": "57",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/kody-funderburk-681892"
    },
    {
      "id": "MLB-807712",
      "mlbId": 807712,
      "name": "Luke Keaschall",
      "number": "15",
      "position": "2B",
      "positions": [
        "2B",
        "RF"
      ],
      "rosterPosition": "2B/RF",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/luke-keaschall-807712"
    },
    {
      "id": "MLB-702474",
      "mlbId": 702474,
      "name": "Mike Paredes",
      "number": "53",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/mike-paredes-702474",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-641154",
      "mlbId": 641154,
      "name": "Pablo López",
      "number": "49",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/pablo-lopez-641154",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-668904",
      "mlbId": 668904,
      "name": "Royce Lewis",
      "number": "23",
      "position": "1B",
      "positions": [
        "1B",
        "3B"
      ],
      "rosterPosition": "1B/3B",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/royce-lewis-668904"
    },
    {
      "id": "MLB-680777",
      "mlbId": 680777,
      "name": "Ryan Jeffers",
      "number": "27",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/ryan-jeffers-680777"
    },
    {
      "id": "MLB-668952",
      "mlbId": 668952,
      "name": "Ryan Kreidler",
      "number": "5",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/ryan-kreidler-668952"
    },
    {
      "id": "MLB-671737",
      "mlbId": 671737,
      "name": "Taj Bradley",
      "number": "26",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/taj-bradley-671737"
    },
    {
      "id": "MLB-573124",
      "mlbId": 573124,
      "name": "Taylor Rogers",
      "number": "55",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/taylor-rogers-573124"
    },
    {
      "id": "MLB-667297",
      "mlbId": 667297,
      "name": "Tommy Nance",
      "number": "35",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/tommy-nance-667297"
    },
    {
      "id": "MLB-701519",
      "mlbId": 701519,
      "name": "Travis Adams",
      "number": "45",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/travis-adams-701519"
    },
    {
      "id": "MLB-663616",
      "mlbId": 663616,
      "name": "Trevor Larnach",
      "number": "9",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/trevor-larnach-663616",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-605170",
      "mlbId": 605170,
      "name": "Victor Caratini",
      "number": "37",
      "position": "C",
      "positions": [
        "C",
        "1B"
      ],
      "rosterPosition": "C/1B",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/victor-caratini-605170"
    },
    {
      "id": "MLB-805805",
      "mlbId": 805805,
      "name": "Walker Jenkins",
      "number": "11",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/walker-jenkins-805805"
    },
    {
      "id": "MLB-672782",
      "mlbId": 672782,
      "name": "Yoendrys Gómez",
      "number": "94",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/yoendrys-gomez-672782"
    },
    {
      "id": "MLB-805673",
      "mlbId": 805673,
      "name": "Zebby Matthews",
      "number": "52",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Minnesota Twins",
      "profile": "https://www.mlb.com/player/zebby-matthews-805673"
    }
  ],
  "Arizona Diamondbacks": [
    {
      "id": "MLB-680728",
      "mlbId": 680728,
      "name": "Adrian Del Castillo",
      "number": "25",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/adrian-del-castillo-680728"
    },
    {
      "id": "MLB-694297",
      "mlbId": 694297,
      "name": "Brandon Pfaadt",
      "number": "32",
      "position": "SP",
      "positions": [
        "SP",
        "RP"
      ],
      "rosterPosition": "SP/RP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/brandon-pfaadt-694297"
    },
    {
      "id": "MLB-805299",
      "mlbId": 805299,
      "name": "Brandyn Garcia",
      "number": "55",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/brandyn-garcia-805299"
    },
    {
      "id": "MLB-669203",
      "mlbId": 669203,
      "name": "Corbin Burnes",
      "number": "39",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/corbin-burnes-669203",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-682998",
      "mlbId": 682998,
      "name": "Corbin Carroll",
      "number": "7",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/corbin-carroll-682998"
    },
    {
      "id": "MLB-642701",
      "mlbId": 642701,
      "name": "Dennis Santana",
      "number": "59",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/dennis-santana-642701"
    },
    {
      "id": "MLB-593958",
      "mlbId": 593958,
      "name": "Eduardo Rodriguez",
      "number": "57",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/eduardo-rodriguez-593958"
    },
    {
      "id": "MLB-672515",
      "mlbId": 672515,
      "name": "Gabriel Moreno",
      "number": "14",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/gabriel-moreno-672515"
    },
    {
      "id": "MLB-672695",
      "mlbId": 672695,
      "name": "Geraldo Perdomo",
      "number": "2",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/geraldo-perdomo-672695"
    },
    {
      "id": "MLB-545121",
      "mlbId": 545121,
      "name": "Ildemaro Vargas",
      "number": "6",
      "position": "1B",
      "positions": [
        "1B",
        "2B"
      ],
      "rosterPosition": "1B/2B",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/ildemaro-vargas-545121"
    },
    {
      "id": "MLB-543510",
      "mlbId": 543510,
      "name": "James McCann",
      "number": "8",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/james-mccann-543510"
    },
    {
      "id": "MLB-642528",
      "mlbId": 642528,
      "name": "Jonathan Loáisiga",
      "number": "43",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/jonathan-loaisiga-642528"
    },
    {
      "id": "MLB-691783",
      "mlbId": 691783,
      "name": "Jordan Lawlar",
      "number": "10",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/jordan-lawlar-691783"
    },
    {
      "id": "MLB-703615",
      "mlbId": 703615,
      "name": "Jose Cabrera",
      "number": "53",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/jose-cabrera-703615"
    },
    {
      "id": "MLB-699912",
      "mlbId": 699912,
      "name": "Jose Fernandez",
      "number": "11",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/jose-fernandez-699912"
    },
    {
      "id": "MLB-666661",
      "mlbId": 666661,
      "name": "Juan Morillo",
      "number": "62",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/juan-morillo-666661"
    },
    {
      "id": "MLB-679885",
      "mlbId": 679885,
      "name": "Justin Martinez",
      "number": "63",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/justin-martinez-679885"
    },
    {
      "id": "MLB-606466",
      "mlbId": 606466,
      "name": "Ketel Marte",
      "number": "4",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/ketel-marte-606466"
    },
    {
      "id": "MLB-656464",
      "mlbId": 656464,
      "name": "Kevin Ginkel",
      "number": "37",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/kevin-ginkel-656464"
    },
    {
      "id": "MLB-663457",
      "mlbId": 663457,
      "name": "Lars Nootbaar",
      "number": "21",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/lars-nootbaar-663457"
    },
    {
      "id": "MLB-518876",
      "mlbId": 518876,
      "name": "Merrill Kelly",
      "number": "29",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/merrill-kelly-518876"
    },
    {
      "id": "MLB-647336",
      "mlbId": 647336,
      "name": "Michael Soroka",
      "number": "34",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/michael-soroka-647336"
    },
    {
      "id": "MLB-571448",
      "mlbId": 571448,
      "name": "Nolan Arenado",
      "number": "28",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/nolan-arenado-571448"
    },
    {
      "id": "MLB-656976",
      "mlbId": 656976,
      "name": "Pavin Smith",
      "number": "26",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/pavin-smith-656976"
    },
    {
      "id": "MLB-657044",
      "mlbId": 657044,
      "name": "Ryan Thompson",
      "number": "81",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/ryan-thompson-657044",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-814439",
      "mlbId": 814439,
      "name": "Ryan Waldschmidt",
      "number": "15",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/ryan-waldschmidt-814439"
    },
    {
      "id": "MLB-669194",
      "mlbId": 669194,
      "name": "Ryne Nelson",
      "number": "19",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/ryne-nelson-669194"
    },
    {
      "id": "MLB-664199",
      "mlbId": 664199,
      "name": "Taylor Clarke",
      "number": "45",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/taylor-clarke-664199"
    },
    {
      "id": "MLB-694374",
      "mlbId": 694374,
      "name": "Tim Tawa",
      "number": "13",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/tim-tawa-694374"
    },
    {
      "id": "MLB-668678",
      "mlbId": 668678,
      "name": "Zac Gallen",
      "number": "23",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Arizona Diamondbacks",
      "profile": "https://www.mlb.com/player/zac-gallen-668678"
    }
  ],
  "Colorado Rockies": [
    {
      "id": "MLB-691182",
      "mlbId": 691182,
      "name": "Adael Amador",
      "number": "1",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/adael-amador-691182"
    },
    {
      "id": "MLB-690924",
      "mlbId": 690924,
      "name": "Braxton Fulford",
      "number": "37",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/braxton-fulford-690924"
    },
    {
      "id": "MLB-657514",
      "mlbId": 657514,
      "name": "Brennan Bernardino",
      "number": "83",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/brennan-bernardino-657514"
    },
    {
      "id": "MLB-664954",
      "mlbId": 664954,
      "name": "Brett Sullivan",
      "number": "26",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/brett-sullivan-664954"
    },
    {
      "id": "MLB-801403",
      "mlbId": 801403,
      "name": "Chase Dollander",
      "number": "32",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/chase-dollander-801403",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-694249",
      "mlbId": 694249,
      "name": "Cole Carrigg",
      "number": "16",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/cole-carrigg-694249"
    },
    {
      "id": "MLB-681393",
      "mlbId": 681393,
      "name": "Connor Norby",
      "number": "35",
      "position": "1B",
      "positions": [
        "1B",
        "3B"
      ],
      "rosterPosition": "1B/3B",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/connor-norby-681393"
    },
    {
      "id": "MLB-678662",
      "mlbId": 678662,
      "name": "Ezequiel Tovar",
      "number": "14",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/ezequiel-tovar-678662"
    },
    {
      "id": "MLB-696100",
      "mlbId": 696100,
      "name": "Hunter Goodman",
      "number": "15",
      "position": "C",
      "positions": [
        "C",
        "DH"
      ],
      "rosterPosition": "C/DH",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/hunter-goodman-696100"
    },
    {
      "id": "MLB-677955",
      "mlbId": 677955,
      "name": "Jaden Hill",
      "number": "0",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/jaden-hill-677955"
    },
    {
      "id": "MLB-664983",
      "mlbId": 664983,
      "name": "Jake McCarthy",
      "number": "31",
      "position": "LF",
      "positions": [
        "LF",
        "CF"
      ],
      "rosterPosition": "LF/CF",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/jake-mccarthy-664983"
    },
    {
      "id": "MLB-623474",
      "mlbId": 623474,
      "name": "Jimmy Herget",
      "number": "44",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/jimmy-herget-623474"
    },
    {
      "id": "MLB-687597",
      "mlbId": 687597,
      "name": "Jordan Beck",
      "number": "27",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/jordan-beck-687597"
    },
    {
      "id": "MLB-605447",
      "mlbId": 605447,
      "name": "Jordan Romano",
      "number": "68",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/jordan-romano-605447"
    },
    {
      "id": "MLB-500779",
      "mlbId": 500779,
      "name": "Jose Quintana",
      "number": "62",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/jose-quintana-500779"
    },
    {
      "id": "MLB-675848",
      "mlbId": 675848,
      "name": "Juan Mejia",
      "number": "47",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/juan-mejia-675848"
    },
    {
      "id": "MLB-607536",
      "mlbId": 607536,
      "name": "Kyle Freeland",
      "number": "21",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/kyle-freeland-607536"
    },
    {
      "id": "MLB-691720",
      "mlbId": 691720,
      "name": "Kyle Karros",
      "number": "12",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/kyle-karros-691720"
    },
    {
      "id": "MLB-815081",
      "mlbId": 815081,
      "name": "Mark Manfredi",
      "number": "54",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/mark-manfredi-815081"
    },
    {
      "id": "MLB-690279",
      "mlbId": 690279,
      "name": "Mason Adams",
      "number": "38",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/mason-adams-690279"
    },
    {
      "id": "MLB-666160",
      "mlbId": 666160,
      "name": "Mickey Moniak",
      "number": "22",
      "position": "LF",
      "positions": [
        "LF",
        "DH"
      ],
      "rosterPosition": "LF/DH",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/mickey-moniak-666160"
    },
    {
      "id": "MLB-693308",
      "mlbId": 693308,
      "name": "Nick Frasso",
      "number": "41",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/nick-frasso-693308"
    },
    {
      "id": "MLB-663372",
      "mlbId": 663372,
      "name": "Ryan Feltner",
      "number": "18",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/ryan-feltner-663372"
    },
    {
      "id": "MLB-685299",
      "mlbId": 685299,
      "name": "Tanner Gordon",
      "number": "29",
      "position": "SP",
      "positions": [
        "SP",
        "RP"
      ],
      "rosterPosition": "SP/RP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/tanner-gordon-685299"
    },
    {
      "id": "MLB-681198",
      "mlbId": 681198,
      "name": "TJ Rumfield",
      "number": "7",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/tj-rumfield-681198"
    },
    {
      "id": "MLB-608372",
      "mlbId": 608372,
      "name": "Tomoyuki Sugano",
      "number": "11",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/tomoyuki-sugano-608372"
    },
    {
      "id": "MLB-687859",
      "mlbId": 687859,
      "name": "Troy Johnston",
      "number": "20",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/troy-johnston-687859"
    },
    {
      "id": "MLB-650489",
      "mlbId": 650489,
      "name": "Willi Castro",
      "number": "3",
      "position": "2B",
      "positions": [
        "2B",
        "3B"
      ],
      "rosterPosition": "2B/3B",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/willi-castro-650489",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-691728",
      "mlbId": 691728,
      "name": "Zac Veen",
      "number": "13",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/zac-veen-691728"
    },
    {
      "id": "MLB-688642",
      "mlbId": 688642,
      "name": "Zach Agnos",
      "number": "36",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Colorado Rockies",
      "profile": "https://www.mlb.com/player/zach-agnos-688642"
    }
  ],
  "Los Angeles Dodgers": [
    {
      "id": "MLB-681911",
      "mlbId": 681911,
      "name": "Alex Vesia",
      "number": "51",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/alex-vesia-681911"
    },
    {
      "id": "MLB-681624",
      "mlbId": 681624,
      "name": "Andy Pages",
      "number": "44",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/andy-pages-681624"
    },
    {
      "id": "MLB-676508",
      "mlbId": 676508,
      "name": "Ben Casparius",
      "number": "78",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/ben-casparius-676508",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-605483",
      "mlbId": 605483,
      "name": "Blake Snell",
      "number": "7",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/blake-snell-605483"
    },
    {
      "id": "MLB-592779",
      "mlbId": 592779,
      "name": "Brock Stewart",
      "number": "41",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/brock-stewart-592779"
    },
    {
      "id": "MLB-683618",
      "mlbId": 683618,
      "name": "Edgardo Henriquez",
      "number": "60",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/edgardo-henriquez-683618"
    },
    {
      "id": "MLB-621242",
      "mlbId": 621242,
      "name": "Edwin Díaz",
      "number": "3",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/edwin-diaz-621242"
    },
    {
      "id": "MLB-571771",
      "mlbId": 571771,
      "name": "Enrique Hernández",
      "number": "8",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/enrique-hernandez-571771"
    },
    {
      "id": "MLB-641778",
      "mlbId": 641778,
      "name": "Eric Lauer",
      "number": "33",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/eric-lauer-641778",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-623465",
      "mlbId": 623465,
      "name": "Evan Phillips",
      "number": "59",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/evan-phillips-623465"
    },
    {
      "id": "MLB-518692",
      "mlbId": 518692,
      "name": "Freddie Freeman",
      "number": "5",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/freddie-freeman-518692"
    },
    {
      "id": "MLB-676439",
      "mlbId": 676439,
      "name": "Hunter Feduccia",
      "number": "46",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/hunter-feduccia-676439"
    },
    {
      "id": "MLB-800543",
      "mlbId": 800543,
      "name": "Josue De Paula",
      "number": "95",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/josue-de-paula-800543"
    },
    {
      "id": "MLB-680736",
      "mlbId": 680736,
      "name": "Justin Wrobleski",
      "number": "70",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/justin-wrobleski-680736"
    },
    {
      "id": "MLB-663460",
      "mlbId": 663460,
      "name": "Kris Bubic",
      "number": "40",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/kris-bubic-663460"
    },
    {
      "id": "MLB-663656",
      "mlbId": 663656,
      "name": "Kyle Tucker",
      "number": "23",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/kyle-tucker-663656"
    },
    {
      "id": "MLB-571970",
      "mlbId": 571970,
      "name": "Max Muncy",
      "number": "13",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/max-muncy-571970"
    },
    {
      "id": "MLB-500743",
      "mlbId": 500743,
      "name": "Miguel Rojas",
      "number": "72",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/miguel-rojas-500743"
    },
    {
      "id": "MLB-605141",
      "mlbId": 605141,
      "name": "Mookie Betts",
      "number": "50",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/mookie-betts-605141"
    },
    {
      "id": "MLB-808963",
      "mlbId": 808963,
      "name": "Roki Sasaki",
      "number": "11",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/roki-sasaki-808963"
    },
    {
      "id": "MLB-660271",
      "mlbId": 660271,
      "name": "Shohei Ohtani",
      "number": "17",
      "position": "DH",
      "positions": [
        "DH",
        "SP"
      ],
      "rosterPosition": "DH/SP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/shohei-ohtani-660271"
    },
    {
      "id": "MLB-656945",
      "mlbId": 656945,
      "name": "Tanner Scott",
      "number": "66",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/tanner-scott-656945"
    },
    {
      "id": "MLB-669373",
      "mlbId": 669373,
      "name": "Tarik Skubal",
      "number": "29",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/tarik-skubal-669373"
    },
    {
      "id": "MLB-606192",
      "mlbId": 606192,
      "name": "Teoscar Hernández",
      "number": "37",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/teoscar-hernandez-606192"
    },
    {
      "id": "MLB-669242",
      "mlbId": 669242,
      "name": "Tommy Edman",
      "number": "25",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/tommy-edman-669242"
    },
    {
      "id": "MLB-607192",
      "mlbId": 607192,
      "name": "Tyler Glasnow",
      "number": "31",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/tyler-glasnow-607192"
    },
    {
      "id": "MLB-694361",
      "mlbId": 694361,
      "name": "Will Klein",
      "number": "61",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/will-klein-694361",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-669257",
      "mlbId": 669257,
      "name": "Will Smith",
      "number": "16",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/will-smith-669257"
    },
    {
      "id": "MLB-808967",
      "mlbId": 808967,
      "name": "Yoshinobu Yamamoto",
      "number": "18",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Los Angeles Dodgers",
      "profile": "https://www.mlb.com/player/yoshinobu-yamamoto-808967"
    }
  ],
  "San Diego Padres": [
    {
      "id": "MLB-670970",
      "mlbId": 670970,
      "name": "Adrian Morejon",
      "number": "50",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/adrian-morejon-670970"
    },
    {
      "id": "MLB-669720",
      "mlbId": 669720,
      "name": "Austin Hays",
      "number": "15",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/austin-hays-669720"
    },
    {
      "id": "MLB-699134",
      "mlbId": 699134,
      "name": "Bradgley Rodriguez",
      "number": "72",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/bradgley-rodriguez-699134"
    },
    {
      "id": "MLB-663554",
      "mlbId": 663554,
      "name": "Casey Mize",
      "number": "32",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/casey-mize-663554",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-688158",
      "mlbId": 688158,
      "name": "David Morgan",
      "number": "66",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/david-morgan-688158"
    },
    {
      "id": "MLB-687957",
      "mlbId": 687957,
      "name": "Dustin Harris",
      "number": "29",
      "position": "LF",
      "positions": [
        "LF",
        "RF"
      ],
      "rosterPosition": "LF/RF",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/dustin-harris-687957"
    },
    {
      "id": "MLB-806956",
      "mlbId": 806956,
      "name": "Ethan Salas",
      "number": "8",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/ethan-salas-806956"
    },
    {
      "id": "MLB-665487",
      "mlbId": 665487,
      "name": "Fernando Tatis Jr.",
      "number": "23",
      "position": "RF",
      "positions": [
        "RF",
        "2B"
      ],
      "rosterPosition": "RF/2B",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/fernando-tatis-jr-665487"
    },
    {
      "id": "MLB-666023",
      "mlbId": 666023,
      "name": "Freddy Fermin",
      "number": "54",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/freddy-fermin-666023"
    },
    {
      "id": "MLB-657757",
      "mlbId": 657757,
      "name": "Gavin Sheets",
      "number": "30",
      "position": "1B",
      "positions": [
        "1B",
        "LF",
        "DH"
      ],
      "rosterPosition": "1B/LF/DH",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/gavin-sheets-657757"
    },
    {
      "id": "MLB-701538",
      "mlbId": 701538,
      "name": "Jackson Merrill",
      "number": "3",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/jackson-merrill-701538"
    },
    {
      "id": "MLB-630105",
      "mlbId": 630105,
      "name": "Jake Cronenworth",
      "number": "9",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/jake-cronenworth-630105"
    },
    {
      "id": "MLB-687749",
      "mlbId": 687749,
      "name": "Jase Bowen",
      "number": "4",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/jase-bowen-687749"
    },
    {
      "id": "MLB-592094",
      "mlbId": 592094,
      "name": "Jason Adam",
      "number": "40",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/jason-adam-592094"
    },
    {
      "id": "MLB-605397",
      "mlbId": 605397,
      "name": "Joe Musgrove",
      "number": "44",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/joe-musgrove-605397"
    },
    {
      "id": "MLB-608337",
      "mlbId": 608337,
      "name": "Lucas Giolito",
      "number": "55",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/lucas-giolito-608337",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-669134",
      "mlbId": 669134,
      "name": "Luis Campusano",
      "number": "12",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/luis-campusano-669134"
    },
    {
      "id": "MLB-650859",
      "mlbId": 650859,
      "name": "Luis Rengifo",
      "number": "21",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/luis-rengifo-650859",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-592518",
      "mlbId": 592518,
      "name": "Manny Machado",
      "number": "13",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/manny-machado-592518"
    },
    {
      "id": "MLB-695243",
      "mlbId": 695243,
      "name": "Mason Miller",
      "number": "22",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/mason-miller-695243"
    },
    {
      "id": "MLB-650633",
      "mlbId": 650633,
      "name": "Michael King",
      "number": "34",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/michael-king-650633"
    },
    {
      "id": "MLB-609280",
      "mlbId": 609280,
      "name": "Miguel Andujar",
      "number": "41",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/miguel-andujar-609280"
    },
    {
      "id": "MLB-601713",
      "mlbId": 601713,
      "name": "Nick Pivetta",
      "number": "27",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/nick-pivetta-601713"
    },
    {
      "id": "MLB-657656",
      "mlbId": 657656,
      "name": "Ramón Laureano",
      "number": "5",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/ramon-laureano-657656",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-592662",
      "mlbId": 592662,
      "name": "Robbie Ray",
      "number": "38",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/robbie-ray-592662"
    },
    {
      "id": "MLB-669392",
      "mlbId": 669392,
      "name": "Samad Taylor",
      "number": "0",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/samad-taylor-669392"
    },
    {
      "id": "MLB-664034",
      "mlbId": 664034,
      "name": "Ty France",
      "number": "25",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/ty-france-664034"
    },
    {
      "id": "MLB-621111",
      "mlbId": 621111,
      "name": "Walker Buehler",
      "number": "10",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/walker-buehler-621111"
    },
    {
      "id": "MLB-593428",
      "mlbId": 593428,
      "name": "Xander Bogaerts",
      "number": "2",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/xander-bogaerts-593428"
    },
    {
      "id": "MLB-673513",
      "mlbId": 673513,
      "name": "Yuki Matsui",
      "number": "1",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Diego Padres",
      "profile": "https://www.mlb.com/player/yuki-matsui-673513"
    }
  ],
  "San Francisco Giants": [
    {
      "id": "MLB-605288",
      "mlbId": 605288,
      "name": "Adrian Houser",
      "number": "12",
      "position": "SP",
      "positions": [
        "SP",
        "RP"
      ],
      "rosterPosition": "SP/RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/adrian-houser-605288",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-668800",
      "mlbId": 668800,
      "name": "Andrew Knizner",
      "number": "19",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/andrew-knizner-668800"
    },
    {
      "id": "MLB-683627",
      "mlbId": 683627,
      "name": "Anthony Molina",
      "number": "45",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/anthony-molina-683627"
    },
    {
      "id": "MLB-694918",
      "mlbId": 694918,
      "name": "Blade Tidwell",
      "number": "46",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/blade-tidwell-694918",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-815589",
      "mlbId": 815589,
      "name": "Bo Davidson",
      "number": "94",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/bo-davidson-815589"
    },
    {
      "id": "MLB-694820",
      "mlbId": 694820,
      "name": "Braxton Roxby",
      "number": "90",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/braxton-roxby-694820"
    },
    {
      "id": "MLB-695391",
      "mlbId": 695391,
      "name": "Brett Harris",
      "number": "29",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/brett-harris-695391"
    },
    {
      "id": "MLB-805811",
      "mlbId": 805811,
      "name": "Bryce Eldridge",
      "number": "8",
      "position": "DH",
      "positions": [
        "DH",
        "1B"
      ],
      "rosterPosition": "DH/1B",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/bryce-eldridge-805811",
      "injuryInclusion": "Injured 7-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-666808",
      "mlbId": 666808,
      "name": "Camilo Doval",
      "number": "57",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/camilo-doval-666808"
    },
    {
      "id": "MLB-693313",
      "mlbId": 693313,
      "name": "Carson Seymour",
      "number": "77",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/carson-seymour-693313"
    },
    {
      "id": "MLB-687931",
      "mlbId": 687931,
      "name": "Carson Whisenhunt",
      "number": "88",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/carson-whisenhunt-687931",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-669477",
      "mlbId": 669477,
      "name": "Casey Schmitt",
      "number": "10",
      "position": "LF",
      "positions": [
        "LF",
        "3B"
      ],
      "rosterPosition": "LF/3B",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/casey-schmitt-669477",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-683766",
      "mlbId": 683766,
      "name": "Christian Koss",
      "number": "50",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/christian-koss-683766"
    },
    {
      "id": "MLB-701852",
      "mlbId": 701852,
      "name": "Drew Cavanaugh",
      "number": "61",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/drew-cavanaugh-701852"
    },
    {
      "id": "MLB-687551",
      "mlbId": 687551,
      "name": "Drew Gilbert",
      "number": "0",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/drew-gilbert-687551"
    },
    {
      "id": "MLB-701474",
      "mlbId": 701474,
      "name": "Duncan Davitt",
      "number": "76",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/duncan-davitt-701474"
    },
    {
      "id": "MLB-681916",
      "mlbId": 681916,
      "name": "Dylan Smith",
      "number": "66",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/dylan-smith-681916"
    },
    {
      "id": "MLB-687529",
      "mlbId": 687529,
      "name": "Grant McCray",
      "number": "58",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/grant-mccray-687529"
    },
    {
      "id": "MLB-664056",
      "mlbId": 664056,
      "name": "Harrison Bader",
      "number": "9",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/harrison-bader-664056",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-806185",
      "mlbId": 806185,
      "name": "Hayden Birdsong",
      "number": "60",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/hayden-birdsong-806185",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-671345",
      "mlbId": 671345,
      "name": "Jason Foley",
      "number": "64",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/jason-foley-671345"
    },
    {
      "id": "MLB-669270",
      "mlbId": 669270,
      "name": "Joel Kuhnel",
      "number": "54",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/joel-kuhnel-669270"
    },
    {
      "id": "MLB-813841",
      "mlbId": 813841,
      "name": "Jonah Cox",
      "number": "53",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/jonah-cox-813841"
    },
    {
      "id": "MLB-676130",
      "mlbId": 676130,
      "name": "José Buttó",
      "number": "70",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/jose-butto-676130",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-664141",
      "mlbId": 664141,
      "name": "JT Brubaker",
      "number": "34",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/jt-brubaker-664141",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-808982",
      "mlbId": 808982,
      "name": "Jung Hoo Lee",
      "number": "51",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/jung-hoo-lee-808982",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-676775",
      "mlbId": 676775,
      "name": "Keaton Winn",
      "number": "67",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/keaton-winn-676775",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-694738",
      "mlbId": 694738,
      "name": "Landen Roupp",
      "number": "65",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/landen-roupp-694738"
    },
    {
      "id": "MLB-657277",
      "mlbId": 657277,
      "name": "Logan Webb",
      "number": "62",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/logan-webb-657277",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-691785",
      "mlbId": 691785,
      "name": "Marcelo Mayer",
      "number": "7",
      "position": "2B",
      "positions": [
        "2B",
        "SS"
      ],
      "rosterPosition": "2B/SS",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/marcelo-mayer-691785"
    },
    {
      "id": "MLB-656305",
      "mlbId": 656305,
      "name": "Matt Chapman",
      "number": "26",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/matt-chapman-656305",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-657424",
      "mlbId": 657424,
      "name": "Matt Gage",
      "number": "93",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/matt-gage-657424",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-683363",
      "mlbId": 683363,
      "name": "Matt Wilkinson",
      "number": "71",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/matt-wilkinson-683363"
    },
    {
      "id": "MLB-678545",
      "mlbId": 678545,
      "name": "Osleivis Basabe",
      "number": "39",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/osleivis-basabe-678545"
    },
    {
      "id": "MLB-646240",
      "mlbId": 646240,
      "name": "Rafael Devers",
      "number": "16",
      "position": "1B",
      "positions": [
        "1B",
        "DH"
      ],
      "rosterPosition": "1B/DH",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/rafael-devers-646240",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-678495",
      "mlbId": 678495,
      "name": "Randy Rodríguez",
      "number": "73",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/randy-rodriguez-678495",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-656529",
      "mlbId": 656529,
      "name": "Sam Hentges",
      "number": "31",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/sam-hentges-656529"
    },
    {
      "id": "MLB-814154",
      "mlbId": 814154,
      "name": "Scott Bandura",
      "number": "91",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/scott-bandura-814154"
    },
    {
      "id": "MLB-675920",
      "mlbId": 675920,
      "name": "Seth Lonsway",
      "number": "86",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/seth-lonsway-675920"
    },
    {
      "id": "MLB-694376",
      "mlbId": 694376,
      "name": "Shay Whitcomb",
      "number": "13",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/shay-whitcomb-694376"
    },
    {
      "id": "MLB-805345",
      "mlbId": 805345,
      "name": "Trent Harris",
      "number": "68",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/trent-harris-805345"
    },
    {
      "id": "MLB-686790",
      "mlbId": 686790,
      "name": "Trevor McDonald",
      "number": "72",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/trevor-mcdonald-686790",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-663941",
      "mlbId": 663941,
      "name": "Tristan Beck",
      "number": "43",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/tristan-beck-663941"
    },
    {
      "id": "MLB-806367",
      "mlbId": 806367,
      "name": "Turner Hill",
      "number": "52",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/turner-hill-806367"
    },
    {
      "id": "MLB-682674",
      "mlbId": 682674,
      "name": "Victor Bericoto",
      "number": "78",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/victor-bericoto-682674"
    },
    {
      "id": "MLB-642715",
      "mlbId": 642715,
      "name": "Willy Adames",
      "number": "2",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "San Francisco Giants",
      "profile": "https://www.mlb.com/player/willy-adames-642715",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    }
  ],
  "Atlanta Braves": [
    {
      "id": "MLB-700363",
      "mlbId": 700363,
      "name": "AJ Smith-Shawver",
      "number": "32",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/aj-smith-shawver-700363"
    },
    {
      "id": "MLB-663586",
      "mlbId": 663586,
      "name": "Austin Riley",
      "number": "27",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/austin-riley-663586"
    },
    {
      "id": "MLB-608718",
      "mlbId": 608718,
      "name": "Brent Suter",
      "number": "39",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/brent-suter-608718"
    },
    {
      "id": "MLB-676551",
      "mlbId": 676551,
      "name": "Brewer Hicklen",
      "number": "53",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/brewer-hicklen-676551"
    },
    {
      "id": "MLB-519242",
      "mlbId": 519242,
      "name": "Chris Sale",
      "number": "51",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/chris-sale-519242"
    },
    {
      "id": "MLB-800311",
      "mlbId": 800311,
      "name": "Didier Fuentes",
      "number": "72",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/didier-fuentes-800311"
    },
    {
      "id": "MLB-686948",
      "mlbId": 686948,
      "name": "Drake Baldwin",
      "number": "30",
      "position": "C",
      "positions": [
        "C",
        "DH"
      ],
      "rosterPosition": "C/DH",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/drake-baldwin-686948"
    },
    {
      "id": "MLB-689266",
      "mlbId": 689266,
      "name": "Dylan Dodd",
      "number": "46",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/dylan-dodd-689266"
    },
    {
      "id": "MLB-669276",
      "mlbId": 669276,
      "name": "Dylan Lee",
      "number": "52",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/dylan-lee-669276"
    },
    {
      "id": "MLB-656550",
      "mlbId": 656550,
      "name": "Grant Holmes",
      "number": "66",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/grant-holmes-656550"
    },
    {
      "id": "MLB-673490",
      "mlbId": 673490,
      "name": "Ha-Seong Kim",
      "number": "7",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/ha-seong-kim-673490"
    },
    {
      "id": "MLB-666214",
      "mlbId": 666214,
      "name": "Joey Wentz",
      "number": "33",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/joey-wentz-666214",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-702275",
      "mlbId": 702275,
      "name": "JR Ritchie",
      "number": "60",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/jr-ritchie-702275"
    },
    {
      "id": "MLB-657041",
      "mlbId": 657041,
      "name": "Lane Thomas",
      "number": "20",
      "position": "CF",
      "positions": [
        "CF",
        "LF"
      ],
      "rosterPosition": "CF/LF",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/lane-thomas-657041"
    },
    {
      "id": "MLB-621566",
      "mlbId": 621566,
      "name": "Matt Olson",
      "number": "28",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/matt-olson-621566"
    },
    {
      "id": "MLB-643289",
      "mlbId": 643289,
      "name": "Mauricio Dubón",
      "number": "14",
      "position": "LF",
      "positions": [
        "LF",
        "SS"
      ],
      "rosterPosition": "LF/SS",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/mauricio-dubon-643289"
    },
    {
      "id": "MLB-671739",
      "mlbId": 671739,
      "name": "Michael Harris II",
      "number": "23",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/michael-harris-ii-671739"
    },
    {
      "id": "MLB-573262",
      "mlbId": 573262,
      "name": "Mike Yastrzemski",
      "number": "18",
      "position": "LF",
      "positions": [
        "LF",
        "RF"
      ],
      "rosterPosition": "LF/RF",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/mike-yastrzemski-573262"
    },
    {
      "id": "MLB-645277",
      "mlbId": 645277,
      "name": "Ozzie Albies",
      "number": "1",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/ozzie-albies-645277"
    },
    {
      "id": "MLB-628452",
      "mlbId": 628452,
      "name": "Raisel Iglesias",
      "number": "26",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/raisel-iglesias-628452"
    },
    {
      "id": "MLB-678061",
      "mlbId": 678061,
      "name": "Ray Kerr",
      "number": "62",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/ray-kerr-678061"
    },
    {
      "id": "MLB-663158",
      "mlbId": 663158,
      "name": "Robert Suarez",
      "number": "75",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/robert-suarez-663158"
    },
    {
      "id": "MLB-660670",
      "mlbId": 660670,
      "name": "Ronald Acuña Jr.",
      "number": "13",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/ronald-acuna-jr-660670"
    },
    {
      "id": "MLB-642133",
      "mlbId": 642133,
      "name": "Rowdy Tellez",
      "number": "11",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/rowdy-tellez-642133"
    },
    {
      "id": "MLB-669221",
      "mlbId": 669221,
      "name": "Sean Murphy",
      "number": "12",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/sean-murphy-669221"
    },
    {
      "id": "MLB-680885",
      "mlbId": 680885,
      "name": "Spencer Schwellenbach",
      "number": "56",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/spencer-schwellenbach-680885",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-675911",
      "mlbId": 675911,
      "name": "Spencer Strider",
      "number": "99",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/spencer-strider-675911",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-641816",
      "mlbId": 641816,
      "name": "Tyler Mahle",
      "number": "54",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/tyler-mahle-641816"
    },
    {
      "id": "MLB-682989",
      "mlbId": 682989,
      "name": "Victor Mederos",
      "number": "58",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Atlanta Braves",
      "profile": "https://www.mlb.com/player/victor-mederos-682989"
    }
  ],
  "Miami Marlins": [
    {
      "id": "MLB-682663",
      "mlbId": 682663,
      "name": "Agustín Ramírez",
      "number": "50",
      "position": "DH",
      "positions": [
        "DH",
        "C"
      ],
      "rosterPosition": "DH/C",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/agustin-ramirez-682663"
    },
    {
      "id": "MLB-677053",
      "mlbId": 677053,
      "name": "Andrew Nardi",
      "number": "43",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/andrew-nardi-677053",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-669622",
      "mlbId": 669622,
      "name": "Anthony Bender",
      "number": "37",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/anthony-bender-669622",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-687134",
      "mlbId": 687134,
      "name": "Bradley Blalock",
      "number": "31",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/bradley-blalock-687134"
    },
    {
      "id": "MLB-640459",
      "mlbId": 640459,
      "name": "Brian Navarreto",
      "number": "64",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/brian-navarreto-640459"
    },
    {
      "id": "MLB-806188",
      "mlbId": 806188,
      "name": "Cade Gibson",
      "number": "58",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/cade-gibson-806188"
    },
    {
      "id": "MLB-676534",
      "mlbId": 676534,
      "name": "Calvin Faucher",
      "number": "53",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/calvin-faucher-676534"
    },
    {
      "id": "MLB-690978",
      "mlbId": 690978,
      "name": "Dax Fulton",
      "number": "90",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/dax-fulton-690978"
    },
    {
      "id": "MLB-691277",
      "mlbId": 691277,
      "name": "Deyvison De Los Santos",
      "number": "63",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/deyvison-de-los-santos-691277"
    },
    {
      "id": "MLB-665923",
      "mlbId": 665923,
      "name": "Esteury Ruiz",
      "number": "3",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/esteury-ruiz-665923"
    },
    {
      "id": "MLB-691587",
      "mlbId": 691587,
      "name": "Eury Pérez",
      "number": "39",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/eury-perez-691587"
    },
    {
      "id": "MLB-688363",
      "mlbId": 688363,
      "name": "Graham Pauley",
      "number": "21",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/graham-pauley-688363"
    },
    {
      "id": "MLB-665052",
      "mlbId": 665052,
      "name": "Griffin Conine",
      "number": "18",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/griffin-conine-665052"
    },
    {
      "id": "MLB-681715",
      "mlbId": 681715,
      "name": "Heriberto Hernández",
      "number": "13",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/heriberto-hernandez-681715"
    },
    {
      "id": "MLB-667652",
      "mlbId": 667652,
      "name": "Jack Ralston",
      "number": "79",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/jack-ralston-667652"
    },
    {
      "id": "MLB-805300",
      "mlbId": 805300,
      "name": "Jakob Marsee",
      "number": "87",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/jakob-marsee-805300"
    },
    {
      "id": "MLB-676083",
      "mlbId": 676083,
      "name": "Janson Junk",
      "number": "26",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/janson-junk-676083"
    },
    {
      "id": "MLB-691858",
      "mlbId": 691858,
      "name": "Jared Serna",
      "number": "68",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/jared-serna-691858"
    },
    {
      "id": "MLB-691594",
      "mlbId": 691594,
      "name": "Javier Sanoja",
      "number": "8",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/javier-sanoja-691594"
    },
    {
      "id": "MLB-691788",
      "mlbId": 691788,
      "name": "Joe Mack",
      "number": "80",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/joe-mack-691788"
    },
    {
      "id": "MLB-694795",
      "mlbId": 694795,
      "name": "Josh Ekness",
      "number": "95",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/josh-ekness-694795"
    },
    {
      "id": "MLB-669065",
      "mlbId": 669065,
      "name": "Kyle Stowers",
      "number": "28",
      "position": "1B",
      "positions": [
        "1B",
        "LF"
      ],
      "rosterPosition": "1B/LF",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/kyle-stowers-669065"
    },
    {
      "id": "MLB-676974",
      "mlbId": 676974,
      "name": "Max Meyer",
      "number": "23",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/max-meyer-676974",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-656848",
      "mlbId": 656848,
      "name": "Michael Petersen",
      "number": "49",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/michael-petersen-656848"
    },
    {
      "id": "MLB-672640",
      "mlbId": 672640,
      "name": "Otto Lopez",
      "number": "6",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/otto-lopez-672640"
    },
    {
      "id": "MLB-683357",
      "mlbId": 683357,
      "name": "Owen Caissie",
      "number": "17",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/owen-caissie-683357",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-664126",
      "mlbId": 664126,
      "name": "Pete Fairbanks",
      "number": "29",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/pete-fairbanks-664126",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-678692",
      "mlbId": 678692,
      "name": "Ronny Henriquez",
      "number": "32",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/ronny-henriquez-678692",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-687473",
      "mlbId": 687473,
      "name": "Ryan Gusto",
      "number": "65",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/ryan-gusto-687473"
    },
    {
      "id": "MLB-645261",
      "mlbId": 645261,
      "name": "Sandy Alcantara",
      "number": "22",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/sandy-alcantara-645261"
    },
    {
      "id": "MLB-663969",
      "mlbId": 663969,
      "name": "Tyler Phillips",
      "number": "30",
      "position": "SP",
      "positions": [
        "SP",
        "RP"
      ],
      "rosterPosition": "SP/RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/tyler-phillips-663969"
    },
    {
      "id": "MLB-676604",
      "mlbId": 676604,
      "name": "Tyler Zuber",
      "number": "55",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/tyler-zuber-676604",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-680767",
      "mlbId": 680767,
      "name": "Victor Vodnik",
      "number": "38",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/victor-vodnik-680767"
    },
    {
      "id": "MLB-682790",
      "mlbId": 682790,
      "name": "Wikelman González",
      "number": "67",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/wikelman-gonzalez-682790"
    },
    {
      "id": "MLB-669364",
      "mlbId": 669364,
      "name": "Xavier Edwards",
      "number": "9",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Miami Marlins",
      "profile": "https://www.mlb.com/player/xavier-edwards-669364"
    }
  ],
  "New York Mets": [
    {
      "id": "MLB-805999",
      "mlbId": 805999,
      "name": "A.J. Ewing",
      "number": "9",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/a-j-ewing-805999"
    },
    {
      "id": "MLB-681810",
      "mlbId": 681810,
      "name": "Austin Warren",
      "number": "44",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/austin-warren-681810"
    },
    {
      "id": "MLB-666182",
      "mlbId": 666182,
      "name": "Bo Bichette",
      "number": "19",
      "position": "3B",
      "positions": [
        "3B",
        "SS"
      ],
      "rosterPosition": "3B/SS",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/bo-bichette-666182"
    },
    {
      "id": "MLB-683146",
      "mlbId": 683146,
      "name": "Brett Baty",
      "number": "7",
      "position": "3B",
      "positions": [
        "3B",
        "2B"
      ],
      "rosterPosition": "3B/2B",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/brett-baty-683146"
    },
    {
      "id": "MLB-701807",
      "mlbId": 701807,
      "name": "Carson Benge",
      "number": "3",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/carson-benge-701807"
    },
    {
      "id": "MLB-694646",
      "mlbId": 694646,
      "name": "Chayce McDermott",
      "number": "43",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/chayce-mcdermott-694646"
    },
    {
      "id": "MLB-681035",
      "mlbId": 681035,
      "name": "Christian Scott",
      "number": "45",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/christian-scott-681035",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-666624",
      "mlbId": 666624,
      "name": "Christopher Morel",
      "number": "28",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/christopher-morel-666624"
    },
    {
      "id": "MLB-672335",
      "mlbId": 672335,
      "name": "Cionel Pérez",
      "number": "52",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/cionel-perez-672335"
    },
    {
      "id": "MLB-665506",
      "mlbId": 665506,
      "name": "Cristian Pache",
      "number": "71",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/cristian-pache-665506"
    },
    {
      "id": "MLB-673380",
      "mlbId": 673380,
      "name": "Dedniel Núñez",
      "number": "72",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/dedniel-nunez-673380"
    },
    {
      "id": "MLB-642207",
      "mlbId": 642207,
      "name": "Devin Williams",
      "number": "38",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/devin-williams-642207"
    },
    {
      "id": "MLB-682626",
      "mlbId": 682626,
      "name": "Francisco Alvarez",
      "number": "4",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/francisco-alvarez-682626"
    },
    {
      "id": "MLB-596019",
      "mlbId": 596019,
      "name": "Francisco Lindor",
      "number": "12",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/francisco-lindor-596019"
    },
    {
      "id": "MLB-676724",
      "mlbId": 676724,
      "name": "Jared Young",
      "number": "29",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/jared-young-676724",
      "injuryInclusion": "Injured 7-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-642376",
      "mlbId": 642376,
      "name": "Jefry Yan",
      "number": "84",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/jefry-yan-642376"
    },
    {
      "id": "MLB-804636",
      "mlbId": 804636,
      "name": "Jonah Tong",
      "number": "21",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/jonah-tong-804636"
    },
    {
      "id": "MLB-593871",
      "mlbId": 593871,
      "name": "Jorge Polanco",
      "number": "11",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/jorge-polanco-593871",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-665742",
      "mlbId": 665742,
      "name": "Juan Soto",
      "number": "22",
      "position": "LF",
      "positions": [
        "LF",
        "DH"
      ],
      "rosterPosition": "LF/DH",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/juan-soto-665742"
    },
    {
      "id": "MLB-663795",
      "mlbId": 663795,
      "name": "Justin Hagenman",
      "number": "47",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/justin-hagenman-663795"
    },
    {
      "id": "MLB-673540",
      "mlbId": 673540,
      "name": "Kodai Senga",
      "number": "34",
      "position": "RP",
      "positions": [
        "RP",
        "SP"
      ],
      "rosterPosition": "RP/SP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/kodai-senga-673540"
    },
    {
      "id": "MLB-620443",
      "mlbId": 620443,
      "name": "Luis Torrens",
      "number": "13",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/luis-torrens-620443"
    },
    {
      "id": "MLB-543760",
      "mlbId": 543760,
      "name": "Marcus Semien",
      "number": "10",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/marcus-semien-543760"
    },
    {
      "id": "MLB-668901",
      "mlbId": 668901,
      "name": "Mark Vientos",
      "number": "27",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/mark-vientos-668901"
    },
    {
      "id": "MLB-681320",
      "mlbId": 681320,
      "name": "Nate Lavender",
      "number": "94",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/nate-lavender-681320"
    },
    {
      "id": "MLB-703492",
      "mlbId": 703492,
      "name": "Nick Morabito",
      "number": "55",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/nick-morabito-703492"
    },
    {
      "id": "MLB-690997",
      "mlbId": 690997,
      "name": "Nolan McLean",
      "number": "26",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/nolan-mclean-690997"
    },
    {
      "id": "MLB-657585",
      "mlbId": 657585,
      "name": "Reed Garrett",
      "number": "75",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/reed-garrett-657585",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-476594",
      "mlbId": 476594,
      "name": "Robert Stock",
      "number": "89",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/robert-stock-476594",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-677595",
      "mlbId": 677595,
      "name": "Ronny Mauricio",
      "number": "0",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/ronny-mauricio-677595"
    },
    {
      "id": "MLB-640455",
      "mlbId": 640455,
      "name": "Sean Manaea",
      "number": "59",
      "position": "SP",
      "positions": [
        "SP",
        "RP"
      ],
      "rosterPosition": "SP/RP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/sean-manaea-640455"
    },
    {
      "id": "MLB-668964",
      "mlbId": 668964,
      "name": "Tobias Myers",
      "number": "32",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/tobias-myers-668964"
    },
    {
      "id": "MLB-656731",
      "mlbId": 656731,
      "name": "Tylor Megill",
      "number": "58",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/tylor-megill-656731",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-804267",
      "mlbId": 804267,
      "name": "Zac Thornton",
      "number": "49",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "New York Mets",
      "profile": "https://www.mlb.com/player/zac-thornton-804267"
    }
  ],
  "Philadelphia Phillies": [
    {
      "id": "MLB-605400",
      "mlbId": 605400,
      "name": "Aaron Nola",
      "number": "27",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/aaron-nola-605400"
    },
    {
      "id": "MLB-666969",
      "mlbId": 666969,
      "name": "Adolis García",
      "number": "53",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/adolis-garcia-666969",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-664761",
      "mlbId": 664761,
      "name": "Alec Bohm",
      "number": "28",
      "position": "3B",
      "positions": [
        "3B",
        "1B"
      ],
      "rosterPosition": "3B/1B",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/alec-bohm-664761"
    },
    {
      "id": "MLB-686934",
      "mlbId": 686934,
      "name": "Alex McFarlane",
      "number": "71",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/alex-mcfarlane-686934"
    },
    {
      "id": "MLB-691725",
      "mlbId": 691725,
      "name": "Andrew Painter",
      "number": "24",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/andrew-painter-691725"
    },
    {
      "id": "MLB-641745",
      "mlbId": 641745,
      "name": "Brad Keller",
      "number": "40",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/brad-keller-641745",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-669016",
      "mlbId": 669016,
      "name": "Brandon Marsh",
      "number": "16",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/brandon-marsh-669016"
    },
    {
      "id": "MLB-650559",
      "mlbId": 650559,
      "name": "Bryan De La Cruz",
      "number": "41",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/bryan-de-la-cruz-650559"
    },
    {
      "id": "MLB-547180",
      "mlbId": 547180,
      "name": "Bryce Harper",
      "number": "3",
      "position": "1B",
      "positions": [
        "1B",
        "RF"
      ],
      "rosterPosition": "1B/RF",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/bryce-harper-547180"
    },
    {
      "id": "MLB-681082",
      "mlbId": 681082,
      "name": "Bryson Stott",
      "number": "5",
      "position": "2B",
      "positions": [
        "2B",
        "3B"
      ],
      "rosterPosition": "2B/3B",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/bryson-stott-681082"
    },
    {
      "id": "MLB-668873",
      "mlbId": 668873,
      "name": "Caleb Kilian",
      "number": "56",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/caleb-kilian-668873",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-663767",
      "mlbId": 663767,
      "name": "Chase Shugart",
      "number": "55",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/chase-shugart-663767"
    },
    {
      "id": "MLB-650911",
      "mlbId": 650911,
      "name": "Cristopher Sánchez",
      "number": "61",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/cristopher-sanchez-650911"
    },
    {
      "id": "MLB-656537",
      "mlbId": 656537,
      "name": "Derek Hill",
      "number": "49",
      "position": "CF",
      "positions": [
        "CF",
        "RF"
      ],
      "rosterPosition": "CF/RF",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/derek-hill-656537"
    },
    {
      "id": "MLB-624641",
      "mlbId": 624641,
      "name": "Edmundo Sosa",
      "number": "33",
      "position": "LF",
      "positions": [
        "LF",
        "2B"
      ],
      "rosterPosition": "LF/2B",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/edmundo-sosa-624641"
    },
    {
      "id": "MLB-596117",
      "mlbId": 596117,
      "name": "Garrett Stubbs",
      "number": "21",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/garrett-stubbs-596117"
    },
    {
      "id": "MLB-592663",
      "mlbId": 592663,
      "name": "J.T. Realmuto",
      "number": "10",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/j-t-realmuto-592663"
    },
    {
      "id": "MLB-666200",
      "mlbId": 666200,
      "name": "Jesús Luzardo",
      "number": "44",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/jesus-luzardo-666200"
    },
    {
      "id": "MLB-661395",
      "mlbId": 661395,
      "name": "Jhoan Duran",
      "number": "59",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/jhoan-duran-661395"
    },
    {
      "id": "MLB-680742",
      "mlbId": 680742,
      "name": "Jonathan Bowlan",
      "number": "52",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/jonathan-bowlan-680742"
    },
    {
      "id": "MLB-621237",
      "mlbId": 621237,
      "name": "José Alvarado",
      "number": "46",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/jose-alvarado-621237"
    },
    {
      "id": "MLB-702222",
      "mlbId": 702222,
      "name": "Justin Crawford",
      "number": "2",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/justin-crawford-702222"
    },
    {
      "id": "MLB-656941",
      "mlbId": 656941,
      "name": "Kyle Schwarber",
      "number": "12",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/kyle-schwarber-656941"
    },
    {
      "id": "MLB-805249",
      "mlbId": 805249,
      "name": "Otto Kemp",
      "number": "31",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/otto-kemp-805249"
    },
    {
      "id": "MLB-665561",
      "mlbId": 665561,
      "name": "Rafael Marchán",
      "number": "13",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/rafael-marchan-665561"
    },
    {
      "id": "MLB-621383",
      "mlbId": 621383,
      "name": "Tanner Banks",
      "number": "58",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/tanner-banks-621383"
    },
    {
      "id": "MLB-641835",
      "mlbId": 641835,
      "name": "Tim Mayza",
      "number": "37",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/tim-mayza-641835"
    },
    {
      "id": "MLB-607208",
      "mlbId": 607208,
      "name": "Trea Turner",
      "number": "7",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/trea-turner-607208"
    },
    {
      "id": "MLB-554430",
      "mlbId": 554430,
      "name": "Zack Wheeler",
      "number": "45",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Philadelphia Phillies",
      "profile": "https://www.mlb.com/player/zack-wheeler-554430"
    }
  ],
  "Washington Nationals": [
    {
      "id": "MLB-694673",
      "mlbId": 694673,
      "name": "Abimelec Ortiz",
      "number": "81",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/abimelec-ortiz-694673"
    },
    {
      "id": "MLB-665953",
      "mlbId": 665953,
      "name": "Andrés Chaparro",
      "number": "87",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/andres-chaparro-665953"
    },
    {
      "id": "MLB-674841",
      "mlbId": 674841,
      "name": "Andrew Alvarez",
      "number": "54",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/andrew-alvarez-674841"
    },
    {
      "id": "MLB-695418",
      "mlbId": 695418,
      "name": "Brad Lord",
      "number": "41",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/brad-lord-695418"
    },
    {
      "id": "MLB-691781",
      "mlbId": 691781,
      "name": "Brady House",
      "number": "12",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/brady-house-691781"
    },
    {
      "id": "MLB-676917",
      "mlbId": 676917,
      "name": "Cade Cavalli",
      "number": "24",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/cade-cavalli-676917"
    },
    {
      "id": "MLB-682928",
      "mlbId": 682928,
      "name": "CJ Abrams",
      "number": "5",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/cj-abrams-682928"
    },
    {
      "id": "MLB-813349",
      "mlbId": 813349,
      "name": "Connelly Early",
      "number": "19",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/connelly-early-813349"
    },
    {
      "id": "MLB-695734",
      "mlbId": 695734,
      "name": "Daylen Lile",
      "number": "4",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/daylen-lile-695734"
    },
    {
      "id": "MLB-687792",
      "mlbId": 687792,
      "name": "DJ Herz",
      "number": "77",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/dj-herz-687792"
    },
    {
      "id": "MLB-686611",
      "mlbId": 686611,
      "name": "Dylan Crews",
      "number": "3",
      "position": "RF",
      "positions": [
        "RF",
        "CF"
      ],
      "rosterPosition": "RF/CF",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/dylan-crews-686611"
    },
    {
      "id": "MLB-680899",
      "mlbId": 680899,
      "name": "Erik Tolman",
      "number": "73",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/erik-tolman-680899"
    },
    {
      "id": "MLB-681402",
      "mlbId": 681402,
      "name": "Gus Varland",
      "number": "47",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/gus-varland-681402"
    },
    {
      "id": "MLB-695670",
      "mlbId": 695670,
      "name": "Harry Ford",
      "number": "17",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/harry-ford-695670"
    },
    {
      "id": "MLB-695378",
      "mlbId": 695378,
      "name": "Jack Sinclair",
      "number": "49",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/jack-sinclair-695378"
    },
    {
      "id": "MLB-696285",
      "mlbId": 696285,
      "name": "Jacob Young",
      "number": "30",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/jacob-young-696285"
    },
    {
      "id": "MLB-663623",
      "mlbId": 663623,
      "name": "Jake Irvin",
      "number": "27",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/jake-irvin-663623"
    },
    {
      "id": "MLB-695578",
      "mlbId": 695578,
      "name": "James Wood",
      "number": "29",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/james-wood-695578"
    },
    {
      "id": "MLB-678391",
      "mlbId": 678391,
      "name": "Jorbit Vivas",
      "number": "84",
      "position": "2B",
      "positions": [
        "2B",
        "3B"
      ],
      "rosterPosition": "2B/3B",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/jorbit-vivas-678391"
    },
    {
      "id": "MLB-677588",
      "mlbId": 677588,
      "name": "José Tena",
      "number": "8",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/jose-tena-677588"
    },
    {
      "id": "MLB-680686",
      "mlbId": 680686,
      "name": "Josiah Gray",
      "number": "40",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/josiah-gray-680686"
    },
    {
      "id": "MLB-660688",
      "mlbId": 660688,
      "name": "Keibert Ruiz",
      "number": "20",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/keibert-ruiz-660688"
    },
    {
      "id": "MLB-680730",
      "mlbId": 680730,
      "name": "Mitchell Parker",
      "number": "70",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/mitchell-parker-680730",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-683083",
      "mlbId": 683083,
      "name": "Nasim Nuñez",
      "number": "26",
      "position": "2B",
      "positions": [
        "2B",
        "SS"
      ],
      "rosterPosition": "2B/SS",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/nasim-nunez-683083"
    },
    {
      "id": "MLB-687377",
      "mlbId": 687377,
      "name": "Orlando Ribalta",
      "number": "64",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/orlando-ribalta-687377",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-676571",
      "mlbId": 676571,
      "name": "PJ Poulin",
      "number": "50",
      "position": "RP",
      "positions": [
        "RP",
        "SP"
      ],
      "rosterPosition": "RP/SP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/pj-poulin-676571",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-663992",
      "mlbId": 663992,
      "name": "Richard Lovelady",
      "number": "55",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/richard-lovelady-663992"
    },
    {
      "id": "MLB-683000",
      "mlbId": 683000,
      "name": "Riley Cornelio",
      "number": "74",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/riley-cornelio-683000"
    },
    {
      "id": "MLB-702021",
      "mlbId": 702021,
      "name": "Will Dion",
      "number": "76",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/will-dion-702021"
    },
    {
      "id": "MLB-691002",
      "mlbId": 691002,
      "name": "Yohandy Morales",
      "number": "28",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/yohandy-morales-691002"
    },
    {
      "id": "MLB-672442",
      "mlbId": 672442,
      "name": "Yovanny Cruz",
      "number": "48",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Washington Nationals",
      "profile": "https://www.mlb.com/player/yovanny-cruz-672442"
    }
  ],
  "Chicago Cubs": [
    {
      "id": "MLB-650644",
      "mlbId": 650644,
      "name": "Aaron Civale",
      "number": "38",
      "position": "RP",
      "positions": [
        "RP",
        "SP"
      ],
      "rosterPosition": "RP/SP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/aaron-civale-650644"
    },
    {
      "id": "MLB-608324",
      "mlbId": 608324,
      "name": "Alex Bregman",
      "number": "3",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/alex-bregman-608324"
    },
    {
      "id": "MLB-676962",
      "mlbId": 676962,
      "name": "Ben Brown",
      "number": "32",
      "position": "RP",
      "positions": [
        "RP",
        "SP"
      ],
      "rosterPosition": "RP/SP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/ben-brown-676962",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-690990",
      "mlbId": 690990,
      "name": "Cade Horton",
      "number": "22",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/cade-horton-690990",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-608348",
      "mlbId": 608348,
      "name": "Carson Kelly",
      "number": "15",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/carson-kelly-608348"
    },
    {
      "id": "MLB-605280",
      "mlbId": 605280,
      "name": "Clay Holmes",
      "number": "25",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/clay-holmes-605280"
    },
    {
      "id": "MLB-607067",
      "mlbId": 607067,
      "name": "Colin Rea",
      "number": "53",
      "position": "SP",
      "positions": [
        "SP",
        "RP"
      ],
      "rosterPosition": "SP/RP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/colin-rea-607067"
    },
    {
      "id": "MLB-694037",
      "mlbId": 694037,
      "name": "Daniel Palencia",
      "number": "48",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/daniel-palencia-694037"
    },
    {
      "id": "MLB-621020",
      "mlbId": 621020,
      "name": "Dansby Swanson",
      "number": "7",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/dansby-swanson-621020"
    },
    {
      "id": "MLB-656849",
      "mlbId": 656849,
      "name": "David Peterson",
      "number": "19",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/david-peterson-656849"
    },
    {
      "id": "MLB-672356",
      "mlbId": 672356,
      "name": "Gabriel Arias",
      "number": "43",
      "position": "3B",
      "positions": [
        "3B",
        "SS"
      ],
      "rosterPosition": "3B/SS",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/gabriel-arias-672356"
    },
    {
      "id": "MLB-664023",
      "mlbId": 664023,
      "name": "Ian Happ",
      "number": "8",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/ian-happ-664023"
    },
    {
      "id": "MLB-657097",
      "mlbId": 657097,
      "name": "Jacob Webb",
      "number": "71",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/jacob-webb-657097"
    },
    {
      "id": "MLB-665871",
      "mlbId": 665871,
      "name": "Javier Assad",
      "number": "72",
      "position": "RP",
      "positions": [
        "RP",
        "SP"
      ],
      "rosterPosition": "RP/SP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/javier-assad-665871"
    },
    {
      "id": "MLB-592332",
      "mlbId": 592332,
      "name": "Kevin Gausman",
      "number": "12",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/kevin-gausman-592332"
    },
    {
      "id": "MLB-807713",
      "mlbId": 807713,
      "name": "Matt Shaw",
      "number": "6",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/matt-shaw-807713"
    },
    {
      "id": "MLB-571510",
      "mlbId": 571510,
      "name": "Matthew Boyd",
      "number": "16",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/matthew-boyd-571510"
    },
    {
      "id": "MLB-683737",
      "mlbId": 683737,
      "name": "Michael Busch",
      "number": "29",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/michael-busch-683737"
    },
    {
      "id": "MLB-624424",
      "mlbId": 624424,
      "name": "Michael Conforto",
      "number": "20",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/michael-conforto-624424"
    },
    {
      "id": "MLB-665804",
      "mlbId": 665804,
      "name": "Miguel Amaya",
      "number": "9",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/miguel-amaya-665804"
    },
    {
      "id": "MLB-663538",
      "mlbId": 663538,
      "name": "Nico Hoerner",
      "number": "2",
      "position": "2B",
      "positions": [
        "2B",
        "SS"
      ],
      "rosterPosition": "2B/SS",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/nico-hoerner-663538"
    },
    {
      "id": "MLB-699393",
      "mlbId": 699393,
      "name": "Pedro Ramírez",
      "number": "75",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/pedro-ramirez-699393"
    },
    {
      "id": "MLB-691718",
      "mlbId": 691718,
      "name": "Pete Crow-Armstrong",
      "number": "4",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/pete-crow-armstrong-691718"
    },
    {
      "id": "MLB-664208",
      "mlbId": 664208,
      "name": "Phil Maton",
      "number": "88",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/phil-maton-664208",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-669020",
      "mlbId": 669020,
      "name": "Ryan Rolison",
      "number": "33",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/ryan-rolison-669020"
    },
    {
      "id": "MLB-666171",
      "mlbId": 666171,
      "name": "Ryan Zeferjahn",
      "number": "56",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/ryan-zeferjahn-666171"
    },
    {
      "id": "MLB-673548",
      "mlbId": 673548,
      "name": "Seiya Suzuki",
      "number": "27",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/seiya-suzuki-673548"
    },
    {
      "id": "MLB-571946",
      "mlbId": 571946,
      "name": "Shelby Miller",
      "number": "77",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/shelby-miller-571946",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-684007",
      "mlbId": 684007,
      "name": "Shota Imanaga",
      "number": "18",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/shota-imanaga-684007"
    },
    {
      "id": "MLB-621438",
      "mlbId": 621438,
      "name": "Tyrone Taylor",
      "number": "55",
      "position": "LF",
      "positions": [
        "LF",
        "CF"
      ],
      "rosterPosition": "LF/CF",
      "team": "Chicago Cubs",
      "profile": "https://www.mlb.com/player/tyrone-taylor-621438"
    }
  ],
  "Cincinnati Reds": [
    {
      "id": "MLB-671096",
      "mlbId": 671096,
      "name": "Andrew Abbott",
      "number": "41",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/andrew-abbott-671096"
    },
    {
      "id": "MLB-663903",
      "mlbId": 663903,
      "name": "Brady Singer",
      "number": "51",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/brady-singer-663903"
    },
    {
      "id": "MLB-682227",
      "mlbId": 682227,
      "name": "Brandon Williamson",
      "number": "55",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/brandon-williamson-682227"
    },
    {
      "id": "MLB-656271",
      "mlbId": 656271,
      "name": "Brock Burke",
      "number": "49",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/brock-burke-656271"
    },
    {
      "id": "MLB-699115",
      "mlbId": 699115,
      "name": "Carlos Jorge",
      "number": "38",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/carlos-jorge-699115"
    },
    {
      "id": "MLB-686730",
      "mlbId": 686730,
      "name": "Carson Spiers",
      "number": "68",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/carson-spiers-686730"
    },
    {
      "id": "MLB-695505",
      "mlbId": 695505,
      "name": "Chase Burns",
      "number": "26",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/chase-burns-695505",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-667472",
      "mlbId": 667472,
      "name": "Dane Myers",
      "number": "17",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/dane-myers-667472"
    },
    {
      "id": "MLB-682829",
      "mlbId": 682829,
      "name": "Elly De La Cruz",
      "number": "44",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/elly-de-la-cruz-682829"
    },
    {
      "id": "MLB-641941",
      "mlbId": 641941,
      "name": "Emilio Pagán",
      "number": "15",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/emilio-pagan-641941"
    },
    {
      "id": "MLB-553993",
      "mlbId": 553993,
      "name": "Eugenio Suárez",
      "number": "28",
      "position": "DH",
      "positions": [
        "DH",
        "3B"
      ],
      "rosterPosition": "DH/3B",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/eugenio-suarez-553993"
    },
    {
      "id": "MLB-668933",
      "mlbId": 668933,
      "name": "Graham Ashcraft",
      "number": "23",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/graham-ashcraft-668933"
    },
    {
      "id": "MLB-699302",
      "mlbId": 699302,
      "name": "Héctor Rodríguez",
      "number": "43",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/hector-rodriguez-699302"
    },
    {
      "id": "MLB-668881",
      "mlbId": 668881,
      "name": "Hunter Greene",
      "number": "21",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/hunter-greene-668881",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-668709",
      "mlbId": 668709,
      "name": "JJ Bleday",
      "number": "22",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/jj-bleday-668709"
    },
    {
      "id": "MLB-624431",
      "mlbId": 624431,
      "name": "Jose Trevino",
      "number": "35",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/jose-trevino-624431"
    },
    {
      "id": "MLB-682877",
      "mlbId": 682877,
      "name": "Juan Brito",
      "number": "46",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/juan-brito-682877"
    },
    {
      "id": "MLB-670062",
      "mlbId": 670062,
      "name": "Julian Garcia",
      "number": "57",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/julian-garcia-670062",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-663647",
      "mlbId": 663647,
      "name": "Ke'Bryan Hayes",
      "number": "3",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/ke-bryan-hayes-663647"
    },
    {
      "id": "MLB-682825",
      "mlbId": 682825,
      "name": "Luis Mey",
      "number": "47",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/luis-mey-682825"
    },
    {
      "id": "MLB-680574",
      "mlbId": 680574,
      "name": "Matt McLain",
      "number": "9",
      "position": "2B",
      "positions": [
        "2B",
        "SS"
      ],
      "rosterPosition": "2B/SS",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/matt-mclain-680574"
    },
    {
      "id": "MLB-669911",
      "mlbId": 669911,
      "name": "Michael Toglia",
      "number": "48",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/michael-toglia-669911",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-666157",
      "mlbId": 666157,
      "name": "Nick Lodolo",
      "number": "40",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/nick-lodolo-666157"
    },
    {
      "id": "MLB-665828",
      "mlbId": 665828,
      "name": "Oswaldo Cabrera",
      "number": "16",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/oswaldo-cabrera-665828"
    },
    {
      "id": "MLB-572955",
      "mlbId": 572955,
      "name": "Pierce Johnson",
      "number": "52",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/pierce-johnson-572955"
    },
    {
      "id": "MLB-695076",
      "mlbId": 695076,
      "name": "Rhett Lowder",
      "number": "25",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/rhett-lowder-695076"
    },
    {
      "id": "MLB-701398",
      "mlbId": 701398,
      "name": "Sal Stewart",
      "number": "27",
      "position": "1B",
      "positions": [
        "1B",
        "3B"
      ],
      "rosterPosition": "1B/3B",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/sal-stewart-701398"
    },
    {
      "id": "MLB-668715",
      "mlbId": 668715,
      "name": "Spencer Steer",
      "number": "7",
      "position": "1B",
      "positions": [
        "1B",
        "LF"
      ],
      "rosterPosition": "1B/LF",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/spencer-steer-668715"
    },
    {
      "id": "MLB-622088",
      "mlbId": 622088,
      "name": "Tejay Antone",
      "number": "70",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/tejay-antone-622088"
    },
    {
      "id": "MLB-663574",
      "mlbId": 663574,
      "name": "Tony Santillan",
      "number": "64",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/tony-santillan-663574",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-663886",
      "mlbId": 663886,
      "name": "Tyler Stephenson",
      "number": "37",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/tyler-stephenson-663886"
    },
    {
      "id": "MLB-677943",
      "mlbId": 677943,
      "name": "Will Banfield",
      "number": "60",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/will-banfield-677943"
    },
    {
      "id": "MLB-685112",
      "mlbId": 685112,
      "name": "Zach McCambley",
      "number": "62",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Cincinnati Reds",
      "profile": "https://www.mlb.com/player/zach-mccambley-685112"
    }
  ],
  "Milwaukee Brewers": [
    {
      "id": "MLB-676879",
      "mlbId": 676879,
      "name": "Aaron Ashby",
      "number": "26",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/aaron-ashby-676879"
    },
    {
      "id": "MLB-682842",
      "mlbId": 682842,
      "name": "Abner Uribe",
      "number": "45",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/abner-uribe-682842"
    },
    {
      "id": "MLB-683734",
      "mlbId": 683734,
      "name": "Andrew Vaughn",
      "number": "28",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/andrew-vaughn-683734"
    },
    {
      "id": "MLB-672582",
      "mlbId": 672582,
      "name": "Angel Zerpa",
      "number": "61",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/angel-zerpa-672582",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-622608",
      "mlbId": 622608,
      "name": "Antonio Senzatela",
      "number": "49",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/antonio-senzatela-622608"
    },
    {
      "id": "MLB-605540",
      "mlbId": 605540,
      "name": "Brandon Woodruff",
      "number": "53",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/brandon-woodruff-605540"
    },
    {
      "id": "MLB-668930",
      "mlbId": 668930,
      "name": "Brice Turang",
      "number": "2",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/brice-turang-668930"
    },
    {
      "id": "MLB-592885",
      "mlbId": 592885,
      "name": "Christian Yelich",
      "number": "22",
      "position": "DH",
      "positions": [
        "DH"
      ],
      "rosterPosition": "DH",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/christian-yelich-592885"
    },
    {
      "id": "MLB-806198",
      "mlbId": 806198,
      "name": "Cooper Pratt",
      "number": "12",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/cooper-pratt-806198"
    },
    {
      "id": "MLB-666152",
      "mlbId": 666152,
      "name": "David Hamilton",
      "number": "6",
      "position": "3B",
      "positions": [
        "3B",
        "SS"
      ],
      "rosterPosition": "3B/SS",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/david-hamilton-666152"
    },
    {
      "id": "MLB-669084",
      "mlbId": 669084,
      "name": "DL Hall",
      "number": "37",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/dl-hall-669084"
    },
    {
      "id": "MLB-669160",
      "mlbId": 669160,
      "name": "Dustin May",
      "number": "21",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/dustin-may-669160"
    },
    {
      "id": "MLB-669003",
      "mlbId": 669003,
      "name": "Garrett Mitchell",
      "number": "5",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/garrett-mitchell-669003"
    },
    {
      "id": "MLB-596142",
      "mlbId": 596142,
      "name": "Gary Sánchez",
      "number": "99",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/gary-sanchez-596142"
    },
    {
      "id": "MLB-694192",
      "mlbId": 694192,
      "name": "Jackson Chourio",
      "number": "11",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/jackson-chourio-694192"
    },
    {
      "id": "MLB-694819",
      "mlbId": 694819,
      "name": "Jacob Misiorowski",
      "number": "32",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/jacob-misiorowski-694819"
    },
    {
      "id": "MLB-641343",
      "mlbId": 641343,
      "name": "Jake Bauers",
      "number": "9",
      "position": "1B",
      "positions": [
        "1B",
        "RF"
      ],
      "rosterPosition": "1B/RF",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/jake-bauers-641343"
    },
    {
      "id": "MLB-687401",
      "mlbId": 687401,
      "name": "Joey Ortiz",
      "number": "3",
      "position": "SS",
      "positions": [
        "SS",
        "3B"
      ],
      "rosterPosition": "SS/3B",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/joey-ortiz-687401"
    },
    {
      "id": "MLB-668941",
      "mlbId": 668941,
      "name": "JoJo Romero",
      "number": "33",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/jojo-romero-668941"
    },
    {
      "id": "MLB-690986",
      "mlbId": 690986,
      "name": "Kyle Harrison",
      "number": "52",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/kyle-harrison-690986"
    },
    {
      "id": "MLB-701656",
      "mlbId": 701656,
      "name": "Logan Henderson",
      "number": "43",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/logan-henderson-701656"
    },
    {
      "id": "MLB-800325",
      "mlbId": 800325,
      "name": "Luis Lara",
      "number": "18",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/luis-lara-800325"
    },
    {
      "id": "MLB-682990",
      "mlbId": 682990,
      "name": "Quinn Priester",
      "number": "46",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/quinn-priester-682990",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-688107",
      "mlbId": 688107,
      "name": "Robert Gasser",
      "number": "54",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/robert-gasser-688107"
    },
    {
      "id": "MLB-686217",
      "mlbId": 686217,
      "name": "Sal Frelick",
      "number": "10",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/sal-frelick-686217"
    },
    {
      "id": "MLB-675660",
      "mlbId": 675660,
      "name": "Shane Drohan",
      "number": "55",
      "position": "SP",
      "positions": [
        "SP",
        "RP"
      ],
      "rosterPosition": "SP/RP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/shane-drohan-675660"
    },
    {
      "id": "MLB-656730",
      "mlbId": 656730,
      "name": "Trevor Megill",
      "number": "29",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/trevor-megill-656730"
    },
    {
      "id": "MLB-661388",
      "mlbId": 661388,
      "name": "William Contreras",
      "number": "24",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Milwaukee Brewers",
      "profile": "https://www.mlb.com/player/william-contreras-661388"
    }
  ],
  "Pittsburgh Pirates": [
    {
      "id": "MLB-699008",
      "mlbId": 699008,
      "name": "Antwone Kelly",
      "number": "62",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/antwone-kelly-699008"
    },
    {
      "id": "MLB-695257",
      "mlbId": 695257,
      "name": "Billy Cook",
      "number": "25",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/billy-cook-695257"
    },
    {
      "id": "MLB-685126",
      "mlbId": 685126,
      "name": "Brandon Eisert",
      "number": "14",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/brandon-eisert-685126"
    },
    {
      "id": "MLB-664040",
      "mlbId": 664040,
      "name": "Brandon Lowe",
      "number": "5",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/brandon-lowe-664040"
    },
    {
      "id": "MLB-677952",
      "mlbId": 677952,
      "name": "Braxton Ashcraft",
      "number": "35",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/braxton-ashcraft-677952",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-668804",
      "mlbId": 668804,
      "name": "Bryan Reynolds",
      "number": "10",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/bryan-reynolds-668804"
    },
    {
      "id": "MLB-696149",
      "mlbId": 696149,
      "name": "Bubba Chandler",
      "number": "36",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/bubba-chandler-696149"
    },
    {
      "id": "MLB-669387",
      "mlbId": 669387,
      "name": "Carmen Mlodzinski",
      "number": "50",
      "position": "RP",
      "positions": [
        "RP",
        "SP"
      ],
      "rosterPosition": "RP/SP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/carmen-mlodzinski-669387"
    },
    {
      "id": "MLB-699013",
      "mlbId": 699013,
      "name": "Esmerlyn Valdez",
      "number": "55",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/esmerlyn-valdez-699013",
      "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-642397",
      "mlbId": 642397,
      "name": "Gregory Soto",
      "number": "31",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/gregory-soto-642397"
    },
    {
      "id": "MLB-680779",
      "mlbId": 680779,
      "name": "Henry Davis",
      "number": "32",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/henry-davis-680779"
    },
    {
      "id": "MLB-682995",
      "mlbId": 682995,
      "name": "Hunter Barco",
      "number": "45",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/hunter-barco-682995"
    },
    {
      "id": "MLB-676755",
      "mlbId": 676755,
      "name": "Isaac Mattson",
      "number": "72",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/isaac-mattson-676755",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-694378",
      "mlbId": 694378,
      "name": "Jacob Gonzalez",
      "number": "26",
      "position": "1B",
      "positions": [
        "1B",
        "3B",
        "SS"
      ],
      "rosterPosition": "1B/3B/SS",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/jacob-gonzalez-694378"
    },
    {
      "id": "MLB-663968",
      "mlbId": 663968,
      "name": "Jake Mangum",
      "number": "28",
      "position": "CF",
      "positions": [
        "CF",
        "LF"
      ],
      "rosterPosition": "CF/LF",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/jake-mangum-663968"
    },
    {
      "id": "MLB-683003",
      "mlbId": 683003,
      "name": "Jared Jones",
      "number": "17",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/jared-jones-683003"
    },
    {
      "id": "MLB-669707",
      "mlbId": 669707,
      "name": "Jared Triolo",
      "number": "19",
      "position": "SS",
      "positions": [
        "SS",
        "3B"
      ],
      "rosterPosition": "SS/3B",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/jared-triolo-669707"
    },
    {
      "id": "MLB-489446",
      "mlbId": 489446,
      "name": "Kirby Yates",
      "number": "54",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/kirby-yates-489446"
    },
    {
      "id": "MLB-804606",
      "mlbId": 804606,
      "name": "Konnor Griffin",
      "number": "6",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/konnor-griffin-804606"
    },
    {
      "id": "MLB-669199",
      "mlbId": 669199,
      "name": "Lake Bachar",
      "number": "71",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/lake-bachar-669199"
    },
    {
      "id": "MLB-596133",
      "mlbId": 596133,
      "name": "Luke Weaver",
      "number": "18",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/luke-weaver-596133"
    },
    {
      "id": "MLB-682254",
      "mlbId": 682254,
      "name": "Mason Montgomery",
      "number": "46",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/mason-montgomery-682254"
    },
    {
      "id": "MLB-656605",
      "mlbId": 656605,
      "name": "Mitch Keller",
      "number": "23",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/mitch-keller-656605",
      "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-693304",
      "mlbId": 693304,
      "name": "Nick Gonzales",
      "number": "3",
      "position": "3B",
      "positions": [
        "3B",
        "2B"
      ],
      "rosterPosition": "3B/2B",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/nick-gonzales-693304"
    },
    {
      "id": "MLB-668716",
      "mlbId": 668716,
      "name": "Noah Murdock",
      "number": "58",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/noah-murdock-668716"
    },
    {
      "id": "MLB-665833",
      "mlbId": 665833,
      "name": "Oneil Cruz",
      "number": "15",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/oneil-cruz-665833"
    },
    {
      "id": "MLB-694973",
      "mlbId": 694973,
      "name": "Paul Skenes",
      "number": "30",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/paul-skenes-694973"
    },
    {
      "id": "MLB-804668",
      "mlbId": 804668,
      "name": "Rafael Flores Jr.",
      "number": "43",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/rafael-flores-jr-804668"
    },
    {
      "id": "MLB-682927",
      "mlbId": 682927,
      "name": "Ronny Simon",
      "number": "63",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/ronny-simon-682927"
    },
    {
      "id": "MLB-656811",
      "mlbId": 656811,
      "name": "Ryan O'Hearn",
      "number": "29",
      "position": "RF",
      "positions": [
        "RF",
        "1B"
      ],
      "rosterPosition": "RF/1B",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/ryan-o-hearn-656811"
    },
    {
      "id": "MLB-687462",
      "mlbId": 687462,
      "name": "Spencer Horwitz",
      "number": "2",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/spencer-horwitz-687462"
    },
    {
      "id": "MLB-670990",
      "mlbId": 670990,
      "name": "Yohan Ramírez",
      "number": "49",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "Pittsburgh Pirates",
      "profile": "https://www.mlb.com/player/yohan-ramirez-670990"
    }
  ],
  "St. Louis Cardinals": [
    {
      "id": "MLB-676475",
      "mlbId": 676475,
      "name": "Alec Burleson",
      "number": "41",
      "position": "1B",
      "positions": [
        "1B"
      ],
      "rosterPosition": "1B",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/alec-burleson-676475"
    },
    {
      "id": "MLB-669467",
      "mlbId": 669467,
      "name": "Andre Pallante",
      "number": "53",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/andre-pallante-669467"
    },
    {
      "id": "MLB-663494",
      "mlbId": 663494,
      "name": "Bryan Torres",
      "number": "39",
      "position": "LF",
      "positions": [
        "LF"
      ],
      "rosterPosition": "LF",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/bryan-torres-663494"
    },
    {
      "id": "MLB-802408",
      "mlbId": 802408,
      "name": "Brycen Mautz",
      "number": "52",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/brycen-mautz-802408"
    },
    {
      "id": "MLB-685464",
      "mlbId": 685464,
      "name": "Cade Winquest",
      "number": "63",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/cade-winquest-685464"
    },
    {
      "id": "MLB-693409",
      "mlbId": 693409,
      "name": "César Prieto",
      "number": "31",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/cesar-prieto-693409"
    },
    {
      "id": "MLB-666277",
      "mlbId": 666277,
      "name": "George Soriano",
      "number": "65",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/george-soriano-666277"
    },
    {
      "id": "MLB-700669",
      "mlbId": 700669,
      "name": "Gordon Graceffo",
      "number": "44",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/gordon-graceffo-700669"
    },
    {
      "id": "MLB-684516",
      "mlbId": 684516,
      "name": "Hancel Rincon",
      "number": "66",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/hancel-rincon-684516"
    },
    {
      "id": "MLB-690928",
      "mlbId": 690928,
      "name": "Hunter Dobbins",
      "number": "40",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/hunter-dobbins-690928",
      "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
    },
    {
      "id": "MLB-671056",
      "mlbId": 671056,
      "name": "Iván Herrera",
      "number": "48",
      "position": "DH",
      "positions": [
        "DH",
        "C"
      ],
      "rosterPosition": "DH/C",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/ivan-herrera-671056"
    },
    {
      "id": "MLB-802139",
      "mlbId": 802139,
      "name": "JJ Wetherholt",
      "number": "26",
      "position": "2B",
      "positions": [
        "2B"
      ],
      "rosterPosition": "2B",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/jj-wetherholt-802139"
    },
    {
      "id": "MLB-691023",
      "mlbId": 691023,
      "name": "Jordan Walker",
      "number": "18",
      "position": "RF",
      "positions": [
        "RF"
      ],
      "rosterPosition": "RF",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/jordan-walker-691023"
    },
    {
      "id": "MLB-665877",
      "mlbId": 665877,
      "name": "José Fermín",
      "number": "15",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/jose-fermin-665877"
    },
    {
      "id": "MLB-677865",
      "mlbId": 677865,
      "name": "Justin Bruihl",
      "number": "47",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/justin-bruihl-677865"
    },
    {
      "id": "MLB-681517",
      "mlbId": 681517,
      "name": "Kyle Leahy",
      "number": "62",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/kyle-leahy-681517"
    },
    {
      "id": "MLB-699024",
      "mlbId": 699024,
      "name": "Leo Bernal",
      "number": "13",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/leo-bernal-699024"
    },
    {
      "id": "MLB-703725",
      "mlbId": 703725,
      "name": "Luis Gastelum",
      "number": "72",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/luis-gastelum-703725"
    },
    {
      "id": "MLB-691026",
      "mlbId": 691026,
      "name": "Masyn Winn",
      "number": "0",
      "position": "SS",
      "positions": [
        "SS"
      ],
      "rosterPosition": "SS",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/masyn-winn-691026"
    },
    {
      "id": "MLB-669461",
      "mlbId": 669461,
      "name": "Matthew Liberatore",
      "number": "32",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/matthew-liberatore-669461"
    },
    {
      "id": "MLB-700241",
      "mlbId": 700241,
      "name": "Michael McGreevy",
      "number": "36",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/michael-mcgreevy-700241"
    },
    {
      "id": "MLB-701675",
      "mlbId": 701675,
      "name": "Nathan Church",
      "number": "27",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/nathan-church-701675"
    },
    {
      "id": "MLB-669357",
      "mlbId": 669357,
      "name": "Nolan Gorman",
      "number": "16",
      "position": "3B",
      "positions": [
        "3B"
      ],
      "rosterPosition": "3B",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/nolan-gorman-669357"
    },
    {
      "id": "MLB-686780",
      "mlbId": 686780,
      "name": "Pedro Pagés",
      "number": "43",
      "position": "C",
      "positions": [
        "C"
      ],
      "rosterPosition": "C",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/pedro-pages-686780"
    },
    {
      "id": "MLB-687273",
      "mlbId": 687273,
      "name": "Quinn Mathews",
      "number": "60",
      "position": "SP",
      "positions": [
        "SP"
      ],
      "rosterPosition": "SP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/quinn-mathews-687273"
    },
    {
      "id": "MLB-676617",
      "mlbId": 676617,
      "name": "Riley O'Brien",
      "number": "61",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/riley-o-brien-676617"
    },
    {
      "id": "MLB-592773",
      "mlbId": 592773,
      "name": "Ryne Stanek",
      "number": "55",
      "position": "RP",
      "positions": [
        "RP"
      ],
      "rosterPosition": "RP",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/ryne-stanek-592773"
    },
    {
      "id": "MLB-695336",
      "mlbId": 695336,
      "name": "Thomas Saggese",
      "number": "25",
      "position": "SS",
      "positions": [
        "SS",
        "2B"
      ],
      "rosterPosition": "SS/2B",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/thomas-saggese-695336"
    },
    {
      "id": "MLB-687363",
      "mlbId": 687363,
      "name": "Victor Scott II",
      "number": "11",
      "position": "CF",
      "positions": [
        "CF"
      ],
      "rosterPosition": "CF",
      "team": "St. Louis Cardinals",
      "profile": "https://www.mlb.com/player/victor-scott-ii-687363"
    }
  ]
};
const MLB_HEADSHOTS = {
  "MLB-661531": {
    "url": "assets/mlb/headshots/661531.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/661531/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "384b6d912300e4965529fcdc27e6b9dfe1f3fe63833ee0c7df2ac8416d8afbe0"
  },
  "MLB-667670": {
    "url": "assets/mlb/headshots/667670.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/667670/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "79f9b4b49e4ce8c622a64aa12a53625f81cfef52428917ffbf9082f64127a346"
  },
  "MLB-666126": {
    "url": "assets/mlb/headshots/666126.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666126/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6e40fa94869b4482407fa6e9078bfb8fc6af0cbb4c56372b802a5ffc694c0f0c"
  },
  "MLB-622268": {
    "url": "assets/mlb/headshots/622268.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/622268/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9ea31edc7100c5277dbc391de493333fa575ce0b568013091c5e570f676284e0"
  },
  "MLB-675961": {
    "url": "assets/mlb/headshots/675961.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/675961/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "51bb3f460158470bae695b77fbd7033628ff5993462d4a714f975ea55dc5e214"
  },
  "MLB-672016": {
    "url": "assets/mlb/headshots/672016.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672016/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3d09c2b604fc5c2dd39bb92f84a9558f5a68e4d0ef4abc291ef0d151b2b0cdcf"
  },
  "MLB-695611": {
    "url": "assets/mlb/headshots/695611.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695611/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "395d1ca298cf1ad344cc4a8d2c40fcc6f110b5e02434c16053c25f7cd6cb4843"
  },
  "MLB-680723": {
    "url": "assets/mlb/headshots/680723.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680723/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3cf49865fe49536bf7f189778788b609694160f0511d1d9ec5e91d359ef69834"
  },
  "MLB-665660": {
    "url": "assets/mlb/headshots/665660.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665660/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1d1f5b2d40634ed92c11325b97a2106b9242d44ad9377745fd617291e47a1636"
  },
  "MLB-703607": {
    "url": "assets/mlb/headshots/703607.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/703607/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b260a739071aa5427a6706b8d26fd155fafea415167293edc12edcff65bb9998"
  },
  "MLB-664129": {
    "url": "assets/mlb/headshots/664129.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664129/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f43e8b508559204545d1501a9951538b61d895e350f9fa193569687fc9c6d012"
  },
  "MLB-669620": {
    "url": "assets/mlb/headshots/669620.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669620/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ca401a25616b38edff198c382325bd89ca8d9cc9c0389f6de9ba8849f1f9012a"
  },
  "MLB-669372": {
    "url": "assets/mlb/headshots/669372.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669372/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e591c358624ac166c000d42ab295212fa1b000688efbe43b47aaa42571088eeb"
  },
  "MLB-643446": {
    "url": "assets/mlb/headshots/643446.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/643446/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d8e2354db62ea9e85ed4983ffd00855d9c1c4feefcd65dc532f3ef2cfabf6875"
  },
  "MLB-805779": {
    "url": "assets/mlb/headshots/805779.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805779/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6142c2ce6597dd0f651b5fbfd1ad1fc805d4d4c6b3cfa330c0df1fe1cc4ced1c"
  },
  "MLB-663687": {
    "url": "assets/mlb/headshots/663687.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663687/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8abc1f7838db8aae961ac5b57f396f7fa5e7e02710d67d9ab70136e1ea6433d5"
  },
  "MLB-688297": {
    "url": "assets/mlb/headshots/688297.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/688297/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3f51a3e2b6576f299a7d7b78fde280cce5841641bf302f0156b7f71f3b73c29b"
  },
  "MLB-641680": {
    "url": "assets/mlb/headshots/641680.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641680/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "50c4dbfbb2ac4a511a57c74347d2910afb5ec2ad82ce4502a9822868d6f5937f"
  },
  "MLB-811965": {
    "url": "assets/mlb/headshots/811965.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/811965/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f1540e73dbec85737ad2b2191625af970ddeb3b57a3cd08bc8f540728a2ae70a"
  },
  "MLB-643410": {
    "url": "assets/mlb/headshots/643410.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/643410/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1dacc07e638b77b547587bc9807102e01414b76f5e172e325e80188fce69e4e0"
  },
  "MLB-682052": {
    "url": "assets/mlb/headshots/682052.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682052/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ceeb364b8d6239906251db8dccd320f85fde97373b9779bb820c89db977aee5f"
  },
  "MLB-605488": {
    "url": "assets/mlb/headshots/605488.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/605488/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "86fc82c6f45a62c027d1942a2a40746d530737c2766f1adef47214dfd168df55"
  },
  "MLB-678022": {
    "url": "assets/mlb/headshots/678022.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678022/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c41d708f0e6666660cda8470097966f203db93c1095f823ef3b27945bb5660db"
  },
  "MLB-622663": {
    "url": "assets/mlb/headshots/622663.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/622663/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1dd954fcfcc112ec5826acc6c2d6d2c1011f6f8e868f05359f48b0da499f39c4"
  },
  "MLB-665622": {
    "url": "assets/mlb/headshots/665622.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665622/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c7928b0eac1a4efec155e7c0a0a8a6ca120c237fd1619f4d95d9583a01eff10f"
  },
  "MLB-686993": {
    "url": "assets/mlb/headshots/686993.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686993/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ff8ba59eb9509ae6bed041c9d6cce8dacd04fadabf881b90e09200132d4a9e9e"
  },
  "MLB-671732": {
    "url": "assets/mlb/headshots/671732.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/671732/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "230c71471bae1c630d0dab27d412063027ec94a6e301102f3419c9f10264e6a2"
  },
  "MLB-683021": {
    "url": "assets/mlb/headshots/683021.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683021/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3230b0ea2be1e6fb466bf294cad03f17e552aef31de66580ff53f5920713509f"
  },
  "MLB-701762": {
    "url": "assets/mlb/headshots/701762.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701762/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3d2483a294ecd6a75d96ee8a9ccf3d71bbf5beb8e9a139893dd4f8c19f5b94d2"
  },
  "MLB-656240": {
    "url": "assets/mlb/headshots/656240.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656240/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b7a2706fadc38ca1d01b3f9b97411784f409c52a37c9d23e1b0968bf212fce8d"
  },
  "MLB-686751": {
    "url": "assets/mlb/headshots/686751.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686751/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e73b1ac195c5cd3e40dc540cd94b1ac5df34591fc080e31d90c3876d4904ad8b"
  },
  "MLB-669127": {
    "url": "assets/mlb/headshots/669127.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669127/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fd3968defcaac86a3cca27c371459177c76c5d38293d0a825d73e009274fb425"
  },
  "MLB-695720": {
    "url": "assets/mlb/headshots/695720.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695720/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "81f5d2c117cf456eb3d1db07d5b576eb8c16a69d643f68e3ecc2162207bbd6ec"
  },
  "MLB-686930": {
    "url": "assets/mlb/headshots/686930.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686930/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a44e69c6919861ac57173c00a08a65ee18700d6ef04bcc7d87f8d40e4a6eae9b"
  },
  "MLB-814305": {
    "url": "assets/mlb/headshots/814305.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/814305/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "21dad8d10f14bfc3827e524008f3b9bd009555aabcb36014028f159aff459bad"
  },
  "MLB-680869": {
    "url": "assets/mlb/headshots/680869.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680869/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "38c9e1538efc411aa81e8ff818156ab9aba4bb131f82d0d8cb3476d9e3eddeaa"
  },
  "MLB-656986": {
    "url": "assets/mlb/headshots/656986.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656986/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6e5f580b053da56c396b9020cd935cfbe3826eb974713c0e33ab905ccd89c5ee"
  },
  "MLB-691777": {
    "url": "assets/mlb/headshots/691777.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691777/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ea6d4c2bde78dca3b3a666fb6a3f848d70f13c2a76101b3e853d836c563e2791"
  },
  "MLB-650556": {
    "url": "assets/mlb/headshots/650556.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/650556/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "775d345d24da6297c98ccee5725e8326ea4bde9c142dffbeba869b45a970048b"
  },
  "MLB-687911": {
    "url": "assets/mlb/headshots/687911.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687911/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2eac954706364fe2957dfca6fc5eb22ecbfbb77048bd4f7e7fd33e3bdbaa8002"
  },
  "MLB-543877": {
    "url": "assets/mlb/headshots/543877.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/543877/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5ac73ffedbd6073c8cbe7bd45572ab9857b5d3ec5cc17385b3ea33275420e54c"
  },
  "MLB-572233": {
    "url": "assets/mlb/headshots/572233.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/572233/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e110f67a251a3fdda0357eb5dd43ec01b0af5d847f981baae946186fc0ad4d36"
  },
  "MLB-691016": {
    "url": "assets/mlb/headshots/691016.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691016/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4f7cb956521e850c0d02f83ddb31cc103603f7da997210297578a99419c78acb"
  },
  "MLB-805123": {
    "url": "assets/mlb/headshots/805123.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805123/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3d92bdc3fc8758e4988733aa6900ff358039e10900a5be229821933a955f57ab"
  },
  "MLB-670623": {
    "url": "assets/mlb/headshots/670623.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670623/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5c887450f2ee41290d0d031c631647b539dd9b5a04a697fb19d5113565325522"
  },
  "MLB-686613": {
    "url": "assets/mlb/headshots/686613.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686613/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f2d21b4f30d2acfe03ee9c5ecc1ef8870c551be5a93d5e6b8374c41d9ada2c51"
  },
  "MLB-621043": {
    "url": "assets/mlb/headshots/621043.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621043/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "57b8196252726c2e906b22c04d5c00f7d4528af50a28ff08e1d3911514b98f33"
  },
  "MLB-676694": {
    "url": "assets/mlb/headshots/676694.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676694/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "902ebd800a02d5339bbfe15de40f68ba7c7a0f7ca24b8dc988ae746cb57393dc"
  },
  "MLB-694388": {
    "url": "assets/mlb/headshots/694388.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694388/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8248611600d0420105b2632f219320efa8e1a43bab221504679f47838945742a"
  },
  "MLB-514888": {
    "url": "assets/mlb/headshots/514888.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/514888/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "67b417624fb9bed78d66b49afe089f51f2129ac57739c8918f97bddfebed45f6"
  },
  "MLB-623352": {
    "url": "assets/mlb/headshots/623352.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/623352/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bb345866ae18878dd6a0c977a4df8c9773a0757abc3aa0d07604dc9f9d57c9f8"
  },
  "MLB-681973": {
    "url": "assets/mlb/headshots/681973.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681973/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "dd78769d8354af1ef77cc06b5a906dcd4fc576f08727869cfad17a2cf5ba7454"
  },
  "MLB-701121": {
    "url": "assets/mlb/headshots/701121.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701121/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e8a4213fa45262b6c0d5c57c9934ff4072b4d5dd72c543b7b99d942b608a822c"
  },
  "MLB-676369": {
    "url": "assets/mlb/headshots/676369.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676369/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ebd4fa261351393149b4817cfb211464dbd085351f402f78aa4e1f8b3310deae"
  },
  "MLB-828599": {
    "url": "assets/mlb/headshots/828599.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/828599/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "620782851dfa8822c662e8390147e72e099b0ddd3372c4282ba041ef007ae8f1"
  },
  "MLB-681347": {
    "url": "assets/mlb/headshots/681347.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681347/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "48510259141964850fce4a961024975eb67509d57da20f4bd9bd734ae660ee45"
  },
  "MLB-699044": {
    "url": "assets/mlb/headshots/699044.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/699044/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e02d44473dc9f147706da2ab58cf21280e1373bdea69b3880f2143cd39a5e8d2"
  },
  "MLB-669384": {
    "url": "assets/mlb/headshots/669384.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669384/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "24a76cb954d05b09015615928022b692dac430cafcd8744d035803afb2667d7f"
  },
  "MLB-837227": {
    "url": "assets/mlb/headshots/837227.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/837227/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d9c3e8aabaac1a306905f59fd1b6486aa6a89b3fc07485e287b78b0366c0662f"
  },
  "MLB-701358": {
    "url": "assets/mlb/headshots/701358.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701358/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7414f6347e908415945ba2ecc6e8daa95eafc290f4be03c54d31d59d3a3c6e7a"
  },
  "MLB-669713": {
    "url": "assets/mlb/headshots/669713.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669713/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fdc3ea8d2e64c45de4ee7b47f2ecf9ad8365129cbf600cdc8eba681c07080af2"
  },
  "MLB-670541": {
    "url": "assets/mlb/headshots/670541.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670541/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "44f8b23f2f15a93769bf7a85862b3cfaa7f1457413cac02fe3bb6ac18a319bb1"
  },
  "MLB-676620": {
    "url": "assets/mlb/headshots/676620.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676620/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b9cdc51d3c20bfdd5d3511eee8cca41b30ca53465ef052be0e1f7fa7f84860d4"
  },
  "MLB-663567": {
    "url": "assets/mlb/headshots/663567.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663567/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c78a41905835581685f8c527fb31c9af33c9a5c2c76cf6e76f48dba0c6affaf2"
  },
  "MLB-665161": {
    "url": "assets/mlb/headshots/665161.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665161/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "557b19713cdbaff68e192f0753d354b6fac91c274202e65056d5dd1739de08c7"
  },
  "MLB-666211": {
    "url": "assets/mlb/headshots/666211.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666211/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f731e20c5dc9ad4fb64c99152b03553bed38321b82c23f16fc8d7f7efca8bd18"
  },
  "MLB-690829": {
    "url": "assets/mlb/headshots/690829.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/690829/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9db564c3177b55e4480e50ef34de9c0bedd0addb4c5da9fb8387a4ff0b09cc4f"
  },
  "MLB-694203": {
    "url": "assets/mlb/headshots/694203.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694203/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6d2ee7911766e420b730f4c722446c68bc117af2c2261935b117dc8294ae2798"
  },
  "MLB-691946": {
    "url": "assets/mlb/headshots/691946.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691946/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e1af0909319f571b741bc6d76c4e482376f5ee7f6e456917ab929cfd0569cd8e"
  },
  "MLB-680570": {
    "url": "assets/mlb/headshots/680570.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680570/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b85ac2b907e6154ea3ecce0346efbeff61503cd3235904790e702e92cdac623e"
  },
  "MLB-820862": {
    "url": "assets/mlb/headshots/820862.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/820862/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "496655805622749211183fd20c96179de22535633fa4d848c9cd5696bf58fefd"
  },
  "MLB-669397": {
    "url": "assets/mlb/headshots/669397.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669397/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "012c446c4f6f6088975499a7ec8cbc299834c3fd2e5574e4d3a3ae9f79206c89"
  },
  "MLB-673237": {
    "url": "assets/mlb/headshots/673237.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/673237/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0c87efd5e54504f4a5a654a4cd07f8786805b26aede203df4e7b6ecfad1622e0"
  },
  "MLB-624428": {
    "url": "assets/mlb/headshots/624428.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/624428/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6b6c9662ea80e8ab3ec028a6d3197d42666c319de1abb93f0dc3cf68310083d2"
  },
  "MLB-686799": {
    "url": "assets/mlb/headshots/686799.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686799/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "50f14d2e26d5a34d5a76b35d80302d7ced9d985b3ab2ea6ec3c00af2e81af207"
  },
  "MLB-695681": {
    "url": "assets/mlb/headshots/695681.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695681/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "75811dd9c60c431531ef7fc317ee60061e7c1e7f0026cc423ca759b6dcf71930"
  },
  "MLB-666139": {
    "url": "assets/mlb/headshots/666139.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666139/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "481699fef8158ec74dc25a96d0182795fe2058946e0e3a32292b410397ec3181"
  },
  "MLB-669326": {
    "url": "assets/mlb/headshots/669326.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669326/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c503ea7aa09f31052fb48b2149611635d09f0001c24d571e7df1faed39830add"
  },
  "MLB-684665": {
    "url": "assets/mlb/headshots/684665.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/684665/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c231dacb49b6544714a383e98d18b22ec475ee219f5fabd058de5119e68d1bc1"
  },
  "MLB-545361": {
    "url": "assets/mlb/headshots/545361.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/545361/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5784472c5338055d0ae3b51012641359238a04d9fcfbead28dfa38606d7cae7b"
  },
  "MLB-815083": {
    "url": "assets/mlb/headshots/815083.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/815083/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7809becf9158c2df77cbd9f90a1de2d1ef72f2d9e9ce9f7c98ed3509e595b642"
  },
  "MLB-694208": {
    "url": "assets/mlb/headshots/694208.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694208/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "de8b8b0ce135eacfed0f1b36e83d8c823a1891e8dde65090915e9ab2f9dc400f"
  },
  "MLB-670245": {
    "url": "assets/mlb/headshots/670245.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670245/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e74e5af88bf3a9f3c0ab9430cb12cf4be15f79b13c5ff35c9c773f582866b861"
  },
  "MLB-672724": {
    "url": "assets/mlb/headshots/672724.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672724/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6fea7cf71d430722100bdd1bdeb6fcfb4aaf1cb8fb41aeeb4f06f8c5753d16eb"
  },
  "MLB-672282": {
    "url": "assets/mlb/headshots/672282.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672282/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c9fb91a373033e6b0c97f43c8ff75b2103831981960ef3e9d2caa70398ca5c13"
  },
  "MLB-696519": {
    "url": "assets/mlb/headshots/696519.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/696519/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ae7aa06cedcbacdb0a0b2ad4dbefe27b7eb0fcebe6a716c14b8f0aa7688e30d5"
  },
  "MLB-642350": {
    "url": "assets/mlb/headshots/642350.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642350/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "45a1aa4ee13203e0a88af5fb02c9c2332377f5bb7dd1339fb6936aba818d508f"
  },
  "MLB-518595": {
    "url": "assets/mlb/headshots/518595.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/518595/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6e7cd3a4d474cf3989cad1f013a0ad8c82180232e7f7fdab724486a05ad5f935"
  },
  "MLB-694384": {
    "url": "assets/mlb/headshots/694384.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694384/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6eaec4dc905d34bc388e2db59d835d9cd65612f19ebdbc4e000255854f4b8b6e"
  },
  "MLB-694680": {
    "url": "assets/mlb/headshots/694680.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694680/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2c058e91d89ae71329f6caa522c311e090a16aa7db50239c738751750434eeee"
  },
  "MLB-623168": {
    "url": "assets/mlb/headshots/623168.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/623168/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "14138f491eb1c164be23bc7c27a1738db0a4b2bcca932430259383ed18cc66ae"
  },
  "MLB-696270": {
    "url": "assets/mlb/headshots/696270.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/696270/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "81afc6349bae28693bac112846c7deb1ab94c9076a0c9a6b2aeb8ff6f30b29a6"
  },
  "MLB-660162": {
    "url": "assets/mlb/headshots/660162.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/660162/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2df4fdfcf4266876c855cc0f549c5eb40fc411afdbaa1bd70b5fd93f53883d84"
  },
  "MLB-687093": {
    "url": "assets/mlb/headshots/687093.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687093/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6e9a4dfd9feaaf9cdea771e64546490ba37d2849d6268f81d710fd0c8b7ac1b0"
  },
  "MLB-642048": {
    "url": "assets/mlb/headshots/642048.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642048/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "47cbb5b5065b57475089c99ad40f0a285817e475c93f48bb822d6033ec0f4e3d"
  },
  "MLB-696147": {
    "url": "assets/mlb/headshots/696147.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/696147/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2116bc0ad757d91d9d4cea4117222b4139247e68d1dc2448a601ffa42dae6bd2"
  },
  "MLB-685133": {
    "url": "assets/mlb/headshots/685133.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/685133/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cce8b66d61d35b89cc346e30cbe1fa00ff2b95b39d665a8d23ff94e509048500"
  },
  "MLB-700712": {
    "url": "assets/mlb/headshots/700712.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/700712/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "001fe1af68877730387f4865d92e73a578c8586c0598f90b1501a519f70e1da4"
  },
  "MLB-579328": {
    "url": "assets/mlb/headshots/579328.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/579328/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fdd7e04bab5818986edff1f803a6333556d3c721ff19e90c75ff7ea612dbc1b4"
  },
  "MLB-687263": {
    "url": "assets/mlb/headshots/687263.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687263/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "827680ff18ab5bfaacff3f4f048b239e35599c47fb6e1d1e9a08b81719046051"
  },
  "MLB-680977": {
    "url": "assets/mlb/headshots/680977.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680977/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5d702705cfc18dcd7615f2aec2752be8cf9e0692ce91e703d4685921b2f01156"
  },
  "MLB-693433": {
    "url": "assets/mlb/headshots/693433.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/693433/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8a346aaac1e6e210a3b9503a93b97378e6e244a9251c1974de9d48aca7062030"
  },
  "MLB-671111": {
    "url": "assets/mlb/headshots/671111.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/671111/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "407729d7f71c8849dd555905f3a164227cbc057a79a29df79603366256bac6ee"
  },
  "MLB-806068": {
    "url": "assets/mlb/headshots/806068.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/806068/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "16b60ad8f2eb9f863801709fbb26131223bd9b1564c1772a014026e81c2071f4"
  },
  "MLB-682243": {
    "url": "assets/mlb/headshots/682243.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682243/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "eabdd2325556656dbd42d34c317147d895399256af6192011403066d2f12f6c7"
  },
  "MLB-672841": {
    "url": "assets/mlb/headshots/672841.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672841/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c7329a5c89a4e88cae2388f1a4caebe105bdc3c7c43180b9931c3577ebdf078f"
  },
  "MLB-681867": {
    "url": "assets/mlb/headshots/681867.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681867/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "dadde3bd04ffc53c0a533847d1211ba08a61e0cd3ccd28fe962f780dd711ec46"
  },
  "MLB-686527": {
    "url": "assets/mlb/headshots/686527.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686527/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "efb5625730ab93d2ef17a42baf1a32bbafa8ee7fc103d04a076fd703fdf2d4b7"
  },
  "MLB-676106": {
    "url": "assets/mlb/headshots/676106.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676106/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "76b87d28af5d77ad30935736843d890e7542e583ed6703376d3d48940a35d683"
  },
  "MLB-663728": {
    "url": "assets/mlb/headshots/663728.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663728/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4a4c1ceb35eb4f5eb079abf20faadb1281b2c871a234e0d1ceb5b04da6fc8d34"
  },
  "MLB-669923": {
    "url": "assets/mlb/headshots/669923.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669923/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0afb4583bfc904053293d29e2970e3da4cce75a950bcf7b14f8610d44ba1cb26"
  },
  "MLB-702284": {
    "url": "assets/mlb/headshots/702284.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/702284/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "76846ebead4c280de6ec19d27bace11441ed5d60e79f77a037a9a4862af49980"
  },
  "MLB-641487": {
    "url": "assets/mlb/headshots/641487.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641487/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4b128051d62834051d9965aa173040a41af26df5e0a978d69a91c6e99b184eb4"
  },
  "MLB-660825": {
    "url": "assets/mlb/headshots/660825.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/660825/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "089e37476b156c96a4f4f2de075d672dd9c056db82e14131d87f18ad1b928680"
  },
  "MLB-662253": {
    "url": "assets/mlb/headshots/662253.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/662253/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ce83384e46c16753b9472207046b07532f5db3a970c245a8d3a18275b480d9f7"
  },
  "MLB-640902": {
    "url": "assets/mlb/headshots/640902.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/640902/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "da1aadfcaf976f82bb6163c5152a00fb14dbb736ec17226d6ff0318ef5212f1c"
  },
  "MLB-703155": {
    "url": "assets/mlb/headshots/703155.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/703155/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "67ee6ebddea0c0a7546a0939a86d19c6d851c249f5f450f5017c3ff2404f6dfa"
  },
  "MLB-642100": {
    "url": "assets/mlb/headshots/642100.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642100/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c337cb2ff0b773aaf620b4b93d78ab2b065196197483e2ce85f74aac343cb944"
  },
  "MLB-571948": {
    "url": "assets/mlb/headshots/571948.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/571948/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d95daf0ec80136f5fec4c0a70b5bd7fa11fcbbc490acbd6619586d2e808617bd"
  },
  "MLB-669302": {
    "url": "assets/mlb/headshots/669302.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669302/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1006113ed023945ca36fd2544f19f32ca565017ec2829fdd5fd32af94233d27b"
  },
  "MLB-647304": {
    "url": "assets/mlb/headshots/647304.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/647304/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "70ca220bbdd6f4647cee2d2ac560bd707a08ff3ad26c048d32dd00533f7bad5b"
  },
  "MLB-678606": {
    "url": "assets/mlb/headshots/678606.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678606/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f3fb0e2821f5a6972199d90464900c22189c3e9a617be73425a064d813702133"
  },
  "MLB-677594": {
    "url": "assets/mlb/headshots/677594.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677594/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b2c0d4ccec0ed787fce1f8f01d5ec76c9c2be7a114b59a36e60627124809e5a7"
  },
  "MLB-688138": {
    "url": "assets/mlb/headshots/688138.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/688138/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5318d5a4cc04f5b046af6941d879631c02670f93424edfd0690308e78bfdb88b"
  },
  "MLB-703197": {
    "url": "assets/mlb/headshots/703197.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/703197/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d67460ac53e706216d73215ab1d0280185ed4f89d19466b6a4b088e7c495a5cc"
  },
  "MLB-666374": {
    "url": "assets/mlb/headshots/666374.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666374/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "60b70f787e1a433bf97c634efa17ff93fc719b89de268cd7f12ea8015360e512"
  },
  "MLB-668227": {
    "url": "assets/mlb/headshots/668227.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668227/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fc6629dd426fa6a6f183816f08528b1a50481119ce03418a7fa7a8f3f14497c2"
  },
  "MLB-621074": {
    "url": "assets/mlb/headshots/621074.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621074/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "153c47f2e1b8efa18aa9a3b746f151616520f25846616aa9cc34868b66cbe70a"
  },
  "MLB-807739": {
    "url": "assets/mlb/headshots/807739.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/807739/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "612c11e2161d2a6666e89858c860d5b68f16c148fbd818ecf4179ddbbfe4828f"
  },
  "MLB-670042": {
    "url": "assets/mlb/headshots/670042.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670042/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3d17a85435e9946df305a06a68d2a2eb8a1d4e05f6820e98c9199f1327651064"
  },
  "MLB-700187": {
    "url": "assets/mlb/headshots/700187.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/700187/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bd3ad342862ffe35021a2f23647fb2d2f8ed4092e1a73bc41ae16db184838a05"
  },
  "MLB-621493": {
    "url": "assets/mlb/headshots/621493.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621493/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e94ced2fcb059566d9a19bf05d6d5aa3a675f4a8ce4ab3ecf18271b4b7af2ac6"
  },
  "MLB-642215": {
    "url": "assets/mlb/headshots/642215.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642215/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "62c05c6e1fc5fe581c9e079dd3e47ecb6a9e38613758dd22aee92a1b7bd55fba"
  },
  "MLB-696030": {
    "url": "assets/mlb/headshots/696030.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/696030/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "60c9117306b3d2ae1ad6a8812a846e693a31362b233230dcd2da4c862677084b"
  },
  "MLB-660844": {
    "url": "assets/mlb/headshots/660844.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/660844/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e01790ffac7880e945ee682ce20697db97bc281f1dc0eab6d26a782c09be0e31"
  },
  "MLB-681217": {
    "url": "assets/mlb/headshots/681217.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681217/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7f8b447f6acf232b72040f49ef2432ceb518a39a68fffa53fac2005d758751dc"
  },
  "MLB-695508": {
    "url": "assets/mlb/headshots/695508.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695508/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d7582fdd7bce282f4cecfe242b5c215a2abd8227801b22071e97d3e7ac8ea4db"
  },
  "MLB-674003": {
    "url": "assets/mlb/headshots/674003.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/674003/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4a93aaadf265763d21461261f9caa60b79acf81044c00d6ce088668adad72f01"
  },
  "MLB-683227": {
    "url": "assets/mlb/headshots/683227.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683227/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4a53e75f70f39d7716b1900d7ec8be9d0743155e3fa9d2cdad9206f75e016914"
  },
  "MLB-622554": {
    "url": "assets/mlb/headshots/622554.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/622554/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3b1bc4abb980831ac71299b80e65076df3af099aef36caecbcc279db25286a64"
  },
  "MLB-645302": {
    "url": "assets/mlb/headshots/645302.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/645302/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "236856be0bd1ea18c6a9e5f7c14b9818e323e3165fd34306e2970ade629e83d9"
  },
  "MLB-683004": {
    "url": "assets/mlb/headshots/683004.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683004/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "78a197a5b3dd2d77d161ba09b478ffcada9c3075a683c6e04db3f788a07dd06b"
  },
  "MLB-608369": {
    "url": "assets/mlb/headshots/608369.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/608369/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0e2e502e106f4763516dbbd350ba3e3f0bdf18668174bd8c5d12c61c76301127"
  },
  "MLB-553869": {
    "url": "assets/mlb/headshots/553869.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/553869/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "267209169e31fa5e8757af9a99d2c47d456c0e7eae51aee5cd926e5acab7b60a"
  },
  "MLB-607043": {
    "url": "assets/mlb/headshots/607043.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/607043/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ab92e1f957ed1372ec83897ae112ae27e097de55a4cc70b2905351cc16e7af03"
  },
  "MLB-677649": {
    "url": "assets/mlb/headshots/677649.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677649/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1306b8aa5974a8a5912a3adff05213ab39c0600b78168d2ddb1d778adfe3e3df"
  },
  "MLB-694497": {
    "url": "assets/mlb/headshots/694497.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694497/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4829360f824899f3c039417a064a3453ae3e0b774b9eca7180aec7c32d17a99d"
  },
  "MLB-669394": {
    "url": "assets/mlb/headshots/669394.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669394/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d6e15d4b2415d7c2c14b6f5b8abf99fce358bb0a63284b5ce68ad5078e234481"
  },
  "MLB-643376": {
    "url": "assets/mlb/headshots/643376.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/643376/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f8c8d3fd844c17acca987230568645c0b710e0b2e319e0c46d0413f7ed0a0188"
  },
  "MLB-596001": {
    "url": "assets/mlb/headshots/596001.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/596001/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "595e5fd276335a0f91388db1681a1b8c5ac3187db228ce724d5759666f336b51"
  },
  "MLB-592626": {
    "url": "assets/mlb/headshots/592626.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/592626/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ffa12723558aac8e54eb884a2a43b2d772c7a86d218da373fa96a43aa446a352"
  },
  "MLB-656756": {
    "url": "assets/mlb/headshots/656756.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656756/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "de7dc9aa6ed9327f4ce4b79b803fb7985228583a944d91ea0312ead7c0a897c1"
  },
  "MLB-594798": {
    "url": "assets/mlb/headshots/594798.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/594798/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "02b2ff30e2b153a93b2885d9d34941da94f608816cf2e54192b499919e7cc625"
  },
  "MLB-668390": {
    "url": "assets/mlb/headshots/668390.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668390/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e4d8f5d61b056bff1c6a8c4268507ec03901fc4e23cd80aed228f9772340f665"
  },
  "MLB-673962": {
    "url": "assets/mlb/headshots/673962.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/673962/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "82a71eb049577cc0cc59294377adbcebb4b0b3fdb7274ca8e071b8536cd1d41f"
  },
  "MLB-656641": {
    "url": "assets/mlb/headshots/656641.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656641/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "773e0f9f1297c97e1fa2c4530460ebe697bd6e490f9a68999838c6b5dab9130a"
  },
  "MLB-543309": {
    "url": "assets/mlb/headshots/543309.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/543309/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "47549e0bf983cf31f7e6d8d067e5c6be56fff0b6d1995c9780ff93d1449b1334"
  },
  "MLB-656222": {
    "url": "assets/mlb/headshots/656222.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656222/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a493f986270572106c095a9d351c0226ab895cb26ae368c12a4ac003d496ad7b"
  },
  "MLB-669022": {
    "url": "assets/mlb/headshots/669022.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669022/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "02cac6c5f293563e6fdff490fc9df41e6a1288c96d6c6962103614b920466804"
  },
  "MLB-680737": {
    "url": "assets/mlb/headshots/680737.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680737/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c3d5791dc7cf818766015859c0b3101aeef4c2b7fe9813a38f3ed17458786857"
  },
  "MLB-679822": {
    "url": "assets/mlb/headshots/679822.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/679822/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "24174d1574fed45794b31aab1425a7df57301a9f64b7b27ae0727b9efc6ffb24"
  },
  "MLB-670032": {
    "url": "assets/mlb/headshots/670032.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670032/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b6c805c65c029790474a1f0d25c54b04b6e1974d4ca4a672f816a32ec3517d47"
  },
  "MLB-682608": {
    "url": "assets/mlb/headshots/682608.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682608/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "46ec70a78279804b115ab5be7970ba59d1aca5e1881afd289dce973ccb90a08e"
  },
  "MLB-592866": {
    "url": "assets/mlb/headshots/592866.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/592866/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f48824eab9ae1cf51ab7ef38b85e20b825095f124324f989272e412187c5b114"
  },
  "MLB-641302": {
    "url": "assets/mlb/headshots/641302.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641302/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c2ed903535d7a38279c69dc76c7038fb96179bd5450ac3e7c6d9427c97c783dc"
  },
  "MLB-543135": {
    "url": "assets/mlb/headshots/543135.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/543135/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "244ac67e3d0e1ef44ad2a082f229d7b9eb9096eee9b27abd0f16731795544d7f"
  },
  "MLB-544150": {
    "url": "assets/mlb/headshots/544150.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/544150/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a68ddeeca10b89d251bcb06eab1c93ba516327342a8993ab550f91790a03c019"
  },
  "MLB-695380": {
    "url": "assets/mlb/headshots/695380.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695380/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e56bba4afcf0726d8d64b13daa735a17bd89e1d3dbfb6b740a5a90058b9e31ef"
  },
  "MLB-677958": {
    "url": "assets/mlb/headshots/677958.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677958/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9f3de31bc32b3684616cb7e2f0e576beccd189b5cc46be241b43929e1bb4149e"
  },
  "MLB-694671": {
    "url": "assets/mlb/headshots/694671.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694671/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "46951b498ba15920363ea2d6264c71dcdd2ba22c012c88e4ecedb5dd21c99282"
  },
  "MLB-676395": {
    "url": "assets/mlb/headshots/676395.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676395/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "15b2a48853500678172f4cdfa8638ce8dfefc41fae7b6ec9db7f9c6723351db2"
  },
  "MLB-687064": {
    "url": "assets/mlb/headshots/687064.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687064/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "362649ed0bd35082a0cc1a0973fa89276e9cf9d7364ac3129177169727e1a90b"
  },
  "MLB-676742": {
    "url": "assets/mlb/headshots/676742.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676742/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "07e6e42ce77bfb46c4ee2e45ab699cc301fe8118462cd6669262a32d7bcdb583"
  },
  "MLB-665966": {
    "url": "assets/mlb/headshots/665966.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665966/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3137c44d65e99d5d7c41842f37508595d125f7b59fba1fbc8284561f896c9bc0"
  },
  "MLB-605135": {
    "url": "assets/mlb/headshots/605135.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/605135/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "126dbf3a6c7930fa2bf1ddca0cfe2bad7b365ac9833bbc87ff528bbfd71dd382"
  },
  "MLB-695239": {
    "url": "assets/mlb/headshots/695239.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695239/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "76235cd6f1c9895d44eaa3392e72623846ac1c37a54e2fb0919a9c5539682873"
  },
  "MLB-689296": {
    "url": "assets/mlb/headshots/689296.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/689296/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1441e23475d13a71a2ae356cd5ed79037b480b0785f12c906f0a09cbefe03916"
  },
  "MLB-681047": {
    "url": "assets/mlb/headshots/681047.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681047/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3dddec3d8dbb125e94e9bf269e32413204c05e555fa86ea508979575a0b30dda"
  },
  "MLB-552640": {
    "url": "assets/mlb/headshots/552640.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/552640/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2558bcee7e2a02cd9076876b180c7e1c3487fb26191876d0d4ca721e580762d7"
  },
  "MLB-691723": {
    "url": "assets/mlb/headshots/691723.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691723/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0939cdc06e9e7fdc91591aff3b962fb4cd031e48bbd3aea8293e6ade901fb94a"
  },
  "MLB-677942": {
    "url": "assets/mlb/headshots/677942.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677942/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "583ad977cf5195d3500fffd01b7ae059485a83135d5a14eef67b42739471cde9"
  },
  "MLB-687637": {
    "url": "assets/mlb/headshots/687637.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687637/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cec4b1fcfc46c223739f6c68c7f8acd95b5132b40375f3263ab6265d9209e482"
  },
  "MLB-642585": {
    "url": "assets/mlb/headshots/642585.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642585/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2293033fbb527c726b262ddad9a02402eef22459111fcec769ea71302a6fba9f"
  },
  "MLB-664991": {
    "url": "assets/mlb/headshots/664991.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664991/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "dcca57b8262db365aa90047f929a13ccc2b2a2124ff5c18e9e9f70a5763893da"
  },
  "MLB-683002": {
    "url": "assets/mlb/headshots/683002.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683002/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "48a3653b1ac8fb98601ec84c0ab80d8353acf584fce8419ccf818d5d5e80a387"
  },
  "MLB-677008": {
    "url": "assets/mlb/headshots/677008.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677008/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b0d3f6792b3bf16da5cb44d6123cb54bc961937974cc75c8fd1a56657b5b0a61"
  },
  "MLB-702616": {
    "url": "assets/mlb/headshots/702616.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/702616/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ce0ec165ed5fdd7829cfb551a1aedf4b50f6953142b8ba2b4219f2c2e34c0b92"
  },
  "MLB-687952": {
    "url": "assets/mlb/headshots/687952.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687952/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fa26f5bd50ec508eb73b1d37b0d43e7abda0e3c11f19d905fcd4c055be530c33"
  },
  "MLB-676059": {
    "url": "assets/mlb/headshots/676059.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676059/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4b3d24c24e958902de6ab78166d8cc5e96e5600d0ff307680f218c4601d86745"
  },
  "MLB-669236": {
    "url": "assets/mlb/headshots/669236.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669236/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a2d6b37ffadcc4c74fef7ebb6226408ab5667728c445160ddcc2c122ed510d10"
  },
  "MLB-681297": {
    "url": "assets/mlb/headshots/681297.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681297/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9a9b72f072d40001bcacf2f1e33b471f142d632406c6569231fb23e6ff958fd7"
  },
  "MLB-677020": {
    "url": "assets/mlb/headshots/677020.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677020/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8c08403efa37f49af50f36a231a189e1506de9360950bb50b9844f4feeb02bbb"
  },
  "MLB-676480": {
    "url": "assets/mlb/headshots/676480.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676480/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9d1fd200f60407b3117506b46be8bc75e1b4aac8391863f1b3f103fcd27d4d95"
  },
  "MLB-669211": {
    "url": "assets/mlb/headshots/669211.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669211/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9a10088f6409eb16f4219e018d9ee99b2577eee7cdf22b3d88ffc5bb5145c9e6"
  },
  "MLB-680694": {
    "url": "assets/mlb/headshots/680694.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680694/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ad55687e750a4d26d1682d58761d6e2235757f62b4ef97c1c05036b40d5396e5"
  },
  "MLB-673357": {
    "url": "assets/mlb/headshots/673357.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/673357/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b2cbffeda5ecc93e77ab8497433abb94e5166d4ee2d69acd40712e6574c783d3"
  },
  "MLB-677956": {
    "url": "assets/mlb/headshots/677956.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677956/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4ac3afa0482371dcc73151648b222553a4b75ba4700845e51774f9ab95338903"
  },
  "MLB-624413": {
    "url": "assets/mlb/headshots/624413.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/624413/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "24d723faa294ca328d3b54108bae2a5dab65ad50f0290c2e521df13bc2b2b1a8"
  },
  "MLB-670329": {
    "url": "assets/mlb/headshots/670329.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670329/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "14a64865d7ff801d7b77c8967980cad36dbf128ac9b908a54f5e186396d090be"
  },
  "MLB-641933": {
    "url": "assets/mlb/headshots/641933.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641933/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "94b5800b241e378c20012dd36f2c161d786b4c6317999464a60a45b6e7b407e4"
  },
  "MLB-666974": {
    "url": "assets/mlb/headshots/666974.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666974/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d05347c84705d81197a4291e834e5e6b2fcb7c0f60f8848e32136cec0572a531"
  },
  "MLB-664854": {
    "url": "assets/mlb/headshots/664854.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664854/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "20e0b0b96e91555d10188016792d8e72ed0c9dff9b3ccee0e55d244bc5599c75"
  },
  "MLB-669432": {
    "url": "assets/mlb/headshots/669432.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669432/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "873838c128f372f4bd18e119717a69dead22b209809ec6edc978f98a32f5eefa"
  },
  "MLB-650968": {
    "url": "assets/mlb/headshots/650968.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/650968/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "224a210d834ba3ab7427fad6c47e6763752b4cd8d51b8670d0cb25972d8802c6"
  },
  "MLB-668939": {
    "url": "assets/mlb/headshots/668939.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668939/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ea3f99145913c600c5ddccb442bb934fcdc968e6b0dc233b72cfe09041a2b979"
  },
  "MLB-547973": {
    "url": "assets/mlb/headshots/547973.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/547973/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ff2cdea06f701fe8e149c4d696c9d0c0a69f0de8754bf1c3f66203c6535164e2"
  },
  "MLB-663624": {
    "url": "assets/mlb/headshots/663624.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663624/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1b44016e5eb2664d349e56f58a0d607f9c73afcc6d4850930369daa205edd2bf"
  },
  "MLB-665750": {
    "url": "assets/mlb/headshots/665750.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665750/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "602121e152483702f225415d741385a051cf711a917f829f6e427f9d3792515a"
  },
  "MLB-694212": {
    "url": "assets/mlb/headshots/694212.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694212/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "24b11afd7636a17c286b888f6b391ef28f6d78385420c9837452438dd8129de1"
  },
  "MLB-621107": {
    "url": "assets/mlb/headshots/621107.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621107/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d009a9715e8c571cd06076aa478fd6f752f5f86712349525246a5321a356789c"
  },
  "MLB-678882": {
    "url": "assets/mlb/headshots/678882.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678882/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a206715420b3f9da604c2867b22afa4a6ad0ebf369fd8e137bd459e65946b20a"
  },
  "MLB-669358": {
    "url": "assets/mlb/headshots/669358.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669358/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "061598f2d389c227bc328270adc93310faf31016e30fa923707abe0f100dc1ff"
  },
  "MLB-687941": {
    "url": "assets/mlb/headshots/687941.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687941/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "91d3a75888c8cdc7a43ad3d8a041d0249c5fce463b8990dd5bc8d856b6f85df2"
  },
  "MLB-678394": {
    "url": "assets/mlb/headshots/678394.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678394/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8aebc5db09b3856a2bcfbd36d1a90e88c7875adc391a1e377c7df0e9ba37160e"
  },
  "MLB-657136": {
    "url": "assets/mlb/headshots/657136.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/657136/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e3db12fd7a30e4e982eb209b9d51c7852d0101f234887c84f5b7d940ae49ba26"
  },
  "MLB-655316": {
    "url": "assets/mlb/headshots/655316.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/655316/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "74ac8ea8c089788bc2bbe644ffb915f8c007e19006fa9785dfd33fc72aa23a90"
  },
  "MLB-669062": {
    "url": "assets/mlb/headshots/669062.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669062/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2a207c6021c7a60b569eab254c6c0aa4565383fc07a56b93d2e8cc64e10380a6"
  },
  "MLB-702332": {
    "url": "assets/mlb/headshots/702332.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/702332/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7bad8c3f88f879a53c89afadffe865baa7dbc917c9a82b4e8e47a977667000a2"
  },
  "MLB-676979": {
    "url": "assets/mlb/headshots/676979.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676979/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2107582bf9842d2d2c54f2f226d2c33e5ee3d474c0062075e44a06fd9960f012"
  },
  "MLB-643396": {
    "url": "assets/mlb/headshots/643396.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/643396/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e9de088d0597b85b0f1df9fc1ee11a9d76eefc65ecd8b522a26a35ed62d62752"
  },
  "MLB-676477": {
    "url": "assets/mlb/headshots/676477.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676477/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "55ec75003503e89e7127eee3f74f3af7c64feb9a764562ec6d2c6de36618642c"
  },
  "MLB-669711": {
    "url": "assets/mlb/headshots/669711.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669711/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "afa75feab65fd33d32aef3275944727bc76b5f017b07698cd368d117dc850d64"
  },
  "MLB-687562": {
    "url": "assets/mlb/headshots/687562.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687562/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3b3734379616cd7475e7789fcd12b590fbf2fde021e52ac412823e99d05b99b1"
  },
  "MLB-680776": {
    "url": "assets/mlb/headshots/680776.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680776/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7d525341a8d3ed51194d3fa7711972057b06a5e790f3bc7c7835b2133618c2b4"
  },
  "MLB-642201": {
    "url": "assets/mlb/headshots/642201.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642201/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ede83574565c6804eee397a7d86d348720b64ca6cfb0391b4922b78ea321d77a"
  },
  "MLB-686580": {
    "url": "assets/mlb/headshots/686580.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686580/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "989ae5c11ec121c3c846d74e0972c9e5fc03722818efa9fb1d6e6de05f05c838"
  },
  "MLB-681987": {
    "url": "assets/mlb/headshots/681987.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681987/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "caf3dfdf5012a16fb016bd9b8ceaca5007db8ac707cba3dd532984b8d587ac76"
  },
  "MLB-678554": {
    "url": "assets/mlb/headshots/678554.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678554/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bf29f357192e703e9d2f50d9d16644513ca1b41fe7d00003dede5f2e9d58c982"
  },
  "MLB-801139": {
    "url": "assets/mlb/headshots/801139.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/801139/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ee1e80be088d597a37bc3aa4008e164abaa6b7cc795aebeaf648b9135e34efad"
  },
  "MLB-543243": {
    "url": "assets/mlb/headshots/543243.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/543243/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e9188cc3e5eae08ca4a4d3d98d4ec25d1b390bca5c8b6b4a95d000c92f1c2671"
  },
  "MLB-624133": {
    "url": "assets/mlb/headshots/624133.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/624133/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8a1e3f770de5ba0528cdfd67a675cab0b02df7e26bba02e55f37ad787ba053f1"
  },
  "MLB-596115": {
    "url": "assets/mlb/headshots/596115.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/596115/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "79c1d363db657cd7d26ac35593cc6d902f1edfc735f3339503e4d5a99de7bb2a"
  },
  "MLB-575929": {
    "url": "assets/mlb/headshots/575929.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/575929/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e0d3fe78ba94d8c773b6a5aa743e03f6fb394e91904f5f0b33279a3491d94595"
  },
  "MLB-677800": {
    "url": "assets/mlb/headshots/677800.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677800/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "34eaf88d84aef2c67f1b36d4e491259fa15865aa00ab85cba72ff8821ba47429"
  },
  "MLB-663330": {
    "url": "assets/mlb/headshots/663330.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663330/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e003fc93988ba4ab4af5748bd0e7ead7da3b1de9e4bbb409bcfabdc8bdef8d9e"
  },
  "MLB-683011": {
    "url": "assets/mlb/headshots/683011.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683011/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ab0ee60a27afdec230f20d120d2715c04c6eba0e8fa8a4a5fc7c1c9307971b37"
  },
  "MLB-645305": {
    "url": "assets/mlb/headshots/645305.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/645305/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0c5d1bffc0aa024ef809a5bf0934578b700c3722fa56c1b844f63be0e4fb91f8"
  },
  "MLB-700250": {
    "url": "assets/mlb/headshots/700250.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/700250/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "328d130563d99b6a34e78a0c7e51762e94ba7eedcaec1571502b7557b4e8f92b"
  },
  "MLB-686765": {
    "url": "assets/mlb/headshots/686765.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686765/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e3d49fa1cbac684c011b10b1ee7a44668a5fc586fbadbf53e50832424258f425"
  },
  "MLB-607074": {
    "url": "assets/mlb/headshots/607074.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/607074/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e01fd2dd2fff7b2aac8926f43a7e70a835c241499b9ae5a26ea68b27922a5d3d"
  },
  "MLB-681544": {
    "url": "assets/mlb/headshots/681544.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681544/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "18c228c716090cee73416c8fd73cdfac5e3ae4806c71accc7fee22647d74959e"
  },
  "MLB-693645": {
    "url": "assets/mlb/headshots/693645.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/693645/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "59f8c98073900e41a8f59eae90b2e714285e546ee03d475efb988a4d979ea9e5"
  },
  "MLB-641355": {
    "url": "assets/mlb/headshots/641355.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641355/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9c201da968e199f322a1c04172801368f5226a84a634c24bee4c984017d930cd"
  },
  "MLB-670280": {
    "url": "assets/mlb/headshots/670280.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670280/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "834f0dfee3cebdcc9c0a152e26cb2b95e0b33b7f1a8fcabc76dc942442372e73"
  },
  "MLB-669224": {
    "url": "assets/mlb/headshots/669224.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669224/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "edbb508e3b85bd0204c6eedb30e7535bd323ce88a3d7fba5b7f5ea141de98c72"
  },
  "MLB-806146": {
    "url": "assets/mlb/headshots/806146.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/806146/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3c3051550b3f7715bb5b9833fde2aeaa53d373750fd5488968f878e6aac112d5"
  },
  "MLB-543037": {
    "url": "assets/mlb/headshots/543037.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/543037/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "90c04937a28a76a4476d22fe24a3333868295b2a739b7803e23ca807f0ceeed6"
  },
  "MLB-665862": {
    "url": "assets/mlb/headshots/665862.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665862/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7f2c519a4328e4740ae7ef7de71900824785737383622771fe7ba8a25593cbb2"
  },
  "MLB-519317": {
    "url": "assets/mlb/headshots/519317.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/519317/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cb78e2ea610ed457721269df81c035cba1d824fc61c73f0f6779e1de4588b91a"
  },
  "MLB-671218": {
    "url": "assets/mlb/headshots/671218.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/671218/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0784e1e5f4bc06237a0b21674f97fd17b93cb59140f8bbd97595b53f1ac728cc"
  },
  "MLB-621112": {
    "url": "assets/mlb/headshots/621112.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621112/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9a0192cac655d2fd4562fbf87ebaa0c092034d3069f55623da49dabf6e920124"
  },
  "MLB-687396": {
    "url": "assets/mlb/headshots/687396.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687396/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ca54240cfc7982ec1658fdbb496b3c45c1aaf58e90ca25fcec5e3dec72ce39e7"
  },
  "MLB-676609": {
    "url": "assets/mlb/headshots/676609.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676609/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4d2227d791a268432233d7f067613fac26228ff17a70268c8b290ad16dcf5d49"
  },
  "MLB-671277": {
    "url": "assets/mlb/headshots/671277.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/671277/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ac76ad53bc0b3656e880f42e964a292fa04feec8a31492813c55357a1857e23c"
  },
  "MLB-670167": {
    "url": "assets/mlb/headshots/670167.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670167/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e9f941b053f6165a9651f9b114feef78fba6ad1d72a2cd2becfa90a03d07db41"
  },
  "MLB-608331": {
    "url": "assets/mlb/headshots/608331.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/608331/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "869ce5742f042020d9a14b342d195d35801d51aca3660372d6cea0d0233979e4"
  },
  "MLB-663757": {
    "url": "assets/mlb/headshots/663757.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663757/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0558a4219740aef23c00d6c6a177bb1021f13ae2f626544d89a746f519e88e45"
  },
  "MLB-701542": {
    "url": "assets/mlb/headshots/701542.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701542/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "82e7c33b610fce9ecdc60b3ad993a7508ab07f21e4c2b778861dd1c8a1afe06f"
  },
  "MLB-518585": {
    "url": "assets/mlb/headshots/518585.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/518585/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "626322127575199db9810a39db69bde6d5e2d32db3ed10d659a5e7c2cb07e590"
  },
  "MLB-502671": {
    "url": "assets/mlb/headshots/502671.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/502671/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "58e2c818b1797ae370a0af9d925041e0603457e0ab67c4cb8a5a8cf72a686534"
  },
  "MLB-641857": {
    "url": "assets/mlb/headshots/641857.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641857/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "dca32499b7d923c2ceffa5dfd78225b8e1be3859a60ea33d5b4816bcc28080fa"
  },
  "MLB-592155": {
    "url": "assets/mlb/headshots/592155.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/592155/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bd26ec0f0ec3f62f4a010c9937b7a9fa137200cf95900a6a6c0a46a1c0b3b9be"
  },
  "MLB-656775": {
    "url": "assets/mlb/headshots/656775.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656775/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4aab883f79d06c8c0b3f0109deaf1bbd542314cc05dba47c29c3fcb71b6c68e5"
  },
  "MLB-642232": {
    "url": "assets/mlb/headshots/642232.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642232/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fdf2f4642d6936c2380e2f52be5ca74a96599376ae9fddc8281a64331bd24026"
  },
  "MLB-682987": {
    "url": "assets/mlb/headshots/682987.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682987/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0eaf90029bf3fabd24593b0f4b74811ee95f4a68b82640f891e09747257a7b9c"
  },
  "MLB-810938": {
    "url": "assets/mlb/headshots/810938.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/810938/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "838fe8c980b2f97d859ae9ee86e963f07418b6b9af217e95ef52f86166ada89c"
  },
  "MLB-677960": {
    "url": "assets/mlb/headshots/677960.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677960/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4234edbd3a3e16b4d139f4ba6d80d91314bc5a970106b735d0e8bf3c1d489368"
  },
  "MLB-641329": {
    "url": "assets/mlb/headshots/641329.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641329/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2cdf3448626c6f1a9725af809bb3c0a782d14aa6c53eea50c0483da032e34d04"
  },
  "MLB-642547": {
    "url": "assets/mlb/headshots/642547.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642547/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3d7f66ab7d8564080c1d8337ec7c6f443ebc70ed052c37183e45676288760080"
  },
  "MLB-664076": {
    "url": "assets/mlb/headshots/664076.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664076/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b9dff579bd3b96c2be5fb81c6c148e8f3761bb93c406136aaf98b3e673c4e614"
  },
  "MLB-642121": {
    "url": "assets/mlb/headshots/642121.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642121/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a132a3fc7797b444ac3f169d02cb23ef8b6692b333ec5429176b31ffb6214c69"
  },
  "MLB-802415": {
    "url": "assets/mlb/headshots/802415.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/802415/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1168402398c3e23cea654839b6a0aca2b53c6f06eea1af663f6bc0e0b3479951"
  },
  "MLB-666158": {
    "url": "assets/mlb/headshots/666158.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666158/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c2dd4b120e0a5be1bbcc8ce820d14f1fc5f22df3750682cfd319beaf71eb1154"
  },
  "MLB-643377": {
    "url": "assets/mlb/headshots/643377.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/643377/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9b0cb1c9e13b6174e680164c1313bc80cd139d6ea2f44d33e9247b20d07b5f3a"
  },
  "MLB-666018": {
    "url": "assets/mlb/headshots/666018.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666018/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e40f31bb9ac2e0df64ad60709a40b1068a72642a65e10861d65c7c05e73bf233"
  },
  "MLB-670955": {
    "url": "assets/mlb/headshots/670955.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670955/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6299d7e738e04e77e0e13f37a0221c89fde284a3964cb30903a27968f2b355a2"
  },
  "MLB-691406": {
    "url": "assets/mlb/headshots/691406.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691406/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b62934ea7fe7f16071b5fea57a69c0a2dd2a3e4d91972aa11538fe5a7859cd36"
  },
  "MLB-656876": {
    "url": "assets/mlb/headshots/656876.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656876/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "94ca39dae568c37fb95a170219610058f7870fb0ba33ea1a33865907e4b6e972"
  },
  "MLB-663743": {
    "url": "assets/mlb/headshots/663743.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663743/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "55242e19e44fb89fc59e390af94fd7c3689dfb965a8bffce714bfa164386c3be"
  },
  "MLB-693855": {
    "url": "assets/mlb/headshots/693855.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/693855/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6ee4b9e3046258dc9d5a6e1d1d6ec8a8df30156f1504d29784c5855b0b4bc4af"
  },
  "MLB-607259": {
    "url": "assets/mlb/headshots/607259.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/607259/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bd367448db8f21f8774abdaef08f2b2cf7713280b13918d747d685811022188e"
  },
  "MLB-622761": {
    "url": "assets/mlb/headshots/622761.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/622761/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3bdf8693b89a3cd6f00171383909fa64158ddb64a6303373dacd2ea6c0222ec0"
  },
  "MLB-668723": {
    "url": "assets/mlb/headshots/668723.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668723/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c6e1988a0cfd9b07d007ed24622c15a479209f5ead96322e90da2d2fa86abd21"
  },
  "MLB-670764": {
    "url": "assets/mlb/headshots/670764.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670764/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ab91c54ecebf034f01526a06385f90139d897bc3ced2d85e9fd36e27d6c981ee"
  },
  "MLB-689414": {
    "url": "assets/mlb/headshots/689414.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/689414/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c3b870977ac92602136e05780ee0fda44c8bdee65d086e2930e90aa0c248c369"
  },
  "MLB-676356": {
    "url": "assets/mlb/headshots/676356.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676356/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0594214552c0c4b49208cc7697dfd3e461cb2a3f295dc7b78e43c4ffd12ab6b2"
  },
  "MLB-683748": {
    "url": "assets/mlb/headshots/683748.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683748/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a4197ddfa26a95c096a57f060264abb1e6cfe56c04ee6f03e6d4afe1bfca5fc6"
  },
  "MLB-687330": {
    "url": "assets/mlb/headshots/687330.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687330/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a4bebc8ea07790e25af3b1fdcc83d117308d23c2d80d90aebdff2f6ac62960ed"
  },
  "MLB-680700": {
    "url": "assets/mlb/headshots/680700.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680700/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "95809c06e2e87529f39c95ed9f0fa8bb0e0246bee8b3ac6bb9be5f1ad922c634"
  },
  "MLB-669330": {
    "url": "assets/mlb/headshots/669330.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669330/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b9378c69e068474f782ddcfb3c977fc0aeeba73f67bb20713c41f810f3f59a29"
  },
  "MLB-571927": {
    "url": "assets/mlb/headshots/571927.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/571927/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5cd522f7de74203369c59611f2bcfad9aa80c56607cf9261225e8f2798d74337"
  },
  "MLB-650490": {
    "url": "assets/mlb/headshots/650490.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/650490/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "941b29077af7fd0761b35cc63ae37897b34793a1d3a9becd1f95c8902c445760"
  },
  "MLB-680755": {
    "url": "assets/mlb/headshots/680755.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680755/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "acca4aeb0e89d4a438d855397540ff47f85d6a0faa25de2b0d947d2369d86184"
  },
  "MLB-672386": {
    "url": "assets/mlb/headshots/672386.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672386/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a201abb82b54237fd2226b906e982cbdb398b86a0649234cde1a6826ad223af9"
  },
  "MLB-686752": {
    "url": "assets/mlb/headshots/686752.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686752/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7e79f58e688ee58cbe4a82ed7ff8f9a871d84f8ac339615d30cac21ebd2fc5b7"
  },
  "MLB-665926": {
    "url": "assets/mlb/headshots/665926.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665926/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "96d6c328517c2d98be4c8874e308f1b02581d0eec9a539da6bfa87fcc4d4c34f"
  },
  "MLB-678218": {
    "url": "assets/mlb/headshots/678218.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678218/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a36066dd8c1eb7e7fee82d912651c909be35a0707d99390bb4e7e36357ab2587"
  },
  "MLB-670102": {
    "url": "assets/mlb/headshots/670102.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670102/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f837bf42c97b197b5574326deb33ef8838018df22354636de0fba06112fcbc82"
  },
  "MLB-703520": {
    "url": "assets/mlb/headshots/703520.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/703520/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f752abd20a3bba3da666bdb397eb3b064370542460866283669e3801629048b0"
  },
  "MLB-689149": {
    "url": "assets/mlb/headshots/689149.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/689149/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "87084232de40770e87509d52290bae6978422c9afe56626c96721b580e9029aa"
  },
  "MLB-807727": {
    "url": "assets/mlb/headshots/807727.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/807727/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cb8e20f47d25a2aed69844fc8bf779f27ccc08fc29ac5fba97ff9d1fe297739f"
  },
  "MLB-680718": {
    "url": "assets/mlb/headshots/680718.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680718/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c34fe2901018a9ac4782aeace989f6e33ed816b06615afb021b7ee0fee56cfec"
  },
  "MLB-695445": {
    "url": "assets/mlb/headshots/695445.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695445/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "56947af128b563571f8d2373cd094637f2f21d6b9fd8e6906df9c54a84b7b9ce"
  },
  "MLB-543807": {
    "url": "assets/mlb/headshots/543807.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/543807/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b31a3144cca0a80d04be28f5c561f7da1ce56e9ac7a1e881b434faef4e99111b"
  },
  "MLB-592791": {
    "url": "assets/mlb/headshots/592791.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/592791/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b097cc95e60092ac44c7f1b0c9aff721bb9fa7667385c4a17ae8dfbbadb4f5d0"
  },
  "MLB-804619": {
    "url": "assets/mlb/headshots/804619.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/804619/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "638c80c5886c260d1c9aa6f27809b1a6a3e4e439019ca8b3f9afe0ab8ba2163a"
  },
  "MLB-676454": {
    "url": "assets/mlb/headshots/676454.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676454/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7245d9dc8573232e0a2f638b355ec442a2bf073b44d4da0eae9c2058e4867aa2"
  },
  "MLB-667755": {
    "url": "assets/mlb/headshots/667755.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/667755/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "471459dd477c69ddc850c2ccae6ab1190960d67025cf077400c065060538f415"
  },
  "MLB-621244": {
    "url": "assets/mlb/headshots/621244.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621244/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "aefa8e27ec401fb8ee0263fcd9f09518b6ad2e1388ef5444359f3faa3cab7fd6"
  },
  "MLB-672960": {
    "url": "assets/mlb/headshots/672960.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672960/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b4033fd361d2832ef99d0a6cda25683525f9a860b6a29cb204d1d0b4cbd12f90"
  },
  "MLB-663893": {
    "url": "assets/mlb/headshots/663893.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663893/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3818bd40d5b47d7cb6f8707f5bb5b22062b072233f301f6bd6d1efb0a36fcd0c"
  },
  "MLB-676914": {
    "url": "assets/mlb/headshots/676914.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676914/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ad38706b68ddcf10f07fe29c0e6c730e11ea23db16cf3e8327e73353623c171b"
  },
  "MLB-686973": {
    "url": "assets/mlb/headshots/686973.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686973/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "986e4e33b9a2785779fd22712a07414920c8124930f60292239164c814cb2bcc"
  },
  "MLB-649966": {
    "url": "assets/mlb/headshots/649966.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/649966/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cad2ef3979796151a61f37014aecf079bc407c73370a0a1355c402f9e6cd5e99"
  },
  "MLB-676391": {
    "url": "assets/mlb/headshots/676391.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676391/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d41647c52c347848db98dfa2939f2ff8f36c55a974158b084fb86d71a1e86a34"
  },
  "MLB-656302": {
    "url": "assets/mlb/headshots/656302.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656302/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9beef366f4603282b24aadb102ad82fd20d530ab68d417eda7bfbf85414f28e4"
  },
  "MLB-689254": {
    "url": "assets/mlb/headshots/689254.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/689254/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3246bf3d13a68f25a829c0c125a5d3dc933be5ca4daf3e3a965ca9ab96c13901"
  },
  "MLB-664702": {
    "url": "assets/mlb/headshots/664702.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664702/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c77c5a25a203000898ac5c9a4e000f94b0515620a773d2f54fcc43cf6cbe59c2"
  },
  "MLB-664770": {
    "url": "assets/mlb/headshots/664770.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664770/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "48ec6a91486cbca097e9bc578107029fcdc2ec6c68ad772939cc9ac9e1d90ea6"
  },
  "MLB-623149": {
    "url": "assets/mlb/headshots/623149.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/623149/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d20188f9face2157aea2c5640e044b7c450f26468e4b205671c11b0351992c79"
  },
  "MLB-669456": {
    "url": "assets/mlb/headshots/669456.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669456/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "07b7923df4a5cf0e5c35f4bdac5f2da727401e9aed37d86b735428643067e3cb"
  },
  "MLB-693686": {
    "url": "assets/mlb/headshots/693686.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/693686/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e707750a711bfcd845690115b602a914d2ae287fdf0f02463b29daaa2a4fe1d7"
  },
  "MLB-643511": {
    "url": "assets/mlb/headshots/643511.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/643511/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cef273eedee9c029e00735712b3de7ab7de7d3277307d83c8a9df4404deda183"
  },
  "MLB-669701": {
    "url": "assets/mlb/headshots/669701.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669701/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7fb1224df87b6d99716cc28f32b0ba1100b4ebae6b31fa133ab6b7f010578d12"
  },
  "MLB-665489": {
    "url": "assets/mlb/headshots/665489.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665489/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "07bcd3d3e80128ebeb65274ce20545515e4ea957407eedd83b81f9dd6fafde41"
  },
  "MLB-643217": {
    "url": "assets/mlb/headshots/643217.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/643217/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fbb014c2493fcb6f77a37281560f29d11ee24b49c703bfa7edfa360a06d211cf"
  },
  "MLB-815873": {
    "url": "assets/mlb/headshots/815873.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/815873/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "82ad3c14ba4a888c4bca7c8eeebf528ac43957b6de6a4cc6815a9ca3f429a0be"
  },
  "MLB-571578": {
    "url": "assets/mlb/headshots/571578.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/571578/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "67dd7f7359bba5b0012c839fd175832f10e6ca9f7f3b73837c4c807779987560"
  },
  "MLB-453286": {
    "url": "assets/mlb/headshots/453286.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/453286/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f46d2da2a5f7e7044ba36a6b30c4b72014cc1d9ba86b45fcf1bf959f61168226"
  },
  "MLB-663542": {
    "url": "assets/mlb/headshots/663542.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663542/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c6d6ce7a74544833bbeba951825dba517fd848833db64dbced3364372b784719"
  },
  "MLB-641743": {
    "url": "assets/mlb/headshots/641743.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641743/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d348e172832c6010f4d0413264f4990bd60c52be7b63112190acb60b2f8daebe"
  },
  "MLB-686668": {
    "url": "assets/mlb/headshots/686668.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686668/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "540e18436bb406976002b8247460dc8a15a4943a45906f24d44c5ef79b6dd766"
  },
  "MLB-607200": {
    "url": "assets/mlb/headshots/607200.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/607200/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7ddc6c6fe116903c0d51fd112f68a108e07c6214db007055dbf5bd1a5a65ef34"
  },
  "MLB-681460": {
    "url": "assets/mlb/headshots/681460.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681460/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a770e02954a738b86268b6164ff6e2042ecb85b0560d9a040a445c2f21f95c2c"
  },
  "MLB-696146": {
    "url": "assets/mlb/headshots/696146.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/696146/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "41096549498864fd017d9eb2784d6e08faca5ad0ccbcdeacf9ba35ce9f306cb0"
  },
  "MLB-805367": {
    "url": "assets/mlb/headshots/805367.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805367/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fdce5fbf2b9abf153454dd3741a04dc37719fc7928466c2246bf50fb9642cdf6"
  },
  "MLB-702056": {
    "url": "assets/mlb/headshots/702056.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/702056/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ce625d4a7645037cbedb7e00a71c7d806cbe975e18f2ae149c256790d7aa39e7"
  },
  "MLB-695657": {
    "url": "assets/mlb/headshots/695657.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695657/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "72b38ef740a5cdba3096d90762cd4b65ab4880380fa532ab54001ad88ec5d51e"
  },
  "MLB-673929": {
    "url": "assets/mlb/headshots/673929.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/673929/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "46986673a80540bd886314905e23bd3074b9da7cce0914575cef7b4b973e645f"
  },
  "MLB-663436": {
    "url": "assets/mlb/headshots/663436.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663436/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9d4589bfdfdb2dc053080b72fad3e6899095205d87b2587576751e11b610f69c"
  },
  "MLB-678246": {
    "url": "assets/mlb/headshots/678246.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678246/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "47bf670bac8815dabcb77b8fea5eec3a2916d70024fb0d77d7e7957c08e29223"
  },
  "MLB-668670": {
    "url": "assets/mlb/headshots/668670.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668670/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "eb946d39c8be379a6be0522a11dcbe6280213b8acca64d4d75da69bb968051d8"
  },
  "MLB-691019": {
    "url": "assets/mlb/headshots/691019.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691019/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c34a3b77ee7285269ba4551b83095c35393c4d384e81c86f2daaee91bf6b9c37"
  },
  "MLB-695731": {
    "url": "assets/mlb/headshots/695731.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695731/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "054401dfb9f58c11eb01b72b920db4a49f63b251add27f9063ff534b99527c55"
  },
  "MLB-682668": {
    "url": "assets/mlb/headshots/682668.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682668/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a7e96cbadbd4783bb4567e930e8065c018d54b1db5c2acbc5e07d150171f11b3"
  },
  "MLB-678024": {
    "url": "assets/mlb/headshots/678024.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678024/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cbd7948edcc7d44737aa7389d809215434104f29895be0ce41b085b5fb296127"
  },
  "MLB-689818": {
    "url": "assets/mlb/headshots/689818.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/689818/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "10fe8361ae44ab358bbad728f920bb48ab53bfafea34e1f4478f471bd79de39f"
  },
  "MLB-545341": {
    "url": "assets/mlb/headshots/545341.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/545341/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "32532deae0276b16cd722beb012ea118d7c61d900db8ccaf5be8011782a51241"
  },
  "MLB-702273": {
    "url": "assets/mlb/headshots/702273.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/702273/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "86a2cffe41b64b89513eb88324ee52d9e88aa610c6d0d64e295e75b534c9b636"
  },
  "MLB-680732": {
    "url": "assets/mlb/headshots/680732.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680732/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b88d8bf37ea29fd37806e301817374db97d3919d6669ec9bade07d74bf94a33c"
  },
  "MLB-656794": {
    "url": "assets/mlb/headshots/656794.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656794/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0b0a92b943874560f7428c4ea2067c0571afc137a83575cb7f42ed61c239419e"
  },
  "MLB-691799": {
    "url": "assets/mlb/headshots/691799.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691799/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0cef628ca98f20a3fd91a434ea9306e4c04932d40e4ea0cfee66a3218983515b"
  },
  "MLB-502054": {
    "url": "assets/mlb/headshots/502054.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/502054/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f939bf3661a62aef182fb0864ab9a031e7afbe49a3f1e0162163b59074704131"
  },
  "MLB-808959": {
    "url": "assets/mlb/headshots/808959.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/808959/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cbfefce161f7a756409c442b1ce1d824498794367c6074777c1ea6daabbd4b7b"
  },
  "MLB-699823": {
    "url": "assets/mlb/headshots/699823.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/699823/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "202fdd090ee49fd0ec8f87da536ab7950bcb01f5209ef495a80b0a4fc12f68ac"
  },
  "MLB-663855": {
    "url": "assets/mlb/headshots/663855.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663855/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d4aaa672ce3647e8fd39eb1c9f2d65f22b6566cf6e9f66ddd9f3da8109deb75c"
  },
  "MLB-694197": {
    "url": "assets/mlb/headshots/694197.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694197/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4f506590dec1331b47f84a5ed66a356d7b5b0aa5f6ae462b39f44fb28a5ed5e5"
  },
  "MLB-595978": {
    "url": "assets/mlb/headshots/595978.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/595978/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fc9cacf7050cedf763de14fa1ae085af7fa7ec9f10ad05bf231fe632ffa7531c"
  },
  "MLB-682982": {
    "url": "assets/mlb/headshots/682982.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682982/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a578603d85ada60c700ac4935d52cff4e5cad525d7ed3abcdbae4b37a6049421"
  },
  "MLB-681807": {
    "url": "assets/mlb/headshots/681807.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681807/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "563b1dd8e445691e3f5e6edc1b4d73d9a00b7ba79bb4bb4ea4d15d1e0b9e8071"
  },
  "MLB-682657": {
    "url": "assets/mlb/headshots/682657.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682657/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3e37dee414bdfd832322fceab8277bb3bccba3b3224736df5a1b6b00bba695e6"
  },
  "MLB-803011": {
    "url": "assets/mlb/headshots/803011.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/803011/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "20f9e2c8fa8f6e79d722c7180ae250edda8640ad00c797f5c1128e5316bc5b5f"
  },
  "MLB-681870": {
    "url": "assets/mlb/headshots/681870.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681870/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bd4e343c0c44d9dbdae8ae546eb1b343ccf2b5417b0fdfab13ec8631d82c5aab"
  },
  "MLB-666176": {
    "url": "assets/mlb/headshots/666176.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666176/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "04520283017e7318709154e9d2c07b65e9ef19a0ca02787f3c1d8679bbfe6477"
  },
  "MLB-671976": {
    "url": "assets/mlb/headshots/671976.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/671976/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e2d8cda060c5a36fe72471d7b70d3513a52c47d45e839fceb091ff476479b2ab"
  },
  "MLB-671922": {
    "url": "assets/mlb/headshots/671922.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/671922/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9577d3bc8251c5459c293f382be29d01530ad70b6e2bf07a604e936da11fac8a"
  },
  "MLB-677587": {
    "url": "assets/mlb/headshots/677587.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677587/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8cdc8188765f4dd270cc4fc5152b8fcb972f337f8215b1cfa1722a99868720a5"
  },
  "MLB-683769": {
    "url": "assets/mlb/headshots/683769.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683769/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5b5765adf9ea55871d79526f526cb0c1a6b266e9762500db691e4f279fe0a47a"
  },
  "MLB-668909": {
    "url": "assets/mlb/headshots/668909.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668909/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b0137f8448727f974ec213a3278af29eeafa920a5069f0653f141ed1ff931b43"
  },
  "MLB-800048": {
    "url": "assets/mlb/headshots/800048.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/800048/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9d808f5ee6c472308bddfd92dc7fb8b9e987dc02e28da73c9b860549b6dc2e02"
  },
  "MLB-800050": {
    "url": "assets/mlb/headshots/800050.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/800050/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "aecb64aea8240c92c9d5093b5d71a897804b7dfb7f0af589be8877dd54a0d505"
  },
  "MLB-608070": {
    "url": "assets/mlb/headshots/608070.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/608070/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "113101e4548284a22b505c7a63915230e6d82a35cd27467f0d23aae41737ff46"
  },
  "MLB-676282": {
    "url": "assets/mlb/headshots/676282.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676282/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "76a67d5ac3844fe826287fbeb97542a68d864c8d7a2c8e429d7b915eccef63fb"
  },
  "MLB-670036": {
    "url": "assets/mlb/headshots/670036.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670036/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2b2d12452ade92722242854fb3300dc382e03cb7f2ccab54a775f6a6b1d10ab8"
  },
  "MLB-677944": {
    "url": "assets/mlb/headshots/677944.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677944/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3c727f7abf946429440c4e12c3dbd9683191383e7b2a0483f1f9f60ffb2acfb3"
  },
  "MLB-542888": {
    "url": "assets/mlb/headshots/542888.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/542888/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6b23ad03708b51339ddf527fbb4dba4cdbb125eb5f4d70bc095c958ec898edf4"
  },
  "MLB-690984": {
    "url": "assets/mlb/headshots/690984.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/690984/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0f2290c6ca06c2249a06b4d6ee57c0078afac03458dbaf430613bfafbec16634"
  },
  "MLB-676440": {
    "url": "assets/mlb/headshots/676440.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676440/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5d3635d3b270280b8e2945194c770d2cba0938a893878174d089ecaf64491d58"
  },
  "MLB-682120": {
    "url": "assets/mlb/headshots/682120.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682120/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "77e8b9d2e385a2f9bd42a0590acd4ee3617f7d6f282c8264b47448f1bb6fa4cf"
  },
  "MLB-656492": {
    "url": "assets/mlb/headshots/656492.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656492/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e4e559c2dd13811596083c62b04443c1ee5a9ee4e92a7d47b51ad83d5d636f1d"
  },
  "MLB-672275": {
    "url": "assets/mlb/headshots/672275.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672275/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "17efd26496e97d342bab45ce959fe41cfbe8d423603da0230c4f1f126f39ba01"
  },
  "MLB-689225": {
    "url": "assets/mlb/headshots/689225.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/689225/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "24e608ddc3104721b2ea69bfc5611a6b22202f1d631265015eddd5c0e80929ff"
  },
  "MLB-814430": {
    "url": "assets/mlb/headshots/814430.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/814430/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4cf60e02d7e43b1df81738300457630c5443c481bad5a335fdbbd811b46afa0f"
  },
  "MLB-680757": {
    "url": "assets/mlb/headshots/680757.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680757/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8c2ba47abbc7c7164daa9f114cb728169675c5a48ba12aba51e1705202e230ec"
  },
  "MLB-663993": {
    "url": "assets/mlb/headshots/663993.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663993/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "99748b709e439c3e4dba427560a596e9c5ed08db38f6d295c9f2f59c62387095"
  },
  "MLB-805427": {
    "url": "assets/mlb/headshots/805427.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805427/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ab8ccdf9ad883628eef2c32a369c43eab473e2452ec505a2aa6c8e005b7530a2"
  },
  "MLB-701162": {
    "url": "assets/mlb/headshots/701162.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701162/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "01d922280b312d02222c3e123027735009fde06f0c131ae01337cf1fae398b45"
  },
  "MLB-680664": {
    "url": "assets/mlb/headshots/680664.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680664/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ffe4eac3b763e555cf2a5974459676ce4c0f5fdcad4953ff39f0e85545ce1bbf"
  },
  "MLB-623454": {
    "url": "assets/mlb/headshots/623454.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/623454/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "18b208e7fc6f02a599e9d14cbd95984bbdcd34304bdd0ec9a4e45f4d2f873a84"
  },
  "MLB-683953": {
    "url": "assets/mlb/headshots/683953.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683953/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "87db0a058ba08548eba8f017dcced4c905ffb75f6895d1929fe35e4ce2a7e7e3"
  },
  "MLB-690993": {
    "url": "assets/mlb/headshots/690993.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/690993/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "effab057357c7025fdd6b1c4ad1e3926063e855adf01f2cb9d2f4d8d39c6e08c"
  },
  "MLB-690291": {
    "url": "assets/mlb/headshots/690291.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/690291/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d9a7364b4292a0de1296b7ec1d0dddf51732a2037864a3aeae5bd098e00e51c8"
  },
  "MLB-664285": {
    "url": "assets/mlb/headshots/664285.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664285/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "872bf0a61c1587b9eba4baccbac21ffcfa27a4110aa2ef07f39897b3ff5be943"
  },
  "MLB-621097": {
    "url": "assets/mlb/headshots/621097.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621097/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f4f8acf8aa15c03a526648719f4d90f6e1f0a1124d87478731d42b03c502f4ca"
  },
  "MLB-650402": {
    "url": "assets/mlb/headshots/650402.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/650402/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8da87ae02b6b98f3c7d2d72c27106dfc76b523448d881c905db2f4f317249e3a"
  },
  "MLB-701678": {
    "url": "assets/mlb/headshots/701678.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701678/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "529f532db7e7708d2e7232365876b7b823b698ec5237864bd0d44c857633ceeb"
  },
  "MLB-693307": {
    "url": "assets/mlb/headshots/693307.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/693307/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2b832a637b00204275e40919d97c88b4099e646c635ab4664b10fca85c6be1d0"
  },
  "MLB-445276": {
    "url": "assets/mlb/headshots/445276.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/445276/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b7e6960e659179a76d684d10e545b01f361891d53e7a707286c599b0bf26a917"
  },
  "MLB-695549": {
    "url": "assets/mlb/headshots/695549.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695549/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "db050bb0fcce8b19af8d44e3b632075493286fbe041ddb4aa38812cf2bb15a51"
  },
  "MLB-807726": {
    "url": "assets/mlb/headshots/807726.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/807726/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "741ced32fd2bda4ba8dac3d486ef3ff5bfcd0ab78b2d74276537055849008e5f"
  },
  "MLB-656427": {
    "url": "assets/mlb/headshots/656427.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656427/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8369db057bd70017aa8168d98d540a32cf049bbf8121edf22e81b3f308cafc0d"
  },
  "MLB-672456": {
    "url": "assets/mlb/headshots/672456.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672456/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c03039b57b32535c3b044c7928ec7258df3a2e9e80d459517a425a9a52b91267"
  },
  "MLB-681481": {
    "url": "assets/mlb/headshots/681481.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681481/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ca764eeac402b2942d651319dc779608f2204a3e95116dc8bd5d44e463d065ed"
  },
  "MLB-805808": {
    "url": "assets/mlb/headshots/805808.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805808/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8e5e37b8748c23e3e730dedb155304e4c16cdecdf2f7f2005e7fa767711207be"
  },
  "MLB-640448": {
    "url": "assets/mlb/headshots/640448.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/640448/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "333bc4028474d712dd2ef655e5de18fe3d6a332adf94a346686cebb3ba666e4e"
  },
  "MLB-595879": {
    "url": "assets/mlb/headshots/595879.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/595879/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5f8ca960164c669eea22662a5d5d50e04452379e84cafbbe7cc19ea3e6f74786"
  },
  "MLB-681857": {
    "url": "assets/mlb/headshots/681857.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681857/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b009539cfb83b62ba10e52d381b98ab432f48e21807027cfe6430f9c72b74cbe"
  },
  "MLB-689981": {
    "url": "assets/mlb/headshots/689981.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/689981/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1ab12d94b672328177a584af53114089410027557def545da96ad4da910a420f"
  },
  "MLB-679529": {
    "url": "assets/mlb/headshots/679529.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/679529/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "45a20e8db0b1a4bb04728a0c7372d8a8dd32c81810c232d469099e1b25d0d021"
  },
  "MLB-434378": {
    "url": "assets/mlb/headshots/434378.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/434378/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2cb072151a40728e47f7a76b77e686bbe2046399d3cbf906a4acfd422e172966"
  },
  "MLB-663837": {
    "url": "assets/mlb/headshots/663837.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663837/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fb5ae0d8230e21e9fca4cfa8bf6a0bc29eb4746b05d5206895ce51db455ba1dd"
  },
  "MLB-675512": {
    "url": "assets/mlb/headshots/675512.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/675512/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d0909672b90d3cd295b46fbd85a2fe92b58401aebc852e636ff5c652a3a309e0"
  },
  "MLB-663947": {
    "url": "assets/mlb/headshots/663947.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663947/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2d804c113218793765fe4badc5aa537224d2ebd4229342b761ebd31454b0c17c"
  },
  "MLB-641755": {
    "url": "assets/mlb/headshots/641755.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641755/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7be7c112eab947f189e515250fb443edfacf7ccf2d805a784693d79ecc960eab"
  },
  "MLB-672761": {
    "url": "assets/mlb/headshots/672761.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672761/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "97311cc0e5f60d13a22eb644cdb371d123aaff4a69cb827fc3a1a78c00ad3fd3"
  },
  "MLB-676684": {
    "url": "assets/mlb/headshots/676684.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676684/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9de0bec4e9506485ece659086cea9fd9a7961bd38a2cfdc47420531c845627b3"
  },
  "MLB-682985": {
    "url": "assets/mlb/headshots/682985.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682985/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "077df0a95b6535f36fad64522d7e7b012bdfab52a8648775f1d85c9dd7870ed8"
  },
  "MLB-703601": {
    "url": "assets/mlb/headshots/703601.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/703601/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e7124d18ce40e09c8fa90d89fb82a3dafb5ac0200a403035ef22321d1d248eeb"
  },
  "MLB-656716": {
    "url": "assets/mlb/headshots/656716.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656716/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cbfdcaa5890600edc4ccbd7176a147df29aedde8793cc1a14bc47304eed46020"
  },
  "MLB-666142": {
    "url": "assets/mlb/headshots/666142.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666142/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8f13ae4ea1f260d750ba1855f518716e3eea970ebe67cbf8dd56f3a28eb93e96"
  },
  "MLB-680744": {
    "url": "assets/mlb/headshots/680744.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680744/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ad6755e0555f344b7e1fb8e36adf514c573ac67f2f831bda5af21b12b6963b12"
  },
  "MLB-656638": {
    "url": "assets/mlb/headshots/656638.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656638/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e516b4a5f122ffa378172588195e3d09e2fc4007302f5c9ce31456372ef44bf0"
  },
  "MLB-663738": {
    "url": "assets/mlb/headshots/663738.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663738/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0e6f8aeba243c214effad72e643c7f780024499e4c7779562292efe649b4e8b0"
  },
  "MLB-543238": {
    "url": "assets/mlb/headshots/543238.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/543238/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b18836d2d079528e5a9fa1fff391aaf2aec3a5aee61d3d72c02e8e6bc4a3ac9d"
  },
  "MLB-700242": {
    "url": "assets/mlb/headshots/700242.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/700242/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "59160928e0349e78bf1a11d3b16f84e5351488221470bcfd0441420922036617"
  },
  "MLB-671162": {
    "url": "assets/mlb/headshots/671162.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/671162/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f9adcc42263d14c6a66709e24c33de2a30f7d2cbcc1cffcb06c1db9e274ac347"
  },
  "MLB-695506": {
    "url": "assets/mlb/headshots/695506.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695506/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1183c60ff920d0398d99f7741ef1b731844d59aeb79bcf23846d2fb975eefbf1"
  },
  "MLB-663704": {
    "url": "assets/mlb/headshots/663704.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663704/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "180b6c2bed0f65a69f7f1f7d51665fa9338a6fe2bb63e3030c9d2575ad7b146a"
  },
  "MLB-686555": {
    "url": "assets/mlb/headshots/686555.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686555/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "01b9e78a7fb95193f801eee842e6ea5feec4d872c8dc5ec2ab0e006b44484ce3"
  },
  "MLB-677951": {
    "url": "assets/mlb/headshots/677951.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677951/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "846d26971023b2476dc55fa2f1fce91ed2d691670c8b679d78624af916c2e301"
  },
  "MLB-668942": {
    "url": "assets/mlb/headshots/668942.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668942/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d57cb771a7c12244c9aac70cc9cb54820306463da5306b2b4e07690ca5ca2fb0"
  },
  "MLB-608032": {
    "url": "assets/mlb/headshots/608032.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/608032/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0f84b8287c949cd913eb18562115295f50b56637c407e85d9abaa913604085c6"
  },
  "MLB-663697": {
    "url": "assets/mlb/headshots/663697.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663697/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fe3ba0961e152ef4556714fb4bd6ed6e0c82b2ccb6f8934998497ff479155c07"
  },
  "MLB-668674": {
    "url": "assets/mlb/headshots/668674.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668674/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "85047337062d19bef7aaee32c8919ba05ab45175d4bf797e910f545ff9e17d56"
  },
  "MLB-670231": {
    "url": "assets/mlb/headshots/670231.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670231/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6e0b37488008ee8f6993b3fc9bc5ec3e75148c89b76f0fa20715eeea6e43981b"
  },
  "MLB-679883": {
    "url": "assets/mlb/headshots/679883.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/679883/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "57a2031181551d08629ef7e67e39d8b806ed26e991a263919a7c993b126fecc8"
  },
  "MLB-695600": {
    "url": "assets/mlb/headshots/695600.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695600/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ad413bba129c59d63582b387b91affa7b4bcd95a79c66c6e81ed9fa30ba0f5d0"
  },
  "MLB-672580": {
    "url": "assets/mlb/headshots/672580.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672580/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "aed4f51fdf96ab6e2fb0cbd87d6b8a716d22d607f0787eb78e7c309756fa8e3b"
  },
  "MLB-571912": {
    "url": "assets/mlb/headshots/571912.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/571912/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "072409790fc5ba6fcb80535481493c3f34f70ab788093e6342efe10349e178fc"
  },
  "MLB-702070": {
    "url": "assets/mlb/headshots/702070.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/702070/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d354b705f5a32b28e3183952b5ce9831d6e4447b67d34a2418edc84caa5062f5"
  },
  "MLB-621016": {
    "url": "assets/mlb/headshots/621016.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621016/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5e1fa775ce814457cc51a13dd30e3d66020cec0311b7d61ee8fd066da3a56bba"
  },
  "MLB-683090": {
    "url": "assets/mlb/headshots/683090.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683090/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "223cd38412d3bf3e579cecdd9be3756fd5b288ddfa4c3de07716a8680fb38416"
  },
  "MLB-608379": {
    "url": "assets/mlb/headshots/608379.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/608379/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2207cc715e58e8a9f10c0441098ff8fa93284d4a86428057724b6b135d82ca22"
  },
  "MLB-683232": {
    "url": "assets/mlb/headshots/683232.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683232/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "880a057d4f26fdfe58e24fa57c39df4fd7278ac75c307f71bf1f3048bbd53061"
  },
  "MLB-664728": {
    "url": "assets/mlb/headshots/664728.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664728/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c3316a8cdd7d8b3113d296cda961844a3709768314d9de0df8d7b0448d9dc95e"
  },
  "MLB-663878": {
    "url": "assets/mlb/headshots/663878.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663878/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9b2302c581ac40bc20fb66000d19ddee07f7a1df188535972780cc2eb19c8089"
  },
  "MLB-676510": {
    "url": "assets/mlb/headshots/676510.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676510/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3643f8d50e64bf64b97dd5d16c0fdd9756dd74feeb7f110635e45b362dc36e08"
  },
  "MLB-677976": {
    "url": "assets/mlb/headshots/677976.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677976/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "259756b71f8af7fe7fe52aa50bdbd7919ed9787501a403a8588681da195ab8f5"
  },
  "MLB-521692": {
    "url": "assets/mlb/headshots/521692.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/521692/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "21f24890ec808bd7a9834c953a2745a37db45a97be3b4b7ea320e33339fb03ef"
  },
  "MLB-663568": {
    "url": "assets/mlb/headshots/663568.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663568/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "85a0286cf90b13d4d295d48d2a222e93539d3ee0a833929de2a1c73a69788c16"
  },
  "MLB-702352": {
    "url": "assets/mlb/headshots/702352.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/702352/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "168c6fe9acfe6f622a47b1f5752202c1394772ffd6199a1d3c36c4049cdd6c19"
  },
  "MLB-607625": {
    "url": "assets/mlb/headshots/607625.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/607625/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cc9f683ad7594742c12e4e6816557f8d62eaf87ee0e649a022fd2a76144cf0c6"
  },
  "MLB-686469": {
    "url": "assets/mlb/headshots/686469.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686469/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0ea03b7f8da9735cf8f48102dd5d64000255e4c19f310a8aad3f0f7bede7bb3f"
  },
  "MLB-621345": {
    "url": "assets/mlb/headshots/621345.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621345/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "de93aa3d752912344b14f85f4b02ef4fabdeeff90b5aa4a88594d6b32ddebfd0"
  },
  "MLB-686475": {
    "url": "assets/mlb/headshots/686475.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686475/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "eba4829f67d8c57e5a507b4a20c054b8b59b6011ff932ab9e4f1990153321f82"
  },
  "MLB-693306": {
    "url": "assets/mlb/headshots/693306.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/693306/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "56d7c84fcfe10737bee4c7517d047a0d8c4512a29f07b4e6f3c6431e08ca111a"
  },
  "MLB-702193": {
    "url": "assets/mlb/headshots/702193.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/702193/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "391d3f2df9d9dea22e228916b19006546dc12595f09c765115a1569c461ee8ed"
  },
  "MLB-702176": {
    "url": "assets/mlb/headshots/702176.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/702176/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3d69bbb07291973081ace59091d943e145e3b9a4473a799a01da0a20896c533f"
  },
  "MLB-663485": {
    "url": "assets/mlb/headshots/663485.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663485/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fd63bb05e0e60ac70749063bbd5fd9a30d7e2b2fd6a2d4ce5e94fb7c73eeaf37"
  },
  "MLB-686681": {
    "url": "assets/mlb/headshots/686681.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686681/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "938243ae67c79c95f481bd8041768143c9fdbb8156474072ddcbe8e38dfc8f84"
  },
  "MLB-607455": {
    "url": "assets/mlb/headshots/607455.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/607455/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "97496bb346f9cf07672abd21c43d4d1d3a0ff3b696b7f6b78a6601d062b0a6e7"
  },
  "MLB-641927": {
    "url": "assets/mlb/headshots/641927.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641927/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "306e17a0444f74a46910d28e668c4d691e77ea642438c91a823f9059770a49f5"
  },
  "MLB-805346": {
    "url": "assets/mlb/headshots/805346.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805346/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b9ca0c64703257ca98905a00451b9124519162c67a0ccd7301bc15db50ce6d2b"
  },
  "MLB-686797": {
    "url": "assets/mlb/headshots/686797.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686797/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cfec2b5396a15a529d5480379a4c68261a6ee4d744a36802c30001e932457f64"
  },
  "MLB-621439": {
    "url": "assets/mlb/headshots/621439.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621439/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5aa1411f732cbee8712a671e9048baa64a54288ca12c8a8da6f7cd48aded0084"
  },
  "MLB-687570": {
    "url": "assets/mlb/headshots/687570.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687570/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b95d0ab8cf3cbbe48cbee041afb53227977f3c243bcf9bf47048c9d9792ca37c"
  },
  "MLB-701581": {
    "url": "assets/mlb/headshots/701581.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701581/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3640a8e80f6242e2c3022f1e87170479e5504a6c78fcda0117061484975c5e4c"
  },
  "MLB-691181": {
    "url": "assets/mlb/headshots/691181.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691181/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b13bba7b251a4414ce1c9242103390bb3d77699b7b27ab002fc35e56fe0ba80b"
  },
  "MLB-605137": {
    "url": "assets/mlb/headshots/605137.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/605137/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3582b224a50ec321f1ba02c6600ae34eace448af46f2f3b4046f227cf78d68aa"
  },
  "MLB-665019": {
    "url": "assets/mlb/headshots/665019.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665019/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4d28aef0e32c5d8c8d3fbf59730b135592be425439a632a9fd925c49c2ea9c41"
  },
  "MLB-681892": {
    "url": "assets/mlb/headshots/681892.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681892/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1112609c291a05b896bf6fdfd74a884262f500669b55a13c4e48c3d83efd7028"
  },
  "MLB-665152": {
    "url": "assets/mlb/headshots/665152.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665152/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b49d4b0edb51189e282cf600fee9ed065e3f1cfebbf4fe61d14da102f724b185"
  },
  "MLB-656546": {
    "url": "assets/mlb/headshots/656546.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656546/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d6fe94f60ec7ad6f5afa9687a4bf29ab687dea4042a9ce7f25fb86a8e1aa5336"
  },
  "MLB-668885": {
    "url": "assets/mlb/headshots/668885.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668885/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e53dd4d6f9f8e24e705c22e5fa0a19b82e5cab2b4118af24ace17c7e8a1dbe30"
  },
  "MLB-702474": {
    "url": "assets/mlb/headshots/702474.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/702474/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d079ea60582ece4ccb2c2e863e76d8c37f10dfd073bb942ffa6644c06335327f"
  },
  "MLB-641154": {
    "url": "assets/mlb/headshots/641154.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641154/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1491fef664e8b16aaa561eb8e224377c076a638fc06b1f3aeaa812594a9a607d"
  },
  "MLB-657746": {
    "url": "assets/mlb/headshots/657746.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/657746/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8e83da48b3545ebb207ea7729f6055e28d4ce164ebd5cbdb4b003847ebbdcbfc"
  },
  "MLB-668904": {
    "url": "assets/mlb/headshots/668904.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668904/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d5e78af5c91cf2a07bd5ad04076105c9c5c8e9845af79822469ef0f6d8166f29"
  },
  "MLB-668952": {
    "url": "assets/mlb/headshots/668952.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668952/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f4a6d03d50d0609f2dd5d4159b55f76c5bb4599bcd49e7e86b8efdff44b5d612"
  },
  "MLB-701785": {
    "url": "assets/mlb/headshots/701785.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701785/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c5ceac963ee37473c64e510be18421ec839649253718f3ef31487544ff117765"
  },
  "MLB-671737": {
    "url": "assets/mlb/headshots/671737.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/671737/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "477087e736dc4b4f29fb36457ab24cfec7d53d890cae4512f900d7099aea7b90"
  },
  "MLB-573124": {
    "url": "assets/mlb/headshots/573124.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/573124/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e46d1d0f5db759b07f0eb13b555d9b53c46e0739ce9b1ef31069ef9376ee791c"
  },
  "MLB-807712": {
    "url": "assets/mlb/headshots/807712.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/807712/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "448218e0242814ae2deabe7a6d6098c496aab95fb63f9eb446e4d58005532bb4"
  },
  "MLB-701519": {
    "url": "assets/mlb/headshots/701519.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701519/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1bc9993041c3e01a27ef91133a14540e6189b6ee94eea1f816990cc027b1d8e7"
  },
  "MLB-663616": {
    "url": "assets/mlb/headshots/663616.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663616/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f010f70fa55844ef660380f018d5b3809cff3be490546dc1df3726b4c57e18fb"
  },
  "MLB-605170": {
    "url": "assets/mlb/headshots/605170.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/605170/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6cc122dd43c4f495882347206ef863ae40b604ab8bf0542e03088d61945ef433"
  },
  "MLB-805805": {
    "url": "assets/mlb/headshots/805805.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805805/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ae2f37f17bec7f811001b2fa18b8dd0c0471b5dd2c12c2ed766e800a6bbbf58e"
  },
  "MLB-680777": {
    "url": "assets/mlb/headshots/680777.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680777/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b7130fdf5d8db038af9c7379b466ccdaecd1dea599957fdfb7132500f6a4c0a2"
  },
  "MLB-680728": {
    "url": "assets/mlb/headshots/680728.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680728/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bf041281c68e196757c58724fef001e095e0041da294e21311a714d910d4457a"
  },
  "MLB-694297": {
    "url": "assets/mlb/headshots/694297.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694297/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "74c531c7a56d5d005d1f1f4bd3425732d217665f59d64ef155d7f99d080d7167"
  },
  "MLB-805299": {
    "url": "assets/mlb/headshots/805299.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805299/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "11d0293c2d7d19cd7538c2d6273da93000faace51c16e4efff9292d3c802a185"
  },
  "MLB-593958": {
    "url": "assets/mlb/headshots/593958.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/593958/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "80137c6b4702cbf4bb66c9d7ee76f94ecc784c87f4c0a9bbc1d3cd2474ccc9f0"
  },
  "MLB-669203": {
    "url": "assets/mlb/headshots/669203.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669203/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "78a21a9d72919d6bb5fe4baaef28d652a4e12c506f8950811000f3104873bff9"
  },
  "MLB-642701": {
    "url": "assets/mlb/headshots/642701.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642701/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "94d65083a1c087ec956a9c46ffae4172b4a9f458b42722b3f76b67e8361d5513"
  },
  "MLB-805673": {
    "url": "assets/mlb/headshots/805673.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805673/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5fbef747637effda56879b77673e0fc1964f61bdacd6badc6fc3085d241b933b"
  },
  "MLB-672695": {
    "url": "assets/mlb/headshots/672695.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672695/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5a0294bd94749433dd4c84cb481f97a496ef1f1eaff89accc6e0122f5899a7b6"
  },
  "MLB-543510": {
    "url": "assets/mlb/headshots/543510.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/543510/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4c47de949326b5607671e779db047e7e5190af51ed23f1b94c32b4f5c1d9617a"
  },
  "MLB-672782": {
    "url": "assets/mlb/headshots/672782.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672782/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e1c014da6d169dafdf8dd6fbe93e7cf58c3cb7f29e4aa1924b5e59481dac197c"
  },
  "MLB-699912": {
    "url": "assets/mlb/headshots/699912.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/699912/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7c845fbc3177c878df9f8774096ee1fd23779bd2e34469fd4f6b9c179ff4e39b"
  },
  "MLB-642528": {
    "url": "assets/mlb/headshots/642528.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642528/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f006d3a482e6bc9d6448210e67ac3c053da0182675d5c42877f9e1be6399d4bf"
  },
  "MLB-691783": {
    "url": "assets/mlb/headshots/691783.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691783/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "acbaa2bbbfa80cfa13ef1bd4f57e0bc66c1b9f9dcb759355f31de0b202afd48d"
  },
  "MLB-667297": {
    "url": "assets/mlb/headshots/667297.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/667297/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "485c2a77477b064dcbb91e056779409e0679a7890c78d5526d05e34d109dada8"
  },
  "MLB-672515": {
    "url": "assets/mlb/headshots/672515.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672515/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "79e66ca4bb00b0d6e0751c063f5c8732484b31d77890f3e99791a4d7582160e5"
  },
  "MLB-703615": {
    "url": "assets/mlb/headshots/703615.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/703615/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d493deaf27122822838cc3198c6671c2450a3df812c26f0a620aebe5c0b3996d"
  },
  "MLB-682998": {
    "url": "assets/mlb/headshots/682998.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682998/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1b2682d8d7d3a8ac8872300e3096ebf7913e4e0a73565eac6ac7423c3443927f"
  },
  "MLB-666661": {
    "url": "assets/mlb/headshots/666661.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666661/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9fc8ad5dd0689e9d3ffded73cbe517085852e3ecc216f608b03ee43e3a6fd361"
  },
  "MLB-656464": {
    "url": "assets/mlb/headshots/656464.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656464/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3da34fb3205570c9e285e50513662a48469c5150d0451b1150c7f1b96febcb5b"
  },
  "MLB-663457": {
    "url": "assets/mlb/headshots/663457.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663457/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f9d07aaf8f106f97d98149851ac03f10c324329f76f63b7a003bfc0778fbb1d6"
  },
  "MLB-571448": {
    "url": "assets/mlb/headshots/571448.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/571448/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c4c71c5191d05b9e27d0c87b412477cfe546fcf4587ee8f9d813ce78cea46efc"
  },
  "MLB-647336": {
    "url": "assets/mlb/headshots/647336.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/647336/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c1568eb3ed42959e863d9eb0d69e832f54da904bdd55f932d8e918b975908d91"
  },
  "MLB-545121": {
    "url": "assets/mlb/headshots/545121.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/545121/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9674280f12dd552635841aa764d3c465023a5b879bd53515ee34cb1f065c4dae"
  },
  "MLB-814439": {
    "url": "assets/mlb/headshots/814439.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/814439/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "649bc14fc08b94477a1a861c7644e12791c380ca16e08c34cba002ed51e38d4e"
  },
  "MLB-664199": {
    "url": "assets/mlb/headshots/664199.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664199/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "06baae45ea4fcd3b1cbf76b94b2044e8f91c5b2558ec83d5ba753a04dfa4322d"
  },
  "MLB-669194": {
    "url": "assets/mlb/headshots/669194.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669194/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d5f08010bfb95d509cde4c29033635399faa8d1e29b0d12a52346243700354ef"
  },
  "MLB-606466": {
    "url": "assets/mlb/headshots/606466.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/606466/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "555f8ce17872af6fbb75618ccb3a09fbaa175574e8844c6861a5e0616e7a4c69"
  },
  "MLB-694374": {
    "url": "assets/mlb/headshots/694374.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694374/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a0cb446d149ed748be6d6885475e3147dafc30e13cc7233423ceac99ce0e9df2"
  },
  "MLB-679885": {
    "url": "assets/mlb/headshots/679885.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/679885/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c65658d49378b8f8120966135209ada4563af6da43ab14ba6d8692e2bdf03197"
  },
  "MLB-518876": {
    "url": "assets/mlb/headshots/518876.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/518876/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "58c1da06eaf50b8c78de94daecbbee44840538189da529c74f7085cd4f2d10ce"
  },
  "MLB-668678": {
    "url": "assets/mlb/headshots/668678.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668678/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ee9a4e7af5f87c12729993070884d52647fd0ef12cad11349f91428be95b4ec8"
  },
  "MLB-656976": {
    "url": "assets/mlb/headshots/656976.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656976/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3b0e2e66cfcd37762b6b1c366038e73ee0553f881c73fe5625bb42f0e68d405d"
  },
  "MLB-690924": {
    "url": "assets/mlb/headshots/690924.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/690924/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1ed3b4e27bf4a7b5e53a2398c1c89eeb72501f352c194c4172b93d3f36946a17"
  },
  "MLB-664954": {
    "url": "assets/mlb/headshots/664954.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664954/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6600c7cd1e9e738d612a5fa1481ea5454df6a24999f05d2df89818d8298d5fc3"
  },
  "MLB-657044": {
    "url": "assets/mlb/headshots/657044.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/657044/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8877f52a1ec58ea34517dbb44e56e1014d8ce4d925e3331f09d5e027d6d24b3d"
  },
  "MLB-681393": {
    "url": "assets/mlb/headshots/681393.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681393/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ab79f43b8dda8ba0b7129813bca209eebfbf0d8d87af82ff7c8c9202ba135a89"
  },
  "MLB-678662": {
    "url": "assets/mlb/headshots/678662.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678662/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5819979cbec322da2337198053854615ab960f499b7a90bd58c5d65d70b45dbf"
  },
  "MLB-691182": {
    "url": "assets/mlb/headshots/691182.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691182/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "28c74bcb41131d7cabb100cb36de3d14657e718705302bb291735b4ca16172f0"
  },
  "MLB-696100": {
    "url": "assets/mlb/headshots/696100.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/696100/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5a8809b6250768b75f80bfb96c5cf5f290129c117c646f7822d02a03f1c0ad67"
  },
  "MLB-677955": {
    "url": "assets/mlb/headshots/677955.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677955/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "dfd9a91daea0e02c2b1e707ee8b3eb4f2e203b2e03752276bae38a80388f4d32"
  },
  "MLB-623474": {
    "url": "assets/mlb/headshots/623474.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/623474/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3936414a4685040f12edd8e40bd33c4db81f0caf2ae363a341982a229310e5fa"
  },
  "MLB-694249": {
    "url": "assets/mlb/headshots/694249.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694249/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "457ec79233a0e342cb8c3a2928f7858aa993b659c3626cc53a0c666080e7e96c"
  },
  "MLB-687597": {
    "url": "assets/mlb/headshots/687597.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687597/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1a5aaa93da026e7c86de2bc48e0ea9915a44a0e96298644bac83edab1414ac0c"
  },
  "MLB-801403": {
    "url": "assets/mlb/headshots/801403.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/801403/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "67290fca96567acbc50abc3a62e2382fd8749aeb36b510a92200d362925fd36d"
  },
  "MLB-664983": {
    "url": "assets/mlb/headshots/664983.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664983/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3b34c355af5521599352ac3b93545169635e55dbcef5853cb03eeca3e7e24152"
  },
  "MLB-657514": {
    "url": "assets/mlb/headshots/657514.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/657514/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bcff7b3271fa84a8ea6014131ffe269240d88e8a4c0b7010ea163afee459fd53"
  },
  "MLB-815081": {
    "url": "assets/mlb/headshots/815081.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/815081/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cad906d5eb686a8ab1e769febb7652a7942cd534b24bb231c9cd941f74711417"
  },
  "MLB-605447": {
    "url": "assets/mlb/headshots/605447.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/605447/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "98e3be35a2921a40d6cca647ec447b128019896235bbfc484f4ff121c89b5ad2"
  },
  "MLB-675848": {
    "url": "assets/mlb/headshots/675848.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/675848/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2febe7997c3a93296d5c8b713d435b522654352b747cb67a7a039453974ae034"
  },
  "MLB-690279": {
    "url": "assets/mlb/headshots/690279.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/690279/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a443e0b974746bace46420d4803608dbb5e1303b8d589f424ebcf220e455adb7"
  },
  "MLB-500779": {
    "url": "assets/mlb/headshots/500779.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/500779/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6b4f930ef8fa82e4d0e0fc7ba40e7e33d3f86a5e7f56f9deab5240454c82b91c"
  },
  "MLB-607536": {
    "url": "assets/mlb/headshots/607536.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/607536/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2d41d33cacd11cab9be941d2152497f728606d0cd6394e4c31da501ce0b771bf"
  },
  "MLB-693308": {
    "url": "assets/mlb/headshots/693308.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/693308/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "39b0e6185602fca354c5e927df059280700ec40074cf2376026e20d0c39f1d68"
  },
  "MLB-663372": {
    "url": "assets/mlb/headshots/663372.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663372/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "65e1fd3f39eb3282bef9c5ba52c9224a6fb9763a1354b4f9c3239216413df36d"
  },
  "MLB-681198": {
    "url": "assets/mlb/headshots/681198.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681198/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "87c6e30d5cdac04023e19648bb7a09d4a4cca11bb4fcb14447a79af012f1f20d"
  },
  "MLB-691720": {
    "url": "assets/mlb/headshots/691720.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691720/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cb32aee012cac00ce062cee58d52978f0b7b699794c3706469a2522c50001f93"
  },
  "MLB-687859": {
    "url": "assets/mlb/headshots/687859.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687859/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e266327e364a88f3ee2509b46651984bfe9b81530a83b3796a6a1f66f46d47e4"
  },
  "MLB-666160": {
    "url": "assets/mlb/headshots/666160.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666160/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "31762e680e5ad06c27b475062750b27b4d02488fddf25ce1d76d74aaa5157f00"
  },
  "MLB-650489": {
    "url": "assets/mlb/headshots/650489.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/650489/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6085858b6267511136c6d7248a74d7a8dc5eb863f858f91e4107f23e3a67013a"
  },
  "MLB-691728": {
    "url": "assets/mlb/headshots/691728.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691728/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "69eb3042995affa67a3773332841e6a0ba367cedf05136639d3141f7be51af96"
  },
  "MLB-688642": {
    "url": "assets/mlb/headshots/688642.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/688642/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "404c0a1f5560ff1c60b082232a18259588f4fe4f788c77b5226ad4da95e560b2"
  },
  "MLB-685299": {
    "url": "assets/mlb/headshots/685299.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/685299/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "89da4f9ba6f7635e1daef17fe963f2b0760bea408f34cbd27eb4e2ed7c0b1da4"
  },
  "MLB-681624": {
    "url": "assets/mlb/headshots/681624.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681624/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "76654b7e2d0152c84eb7386a578f2578b495ab159fd56ad2a32b99874ec4c2be"
  },
  "MLB-676508": {
    "url": "assets/mlb/headshots/676508.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676508/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bff4596e39740da20847c7355aba3cd4d222dec8a20b5029119ec40ce2608413"
  },
  "MLB-605483": {
    "url": "assets/mlb/headshots/605483.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/605483/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c5c447fb4d1d82fa02619c2d5dc4a0592b2750d050953ca71d7997fb7c48aab6"
  },
  "MLB-592779": {
    "url": "assets/mlb/headshots/592779.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/592779/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9281c0a8e33a143283c1a958c46898807b8ff51b1c4b978f039308597d97b608"
  },
  "MLB-681911": {
    "url": "assets/mlb/headshots/681911.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681911/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ff611a6df23f738f90df6f3ca30489a45688106f891382d5b28b79daad8218dc"
  },
  "MLB-608372": {
    "url": "assets/mlb/headshots/608372.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/608372/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b9dec560bae00de3d91f2ee6170e014abac8faec66597b9bb42b493e8078b9e1"
  },
  "MLB-641778": {
    "url": "assets/mlb/headshots/641778.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641778/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f1b5cd2a143db5bb45df14a90120ee50af4f4c0d4698d779dd983069d478b081"
  },
  "MLB-571771": {
    "url": "assets/mlb/headshots/571771.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/571771/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6fb73d5113e1a3ec4ca5f183702ee25ac32956e93b56bc9e823f3459b13bda58"
  },
  "MLB-623465": {
    "url": "assets/mlb/headshots/623465.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/623465/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "27a4943bf1ca92f8417f37b1b38553e461dedd20142df6bb1f397106e190f4d1"
  },
  "MLB-676439": {
    "url": "assets/mlb/headshots/676439.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676439/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "97d8259f18a5bd848eee3a16fe3f1ff0f5a77fc1a02ca22d1c41381da533f027"
  },
  "MLB-663460": {
    "url": "assets/mlb/headshots/663460.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663460/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8a1c915bee1e73abce9e9a923c6f9ddbe18d4568f50f4f26e4a6fdc46ef9aedc"
  },
  "MLB-680736": {
    "url": "assets/mlb/headshots/680736.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680736/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7581b08b0bf770a508bdd11799c611d0968dbc6fb623517ab790f488874bbb91"
  },
  "MLB-683618": {
    "url": "assets/mlb/headshots/683618.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683618/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "947aa7b0765133459864bbd13dd2d75c9438d165c04722638ce481f50fe7fe58"
  },
  "MLB-621242": {
    "url": "assets/mlb/headshots/621242.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621242/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0bd6aca8b276a318d6b81f7f7a67cf1f5714babb8317ab623f520567a49897cc"
  },
  "MLB-571970": {
    "url": "assets/mlb/headshots/571970.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/571970/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "dae510389c16bf5e9435083f72a5b451778d8f123e91295f62f82964a41ea5d8"
  },
  "MLB-518692": {
    "url": "assets/mlb/headshots/518692.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/518692/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "715abbc9ba1aa700544f280a982634d929a6cf9850234f56c0f1c85d8bee16fc"
  },
  "MLB-500743": {
    "url": "assets/mlb/headshots/500743.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/500743/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a94fd7c0e9bf99ff4217546f6d9627576aad09f2a3ed6bef7675542ffd4bc20a"
  },
  "MLB-656945": {
    "url": "assets/mlb/headshots/656945.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656945/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "39f4404a6c26d6552da7bd8254b495ceb5df8057300571d04119c149c897df86"
  },
  "MLB-669373": {
    "url": "assets/mlb/headshots/669373.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669373/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9027af924026fe94fc4e2af0a55dcb1ab7f4b114fab9866819ea93f69c616fed"
  },
  "MLB-663656": {
    "url": "assets/mlb/headshots/663656.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663656/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c6ce1ccf1144a87805b595a2f7f17b6e79b50d261498c04c1e306afff3af5d55"
  },
  "MLB-800543": {
    "url": "assets/mlb/headshots/800543.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/800543/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3fe19a6bb1faef18c610659381d3a7ef9937af41012c83b93866136606286434"
  },
  "MLB-808963": {
    "url": "assets/mlb/headshots/808963.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/808963/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "10ae2022417a34b48dd46ddaecba7076423b6d931d971fe1b67e884a06b0e57b"
  },
  "MLB-669242": {
    "url": "assets/mlb/headshots/669242.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669242/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7d2a742a5d7f2e8a5cc31004685bf93575f675a668fd9fa8dda8ce692d1ba9b1"
  },
  "MLB-607192": {
    "url": "assets/mlb/headshots/607192.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/607192/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3140d0591dd5944df5569e0555d2691ca0f1838ceae4c02b063aca2af505824a"
  },
  "MLB-605141": {
    "url": "assets/mlb/headshots/605141.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/605141/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6e80d18add4c00991b4d34346554a55f3dd1a857a0f627daf1c6f0efd40926cc"
  },
  "MLB-694361": {
    "url": "assets/mlb/headshots/694361.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694361/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b6c172d9c2478abc6b2a32f3f32c0421b089262c3c124aab3d6dcaa131b3bb34"
  },
  "MLB-660271": {
    "url": "assets/mlb/headshots/660271.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/660271/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f8a7ba3335f20acda731a62a6186fdeb5176440a542b0f49e29947e9734b4c09"
  },
  "MLB-669257": {
    "url": "assets/mlb/headshots/669257.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669257/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bde062014b30630b59aa59e32aeb09f39c9faf1212692dbdcac28853e1467cb3"
  },
  "MLB-808967": {
    "url": "assets/mlb/headshots/808967.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/808967/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bee999f1a44e73b39a3e817c246dc962fa07903a9840e3df8905b5eaa3b04447"
  },
  "MLB-669720": {
    "url": "assets/mlb/headshots/669720.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669720/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1000b5d99bea25bef9caa374a80a1e4c1a326d570d8342a9bc6d87158f293804"
  },
  "MLB-670970": {
    "url": "assets/mlb/headshots/670970.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670970/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "eced0b5ecaa7f7a7cd7126d64f63d8f5bc26465d4f58eb24428614e1c9f377b7"
  },
  "MLB-663554": {
    "url": "assets/mlb/headshots/663554.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663554/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c30736658cbceab09c13d9b578c001b1d280f6114ab210d969f043d2f889c43d"
  },
  "MLB-606192": {
    "url": "assets/mlb/headshots/606192.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/606192/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "aadb12997729ac84205334fe9206bb0914704dfa84bb7505eb2aa15f28cd1dfb"
  },
  "MLB-806956": {
    "url": "assets/mlb/headshots/806956.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/806956/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d5d1574f073fcb23d39b16a0d64468c9a5d2ec2c002708aae9d2c569b1797658"
  },
  "MLB-665487": {
    "url": "assets/mlb/headshots/665487.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665487/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "72a54dab02e6d63f1909a263f0eb5b5b18eb8c1c0f7c2728494fe666cf3f165d"
  },
  "MLB-657757": {
    "url": "assets/mlb/headshots/657757.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/657757/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3f6cd6bb3c6847e0e3e61915e75e952194a606beb27084cef3d4714f7959bee5"
  },
  "MLB-666023": {
    "url": "assets/mlb/headshots/666023.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666023/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1b3462600db6b4e4c4fe5edecd42e1dd00bd0f35532253712657ffc4d66dc333"
  },
  "MLB-699134": {
    "url": "assets/mlb/headshots/699134.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/699134/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2df0a2ac41f31204095f395c4eb897005da71f626533b52c362a57c536ba022f"
  },
  "MLB-688158": {
    "url": "assets/mlb/headshots/688158.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/688158/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "84d180eed06ed1107a20f8c54774a8dd775f6f9fe0537032fb44cf05466071e3"
  },
  "MLB-687957": {
    "url": "assets/mlb/headshots/687957.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687957/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "04560d1f5bc28465c384a793d883684db24636e9445c2915fb45273ceecd9c15"
  },
  "MLB-701538": {
    "url": "assets/mlb/headshots/701538.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701538/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "292115b4451ee01551d9395592169c933d8804bf9ce8a82701635ac4ea966bf7"
  },
  "MLB-630105": {
    "url": "assets/mlb/headshots/630105.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/630105/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5c34cdafd38c0b567591fb6d75fadb3e3c9a504037b0394588b26cafda6dd480"
  },
  "MLB-687749": {
    "url": "assets/mlb/headshots/687749.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687749/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6262d7a0e1f9b4a812d4032a56d2ee53f400913b7ad52185ed4476fa94730288"
  },
  "MLB-605397": {
    "url": "assets/mlb/headshots/605397.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/605397/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "791bc6e6b15c05269baa7f8f141b0801e84d528c7e30846a9d1cd1ef4185bf72"
  },
  "MLB-608337": {
    "url": "assets/mlb/headshots/608337.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/608337/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1d2317825aec1f5671685fbdb0ffff11572892fe7e8978572bc31c8f383a93fb"
  },
  "MLB-669134": {
    "url": "assets/mlb/headshots/669134.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669134/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ff02f9fed3b5fa42c24c7dbf46aa9850324ed031bc4a0e7d479d895843acebac"
  },
  "MLB-650859": {
    "url": "assets/mlb/headshots/650859.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/650859/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b932ddaec864e15d51f0ead3695ee23298393bd80b88e1f0644d32f049d93437"
  },
  "MLB-695243": {
    "url": "assets/mlb/headshots/695243.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695243/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "90e055f0bfb6bf1a88b6a89adeda93b1aa7d5eb12f478c0c3014c64b388d5bd2"
  },
  "MLB-609280": {
    "url": "assets/mlb/headshots/609280.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/609280/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3b0d295741ef8ffed9a8f8000e65f9bb5518e800b0bcc54a75900e099381005c"
  },
  "MLB-601713": {
    "url": "assets/mlb/headshots/601713.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/601713/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d124143b0ad39f5b62fada2de5ddb68b7cd5ad63f504603e82d0ab5ec7d82a6d"
  },
  "MLB-657656": {
    "url": "assets/mlb/headshots/657656.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/657656/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4cbf1cfb0729237ac490fc6331d272274401c8b391921b82f4fb053bab0c65af"
  },
  "MLB-592662": {
    "url": "assets/mlb/headshots/592662.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/592662/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "345ef9583f73805ec881e976773fcafab7c57a2a42f8804cc62e43262dd7e945"
  },
  "MLB-669392": {
    "url": "assets/mlb/headshots/669392.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669392/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0a83cb52d33c43b33b0a6f966aa3144fe182d7ec8b81b61becb3090a8e73f21e"
  },
  "MLB-592094": {
    "url": "assets/mlb/headshots/592094.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/592094/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ba379bde8c713208dd411a3a61b62ff9e60c127d041f0b40d041ea37bd652b62"
  },
  "MLB-664034": {
    "url": "assets/mlb/headshots/664034.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664034/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "809735c6396a4882a70e1548ba296b6bd2f758d1224e811f68f5b2237b791fd8"
  },
  "MLB-650633": {
    "url": "assets/mlb/headshots/650633.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/650633/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1af34fea88118f7a3adf37f0a3f5fa7449c0df9d6463af787b5ac297df10c623"
  },
  "MLB-673513": {
    "url": "assets/mlb/headshots/673513.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/673513/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "899bb1b7f529d2910ee22a01f59e90a9965079a8b64ec897f5b141f69303edc8"
  },
  "MLB-605288": {
    "url": "assets/mlb/headshots/605288.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/605288/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "31b5cce03fed79d3f1bbe3c2b328ac46ab820b9a4e9baeecccbdda1b08175113"
  },
  "MLB-668800": {
    "url": "assets/mlb/headshots/668800.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668800/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "321eccf763bf65545e4354d47385219b7328d410134c5fcf458a73ae3c3c4c9c"
  },
  "MLB-694918": {
    "url": "assets/mlb/headshots/694918.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694918/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d084bd5e2bb70078f05297877310f987f842e0cf65f3cf8a45e28bb628ee3669"
  },
  "MLB-815589": {
    "url": "assets/mlb/headshots/815589.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/815589/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0838fc016a69be8c9efe44d3dc2333a80cbc045b11e38c24b86f29bb94a62ef1"
  },
  "MLB-694820": {
    "url": "assets/mlb/headshots/694820.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694820/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5cb1d6d26d65c4d62a32c3307af034d2ca0dc7d9912db78b81856218aa436f66"
  },
  "MLB-683627": {
    "url": "assets/mlb/headshots/683627.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683627/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2ff9cf6ba74b419522a54be01961189d36e9c2f82e23f3a8e91b21e192757926"
  },
  "MLB-666808": {
    "url": "assets/mlb/headshots/666808.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666808/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c11d336e0dea94334e181bec6df00892097ab131e7cdea00a961dbcec7c140d6"
  },
  "MLB-687931": {
    "url": "assets/mlb/headshots/687931.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687931/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e4070399b673b39ee3f774886d2ea78e584f7d77d4c2390ae83d7b6e72ef7929"
  },
  "MLB-621111": {
    "url": "assets/mlb/headshots/621111.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621111/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "57fb570a81e6d046c421929cfe0c06e25aa4aba3a85f0ac43508c9219f26c860"
  },
  "MLB-693313": {
    "url": "assets/mlb/headshots/693313.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/693313/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "62e3462c2b83cfd26bcd4317a4806f97b6fd98bd0a20f99731d909c19099ca76"
  },
  "MLB-669477": {
    "url": "assets/mlb/headshots/669477.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669477/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d07438f895132820802ae3fe15c384c5d27e580e7cfb1050a86a04859af345a2"
  },
  "MLB-701852": {
    "url": "assets/mlb/headshots/701852.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701852/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c1cf07734bfa939c3a43869e2abbbf5e9633b20feceac7c5d0eaa1842767350b"
  },
  "MLB-593428": {
    "url": "assets/mlb/headshots/593428.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/593428/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "aa7e592c9bc518b6e92cc10d203d524ede0549ed1a6ae75ec7afcba44896fa6c"
  },
  "MLB-683766": {
    "url": "assets/mlb/headshots/683766.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683766/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f091df66b5e1dfa316bc41876e2381d8aa6841582989a72715015f922049bc0b"
  },
  "MLB-687551": {
    "url": "assets/mlb/headshots/687551.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687551/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1d2b3853dcdb6e7328c9249594633d5e3b0c7c9b489bbcef81ab62ffab255f6d"
  },
  "MLB-805811": {
    "url": "assets/mlb/headshots/805811.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805811/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "840d5b000bea4c8fde7482764971ac430fbeef20ba68ddd2fcd6b3187bc872e2"
  },
  "MLB-687529": {
    "url": "assets/mlb/headshots/687529.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687529/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5a9ac515aa553248157e21b8dfe5eee7c3e1f1cf9c7bbaed6b8ae8e5b28d21c4"
  },
  "MLB-806185": {
    "url": "assets/mlb/headshots/806185.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/806185/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7eb659faed02b0efd4a3553b98f05a7b3b46c2ee6c98e65a26cc94c8fb7500c5"
  },
  "MLB-669270": {
    "url": "assets/mlb/headshots/669270.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669270/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "980aac6655f2c03b2ea073385759756b27246fe8ce5ee8a836989a62268eca61"
  },
  "MLB-813841": {
    "url": "assets/mlb/headshots/813841.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/813841/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "679405f3b58779b43bf5cc4a88afecfea610ae466e51a20d6d00b52dd31c7a74"
  },
  "MLB-681916": {
    "url": "assets/mlb/headshots/681916.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681916/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5f2a8a03403f43d2875a84c4efb7a06a0658781a11e155b2bf1816b79975a570"
  },
  "MLB-676130": {
    "url": "assets/mlb/headshots/676130.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676130/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0c166e6cb5d2028d9bae649b682829367eb84645c62f09bf97bac234f420e8c9"
  },
  "MLB-664141": {
    "url": "assets/mlb/headshots/664141.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664141/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "28adb4ff665843d8d3a863c559a4a574a17521e18b5d08ad7816647d9066a0d5"
  },
  "MLB-664056": {
    "url": "assets/mlb/headshots/664056.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664056/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "efce4301eaec4a40f76e18cfd5e887bd6e9444a9eb376c5ebfb737d890807368"
  },
  "MLB-671345": {
    "url": "assets/mlb/headshots/671345.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/671345/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "87e8f359c10c23d96c1400c59d4433fee85d7aaa988a4431895d3fbdc16646ba"
  },
  "MLB-676775": {
    "url": "assets/mlb/headshots/676775.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676775/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e93be17e2858a38301870e622c3264e017f2a8c8696093a2df7fa95cc54817ef"
  },
  "MLB-592518": {
    "url": "assets/mlb/headshots/592518.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/592518/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "41e4e8367ab979553e45f2a5bc9d4510d39f15b2e4c76177d8e61fbbc7ff4602"
  },
  "MLB-695391": {
    "url": "assets/mlb/headshots/695391.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695391/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b9fc8a91c9a582c5fffd352bb358def23bbc8e94af6df0614d1d0d92a832fc92"
  },
  "MLB-691785": {
    "url": "assets/mlb/headshots/691785.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691785/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "776ac86ecc4f4f91e1892dc3829a7a21b8591219912341506bdbbe9107f91fd8"
  },
  "MLB-656305": {
    "url": "assets/mlb/headshots/656305.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656305/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9ba173c17db075837b6885edf02de5045fd71a7de94c0608e6579f80e5d84276"
  },
  "MLB-657424": {
    "url": "assets/mlb/headshots/657424.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/657424/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0554433f4de73abbe5bac66db584aae78e5c2a34eb34bfb2bc3bbab30741d321"
  },
  "MLB-808982": {
    "url": "assets/mlb/headshots/808982.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/808982/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "dca71e07722f0fd210554eea4847638218ada6d931cc8cd8bfa4c6b371cbf97d"
  },
  "MLB-683363": {
    "url": "assets/mlb/headshots/683363.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683363/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2dd9951f2a65afb809c82d51df26dfc5c8e30812f5e4436cc8ed1952bce50744"
  },
  "MLB-694738": {
    "url": "assets/mlb/headshots/694738.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694738/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "853f66f2f02fe7e2e1c972094a3e1d3558433d4f2c9a1ce280e16fc4d115f4f1"
  },
  "MLB-646240": {
    "url": "assets/mlb/headshots/646240.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/646240/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "650dd77e9a43d14dd08a712509ecdcd8b273783c13e6bcec9e53b11f6438b89d"
  },
  "MLB-678545": {
    "url": "assets/mlb/headshots/678545.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678545/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d060563af9d7a47ac0394157ef692209955e551d1daef9834a22a5637a7dde80"
  },
  "MLB-656529": {
    "url": "assets/mlb/headshots/656529.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656529/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a5a291d1b4070b5a7b577d28d60db51255927e5c0b71b0c05b249ba571327588"
  },
  "MLB-686790": {
    "url": "assets/mlb/headshots/686790.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686790/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2f72ec622d0014009251971af282ec85def48951a14d39ec975f5058bf2042ad"
  },
  "MLB-814154": {
    "url": "assets/mlb/headshots/814154.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/814154/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f87e44942bae613a40024baa786e3b62d81e630b205ea8f622bba1597dcd70ec"
  },
  "MLB-675920": {
    "url": "assets/mlb/headshots/675920.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/675920/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "52a57a71fc2a45e35de0a59b5af2501c3b7c2913e502e22851dfd7968d703be3"
  },
  "MLB-678495": {
    "url": "assets/mlb/headshots/678495.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678495/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "89246f36a353e00df1e68fc4eec4e5e8eb090101b7aa0b5397bf24fd9e3c509f"
  },
  "MLB-806367": {
    "url": "assets/mlb/headshots/806367.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/806367/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0c4d7a78c6a29c57fdad9c88ff8c8d39f30c940ddf4de96fa5747324fe239322"
  },
  "MLB-657277": {
    "url": "assets/mlb/headshots/657277.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/657277/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6c73491ef6bc46cd15d155f857744482bd7d18468b9b9383d5936821657817cb"
  },
  "MLB-700363": {
    "url": "assets/mlb/headshots/700363.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/700363/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2001304be44aa4d5895eae936fc81581c8e90c7fbbc35a13366376480664c7d4"
  },
  "MLB-663586": {
    "url": "assets/mlb/headshots/663586.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663586/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "76c13b2788a218884e1978b255ba49c486c32aece38f6500feff1e1f7cea91a9"
  },
  "MLB-663941": {
    "url": "assets/mlb/headshots/663941.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663941/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "df91092a9732f05a2c08500cfb895c09c02c1cd6040d6f628064f8e246ae209c"
  },
  "MLB-701474": {
    "url": "assets/mlb/headshots/701474.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701474/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "517aff43e2f745737e5f3a3466030dd045e687058989a0417880a3b39ed8ff73"
  },
  "MLB-805345": {
    "url": "assets/mlb/headshots/805345.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805345/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "520a25da9bacb9a1547fff64975ab3bed3a7b65832b1e18934d36ed955a66b71"
  },
  "MLB-686948": {
    "url": "assets/mlb/headshots/686948.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686948/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "046580c9b0626214bfdd512b96dd8f25ff53095846b13038ea5a886315628130"
  },
  "MLB-676551": {
    "url": "assets/mlb/headshots/676551.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676551/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2d9775c708a6ec5f49c7ec509b4afd5673890e39aec0040ba8b5d973a15b2355"
  },
  "MLB-682674": {
    "url": "assets/mlb/headshots/682674.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682674/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e0b9f158d25215840812d7f54858ce1d01c0d9c4e68d49bbfb28044c28e24cac"
  },
  "MLB-608718": {
    "url": "assets/mlb/headshots/608718.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/608718/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7fe5a305a4080bed0766c7156086c94c55246a47361097e203d35367d9dfc7cd"
  },
  "MLB-669276": {
    "url": "assets/mlb/headshots/669276.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669276/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "905ff9ba1f29e8adbb1c10fb81eca76cf5b309584215f2e61794c61879020093"
  },
  "MLB-656550": {
    "url": "assets/mlb/headshots/656550.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656550/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e1293db19c049fe4866e8714c41526ec072554f70bbd97a1f73cb07b46b7d653"
  },
  "MLB-519242": {
    "url": "assets/mlb/headshots/519242.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/519242/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bed30c8b3e5282bf73373dbc2284db62895e3bece9b0608ca1d7dc1cd91e7aa8"
  },
  "MLB-642715": {
    "url": "assets/mlb/headshots/642715.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642715/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c4b8e9609780b53300d59bf5f943ea0442a048a94df3ed9e1fd4e75850b687de"
  },
  "MLB-673490": {
    "url": "assets/mlb/headshots/673490.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/673490/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c3e523750f3fd3b02dba3c87991b14e43edc034a3fbed5e79ac643ac932323e7"
  },
  "MLB-643289": {
    "url": "assets/mlb/headshots/643289.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/643289/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1ab8125b08d6ab7b5aec1b48612da9acb434d6004cf8605c35a96f7736e60afc"
  },
  "MLB-666214": {
    "url": "assets/mlb/headshots/666214.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666214/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3c0de18fd727b5fce3d45e20ae4b22268b2e2720666932271a948c8842917f07"
  },
  "MLB-800311": {
    "url": "assets/mlb/headshots/800311.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/800311/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0c6403b4ac609065ed56ffd552bb42834a419bee22d9c4f89af0262e7686ecf4"
  },
  "MLB-657041": {
    "url": "assets/mlb/headshots/657041.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/657041/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fd8c6276a3a8f514d37e0f895613a00b5155cd2f7d61f37596a41de3e74c8ea4"
  },
  "MLB-621566": {
    "url": "assets/mlb/headshots/621566.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621566/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0afc494fe30a459833ba35a3838f8bed7e3a46e1427691f93aff9d9bef7963ce"
  },
  "MLB-671739": {
    "url": "assets/mlb/headshots/671739.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/671739/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b8e7b6743edf4eedca319435f5d1d53864b403621f66b1cdda0a822cd8eb1fba"
  },
  "MLB-573262": {
    "url": "assets/mlb/headshots/573262.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/573262/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3352565332070103e735e042a762310ace491ba4168d71faabfb37861df651a4"
  },
  "MLB-689266": {
    "url": "assets/mlb/headshots/689266.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/689266/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c371f4201f3467a2b8d7573d935a4cd660101ece3e3d95d60ec77c9590275213"
  },
  "MLB-645277": {
    "url": "assets/mlb/headshots/645277.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/645277/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "45772a1d9e665d6818e4785bce3bb4eea77aa79aaeb40b34bc069f43eeca64d7"
  },
  "MLB-628452": {
    "url": "assets/mlb/headshots/628452.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/628452/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bd76c2600c106fceee995c946e0ccfd490580b3640b79c7d435d4d8524ddbd77"
  },
  "MLB-642133": {
    "url": "assets/mlb/headshots/642133.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642133/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "638cf2cbff1d8485f538899e702a8f915d4d137d51c3a5aadd81625c86cfc9ff"
  },
  "MLB-694376": {
    "url": "assets/mlb/headshots/694376.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694376/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2d614e4ce6e7ddaf840e216750c7d5d9691f6127319dda90cd7c4d18a8ebe8a3"
  },
  "MLB-663158": {
    "url": "assets/mlb/headshots/663158.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663158/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1f9b2e079fc146e3aa519daed639a3d6a9f2c6545d6289ed3c499333da765886"
  },
  "MLB-660670": {
    "url": "assets/mlb/headshots/660670.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/660670/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "22b9982f515c41e409b020a9f8f14c83b2add88e0882ca63439bfd892b068437"
  },
  "MLB-702275": {
    "url": "assets/mlb/headshots/702275.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/702275/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b454d0afd8f853783172f7daaa7792c476e7091af4b3633a6bc3364e45ce6b21"
  },
  "MLB-669221": {
    "url": "assets/mlb/headshots/669221.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669221/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a87dc02133f219966850b336e7b9527399b5b986d9a5498a21261558a7885c7f"
  },
  "MLB-641816": {
    "url": "assets/mlb/headshots/641816.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641816/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "604cee02283fb7b87439c0b8ec833f7e9b23bd5ea38373f7af6b981cbf808b52"
  },
  "MLB-682989": {
    "url": "assets/mlb/headshots/682989.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682989/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "789d414d80972b08fdf4581a0cfb83a343ed010f50ae3be4332d39055cb6d23e"
  },
  "MLB-678061": {
    "url": "assets/mlb/headshots/678061.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678061/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "adc61bb6e8681da4d94d588b336cec248b758a2e2aae12e1f40e19d51f77f0bd"
  },
  "MLB-682663": {
    "url": "assets/mlb/headshots/682663.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682663/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bc3b243aa990a37cceb322a31b5583da0d7c9547c85a8d7bcb86a911065698a9"
  },
  "MLB-677053": {
    "url": "assets/mlb/headshots/677053.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677053/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d9bd76c9582907a13fc0e9b486d7432d3045828f5a8cc72ce4eb00c496250183"
  },
  "MLB-687134": {
    "url": "assets/mlb/headshots/687134.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687134/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b1beed15ae5b7e001487897779bd98ba4ae60062216c63626d5f2d9d4ffe1863"
  },
  "MLB-675911": {
    "url": "assets/mlb/headshots/675911.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/675911/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "53ee7130fa0f624b224378d365e724f752a7e6422f29b034afbd21b8498a74a7"
  },
  "MLB-640459": {
    "url": "assets/mlb/headshots/640459.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/640459/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "37a526d67a16d9088a332e9624db1880067ffd2e2d5dac8594dce6ee458867c0"
  },
  "MLB-806188": {
    "url": "assets/mlb/headshots/806188.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/806188/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "288a824f8e48e0575382c2b776f2fe76fdf18a880cfb808e9d940b1f9fa821b0"
  },
  "MLB-676534": {
    "url": "assets/mlb/headshots/676534.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676534/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "081b6109b0bf6afb2df28ab1ee438d86998c599065f757f024b74bb563a4419d"
  },
  "MLB-669622": {
    "url": "assets/mlb/headshots/669622.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669622/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "84af2111978643d0b38d4654556113b1d9801699a1f833bf6b55d92f3fad61ce"
  },
  "MLB-691277": {
    "url": "assets/mlb/headshots/691277.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691277/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2310fe61e9b41e91a33a1531c567bb75aceb1b866af19aad5232d5e67d774749"
  },
  "MLB-688363": {
    "url": "assets/mlb/headshots/688363.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/688363/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d85d1e81769597ff624e1416359be79527e9eefdc6a900cb923befc965bb6860"
  },
  "MLB-805300": {
    "url": "assets/mlb/headshots/805300.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805300/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7def779eaec878069138c4f8e0483412a42893aff52d7795ffffe8342bf8072b"
  },
  "MLB-665052": {
    "url": "assets/mlb/headshots/665052.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665052/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "29327b0dd91b5eed98b0581f0bb49c2f49b5b0d4d9b690241ed76704c6b8f23f"
  },
  "MLB-681715": {
    "url": "assets/mlb/headshots/681715.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681715/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0ab46c4e7c5adbac34814c4d9676125ff1768d61a6eef7de7bfb78e58bcf9450"
  },
  "MLB-691858": {
    "url": "assets/mlb/headshots/691858.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691858/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d345e5699f2f9bcdf5679316e2001a71944a9520aeb7e5965e7cb697cd14611d"
  },
  "MLB-676083": {
    "url": "assets/mlb/headshots/676083.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676083/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6a9c44a903476a2a80e84cd5262ca9517c6c07c0be44959569402fff9ab47d43"
  },
  "MLB-690978": {
    "url": "assets/mlb/headshots/690978.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/690978/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "788b576e1fb5838c02672fc3937e8de7a513d78f71ce6380ec8ef7c996e62029"
  },
  "MLB-680885": {
    "url": "assets/mlb/headshots/680885.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680885/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "23b67f5683f109a56e524c6d6cc1ad91f43c2d6dcfd27ff2c3bdaaed0049f257"
  },
  "MLB-691587": {
    "url": "assets/mlb/headshots/691587.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691587/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a737abe29b3b99b2852f348cf723a053d30cfda50465830ba3fa8cf9aeea0e6c"
  },
  "MLB-694795": {
    "url": "assets/mlb/headshots/694795.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694795/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cf88a763e2ccdea07be2531fc202861a9bb1f6895148684a14f83770e95a4baf"
  },
  "MLB-672640": {
    "url": "assets/mlb/headshots/672640.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672640/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a324fc3c29a3b57a957cad129c64b28ec252e7cbf716d53ff300c66c532acb16"
  },
  "MLB-676974": {
    "url": "assets/mlb/headshots/676974.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676974/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "09fcf1f2d51e900ed4fd40b7c9177707f5410adf03a3fef0963da35c47b9c45c"
  },
  "MLB-656848": {
    "url": "assets/mlb/headshots/656848.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656848/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7baa848bcf7e7d80ad95acdf0fb8480b677123c7753b3c45063a8dae29392396"
  },
  "MLB-691594": {
    "url": "assets/mlb/headshots/691594.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691594/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "00d606bc4ee8a2ce29c90b02f2b5eb5b0557b4b5e8cc74a435419f697433a9ad"
  },
  "MLB-669065": {
    "url": "assets/mlb/headshots/669065.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669065/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e95fb8adce78a803503f5786d220e77a043159ecfb5cbf4dd4f3319132d93b0b"
  },
  "MLB-664126": {
    "url": "assets/mlb/headshots/664126.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664126/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "549983e475a12240b0b7c2236e822331a2ecaef4f88190e1fd3941db914c7e93"
  },
  "MLB-683357": {
    "url": "assets/mlb/headshots/683357.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683357/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6f842fc10ddd4a631cad8b5fe561e7d7c3cbafc0c9331b0af471d64963db49f7"
  },
  "MLB-667652": {
    "url": "assets/mlb/headshots/667652.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/667652/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7d6eef5b5e4709eb0a44efba6dc9356587bcde6fe0b478a44a138d644daa2f2d"
  },
  "MLB-676604": {
    "url": "assets/mlb/headshots/676604.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676604/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cc32d3e9aca131dd6463ae2348d36c9dae85eed4ab45d739b0bc60790b644c21"
  },
  "MLB-665923": {
    "url": "assets/mlb/headshots/665923.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665923/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "40e2924fafdfed58b34b201f4fd01f31e6ff1b120b31f206bae931c957a7895b"
  },
  "MLB-678692": {
    "url": "assets/mlb/headshots/678692.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678692/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a1d11a384512bbb17c3160475d7ff469f2edfbf60eb09ac158a89747b131d0d7"
  },
  "MLB-645261": {
    "url": "assets/mlb/headshots/645261.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/645261/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "997a465272949abfdd7290b2f9c1fee265d0e3b99b51c3a52ff3a1e6a519ea55"
  },
  "MLB-663969": {
    "url": "assets/mlb/headshots/663969.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663969/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d8e85dde97ea9e513f052d2f3a185081aed15c09edadccc314d0e87e43ea4167"
  },
  "MLB-682790": {
    "url": "assets/mlb/headshots/682790.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682790/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9ac9a44a0de70d03b68d2f5d29d6cab2b54a9bcce611d4c7ec258924fdcbed8b"
  },
  "MLB-691788": {
    "url": "assets/mlb/headshots/691788.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691788/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fd3213313a83c5d2b56564a4168df82c5c5c368c23c5f7492b0aeabdcc67eec1"
  },
  "MLB-681810": {
    "url": "assets/mlb/headshots/681810.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681810/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4b542b1f928b27930e0d344f4a25d1bbd3f962f7a15b028d2f87aecaf94bc8d0"
  },
  "MLB-687473": {
    "url": "assets/mlb/headshots/687473.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687473/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a91ae2762c71b6ee56bca900598d2d6b4d29da5f0917e231cbd305b51a9a619b"
  },
  "MLB-683146": {
    "url": "assets/mlb/headshots/683146.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683146/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9c842fa1f32f8ab48a99581b06b395cb444ad1e6be7a61839bfcf1baaf17c8ce"
  },
  "MLB-680767": {
    "url": "assets/mlb/headshots/680767.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680767/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "872108cc79f5ee545dad6b528f6dc2fe855dc90ec0d62a88279df22e71ade121"
  },
  "MLB-701807": {
    "url": "assets/mlb/headshots/701807.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701807/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "39b062bab196b162db0d9b2f205946dc3662eb07ae2df0ff7b0475ed31ba4537"
  },
  "MLB-672335": {
    "url": "assets/mlb/headshots/672335.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672335/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d2ceef19b0cc7f0a207941b143071c60ef7706edf99cec72ac41aace8f4412e0"
  },
  "MLB-694646": {
    "url": "assets/mlb/headshots/694646.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694646/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "30583897431333f176901af1921739029a43d864f5b516f3ba815a3ac4312782"
  },
  "MLB-681035": {
    "url": "assets/mlb/headshots/681035.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681035/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1345822683a06baea3d57e7ee433995fd28e5b91bbf075fc753ffe3682392c44"
  },
  "MLB-805999": {
    "url": "assets/mlb/headshots/805999.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805999/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c163c0035dfeef8294d60f77e4dd1f6edb7f4555eb997029def80f9f44f05b6d"
  },
  "MLB-666624": {
    "url": "assets/mlb/headshots/666624.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666624/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5cde1e4630e5895f4a216e4ba356ca95c5c2ea9592121d19317deab65cdd11b9"
  },
  "MLB-666182": {
    "url": "assets/mlb/headshots/666182.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666182/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f38f2be29f9c55273807298afce8aee61701a652181cadb44be0bebc1155d4a2"
  },
  "MLB-673380": {
    "url": "assets/mlb/headshots/673380.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/673380/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5dc3899e2c949619976f370d30a2a26165c4f1e0ffab7f36e277b432a4169eb7"
  },
  "MLB-642207": {
    "url": "assets/mlb/headshots/642207.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642207/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7238f4156ac96c3309b80cab98ca4e65292f47c627927fda036eccdf349df593"
  },
  "MLB-682626": {
    "url": "assets/mlb/headshots/682626.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682626/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ffdc0c27ad052875289bd42d283d3e27bb3aea3f5fc1f3d9dcbe794f1cd24e86"
  },
  "MLB-593871": {
    "url": "assets/mlb/headshots/593871.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/593871/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d4f2d73081ad313835b25b077f29496c10e9b9551d38ecba5c0dd61dbdf00798"
  },
  "MLB-596019": {
    "url": "assets/mlb/headshots/596019.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/596019/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c5de07522dcee88fea01736c61d22992a51b8d4459d885cb0df5363349f37585"
  },
  "MLB-676724": {
    "url": "assets/mlb/headshots/676724.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676724/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2d2cec08391ef964c7fc788aaecb4621bc26f5c875a889a54501b41a2a029d18"
  },
  "MLB-804636": {
    "url": "assets/mlb/headshots/804636.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/804636/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "104df2fabee42ddd74fbabee0609992a188bff6c499a591f7295fde9e9d93101"
  },
  "MLB-669364": {
    "url": "assets/mlb/headshots/669364.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669364/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b0325f8f5cd66d6b55a7a764d93d79fd64a433221dab767f9246cabf91da8388"
  },
  "MLB-665742": {
    "url": "assets/mlb/headshots/665742.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665742/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "60f7c39f28dab04351f2e8c721e9e139be13a636899208478d01224c61ab24d5"
  },
  "MLB-663795": {
    "url": "assets/mlb/headshots/663795.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663795/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8d9a5f2a547536f54d35717bf2bb52ca5d06d1dacb85070c3bcce6b1cec235ac"
  },
  "MLB-673540": {
    "url": "assets/mlb/headshots/673540.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/673540/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "315d401336a8b4ae5d0afbf9aa4a9273de471825e07316f767218c5270d5caf2"
  },
  "MLB-620443": {
    "url": "assets/mlb/headshots/620443.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/620443/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3565f50317ec4fa2f51ac1e8b59f218ca430d78fbd6447dbb7cb3f11de69fd0d"
  },
  "MLB-665506": {
    "url": "assets/mlb/headshots/665506.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665506/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0dba34e8e586870fbb10bdd912832f2257440f73d05d8689d679477789f7b244"
  },
  "MLB-642376": {
    "url": "assets/mlb/headshots/642376.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642376/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a6c9e68e88d51d012e284cea935e7fb390f93b981ec6255c775014dae91b4cf3"
  },
  "MLB-668901": {
    "url": "assets/mlb/headshots/668901.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668901/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "094dd304ddec6451e318d5b994a3142fb74be5581f82c4a20d0804961b2c67fd"
  },
  "MLB-681320": {
    "url": "assets/mlb/headshots/681320.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681320/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5b36f86b54a53d4233de1517e5c1e63b01a1bc186bb71cd3b75fec4a5f79983e"
  },
  "MLB-703492": {
    "url": "assets/mlb/headshots/703492.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/703492/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "94f643dcd593f6c71c144615afaf64687e36fd9b13257029967481df41bb510f"
  },
  "MLB-690997": {
    "url": "assets/mlb/headshots/690997.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/690997/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d76caa56e8d9e74fb3053b7d8b1ce241c4a6ef61a4dfab2d19db30e61675cabb"
  },
  "MLB-476594": {
    "url": "assets/mlb/headshots/476594.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/476594/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "306de3149e3ee85a55fca03c870c2979038810e23a96748f37e39ead8e05c767"
  },
  "MLB-677595": {
    "url": "assets/mlb/headshots/677595.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677595/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ea79b31e59f39773b0dc982a0f0ee1456a51283e52687bf0de149d967aca2f0e"
  },
  "MLB-640455": {
    "url": "assets/mlb/headshots/640455.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/640455/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "593076095325ee59481446c92df9985c7f1c3e05314340c2426a1aee81dc36bc"
  },
  "MLB-668964": {
    "url": "assets/mlb/headshots/668964.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668964/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b2b28ba7d6c99c3bc775498be564cff97f446418494f0bc43b2df3297b25492a"
  },
  "MLB-656731": {
    "url": "assets/mlb/headshots/656731.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656731/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "99c0d49f268dec281db4817d4ce161c382eeb2232daeb4503d81223021555116"
  },
  "MLB-543760": {
    "url": "assets/mlb/headshots/543760.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/543760/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fc87d3884563956b5c40f6aa681b0dc435d7d6cb1d9d5e7da78dd302dcfb0f82"
  },
  "MLB-605400": {
    "url": "assets/mlb/headshots/605400.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/605400/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a71bf352e409032e68ba3e1b77c3b2972b379a08ca4be0326c75ec9424cbc1e1"
  },
  "MLB-666969": {
    "url": "assets/mlb/headshots/666969.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666969/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0307e375fe1bc0d03edd14294ff33db3d5c5133f38e2485dada9ae8303738fad"
  },
  "MLB-657585": {
    "url": "assets/mlb/headshots/657585.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/657585/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "edf4b17d7567a9e2a1bc3765b9ec8f7103a4689084e523ab7236d711004ddc5a"
  },
  "MLB-686934": {
    "url": "assets/mlb/headshots/686934.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686934/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1b55bd253aa06db4261e246c9f7b29664873530d000fe0ab6cbcfca3b1deb602"
  },
  "MLB-664761": {
    "url": "assets/mlb/headshots/664761.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664761/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "90fab99c137ed02e3e24ee2989bd8b7bf71b1707fcf503bd960a9bfae8c4ee26"
  },
  "MLB-681082": {
    "url": "assets/mlb/headshots/681082.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681082/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9973172b592bc22e3b41d9c348b7e1a76a5a33147f64bb1ed06cbb48606b2422"
  },
  "MLB-804267": {
    "url": "assets/mlb/headshots/804267.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/804267/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e37b8febeb4d5316d09b302488ced86ee39abfc16eb0333e4cce85baeab26328"
  },
  "MLB-650559": {
    "url": "assets/mlb/headshots/650559.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/650559/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a184916ce4adfa73a7c7ce5ffe6d2a848f24074cc65bc7f3944bf0920901724c"
  },
  "MLB-668873": {
    "url": "assets/mlb/headshots/668873.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668873/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "41ad758db6c875e4637897f6ac229a19ec99c23d56c8dfb1d312fd4bbc0987b5"
  },
  "MLB-663767": {
    "url": "assets/mlb/headshots/663767.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663767/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "79bbe71a6a87436b5780ad8368dab3fdf725287604f4a730d8747cb0efbcc196"
  },
  "MLB-691725": {
    "url": "assets/mlb/headshots/691725.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691725/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4bb17ff5ae3d02684e48988df2a3890e40b7338aa21367e378d1287868e42356"
  },
  "MLB-656537": {
    "url": "assets/mlb/headshots/656537.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656537/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4fb495857a2dd352a7dcce717199c49e7476543125b19f7500f996c5d75e8ddf"
  },
  "MLB-624641": {
    "url": "assets/mlb/headshots/624641.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/624641/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ba38a059afb7112323061b7bbba566e8d00627ae878e9d94dcf13b5a5bfd067b"
  },
  "MLB-641745": {
    "url": "assets/mlb/headshots/641745.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641745/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "73da0d0ac58af27fb80bc257edb359ed7cd82ac13f7b5249a5f131a442c2fa0b"
  },
  "MLB-669016": {
    "url": "assets/mlb/headshots/669016.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669016/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "89cb3489ed3a99d0a0d038d150b0eaf9346a280b2309bca4bde2e64193522c3c"
  },
  "MLB-680742": {
    "url": "assets/mlb/headshots/680742.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680742/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f128ce66368c5939f0aacd3e1df55c151c043038ad5e0634e643ad8d83456fe9"
  },
  "MLB-547180": {
    "url": "assets/mlb/headshots/547180.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/547180/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d429203ed768eb66654f772ada10b697aa2767b2ae4f2ded305243e09378845a"
  },
  "MLB-596117": {
    "url": "assets/mlb/headshots/596117.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/596117/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c2bb912abd5781134f7733e3d83b69356b779253f172628cfd948db715d37082"
  },
  "MLB-621237": {
    "url": "assets/mlb/headshots/621237.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621237/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "adf6408d5ef67ba6dce5e6a235f6f2ad18f38276713feb2f9d98e30ab5963f6f"
  },
  "MLB-650911": {
    "url": "assets/mlb/headshots/650911.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/650911/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a723b15aafa0c31eebc4a79da0cea38eb8f47f2e16f9fc4f7aed01efd013211f"
  },
  "MLB-805249": {
    "url": "assets/mlb/headshots/805249.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/805249/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cd806eb0f8f9ec4e7161a23e4264708380b24d59091912694f8303e5eb4fcdd4"
  },
  "MLB-665561": {
    "url": "assets/mlb/headshots/665561.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665561/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b1949b4ba7006d764166d539a10fc510577c9045a48fbc9ecca20ad57e65b72b"
  },
  "MLB-592663": {
    "url": "assets/mlb/headshots/592663.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/592663/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "49fca10a8e4324a3c295514a72572c2212e146dd6cda880353e07a0c817ac1ad"
  },
  "MLB-641835": {
    "url": "assets/mlb/headshots/641835.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641835/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c75735428ca9f72e2f1559934ad02737470f2dc743e324b4ebcb3a5d0842cdc4"
  },
  "MLB-666200": {
    "url": "assets/mlb/headshots/666200.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666200/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4f2c394b2734bf9d2b695c3ea6d517010c02e349ffa8ccfb95143d8a97a80adf"
  },
  "MLB-661395": {
    "url": "assets/mlb/headshots/661395.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/661395/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "eaa06b586618141582776e0136adecc6fc4661cee235b73e361b1f7ee6d40ce3"
  },
  "MLB-607208": {
    "url": "assets/mlb/headshots/607208.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/607208/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "584d227b79bb6a52dd2f26bb41086ec805eb7e14ce1db9eb29045c9475eed005"
  },
  "MLB-554430": {
    "url": "assets/mlb/headshots/554430.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/554430/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "78e4b0e06f799a38037358bba61037f74b5a2e5f743d56feab3a0a86aa5d4ea4"
  },
  "MLB-665953": {
    "url": "assets/mlb/headshots/665953.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665953/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "75fef71d600320de594ac5b830a35ed1b22497a719d7711ae2edc8497b7d88d7"
  },
  "MLB-656941": {
    "url": "assets/mlb/headshots/656941.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656941/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a0d3f1a09a7b597d49b38ad5b4f73cdf0764ed006500e116e25503b46e6bb80a"
  },
  "MLB-674841": {
    "url": "assets/mlb/headshots/674841.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/674841/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fc66bf17bb0a006d2bacd5395daa4d63e2473a0b895967f0b7990f0c5d77b057"
  },
  "MLB-702222": {
    "url": "assets/mlb/headshots/702222.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/702222/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0137b1563b16427d2c918600b051b266bc90a735299d2db6d9c0a30cc9583992"
  },
  "MLB-695734": {
    "url": "assets/mlb/headshots/695734.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695734/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "211a4ce9946c5175d78580375406e7d5cb9a8f4995cf083f04b5f00eca3b9b80"
  },
  "MLB-621383": {
    "url": "assets/mlb/headshots/621383.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621383/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "df0df7f8e48316924590de721a922a84987e1e7606355db22e9171e7c7d463e4"
  },
  "MLB-676917": {
    "url": "assets/mlb/headshots/676917.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676917/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e5e6b3538b1b00567f5fbc05e51bd41e3b8b45f9592d1572fb32d4b46a7da349"
  },
  "MLB-682928": {
    "url": "assets/mlb/headshots/682928.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682928/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "95e10a3356d4400efcf6dd01ea4c270c06166fcd6c110e52b4c77bc8df127807"
  },
  "MLB-813349": {
    "url": "assets/mlb/headshots/813349.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/813349/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "85a72bbf62d07634b83d2d6942d884d97383f3a3f245701423ba26f5614da61d"
  },
  "MLB-687792": {
    "url": "assets/mlb/headshots/687792.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687792/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7ac58c10bfdf6e0e0f0f7736cb6378f6e3ed7147441c01abfbe52ef6e279e904"
  },
  "MLB-694673": {
    "url": "assets/mlb/headshots/694673.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694673/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "399b17ee9d79237f08a7d20bab347a9fe0fd031cd6af4a0905711f33038b8e7d"
  },
  "MLB-686611": {
    "url": "assets/mlb/headshots/686611.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686611/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c223fe7e7dd23d822b67d85ed292adf435b631a5c3e66bfa6633219cff9a05cc"
  },
  "MLB-695418": {
    "url": "assets/mlb/headshots/695418.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695418/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b1c0508953962b6d49c663cff50e3cd0e2d8a013fdd315016ee88d228c495e75"
  },
  "MLB-680899": {
    "url": "assets/mlb/headshots/680899.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680899/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "24aee86ca21a02d02966b8e05caf79e7e20ba34a697f98e3cc891be485e82c33"
  },
  "MLB-691781": {
    "url": "assets/mlb/headshots/691781.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691781/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bb75629656d6bdd7d3e17d66a20d1ed3a36ae9f0a96286b489bc9b3a48f01428"
  },
  "MLB-681402": {
    "url": "assets/mlb/headshots/681402.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681402/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "58c7c09f6a6f136cffbfbb32766203b3967b8ed7c3826b5a42f55cb64bb2ad9c"
  },
  "MLB-695670": {
    "url": "assets/mlb/headshots/695670.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695670/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "64f8ba9695529ae2b8bd08295717f7e9b244d9df3434a9d7121bbf7b39b85869"
  },
  "MLB-695378": {
    "url": "assets/mlb/headshots/695378.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695378/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "986eb52bd5cf8b2fe32e23f1c837ffa7484704e6e5dbe685d278e0f9d2379799"
  },
  "MLB-660688": {
    "url": "assets/mlb/headshots/660688.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/660688/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bc5d521b33e5206f7cee8d09b37f80a598d0a5dee2c892bab36785ecf0d856af"
  },
  "MLB-696285": {
    "url": "assets/mlb/headshots/696285.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/696285/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ebfbccbffdc6beb47000669e7f1e7506f55b6b4811f094e450d0a5eaa850f0c8"
  },
  "MLB-687377": {
    "url": "assets/mlb/headshots/687377.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687377/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "016f3bbeffb2839d0fa032d55207ca8858dbf512ead4bd2e96eb3ec848e8ed5d"
  },
  "MLB-663623": {
    "url": "assets/mlb/headshots/663623.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663623/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "76b11fb5dc0d4695ad217b179b22bf0efe54bc278ea144a1ec3508bff0151305"
  },
  "MLB-695578": {
    "url": "assets/mlb/headshots/695578.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695578/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7dca883bb94e973caf23709befc47a4822da9ab12f3c39f63f7d447cf34948a9"
  },
  "MLB-680686": {
    "url": "assets/mlb/headshots/680686.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680686/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4f7e1a8156adc827fc94b143dac6a83c325764403e208d4f41d4d9e678da0dfe"
  },
  "MLB-676571": {
    "url": "assets/mlb/headshots/676571.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676571/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d82e5c713d25c613c1459de35ff02dbdb1f2a37de357cb21c18cbd177cf83b81"
  },
  "MLB-683000": {
    "url": "assets/mlb/headshots/683000.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683000/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5d7e2929b877dfd933e768745fb92776df6764b7adf3b27a7178d57d925361c0"
  },
  "MLB-691002": {
    "url": "assets/mlb/headshots/691002.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691002/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "165fbba16d5aa41e6841baa8b710d0ff5f881727416f3fc5d803921ae51a564e"
  },
  "MLB-672442": {
    "url": "assets/mlb/headshots/672442.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672442/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "46bd774bb21c9acda78461e8f89691415318282e6731e764d8a027cc0d816b3c"
  },
  "MLB-683083": {
    "url": "assets/mlb/headshots/683083.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683083/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "dfd0160c3bcb8147aff1a79b2092a9a5c84e7d8f4d20661cc57441f12191b99a"
  },
  "MLB-678391": {
    "url": "assets/mlb/headshots/678391.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/678391/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1f122ef0030f6c8e9c9f0956dad20454e206d7b1290d1cc3bd2fc489e0549bd6"
  },
  "MLB-650644": {
    "url": "assets/mlb/headshots/650644.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/650644/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "439c508a3e80bf761f6b8ea29b3b9d775caebce57e36ee5debaa81f4ccf42ada"
  },
  "MLB-608348": {
    "url": "assets/mlb/headshots/608348.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/608348/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "eb10e8fb9fdfe283b12357115d4d5730e53b5ccb0e59f005cb68d8de43ad6481"
  },
  "MLB-608324": {
    "url": "assets/mlb/headshots/608324.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/608324/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "089e9dd56db7a946a6a020eb5d9847b959ab2c7165afb3f9569209931ddc8bba"
  },
  "MLB-663992": {
    "url": "assets/mlb/headshots/663992.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663992/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4df60774ee15a5e4e77ce954fbe72ed114c0ed3d97f7d7ec45cc3716ce210939"
  },
  "MLB-676962": {
    "url": "assets/mlb/headshots/676962.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676962/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "124f833ee1655d81e40752ccd08949b1de23a9ff93943172075e3e33aa054f28"
  },
  "MLB-702021": {
    "url": "assets/mlb/headshots/702021.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/702021/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ba4983653cc1d466b1ee37412672d6516326cf86b33adf632acbc6b31eb90cb7"
  },
  "MLB-690990": {
    "url": "assets/mlb/headshots/690990.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/690990/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "77d98117463857e7b0671fb974b3e4877a117c3cf77b6e6fa0d38a4d198d263a"
  },
  "MLB-607067": {
    "url": "assets/mlb/headshots/607067.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/607067/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "66de668995d96647165d0edab65bd588dc3b55d75949a1bc4ce273f0fecc8864"
  },
  "MLB-694037": {
    "url": "assets/mlb/headshots/694037.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694037/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2c990abd71b023a298cf35613529a213588c00a23368c170f06bf803940ba700"
  },
  "MLB-621020": {
    "url": "assets/mlb/headshots/621020.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621020/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e1ae0d41858ccbd590c44a55b1c30dfa8ef88ca7038d84b104182209e325ae37"
  },
  "MLB-664023": {
    "url": "assets/mlb/headshots/664023.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664023/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d5dbfb25ce3f9e1f0dfd12daf679bc4de135fbc815893757bf60df2ebb1ca1ec"
  },
  "MLB-656849": {
    "url": "assets/mlb/headshots/656849.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656849/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b71ab20b0a0d8154be07916dbf6726a37326dc25919551406192ce739bd10b0b"
  },
  "MLB-592332": {
    "url": "assets/mlb/headshots/592332.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/592332/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b9481fc47b7c5b092f0d2c28e33b7263d587d621cb3d4869931b11cc9d7c2ba4"
  },
  "MLB-665871": {
    "url": "assets/mlb/headshots/665871.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665871/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "97e517b48d44046a04f03b860a3135822ba265ddb487e8724d466abbf0468325"
  },
  "MLB-657097": {
    "url": "assets/mlb/headshots/657097.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/657097/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d2675b4cf2d7d2c3568fded4edc957a38b566773b3b3fb2343c007f39e33fe7e"
  },
  "MLB-807713": {
    "url": "assets/mlb/headshots/807713.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/807713/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "07d6829f2e950daf570a08d81bcb93cd1a7bd56919fb02d53b76980d0e7d7ea0"
  },
  "MLB-571510": {
    "url": "assets/mlb/headshots/571510.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/571510/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "edb22a0316bd9e3154933ffd2d0d26dcbb0131e7f77047032100a4006a13f2a4"
  },
  "MLB-683737": {
    "url": "assets/mlb/headshots/683737.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683737/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "48601c31afa0a4f2d5fbb87aa1b24e32ac0c75838777f75bef92ef470127a4a6"
  },
  "MLB-672356": {
    "url": "assets/mlb/headshots/672356.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672356/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0421f3bb2ad049e6c22bbaf82538f62bf5ec9030ac45c8bff617767b08cf5f56"
  },
  "MLB-624424": {
    "url": "assets/mlb/headshots/624424.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/624424/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c31cb2b40e437a91380a542a62a768ea2dfa4c48e9936e4d884897758edf379d"
  },
  "MLB-663538": {
    "url": "assets/mlb/headshots/663538.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663538/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "67eeec2da029db0625684f9c40af90f9a0595d41319ae0f284af13f0b4bd9617"
  },
  "MLB-699393": {
    "url": "assets/mlb/headshots/699393.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/699393/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "533f9abca1d47db7f07ec7cb2ea5ba5a5e68fd066d26c1e1fc45b44be4569546"
  },
  "MLB-605280": {
    "url": "assets/mlb/headshots/605280.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/605280/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c837733e583946be6e0292c1e16841d7322bf3555fbeddfae78116f68854afc9"
  },
  "MLB-677588": {
    "url": "assets/mlb/headshots/677588.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677588/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b4e8005e1559658ced6f981d59bcf8ef5792ec697403bf9e15954df48c991d61"
  },
  "MLB-664208": {
    "url": "assets/mlb/headshots/664208.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664208/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e2cb363110cd26973fc4bf059a82f1177e18780697d7fe586c1733e7b99d0bb8"
  },
  "MLB-669020": {
    "url": "assets/mlb/headshots/669020.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669020/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "08ccb26acda9d71bf8984b6a07bcdd5378e077b14c1b7db4d24e2d76fd59d813"
  },
  "MLB-666171": {
    "url": "assets/mlb/headshots/666171.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666171/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ab80985c6c4f005f62ee992e479d98910ad4292e2b6852ae34e196ca9e918d39"
  },
  "MLB-680730": {
    "url": "assets/mlb/headshots/680730.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680730/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7803a59d8f8b8e206bca2ba473261dc442c60319123df4395af2d7784bb928c9"
  },
  "MLB-665804": {
    "url": "assets/mlb/headshots/665804.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665804/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "01286a541b66bd16da2c82df3a8e3af9376d41cbc17b9bc1da480c74077c231e"
  },
  "MLB-621438": {
    "url": "assets/mlb/headshots/621438.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/621438/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d7d9af23b92cca4592c606ca29aa294d9b71f06c89d5308b83684df65e10fa73"
  },
  "MLB-671096": {
    "url": "assets/mlb/headshots/671096.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/671096/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8b192247410309ecb3d8d0104a9c9e51f11f277f3cb282dc778f2a9c49baa873"
  },
  "MLB-691718": {
    "url": "assets/mlb/headshots/691718.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691718/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "71e29896ee8af8ec5639af480ee72ac12533baea4c17250864425b3d797ba1db"
  },
  "MLB-682227": {
    "url": "assets/mlb/headshots/682227.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682227/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8de7174959966a7f4399025f02eca1bb8fc6b6cca8575510b5908510bb1ba385"
  },
  "MLB-656271": {
    "url": "assets/mlb/headshots/656271.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656271/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7ef8ae769ead3504fb22e67d5f130dcf999a76c630c55a2f9d1bece60aa4b043"
  },
  "MLB-571946": {
    "url": "assets/mlb/headshots/571946.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/571946/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2fcfc01eb496b2489a1bc521e0b0a6b8cd2c2d283c8c0f0f9b8e5491b0945a40"
  },
  "MLB-686730": {
    "url": "assets/mlb/headshots/686730.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686730/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "de5475eb5b12b4bcfad0214140420c3246e97f27a7cff10e2fc9162c80f3d481"
  },
  "MLB-673548": {
    "url": "assets/mlb/headshots/673548.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/673548/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1488ba3c6f7caff8ad30b9bfa4f84fb06770c88dbcedd3be357d3d40b7ab0886"
  },
  "MLB-695505": {
    "url": "assets/mlb/headshots/695505.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695505/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "82bfb1f0d5fb1db29cdd89d251bc66ff1dc581d2510a9188d26dc598587e70d8"
  },
  "MLB-553993": {
    "url": "assets/mlb/headshots/553993.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/553993/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0f88e7ef6defd355ce148d7a7ec810dbf17192bdf27816656fcd744a123f650a"
  },
  "MLB-667472": {
    "url": "assets/mlb/headshots/667472.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/667472/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "14145e8e399485e9c38ea3355a3b50c0b6de0b04bc580868dcded47458647c5e"
  },
  "MLB-682829": {
    "url": "assets/mlb/headshots/682829.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682829/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "62a78c59d1b308ff90058a09ad5c3c33a57281f3684729a6df4239ee476f06c8"
  },
  "MLB-684007": {
    "url": "assets/mlb/headshots/684007.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/684007/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4c90c8f4a3dd140af8a5b68c22c256219e836991f05eae934b09bb96fcb502ad"
  },
  "MLB-641941": {
    "url": "assets/mlb/headshots/641941.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641941/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "029f7ab478adf94f5e72c3b301d657db11e3765e60f5f041980f679797508c16"
  },
  "MLB-663903": {
    "url": "assets/mlb/headshots/663903.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663903/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e81af03c0bd31a14cadee8b7c5fb1eeb77b716a97387ac29843676afa25ccdb8"
  },
  "MLB-668933": {
    "url": "assets/mlb/headshots/668933.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668933/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5bd19a6b03ea053627a8d9a82763c298b3c112d0c72faeeed4e70eef6c2cb01f"
  },
  "MLB-682877": {
    "url": "assets/mlb/headshots/682877.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682877/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fa99ba1f1c79434373cef8244b7b8ad5dfb3f932d1873a5e52e237a972b16075"
  },
  "MLB-624431": {
    "url": "assets/mlb/headshots/624431.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/624431/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2e3d2658ef9dc81b2f19e2222f9ea607029b2cbe2c28a94979aa6c4b664e2e45"
  },
  "MLB-682825": {
    "url": "assets/mlb/headshots/682825.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682825/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "80e7866b0b1f182fa4dac4743a3bf4bba127e0a90b2144fba600014da4224d4f"
  },
  "MLB-670062": {
    "url": "assets/mlb/headshots/670062.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670062/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e2490941ea1d49fcf8f1ec71c8564945c3a7c26a6e7bb476dd0a09478c2d650d"
  },
  "MLB-663647": {
    "url": "assets/mlb/headshots/663647.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663647/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "725bc4cae1dfbb0be232a4e35f7b5881b656766059c2da0fc2354331e5739379"
  },
  "MLB-699115": {
    "url": "assets/mlb/headshots/699115.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/699115/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "af97e62285949e4bbe229d29e45c0f0dd6660fa655c5c7b1859a8ac35e617ee6"
  },
  "MLB-668709": {
    "url": "assets/mlb/headshots/668709.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668709/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4e64fb275bd1a5096781f2330c16414eb938f16f257f4b828b638b8e4eaa9c7b"
  },
  "MLB-669911": {
    "url": "assets/mlb/headshots/669911.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669911/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "61a3a483de75a7fff46df9acb101f9f87d85274e83cf11e73e348b00ba57f34b"
  },
  "MLB-668881": {
    "url": "assets/mlb/headshots/668881.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668881/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d017a1c3cf280b1c0f2b95f62e95525345ee2fc473b637eca932817b398971f0"
  },
  "MLB-701398": {
    "url": "assets/mlb/headshots/701398.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701398/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "260c36d2400117c99181054547758567cd8e3ba1b9dd0d737e87d53f2686a45e"
  },
  "MLB-666157": {
    "url": "assets/mlb/headshots/666157.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666157/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "77e9b7fc02d1bbb1ebaed06a963cc53e0733a28590ce2f78ce5572c8ad938628"
  },
  "MLB-699302": {
    "url": "assets/mlb/headshots/699302.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/699302/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "51a008ac6c83d2fea52df3f2bbd51ec7b9e5b7f2a9c40f4f0d177c7d0feef446"
  },
  "MLB-572955": {
    "url": "assets/mlb/headshots/572955.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/572955/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b777cc3cf4c26c5348052a6a828cfec40bdc504d1be2a6f4243348a7e5198148"
  },
  "MLB-622088": {
    "url": "assets/mlb/headshots/622088.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/622088/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a8ec8e6226f264eceb1372bdbc9afbbd8c5a370983797c3148e6e9398780a220"
  },
  "MLB-685112": {
    "url": "assets/mlb/headshots/685112.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/685112/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7c6dea78374cae7a05757a23db2f1d170feceb5886fa3e6490b76f493cd92b78"
  },
  "MLB-680574": {
    "url": "assets/mlb/headshots/680574.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680574/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "65ec983c725e9f6bd0395f1d2b03a23cb2fcd885c1f3b5d086b1eb67ab4b4e4d"
  },
  "MLB-665828": {
    "url": "assets/mlb/headshots/665828.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665828/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0696b57a69b1fcda0b6922867200fee16bf3038976a7ef581e9dff44cdf824af"
  },
  "MLB-677943": {
    "url": "assets/mlb/headshots/677943.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677943/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "30de38e4469a984d23e49b2286e4c7c3020e6ce96404dbe1925aa664a138a814"
  },
  "MLB-695076": {
    "url": "assets/mlb/headshots/695076.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695076/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "739b180bd0687f6ebdf996086ecdd9dce100454e28b6490e282f431abc7bc0e9"
  },
  "MLB-676879": {
    "url": "assets/mlb/headshots/676879.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676879/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d8e21492d97e3be68e831b5884f8c3737b9dc9b31bb15878ac7022cae3c43f6a"
  },
  "MLB-668715": {
    "url": "assets/mlb/headshots/668715.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668715/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f44bb90a8aa9614600f343d26462020c760c8a9b9504006370386176aec58587"
  },
  "MLB-672582": {
    "url": "assets/mlb/headshots/672582.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/672582/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3084c63d25364113db43195725d952f5c240b05d6b7f939757c6d8bea00e20fe"
  },
  "MLB-622608": {
    "url": "assets/mlb/headshots/622608.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/622608/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ec916c6ae2058e2c83708853d14e039b020e5f527933111e7aafd7bf5c2e423c"
  },
  "MLB-663574": {
    "url": "assets/mlb/headshots/663574.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663574/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7bc57eee430073cc5ff7bd83f48cebd805ec3d3258899e4e0b5a37a82443c45c"
  },
  "MLB-605540": {
    "url": "assets/mlb/headshots/605540.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/605540/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "97501638a7e2c32492e2045d3af448970c8c90f75595116391d25516b8b47e32"
  },
  "MLB-668930": {
    "url": "assets/mlb/headshots/668930.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668930/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bad0f599c29a6775c07b552c055188f7a04c6da39cca1f9a2e31b01adb2b365e"
  },
  "MLB-663886": {
    "url": "assets/mlb/headshots/663886.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663886/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "56b91c7380f6d3b06458a475163527d12992e7a57790b5c0761c1bc0fd205a94"
  },
  "MLB-592885": {
    "url": "assets/mlb/headshots/592885.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/592885/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "17bf8adbe761f2d0fa015e0dfc666db09f1302fff0f0ed552722370662df5f6b"
  },
  "MLB-682842": {
    "url": "assets/mlb/headshots/682842.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682842/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9d5090ceb4dea759ac2a8876392b45aa6089d4f1cffb588b72b69c30acf6ac3b"
  },
  "MLB-806198": {
    "url": "assets/mlb/headshots/806198.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/806198/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9c93cffa50682763e836865d21f9f636faa27af74a1a0632bf607c965d62b767"
  },
  "MLB-694819": {
    "url": "assets/mlb/headshots/694819.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694819/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "acccd36fd8889b07e36b112c5d4efb62e60b7e689c1f95858815165bba4cd49a"
  },
  "MLB-666152": {
    "url": "assets/mlb/headshots/666152.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666152/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "10dc250449d56737de28c7550cefb167d62bcd418620ee182cf496feaca4e462"
  },
  "MLB-683734": {
    "url": "assets/mlb/headshots/683734.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683734/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3cea03c1960136d39054406d28be9255857ad9a1cac77f6b1fa69a9a3e9f8f5e"
  },
  "MLB-669084": {
    "url": "assets/mlb/headshots/669084.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669084/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b9fb7c44b29e3e2eab3ae942891df1659e90e95a94268a37b9a151141799f155"
  },
  "MLB-668941": {
    "url": "assets/mlb/headshots/668941.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668941/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d5449445cc7e987841596d793cf85f6a19a6519829bea2b31de6d7f151e636d7"
  },
  "MLB-669003": {
    "url": "assets/mlb/headshots/669003.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669003/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "90817eeb6604e40ff16bb6c47bec3d2bf6c0845a2a510f17ae325868dd43c985"
  },
  "MLB-669160": {
    "url": "assets/mlb/headshots/669160.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669160/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5b69b59774698f9badca02d8435d4d2702b71c5946cb76edfec13f1b1592bf8b"
  },
  "MLB-596142": {
    "url": "assets/mlb/headshots/596142.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/596142/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "87d848e68a4e79daa10e248ab84ffa93d20b9fcb446c67239d5772efa534a466"
  },
  "MLB-694192": {
    "url": "assets/mlb/headshots/694192.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694192/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fe92278f5e47ba66db6795a6494e99e991f8d81b8cecb7315e81a09b21d186f6"
  },
  "MLB-687401": {
    "url": "assets/mlb/headshots/687401.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687401/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8df94012848ad9888f66f5c6f7bb8f8de2067a0bca7b008d1cf2339de00973ef"
  },
  "MLB-690986": {
    "url": "assets/mlb/headshots/690986.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/690986/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "30b0b3dc769511622f15439ae7b33b801a0cc39c828a6317f59743229dd4c0a0"
  },
  "MLB-682990": {
    "url": "assets/mlb/headshots/682990.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682990/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "b235b53e1ed2715c2360da8a06224d9a59aef8787887ee7d1491459710472d55"
  },
  "MLB-688107": {
    "url": "assets/mlb/headshots/688107.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/688107/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "163cef07215bdb88b4c7aea2d52f599802a4ccff2ef1155416b77ef60a1005df"
  },
  "MLB-686217": {
    "url": "assets/mlb/headshots/686217.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686217/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "afd8691d1e2590b231e7eb6fd6d844056721322d792b82923feb986b8eca84b5"
  },
  "MLB-641343": {
    "url": "assets/mlb/headshots/641343.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/641343/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7da1a1d58162e4fcfa1834c819648728b20ea2c63f473642bd9e4f91113fee28"
  },
  "MLB-656730": {
    "url": "assets/mlb/headshots/656730.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656730/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "eb82f0e695c8dc3c07917ba50acbf17dfb27e1d1b204dea7ad11f31dc5941ca1"
  },
  "MLB-661388": {
    "url": "assets/mlb/headshots/661388.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/661388/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "9f26f3b7cfbcd1c78bd779f898c085c9ef172265ec77c4029a62df4dd8f6bfbe"
  },
  "MLB-677952": {
    "url": "assets/mlb/headshots/677952.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677952/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e9292adf9f59211fa1bc61b018fa96a641e3b8c955f12c96d54e1bfba47dc221"
  },
  "MLB-699008": {
    "url": "assets/mlb/headshots/699008.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/699008/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1cf46af1a19363c307e653a3fa12465103d6f3ac8ea27404aafa383cfe239684"
  },
  "MLB-701656": {
    "url": "assets/mlb/headshots/701656.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701656/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c7e6d5f1df664e2e3412b36e91f48af29ae74aa7899316acb0627e1e5d101bd1"
  },
  "MLB-685126": {
    "url": "assets/mlb/headshots/685126.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/685126/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "434223ae14790336d7aff143aed531838fb3c4198c4001e5f43a8ef57a2ee4a9"
  },
  "MLB-800325": {
    "url": "assets/mlb/headshots/800325.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/800325/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ca24fc590a18f60ef3b945a15891f22e0c2bf9fb568ffb1cf3781567b767b7c5"
  },
  "MLB-664040": {
    "url": "assets/mlb/headshots/664040.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/664040/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "577364e7d6acb6f71f0498fd60cbb3495504b57ab7bdb580af7e1dcd64531bfc"
  },
  "MLB-668804": {
    "url": "assets/mlb/headshots/668804.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668804/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "20068162074dc3a917b226c9f3b13c8ea051bce829153851b19f536dad9538c9"
  },
  "MLB-696149": {
    "url": "assets/mlb/headshots/696149.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/696149/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "494e6e3a21d13eed4541156fac7f04a593c8962fb1b528f2fd616ec6129d6575"
  },
  "MLB-669387": {
    "url": "assets/mlb/headshots/669387.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669387/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5424e205cacd4f6f5e4b80d49f259b63c113aba82dcad1533fa5c3f5e826fe47"
  },
  "MLB-675660": {
    "url": "assets/mlb/headshots/675660.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/675660/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cb6792f2b33d9d063c4ab69639556ff0148c04ddc7419343e1e97884ceba33e5"
  },
  "MLB-642397": {
    "url": "assets/mlb/headshots/642397.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/642397/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "fbef32fcd40ec37b0cc26e7ddd6265c8cb67e3302439995120ecf98db5b9a16f"
  },
  "MLB-695257": {
    "url": "assets/mlb/headshots/695257.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695257/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "775232536b476b852a99ada4523ab5413cf588e161d37ee8bd0dd9a3b5326930"
  },
  "MLB-682995": {
    "url": "assets/mlb/headshots/682995.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682995/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5c105511abcb0292bb34d4f614de8f216d2f3940d3de1f4b85957b2403de9485"
  },
  "MLB-683003": {
    "url": "assets/mlb/headshots/683003.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/683003/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "780da745b9cc8e075ab0e2d34a95591a5b8d28528f72d593065dd2c2af33e24a"
  },
  "MLB-804606": {
    "url": "assets/mlb/headshots/804606.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/804606/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "16b3ee8841da27aac166de14056060065bc2082c703dc9b26bda6187b24bab52"
  },
  "MLB-669199": {
    "url": "assets/mlb/headshots/669199.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669199/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "315b9d670ad39863f3e7e7d48beca9e32f78d75acedc57163922e733795bb06b"
  },
  "MLB-489446": {
    "url": "assets/mlb/headshots/489446.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/489446/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a3b947190eb070869430cc77cafbef8d2b703ec0914e2f5fa22ff93494eaa7ba"
  },
  "MLB-699013": {
    "url": "assets/mlb/headshots/699013.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/699013/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "d520133ca95f586fcabba0e4aff170bd39e0f0129358c4c1e7d1cbf92f134602"
  },
  "MLB-663968": {
    "url": "assets/mlb/headshots/663968.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663968/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "28da5134b4a5607bfb9c391fa6be175cf1bf4bb69b5b058cbbf515a7d9eab51a"
  },
  "MLB-596133": {
    "url": "assets/mlb/headshots/596133.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/596133/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "53930d5156349bc6502aad11ed8dc5c538d412be2da6bbcbfd164ff0126f07de"
  },
  "MLB-682254": {
    "url": "assets/mlb/headshots/682254.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682254/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8f0ef202ef0229dfe94cf2e712646864a8594d1f05cada817b32d1f939345a97"
  },
  "MLB-680779": {
    "url": "assets/mlb/headshots/680779.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/680779/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "3895fd2ac1e57f37c6fc47500de46f4da3a95edc810a2333eeed587c822d0cee"
  },
  "MLB-694378": {
    "url": "assets/mlb/headshots/694378.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694378/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "245d4ee3fe6a25a231762aa0ad96a2b92f56eb7135ea42b703db4ad9eef3e775"
  },
  "MLB-656605": {
    "url": "assets/mlb/headshots/656605.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656605/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "69b0e9840c64ef0b303c47451f4983654160c611a4ffca18b60dd2add603332f"
  },
  "MLB-669707": {
    "url": "assets/mlb/headshots/669707.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669707/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "94d2f5f045f236fa2c560281c4f03a574873237ae0312e3f5641139202322e41"
  },
  "MLB-665833": {
    "url": "assets/mlb/headshots/665833.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665833/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "40fd9c9ab2035e0dff4e773763a42a0da6f3dded94fbbb69f771c0e26e28b7fb"
  },
  "MLB-693304": {
    "url": "assets/mlb/headshots/693304.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/693304/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "8aa38bd90ba78beb6cca39a6b5b0e77c496197286063cedb6211a4a91d1f51fc"
  },
  "MLB-804668": {
    "url": "assets/mlb/headshots/804668.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/804668/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bacc690811e27f69cd3621d19215a7c63df378be76677d1cbbd12eaae88e0676"
  },
  "MLB-682927": {
    "url": "assets/mlb/headshots/682927.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/682927/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f4fc07afc7462ffac0e122a9c5a7791b7c87c26ceb1234468966d7cc406235fc"
  },
  "MLB-687462": {
    "url": "assets/mlb/headshots/687462.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687462/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "2f762b018602a223fc633558d55f3ff4ca29234e2ebb6d6fe467a5099791b250"
  },
  "MLB-670990": {
    "url": "assets/mlb/headshots/670990.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/670990/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "83e53136a80bad6c02640f577b987e664464e384a83e77debd6dc9083eaae229"
  },
  "MLB-668716": {
    "url": "assets/mlb/headshots/668716.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/668716/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ccbbfd6e6f940fa1b09107abc9423cc75639ef48068e4a896d54197269a267ff"
  },
  "MLB-694973": {
    "url": "assets/mlb/headshots/694973.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/694973/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ac855a881a9a4d67fa96e2ed475b9a0ec344bdf623a6d871199f43d5fadf11e0"
  },
  "MLB-693409": {
    "url": "assets/mlb/headshots/693409.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/693409/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "64923651f3fad25e16aa4cc12352fb593f8106b8d7546a2071a553fa7d5d34fd"
  },
  "MLB-656811": {
    "url": "assets/mlb/headshots/656811.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/656811/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "26e863fcaab6865e4caeb0a9173daa18f98246d5cdc688ad46dbc2410f6cad47"
  },
  "MLB-663494": {
    "url": "assets/mlb/headshots/663494.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/663494/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "f1f33dec330a71cae468c94442ed6453f15d945e3010d4ae582453d4dc1647d2"
  },
  "MLB-802408": {
    "url": "assets/mlb/headshots/802408.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/802408/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e0b32bded145a6fc9c84c14bf04534607768893d9a377022564c9d0a7a6e8afb"
  },
  "MLB-685464": {
    "url": "assets/mlb/headshots/685464.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/685464/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6a143af8d5358469f06dcb0010dcb2be35448bf323cded7e42ea625d6a14f6dc"
  },
  "MLB-666277": {
    "url": "assets/mlb/headshots/666277.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/666277/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "34213bde016adbb76e13628526a1ee934553de5e273d2861629cb8e0d5e0ac14"
  },
  "MLB-700669": {
    "url": "assets/mlb/headshots/700669.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/700669/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "db45e81bfd4e326970e58cc06f5a5064d924e59c89a1ae1eddb76ea49c32ba9b"
  },
  "MLB-690928": {
    "url": "assets/mlb/headshots/690928.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/690928/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "82d23f3384bed3aaf5aeda15328cd51ba948464fa0bc1d5d1df85608f6f0141b"
  },
  "MLB-671056": {
    "url": "assets/mlb/headshots/671056.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/671056/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c169933efca958bb73472278750af864b680fa4bd45dc13fdfa0e9bd3bd11083"
  },
  "MLB-676475": {
    "url": "assets/mlb/headshots/676475.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676475/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1b4264f7b67ca486201390ac5210077a5622d86e9fb349a1f0aa483c061080cd"
  },
  "MLB-669467": {
    "url": "assets/mlb/headshots/669467.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669467/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4a67e915884dfee5745bd6ad044d0485b074d3e23bc4fddce6d5c335feb05de2"
  },
  "MLB-802139": {
    "url": "assets/mlb/headshots/802139.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/802139/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "a2ffeabe863352bcf2d7ae203cc6a89c28782871d23ebcac6f6459fdca7e2495"
  },
  "MLB-691023": {
    "url": "assets/mlb/headshots/691023.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691023/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bb0cb21d9827f90bf2803dd8782871068c4d40f6fc33dd8989e6728220444f52"
  },
  "MLB-665877": {
    "url": "assets/mlb/headshots/665877.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/665877/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "0073e411c7176eb9b1184558642571c862b2c4a0e329a0471fabaedf86173db7"
  },
  "MLB-677865": {
    "url": "assets/mlb/headshots/677865.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/677865/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7d945694dab085db93eee6ed3b1b3bb80db3bb42973fc7b720e3c6cf75e7559d"
  },
  "MLB-700241": {
    "url": "assets/mlb/headshots/700241.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/700241/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "314af1fede36962cf29ca4519c39ed2e0370af309e0c4f566e7dfddf05e4e1f6"
  },
  "MLB-699024": {
    "url": "assets/mlb/headshots/699024.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/699024/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "c49b1eafcae5ac12fe6c4f170d746b1cf56463f41b9cbb57608051be226f6520"
  },
  "MLB-684516": {
    "url": "assets/mlb/headshots/684516.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/684516/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "34fdb2dcf9bbc0c9d7e9cfb5b9a352d5c687fd09452c857c1189f5886c8e343b"
  },
  "MLB-703725": {
    "url": "assets/mlb/headshots/703725.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/703725/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "cbfcca55c1b92251990497abae443f1d6c3983c4935df67108511406c5eaefa5"
  },
  "MLB-669461": {
    "url": "assets/mlb/headshots/669461.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669461/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "1c44ad48fecc8f212d2c2958b4131816fa2f80f42f4f961d748a5e9ff034eb81"
  },
  "MLB-701675": {
    "url": "assets/mlb/headshots/701675.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/701675/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "041977da7a67138fa7ad26e3a78871c7c440e3aabfcf8204615227b1094ce3d0"
  },
  "MLB-669357": {
    "url": "assets/mlb/headshots/669357.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/669357/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e70f9c8827d750141205d032b999cfebec1a507cd18ba268f3a644f2158e759a"
  },
  "MLB-686780": {
    "url": "assets/mlb/headshots/686780.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/686780/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "7d0603f18b66e5564366fa6f45cd22245c1989c24081e9c9a4afdd9dd11da884"
  },
  "MLB-687273": {
    "url": "assets/mlb/headshots/687273.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687273/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "bd1faeb59e62fc7e7e13efcd17de571ac1e25d1690437902e9466f5104f36d60"
  },
  "MLB-681517": {
    "url": "assets/mlb/headshots/681517.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/681517/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "139145237a822cbd116397cdbb29641cb2dddf28bd77b83a29aef73bd4dceda5"
  },
  "MLB-687363": {
    "url": "assets/mlb/headshots/687363.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/687363/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "db883cd60f9c418cad698acc77fd2ced76d0ab8a9f1242030bd565df3768c26c"
  },
  "MLB-695336": {
    "url": "assets/mlb/headshots/695336.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/695336/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "ed3b1f7061a82a58be4c3c2bb712dde65bd62d33706b876bd3c933674f12c193"
  },
  "MLB-691026": {
    "url": "assets/mlb/headshots/691026.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/691026/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "4403991fd13695ec79eaf869e28f22070e618459e7865c87e7ef9e19f3a20a39"
  },
  "MLB-676617": {
    "url": "assets/mlb/headshots/676617.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676617/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "e3e7c795a9ae8354df48eda2018005adf4372fed49ce82fef9c32f2d13394617"
  },
  "MLB-592773": {
    "url": "assets/mlb/headshots/592773.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/592773/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "5ca9a38fb04b8304f97a29e6cc67c72d89bc4f7618b638862bb26615dd32e01a"
  },
  "MLB-676755": {
    "url": "assets/mlb/headshots/676755.jpg",
    "source": "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676755/headshot/67/current",
    "provider": "MLB",
    "captured": "2026-11-09",
    "sha256": "6109f5ef2d9ebc46bbc1cadd1a0b9d055dcbc2929ec08678d3d91ad86fffb588"
  }
};
const MLB_POSITION_PLAYERS = [
  {
    "id": "MLB-476594",
    "mlbId": 476594,
    "name": "Robert Stock",
    "number": "89",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/robert-stock-476594",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-514888",
    "mlbId": 514888,
    "name": "Jose Altuve",
    "number": "27",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Houston Astros",
    "profile": "https://www.mlb.com/player/jose-altuve-514888"
  },
  {
    "id": "MLB-518585",
    "mlbId": 518585,
    "name": "Fernando Cruz",
    "number": "63",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "New York Yankees",
    "profile": "https://www.mlb.com/player/fernando-cruz-518585",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-518692",
    "mlbId": 518692,
    "name": "Freddie Freeman",
    "number": "5",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/freddie-freeman-518692"
  },
  {
    "id": "MLB-521692",
    "mlbId": 521692,
    "name": "Salvador Perez",
    "number": "13",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/salvador-perez-521692"
  },
  {
    "id": "MLB-543309",
    "mlbId": 543309,
    "name": "Kyle Higashioka",
    "number": "11",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/kyle-higashioka-543309",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-543760",
    "mlbId": 543760,
    "name": "Marcus Semien",
    "number": "10",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/marcus-semien-543760"
  },
  {
    "id": "MLB-543807",
    "mlbId": 543807,
    "name": "George Springer",
    "number": "4",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/george-springer-543807"
  },
  {
    "id": "MLB-545121",
    "mlbId": 545121,
    "name": "Ildemaro Vargas",
    "number": "6",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Arizona Diamondbacks",
    "profile": "https://www.mlb.com/player/ildemaro-vargas-545121"
  },
  {
    "id": "MLB-545361",
    "mlbId": 545361,
    "name": "Mike Trout",
    "number": "27",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/mike-trout-545361"
  },
  {
    "id": "MLB-547180",
    "mlbId": 547180,
    "name": "Bryce Harper",
    "number": "3",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/bryce-harper-547180"
  },
  {
    "id": "MLB-547973",
    "mlbId": 547973,
    "name": "Aroldis Chapman",
    "number": "44",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Boston Red Sox",
    "profile": "https://www.mlb.com/player/aroldis-chapman-547973"
  },
  {
    "id": "MLB-553869",
    "mlbId": 553869,
    "name": "Elias Díaz",
    "number": "35",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/elias-diaz-553869"
  },
  {
    "id": "MLB-553993",
    "mlbId": 553993,
    "name": "Eugenio Suárez",
    "number": "28",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/eugenio-suarez-553993"
  },
  {
    "id": "MLB-571448",
    "mlbId": 571448,
    "name": "Nolan Arenado",
    "number": "28",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Arizona Diamondbacks",
    "profile": "https://www.mlb.com/player/nolan-arenado-571448"
  },
  {
    "id": "MLB-571578",
    "mlbId": 571578,
    "name": "Patrick Corbin",
    "number": "46",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/patrick-corbin-571578",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-571946",
    "mlbId": 571946,
    "name": "Shelby Miller",
    "number": "77",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/shelby-miller-571946",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-571970",
    "mlbId": 571970,
    "name": "Max Muncy",
    "number": "13",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/max-muncy-571970"
  },
  {
    "id": "MLB-572233",
    "mlbId": 572233,
    "name": "Christian Walker",
    "number": "8",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Houston Astros",
    "profile": "https://www.mlb.com/player/christian-walker-572233"
  },
  {
    "id": "MLB-575929",
    "mlbId": 575929,
    "name": "Willson Contreras",
    "number": "40",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Boston Red Sox",
    "profile": "https://www.mlb.com/player/willson-contreras-575929"
  },
  {
    "id": "MLB-592332",
    "mlbId": 592332,
    "name": "Kevin Gausman",
    "number": "12",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/kevin-gausman-592332"
  },
  {
    "id": "MLB-592518",
    "mlbId": 592518,
    "name": "Manny Machado",
    "number": "13",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/manny-machado-592518"
  },
  {
    "id": "MLB-592626",
    "mlbId": 592626,
    "name": "Joc Pederson",
    "number": "3",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/joc-pederson-592626",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-592663",
    "mlbId": 592663,
    "name": "J.T. Realmuto",
    "number": "10",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/j-t-realmuto-592663"
  },
  {
    "id": "MLB-592791",
    "mlbId": 592791,
    "name": "Jameson Taillon",
    "number": "56",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/jameson-taillon-592791",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-592885",
    "mlbId": 592885,
    "name": "Christian Yelich",
    "number": "22",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Milwaukee Brewers",
    "profile": "https://www.mlb.com/player/christian-yelich-592885"
  },
  {
    "id": "MLB-593428",
    "mlbId": 593428,
    "name": "Xander Bogaerts",
    "number": "2",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/xander-bogaerts-593428"
  },
  {
    "id": "MLB-593871",
    "mlbId": 593871,
    "name": "Jorge Polanco",
    "number": "11",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/jorge-polanco-593871",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-593958",
    "mlbId": 593958,
    "name": "Eduardo Rodriguez",
    "number": "57",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Arizona Diamondbacks",
    "profile": "https://www.mlb.com/player/eduardo-rodriguez-593958"
  },
  {
    "id": "MLB-596019",
    "mlbId": 596019,
    "name": "Francisco Lindor",
    "number": "12",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/francisco-lindor-596019"
  },
  {
    "id": "MLB-605137",
    "mlbId": 605137,
    "name": "Josh Bell",
    "number": "56",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/josh-bell-605137"
  },
  {
    "id": "MLB-605141",
    "mlbId": 605141,
    "name": "Mookie Betts",
    "number": "50",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/mookie-betts-605141"
  },
  {
    "id": "MLB-605170",
    "mlbId": 605170,
    "name": "Victor Caratini",
    "number": "37",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/victor-caratini-605170"
  },
  {
    "id": "MLB-605288",
    "mlbId": 605288,
    "name": "Adrian Houser",
    "number": "12",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/adrian-houser-605288",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-605400",
    "mlbId": 605400,
    "name": "Aaron Nola",
    "number": "27",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/aaron-nola-605400"
  },
  {
    "id": "MLB-606192",
    "mlbId": 606192,
    "name": "Teoscar Hernández",
    "number": "37",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/teoscar-hernandez-606192"
  },
  {
    "id": "MLB-606466",
    "mlbId": 606466,
    "name": "Ketel Marte",
    "number": "4",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Arizona Diamondbacks",
    "profile": "https://www.mlb.com/player/ketel-marte-606466"
  },
  {
    "id": "MLB-607043",
    "mlbId": 607043,
    "name": "Brandon Nimmo",
    "number": "24",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/brandon-nimmo-607043"
  },
  {
    "id": "MLB-607200",
    "mlbId": 607200,
    "name": "Erick Fedde",
    "number": "47",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/erick-fedde-607200"
  },
  {
    "id": "MLB-607208",
    "mlbId": 607208,
    "name": "Trea Turner",
    "number": "7",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/trea-turner-607208"
  },
  {
    "id": "MLB-607259",
    "mlbId": 607259,
    "name": "Nick Martinez",
    "number": "28",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/nick-martinez-607259"
  },
  {
    "id": "MLB-607455",
    "mlbId": 607455,
    "name": "Anthony Banda",
    "number": "43",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/anthony-banda-607455",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-608032",
    "mlbId": 608032,
    "name": "Carlos Estévez",
    "number": "53",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/carlos-estevez-608032",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-608070",
    "mlbId": 608070,
    "name": "José Ramírez",
    "number": "11",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Cleveland Guardians",
    "profile": "https://www.mlb.com/player/jose-ramirez-608070"
  },
  {
    "id": "MLB-608324",
    "mlbId": 608324,
    "name": "Alex Bregman",
    "number": "3",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/alex-bregman-608324"
  },
  {
    "id": "MLB-608337",
    "mlbId": 608337,
    "name": "Lucas Giolito",
    "number": "55",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/lucas-giolito-608337",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-608348",
    "mlbId": 608348,
    "name": "Carson Kelly",
    "number": "15",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/carson-kelly-608348"
  },
  {
    "id": "MLB-608379",
    "mlbId": 608379,
    "name": "Michael Wacha",
    "number": "52",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/michael-wacha-608379"
  },
  {
    "id": "MLB-609280",
    "mlbId": 609280,
    "name": "Miguel Andujar",
    "number": "41",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/miguel-andujar-609280"
  },
  {
    "id": "MLB-621020",
    "mlbId": 621020,
    "name": "Dansby Swanson",
    "number": "7",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/dansby-swanson-621020"
  },
  {
    "id": "MLB-621043",
    "mlbId": 621043,
    "name": "Carlos Correa",
    "number": "1",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Houston Astros",
    "profile": "https://www.mlb.com/player/carlos-correa-621043",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-621107",
    "mlbId": 621107,
    "name": "Zach Eflin",
    "number": "24",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/zach-eflin-621107",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-621244",
    "mlbId": 621244,
    "name": "José Berríos",
    "number": "17",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/jose-berrios-621244",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-621439",
    "mlbId": 621439,
    "name": "Byron Buxton",
    "number": "25",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/byron-buxton-621439",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-621566",
    "mlbId": 621566,
    "name": "Matt Olson",
    "number": "28",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Atlanta Braves",
    "profile": "https://www.mlb.com/player/matt-olson-621566"
  },
  {
    "id": "MLB-622663",
    "mlbId": 622663,
    "name": "Luis Severino",
    "number": "40",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/luis-severino-622663",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-623149",
    "mlbId": 623149,
    "name": "Paul Sewald",
    "number": "43",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/paul-sewald-623149"
  },
  {
    "id": "MLB-623168",
    "mlbId": 623168,
    "name": "Tyler Heineman",
    "number": "31",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/tyler-heineman-623168"
  },
  {
    "id": "MLB-623454",
    "mlbId": 623454,
    "name": "Drew Anderson",
    "number": "38",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/drew-anderson-623454"
  },
  {
    "id": "MLB-624413",
    "mlbId": 624413,
    "name": "Pete Alonso",
    "number": "25",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/pete-alonso-624413"
  },
  {
    "id": "MLB-624424",
    "mlbId": 624424,
    "name": "Michael Conforto",
    "number": "20",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/michael-conforto-624424"
  },
  {
    "id": "MLB-628452",
    "mlbId": 628452,
    "name": "Raisel Iglesias",
    "number": "26",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Atlanta Braves",
    "profile": "https://www.mlb.com/player/raisel-iglesias-628452"
  },
  {
    "id": "MLB-630105",
    "mlbId": 630105,
    "name": "Jake Cronenworth",
    "number": "9",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/jake-cronenworth-630105"
  },
  {
    "id": "MLB-640448",
    "mlbId": 640448,
    "name": "Kyle Finnegan",
    "number": "67",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/kyle-finnegan-640448",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-641154",
    "mlbId": 641154,
    "name": "Pablo López",
    "number": "49",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/pablo-lopez-641154",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-641329",
    "mlbId": 641329,
    "name": "Bryan Baker",
    "number": "47",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/bryan-baker-641329"
  },
  {
    "id": "MLB-641343",
    "mlbId": 641343,
    "name": "Jake Bauers",
    "number": "9",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Milwaukee Brewers",
    "profile": "https://www.mlb.com/player/jake-bauers-641343"
  },
  {
    "id": "MLB-641355",
    "mlbId": 641355,
    "name": "Cody Bellinger",
    "number": "35",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "New York Yankees",
    "profile": "https://www.mlb.com/player/cody-bellinger-641355"
  },
  {
    "id": "MLB-641487",
    "mlbId": 641487,
    "name": "J.P. Crawford",
    "number": "3",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/j-p-crawford-641487"
  },
  {
    "id": "MLB-641745",
    "mlbId": 641745,
    "name": "Brad Keller",
    "number": "40",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/brad-keller-641745",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-641778",
    "mlbId": 641778,
    "name": "Eric Lauer",
    "number": "33",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/eric-lauer-641778",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-641857",
    "mlbId": 641857,
    "name": "Ryan McMahon",
    "number": "19",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "New York Yankees",
    "profile": "https://www.mlb.com/player/ryan-mcmahon-641857"
  },
  {
    "id": "MLB-641933",
    "mlbId": 641933,
    "name": "Tyler O'Neill",
    "number": "9",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/tyler-o-neill-641933",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-642201",
    "mlbId": 642201,
    "name": "Eli White",
    "number": "38",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Boston Red Sox",
    "profile": "https://www.mlb.com/player/eli-white-642201",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-642215",
    "mlbId": 642215,
    "name": "Weston Wilson",
    "number": "31",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/weston-wilson-642215"
  },
  {
    "id": "MLB-642715",
    "mlbId": 642715,
    "name": "Willy Adames",
    "number": "2",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/willy-adames-642715",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-643217",
    "mlbId": 643217,
    "name": "Andrew Benintendi",
    "number": "23",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/andrew-benintendi-643217"
  },
  {
    "id": "MLB-643289",
    "mlbId": 643289,
    "name": "Mauricio Dubón",
    "number": "14",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Atlanta Braves",
    "profile": "https://www.mlb.com/player/mauricio-dubon-643289"
  },
  {
    "id": "MLB-643410",
    "mlbId": 643410,
    "name": "Mark Leiter Jr.",
    "number": "38",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/mark-leiter-jr-643410",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-643446",
    "mlbId": 643446,
    "name": "Jeff McNeil",
    "number": "22",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/jeff-mcneil-643446"
  },
  {
    "id": "MLB-645261",
    "mlbId": 645261,
    "name": "Sandy Alcantara",
    "number": "22",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/sandy-alcantara-645261"
  },
  {
    "id": "MLB-645277",
    "mlbId": 645277,
    "name": "Ozzie Albies",
    "number": "1",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Atlanta Braves",
    "profile": "https://www.mlb.com/player/ozzie-albies-645277"
  },
  {
    "id": "MLB-646240",
    "mlbId": 646240,
    "name": "Rafael Devers",
    "number": "16",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/rafael-devers-646240",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-647304",
    "mlbId": 647304,
    "name": "Josh Naylor",
    "number": "12",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/josh-naylor-647304"
  },
  {
    "id": "MLB-649966",
    "mlbId": 649966,
    "name": "Luis Urías",
    "number": "48",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/luis-urias-649966",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-650402",
    "mlbId": 650402,
    "name": "Gleyber Torres",
    "number": "25",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/gleyber-torres-650402"
  },
  {
    "id": "MLB-650489",
    "mlbId": 650489,
    "name": "Willi Castro",
    "number": "3",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Colorado Rockies",
    "profile": "https://www.mlb.com/player/willi-castro-650489",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-650490",
    "mlbId": 650490,
    "name": "Yandy Díaz",
    "number": "2",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/yandy-diaz-650490"
  },
  {
    "id": "MLB-650633",
    "mlbId": 650633,
    "name": "Michael King",
    "number": "34",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/michael-king-650633"
  },
  {
    "id": "MLB-650644",
    "mlbId": 650644,
    "name": "Aaron Civale",
    "number": "38",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/aaron-civale-650644"
  },
  {
    "id": "MLB-650859",
    "mlbId": 650859,
    "name": "Luis Rengifo",
    "number": "21",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/luis-rengifo-650859",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-650911",
    "mlbId": 650911,
    "name": "Cristopher Sánchez",
    "number": "61",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/cristopher-sanchez-650911"
  },
  {
    "id": "MLB-655316",
    "mlbId": 655316,
    "name": "Andruw Monasterio",
    "number": "32",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Boston Red Sox",
    "profile": "https://www.mlb.com/player/andruw-monasterio-655316"
  },
  {
    "id": "MLB-656222",
    "mlbId": 656222,
    "name": "Jalen Beeks",
    "number": "68",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/jalen-beeks-656222",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-656302",
    "mlbId": 656302,
    "name": "Dylan Cease",
    "number": "84",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/dylan-cease-656302",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-656305",
    "mlbId": 656305,
    "name": "Matt Chapman",
    "number": "26",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/matt-chapman-656305",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-656546",
    "mlbId": 656546,
    "name": "Jeff Hoffman",
    "number": "24",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/jeff-hoffman-656546",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-656605",
    "mlbId": 656605,
    "name": "Mitch Keller",
    "number": "23",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/mitch-keller-656605",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-656641",
    "mlbId": 656641,
    "name": "Jacob Latz",
    "number": "67",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/jacob-latz-656641"
  },
  {
    "id": "MLB-656716",
    "mlbId": 656716,
    "name": "Zach McKinstry",
    "number": "39",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/zach-mckinstry-656716"
  },
  {
    "id": "MLB-656730",
    "mlbId": 656730,
    "name": "Trevor Megill",
    "number": "29",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Milwaukee Brewers",
    "profile": "https://www.mlb.com/player/trevor-megill-656730"
  },
  {
    "id": "MLB-656731",
    "mlbId": 656731,
    "name": "Tylor Megill",
    "number": "58",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/tylor-megill-656731",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-656775",
    "mlbId": 656775,
    "name": "Cedric Mullins",
    "number": "31",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/cedric-mullins-656775"
  },
  {
    "id": "MLB-656811",
    "mlbId": 656811,
    "name": "Ryan O'Hearn",
    "number": "29",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/ryan-o-hearn-656811"
  },
  {
    "id": "MLB-656941",
    "mlbId": 656941,
    "name": "Kyle Schwarber",
    "number": "12",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/kyle-schwarber-656941"
  },
  {
    "id": "MLB-656945",
    "mlbId": 656945,
    "name": "Tanner Scott",
    "number": "66",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/tanner-scott-656945"
  },
  {
    "id": "MLB-657044",
    "mlbId": 657044,
    "name": "Ryan Thompson",
    "number": "81",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Arizona Diamondbacks",
    "profile": "https://www.mlb.com/player/ryan-thompson-657044",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-657277",
    "mlbId": 657277,
    "name": "Logan Webb",
    "number": "62",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/logan-webb-657277",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-657424",
    "mlbId": 657424,
    "name": "Matt Gage",
    "number": "93",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/matt-gage-657424",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-657585",
    "mlbId": 657585,
    "name": "Reed Garrett",
    "number": "75",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/reed-garrett-657585",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-657656",
    "mlbId": 657656,
    "name": "Ramón Laureano",
    "number": "5",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/ramon-laureano-657656",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-660162",
    "mlbId": 660162,
    "name": "Yoán Moncada",
    "number": "10",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/yoan-moncada-660162",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-660271",
    "mlbId": 660271,
    "name": "Shohei Ohtani",
    "number": "17",
    "position": "DH",
    "positions": [
      "DH",
      "SP"
    ],
    "rosterPosition": "DH",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/shohei-ohtani-660271"
  },
  {
    "id": "MLB-660670",
    "mlbId": 660670,
    "name": "Ronald Acuña Jr.",
    "number": "13",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Atlanta Braves",
    "profile": "https://www.mlb.com/player/ronald-acuna-jr-660670"
  },
  {
    "id": "MLB-660688",
    "mlbId": 660688,
    "name": "Keibert Ruiz",
    "number": "20",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Washington Nationals",
    "profile": "https://www.mlb.com/player/keibert-ruiz-660688"
  },
  {
    "id": "MLB-661388",
    "mlbId": 661388,
    "name": "William Contreras",
    "number": "24",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Milwaukee Brewers",
    "profile": "https://www.mlb.com/player/william-contreras-661388"
  },
  {
    "id": "MLB-661395",
    "mlbId": 661395,
    "name": "Jhoan Duran",
    "number": "59",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/jhoan-duran-661395"
  },
  {
    "id": "MLB-662253",
    "mlbId": 662253,
    "name": "Andrés Muñoz",
    "number": "75",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/andres-munoz-662253",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-663330",
    "mlbId": 663330,
    "name": "Jahmai Jones",
    "number": "37",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Boston Red Sox",
    "profile": "https://www.mlb.com/player/jahmai-jones-663330"
  },
  {
    "id": "MLB-663457",
    "mlbId": 663457,
    "name": "Lars Nootbaar",
    "number": "21",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Arizona Diamondbacks",
    "profile": "https://www.mlb.com/player/lars-nootbaar-663457"
  },
  {
    "id": "MLB-663485",
    "mlbId": 663485,
    "name": "Cole Sands",
    "number": "44",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/cole-sands-663485",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-663494",
    "mlbId": 663494,
    "name": "Bryan Torres",
    "number": "39",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "St. Louis Cardinals",
    "profile": "https://www.mlb.com/player/bryan-torres-663494"
  },
  {
    "id": "MLB-663538",
    "mlbId": 663538,
    "name": "Nico Hoerner",
    "number": "2",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/nico-hoerner-663538"
  },
  {
    "id": "MLB-663554",
    "mlbId": 663554,
    "name": "Casey Mize",
    "number": "32",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/casey-mize-663554",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-663568",
    "mlbId": 663568,
    "name": "Stephen Kolek",
    "number": "32",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/stephen-kolek-663568",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-663574",
    "mlbId": 663574,
    "name": "Tony Santillan",
    "number": "64",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/tony-santillan-663574",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-663586",
    "mlbId": 663586,
    "name": "Austin Riley",
    "number": "27",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Atlanta Braves",
    "profile": "https://www.mlb.com/player/austin-riley-663586"
  },
  {
    "id": "MLB-663616",
    "mlbId": 663616,
    "name": "Trevor Larnach",
    "number": "9",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/trevor-larnach-663616",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-663624",
    "mlbId": 663624,
    "name": "Ryan Mountcastle",
    "number": "6",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/ryan-mountcastle-663624",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-663647",
    "mlbId": 663647,
    "name": "Ke'Bryan Hayes",
    "number": "3",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/ke-bryan-hayes-663647"
  },
  {
    "id": "MLB-663656",
    "mlbId": 663656,
    "name": "Kyle Tucker",
    "number": "23",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/kyle-tucker-663656"
  },
  {
    "id": "MLB-663687",
    "mlbId": 663687,
    "name": "Hogan Harris",
    "number": "36",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/hogan-harris-663687"
  },
  {
    "id": "MLB-663697",
    "mlbId": 663697,
    "name": "Jonathan India",
    "number": "6",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/jonathan-india-663697",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-663728",
    "mlbId": 663728,
    "name": "Cal Raleigh",
    "number": "29",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/cal-raleigh-663728"
  },
  {
    "id": "MLB-663757",
    "mlbId": 663757,
    "name": "Trent Grisham",
    "number": "12",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "New York Yankees",
    "profile": "https://www.mlb.com/player/trent-grisham-663757"
  },
  {
    "id": "MLB-663837",
    "mlbId": 663837,
    "name": "Matt Vierling",
    "number": "8",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/matt-vierling-663837",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-663886",
    "mlbId": 663886,
    "name": "Tyler Stephenson",
    "number": "37",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/tyler-stephenson-663886"
  },
  {
    "id": "MLB-663968",
    "mlbId": 663968,
    "name": "Jake Mangum",
    "number": "28",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/jake-mangum-663968"
  },
  {
    "id": "MLB-663993",
    "mlbId": 663993,
    "name": "Nathaniel Lowe",
    "number": "46",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Cleveland Guardians",
    "profile": "https://www.mlb.com/player/nathaniel-lowe-663993"
  },
  {
    "id": "MLB-664023",
    "mlbId": 664023,
    "name": "Ian Happ",
    "number": "8",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/ian-happ-664023"
  },
  {
    "id": "MLB-664034",
    "mlbId": 664034,
    "name": "Ty France",
    "number": "25",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/ty-france-664034"
  },
  {
    "id": "MLB-664040",
    "mlbId": 664040,
    "name": "Brandon Lowe",
    "number": "5",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/brandon-lowe-664040"
  },
  {
    "id": "MLB-664056",
    "mlbId": 664056,
    "name": "Harrison Bader",
    "number": "9",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/harrison-bader-664056",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-664126",
    "mlbId": 664126,
    "name": "Pete Fairbanks",
    "number": "29",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/pete-fairbanks-664126",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-664141",
    "mlbId": 664141,
    "name": "JT Brubaker",
    "number": "34",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/jt-brubaker-664141",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-664208",
    "mlbId": 664208,
    "name": "Phil Maton",
    "number": "88",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/phil-maton-664208",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-664285",
    "mlbId": 664285,
    "name": "Framber Valdez",
    "number": "59",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/framber-valdez-664285"
  },
  {
    "id": "MLB-664702",
    "mlbId": 664702,
    "name": "Myles Straw",
    "number": "3",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/myles-straw-664702"
  },
  {
    "id": "MLB-664728",
    "mlbId": 664728,
    "name": "Kyle Isbel",
    "number": "28",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/kyle-isbel-664728"
  },
  {
    "id": "MLB-664761",
    "mlbId": 664761,
    "name": "Alec Bohm",
    "number": "28",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/alec-bohm-664761"
  },
  {
    "id": "MLB-664770",
    "mlbId": 664770,
    "name": "Nathan Lukes",
    "number": "38",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/nathan-lukes-664770"
  },
  {
    "id": "MLB-664854",
    "mlbId": 664854,
    "name": "Ryan Helsley",
    "number": "21",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/ryan-helsley-664854",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-664983",
    "mlbId": 664983,
    "name": "Jake McCarthy",
    "number": "31",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Colorado Rockies",
    "profile": "https://www.mlb.com/player/jake-mccarthy-664983"
  },
  {
    "id": "MLB-665161",
    "mlbId": 665161,
    "name": "Jeremy Peña",
    "number": "3",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Houston Astros",
    "profile": "https://www.mlb.com/player/jeremy-pena-665161"
  },
  {
    "id": "MLB-665487",
    "mlbId": 665487,
    "name": "Fernando Tatis Jr.",
    "number": "23",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/fernando-tatis-jr-665487"
  },
  {
    "id": "MLB-665489",
    "mlbId": 665489,
    "name": "Vladimir Guerrero Jr.",
    "number": "27",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/vladimir-guerrero-jr-665489"
  },
  {
    "id": "MLB-665742",
    "mlbId": 665742,
    "name": "Juan Soto",
    "number": "22",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/juan-soto-665742"
  },
  {
    "id": "MLB-665750",
    "mlbId": 665750,
    "name": "Leody Taveras",
    "number": "30",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/leody-taveras-665750"
  },
  {
    "id": "MLB-665862",
    "mlbId": 665862,
    "name": "Jazz Chisholm Jr.",
    "number": "13",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "New York Yankees",
    "profile": "https://www.mlb.com/player/jazz-chisholm-jr-665862"
  },
  {
    "id": "MLB-665877",
    "mlbId": 665877,
    "name": "José Fermín",
    "number": "15",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "St. Louis Cardinals",
    "profile": "https://www.mlb.com/player/jose-fermin-665877"
  },
  {
    "id": "MLB-665926",
    "mlbId": 665926,
    "name": "Andrés Giménez",
    "number": "0",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/andres-gimenez-665926"
  },
  {
    "id": "MLB-665953",
    "mlbId": 665953,
    "name": "Andrés Chaparro",
    "number": "87",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Washington Nationals",
    "profile": "https://www.mlb.com/player/andres-chaparro-665953"
  },
  {
    "id": "MLB-666018",
    "mlbId": 666018,
    "name": "Jonathan Aranda",
    "number": "8",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/jonathan-aranda-666018"
  },
  {
    "id": "MLB-666023",
    "mlbId": 666023,
    "name": "Freddy Fermin",
    "number": "54",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/freddy-fermin-666023"
  },
  {
    "id": "MLB-666139",
    "mlbId": 666139,
    "name": "Josh Lowe",
    "number": "3",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/josh-lowe-666139"
  },
  {
    "id": "MLB-666142",
    "mlbId": 666142,
    "name": "Cole Ragans",
    "number": "55",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/cole-ragans-666142",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-666152",
    "mlbId": 666152,
    "name": "David Hamilton",
    "number": "6",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Milwaukee Brewers",
    "profile": "https://www.mlb.com/player/david-hamilton-666152"
  },
  {
    "id": "MLB-666158",
    "mlbId": 666158,
    "name": "Gavin Lux",
    "number": "11",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/gavin-lux-666158",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-666176",
    "mlbId": 666176,
    "name": "Jo Adell",
    "number": "7",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Cleveland Guardians",
    "profile": "https://www.mlb.com/player/jo-adell-666176"
  },
  {
    "id": "MLB-666182",
    "mlbId": 666182,
    "name": "Bo Bichette",
    "number": "19",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/bo-bichette-666182"
  },
  {
    "id": "MLB-666200",
    "mlbId": 666200,
    "name": "Jesús Luzardo",
    "number": "44",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/jesus-luzardo-666200"
  },
  {
    "id": "MLB-666211",
    "mlbId": 666211,
    "name": "Taylor Trammell",
    "number": "26",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Houston Astros",
    "profile": "https://www.mlb.com/player/taylor-trammell-666211"
  },
  {
    "id": "MLB-666214",
    "mlbId": 666214,
    "name": "Joey Wentz",
    "number": "33",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Atlanta Braves",
    "profile": "https://www.mlb.com/player/joey-wentz-666214",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-666374",
    "mlbId": 666374,
    "name": "Matt Brash",
    "number": "47",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/matt-brash-666374",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-666969",
    "mlbId": 666969,
    "name": "Adolis García",
    "number": "53",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/adolis-garcia-666969",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-667472",
    "mlbId": 667472,
    "name": "Dane Myers",
    "number": "17",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/dane-myers-667472"
  },
  {
    "id": "MLB-667670",
    "mlbId": 667670,
    "name": "Brent Rooker",
    "number": "25",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/brent-rooker-667670",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-667755",
    "mlbId": 667755,
    "name": "José Soriano",
    "number": "40",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/jose-soriano-667755"
  },
  {
    "id": "MLB-668227",
    "mlbId": 668227,
    "name": "Randy Arozarena",
    "number": "56",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/randy-arozarena-668227"
  },
  {
    "id": "MLB-668390",
    "mlbId": 668390,
    "name": "Cole Winn",
    "number": "60",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/cole-winn-668390",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-668670",
    "mlbId": 668670,
    "name": "Jake Rogers",
    "number": "28",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/jake-rogers-668670"
  },
  {
    "id": "MLB-668709",
    "mlbId": 668709,
    "name": "JJ Bleday",
    "number": "22",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/jj-bleday-668709"
  },
  {
    "id": "MLB-668804",
    "mlbId": 668804,
    "name": "Bryan Reynolds",
    "number": "10",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/bryan-reynolds-668804"
  },
  {
    "id": "MLB-668873",
    "mlbId": 668873,
    "name": "Caleb Kilian",
    "number": "56",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/caleb-kilian-668873",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-668881",
    "mlbId": 668881,
    "name": "Hunter Greene",
    "number": "21",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/hunter-greene-668881",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-668885",
    "mlbId": 668885,
    "name": "Austin Martin",
    "number": "16",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/austin-martin-668885"
  },
  {
    "id": "MLB-668904",
    "mlbId": 668904,
    "name": "Royce Lewis",
    "number": "23",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/royce-lewis-668904"
  },
  {
    "id": "MLB-668909",
    "mlbId": 668909,
    "name": "Gavin Williams",
    "number": "32",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Cleveland Guardians",
    "profile": "https://www.mlb.com/player/gavin-williams-668909"
  },
  {
    "id": "MLB-668930",
    "mlbId": 668930,
    "name": "Brice Turang",
    "number": "2",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Milwaukee Brewers",
    "profile": "https://www.mlb.com/player/brice-turang-668930"
  },
  {
    "id": "MLB-668939",
    "mlbId": 668939,
    "name": "Adley Rutschman",
    "number": "31",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Boston Red Sox",
    "profile": "https://www.mlb.com/player/adley-rutschman-668939"
  },
  {
    "id": "MLB-668952",
    "mlbId": 668952,
    "name": "Ryan Kreidler",
    "number": "5",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/ryan-kreidler-668952"
  },
  {
    "id": "MLB-669003",
    "mlbId": 669003,
    "name": "Garrett Mitchell",
    "number": "5",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Milwaukee Brewers",
    "profile": "https://www.mlb.com/player/garrett-mitchell-669003"
  },
  {
    "id": "MLB-669016",
    "mlbId": 669016,
    "name": "Brandon Marsh",
    "number": "16",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/brandon-marsh-669016"
  },
  {
    "id": "MLB-669065",
    "mlbId": 669065,
    "name": "Kyle Stowers",
    "number": "28",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/kyle-stowers-669065"
  },
  {
    "id": "MLB-669127",
    "mlbId": 669127,
    "name": "Shea Langeliers",
    "number": "23",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/shea-langeliers-669127"
  },
  {
    "id": "MLB-669203",
    "mlbId": 669203,
    "name": "Corbin Burnes",
    "number": "39",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Arizona Diamondbacks",
    "profile": "https://www.mlb.com/player/corbin-burnes-669203",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-669211",
    "mlbId": 669211,
    "name": "Keegan Akin",
    "number": "45",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/keegan-akin-669211",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-669224",
    "mlbId": 669224,
    "name": "Austin Wells",
    "number": "28",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "New York Yankees",
    "profile": "https://www.mlb.com/player/austin-wells-669224"
  },
  {
    "id": "MLB-669242",
    "mlbId": 669242,
    "name": "Tommy Edman",
    "number": "25",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/tommy-edman-669242"
  },
  {
    "id": "MLB-669257",
    "mlbId": 669257,
    "name": "Will Smith",
    "number": "16",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/will-smith-669257"
  },
  {
    "id": "MLB-669302",
    "mlbId": 669302,
    "name": "Logan Gilbert",
    "number": "36",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/logan-gilbert-669302"
  },
  {
    "id": "MLB-669358",
    "mlbId": 669358,
    "name": "Shane Baz",
    "number": "34",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/shane-baz-669358"
  },
  {
    "id": "MLB-669364",
    "mlbId": 669364,
    "name": "Xavier Edwards",
    "number": "9",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/xavier-edwards-669364"
  },
  {
    "id": "MLB-669372",
    "mlbId": 669372,
    "name": "J.T. Ginn",
    "number": "35",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/j-t-ginn-669372",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-669387",
    "mlbId": 669387,
    "name": "Carmen Mlodzinski",
    "number": "50",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/carmen-mlodzinski-669387"
  },
  {
    "id": "MLB-669394",
    "mlbId": 669394,
    "name": "Jake Burger",
    "number": "21",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/jake-burger-669394"
  },
  {
    "id": "MLB-669456",
    "mlbId": 669456,
    "name": "Shane Bieber",
    "number": "57",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/shane-bieber-669456",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-669477",
    "mlbId": 669477,
    "name": "Casey Schmitt",
    "number": "10",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/casey-schmitt-669477",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-669622",
    "mlbId": 669622,
    "name": "Anthony Bender",
    "number": "37",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/anthony-bender-669622",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-669707",
    "mlbId": 669707,
    "name": "Jared Triolo",
    "number": "19",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/jared-triolo-669707"
  },
  {
    "id": "MLB-669911",
    "mlbId": 669911,
    "name": "Michael Toglia",
    "number": "48",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/michael-toglia-669911",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-669923",
    "mlbId": 669923,
    "name": "George Kirby",
    "number": "68",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/george-kirby-669923"
  },
  {
    "id": "MLB-670032",
    "mlbId": 670032,
    "name": "Nicky Lopez",
    "number": "33",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/nicky-lopez-670032"
  },
  {
    "id": "MLB-670042",
    "mlbId": 670042,
    "name": "Luke Raley",
    "number": "20",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/luke-raley-670042",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-670062",
    "mlbId": 670062,
    "name": "Julian Garcia",
    "number": "57",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/julian-garcia-670062",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-670102",
    "mlbId": 670102,
    "name": "Bowden Francis",
    "number": "44",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/bowden-francis-670102",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-670280",
    "mlbId": 670280,
    "name": "David Bednar",
    "number": "53",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "New York Yankees",
    "profile": "https://www.mlb.com/player/david-bednar-670280"
  },
  {
    "id": "MLB-670541",
    "mlbId": 670541,
    "name": "Yordan Alvarez",
    "number": "44",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Houston Astros",
    "profile": "https://www.mlb.com/player/yordan-alvarez-670541"
  },
  {
    "id": "MLB-670623",
    "mlbId": 670623,
    "name": "Isaac Paredes",
    "number": "15",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Houston Astros",
    "profile": "https://www.mlb.com/player/isaac-paredes-670623"
  },
  {
    "id": "MLB-670764",
    "mlbId": 670764,
    "name": "Taylor Walls",
    "number": "6",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/taylor-walls-670764"
  },
  {
    "id": "MLB-670955",
    "mlbId": 670955,
    "name": "Edwin Uceta",
    "number": "63",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/edwin-uceta-670955",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-671056",
    "mlbId": 671056,
    "name": "Iván Herrera",
    "number": "48",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "St. Louis Cardinals",
    "profile": "https://www.mlb.com/player/ivan-herrera-671056"
  },
  {
    "id": "MLB-671277",
    "mlbId": 671277,
    "name": "Luis García Jr.",
    "number": "26",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "New York Yankees",
    "profile": "https://www.mlb.com/player/luis-garcia-jr-671277"
  },
  {
    "id": "MLB-671732",
    "mlbId": 671732,
    "name": "Lawrence Butler",
    "number": "4",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/lawrence-butler-671732"
  },
  {
    "id": "MLB-671737",
    "mlbId": 671737,
    "name": "Taj Bradley",
    "number": "26",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/taj-bradley-671737"
  },
  {
    "id": "MLB-671739",
    "mlbId": 671739,
    "name": "Michael Harris II",
    "number": "23",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Atlanta Braves",
    "profile": "https://www.mlb.com/player/michael-harris-ii-671739"
  },
  {
    "id": "MLB-671922",
    "mlbId": 671922,
    "name": "Cade Smith",
    "number": "36",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Cleveland Guardians",
    "profile": "https://www.mlb.com/player/cade-smith-671922"
  },
  {
    "id": "MLB-671976",
    "mlbId": 671976,
    "name": "Tristan Peters",
    "number": "29",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/tristan-peters-671976"
  },
  {
    "id": "MLB-672275",
    "mlbId": 672275,
    "name": "Patrick Bailey",
    "number": "16",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Cleveland Guardians",
    "profile": "https://www.mlb.com/player/patrick-bailey-672275"
  },
  {
    "id": "MLB-672282",
    "mlbId": 672282,
    "name": "Reid Detmers",
    "number": "48",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/reid-detmers-672282"
  },
  {
    "id": "MLB-672386",
    "mlbId": 672386,
    "name": "Alejandro Kirk",
    "number": "30",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/alejandro-kirk-672386"
  },
  {
    "id": "MLB-672515",
    "mlbId": 672515,
    "name": "Gabriel Moreno",
    "number": "14",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Arizona Diamondbacks",
    "profile": "https://www.mlb.com/player/gabriel-moreno-672515"
  },
  {
    "id": "MLB-672580",
    "mlbId": 672580,
    "name": "Maikel Garcia",
    "number": "11",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/maikel-garcia-672580"
  },
  {
    "id": "MLB-672582",
    "mlbId": 672582,
    "name": "Angel Zerpa",
    "number": "61",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Milwaukee Brewers",
    "profile": "https://www.mlb.com/player/angel-zerpa-672582",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-672640",
    "mlbId": 672640,
    "name": "Otto Lopez",
    "number": "6",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/otto-lopez-672640"
  },
  {
    "id": "MLB-672695",
    "mlbId": 672695,
    "name": "Geraldo Perdomo",
    "number": "2",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Arizona Diamondbacks",
    "profile": "https://www.mlb.com/player/geraldo-perdomo-672695"
  },
  {
    "id": "MLB-672724",
    "mlbId": 672724,
    "name": "Oswald Peraza",
    "number": "2",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/oswald-peraza-672724"
  },
  {
    "id": "MLB-672761",
    "mlbId": 672761,
    "name": "Wenceel Pérez",
    "number": "46",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/wenceel-perez-672761",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-672782",
    "mlbId": 672782,
    "name": "Yoendrys Gómez",
    "number": "94",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/yoendrys-gomez-672782"
  },
  {
    "id": "MLB-672960",
    "mlbId": 672960,
    "name": "Kazuma Okamoto",
    "number": "7",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/kazuma-okamoto-672960"
  },
  {
    "id": "MLB-673237",
    "mlbId": 673237,
    "name": "Yainer Diaz",
    "number": "21",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Houston Astros",
    "profile": "https://www.mlb.com/player/yainer-diaz-673237"
  },
  {
    "id": "MLB-673357",
    "mlbId": 673357,
    "name": "Luis Robert Jr.",
    "number": "88",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/luis-robert-jr-673357",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-673548",
    "mlbId": 673548,
    "name": "Seiya Suzuki",
    "number": "27",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/seiya-suzuki-673548"
  },
  {
    "id": "MLB-673929",
    "mlbId": 673929,
    "name": "Jordan Leasure",
    "number": "49",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/jordan-leasure-673929",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-673962",
    "mlbId": 673962,
    "name": "Josh Jung",
    "number": "6",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/josh-jung-673962",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-675512",
    "mlbId": 675512,
    "name": "Troy Melton",
    "number": "52",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/troy-melton-675512",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-675911",
    "mlbId": 675911,
    "name": "Spencer Strider",
    "number": "99",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Atlanta Braves",
    "profile": "https://www.mlb.com/player/spencer-strider-675911",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-676059",
    "mlbId": 676059,
    "name": "Jordan Westburg",
    "number": "11",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/jordan-westburg-676059",
    "injuryInclusion": "Missed the 2026 season; elbow surgery"
  },
  {
    "id": "MLB-676106",
    "mlbId": 676106,
    "name": "Emerson Hancock",
    "number": "26",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/emerson-hancock-676106",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-676130",
    "mlbId": 676130,
    "name": "José Buttó",
    "number": "70",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/jose-butto-676130",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-676356",
    "mlbId": 676356,
    "name": "Jonny DeLuca",
    "number": "21",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/jonny-deluca-676356"
  },
  {
    "id": "MLB-676391",
    "mlbId": 676391,
    "name": "Ernie Clement",
    "number": "22",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/ernie-clement-676391"
  },
  {
    "id": "MLB-676440",
    "mlbId": 676440,
    "name": "Tanner Bibee",
    "number": "28",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Cleveland Guardians",
    "profile": "https://www.mlb.com/player/tanner-bibee-676440"
  },
  {
    "id": "MLB-676475",
    "mlbId": 676475,
    "name": "Alec Burleson",
    "number": "41",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "St. Louis Cardinals",
    "profile": "https://www.mlb.com/player/alec-burleson-676475"
  },
  {
    "id": "MLB-676508",
    "mlbId": 676508,
    "name": "Ben Casparius",
    "number": "78",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/ben-casparius-676508",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-676571",
    "mlbId": 676571,
    "name": "PJ Poulin",
    "number": "50",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Washington Nationals",
    "profile": "https://www.mlb.com/player/pj-poulin-676571",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-676604",
    "mlbId": 676604,
    "name": "Tyler Zuber",
    "number": "55",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/tyler-zuber-676604",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-676609",
    "mlbId": 676609,
    "name": "José Caballero",
    "number": "72",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "New York Yankees",
    "profile": "https://www.mlb.com/player/jose-caballero-676609"
  },
  {
    "id": "MLB-676617",
    "mlbId": 676617,
    "name": "Riley O'Brien",
    "number": "61",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "St. Louis Cardinals",
    "profile": "https://www.mlb.com/player/riley-o-brien-676617"
  },
  {
    "id": "MLB-676684",
    "mlbId": 676684,
    "name": "Will Vest",
    "number": "19",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/will-vest-676684",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-676694",
    "mlbId": 676694,
    "name": "Jake Meyers",
    "number": "6",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Houston Astros",
    "profile": "https://www.mlb.com/player/jake-meyers-676694",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-676724",
    "mlbId": 676724,
    "name": "Jared Young",
    "number": "29",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/jared-young-676724",
    "injuryInclusion": "Injured 7-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-676755",
    "mlbId": 676755,
    "name": "Isaac Mattson",
    "number": "72",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/isaac-mattson-676755",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-676775",
    "mlbId": 676775,
    "name": "Keaton Winn",
    "number": "67",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/keaton-winn-676775",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-676914",
    "mlbId": 676914,
    "name": "Davis Schneider",
    "number": "36",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/davis-schneider-676914"
  },
  {
    "id": "MLB-676962",
    "mlbId": 676962,
    "name": "Ben Brown",
    "number": "32",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/ben-brown-676962",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-676974",
    "mlbId": 676974,
    "name": "Max Meyer",
    "number": "23",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/max-meyer-676974",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-677053",
    "mlbId": 677053,
    "name": "Andrew Nardi",
    "number": "43",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/andrew-nardi-677053",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-677587",
    "mlbId": 677587,
    "name": "Brayan Rocchio",
    "number": "4",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Cleveland Guardians",
    "profile": "https://www.mlb.com/player/brayan-rocchio-677587"
  },
  {
    "id": "MLB-677588",
    "mlbId": 677588,
    "name": "José Tena",
    "number": "8",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Washington Nationals",
    "profile": "https://www.mlb.com/player/jose-tena-677588"
  },
  {
    "id": "MLB-677594",
    "mlbId": 677594,
    "name": "Julio Rodríguez",
    "number": "44",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/julio-rodriguez-677594"
  },
  {
    "id": "MLB-677649",
    "mlbId": 677649,
    "name": "Ezequiel Duran",
    "number": "20",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/ezequiel-duran-677649"
  },
  {
    "id": "MLB-677800",
    "mlbId": 677800,
    "name": "Wilyer Abreu",
    "number": "52",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Boston Red Sox",
    "profile": "https://www.mlb.com/player/wilyer-abreu-677800"
  },
  {
    "id": "MLB-677942",
    "mlbId": 677942,
    "name": "Blaze Alexander",
    "number": "23",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/blaze-alexander-677942",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-677951",
    "mlbId": 677951,
    "name": "Bobby Witt Jr.",
    "number": "7",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/bobby-witt-jr-677951"
  },
  {
    "id": "MLB-677952",
    "mlbId": 677952,
    "name": "Braxton Ashcraft",
    "number": "35",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/braxton-ashcraft-677952",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-678022",
    "mlbId": 678022,
    "name": "Jack Perkins",
    "number": "50",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/jack-perkins-678022"
  },
  {
    "id": "MLB-678024",
    "mlbId": 678024,
    "name": "Mike Vasil",
    "number": "61",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/mike-vasil-678024",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-678246",
    "mlbId": 678246,
    "name": "Miguel Vargas",
    "number": "20",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/miguel-vargas-678246"
  },
  {
    "id": "MLB-678394",
    "mlbId": 678394,
    "name": "Brayan Bello",
    "number": "66",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Boston Red Sox",
    "profile": "https://www.mlb.com/player/brayan-bello-678394"
  },
  {
    "id": "MLB-678495",
    "mlbId": 678495,
    "name": "Randy Rodríguez",
    "number": "73",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/randy-rodriguez-678495",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-678662",
    "mlbId": 678662,
    "name": "Ezequiel Tovar",
    "number": "14",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Colorado Rockies",
    "profile": "https://www.mlb.com/player/ezequiel-tovar-678662"
  },
  {
    "id": "MLB-678692",
    "mlbId": 678692,
    "name": "Ronny Henriquez",
    "number": "32",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/ronny-henriquez-678692",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-678882",
    "mlbId": 678882,
    "name": "Ceddanne Rafaela",
    "number": "3",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Boston Red Sox",
    "profile": "https://www.mlb.com/player/ceddanne-rafaela-678882"
  },
  {
    "id": "MLB-679529",
    "mlbId": 679529,
    "name": "Spencer Torkelson",
    "number": "20",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/spencer-torkelson-679529"
  },
  {
    "id": "MLB-679883",
    "mlbId": 679883,
    "name": "Luinder Avila",
    "number": "58",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/luinder-avila-679883",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-680574",
    "mlbId": 680574,
    "name": "Matt McLain",
    "number": "9",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/matt-mclain-680574"
  },
  {
    "id": "MLB-680694",
    "mlbId": 680694,
    "name": "Kyle Bradish",
    "number": "38",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/kyle-bradish-680694",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-680700",
    "mlbId": 680700,
    "name": "Richie Palacios",
    "number": "1",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/richie-palacios-680700"
  },
  {
    "id": "MLB-680718",
    "mlbId": 680718,
    "name": "Addison Barger",
    "number": "47",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/addison-barger-680718",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-680728",
    "mlbId": 680728,
    "name": "Adrian Del Castillo",
    "number": "25",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Arizona Diamondbacks",
    "profile": "https://www.mlb.com/player/adrian-del-castillo-680728"
  },
  {
    "id": "MLB-680730",
    "mlbId": 680730,
    "name": "Mitchell Parker",
    "number": "70",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Washington Nationals",
    "profile": "https://www.mlb.com/player/mitchell-parker-680730",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-680757",
    "mlbId": 680757,
    "name": "Steven Kwan",
    "number": "38",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Cleveland Guardians",
    "profile": "https://www.mlb.com/player/steven-kwan-680757"
  },
  {
    "id": "MLB-680776",
    "mlbId": 680776,
    "name": "Jarren Duran",
    "number": "16",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Boston Red Sox",
    "profile": "https://www.mlb.com/player/jarren-duran-680776"
  },
  {
    "id": "MLB-680779",
    "mlbId": 680779,
    "name": "Henry Davis",
    "number": "32",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/henry-davis-680779"
  },
  {
    "id": "MLB-680869",
    "mlbId": 680869,
    "name": "Zack Gelof",
    "number": "20",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/zack-gelof-680869"
  },
  {
    "id": "MLB-680885",
    "mlbId": 680885,
    "name": "Spencer Schwellenbach",
    "number": "56",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Atlanta Braves",
    "profile": "https://www.mlb.com/player/spencer-schwellenbach-680885",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-680977",
    "mlbId": 680977,
    "name": "Brendan Donovan",
    "number": "33",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/brendan-donovan-680977",
    "injuryInclusion": "Injured 7-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-681035",
    "mlbId": 681035,
    "name": "Christian Scott",
    "number": "45",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/christian-scott-681035",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-681082",
    "mlbId": 681082,
    "name": "Bryson Stott",
    "number": "5",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/bryson-stott-681082"
  },
  {
    "id": "MLB-681198",
    "mlbId": 681198,
    "name": "TJ Rumfield",
    "number": "7",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Colorado Rockies",
    "profile": "https://www.mlb.com/player/tj-rumfield-681198"
  },
  {
    "id": "MLB-681347",
    "mlbId": 681347,
    "name": "Mike Burrows",
    "number": "50",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Houston Astros",
    "profile": "https://www.mlb.com/player/mike-burrows-681347",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-681460",
    "mlbId": 681460,
    "name": "Brooks Baldwin",
    "number": "27",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/brooks-baldwin-681460",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-681481",
    "mlbId": 681481,
    "name": "Kerry Carpenter",
    "number": "30",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/kerry-carpenter-681481",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-681624",
    "mlbId": 681624,
    "name": "Andy Pages",
    "number": "44",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/andy-pages-681624"
  },
  {
    "id": "MLB-681715",
    "mlbId": 681715,
    "name": "Heriberto Hernández",
    "number": "13",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/heriberto-hernandez-681715"
  },
  {
    "id": "MLB-681857",
    "mlbId": 681857,
    "name": "Reese Olson",
    "number": "45",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/reese-olson-681857",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-682254",
    "mlbId": 682254,
    "name": "Mason Montgomery",
    "number": "46",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/mason-montgomery-682254"
  },
  {
    "id": "MLB-682626",
    "mlbId": 682626,
    "name": "Francisco Alvarez",
    "number": "4",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/francisco-alvarez-682626"
  },
  {
    "id": "MLB-682657",
    "mlbId": 682657,
    "name": "Angel Martínez",
    "number": "1",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Cleveland Guardians",
    "profile": "https://www.mlb.com/player/angel-martinez-682657"
  },
  {
    "id": "MLB-682663",
    "mlbId": 682663,
    "name": "Agustín Ramírez",
    "number": "50",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/agustin-ramirez-682663"
  },
  {
    "id": "MLB-682829",
    "mlbId": 682829,
    "name": "Elly De La Cruz",
    "number": "44",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/elly-de-la-cruz-682829"
  },
  {
    "id": "MLB-682928",
    "mlbId": 682928,
    "name": "CJ Abrams",
    "number": "5",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Washington Nationals",
    "profile": "https://www.mlb.com/player/cj-abrams-682928"
  },
  {
    "id": "MLB-682985",
    "mlbId": 682985,
    "name": "Riley Greene",
    "number": "31",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/riley-greene-682985"
  },
  {
    "id": "MLB-682990",
    "mlbId": 682990,
    "name": "Quinn Priester",
    "number": "46",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Milwaukee Brewers",
    "profile": "https://www.mlb.com/player/quinn-priester-682990",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-682998",
    "mlbId": 682998,
    "name": "Corbin Carroll",
    "number": "7",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Arizona Diamondbacks",
    "profile": "https://www.mlb.com/player/corbin-carroll-682998"
  },
  {
    "id": "MLB-683002",
    "mlbId": 683002,
    "name": "Gunnar Henderson",
    "number": "2",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/gunnar-henderson-683002"
  },
  {
    "id": "MLB-683004",
    "mlbId": 683004,
    "name": "Jack Leiter",
    "number": "22",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/jack-leiter-683004",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-683083",
    "mlbId": 683083,
    "name": "Nasim Nuñez",
    "number": "26",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Washington Nationals",
    "profile": "https://www.mlb.com/player/nasim-nunez-683083"
  },
  {
    "id": "MLB-683232",
    "mlbId": 683232,
    "name": "Nick Mears",
    "number": "31",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/nick-mears-683232",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-683357",
    "mlbId": 683357,
    "name": "Owen Caissie",
    "number": "17",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/owen-caissie-683357",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-683737",
    "mlbId": 683737,
    "name": "Michael Busch",
    "number": "29",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/michael-busch-683737"
  },
  {
    "id": "MLB-683953",
    "mlbId": 683953,
    "name": "Travis Bazzana",
    "number": "37",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Cleveland Guardians",
    "profile": "https://www.mlb.com/player/travis-bazzana-683953"
  },
  {
    "id": "MLB-684007",
    "mlbId": 684007,
    "name": "Shota Imanaga",
    "number": "18",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/shota-imanaga-684007"
  },
  {
    "id": "MLB-686217",
    "mlbId": 686217,
    "name": "Sal Frelick",
    "number": "10",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Milwaukee Brewers",
    "profile": "https://www.mlb.com/player/sal-frelick-686217"
  },
  {
    "id": "MLB-686469",
    "mlbId": 686469,
    "name": "Vinnie Pasquantino",
    "number": "9",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/vinnie-pasquantino-686469"
  },
  {
    "id": "MLB-686527",
    "mlbId": 686527,
    "name": "Dominic Canzone",
    "number": "8",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/dominic-canzone-686527"
  },
  {
    "id": "MLB-686555",
    "mlbId": 686555,
    "name": "Isaac Collins",
    "number": "1",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/isaac-collins-686555"
  },
  {
    "id": "MLB-686580",
    "mlbId": 686580,
    "name": "Justin Slaten",
    "number": "63",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Boston Red Sox",
    "profile": "https://www.mlb.com/player/justin-slaten-686580",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-686681",
    "mlbId": 686681,
    "name": "Michael Massey",
    "number": "19",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/michael-massey-686681"
  },
  {
    "id": "MLB-686752",
    "mlbId": 686752,
    "name": "Ryan Pepiot",
    "number": "44",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/ryan-pepiot-686752",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-686765",
    "mlbId": 686765,
    "name": "Nick Sogard",
    "number": "20",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Boston Red Sox",
    "profile": "https://www.mlb.com/player/nick-sogard-686765"
  },
  {
    "id": "MLB-686780",
    "mlbId": 686780,
    "name": "Pedro Pagés",
    "number": "43",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "St. Louis Cardinals",
    "profile": "https://www.mlb.com/player/pedro-pages-686780"
  },
  {
    "id": "MLB-686790",
    "mlbId": 686790,
    "name": "Trevor McDonald",
    "number": "72",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/trevor-mcdonald-686790",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-686797",
    "mlbId": 686797,
    "name": "Brooks Lee",
    "number": "22",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/brooks-lee-686797"
  },
  {
    "id": "MLB-686799",
    "mlbId": 686799,
    "name": "Jack Kochanowicz",
    "number": "41",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/jack-kochanowicz-686799",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-686948",
    "mlbId": 686948,
    "name": "Drake Baldwin",
    "number": "30",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Atlanta Braves",
    "profile": "https://www.mlb.com/player/drake-baldwin-686948"
  },
  {
    "id": "MLB-686973",
    "mlbId": 686973,
    "name": "Louis Varland",
    "number": "77",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Toronto Blue Jays",
    "profile": "https://www.mlb.com/player/louis-varland-686973"
  },
  {
    "id": "MLB-686993",
    "mlbId": 686993,
    "name": "Justin Sterner",
    "number": "60",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/justin-sterner-686993",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-687093",
    "mlbId": 687093,
    "name": "Vaughn Grissom",
    "number": "5",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/vaughn-grissom-687093"
  },
  {
    "id": "MLB-687263",
    "mlbId": 687263,
    "name": "Zach Neto",
    "number": "9",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/zach-neto-687263"
  },
  {
    "id": "MLB-687377",
    "mlbId": 687377,
    "name": "Orlando Ribalta",
    "number": "64",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Washington Nationals",
    "profile": "https://www.mlb.com/player/orlando-ribalta-687377",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-687401",
    "mlbId": 687401,
    "name": "Joey Ortiz",
    "number": "3",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Milwaukee Brewers",
    "profile": "https://www.mlb.com/player/joey-ortiz-687401"
  },
  {
    "id": "MLB-687462",
    "mlbId": 687462,
    "name": "Spencer Horwitz",
    "number": "2",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/spencer-horwitz-687462"
  },
  {
    "id": "MLB-687551",
    "mlbId": 687551,
    "name": "Drew Gilbert",
    "number": "0",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/drew-gilbert-687551"
  },
  {
    "id": "MLB-687637",
    "mlbId": 687637,
    "name": "Dylan Beavers",
    "number": "12",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/dylan-beavers-687637"
  },
  {
    "id": "MLB-687859",
    "mlbId": 687859,
    "name": "Troy Johnston",
    "number": "20",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Colorado Rockies",
    "profile": "https://www.mlb.com/player/troy-johnston-687859"
  },
  {
    "id": "MLB-687931",
    "mlbId": 687931,
    "name": "Carson Whisenhunt",
    "number": "88",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/carson-whisenhunt-687931",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-688138",
    "mlbId": 688138,
    "name": "Logan Evans",
    "number": "23",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/logan-evans-688138",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-689414",
    "mlbId": 689414,
    "name": "Liam Hicks",
    "number": "34",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/liam-hicks-689414"
  },
  {
    "id": "MLB-690829",
    "mlbId": 690829,
    "name": "Ben Joyce",
    "number": "44",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/ben-joyce-690829",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-690928",
    "mlbId": 690928,
    "name": "Hunter Dobbins",
    "number": "40",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "St. Louis Cardinals",
    "profile": "https://www.mlb.com/player/hunter-dobbins-690928",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-690990",
    "mlbId": 690990,
    "name": "Cade Horton",
    "number": "22",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/cade-horton-690990",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-690993",
    "mlbId": 690993,
    "name": "Colt Keith",
    "number": "33",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/colt-keith-690993",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-690997",
    "mlbId": 690997,
    "name": "Nolan McLean",
    "number": "26",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/nolan-mclean-690997"
  },
  {
    "id": "MLB-691016",
    "mlbId": 691016,
    "name": "Tyler Soderstrom",
    "number": "21",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/tyler-soderstrom-691016",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-691023",
    "mlbId": 691023,
    "name": "Jordan Walker",
    "number": "18",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "St. Louis Cardinals",
    "profile": "https://www.mlb.com/player/jordan-walker-691023"
  },
  {
    "id": "MLB-691026",
    "mlbId": 691026,
    "name": "Masyn Winn",
    "number": "0",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "St. Louis Cardinals",
    "profile": "https://www.mlb.com/player/masyn-winn-691026"
  },
  {
    "id": "MLB-691406",
    "mlbId": 691406,
    "name": "Junior Caminero",
    "number": "13",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/junior-caminero-691406"
  },
  {
    "id": "MLB-691594",
    "mlbId": 691594,
    "name": "Javier Sanoja",
    "number": "8",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/javier-sanoja-691594"
  },
  {
    "id": "MLB-691718",
    "mlbId": 691718,
    "name": "Pete Crow-Armstrong",
    "number": "4",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Chicago Cubs",
    "profile": "https://www.mlb.com/player/pete-crow-armstrong-691718"
  },
  {
    "id": "MLB-691720",
    "mlbId": 691720,
    "name": "Kyle Karros",
    "number": "12",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Colorado Rockies",
    "profile": "https://www.mlb.com/player/kyle-karros-691720"
  },
  {
    "id": "MLB-691723",
    "mlbId": 691723,
    "name": "Coby Mayo",
    "number": "16",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/coby-mayo-691723"
  },
  {
    "id": "MLB-691777",
    "mlbId": 691777,
    "name": "Max Muncy",
    "number": "3",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/max-muncy-691777",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-691781",
    "mlbId": 691781,
    "name": "Brady House",
    "number": "12",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Washington Nationals",
    "profile": "https://www.mlb.com/player/brady-house-691781"
  },
  {
    "id": "MLB-691785",
    "mlbId": 691785,
    "name": "Marcelo Mayer",
    "number": "7",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/marcelo-mayer-691785"
  },
  {
    "id": "MLB-691788",
    "mlbId": 691788,
    "name": "Joe Mack",
    "number": "80",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/joe-mack-691788"
  },
  {
    "id": "MLB-691799",
    "mlbId": 691799,
    "name": "Grant Taylor",
    "number": "31",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/grant-taylor-691799"
  },
  {
    "id": "MLB-691946",
    "mlbId": 691946,
    "name": "George Klassen",
    "number": "58",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/george-klassen-691946",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-693304",
    "mlbId": 693304,
    "name": "Nick Gonzales",
    "number": "3",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/nick-gonzales-693304"
  },
  {
    "id": "MLB-693307",
    "mlbId": 693307,
    "name": "Dillon Dingler",
    "number": "13",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/dillon-dingler-693307"
  },
  {
    "id": "MLB-693645",
    "mlbId": 693645,
    "name": "Cam Schlittler",
    "number": "31",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "New York Yankees",
    "profile": "https://www.mlb.com/player/cam-schlittler-693645"
  },
  {
    "id": "MLB-693855",
    "mlbId": 693855,
    "name": "Ian Seymour",
    "number": "61",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/ian-seymour-693855"
  },
  {
    "id": "MLB-694192",
    "mlbId": 694192,
    "name": "Jackson Chourio",
    "number": "11",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Milwaukee Brewers",
    "profile": "https://www.mlb.com/player/jackson-chourio-694192"
  },
  {
    "id": "MLB-694203",
    "mlbId": 694203,
    "name": "Denzer Guzman",
    "number": "23",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/denzer-guzman-694203"
  },
  {
    "id": "MLB-694208",
    "mlbId": 694208,
    "name": "Moisés Ballesteros",
    "number": "13",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/moises-ballesteros-694208"
  },
  {
    "id": "MLB-694212",
    "mlbId": 694212,
    "name": "Samuel Basallo",
    "number": "29",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/samuel-basallo-694212",
    "injuryInclusion": "Injured 7-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-694249",
    "mlbId": 694249,
    "name": "Cole Carrigg",
    "number": "16",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Colorado Rockies",
    "profile": "https://www.mlb.com/player/cole-carrigg-694249"
  },
  {
    "id": "MLB-694361",
    "mlbId": 694361,
    "name": "Will Klein",
    "number": "61",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/will-klein-694361",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-694384",
    "mlbId": 694384,
    "name": "Nolan Schanuel",
    "number": "18",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/nolan-schanuel-694384",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-694497",
    "mlbId": 694497,
    "name": "Evan Carter",
    "number": "32",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/evan-carter-694497"
  },
  {
    "id": "MLB-694671",
    "mlbId": 694671,
    "name": "Wyatt Langford",
    "number": "36",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Texas Rangers",
    "profile": "https://www.mlb.com/player/wyatt-langford-694671"
  },
  {
    "id": "MLB-694819",
    "mlbId": 694819,
    "name": "Jacob Misiorowski",
    "number": "32",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Milwaukee Brewers",
    "profile": "https://www.mlb.com/player/jacob-misiorowski-694819"
  },
  {
    "id": "MLB-694918",
    "mlbId": 694918,
    "name": "Blade Tidwell",
    "number": "46",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/blade-tidwell-694918",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-694973",
    "mlbId": 694973,
    "name": "Paul Skenes",
    "number": "30",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/paul-skenes-694973"
  },
  {
    "id": "MLB-695243",
    "mlbId": 695243,
    "name": "Mason Miller",
    "number": "22",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/mason-miller-695243"
  },
  {
    "id": "MLB-695505",
    "mlbId": 695505,
    "name": "Chase Burns",
    "number": "26",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/chase-burns-695505",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-695506",
    "mlbId": 695506,
    "name": "Jac Caglianone",
    "number": "14",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/jac-caglianone-695506"
  },
  {
    "id": "MLB-695578",
    "mlbId": 695578,
    "name": "James Wood",
    "number": "29",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Washington Nationals",
    "profile": "https://www.mlb.com/player/james-wood-695578"
  },
  {
    "id": "MLB-695600",
    "mlbId": 695600,
    "name": "Carter Jensen",
    "number": "22",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/carter-jensen-695600"
  },
  {
    "id": "MLB-695611",
    "mlbId": 695611,
    "name": "Gage Jump",
    "number": "61",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/gage-jump-695611",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-695657",
    "mlbId": 695657,
    "name": "Colson Montgomery",
    "number": "12",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/colson-montgomery-695657"
  },
  {
    "id": "MLB-695731",
    "mlbId": 695731,
    "name": "Braden Montgomery",
    "number": "24",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/braden-montgomery-695731"
  },
  {
    "id": "MLB-695734",
    "mlbId": 695734,
    "name": "Daylen Lile",
    "number": "4",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Washington Nationals",
    "profile": "https://www.mlb.com/player/daylen-lile-695734"
  },
  {
    "id": "MLB-696100",
    "mlbId": 696100,
    "name": "Hunter Goodman",
    "number": "15",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "Colorado Rockies",
    "profile": "https://www.mlb.com/player/hunter-goodman-696100"
  },
  {
    "id": "MLB-696285",
    "mlbId": 696285,
    "name": "Jacob Young",
    "number": "30",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Washington Nationals",
    "profile": "https://www.mlb.com/player/jacob-young-696285"
  },
  {
    "id": "MLB-696519",
    "mlbId": 696519,
    "name": "Samy Natera Jr.",
    "number": "52",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Los Angeles Angels",
    "profile": "https://www.mlb.com/player/samy-natera-jr-696519",
    "injuryInclusion": "Injured 15-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-699013",
    "mlbId": 699013,
    "name": "Esmerlyn Valdez",
    "number": "55",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Pittsburgh Pirates",
    "profile": "https://www.mlb.com/player/esmerlyn-valdez-699013",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-699302",
    "mlbId": 699302,
    "name": "Héctor Rodríguez",
    "number": "43",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/hector-rodriguez-699302"
  },
  {
    "id": "MLB-700242",
    "mlbId": 700242,
    "name": "Trey Sweeney",
    "number": "27",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/trey-sweeney-700242",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-700250",
    "mlbId": 700250,
    "name": "Ben Rice",
    "number": "22",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "New York Yankees",
    "profile": "https://www.mlb.com/player/ben-rice-700250"
  },
  {
    "id": "MLB-701358",
    "mlbId": 701358,
    "name": "Cam Smith",
    "number": "11",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "Houston Astros",
    "profile": "https://www.mlb.com/player/cam-smith-701358"
  },
  {
    "id": "MLB-701398",
    "mlbId": 701398,
    "name": "Sal Stewart",
    "number": "27",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Cincinnati Reds",
    "profile": "https://www.mlb.com/player/sal-stewart-701398"
  },
  {
    "id": "MLB-701538",
    "mlbId": 701538,
    "name": "Jackson Merrill",
    "number": "3",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "San Diego Padres",
    "profile": "https://www.mlb.com/player/jackson-merrill-701538"
  },
  {
    "id": "MLB-701581",
    "mlbId": 701581,
    "name": "David Festa",
    "number": "58",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/david-festa-701581",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-701675",
    "mlbId": 701675,
    "name": "Nathan Church",
    "number": "27",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "St. Louis Cardinals",
    "profile": "https://www.mlb.com/player/nathan-church-701675"
  },
  {
    "id": "MLB-701762",
    "mlbId": 701762,
    "name": "Nick Kurtz",
    "number": "16",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/nick-kurtz-701762",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-701807",
    "mlbId": 701807,
    "name": "Carson Benge",
    "number": "3",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/carson-benge-701807"
  },
  {
    "id": "MLB-701852",
    "mlbId": 701852,
    "name": "Drew Cavanaugh",
    "number": "61",
    "position": "C",
    "positions": [
      "C"
    ],
    "rosterPosition": "C",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/drew-cavanaugh-701852"
  },
  {
    "id": "MLB-702070",
    "mlbId": 702070,
    "name": "Noah Cameron",
    "number": "65",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Kansas City Royals",
    "profile": "https://www.mlb.com/player/noah-cameron-702070"
  },
  {
    "id": "MLB-702222",
    "mlbId": 702222,
    "name": "Justin Crawford",
    "number": "2",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Philadelphia Phillies",
    "profile": "https://www.mlb.com/player/justin-crawford-702222"
  },
  {
    "id": "MLB-702284",
    "mlbId": 702284,
    "name": "Cole Young",
    "number": "2",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/cole-young-702284"
  },
  {
    "id": "MLB-702332",
    "mlbId": 702332,
    "name": "Caleb Durbin",
    "number": "5",
    "position": "3B",
    "positions": [
      "3B"
    ],
    "rosterPosition": "3B",
    "team": "Boston Red Sox",
    "profile": "https://www.mlb.com/player/caleb-durbin-702332"
  },
  {
    "id": "MLB-702474",
    "mlbId": 702474,
    "name": "Mike Paredes",
    "number": "53",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/mike-paredes-702474",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-702616",
    "mlbId": 702616,
    "name": "Jackson Holliday",
    "number": "7",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Baltimore Orioles",
    "profile": "https://www.mlb.com/player/jackson-holliday-702616",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-703607",
    "mlbId": 703607,
    "name": "Henry Bolte",
    "number": "33",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/henry-bolte-703607"
  },
  {
    "id": "MLB-800048",
    "mlbId": 800048,
    "name": "Parker Messick",
    "number": "77",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Cleveland Guardians",
    "profile": "https://www.mlb.com/player/parker-messick-800048"
  },
  {
    "id": "MLB-801403",
    "mlbId": 801403,
    "name": "Chase Dollander",
    "number": "32",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "Colorado Rockies",
    "profile": "https://www.mlb.com/player/chase-dollander-801403",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-802139",
    "mlbId": 802139,
    "name": "JJ Wetherholt",
    "number": "26",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "St. Louis Cardinals",
    "profile": "https://www.mlb.com/player/jj-wetherholt-802139"
  },
  {
    "id": "MLB-802415",
    "mlbId": 802415,
    "name": "Chandler Simpson",
    "number": "14",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Tampa Bay Rays",
    "profile": "https://www.mlb.com/player/chandler-simpson-802415"
  },
  {
    "id": "MLB-803011",
    "mlbId": 803011,
    "name": "Sam Antonacci",
    "number": "17",
    "position": "LF",
    "positions": [
      "LF"
    ],
    "rosterPosition": "LF",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/sam-antonacci-803011"
  },
  {
    "id": "MLB-805300",
    "mlbId": 805300,
    "name": "Jakob Marsee",
    "number": "87",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Miami Marlins",
    "profile": "https://www.mlb.com/player/jakob-marsee-805300"
  },
  {
    "id": "MLB-805367",
    "mlbId": 805367,
    "name": "Chase Meidroth",
    "number": "10",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/chase-meidroth-805367"
  },
  {
    "id": "MLB-805779",
    "mlbId": 805779,
    "name": "Jacob Wilson",
    "number": "5",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Athletics",
    "profile": "https://www.mlb.com/player/jacob-wilson-805779",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-805808",
    "mlbId": 805808,
    "name": "Kevin McGonigle",
    "number": "7",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Detroit Tigers",
    "profile": "https://www.mlb.com/player/kevin-mcgonigle-805808"
  },
  {
    "id": "MLB-805811",
    "mlbId": 805811,
    "name": "Bryce Eldridge",
    "number": "8",
    "position": "DH",
    "positions": [
      "DH"
    ],
    "rosterPosition": "DH",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/bryce-eldridge-805811",
    "injuryInclusion": "Injured 7-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-805999",
    "mlbId": 805999,
    "name": "A.J. Ewing",
    "number": "9",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "New York Mets",
    "profile": "https://www.mlb.com/player/a-j-ewing-805999"
  },
  {
    "id": "MLB-806068",
    "mlbId": 806068,
    "name": "Colt Emerson",
    "number": "4",
    "position": "SS",
    "positions": [
      "SS"
    ],
    "rosterPosition": "SS",
    "team": "Seattle Mariners",
    "profile": "https://www.mlb.com/player/colt-emerson-806068",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-806185",
    "mlbId": 806185,
    "name": "Hayden Birdsong",
    "number": "60",
    "position": "RP",
    "positions": [
      "RP"
    ],
    "rosterPosition": "RP",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/hayden-birdsong-806185",
    "injuryInclusion": "Injured 60-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-807712",
    "mlbId": 807712,
    "name": "Luke Keaschall",
    "number": "15",
    "position": "2B",
    "positions": [
      "2B"
    ],
    "rosterPosition": "2B",
    "team": "Minnesota Twins",
    "profile": "https://www.mlb.com/player/luke-keaschall-807712"
  },
  {
    "id": "MLB-808959",
    "mlbId": 808959,
    "name": "Munetaka Murakami",
    "number": "5",
    "position": "1B",
    "positions": [
      "1B"
    ],
    "rosterPosition": "1B",
    "team": "Chicago White Sox",
    "profile": "https://www.mlb.com/player/munetaka-murakami-808959"
  },
  {
    "id": "MLB-808967",
    "mlbId": 808967,
    "name": "Yoshinobu Yamamoto",
    "number": "18",
    "position": "SP",
    "positions": [
      "SP"
    ],
    "rosterPosition": "SP",
    "team": "Los Angeles Dodgers",
    "profile": "https://www.mlb.com/player/yoshinobu-yamamoto-808967"
  },
  {
    "id": "MLB-808982",
    "mlbId": 808982,
    "name": "Jung Hoo Lee",
    "number": "51",
    "position": "RF",
    "positions": [
      "RF"
    ],
    "rosterPosition": "RF",
    "team": "San Francisco Giants",
    "profile": "https://www.mlb.com/player/jung-hoo-lee-808982",
    "injuryInclusion": "Injured 10-Day at the 2026 snapshot"
  },
  {
    "id": "MLB-814439",
    "mlbId": 814439,
    "name": "Ryan Waldschmidt",
    "number": "15",
    "position": "CF",
    "positions": [
      "CF"
    ],
    "rosterPosition": "CF",
    "team": "Arizona Diamondbacks",
    "profile": "https://www.mlb.com/player/ryan-waldschmidt-814439"
  }
];
const MLB_POSITION_INFO = {
  "season": 2026,
  "verified": "November 9, 2026",
  "source": "MLB-SOURCES.md",
  "counts": {
    "C": 31,
    "1B": 33,
    "2B": 32,
    "3B": 36,
    "SS": 32,
    "LF": 31,
    "CF": 32,
    "RF": 33,
    "DH": 25,
    "SP": 75,
    "RP": 75
  },
  "rules": {
    "batters": "Highest-2026-PA primary-position regular per team (150 PA; catchers 100 PA), plus documented injured regulars.",
    "SP": "100 innings and 15 starts; up to 75, including protected injured regulars.",
    "RP": "40 innings or 10 saves; up to 75, including protected injured regulars. Usage order: outs plus six per save.",
    "primary": "Most 2026 starts by position; 2025 starts then official roster position for injured players with no 2026 position starts. Pitchers use starting/relief appearance majority. Shohei Ohtani is the sole exception and appears in both DH and SP. Team cards retain multiple played positions.",
    "teamPositions": "Primary position plus substantial secondary roles. Infield: 20 starts and 15% of position starts, or 10 current starts plus 25 prior-season starts. Outfield: 25 starts and 25% of outfield starts. DH: 25 starts and 25% of position starts. Injured players without current starts use established prior-season roles. Ohtani is the sole two-way exception."
  }
};
const MLB_KNOWN_IDS = {
  "Athletics": [
    "MLB-675961",
    "MLB-669620",
    "MLB-667670",
    "MLB-661531",
    "MLB-666126",
    "MLB-688297",
    "MLB-672016",
    "MLB-622268",
    "MLB-680723",
    "MLB-665660",
    "MLB-695611",
    "MLB-664129",
    "MLB-703607",
    "MLB-663687",
    "MLB-669372",
    "MLB-678022",
    "MLB-682052",
    "MLB-805779",
    "MLB-643446",
    "MLB-605488",
    "MLB-641680",
    "MLB-811965",
    "MLB-686993",
    "MLB-671732",
    "MLB-665622",
    "MLB-622663",
    "MLB-643410",
    "MLB-686930",
    "MLB-691777",
    "MLB-683021",
    "MLB-701762",
    "MLB-656240",
    "MLB-686751",
    "MLB-669127",
    "MLB-695720",
    "MLB-691016",
    "MLB-814305",
    "MLB-680869"
  ],
  "Houston Astros": [
    "MLB-805123",
    "MLB-656986",
    "MLB-650556",
    "MLB-687911",
    "MLB-701358",
    "MLB-621043",
    "MLB-543877",
    "MLB-572233",
    "MLB-669713",
    "MLB-686613",
    "MLB-670623",
    "MLB-676694",
    "MLB-665161",
    "MLB-694388",
    "MLB-514888",
    "MLB-623352",
    "MLB-681973",
    "MLB-701121",
    "MLB-828599",
    "MLB-699044",
    "MLB-681347",
    "MLB-676369",
    "MLB-669397",
    "MLB-663567",
    "MLB-669384",
    "MLB-837227",
    "MLB-666211",
    "MLB-673237",
    "MLB-670541"
  ],
  "Los Angeles Angels": [
    "MLB-624428",
    "MLB-690829",
    "MLB-676620",
    "MLB-669326",
    "MLB-695681",
    "MLB-694203",
    "MLB-691946",
    "MLB-680570",
    "MLB-686799",
    "MLB-820862",
    "MLB-642350",
    "MLB-666139",
    "MLB-684665",
    "MLB-545361",
    "MLB-815083",
    "MLB-694208",
    "MLB-694384",
    "MLB-672724",
    "MLB-672282",
    "MLB-696270",
    "MLB-670245",
    "MLB-696147",
    "MLB-671111",
    "MLB-696519",
    "MLB-642048",
    "MLB-518595",
    "MLB-694680",
    "MLB-623168",
    "MLB-687093",
    "MLB-685133",
    "MLB-700712",
    "MLB-660162",
    "MLB-579328",
    "MLB-687263"
  ],
  "Seattle Mariners": [
    "MLB-662253",
    "MLB-680977",
    "MLB-693433",
    "MLB-682243",
    "MLB-663728",
    "MLB-672841",
    "MLB-702284",
    "MLB-806068",
    "MLB-681867",
    "MLB-686527",
    "MLB-660825",
    "MLB-676106",
    "MLB-642100",
    "MLB-669923",
    "MLB-571948",
    "MLB-641487",
    "MLB-640902",
    "MLB-678606",
    "MLB-647304",
    "MLB-677594",
    "MLB-807739",
    "MLB-703155",
    "MLB-660844",
    "MLB-688138",
    "MLB-669302",
    "MLB-670042",
    "MLB-666374",
    "MLB-703197",
    "MLB-621074",
    "MLB-668227",
    "MLB-622554",
    "MLB-621493",
    "MLB-700187",
    "MLB-645302",
    "MLB-642215"
  ],
  "Texas Rangers": [
    "MLB-696030",
    "MLB-607043",
    "MLB-695508",
    "MLB-681217",
    "MLB-674003",
    "MLB-683227",
    "MLB-668390",
    "MLB-608369",
    "MLB-643376",
    "MLB-553869",
    "MLB-694497",
    "MLB-677649",
    "MLB-683004",
    "MLB-594798",
    "MLB-656641",
    "MLB-669394",
    "MLB-596001",
    "MLB-656222",
    "MLB-592626",
    "MLB-656756",
    "MLB-673962",
    "MLB-679822",
    "MLB-677958",
    "MLB-543309",
    "MLB-669022",
    "MLB-680737",
    "MLB-543135",
    "MLB-670032",
    "MLB-682608",
    "MLB-695239",
    "MLB-676395",
    "MLB-592866",
    "MLB-641302",
    "MLB-694671"
  ],
  "Baltimore Orioles": [
    "MLB-544150",
    "MLB-695380",
    "MLB-552640",
    "MLB-689296",
    "MLB-677942",
    "MLB-687064",
    "MLB-676742",
    "MLB-665966",
    "MLB-605135",
    "MLB-687952",
    "MLB-681047",
    "MLB-691723",
    "MLB-681297",
    "MLB-687637",
    "MLB-642585",
    "MLB-664991",
    "MLB-683002",
    "MLB-677008",
    "MLB-702616",
    "MLB-669236",
    "MLB-676059",
    "MLB-676480",
    "MLB-677020",
    "MLB-669211",
    "MLB-680694",
    "MLB-665750",
    "MLB-673357",
    "MLB-624413",
    "MLB-677956",
    "MLB-670329",
    "MLB-664854",
    "MLB-663624",
    "MLB-694212",
    "MLB-669358",
    "MLB-669432",
    "MLB-641933",
    "MLB-666974",
    "MLB-650968",
    "MLB-621107"
  ],
  "Boston Red Sox": [
    "MLB-668939",
    "MLB-687941",
    "MLB-655316",
    "MLB-547973",
    "MLB-678394",
    "MLB-702332",
    "MLB-678882",
    "MLB-657136",
    "MLB-678554",
    "MLB-642201",
    "MLB-669062",
    "MLB-676979",
    "MLB-676477",
    "MLB-669711",
    "MLB-643396",
    "MLB-663330",
    "MLB-687562",
    "MLB-680776",
    "MLB-686580",
    "MLB-681987",
    "MLB-686765",
    "MLB-801139",
    "MLB-624133",
    "MLB-543243",
    "MLB-596115",
    "MLB-575929",
    "MLB-677800",
    "MLB-681544"
  ],
  "New York Yankees": [
    "MLB-645305",
    "MLB-683011",
    "MLB-669224",
    "MLB-700250",
    "MLB-687396",
    "MLB-693645",
    "MLB-607074",
    "MLB-641355",
    "MLB-670280",
    "MLB-518585",
    "MLB-806146",
    "MLB-543037",
    "MLB-519317",
    "MLB-671218",
    "MLB-665862",
    "MLB-670167",
    "MLB-676609",
    "MLB-671277",
    "MLB-608331",
    "MLB-621112",
    "MLB-502671",
    "MLB-641857",
    "MLB-677960",
    "MLB-642232",
    "MLB-682987",
    "MLB-663757",
    "MLB-701542"
  ],
  "Tampa Bay Rays": [
    "MLB-810938",
    "MLB-641329",
    "MLB-592155",
    "MLB-656775",
    "MLB-802415",
    "MLB-642121",
    "MLB-656876",
    "MLB-670955",
    "MLB-642547",
    "MLB-664076",
    "MLB-666158",
    "MLB-643377",
    "MLB-693855",
    "MLB-666018",
    "MLB-676356",
    "MLB-622761",
    "MLB-691406",
    "MLB-687330",
    "MLB-689414",
    "MLB-663743",
    "MLB-607259",
    "MLB-680700",
    "MLB-686752",
    "MLB-668723",
    "MLB-571927",
    "MLB-670764",
    "MLB-669330",
    "MLB-683748",
    "MLB-650490"
  ],
  "Toronto Blue Jays": [
    "MLB-680718",
    "MLB-672386",
    "MLB-665926",
    "MLB-670102",
    "MLB-678218",
    "MLB-680755",
    "MLB-676454",
    "MLB-663893",
    "MLB-703520",
    "MLB-689149",
    "MLB-807727",
    "MLB-695445",
    "MLB-676914",
    "MLB-656302",
    "MLB-676391",
    "MLB-543807",
    "MLB-592791",
    "MLB-804619",
    "MLB-621244",
    "MLB-667755",
    "MLB-669701",
    "MLB-672960",
    "MLB-686973",
    "MLB-649966",
    "MLB-689254",
    "MLB-453286",
    "MLB-664702",
    "MLB-664770",
    "MLB-571578",
    "MLB-623149",
    "MLB-815873",
    "MLB-669456",
    "MLB-693686",
    "MLB-702056",
    "MLB-643511",
    "MLB-665489"
  ],
  "Chicago White Sox": [
    "MLB-643217",
    "MLB-641743",
    "MLB-695731",
    "MLB-686668",
    "MLB-681460",
    "MLB-663542",
    "MLB-805367",
    "MLB-695657",
    "MLB-689818",
    "MLB-663436",
    "MLB-607200",
    "MLB-691799",
    "MLB-696146",
    "MLB-668670",
    "MLB-663855",
    "MLB-673929",
    "MLB-691019",
    "MLB-682668",
    "MLB-678246",
    "MLB-678024",
    "MLB-808959",
    "MLB-702273",
    "MLB-545341",
    "MLB-803011",
    "MLB-680732",
    "MLB-656794",
    "MLB-502054",
    "MLB-671976",
    "MLB-699823"
  ],
  "Cleveland Guardians": [
    "MLB-694197",
    "MLB-682657",
    "MLB-595978",
    "MLB-677587",
    "MLB-671922",
    "MLB-800050",
    "MLB-682982",
    "MLB-681807",
    "MLB-681870",
    "MLB-656492",
    "MLB-668909",
    "MLB-683769",
    "MLB-666176",
    "MLB-676282",
    "MLB-608070",
    "MLB-670036",
    "MLB-663993",
    "MLB-800048",
    "MLB-672275",
    "MLB-690984",
    "MLB-542888",
    "MLB-677944",
    "MLB-680757",
    "MLB-676440",
    "MLB-682120",
    "MLB-683953"
  ],
  "Detroit Tigers": [
    "MLB-689225",
    "MLB-701162",
    "MLB-814430",
    "MLB-690993",
    "MLB-693307",
    "MLB-623454",
    "MLB-805427",
    "MLB-680664",
    "MLB-664285",
    "MLB-650402",
    "MLB-701678",
    "MLB-690291",
    "MLB-656427",
    "MLB-695549",
    "MLB-621097",
    "MLB-595879",
    "MLB-807726",
    "MLB-434378",
    "MLB-672456",
    "MLB-445276",
    "MLB-681481",
    "MLB-805808",
    "MLB-640448",
    "MLB-663837",
    "MLB-703601",
    "MLB-681857",
    "MLB-682985",
    "MLB-689981",
    "MLB-679529",
    "MLB-700242",
    "MLB-675512",
    "MLB-680744",
    "MLB-663947",
    "MLB-641755",
    "MLB-672761",
    "MLB-676684",
    "MLB-656716"
  ],
  "Kansas City Royals": [
    "MLB-656638",
    "MLB-543238",
    "MLB-677951",
    "MLB-608032",
    "MLB-695600",
    "MLB-666142",
    "MLB-671162",
    "MLB-663738",
    "MLB-686555",
    "MLB-695506",
    "MLB-663704",
    "MLB-670231",
    "MLB-663697",
    "MLB-621016",
    "MLB-668942",
    "MLB-664728",
    "MLB-668674",
    "MLB-679883",
    "MLB-571912",
    "MLB-672580",
    "MLB-683090",
    "MLB-686681",
    "MLB-608379",
    "MLB-663878",
    "MLB-683232",
    "MLB-702070",
    "MLB-676510",
    "MLB-677976",
    "MLB-521692",
    "MLB-607625",
    "MLB-702352",
    "MLB-663568",
    "MLB-686475",
    "MLB-686469"
  ],
  "Minnesota Twins": [
    "MLB-621345",
    "MLB-693306",
    "MLB-702176",
    "MLB-702193",
    "MLB-607455",
    "MLB-668885",
    "MLB-641927",
    "MLB-805346",
    "MLB-686797",
    "MLB-621439",
    "MLB-663485",
    "MLB-687570",
    "MLB-701581",
    "MLB-665152",
    "MLB-691181",
    "MLB-656546",
    "MLB-657746",
    "MLB-605137",
    "MLB-701785",
    "MLB-665019",
    "MLB-681892",
    "MLB-807712",
    "MLB-702474",
    "MLB-641154",
    "MLB-668904",
    "MLB-680777",
    "MLB-668952",
    "MLB-671737",
    "MLB-573124",
    "MLB-667297",
    "MLB-701519",
    "MLB-663616",
    "MLB-605170",
    "MLB-805805",
    "MLB-672782",
    "MLB-805673"
  ],
  "Arizona Diamondbacks": [
    "MLB-680728",
    "MLB-694297",
    "MLB-805299",
    "MLB-669203",
    "MLB-682998",
    "MLB-642701",
    "MLB-593958",
    "MLB-672515",
    "MLB-672695",
    "MLB-545121",
    "MLB-543510",
    "MLB-642528",
    "MLB-691783",
    "MLB-703615",
    "MLB-699912",
    "MLB-666661",
    "MLB-679885",
    "MLB-606466",
    "MLB-656464",
    "MLB-663457",
    "MLB-518876",
    "MLB-647336",
    "MLB-571448",
    "MLB-656976",
    "MLB-657044",
    "MLB-814439",
    "MLB-669194",
    "MLB-664199",
    "MLB-694374",
    "MLB-668678"
  ],
  "Colorado Rockies": [
    "MLB-691182",
    "MLB-690924",
    "MLB-657514",
    "MLB-664954",
    "MLB-801403",
    "MLB-694249",
    "MLB-681393",
    "MLB-678662",
    "MLB-696100",
    "MLB-677955",
    "MLB-664983",
    "MLB-623474",
    "MLB-687597",
    "MLB-605447",
    "MLB-500779",
    "MLB-675848",
    "MLB-607536",
    "MLB-691720",
    "MLB-815081",
    "MLB-690279",
    "MLB-666160",
    "MLB-693308",
    "MLB-663372",
    "MLB-685299",
    "MLB-681198",
    "MLB-608372",
    "MLB-687859",
    "MLB-650489",
    "MLB-691728",
    "MLB-688642"
  ],
  "Los Angeles Dodgers": [
    "MLB-681911",
    "MLB-681624",
    "MLB-676508",
    "MLB-605483",
    "MLB-592779",
    "MLB-683618",
    "MLB-621242",
    "MLB-571771",
    "MLB-641778",
    "MLB-623465",
    "MLB-518692",
    "MLB-676439",
    "MLB-800543",
    "MLB-680736",
    "MLB-663460",
    "MLB-663656",
    "MLB-571970",
    "MLB-500743",
    "MLB-605141",
    "MLB-808963",
    "MLB-660271",
    "MLB-656945",
    "MLB-669373",
    "MLB-606192",
    "MLB-669242",
    "MLB-607192",
    "MLB-694361",
    "MLB-669257",
    "MLB-808967"
  ],
  "San Diego Padres": [
    "MLB-670970",
    "MLB-669720",
    "MLB-699134",
    "MLB-663554",
    "MLB-688158",
    "MLB-687957",
    "MLB-806956",
    "MLB-665487",
    "MLB-666023",
    "MLB-657757",
    "MLB-701538",
    "MLB-630105",
    "MLB-687749",
    "MLB-592094",
    "MLB-605397",
    "MLB-608337",
    "MLB-669134",
    "MLB-650859",
    "MLB-592518",
    "MLB-695243",
    "MLB-650633",
    "MLB-609280",
    "MLB-601713",
    "MLB-657656",
    "MLB-592662",
    "MLB-669392",
    "MLB-664034",
    "MLB-621111",
    "MLB-593428",
    "MLB-673513"
  ],
  "San Francisco Giants": [
    "MLB-605288",
    "MLB-668800",
    "MLB-683627",
    "MLB-694918",
    "MLB-815589",
    "MLB-694820",
    "MLB-695391",
    "MLB-805811",
    "MLB-666808",
    "MLB-693313",
    "MLB-687931",
    "MLB-669477",
    "MLB-683766",
    "MLB-701852",
    "MLB-687551",
    "MLB-701474",
    "MLB-681916",
    "MLB-687529",
    "MLB-664056",
    "MLB-806185",
    "MLB-671345",
    "MLB-669270",
    "MLB-813841",
    "MLB-676130",
    "MLB-664141",
    "MLB-808982",
    "MLB-676775",
    "MLB-694738",
    "MLB-657277",
    "MLB-691785",
    "MLB-656305",
    "MLB-657424",
    "MLB-683363",
    "MLB-678545",
    "MLB-646240",
    "MLB-678495",
    "MLB-656529",
    "MLB-814154",
    "MLB-675920",
    "MLB-694376",
    "MLB-805345",
    "MLB-686790",
    "MLB-663941",
    "MLB-806367",
    "MLB-682674",
    "MLB-642715"
  ],
  "Atlanta Braves": [
    "MLB-700363",
    "MLB-663586",
    "MLB-608718",
    "MLB-676551",
    "MLB-519242",
    "MLB-800311",
    "MLB-686948",
    "MLB-689266",
    "MLB-669276",
    "MLB-656550",
    "MLB-673490",
    "MLB-666214",
    "MLB-702275",
    "MLB-657041",
    "MLB-621566",
    "MLB-643289",
    "MLB-671739",
    "MLB-573262",
    "MLB-645277",
    "MLB-628452",
    "MLB-678061",
    "MLB-663158",
    "MLB-660670",
    "MLB-642133",
    "MLB-669221",
    "MLB-680885",
    "MLB-675911",
    "MLB-641816",
    "MLB-682989"
  ],
  "Miami Marlins": [
    "MLB-682663",
    "MLB-677053",
    "MLB-669622",
    "MLB-687134",
    "MLB-640459",
    "MLB-806188",
    "MLB-676534",
    "MLB-690978",
    "MLB-691277",
    "MLB-665923",
    "MLB-691587",
    "MLB-688363",
    "MLB-665052",
    "MLB-681715",
    "MLB-667652",
    "MLB-805300",
    "MLB-676083",
    "MLB-691858",
    "MLB-691594",
    "MLB-691788",
    "MLB-694795",
    "MLB-669065",
    "MLB-676974",
    "MLB-656848",
    "MLB-672640",
    "MLB-683357",
    "MLB-664126",
    "MLB-678692",
    "MLB-687473",
    "MLB-645261",
    "MLB-663969",
    "MLB-676604",
    "MLB-680767",
    "MLB-682790",
    "MLB-669364"
  ],
  "New York Mets": [
    "MLB-805999",
    "MLB-681810",
    "MLB-666182",
    "MLB-683146",
    "MLB-701807",
    "MLB-694646",
    "MLB-681035",
    "MLB-666624",
    "MLB-672335",
    "MLB-665506",
    "MLB-673380",
    "MLB-642207",
    "MLB-682626",
    "MLB-596019",
    "MLB-676724",
    "MLB-642376",
    "MLB-804636",
    "MLB-593871",
    "MLB-665742",
    "MLB-663795",
    "MLB-673540",
    "MLB-620443",
    "MLB-543760",
    "MLB-668901",
    "MLB-681320",
    "MLB-703492",
    "MLB-690997",
    "MLB-657585",
    "MLB-476594",
    "MLB-677595",
    "MLB-640455",
    "MLB-668964",
    "MLB-656731",
    "MLB-804267"
  ],
  "Philadelphia Phillies": [
    "MLB-605400",
    "MLB-666969",
    "MLB-664761",
    "MLB-686934",
    "MLB-691725",
    "MLB-641745",
    "MLB-669016",
    "MLB-650559",
    "MLB-547180",
    "MLB-681082",
    "MLB-668873",
    "MLB-663767",
    "MLB-650911",
    "MLB-656537",
    "MLB-624641",
    "MLB-596117",
    "MLB-592663",
    "MLB-666200",
    "MLB-661395",
    "MLB-680742",
    "MLB-621237",
    "MLB-702222",
    "MLB-656941",
    "MLB-805249",
    "MLB-665561",
    "MLB-621383",
    "MLB-641835",
    "MLB-607208",
    "MLB-554430"
  ],
  "Washington Nationals": [
    "MLB-694673",
    "MLB-665953",
    "MLB-674841",
    "MLB-695418",
    "MLB-691781",
    "MLB-676917",
    "MLB-682928",
    "MLB-813349",
    "MLB-695734",
    "MLB-687792",
    "MLB-686611",
    "MLB-680899",
    "MLB-681402",
    "MLB-695670",
    "MLB-695378",
    "MLB-696285",
    "MLB-663623",
    "MLB-695578",
    "MLB-678391",
    "MLB-677588",
    "MLB-680686",
    "MLB-660688",
    "MLB-680730",
    "MLB-683083",
    "MLB-687377",
    "MLB-676571",
    "MLB-663992",
    "MLB-683000",
    "MLB-702021",
    "MLB-691002",
    "MLB-672442"
  ],
  "Chicago Cubs": [
    "MLB-650644",
    "MLB-608324",
    "MLB-676962",
    "MLB-690990",
    "MLB-608348",
    "MLB-605280",
    "MLB-607067",
    "MLB-694037",
    "MLB-621020",
    "MLB-656849",
    "MLB-672356",
    "MLB-664023",
    "MLB-657097",
    "MLB-665871",
    "MLB-592332",
    "MLB-807713",
    "MLB-571510",
    "MLB-683737",
    "MLB-624424",
    "MLB-665804",
    "MLB-663538",
    "MLB-699393",
    "MLB-691718",
    "MLB-664208",
    "MLB-669020",
    "MLB-666171",
    "MLB-673548",
    "MLB-571946",
    "MLB-684007",
    "MLB-621438"
  ],
  "Cincinnati Reds": [
    "MLB-671096",
    "MLB-663903",
    "MLB-682227",
    "MLB-656271",
    "MLB-699115",
    "MLB-686730",
    "MLB-695505",
    "MLB-667472",
    "MLB-682829",
    "MLB-641941",
    "MLB-553993",
    "MLB-668933",
    "MLB-699302",
    "MLB-668881",
    "MLB-668709",
    "MLB-624431",
    "MLB-682877",
    "MLB-670062",
    "MLB-663647",
    "MLB-682825",
    "MLB-680574",
    "MLB-669911",
    "MLB-666157",
    "MLB-665828",
    "MLB-572955",
    "MLB-695076",
    "MLB-701398",
    "MLB-668715",
    "MLB-622088",
    "MLB-663574",
    "MLB-663886",
    "MLB-677943",
    "MLB-685112"
  ],
  "Milwaukee Brewers": [
    "MLB-676879",
    "MLB-682842",
    "MLB-683734",
    "MLB-672582",
    "MLB-622608",
    "MLB-605540",
    "MLB-668930",
    "MLB-592885",
    "MLB-806198",
    "MLB-666152",
    "MLB-669084",
    "MLB-669160",
    "MLB-669003",
    "MLB-596142",
    "MLB-694192",
    "MLB-694819",
    "MLB-641343",
    "MLB-687401",
    "MLB-668941",
    "MLB-690986",
    "MLB-701656",
    "MLB-800325",
    "MLB-682990",
    "MLB-688107",
    "MLB-686217",
    "MLB-675660",
    "MLB-656730",
    "MLB-661388"
  ],
  "Pittsburgh Pirates": [
    "MLB-699008",
    "MLB-695257",
    "MLB-685126",
    "MLB-664040",
    "MLB-677952",
    "MLB-668804",
    "MLB-696149",
    "MLB-669387",
    "MLB-699013",
    "MLB-642397",
    "MLB-680779",
    "MLB-682995",
    "MLB-676755",
    "MLB-694378",
    "MLB-663968",
    "MLB-683003",
    "MLB-669707",
    "MLB-489446",
    "MLB-804606",
    "MLB-669199",
    "MLB-596133",
    "MLB-682254",
    "MLB-656605",
    "MLB-693304",
    "MLB-668716",
    "MLB-665833",
    "MLB-694973",
    "MLB-804668",
    "MLB-682927",
    "MLB-656811",
    "MLB-687462",
    "MLB-670990"
  ],
  "St. Louis Cardinals": [
    "MLB-676475",
    "MLB-669467",
    "MLB-663494",
    "MLB-802408",
    "MLB-685464",
    "MLB-693409",
    "MLB-666277",
    "MLB-700669",
    "MLB-684516",
    "MLB-690928",
    "MLB-671056",
    "MLB-802139",
    "MLB-691023",
    "MLB-665877",
    "MLB-677865",
    "MLB-681517",
    "MLB-699024",
    "MLB-703725",
    "MLB-691026",
    "MLB-669461",
    "MLB-700241",
    "MLB-701675",
    "MLB-669357",
    "MLB-686780",
    "MLB-687273",
    "MLB-676617",
    "MLB-592773",
    "MLB-695336",
    "MLB-687363"
  ]
};