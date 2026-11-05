// Official active-roster snapshots verified November 5, 2026. See DATA-SOURCES.md.
const TEAM_INFO = {
  "Baltimore Ravens": {
    "code": "BAL",
    "nickname": "Ravens",
    "singular": "Raven",
    "source": "https://www.baltimoreravens.com/team/players-roster/",
    "colors": {
      "primary": "#241773",
      "accent": "#9E7C0C",
      "highlight": "#e4bd62",
      "ink": "#100e12"
    },
    "division": "AFC North"
  },
  "Cincinnati Bengals": {
    "code": "CIN",
    "nickname": "Bengals",
    "singular": "Bengal",
    "source": "https://www.bengals.com/team/players-roster/",
    "colors": {
      "primary": "#FB4F14",
      "accent": "#000000",
      "highlight": "#FB4F14",
      "ink": "#100e12"
    },
    "division": "AFC North"
  },
  "Pittsburgh Steelers": {
    "code": "PIT",
    "nickname": "Steelers",
    "singular": "Steeler",
    "source": "https://www.steelers.com/team/players-roster/",
    "colors": {
      "primary": "#101820",
      "accent": "#FFB612",
      "highlight": "#FFB612",
      "ink": "#100e12"
    },
    "division": "AFC North"
  },
  "Cleveland Browns": {
    "code": "CLE",
    "nickname": "Browns",
    "singular": "Brown",
    "source": "https://www.clevelandbrowns.com/team/players-roster/",
    "colors": {
      "primary": "#311D00",
      "accent": "#FF3C00",
      "highlight": "#ff865f",
      "ink": "#100e12"
    },
    "division": "AFC North"
  },
  "Buffalo Bills": {
    "name": "Buffalo Bills",
    "code": "BUF",
    "nickname": "Bills",
    "singular": "Bill",
    "source": "https://www.buffalobills.com/team/players-roster/",
    "colors": {
      "primary": "#00338D",
      "accent": "#C60C30",
      "highlight": "#8ebcff",
      "ink": "#101014"
    },
    "division": "AFC East"
  },
  "Miami Dolphins": {
    "name": "Miami Dolphins",
    "code": "MIA",
    "nickname": "Dolphins",
    "singular": "Dolphin",
    "source": "https://www.miamidolphins.com/team/players-roster/",
    "colors": {
      "primary": "#008E97",
      "accent": "#FC4C02",
      "highlight": "#70e2dd",
      "ink": "#101014"
    },
    "division": "AFC East"
  },
  "New England Patriots": {
    "name": "New England Patriots",
    "code": "NE",
    "nickname": "Patriots",
    "singular": "Patriot",
    "source": "https://www.patriots.com/team/players-roster/",
    "colors": {
      "primary": "#002244",
      "accent": "#C60C30",
      "highlight": "#a9c9ed",
      "ink": "#101014"
    },
    "division": "AFC East"
  },
  "New York Jets": {
    "name": "New York Jets",
    "code": "NYJ",
    "nickname": "Jets",
    "singular": "Jet",
    "source": "https://www.newyorkjets.com/team/players-roster/",
    "colors": {
      "primary": "#125740",
      "accent": "#FFFFFF",
      "highlight": "#8bdbb5",
      "ink": "#101014"
    },
    "division": "AFC East"
  },
  "Houston Texans": {
    "name": "Houston Texans",
    "code": "HOU",
    "nickname": "Texans",
    "singular": "Texan",
    "source": "https://www.houstontexans.com/team/players-roster/",
    "colors": {
      "primary": "#03202F",
      "accent": "#A71930",
      "highlight": "#a9d1f0",
      "ink": "#101014"
    },
    "division": "AFC South"
  },
  "Indianapolis Colts": {
    "name": "Indianapolis Colts",
    "code": "IND",
    "nickname": "Colts",
    "singular": "Colt",
    "source": "https://www.colts.com/team/players-roster/",
    "colors": {
      "primary": "#002C5F",
      "accent": "#A2AAAD",
      "highlight": "#a5c9ff",
      "ink": "#101014"
    },
    "division": "AFC South"
  },
  "Jacksonville Jaguars": {
    "name": "Jacksonville Jaguars",
    "code": "JAX",
    "nickname": "Jaguars",
    "singular": "Jaguar",
    "source": "https://www.jaguars.com/team/players-roster/",
    "colors": {
      "primary": "#006778",
      "accent": "#D7A22A",
      "highlight": "#7ddbd4",
      "ink": "#101014"
    },
    "division": "AFC South"
  },
  "Tennessee Titans": {
    "name": "Tennessee Titans",
    "code": "TEN",
    "nickname": "Titans",
    "singular": "Titan",
    "source": "https://www.tennesseetitans.com/team/players-roster/",
    "colors": {
      "primary": "#0C2340",
      "accent": "#4B92DB",
      "highlight": "#a2d0ff",
      "ink": "#101014"
    },
    "division": "AFC South"
  }
};
const ROSTERS = {
  "Baltimore Ravens": [
    {
      "name": "Rasheen Ali",
      "number": "26",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Baltimore Ravens",
      "id": "BAL-0",
      "profile": "https://www.baltimoreravens.com/team/players-roster/rasheen-ali/"
    },
    {
      "name": "Mark Andrews",
      "number": "89",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Baltimore Ravens",
      "id": "BAL-1",
      "profile": "https://www.baltimoreravens.com/team/players-roster/mark-andrews/"
    },
    {
      "name": "Chidobe Awuzie",
      "number": "3",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Baltimore Ravens",
      "id": "BAL-2",
      "profile": "https://www.baltimoreravens.com/team/players-roster/chidobe-awuzie/"
    },
    {
      "name": "Rashod Bateman",
      "number": "7",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Baltimore Ravens",
      "id": "BAL-3",
      "profile": "https://www.baltimoreravens.com/team/players-roster/rashod-bateman/"
    },
    {
      "name": "Teddye Buchanan",
      "number": "40",
      "position": "LB",
      "rosterPosition": "ILB",
      "team": "Baltimore Ravens",
      "id": "BAL-4",
      "profile": "https://www.baltimoreravens.com/team/players-roster/teddye-buchanan/"
    },
    {
      "name": "Ethan Burke",
      "number": "97",
      "position": "LB",
      "rosterPosition": "OLB",
      "team": "Baltimore Ravens",
      "id": "BAL-5",
      "profile": "https://www.baltimoreravens.com/team/players-roster/ethan-burke/"
    },
    {
      "name": "Calais Campbell",
      "number": "93",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Baltimore Ravens",
      "id": "BAL-6",
      "profile": "https://www.baltimoreravens.com/team/players-roster/calais-campbell/"
    },
    {
      "name": "Josh Cuevas",
      "number": "85",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Baltimore Ravens",
      "id": "BAL-7",
      "profile": "https://www.baltimoreravens.com/team/players-roster/josh-cuevas/"
    },
    {
      "name": "Ryan Eckley",
      "number": "30",
      "position": "ST",
      "rosterPosition": "P",
      "team": "Baltimore Ravens",
      "id": "BAL-8",
      "profile": "https://www.baltimoreravens.com/team/players-roster/ryan-eckley/"
    },
    {
      "name": "Joe Fagnano",
      "number": "12",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Baltimore Ravens",
      "id": "BAL-9",
      "profile": "https://www.baltimoreravens.com/team/players-roster/joe-fagnano/"
    },
    {
      "name": "Zay Flowers",
      "number": "4",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Baltimore Ravens",
      "id": "BAL-10",
      "profile": "https://www.baltimoreravens.com/team/players-roster/zay-flowers/"
    },
    {
      "name": "Mike Green",
      "number": "15",
      "position": "LB",
      "rosterPosition": "OLB",
      "team": "Baltimore Ravens",
      "id": "BAL-11",
      "profile": "https://www.baltimoreravens.com/team/players-roster/mike-green/"
    },
    {
      "name": "Kyle Hamilton",
      "number": "14",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Baltimore Ravens",
      "id": "BAL-12",
      "profile": "https://www.baltimoreravens.com/team/players-roster/kyle-hamilton/"
    },
    {
      "name": "Jaylinn Hawkins",
      "number": "21",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Baltimore Ravens",
      "id": "BAL-13",
      "profile": "https://www.baltimoreravens.com/team/players-roster/jaylinn-hawkins/"
    },
    {
      "name": "Trey Hendrickson",
      "number": "91",
      "position": "LB",
      "rosterPosition": "OLB",
      "team": "Baltimore Ravens",
      "id": "BAL-14",
      "profile": "https://www.baltimoreravens.com/team/players-roster/trey-hendrickson-x3131/"
    },
    {
      "name": "Derrick Henry",
      "number": "22",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Baltimore Ravens",
      "id": "BAL-15",
      "profile": "https://www.baltimoreravens.com/team/players-roster/derrick-henry-x7588/"
    },
    {
      "name": "Kyle Hergel",
      "number": "60",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Baltimore Ravens",
      "id": "BAL-16",
      "profile": "https://www.baltimoreravens.com/team/players-roster/kyle-hergel/"
    },
    {
      "name": "Matt Hibner",
      "number": "88",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Baltimore Ravens",
      "id": "BAL-17",
      "profile": "https://www.baltimoreravens.com/team/players-roster/matt-hibner/"
    },
    {
      "name": "Jay Higgins IV",
      "number": "49",
      "position": "LB",
      "rosterPosition": "ILB",
      "team": "Baltimore Ravens",
      "id": "BAL-18",
      "profile": "https://www.baltimoreravens.com/team/players-roster/jay-higgins/"
    },
    {
      "name": "Justice Hill",
      "number": "43",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Baltimore Ravens",
      "id": "BAL-19",
      "profile": "https://www.baltimoreravens.com/team/players-roster/justice-hill/"
    },
    {
      "name": "Marlon Humphrey",
      "number": "44",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Baltimore Ravens",
      "id": "BAL-20",
      "profile": "https://www.baltimoreravens.com/team/players-roster/marlon-humphrey/"
    },
    {
      "name": "Tyler Huntley",
      "number": "5",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Baltimore Ravens",
      "id": "BAL-21",
      "profile": "https://www.baltimoreravens.com/team/players-roster/tyler-huntley/"
    },
    {
      "name": "Vega Ioane",
      "number": "71",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Baltimore Ravens",
      "id": "BAL-22",
      "profile": "https://www.baltimoreravens.com/team/players-roster/olaivavega-ioane/"
    },
    {
      "name": "Keondre Jackson",
      "number": "39",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Baltimore Ravens",
      "id": "BAL-23",
      "profile": "https://www.baltimoreravens.com/team/players-roster/keondre-jackson/"
    },
    {
      "name": "Lamar Jackson",
      "number": "8",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Baltimore Ravens",
      "id": "BAL-24",
      "profile": "https://www.baltimoreravens.com/team/players-roster/lamar-jackson/"
    },
    {
      "name": "John Jenkins",
      "number": "94",
      "position": "DL",
      "rosterPosition": "NT",
      "team": "Baltimore Ravens",
      "id": "BAL-25",
      "profile": "https://www.baltimoreravens.com/team/players-roster/john-jenkins/"
    },
    {
      "name": "Emery Jones Jr.",
      "number": "51",
      "position": "OL",
      "rosterPosition": "G/T",
      "team": "Baltimore Ravens",
      "id": "BAL-26",
      "profile": "https://www.baltimoreravens.com/team/players-roster/emery-jones-jr/"
    },
    {
      "name": "Travis Jones",
      "number": "98",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Baltimore Ravens",
      "id": "BAL-27",
      "profile": "https://www.baltimoreravens.com/team/players-roster/travis-jones/"
    },
    {
      "name": "Cam Jurgens",
      "number": "64",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Baltimore Ravens",
      "id": "BAL-28",
      "profile": "https://www.baltimoreravens.com/team/players-roster/cam-jurgens/"
    },
    {
      "name": "Ja'Kobi Lane",
      "number": "6",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Baltimore Ravens",
      "id": "BAL-29",
      "profile": "https://www.baltimoreravens.com/team/players-roster/ja-kobi-lane/"
    },
    {
      "name": "Nnamdi Madubuike",
      "number": "92",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Baltimore Ravens",
      "id": "BAL-30",
      "profile": "https://www.baltimoreravens.com/team/players-roster/justin-madubuike/"
    },
    {
      "name": "Keyon Martin",
      "number": "38",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Baltimore Ravens",
      "id": "BAL-31",
      "profile": "https://www.baltimoreravens.com/team/players-roster/keyon-martin/"
    },
    {
      "name": "Nick Moore",
      "number": "46",
      "position": "ST",
      "rosterPosition": "LS",
      "team": "Baltimore Ravens",
      "id": "BAL-32",
      "profile": "https://www.baltimoreravens.com/team/players-roster/nick-moore/"
    },
    {
      "name": "Aeneas Peebles",
      "number": "90",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Baltimore Ravens",
      "id": "BAL-33",
      "profile": "https://www.baltimoreravens.com/team/players-roster/aeneas-peebles/"
    },
    {
      "name": "Chandler Rivers",
      "number": "29",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Baltimore Ravens",
      "id": "BAL-34",
      "profile": "https://www.baltimoreravens.com/team/players-roster/chandler-rivers/"
    },
    {
      "name": "Roger Rosengarten",
      "number": "70",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Baltimore Ravens",
      "id": "BAL-35",
      "profile": "https://www.baltimoreravens.com/team/players-roster/roger-rosengarten/"
    },
    {
      "name": "Elijah Sarratt",
      "number": "13",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Baltimore Ravens",
      "id": "BAL-36",
      "profile": "https://www.baltimoreravens.com/team/players-roster/elijah-sarratt/"
    },
    {
      "name": "John Simpson",
      "number": "74",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Baltimore Ravens",
      "id": "BAL-37",
      "profile": "https://www.baltimoreravens.com/team/players-roster/john-simpson/"
    },
    {
      "name": "Trenton Simpson",
      "number": "32",
      "position": "LB",
      "rosterPosition": "ILB",
      "team": "Baltimore Ravens",
      "id": "BAL-38",
      "profile": "https://www.baltimoreravens.com/team/players-roster/trenton-simpson/"
    },
    {
      "name": "Kedon Slovis",
      "number": "18",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Baltimore Ravens",
      "id": "BAL-39",
      "profile": "https://www.baltimoreravens.com/team/players-roster/kedon-slovis/"
    },
    {
      "name": "Roquan Smith",
      "number": "0",
      "position": "LB",
      "rosterPosition": "ILB",
      "team": "Baltimore Ravens",
      "id": "BAL-40",
      "profile": "https://www.baltimoreravens.com/team/players-roster/roquan-smith/"
    },
    {
      "name": "Ronnie Stanley",
      "number": "79",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Baltimore Ravens",
      "id": "BAL-41",
      "profile": "https://www.baltimoreravens.com/team/players-roster/ronnie-stanley/"
    },
    {
      "name": "Malaki Starks",
      "number": "24",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Baltimore Ravens",
      "id": "BAL-42",
      "profile": "https://www.baltimoreravens.com/team/players-roster/malaki-starks/"
    },
    {
      "name": "T.J. Tampa Jr.",
      "number": "27",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Baltimore Ravens",
      "id": "BAL-43",
      "profile": "https://www.baltimoreravens.com/team/players-roster/t-j-tampa/"
    },
    {
      "name": "Nick Vannett",
      "number": "87",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Baltimore Ravens",
      "id": "BAL-44",
      "profile": "https://www.baltimoreravens.com/team/players-roster/nick-vannett/"
    },
    {
      "name": "Carson Vinson",
      "number": "76",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Baltimore Ravens",
      "id": "BAL-45",
      "profile": "https://www.baltimoreravens.com/team/players-roster/carson-vinson/"
    },
    {
      "name": "Andrew Vorhees",
      "number": "72",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Baltimore Ravens",
      "id": "BAL-46",
      "profile": "https://www.baltimoreravens.com/team/players-roster/andrew-vorhees/"
    },
    {
      "name": "Devontez Walker",
      "number": "81",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Baltimore Ravens",
      "id": "BAL-47",
      "profile": "https://www.baltimoreravens.com/team/players-roster/devontez-walker/"
    },
    {
      "name": "K'Von Wallace",
      "number": "25",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Baltimore Ravens",
      "id": "BAL-48",
      "profile": "https://www.baltimoreravens.com/team/players-roster/k-von-wallace/"
    },
    {
      "name": "Broderick Washington Jr.",
      "number": "96",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Baltimore Ravens",
      "id": "BAL-49",
      "profile": "https://www.baltimoreravens.com/team/players-roster/broderick-washington/"
    },
    {
      "name": "LaJohntay Wester",
      "number": "10",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Baltimore Ravens",
      "id": "BAL-50",
      "profile": "https://www.baltimoreravens.com/team/players-roster/lajohntay-wester/"
    },
    {
      "name": "Nate Wiggins",
      "number": "2",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Baltimore Ravens",
      "id": "BAL-51",
      "profile": "https://www.baltimoreravens.com/team/players-roster/nate-wiggins/"
    },
    {
      "name": "Zion Young",
      "number": "9",
      "position": "LB",
      "rosterPosition": "OLB",
      "team": "Baltimore Ravens",
      "id": "BAL-52",
      "profile": "https://www.baltimoreravens.com/team/players-roster/zion-young/"
    }
  ],
  "Cincinnati Bengals": [
    {
      "name": "Jonathan Allen",
      "number": "93",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Cincinnati Bengals",
      "id": "CIN-0",
      "profile": "https://www.bengals.com/team/players-roster/jonathan-allen/"
    },
    {
      "name": "Jordan Battle",
      "number": "27",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Cincinnati Bengals",
      "id": "CIN-1",
      "profile": "https://www.bengals.com/team/players-roster/jordan-battle/"
    },
    {
      "name": "Jacob Bayer",
      "number": "69",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Cincinnati Bengals",
      "id": "CIN-2",
      "profile": "https://www.bengals.com/team/players-roster/jacob-bayer/"
    },
    {
      "name": "Tahj Brooks",
      "number": "25",
      "position": "RB",
      "rosterPosition": "HB",
      "team": "Cincinnati Bengals",
      "id": "CIN-3",
      "profile": "https://www.bengals.com/team/players-roster/tahj-brooks/"
    },
    {
      "name": "Chase Brown",
      "number": "30",
      "position": "RB",
      "rosterPosition": "HB",
      "team": "Cincinnati Bengals",
      "id": "CIN-4",
      "profile": "https://www.bengals.com/team/players-roster/chase-brown/"
    },
    {
      "name": "Orlando Brown Jr.",
      "number": "75",
      "position": "OL",
      "rosterPosition": "OT",
      "team": "Cincinnati Bengals",
      "id": "CIN-5",
      "profile": "https://www.bengals.com/team/players-roster/orlando-brown/"
    },
    {
      "name": "Oren Burks",
      "number": "42",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Cincinnati Bengals",
      "id": "CIN-6",
      "profile": "https://www.bengals.com/team/players-roster/oren-burks/"
    },
    {
      "name": "Joe Burrow",
      "number": "9",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Cincinnati Bengals",
      "id": "CIN-7",
      "profile": "https://www.bengals.com/team/players-roster/joe-burrow/"
    },
    {
      "name": "Barrett Carter",
      "number": "49",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Cincinnati Bengals",
      "id": "CIN-8",
      "profile": "https://www.bengals.com/team/players-roster/barrett-carter/"
    },
    {
      "name": "Ja'Marr Chase",
      "number": "1",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Cincinnati Bengals",
      "id": "CIN-9",
      "profile": "https://www.bengals.com/team/players-roster/ja-marr-chase/"
    },
    {
      "name": "Bryan Cook",
      "number": "6",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Cincinnati Bengals",
      "id": "CIN-10",
      "profile": "https://www.bengals.com/team/players-roster/bryan-cook/"
    },
    {
      "name": "Tacario Davis",
      "number": "20",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Cincinnati Bengals",
      "id": "CIN-11",
      "profile": "https://www.bengals.com/team/players-roster/tacario-davis-x8390/"
    },
    {
      "name": "Kyle Dugger",
      "number": "29",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Cincinnati Bengals",
      "id": "CIN-12",
      "profile": "https://www.bengals.com/team/players-roster/kyle-dugger/"
    },
    {
      "name": "Jack Endries",
      "number": "84",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Cincinnati Bengals",
      "id": "CIN-13",
      "profile": "https://www.bengals.com/team/players-roster/jack-endries/"
    },
    {
      "name": "Dylan Fairchild",
      "number": "63",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Cincinnati Bengals",
      "id": "CIN-14",
      "profile": "https://www.bengals.com/team/players-roster/dylan-fairchild/"
    },
    {
      "name": "Joe Flacco",
      "number": "16",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Cincinnati Bengals",
      "id": "CIN-15",
      "profile": "https://www.bengals.com/team/players-roster/joe-flacco/"
    },
    {
      "name": "Javon Foster",
      "number": "73",
      "position": "OL",
      "rosterPosition": "OT",
      "team": "Cincinnati Bengals",
      "id": "CIN-16",
      "profile": "https://www.bengals.com/team/players-roster/javon-foster/"
    },
    {
      "name": "Mike Gesicki",
      "number": "88",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Cincinnati Bengals",
      "id": "CIN-17",
      "profile": "https://www.bengals.com/team/players-roster/mike-gesicki/"
    },
    {
      "name": "Joe Giles-Harris",
      "number": "43",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Cincinnati Bengals",
      "id": "CIN-18",
      "profile": "https://www.bengals.com/team/players-roster/joe-giles-harris/"
    },
    {
      "name": "Cam Grandy",
      "number": "85",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Cincinnati Bengals",
      "id": "CIN-19",
      "profile": "https://www.bengals.com/team/players-roster/cam-grandy/"
    },
    {
      "name": "Tee Higgins",
      "number": "5",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Cincinnati Bengals",
      "id": "CIN-20",
      "profile": "https://www.bengals.com/team/players-roster/tee-higgins/"
    },
    {
      "name": "B.J. Hill",
      "number": "92",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Cincinnati Bengals",
      "id": "CIN-21",
      "profile": "https://www.bengals.com/team/players-roster/b-j-hill/"
    },
    {
      "name": "Dax Hill",
      "number": "23",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Cincinnati Bengals",
      "id": "CIN-22",
      "profile": "https://www.bengals.com/team/players-roster/dax-hill/"
    },
    {
      "name": "Myles Hinton",
      "number": "77",
      "position": "OL",
      "rosterPosition": "OT",
      "team": "Cincinnati Bengals",
      "id": "CIN-23",
      "profile": "https://www.bengals.com/team/players-roster/myles-hinton/"
    },
    {
      "name": "DJ Ivey",
      "number": "38",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Cincinnati Bengals",
      "id": "CIN-24",
      "profile": "https://www.bengals.com/team/players-roster/d-j-ivey/"
    },
    {
      "name": "Kris Jenkins Jr.",
      "number": "90",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Cincinnati Bengals",
      "id": "CIN-25",
      "profile": "https://www.bengals.com/team/players-roster/kris-jenkins/"
    },
    {
      "name": "Cedric Johnson",
      "number": "52",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Cincinnati Bengals",
      "id": "CIN-26",
      "profile": "https://www.bengals.com/team/players-roster/cedric-johnson/"
    },
    {
      "name": "PJ Jules",
      "number": "37",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Cincinnati Bengals",
      "id": "CIN-27",
      "profile": "https://www.bengals.com/team/players-roster/pj-jules/"
    },
    {
      "name": "Ted Karras",
      "number": "64",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Cincinnati Bengals",
      "id": "CIN-28",
      "profile": "https://www.bengals.com/team/players-roster/ted-karras/"
    },
    {
      "name": "Jack Kiser",
      "number": "45",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Cincinnati Bengals",
      "id": "CIN-29",
      "profile": "https://www.bengals.com/team/players-roster/jack-kiser/"
    },
    {
      "name": "Demetrius Knight Jr.",
      "number": "44",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Cincinnati Bengals",
      "id": "CIN-30",
      "profile": "https://www.bengals.com/team/players-roster/demetrius-knight-jr/"
    },
    {
      "name": "Dexter Lawrence II",
      "number": "97",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Cincinnati Bengals",
      "id": "CIN-31",
      "profile": "https://www.bengals.com/team/players-roster/dexter-lawrence/"
    },
    {
      "name": "Connor Lew",
      "number": "65",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Cincinnati Bengals",
      "id": "CIN-32",
      "profile": "https://www.bengals.com/team/players-roster/connor-lew/"
    },
    {
      "name": "Boye Mafe",
      "number": "53",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Cincinnati Bengals",
      "id": "CIN-33",
      "profile": "https://www.bengals.com/team/players-roster/boye-mafe/"
    },
    {
      "name": "Evan McPherson",
      "number": "2",
      "position": "ST",
      "rosterPosition": "K",
      "team": "Cincinnati Bengals",
      "id": "CIN-34",
      "profile": "https://www.bengals.com/team/players-roster/evan-mcpherson/"
    },
    {
      "name": "Dohnte Meyers",
      "number": "81",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Cincinnati Bengals",
      "id": "CIN-35",
      "profile": "https://www.bengals.com/team/players-roster/dohnte-meyers/"
    },
    {
      "name": "Amarius Mims",
      "number": "71",
      "position": "OL",
      "rosterPosition": "OT",
      "team": "Cincinnati Bengals",
      "id": "CIN-36",
      "profile": "https://www.bengals.com/team/players-roster/amarius-mims/"
    },
    {
      "name": "Myles Murphy",
      "number": "99",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Cincinnati Bengals",
      "id": "CIN-37",
      "profile": "https://www.bengals.com/team/players-roster/myles-murphy/"
    },
    {
      "name": "Josh Newton",
      "number": "28",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Cincinnati Bengals",
      "id": "CIN-38",
      "profile": "https://www.bengals.com/team/players-roster/josh-newton/"
    },
    {
      "name": "Samaje Perine",
      "number": "34",
      "position": "RB",
      "rosterPosition": "HB",
      "team": "Cincinnati Bengals",
      "id": "CIN-39",
      "profile": "https://www.bengals.com/team/players-roster/samaje-perine/"
    },
    {
      "name": "Ryan Rehkow",
      "number": "8",
      "position": "ST",
      "rosterPosition": "P",
      "team": "Cincinnati Bengals",
      "id": "CIN-40",
      "profile": "https://www.bengals.com/team/players-roster/ryan-rehkow/"
    },
    {
      "name": "Dalton Risner",
      "number": "66",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Cincinnati Bengals",
      "id": "CIN-41",
      "profile": "https://www.bengals.com/team/players-roster/dalton-risner/"
    },
    {
      "name": "Jalen Rivers",
      "number": "74",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Cincinnati Bengals",
      "id": "CIN-42",
      "profile": "https://www.bengals.com/team/players-roster/jalen-rivers/"
    },
    {
      "name": "Landon Robinson",
      "number": "96",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Cincinnati Bengals",
      "id": "CIN-43",
      "profile": "https://www.bengals.com/team/players-roster/landon-robinson/"
    },
    {
      "name": "Drew Sample",
      "number": "89",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Cincinnati Bengals",
      "id": "CIN-44",
      "profile": "https://www.bengals.com/team/players-roster/drew-sample/"
    },
    {
      "name": "T.J. Slaton Jr.",
      "number": "98",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Cincinnati Bengals",
      "id": "CIN-45",
      "profile": "https://www.bengals.com/team/players-roster/t-j-slaton-jr/"
    },
    {
      "name": "Shemar Stewart",
      "number": "94",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Cincinnati Bengals",
      "id": "CIN-46",
      "profile": "https://www.bengals.com/team/players-roster/shemar-stewart/"
    },
    {
      "name": "Mitch Tinsley",
      "number": "82",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Cincinnati Bengals",
      "id": "CIN-47",
      "profile": "https://www.bengals.com/team/players-roster/mitchell-tinsley/"
    },
    {
      "name": "DJ Turner II",
      "number": "0",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Cincinnati Bengals",
      "id": "CIN-48",
      "profile": "https://www.bengals.com/team/players-roster/dj-turner-ii/"
    },
    {
      "name": "William Wagner",
      "number": "46",
      "position": "ST",
      "rosterPosition": "LS",
      "team": "Cincinnati Bengals",
      "id": "CIN-49",
      "profile": "https://www.bengals.com/team/players-roster/william-wagner/"
    },
    {
      "name": "Russ Yeast",
      "number": "22",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Cincinnati Bengals",
      "id": "CIN-50",
      "profile": "https://www.bengals.com/team/players-roster/russ-yeast/"
    },
    {
      "name": "Colbie Young",
      "number": "86",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Cincinnati Bengals",
      "id": "CIN-51",
      "profile": "https://www.bengals.com/team/players-roster/colbie-young/"
    }
  ],
  "Pittsburgh Steelers": [
    {
      "name": "Drew Allar",
      "number": "16",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-0",
      "profile": "https://www.steelers.com/team/players-roster/drew-allar/"
    },
    {
      "name": "Spencer Anderson",
      "number": "74",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "Pittsburgh Steelers",
      "id": "PIT-1",
      "profile": "https://www.steelers.com/team/players-roster/spencer-anderson/"
    },
    {
      "name": "Keeanu Benton",
      "number": "95",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Pittsburgh Steelers",
      "id": "PIT-2",
      "profile": "https://www.steelers.com/team/players-roster/keeanu-benton/"
    },
    {
      "name": "Germie Bernard",
      "number": "17",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Pittsburgh Steelers",
      "id": "PIT-3",
      "profile": "https://www.steelers.com/team/players-roster/germie-bernard/"
    },
    {
      "name": "Yahya Black",
      "number": "94",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Pittsburgh Steelers",
      "id": "PIT-4",
      "profile": "https://www.steelers.com/team/players-roster/yahya-black/"
    },
    {
      "name": "Chris Boswell",
      "number": "9",
      "position": "ST",
      "rosterPosition": "K",
      "team": "Pittsburgh Steelers",
      "id": "PIT-5",
      "profile": "https://www.steelers.com/team/players-roster/chris-boswell/"
    },
    {
      "name": "Jaquan Brisker",
      "number": "3",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Pittsburgh Steelers",
      "id": "PIT-6",
      "profile": "https://www.steelers.com/team/players-roster/jaquan-brisker/"
    },
    {
      "name": "Carson Bruener",
      "number": "44",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-7",
      "profile": "https://www.steelers.com/team/players-roster/carson-bruener/"
    },
    {
      "name": "Dylan Cook",
      "number": "60",
      "position": "OL",
      "rosterPosition": "OT",
      "team": "Pittsburgh Steelers",
      "id": "PIT-8",
      "profile": "https://www.steelers.com/team/players-roster/dylan-cook/"
    },
    {
      "name": "Jamel Dean",
      "number": "35",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-9",
      "profile": "https://www.steelers.com/team/players-roster/jamel-dean/"
    },
    {
      "name": "Rico Dowdle",
      "number": "13",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-10",
      "profile": "https://www.steelers.com/team/players-roster/rico-dowdle/"
    },
    {
      "name": "Brandin Echols",
      "number": "26",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-11",
      "profile": "https://www.steelers.com/team/players-roster/brandin-echols/"
    },
    {
      "name": "DeShon Elliott",
      "number": "25",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Pittsburgh Steelers",
      "id": "PIT-12",
      "profile": "https://www.steelers.com/team/players-roster/deshon-elliott/"
    },
    {
      "name": "Daylen Everette",
      "number": "23",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-13",
      "profile": "https://www.steelers.com/team/players-roster/daylen-everette/"
    },
    {
      "name": "Troy Fautanu",
      "number": "76",
      "position": "OL",
      "rosterPosition": "OT",
      "team": "Pittsburgh Steelers",
      "id": "PIT-14",
      "profile": "https://www.steelers.com/team/players-roster/troy-fautanu/"
    },
    {
      "name": "Zach Frazier",
      "number": "54",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Pittsburgh Steelers",
      "id": "PIT-15",
      "profile": "https://www.steelers.com/team/players-roster/zach-frazier/"
    },
    {
      "name": "Pat Freiermuth",
      "number": "88",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Pittsburgh Steelers",
      "id": "PIT-16",
      "profile": "https://www.steelers.com/team/players-roster/pat-freiermuth/"
    },
    {
      "name": "Eli Heidenreich",
      "number": "29",
      "position": "RB",
      "rosterPosition": "RB/WR",
      "team": "Pittsburgh Steelers",
      "id": "PIT-17",
      "profile": "https://www.steelers.com/team/players-roster/eli-heidenreich/"
    },
    {
      "name": "Nick Herbig",
      "number": "51",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-18",
      "profile": "https://www.steelers.com/team/players-roster/nick-herbig/"
    },
    {
      "name": "Cameron Heyward",
      "number": "97",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Pittsburgh Steelers",
      "id": "PIT-19",
      "profile": "https://www.steelers.com/team/players-roster/cameron-heyward/"
    },
    {
      "name": "Alex Highsmith",
      "number": "56",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-20",
      "profile": "https://www.steelers.com/team/players-roster/alex-highsmith/"
    },
    {
      "name": "Brock Hoffman",
      "number": "67",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Pittsburgh Steelers",
      "id": "PIT-21",
      "profile": "https://www.steelers.com/team/players-roster/brock-hoffman/"
    },
    {
      "name": "Cole Holcomb",
      "number": "55",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-22",
      "profile": "https://www.steelers.com/team/players-roster/cole-holcomb/"
    },
    {
      "name": "Travis Homer",
      "number": "21",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-23",
      "profile": "https://www.steelers.com/team/players-roster/travis-homer/"
    },
    {
      "name": "Will Howard",
      "number": "18",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-24",
      "profile": "https://www.steelers.com/team/players-roster/will-howard/"
    },
    {
      "name": "Max Iheanachor",
      "number": "71",
      "position": "OL",
      "rosterPosition": "OT",
      "team": "Pittsburgh Steelers",
      "id": "PIT-25",
      "profile": "https://www.steelers.com/team/players-roster/max-iheanachor/"
    },
    {
      "name": "Kevin Jobity Jr.",
      "number": "92",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Pittsburgh Steelers",
      "id": "PIT-26",
      "profile": "https://www.steelers.com/team/players-roster/kevin-jobity-jr/"
    },
    {
      "name": "Brandon Johnson",
      "number": "89",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Pittsburgh Steelers",
      "id": "PIT-27",
      "profile": "https://www.steelers.com/team/players-roster/brandon-johnson/"
    },
    {
      "name": "Cameron Johnston",
      "number": "19",
      "position": "ST",
      "rosterPosition": "P",
      "team": "Pittsburgh Steelers",
      "id": "PIT-28",
      "profile": "https://www.steelers.com/team/players-roster/cameron-johnston/"
    },
    {
      "name": "Christian Kuntz",
      "number": "46",
      "position": "ST",
      "rosterPosition": "LS",
      "team": "Pittsburgh Steelers",
      "id": "PIT-29",
      "profile": "https://www.steelers.com/team/players-roster/christian-kuntz/"
    },
    {
      "name": "Ryan McCollum",
      "number": "62",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Pittsburgh Steelers",
      "id": "PIT-30",
      "profile": "https://www.steelers.com/team/players-roster/ryan-mccollum/"
    },
    {
      "name": "Mason McCormick",
      "number": "66",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Pittsburgh Steelers",
      "id": "PIT-31",
      "profile": "https://www.steelers.com/team/players-roster/mason-mccormick/"
    },
    {
      "name": "DK Metcalf",
      "number": "4",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Pittsburgh Steelers",
      "id": "PIT-32",
      "profile": "https://www.steelers.com/team/players-roster/dk-metcalf/"
    },
    {
      "name": "Sean Murphy-Bunting",
      "number": "27",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-33",
      "profile": "https://www.steelers.com/team/players-roster/sean-murphy-bunting/"
    },
    {
      "name": "Lew Nichols ",
      "number": "31",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-34",
      "profile": "https://www.steelers.com/team/players-roster/lew-nichols/"
    },
    {
      "name": "Riley Nowakowski",
      "number": "37",
      "position": "RB",
      "rosterPosition": "FB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-35",
      "profile": "https://www.steelers.com/team/players-roster/riley-nowakowski/"
    },
    {
      "name": "Patrick Queen",
      "number": "6",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-36",
      "profile": "https://www.steelers.com/team/players-roster/patrick-queen/"
    },
    {
      "name": "Jalen Ramsey",
      "number": "5",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-37",
      "profile": "https://www.steelers.com/team/players-roster/jalen-ramsey/"
    },
    {
      "name": "Aaron Rodgers",
      "number": "8",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-38",
      "profile": "https://www.steelers.com/team/players-roster/aaron-rodgers/"
    },
    {
      "name": "Gabriel Rubio",
      "number": "96",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Pittsburgh Steelers",
      "id": "PIT-39",
      "profile": "https://www.steelers.com/team/players-roster/gabriel-rubio/"
    },
    {
      "name": "Mason Rudolph",
      "number": "2",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-40",
      "profile": "https://www.steelers.com/team/players-roster/mason-rudolph/"
    },
    {
      "name": "Asante Samuel Jr.",
      "number": "22",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-41",
      "profile": "https://www.steelers.com/team/players-roster/asante-samuel-jr/"
    },
    {
      "name": "Jack Sawyer",
      "number": "33",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-42",
      "profile": "https://www.steelers.com/team/players-roster/jack-sawyer/"
    },
    {
      "name": "Ben Skowronek",
      "number": "15",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Pittsburgh Steelers",
      "id": "PIT-43",
      "profile": "https://www.steelers.com/team/players-roster/ben-skowronek/"
    },
    {
      "name": "Doneiko Slaughter",
      "number": "40",
      "position": "DB",
      "rosterPosition": "DB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-44",
      "profile": "https://www.steelers.com/team/players-roster/doneiko-slaughter/"
    },
    {
      "name": "Brandon Smith",
      "number": "87",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Pittsburgh Steelers",
      "id": "PIT-45",
      "profile": "https://www.steelers.com/team/players-roster/brandon-smith/"
    },
    {
      "name": "Terell Smith",
      "number": "39",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-46",
      "profile": "https://www.steelers.com/team/players-roster/terell-smith/"
    },
    {
      "name": "Robert Spears-Jennings",
      "number": "28",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Pittsburgh Steelers",
      "id": "PIT-47",
      "profile": "https://www.steelers.com/team/players-roster/robert-spears-jennings-x6972/"
    },
    {
      "name": "Robert Tonyan",
      "number": "85",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Pittsburgh Steelers",
      "id": "PIT-48",
      "profile": "https://www.steelers.com/team/players-roster/robert-tonyan/"
    },
    {
      "name": "Jaylen Warren",
      "number": "30",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-49",
      "profile": "https://www.steelers.com/team/players-roster/jaylen-warren/"
    },
    {
      "name": "Darnell Washington",
      "number": "80",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Pittsburgh Steelers",
      "id": "PIT-50",
      "profile": "https://www.steelers.com/team/players-roster/darnell-washington/"
    },
    {
      "name": "T.J. Watt",
      "number": "90",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-51",
      "profile": "https://www.steelers.com/team/players-roster/t-j-watt/"
    },
    {
      "name": "Kaden Wetjen",
      "number": "10",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Pittsburgh Steelers",
      "id": "PIT-52",
      "profile": "https://www.steelers.com/team/players-roster/kaden-wetjen/"
    },
    {
      "name": "Payton Wilson",
      "number": "41",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Pittsburgh Steelers",
      "id": "PIT-53",
      "profile": "https://www.steelers.com/team/players-roster/payton-wilson/"
    }
  ],
  "Cleveland Browns": [
    {
      "name": "Austin Barber",
      "number": "58",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Cleveland Browns",
      "id": "CLE-0",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/austin-barber/"
    },
    {
      "name": "Derek Barnett",
      "number": "97",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Cleveland Browns",
      "id": "CLE-1",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/derek-barnett/"
    },
    {
      "name": "Mekhi Blackmon",
      "number": "29",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Cleveland Browns",
      "id": "CLE-2",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/mekhi-blackmon/"
    },
    {
      "name": "Corey Bojorquez",
      "number": "13",
      "position": "ST",
      "rosterPosition": "P",
      "team": "Cleveland Browns",
      "id": "CLE-3",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/corey-bojorquez/"
    },
    {
      "name": "Isaiah Bond",
      "number": "0",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Cleveland Browns",
      "id": "CLE-4",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/isaiah-bond/"
    },
    {
      "name": "Denzel Boston",
      "number": "12",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Cleveland Browns",
      "id": "CLE-5",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/denzel-boston/"
    },
    {
      "name": "Parker Brailsford",
      "number": "52",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Cleveland Browns",
      "id": "CLE-6",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/parker-brailsford/"
    },
    {
      "name": "Michael Burton",
      "number": "34",
      "position": "RB",
      "rosterPosition": "FB",
      "team": "Cleveland Browns",
      "id": "CLE-7",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/michael-burton/"
    },
    {
      "name": "Tyson Campbell",
      "number": "7",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Cleveland Browns",
      "id": "CLE-8",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/tyson-campbell/"
    },
    {
      "name": "Maliek Collins",
      "number": "96",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Cleveland Browns",
      "id": "CLE-9",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/maliek-collins/"
    },
    {
      "name": "KC Concepcion Jr.",
      "number": "1",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Cleveland Browns",
      "id": "CLE-10",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/kc-concepcion/"
    },
    {
      "name": "Malachi Corley",
      "number": "11",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Cleveland Browns",
      "id": "CLE-11",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/malachi-corley/"
    },
    {
      "name": "Grant Delpit",
      "number": "9",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Cleveland Browns",
      "id": "CLE-12",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/grant-delpit/"
    },
    {
      "name": "Harold Fannin Jr.",
      "number": "44",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Cleveland Browns",
      "id": "CLE-13",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/harold-fannin-jr/"
    },
    {
      "name": "Spencer Fano",
      "number": "55",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Cleveland Browns",
      "id": "CLE-14",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/spencer-fano/"
    },
    {
      "name": "Dillon Gabriel",
      "number": "6",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Cleveland Browns",
      "id": "CLE-15",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/dillon-gabriel/"
    },
    {
      "name": "Mason Graham",
      "number": "94",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Cleveland Browns",
      "id": "CLE-16",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/mason-graham/"
    },
    {
      "name": "Taylen Green",
      "number": "15",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Cleveland Browns",
      "id": "CLE-17",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/taylen-green/"
    },
    {
      "name": "Mike Hall Jr.",
      "number": "51",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Cleveland Browns",
      "id": "CLE-18",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/michael-hall-jr/"
    },
    {
      "name": "Myles Harden",
      "number": "26",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Cleveland Browns",
      "id": "CLE-19",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/myles-harden/"
    },
    {
      "name": "Ronnie Hickman",
      "number": "33",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Cleveland Browns",
      "id": "CLE-20",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/ronnie-hickman-jr/"
    },
    {
      "name": "Tytus Howard",
      "number": "71",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Cleveland Browns",
      "id": "CLE-21",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/tytus-howard/"
    },
    {
      "name": "Adin Huntington",
      "number": "98",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Cleveland Browns",
      "id": "CLE-22",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/adin-huntington/"
    },
    {
      "name": "Noah Igbinoghene",
      "number": "20",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Cleveland Browns",
      "id": "CLE-23",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/noah-igbinoghene/"
    },
    {
      "name": "Justin Jefferson",
      "number": "17",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Cleveland Browns",
      "id": "CLE-24",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/justin-jefferson/"
    },
    {
      "name": "Elgton Jenkins",
      "number": "74",
      "position": "OL",
      "rosterPosition": "C/G",
      "team": "Cleveland Browns",
      "id": "CLE-25",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/elgton-jenkins/"
    },
    {
      "name": "Jerry Jeudy",
      "number": "3",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Cleveland Browns",
      "id": "CLE-26",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/jerry-jeudy/"
    },
    {
      "name": "Zion Johnson",
      "number": "77",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Cleveland Browns",
      "id": "CLE-27",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/zion-johnson/"
    },
    {
      "name": "Dawand Jones",
      "number": "79",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Cleveland Browns",
      "id": "CLE-28",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/dawand-jones/"
    },
    {
      "name": "Quinshon Judkins",
      "number": "10",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Cleveland Browns",
      "id": "CLE-29",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/quinshon-judkins/"
    },
    {
      "name": "Easton Mascarenas-Arnold",
      "number": "42",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Cleveland Browns",
      "id": "CLE-30",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/easton-mascarenas-arnold/"
    },
    {
      "name": "Isaiah McGuire",
      "number": "57",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Cleveland Browns",
      "id": "CLE-31",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/isaiah-mcguire/"
    },
    {
      "name": "Jaleel McLaughlin",
      "number": "38",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Cleveland Browns",
      "id": "CLE-32",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/jaleel-mclaughlin/"
    },
    {
      "name": "Donovan McMillon",
      "number": "31",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Cleveland Browns",
      "id": "CLE-33",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/donovan-mcmillon/"
    },
    {
      "name": "Emmanuel McNeil-Warren",
      "number": "28",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Cleveland Browns",
      "id": "CLE-34",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/emmanuel-mcneil-warren/"
    },
    {
      "name": "Toriano Pride Jr.",
      "number": "35",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Cleveland Browns",
      "id": "CLE-35",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/toriano-pride-jr/"
    },
    {
      "name": "Winston Reid",
      "number": "59",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Cleveland Browns",
      "id": "CLE-36",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/winston-reid/"
    },
    {
      "name": "Dylan Sampson",
      "number": "22",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Cleveland Browns",
      "id": "CLE-37",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/dylan-sampson/"
    },
    {
      "name": "Shedeur Sanders",
      "number": "2",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Cleveland Browns",
      "id": "CLE-38",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/shedeur-sanders/"
    },
    {
      "name": "Carson Schwesinger",
      "number": "49",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Cleveland Browns",
      "id": "CLE-39",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/carson-schwesinger/"
    },
    {
      "name": "Rex Sunahara",
      "number": "50",
      "position": "ST",
      "rosterPosition": "LS",
      "team": "Cleveland Browns",
      "id": "CLE-40",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/rex-sunahara/"
    },
    {
      "name": "Andre Szmyt",
      "number": "25",
      "position": "ST",
      "rosterPosition": "K",
      "team": "Cleveland Browns",
      "id": "CLE-41",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/andre-szmyt/"
    },
    {
      "name": "Daniel Thomas",
      "number": "24",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Cleveland Browns",
      "id": "CLE-42",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/daniel-thomas/"
    },
    {
      "name": "Jared Verse",
      "number": "8",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Cleveland Browns",
      "id": "CLE-43",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/jared-verse/"
    },
    {
      "name": "Tylan Wallace",
      "number": "16",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Cleveland Browns",
      "id": "CLE-44",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/tylan-wallace/"
    },
    {
      "name": "Denzel Ward",
      "number": "21",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Cleveland Browns",
      "id": "CLE-45",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/denzel-ward/"
    },
    {
      "name": "Deshaun Watson",
      "number": "4",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Cleveland Browns",
      "id": "CLE-46",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/deshaun-watson/"
    },
    {
      "name": "Blake Whiteheart",
      "number": "86",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Cleveland Browns",
      "id": "CLE-47",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/blake-whiteheart/"
    },
    {
      "name": "Quincy Williams",
      "number": "5",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Cleveland Browns",
      "id": "CLE-48",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/quincy-williams/"
    },
    {
      "name": "Sam Williams",
      "number": "54",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Cleveland Browns",
      "id": "CLE-49",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/sam-williams/"
    },
    {
      "name": "Luke Wypler",
      "number": "56",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Cleveland Browns",
      "id": "CLE-50",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/luke-wypler/"
    },
    {
      "name": "Zak Zinter",
      "number": "70",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Cleveland Browns",
      "id": "CLE-51",
      "profile": "https://www.clevelandbrowns.com/team/players-roster/zak-zinter/"
    }
  ],
  "Buffalo Bills": [
    {
      "name": "Dee Alford",
      "number": "23",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Buffalo Bills",
      "id": "BUF-dee-alford",
      "profile": "https://www.buffalobills.com/team/players-roster/dee-alford/"
    },
    {
      "name": "Josh Allen",
      "number": "17",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Buffalo Bills",
      "id": "BUF-josh-allen",
      "profile": "https://www.buffalobills.com/team/players-roster/josh-allen/"
    },
    {
      "name": "Kyle Allen",
      "number": "11",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Buffalo Bills",
      "id": "BUF-kyle-allen",
      "profile": "https://www.buffalobills.com/team/players-roster/kyle-allen/"
    },
    {
      "name": "Alec Anderson",
      "number": "70",
      "position": "OL",
      "rosterPosition": "C/G",
      "team": "Buffalo Bills",
      "id": "BUF-alec-anderson",
      "profile": "https://www.buffalobills.com/team/players-roster/alec-anderson/"
    },
    {
      "name": "Joe Andreessen",
      "number": "44",
      "position": "LB",
      "rosterPosition": "ILB",
      "team": "Buffalo Bills",
      "id": "BUF-joe-andreessen",
      "profile": "https://www.buffalobills.com/team/players-roster/joe-andreessen/"
    },
    {
      "name": "Tyler Bass",
      "number": "16",
      "position": "ST",
      "rosterPosition": "K",
      "team": "Buffalo Bills",
      "id": "BUF-tyler-bass",
      "profile": "https://www.buffalobills.com/team/players-roster/tyler-bass/"
    },
    {
      "name": "Skyler Bell",
      "number": "13",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Buffalo Bills",
      "id": "BUF-skyler-bell",
      "profile": "https://www.buffalobills.com/team/players-roster/skyler-bell/"
    },
    {
      "name": "Christian Benford",
      "number": "47",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Buffalo Bills",
      "id": "BUF-christian-benford",
      "profile": "https://www.buffalobills.com/team/players-roster/christian-benford/"
    },
    {
      "name": "Terrel Bernard",
      "number": "8",
      "position": "LB",
      "rosterPosition": "ILB",
      "team": "Buffalo Bills",
      "id": "BUF-terrel-bernard",
      "profile": "https://www.buffalobills.com/team/players-roster/terrel-bernard/"
    },
    {
      "name": "Cole Bishop",
      "number": "24",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Buffalo Bills",
      "id": "BUF-cole-bishop",
      "profile": "https://www.buffalobills.com/team/players-roster/cole-bishop/"
    },
    {
      "name": "Jude Bowry",
      "number": "74",
      "position": "OL",
      "rosterPosition": "T/G",
      "team": "Buffalo Bills",
      "id": "BUF-jude-bowry",
      "profile": "https://www.buffalobills.com/team/players-roster/jude-bowry/"
    },
    {
      "name": "Spencer Brown",
      "number": "79",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Buffalo Bills",
      "id": "BUF-spencer-brown",
      "profile": "https://www.buffalobills.com/team/players-roster/spencer-brown/"
    },
    {
      "name": "DeWayne Carter",
      "number": "90",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Buffalo Bills",
      "id": "BUF-dewayne-carter",
      "profile": "https://www.buffalobills.com/team/players-roster/dewayne-carter/"
    },
    {
      "name": "Bradley Chubb",
      "number": "9",
      "position": "LB",
      "rosterPosition": "OLB",
      "team": "Buffalo Bills",
      "id": "BUF-bradley-chubb",
      "profile": "https://www.buffalobills.com/team/players-roster/bradley-chubb/"
    },
    {
      "name": "Keon Coleman",
      "number": "0",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Buffalo Bills",
      "id": "BUF-keon-coleman",
      "profile": "https://www.buffalobills.com/team/players-roster/keon-coleman/"
    },
    {
      "name": "James Cook III",
      "number": "4",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Buffalo Bills",
      "id": "BUF-james-cook",
      "profile": "https://www.buffalobills.com/team/players-roster/james-cook/"
    },
    {
      "name": "Austin Corbett",
      "number": "63",
      "position": "OL",
      "rosterPosition": "G/C",
      "team": "Buffalo Bills",
      "id": "BUF-austin-corbett",
      "profile": "https://www.buffalobills.com/team/players-roster/austin-corbett/"
    },
    {
      "name": "Te'Cory Couch",
      "number": "33",
      "position": "DB",
      "rosterPosition": "DB",
      "team": "Buffalo Bills",
      "id": "BUF-te-cory-couch",
      "profile": "https://www.buffalobills.com/team/players-roster/te-cory-couch/"
    },
    {
      "name": "Lloyd Cushenberry",
      "number": "53",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Buffalo Bills",
      "id": "BUF-lloyd-cushenberry",
      "profile": "https://www.buffalobills.com/team/players-roster/lloyd-cushenberry/"
    },
    {
      "name": "Mike Danna",
      "number": "51",
      "position": "LB",
      "rosterPosition": "OLB",
      "team": "Buffalo Bills",
      "id": "BUF-mike-danna",
      "profile": "https://www.buffalobills.com/team/players-roster/mike-danna/"
    },
    {
      "name": "Ray Davis",
      "number": "7",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Buffalo Bills",
      "id": "BUF-ray-davis",
      "profile": "https://www.buffalobills.com/team/players-roster/ray-davis/"
    },
    {
      "name": "Dion Dawkins",
      "number": "73",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Buffalo Bills",
      "id": "BUF-dion-dawkins",
      "profile": "https://www.buffalobills.com/team/players-roster/dion-dawkins/"
    },
    {
      "name": "Tommy Doman Jr.",
      "number": "39",
      "position": "ST",
      "rosterPosition": "P",
      "team": "Buffalo Bills",
      "id": "BUF-tommy-doman-jr",
      "profile": "https://www.buffalobills.com/team/players-roster/tommy-doman-jr/"
    },
    {
      "name": "Greg Dortch",
      "number": "19",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Buffalo Bills",
      "id": "BUF-greg-dortch",
      "profile": "https://www.buffalobills.com/team/players-roster/greg-dortch/"
    },
    {
      "name": "Kaleb Elarms-Orr",
      "number": "52",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Buffalo Bills",
      "id": "BUF-kaleb-elarms-orr",
      "profile": "https://www.buffalobills.com/team/players-roster/kaleb-elarms-orr/"
    },
    {
      "name": "Reid Ferguson",
      "number": "69",
      "position": "ST",
      "rosterPosition": "LS",
      "team": "Buffalo Bills",
      "id": "BUF-reid-ferguson",
      "profile": "https://www.buffalobills.com/team/players-roster/reid-ferguson/"
    },
    {
      "name": "Sam Franklin Jr.",
      "number": "28",
      "position": "DB",
      "rosterPosition": "DB",
      "team": "Buffalo Bills",
      "id": "BUF-sam-franklin",
      "profile": "https://www.buffalobills.com/team/players-roster/sam-franklin/"
    },
    {
      "name": "Greg Gaines",
      "number": "97",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Buffalo Bills",
      "id": "BUF-greg-gaines",
      "profile": "https://www.buffalobills.com/team/players-roster/greg-gaines/"
    },
    {
      "name": "Tylan Grable",
      "number": "68",
      "position": "OL",
      "rosterPosition": "T/G",
      "team": "Buffalo Bills",
      "id": "BUF-tylan-grable",
      "profile": "https://www.buffalobills.com/team/players-roster/tylan-grable/"
    },
    {
      "name": "Maxwell Hairston",
      "number": "1",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Buffalo Bills",
      "id": "BUF-maxwell-hairston",
      "profile": "https://www.buffalobills.com/team/players-roster/maxwell-hairston/"
    },
    {
      "name": "Damar Hamlin",
      "number": "3",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Buffalo Bills",
      "id": "BUF-damar-hamlin",
      "profile": "https://www.buffalobills.com/team/players-roster/damar-hamlin/"
    },
    {
      "name": "Jackson Hawes",
      "number": "85",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Buffalo Bills",
      "id": "BUF-jackson-hawes",
      "profile": "https://www.buffalobills.com/team/players-roster/jackson-hawes/"
    },
    {
      "name": "Michael Hoecht",
      "number": "55",
      "position": "LB",
      "rosterPosition": "OLB",
      "team": "Buffalo Bills",
      "id": "BUF-michael-hoecht",
      "profile": "https://www.buffalobills.com/team/players-roster/michael-hoecht/"
    },
    {
      "name": "Davison Igbinosun",
      "number": "21",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Buffalo Bills",
      "id": "BUF-davison-igbinosun",
      "profile": "https://www.buffalobills.com/team/players-roster/davison-igbinosun/"
    },
    {
      "name": "Landon Jackson",
      "number": "94",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Buffalo Bills",
      "id": "BUF-landon-jackson",
      "profile": "https://www.buffalobills.com/team/players-roster/landon-jackson/"
    },
    {
      "name": "Ty Johnson",
      "number": "26",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Buffalo Bills",
      "id": "BUF-ty-johnson",
      "profile": "https://www.buffalobills.com/team/players-roster/ty-johnson/"
    },
    {
      "name": "Jalon Kilgore",
      "number": "29",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Buffalo Bills",
      "id": "BUF-jalon-kilgore",
      "profile": "https://www.buffalobills.com/team/players-roster/jalon-kilgore/"
    },
    {
      "name": "Dalton Kincaid",
      "number": "86",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Buffalo Bills",
      "id": "BUF-dalton-kincaid",
      "profile": "https://www.buffalobills.com/team/players-roster/dalton-kincaid/"
    },
    {
      "name": "Dawson Knox",
      "number": "88",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Buffalo Bills",
      "id": "BUF-dawson-knox",
      "profile": "https://www.buffalobills.com/team/players-roster/dawson-knox/"
    },
    {
      "name": "Keleki Latu",
      "number": "83",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Buffalo Bills",
      "id": "BUF-keleki-latu",
      "profile": "https://www.buffalobills.com/team/players-roster/keleki-latu/"
    },
    {
      "name": "Connor McGovern",
      "number": "66",
      "position": "OL",
      "rosterPosition": "C/G",
      "team": "Buffalo Bills",
      "id": "BUF-connor-mcgovern",
      "profile": "https://www.buffalobills.com/team/players-roster/connor-mcgovern/"
    },
    {
      "name": "DJ Moore",
      "number": "2",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Buffalo Bills",
      "id": "BUF-dj-moore",
      "profile": "https://www.buffalobills.com/team/players-roster/dj-moore/"
    },
    {
      "name": "Ed Oliver",
      "number": "91",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Buffalo Bills",
      "id": "BUF-ed-oliver",
      "profile": "https://www.buffalobills.com/team/players-roster/ed-oliver/"
    },
    {
      "name": "Joshua Palmer",
      "number": "5",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Buffalo Bills",
      "id": "BUF-joshua-palmer",
      "profile": "https://www.buffalobills.com/team/players-roster/joshua-palmer/"
    },
    {
      "name": "TJ Parker",
      "number": "99",
      "position": "LB",
      "rosterPosition": "OLB",
      "team": "Buffalo Bills",
      "id": "BUF-tj-parker",
      "profile": "https://www.buffalobills.com/team/players-roster/tj-parker/"
    },
    {
      "name": "Ar'maj Reed-Adams",
      "number": "60",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Buffalo Bills",
      "id": "BUF-ar-maj-reed-adams",
      "profile": "https://www.buffalobills.com/team/players-roster/ar-maj-reed-adams/"
    },
    {
      "name": "Greg Rousseau",
      "number": "15",
      "position": "LB",
      "rosterPosition": "OLB",
      "team": "Buffalo Bills",
      "id": "BUF-greg-rousseau",
      "profile": "https://www.buffalobills.com/team/players-roster/greg-rousseau/"
    },
    {
      "name": "T.J. Sanders",
      "number": "98",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Buffalo Bills",
      "id": "BUF-t-j-sanders-x4456",
      "profile": "https://www.buffalobills.com/team/players-roster/t-j-sanders-x4456/"
    },
    {
      "name": "Khalil Shakir",
      "number": "10",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Buffalo Bills",
      "id": "BUF-khalil-shakir",
      "profile": "https://www.buffalobills.com/team/players-roster/khalil-shakir/"
    },
    {
      "name": "Javon Solomon",
      "number": "56",
      "position": "LB",
      "rosterPosition": "OLB",
      "team": "Buffalo Bills",
      "id": "BUF-javon-solomon",
      "profile": "https://www.buffalobills.com/team/players-roster/javon-solomon/"
    },
    {
      "name": "O'Cyrus Torrence",
      "number": "64",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Buffalo Bills",
      "id": "BUF-o-cyrus-torrence",
      "profile": "https://www.buffalobills.com/team/players-roster/o-cyrus-torrence/"
    },
    {
      "name": "Deone Walker",
      "number": "96",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Buffalo Bills",
      "id": "BUF-deone-walker",
      "profile": "https://www.buffalobills.com/team/players-roster/deone-walker/"
    },
    {
      "name": "Dorian Williams",
      "number": "42",
      "position": "LB",
      "rosterPosition": "ILB",
      "team": "Buffalo Bills",
      "id": "BUF-dorian-williams",
      "profile": "https://www.buffalobills.com/team/players-roster/dorian-williams/"
    }
  ],
  "Miami Dolphins": [
    {
      "name": "Tucker Addington",
      "number": "46",
      "position": "ST",
      "rosterPosition": "LS",
      "team": "Miami Dolphins",
      "id": "MIA-tucker-addington",
      "profile": "https://www.miamidolphins.com/team/players-roster/tucker-addington/"
    },
    {
      "name": "Kaytron Allen",
      "number": "30",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Miami Dolphins",
      "id": "MIA-kaytron-allen",
      "profile": "https://www.miamidolphins.com/team/players-roster/kaytron-allen/"
    },
    {
      "name": "Zayne Anderson",
      "number": "23",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Miami Dolphins",
      "id": "MIA-zayne-anderson",
      "profile": "https://www.miamidolphins.com/team/players-roster/zayne-anderson/"
    },
    {
      "name": "Chris Bell",
      "number": "18",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Miami Dolphins",
      "id": "MIA-chris-bell",
      "profile": "https://www.miamidolphins.com/team/players-roster/chris-bell/"
    },
    {
      "name": "Zeek Biggers",
      "number": "93",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Miami Dolphins",
      "id": "MIA-zeek-biggers",
      "profile": "https://www.miamidolphins.com/team/players-roster/zeek-biggers/"
    },
    {
      "name": "JuJu Brents",
      "number": "8",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Miami Dolphins",
      "id": "MIA-juju-brents",
      "profile": "https://www.miamidolphins.com/team/players-roster/juju-brents/"
    },
    {
      "name": "Aaron Brewer",
      "number": "55",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Miami Dolphins",
      "id": "MIA-aaron-brewer",
      "profile": "https://www.miamidolphins.com/team/players-roster/aaron-brewer/"
    },
    {
      "name": "Jordyn Brooks",
      "number": "20",
      "position": "LB",
      "rosterPosition": "ILB",
      "team": "Miami Dolphins",
      "id": "MIA-jordyn-brooks",
      "profile": "https://www.miamidolphins.com/team/players-roster/jordyn-brooks/"
    },
    {
      "name": "Kevin Coleman Jr.",
      "number": "21",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Miami Dolphins",
      "id": "MIA-kevin-coleman-jr",
      "profile": "https://www.miamidolphins.com/team/players-roster/kevin-coleman-jr/"
    },
    {
      "name": "Marcellas Dial Jr.",
      "number": "24",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Miami Dolphins",
      "id": "MIA-marcellas-dial-jr",
      "profile": "https://www.miamidolphins.com/team/players-roster/marcellas-dial-jr/"
    },
    {
      "name": "Caleb Douglas",
      "number": "7",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Miami Dolphins",
      "id": "MIA-caleb-douglas",
      "profile": "https://www.miamidolphins.com/team/players-roster/caleb-douglas/"
    },
    {
      "name": "Greg Dulcich",
      "number": "85",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Miami Dolphins",
      "id": "MIA-greg-dulcich",
      "profile": "https://www.miamidolphins.com/team/players-roster/greg-dulcich/"
    },
    {
      "name": "Willie Gay Jr.",
      "number": "40",
      "position": "LB",
      "rosterPosition": "ILB",
      "team": "Miami Dolphins",
      "id": "MIA-willie-gay-jr",
      "profile": "https://www.miamidolphins.com/team/players-roster/willie-gay-jr/"
    },
    {
      "name": "Chukwuebuka Godrick",
      "number": "79",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Miami Dolphins",
      "id": "MIA-chukwuebuka-godrick",
      "profile": "https://www.miamidolphins.com/team/players-roster/chukwuebuka-godrick/"
    },
    {
      "name": "Ollie Gordon II",
      "number": "0",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Miami Dolphins",
      "id": "MIA-ollie-gordon-ii",
      "profile": "https://www.miamidolphins.com/team/players-roster/ollie-gordon-ii/"
    },
    {
      "name": "Kenneth Grant",
      "number": "78",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Miami Dolphins",
      "id": "MIA-kenneth-grant",
      "profile": "https://www.miamidolphins.com/team/players-roster/kenneth-grant/"
    },
    {
      "name": "Christian Haynes",
      "number": "64",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Miami Dolphins",
      "id": "MIA-christian-haynes",
      "profile": "https://www.miamidolphins.com/team/players-roster/christian-haynes/"
    },
    {
      "name": "DJ Herman",
      "number": "34",
      "position": "RB",
      "rosterPosition": "FB",
      "team": "Miami Dolphins",
      "id": "MIA-dj-herman",
      "profile": "https://www.miamidolphins.com/team/players-roster/dj-herman/"
    },
    {
      "name": "Malik Herring",
      "number": "90",
      "position": "LB",
      "rosterPosition": "EDGE",
      "team": "Miami Dolphins",
      "id": "MIA-malik-herring",
      "profile": "https://www.miamidolphins.com/team/players-roster/malik-herring/"
    },
    {
      "name": "Shaka Heyward",
      "number": "45",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Miami Dolphins",
      "id": "MIA-shaka-heyward",
      "profile": "https://www.miamidolphins.com/team/players-roster/shaka-heyward/"
    },
    {
      "name": "Austin Jackson",
      "number": "73",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Miami Dolphins",
      "id": "MIA-austin-jackson",
      "profile": "https://www.miamidolphins.com/team/players-roster/austin-jackson/"
    },
    {
      "name": "Chris Johnson",
      "number": "3",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Miami Dolphins",
      "id": "MIA-chris-johnson",
      "profile": "https://www.miamidolphins.com/team/players-roster/chris-johnson/"
    },
    {
      "name": "Justin Joly",
      "number": "80",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Miami Dolphins",
      "id": "MIA-justin-joly",
      "profile": "https://www.miamidolphins.com/team/players-roster/justin-joly/"
    },
    {
      "name": "Will Kacmarek",
      "number": "89",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Miami Dolphins",
      "id": "MIA-will-kacmarek",
      "profile": "https://www.miamidolphins.com/team/players-roster/will-kacmarek/"
    },
    {
      "name": "Jarrett Kingston",
      "number": "62",
      "position": "OL",
      "rosterPosition": "G/T",
      "team": "Miami Dolphins",
      "id": "MIA-jarrett-kingston",
      "profile": "https://www.miamidolphins.com/team/players-roster/jarrett-kingston/"
    },
    {
      "name": "Jamree Kromah",
      "number": "",
      "position": "LB",
      "rosterPosition": "EDGE",
      "team": "Miami Dolphins",
      "id": "MIA-jamree-kromah",
      "profile": "https://www.miamidolphins.com/team/players-roster/jamree-kromah/"
    },
    {
      "name": "Kyle Louis",
      "number": "19",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Miami Dolphins",
      "id": "MIA-kyle-louis",
      "profile": "https://www.miamidolphins.com/team/players-roster/kyle-louis/"
    },
    {
      "name": "Jason Marshall Jr.",
      "number": "4",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Miami Dolphins",
      "id": "MIA-jason-marshall-jr",
      "profile": "https://www.miamidolphins.com/team/players-roster/jason-marshall-jr/"
    },
    {
      "name": "Kyle McCord",
      "number": "14",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Miami Dolphins",
      "id": "MIA-kyle-mccord",
      "profile": "https://www.miamidolphins.com/team/players-roster/kyle-mccord/"
    },
    {
      "name": "Rodney McGraw",
      "number": "59",
      "position": "LB",
      "rosterPosition": "EDGE",
      "team": "Miami Dolphins",
      "id": "MIA-rodney-mcgraw",
      "profile": "https://www.miamidolphins.com/team/players-roster/rodney-mcgraw/"
    },
    {
      "name": "Andrew Meyer",
      "number": "60",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Miami Dolphins",
      "id": "MIA-andrew-meyer",
      "profile": "https://www.miamidolphins.com/team/players-roster/andrew-meyer/"
    },
    {
      "name": "Patrick Paul",
      "number": "52",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Miami Dolphins",
      "id": "MIA-patrick-paul",
      "profile": "https://www.miamidolphins.com/team/players-roster/patrick-paul/"
    },
    {
      "name": "Jordan Phillips",
      "number": "94",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Miami Dolphins",
      "id": "MIA-jordan-phillips-2",
      "profile": "https://www.miamidolphins.com/team/players-roster/jordan-phillips-2/"
    },
    {
      "name": "Bradley Pinion",
      "number": "48",
      "position": "ST",
      "rosterPosition": "P",
      "team": "Miami Dolphins",
      "id": "MIA-bradley-pinion",
      "profile": "https://www.miamidolphins.com/team/players-roster/bradley-pinion/"
    },
    {
      "name": "Kadyn Proctor",
      "number": "74",
      "position": "OL",
      "rosterPosition": "G/T",
      "team": "Miami Dolphins",
      "id": "MIA-kadyn-proctor",
      "profile": "https://www.miamidolphins.com/team/players-roster/kadyn-proctor/"
    },
    {
      "name": "Chop Robinson",
      "number": "44",
      "position": "LB",
      "rosterPosition": "EDGE",
      "team": "Miami Dolphins",
      "id": "MIA-chop-robinson",
      "profile": "https://www.miamidolphins.com/team/players-roster/chop-robinson/"
    },
    {
      "name": "Jacob Rodriguez",
      "number": "10",
      "position": "LB",
      "rosterPosition": "ILB",
      "team": "Miami Dolphins",
      "id": "MIA-jacob-rodriguez",
      "profile": "https://www.miamidolphins.com/team/players-roster/jacob-rodriguez/"
    },
    {
      "name": "Jonah Savaiinaea",
      "number": "71",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Miami Dolphins",
      "id": "MIA-jonah-savaiinaea",
      "profile": "https://www.miamidolphins.com/team/players-roster/jonah-savaiinaea/"
    },
    {
      "name": "Zach Sieler",
      "number": "92",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Miami Dolphins",
      "id": "MIA-zach-sieler",
      "profile": "https://www.miamidolphins.com/team/players-roster/zach-sieler/"
    },
    {
      "name": "Jaylin Simpson",
      "number": "32",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Miami Dolphins",
      "id": "MIA-jaylin-simpson",
      "profile": "https://www.miamidolphins.com/team/players-roster/jaylin-simpson/"
    },
    {
      "name": "Michael Taaffe",
      "number": "16",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Miami Dolphins",
      "id": "MIA-michael-taaffe",
      "profile": "https://www.miamidolphins.com/team/players-roster/michael-taaffe/"
    },
    {
      "name": "Reese Taylor",
      "number": "35",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Miami Dolphins",
      "id": "MIA-reese-taylor",
      "profile": "https://www.miamidolphins.com/team/players-roster/reese-taylor/"
    },
    {
      "name": "Jalen Tolbert",
      "number": "1",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Miami Dolphins",
      "id": "MIA-jalen-tolbert",
      "profile": "https://www.miamidolphins.com/team/players-roster/jalen-tolbert/"
    },
    {
      "name": "Dante Trader Jr.",
      "number": "11",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Miami Dolphins",
      "id": "MIA-dante-trader-jr",
      "profile": "https://www.miamidolphins.com/team/players-roster/dante-trader-jr/"
    },
    {
      "name": "Seydou Traore",
      "number": "83",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Miami Dolphins",
      "id": "MIA-seydou-traore",
      "profile": "https://www.miamidolphins.com/team/players-roster/seydou-traore/"
    },
    {
      "name": "Josh Uche",
      "number": "9",
      "position": "LB",
      "rosterPosition": "EDGE",
      "team": "Miami Dolphins",
      "id": "MIA-joshua-uche",
      "profile": "https://www.miamidolphins.com/team/players-roster/joshua-uche/"
    },
    {
      "name": "Caedan Wallace",
      "number": "77",
      "position": "OL",
      "rosterPosition": "G/T",
      "team": "Miami Dolphins",
      "id": "MIA-caedan-wallace",
      "profile": "https://www.miamidolphins.com/team/players-roster/caedan-wallace/"
    },
    {
      "name": "Malik Washington",
      "number": "6",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Miami Dolphins",
      "id": "MIA-malik-washington",
      "profile": "https://www.miamidolphins.com/team/players-roster/malik-washington/"
    },
    {
      "name": "Jared Wayne",
      "number": "86",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Miami Dolphins",
      "id": "MIA-jared-wayne",
      "profile": "https://www.miamidolphins.com/team/players-roster/jared-wayne/"
    },
    {
      "name": "Malik Willis",
      "number": "2",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Miami Dolphins",
      "id": "MIA-malik-willis",
      "profile": "https://www.miamidolphins.com/team/players-roster/malik-willis/"
    },
    {
      "name": "Julius Wood",
      "number": "25",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Miami Dolphins",
      "id": "MIA-julius-wood",
      "profile": "https://www.miamidolphins.com/team/players-roster/julius-wood/"
    },
    {
      "name": "Jackson Woodard",
      "number": "42",
      "position": "LB",
      "rosterPosition": "ILB",
      "team": "Miami Dolphins",
      "id": "MIA-jackson-woodard",
      "profile": "https://www.miamidolphins.com/team/players-roster/jackson-woodard/"
    },
    {
      "name": "Jaylen Wright",
      "number": "5",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Miami Dolphins",
      "id": "MIA-jaylen-wright",
      "profile": "https://www.miamidolphins.com/team/players-roster/jaylen-wright/"
    }
  ],
  "New England Patriots": [
    {
      "name": "Tanner Arkin",
      "number": "84",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "New England Patriots",
      "id": "NE-tanner-arkin",
      "profile": "https://www.patriots.com/team/players-roster/tanner-arkin/"
    },
    {
      "name": "Julian Ashby",
      "number": "47",
      "position": "ST",
      "rosterPosition": "LS",
      "team": "New England Patriots",
      "id": "NE-julian-ashby",
      "profile": "https://www.patriots.com/team/players-roster/julian-ashby/"
    },
    {
      "name": "Christian Barmore",
      "number": "90",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "New England Patriots",
      "id": "NE-christian-barmore",
      "profile": "https://www.patriots.com/team/players-roster/christian-barmore/"
    },
    {
      "name": "Andy Borregales",
      "number": "8",
      "position": "ST",
      "rosterPosition": "K",
      "team": "New England Patriots",
      "id": "NE-andres-borregales",
      "profile": "https://www.patriots.com/team/players-roster/andres-borregales/"
    },
    {
      "name": "A.J. Brown",
      "number": "1",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "New England Patriots",
      "id": "NE-a-j-brown",
      "profile": "https://www.patriots.com/team/players-roster/a-j-brown/"
    },
    {
      "name": "Mike Brown",
      "number": "33",
      "position": "DB",
      "rosterPosition": "S",
      "team": "New England Patriots",
      "id": "NE-mike-brown",
      "profile": "https://www.patriots.com/team/players-roster/mike-brown/"
    },
    {
      "name": "Ben Brown",
      "number": "77",
      "position": "OL",
      "rosterPosition": "C",
      "team": "New England Patriots",
      "id": "NE-ben-brown",
      "profile": "https://www.patriots.com/team/players-roster/ben-brown/"
    },
    {
      "name": "Marcus Bryant",
      "number": "52",
      "position": "OL",
      "rosterPosition": "T",
      "team": "New England Patriots",
      "id": "NE-marcus-bryant",
      "profile": "https://www.patriots.com/team/players-roster/marcus-bryant/"
    },
    {
      "name": "Kevin Byard III",
      "number": "31",
      "position": "DB",
      "rosterPosition": "S",
      "team": "New England Patriots",
      "id": "NE-kevin-byard",
      "profile": "https://www.patriots.com/team/players-roster/kevin-byard/"
    },
    {
      "name": "Will Campbell",
      "number": "66",
      "position": "OL",
      "rosterPosition": "T",
      "team": "New England Patriots",
      "id": "NE-will-campbell",
      "profile": "https://www.patriots.com/team/players-roster/will-campbell/"
    },
    {
      "name": "Channing Canada",
      "number": "29",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "New England Patriots",
      "id": "NE-channing-canada",
      "profile": "https://www.patriots.com/team/players-roster/channing-canada/"
    },
    {
      "name": "Efton Chism III",
      "number": "86",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "New England Patriots",
      "id": "NE-efton-chism-iii",
      "profile": "https://www.patriots.com/team/players-roster/efton-chism-iii/"
    },
    {
      "name": "Dametrious Crownover",
      "number": "68",
      "position": "OL",
      "rosterPosition": "T",
      "team": "New England Patriots",
      "id": "NE-dametrious-crownover",
      "profile": "https://www.patriots.com/team/players-roster/dametrious-crownover/"
    },
    {
      "name": "Carlton Davis III",
      "number": "7",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "New England Patriots",
      "id": "NE-carlton-davis",
      "profile": "https://www.patriots.com/team/players-roster/carlton-davis/"
    },
    {
      "name": "Tommy DeVito",
      "number": "16",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "New England Patriots",
      "id": "NE-tommy-devito",
      "profile": "https://www.patriots.com/team/players-roster/tommy-devito/"
    },
    {
      "name": "DeMario Douglas",
      "number": "3",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "New England Patriots",
      "id": "NE-demario-douglas",
      "profile": "https://www.patriots.com/team/players-roster/demario-douglas/"
    },
    {
      "name": "Cory Durden",
      "number": "94",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "New England Patriots",
      "id": "NE-cory-durden",
      "profile": "https://www.patriots.com/team/players-roster/cory-durden/"
    },
    {
      "name": "Christian Elliss",
      "number": "53",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "New England Patriots",
      "id": "NE-christian-elliss",
      "profile": "https://www.patriots.com/team/players-roster/christian-elliss/"
    },
    {
      "name": "Joshua Farmer",
      "number": "92",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "New England Patriots",
      "id": "NE-joshua-farmer",
      "profile": "https://www.patriots.com/team/players-roster/joshua-farmer/"
    },
    {
      "name": "Christian Gonzalez",
      "number": "0",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "New England Patriots",
      "id": "NE-christian-gonzalez",
      "profile": "https://www.patriots.com/team/players-roster/christian-gonzalez/"
    },
    {
      "name": "TreVeyon Henderson",
      "number": "32",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "New England Patriots",
      "id": "NE-treveyon-henderson",
      "profile": "https://www.patriots.com/team/players-roster/treveyon-henderson/"
    },
    {
      "name": "Hunter Henry",
      "number": "85",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "New England Patriots",
      "id": "NE-hunter-henry",
      "profile": "https://www.patriots.com/team/players-roster/hunter-henry/"
    },
    {
      "name": "Erick Hunter",
      "number": "49",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "New England Patriots",
      "id": "NE-erick-hunter",
      "profile": "https://www.patriots.com/team/players-roster/erick-hunter/"
    },
    {
      "name": "Gabe Jacas",
      "number": "50",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "New England Patriots",
      "id": "NE-gabe-jacas",
      "profile": "https://www.patriots.com/team/players-roster/gabe-jacas/"
    },
    {
      "name": "DaQuan Jones",
      "number": "99",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "New England Patriots",
      "id": "NE-daquan-jones",
      "profile": "https://www.patriots.com/team/players-roster/daquan-jones/"
    },
    {
      "name": "Dre'Mont Jones",
      "number": "5",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "New England Patriots",
      "id": "NE-dre-mont-jones",
      "profile": "https://www.patriots.com/team/players-roster/dre-mont-jones/"
    },
    {
      "name": "Marcus Jones",
      "number": "25",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "New England Patriots",
      "id": "NE-marcus-jones",
      "profile": "https://www.patriots.com/team/players-roster/marcus-jones/"
    },
    {
      "name": "Corey Kiner",
      "number": "9",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "New England Patriots",
      "id": "NE-corey-kiner",
      "profile": "https://www.patriots.com/team/players-roster/corey-kiner/"
    },
    {
      "name": "Lan Larison",
      "number": "34",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "New England Patriots",
      "id": "NE-lan-larison",
      "profile": "https://www.patriots.com/team/players-roster/lan-larison/"
    },
    {
      "name": "Cameron Latu",
      "number": "36",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "New England Patriots",
      "id": "NE-cameron-latu",
      "profile": "https://www.patriots.com/team/players-roster/cameron-latu/"
    },
    {
      "name": "Caleb Lomu",
      "number": "74",
      "position": "OL",
      "rosterPosition": "T",
      "team": "New England Patriots",
      "id": "NE-caleb-lomu",
      "profile": "https://www.patriots.com/team/players-roster/caleb-lomu/"
    },
    {
      "name": "Drake Maye",
      "number": "10",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "New England Patriots",
      "id": "NE-drake-maye",
      "profile": "https://www.patriots.com/team/players-roster/drake-maye/"
    },
    {
      "name": "Behren Morton",
      "number": "15",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "New England Patriots",
      "id": "NE-behren-morton",
      "profile": "https://www.patriots.com/team/players-roster/behren-morton/"
    },
    {
      "name": "Morgan Moses",
      "number": "76",
      "position": "OL",
      "rosterPosition": "T",
      "team": "New England Patriots",
      "id": "NE-morgan-moses",
      "profile": "https://www.patriots.com/team/players-roster/morgan-moses/"
    },
    {
      "name": "Darius Muasau",
      "number": "54",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "New England Patriots",
      "id": "NE-darius-muasau",
      "profile": "https://www.patriots.com/team/players-roster/darius-muasau/"
    },
    {
      "name": "Namdi Obiazor",
      "number": "48",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "New England Patriots",
      "id": "NE-namdi-obiazor",
      "profile": "https://www.patriots.com/team/players-roster/namdi-obiazor/"
    },
    {
      "name": "Elijah Ponder",
      "number": "91",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "New England Patriots",
      "id": "NE-elijah-ponder-2",
      "profile": "https://www.patriots.com/team/players-roster/elijah-ponder-2/"
    },
    {
      "name": "Karon Prunty",
      "number": "21",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "New England Patriots",
      "id": "NE-karon-prunty",
      "profile": "https://www.patriots.com/team/players-roster/karon-prunty/"
    },
    {
      "name": "Matt Pryor",
      "number": "65",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "New England Patriots",
      "id": "NE-matt-pryor",
      "profile": "https://www.patriots.com/team/players-roster/matt-pryor/"
    },
    {
      "name": "Eli Raridon",
      "number": "82",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "New England Patriots",
      "id": "NE-eli-raridon",
      "profile": "https://www.patriots.com/team/players-roster/eli-raridon/"
    },
    {
      "name": "Jaylen Reed",
      "number": "23",
      "position": "DB",
      "rosterPosition": "S",
      "team": "New England Patriots",
      "id": "NE-jaylen-reed",
      "profile": "https://www.patriots.com/team/players-roster/jaylen-reed/"
    },
    {
      "name": "Walter Rouse",
      "number": "72",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "New England Patriots",
      "id": "NE-walter-rouse",
      "profile": "https://www.patriots.com/team/players-roster/walter-rouse/"
    },
    {
      "name": "Brenden Schooler",
      "number": "41",
      "position": "DB",
      "rosterPosition": "S",
      "team": "New England Patriots",
      "id": "NE-brenden-schooler",
      "profile": "https://www.patriots.com/team/players-roster/brenden-schooler/"
    },
    {
      "name": "Robert Spillane",
      "number": "14",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "New England Patriots",
      "id": "NE-robert-spillane",
      "profile": "https://www.patriots.com/team/players-roster/robert-spillane/"
    },
    {
      "name": "Rhamondre Stevenson",
      "number": "38",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "New England Patriots",
      "id": "NE-rhamondre-stevenson",
      "profile": "https://www.patriots.com/team/players-roster/rhamondre-stevenson/"
    },
    {
      "name": "Leonard Taylor III",
      "number": "93",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "New England Patriots",
      "id": "NE-leonard-taylor-iii",
      "profile": "https://www.patriots.com/team/players-roster/leonard-taylor-iii/"
    },
    {
      "name": "Kyle Williams",
      "number": "18",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "New England Patriots",
      "id": "NE-kyle-williams",
      "profile": "https://www.patriots.com/team/players-roster/kyle-williams/"
    },
    {
      "name": "Milton Williams",
      "number": "97",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "New England Patriots",
      "id": "NE-milton-williams",
      "profile": "https://www.patriots.com/team/players-roster/milton-williams/"
    },
    {
      "name": "Jared Wilson",
      "number": "55",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "New England Patriots",
      "id": "NE-jared-wilson",
      "profile": "https://www.patriots.com/team/players-roster/jared-wilson/"
    },
    {
      "name": "Mitch Wishnowsky",
      "number": "19",
      "position": "ST",
      "rosterPosition": "P",
      "team": "New England Patriots",
      "id": "NE-mitch-wishnowsky",
      "profile": "https://www.patriots.com/team/players-roster/mitch-wishnowsky/"
    },
    {
      "name": "Charles Woods",
      "number": "22",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "New England Patriots",
      "id": "NE-charles-woods",
      "profile": "https://www.patriots.com/team/players-roster/charles-woods/"
    },
    {
      "name": "Craig Woodson",
      "number": "4",
      "position": "DB",
      "rosterPosition": "S",
      "team": "New England Patriots",
      "id": "NE-craig-woodson",
      "profile": "https://www.patriots.com/team/players-roster/craig-woodson/"
    }
  ],
  "New York Jets": [
    {
      "name": "Braelon Allen",
      "number": "0",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "New York Jets",
      "id": "NYJ-braelon-allen",
      "profile": "https://www.newyorkjets.com/team/players-roster/braelon-allen/"
    },
    {
      "name": "David Bailey",
      "number": "31",
      "position": "LB",
      "rosterPosition": "EDGE",
      "team": "New York Jets",
      "id": "NYJ-david-bailey",
      "profile": "https://www.newyorkjets.com/team/players-roster/david-bailey/"
    },
    {
      "name": "Andrew Beck",
      "number": "47",
      "position": "RB",
      "rosterPosition": "FB",
      "team": "New York Jets",
      "id": "NYJ-andrew-beck",
      "profile": "https://www.newyorkjets.com/team/players-roster/andrew-beck/"
    },
    {
      "name": "Dane Belton",
      "number": "6",
      "position": "DB",
      "rosterPosition": "S",
      "team": "New York Jets",
      "id": "NYJ-dane-belton",
      "profile": "https://www.newyorkjets.com/team/players-roster/dane-belton/"
    },
    {
      "name": "Jowon Briggs",
      "number": "91",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "New York Jets",
      "id": "NYJ-jowon-briggs",
      "profile": "https://www.newyorkjets.com/team/players-roster/jowon-briggs/"
    },
    {
      "name": "Jarvis Brownlee Jr.",
      "number": "2",
      "position": "DB",
      "rosterPosition": "DB",
      "team": "New York Jets",
      "id": "NYJ-jarvis-brownlee-jr",
      "profile": "https://www.newyorkjets.com/team/players-roster/jarvis-brownlee-jr/"
    },
    {
      "name": "Andre Cisco",
      "number": "8",
      "position": "DB",
      "rosterPosition": "S",
      "team": "New York Jets",
      "id": "NYJ-andre-cisco",
      "profile": "https://www.newyorkjets.com/team/players-roster/andre-cisco/"
    },
    {
      "name": "Omar Cooper Jr.",
      "number": "11",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "New York Jets",
      "id": "NYJ-omar-cooper-jr",
      "profile": "https://www.newyorkjets.com/team/players-roster/omar-cooper-jr/"
    },
    {
      "name": "Demario Davis",
      "number": "56",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "New York Jets",
      "id": "NYJ-demario-davis",
      "profile": "https://www.newyorkjets.com/team/players-roster/demario-davis/"
    },
    {
      "name": "Isaiah Davis",
      "number": "32",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "New York Jets",
      "id": "NYJ-isaiah-davis",
      "profile": "https://www.newyorkjets.com/team/players-roster/isaiah-davis/"
    },
    {
      "name": "Kingsley Enagbare",
      "number": "52",
      "position": "LB",
      "rosterPosition": "EDGE",
      "team": "New York Jets",
      "id": "NYJ-kingsley-enagbare",
      "profile": "https://www.newyorkjets.com/team/players-roster/kingsley-enagbare/"
    },
    {
      "name": "Olu Fashanu",
      "number": "74",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "New York Jets",
      "id": "NYJ-olumuyiwa-fashanu",
      "profile": "https://www.newyorkjets.com/team/players-roster/olumuyiwa-fashanu/"
    },
    {
      "name": "Minkah Fitzpatrick",
      "number": "29",
      "position": "DB",
      "rosterPosition": "S",
      "team": "New York Jets",
      "id": "NYJ-minkah-fitzpatrick",
      "profile": "https://www.newyorkjets.com/team/players-roster/minkah-fitzpatrick/"
    },
    {
      "name": "Blake Freeland",
      "number": "76",
      "position": "OL",
      "rosterPosition": "T",
      "team": "New York Jets",
      "id": "NYJ-blake-freeland",
      "profile": "https://www.newyorkjets.com/team/players-roster/blake-freeland/"
    },
    {
      "name": "Breece Hall",
      "number": "20",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "New York Jets",
      "id": "NYJ-breece-hall",
      "profile": "https://www.newyorkjets.com/team/players-roster/breece-hall/"
    },
    {
      "name": "Jack Heflin",
      "number": "96",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "New York Jets",
      "id": "NYJ-jack-heflin",
      "profile": "https://www.newyorkjets.com/team/players-roster/jack-heflin/"
    },
    {
      "name": "Thomas Hennessy",
      "number": "42",
      "position": "ST",
      "rosterPosition": "LS",
      "team": "New York Jets",
      "id": "NYJ-thomas-hennessy",
      "profile": "https://www.newyorkjets.com/team/players-roster/thomas-hennessy/"
    },
    {
      "name": "Darrell Jackson Jr.",
      "number": "95",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "New York Jets",
      "id": "NYJ-darrell-jackson-jr",
      "profile": "https://www.newyorkjets.com/team/players-roster/darrell-jackson-jr/"
    },
    {
      "name": "Jaden Keller",
      "number": "48",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "New York Jets",
      "id": "NYJ-jaden-keller",
      "profile": "https://www.newyorkjets.com/team/players-roster/jaden-keller/"
    },
    {
      "name": "Cade Klubnik",
      "number": "10",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "New York Jets",
      "id": "NYJ-cade-klubnik",
      "profile": "https://www.newyorkjets.com/team/players-roster/cade-klubnik/"
    },
    {
      "name": "Kohl Levao",
      "number": "60",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "New York Jets",
      "id": "NYJ-kohl-levao",
      "profile": "https://www.newyorkjets.com/team/players-roster/kohl-levao/"
    },
    {
      "name": "Nate Lynn",
      "number": "92",
      "position": "LB",
      "rosterPosition": "Edge",
      "team": "New York Jets",
      "id": "NYJ-nate-lynn",
      "profile": "https://www.newyorkjets.com/team/players-roster/nate-lynn/"
    },
    {
      "name": "Malik McClain",
      "number": "84",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "New York Jets",
      "id": "NYJ-malik-mcclain",
      "profile": "https://www.newyorkjets.com/team/players-roster/malik-mcclain/"
    },
    {
      "name": "Will McDonald IV",
      "number": "9",
      "position": "LB",
      "rosterPosition": "EDGE",
      "team": "New York Jets",
      "id": "NYJ-will-mcdonald-iv",
      "profile": "https://www.newyorkjets.com/team/players-roster/will-mcdonald-iv/"
    },
    {
      "name": "Austin McNamara",
      "number": "14",
      "position": "ST",
      "rosterPosition": "P",
      "team": "New York Jets",
      "id": "NYJ-austin-mcnamara",
      "profile": "https://www.newyorkjets.com/team/players-roster/austin-mcnamara/"
    },
    {
      "name": "Armand Membou",
      "number": "70",
      "position": "OL",
      "rosterPosition": "OT",
      "team": "New York Jets",
      "id": "NYJ-armand-membou",
      "profile": "https://www.newyorkjets.com/team/players-roster/armand-membou/"
    },
    {
      "name": "Jordan Meredith",
      "number": "67",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "New York Jets",
      "id": "NYJ-jordan-meredith",
      "profile": "https://www.newyorkjets.com/team/players-roster/jordan-meredith/"
    },
    {
      "name": "Adonai Mitchell",
      "number": "15",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "New York Jets",
      "id": "NYJ-adonai-mitchell",
      "profile": "https://www.newyorkjets.com/team/players-roster/adonai-mitchell/"
    },
    {
      "name": "Malachi Moore",
      "number": "27",
      "position": "DB",
      "rosterPosition": "DB",
      "team": "New York Jets",
      "id": "NYJ-malachi-moore",
      "profile": "https://www.newyorkjets.com/team/players-roster/malachi-moore/"
    },
    {
      "name": "Josh Myers",
      "number": "71",
      "position": "OL",
      "rosterPosition": "C",
      "team": "New York Jets",
      "id": "NYJ-josh-myers",
      "profile": "https://www.newyorkjets.com/team/players-roster/josh-myers/"
    },
    {
      "name": "Kene Nwangwu",
      "number": "3",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "New York Jets",
      "id": "NYJ-kene-nwangwu",
      "profile": "https://www.newyorkjets.com/team/players-roster/kene-nwangwu/"
    },
    {
      "name": "Chukwuma Okorafor",
      "number": "79",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "New York Jets",
      "id": "NYJ-chukwuma-okorafor",
      "profile": "https://www.newyorkjets.com/team/players-roster/chukwuma-okorafor/"
    },
    {
      "name": "Joseph Ossai",
      "number": "46",
      "position": "LB",
      "rosterPosition": "EDGE",
      "team": "New York Jets",
      "id": "NYJ-joseph-ossai",
      "profile": "https://www.newyorkjets.com/team/players-roster/joseph-ossai/"
    },
    {
      "name": "Payton Page",
      "number": "98",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "New York Jets",
      "id": "NYJ-payton-page",
      "profile": "https://www.newyorkjets.com/team/players-roster/payton-page/"
    },
    {
      "name": "Dylan Parham",
      "number": "64",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "New York Jets",
      "id": "NYJ-dylan-parham",
      "profile": "https://www.newyorkjets.com/team/players-roster/dylan-parham/"
    },
    {
      "name": "Tim Patrick",
      "number": "17",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "New York Jets",
      "id": "NYJ-tim-patrick",
      "profile": "https://www.newyorkjets.com/team/players-roster/tim-patrick/"
    },
    {
      "name": "Harrison Phillips",
      "number": "97",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "New York Jets",
      "id": "NYJ-harrison-phillips",
      "profile": "https://www.newyorkjets.com/team/players-roster/harrison-phillips/"
    },
    {
      "name": "D'Angelo Ponds",
      "number": "23",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "New York Jets",
      "id": "NYJ-d-angelo-ponds",
      "profile": "https://www.newyorkjets.com/team/players-roster/d-angelo-ponds/"
    },
    {
      "name": "Jeremy Ruckert",
      "number": "89",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "New York Jets",
      "id": "NYJ-jeremy-ruckert",
      "profile": "https://www.newyorkjets.com/team/players-roster/jeremy-ruckert/"
    },
    {
      "name": "Kenyon Sadiq",
      "number": "16",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "New York Jets",
      "id": "NYJ-kenyon-sadiq",
      "profile": "https://www.newyorkjets.com/team/players-roster/kenyon-sadiq/"
    },
    {
      "name": "Jason Sanders",
      "number": "19",
      "position": "ST",
      "rosterPosition": "K",
      "team": "New York Jets",
      "id": "NYJ-jason-sanders",
      "profile": "https://www.newyorkjets.com/team/players-roster/jason-sanders/"
    },
    {
      "name": "Jamien Sherwood",
      "number": "44",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "New York Jets",
      "id": "NYJ-jamien-sherwood",
      "profile": "https://www.newyorkjets.com/team/players-roster/jamien-sherwood/"
    },
    {
      "name": "Geno Smith",
      "number": "7",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "New York Jets",
      "id": "NYJ-geno-smith",
      "profile": "https://www.newyorkjets.com/team/players-roster/geno-smith/"
    },
    {
      "name": "Brandon Stephens",
      "number": "21",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "New York Jets",
      "id": "NYJ-brandon-stephens",
      "profile": "https://www.newyorkjets.com/team/players-roster/brandon-stephens/"
    },
    {
      "name": "Qwan'tez Stiggers",
      "number": "37",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "New York Jets",
      "id": "NYJ-qwan-tez-stiggers",
      "profile": "https://www.newyorkjets.com/team/players-roster/qwan-tez-stiggers/"
    },
    {
      "name": "Mason Taylor",
      "number": "85",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "New York Jets",
      "id": "NYJ-mason-taylor",
      "profile": "https://www.newyorkjets.com/team/players-roster/mason-taylor/"
    },
    {
      "name": "Azareye'h Thomas",
      "number": "1",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "New York Jets",
      "id": "NYJ-azareye-h-thomas",
      "profile": "https://www.newyorkjets.com/team/players-roster/azareye-h-thomas/"
    },
    {
      "name": "Joe Tippmann",
      "number": "66",
      "position": "OL",
      "rosterPosition": "C",
      "team": "New York Jets",
      "id": "NYJ-joe-tippmann",
      "profile": "https://www.newyorkjets.com/team/players-roster/joe-tippmann/"
    },
    {
      "name": "Trevin Wallace",
      "number": "49",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "New York Jets",
      "id": "NYJ-trevin-wallace",
      "profile": "https://www.newyorkjets.com/team/players-roster/trevin-wallace/"
    },
    {
      "name": "Isaiah Williams",
      "number": "18",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "New York Jets",
      "id": "NYJ-isaiah-williams-2",
      "profile": "https://www.newyorkjets.com/team/players-roster/isaiah-williams-2/"
    },
    {
      "name": "Garrett Wilson",
      "number": "5",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "New York Jets",
      "id": "NYJ-garrett-wilson",
      "profile": "https://www.newyorkjets.com/team/players-roster/garrett-wilson/"
    },
    {
      "name": "Jelani Woods",
      "number": "86",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "New York Jets",
      "id": "NYJ-jelani-woods",
      "profile": "https://www.newyorkjets.com/team/players-roster/jelani-woods/"
    },
    {
      "name": "Nahshon Wright",
      "number": "26",
      "position": "DB",
      "rosterPosition": "DB",
      "team": "New York Jets",
      "id": "NYJ-nahshon-wright",
      "profile": "https://www.newyorkjets.com/team/players-roster/nahshon-wright/"
    }
  ],
  "Houston Texans": [
    {
      "name": "Azeez Al-Shaair",
      "number": "0",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Houston Texans",
      "id": "HOU-azeez-al-shaair",
      "profile": "https://www.houstontexans.com/team/players-roster/azeez-al-shaair/"
    },
    {
      "name": "Will Anderson Jr.",
      "number": "51",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Houston Texans",
      "id": "HOU-will-anderson-jr",
      "profile": "https://www.houstontexans.com/team/players-roster/will-anderson-jr/"
    },
    {
      "name": "Jake Andrews",
      "number": "60",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Houston Texans",
      "id": "HOU-jake-andrews",
      "profile": "https://www.houstontexans.com/team/players-roster/jake-andrews/"
    },
    {
      "name": "Reed Blankenship",
      "number": "6",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Houston Texans",
      "id": "HOU-reed-blankenship",
      "profile": "https://www.houstontexans.com/team/players-roster/reed-blankenship/"
    },
    {
      "name": "Kayshon Boutte",
      "number": "14",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Houston Texans",
      "id": "HOU-kayshon-boutte",
      "profile": "https://www.houstontexans.com/team/players-roster/kayshon-boutte/"
    },
    {
      "name": "Austin Brinkman",
      "number": "40",
      "position": "ST",
      "rosterPosition": "LS",
      "team": "Houston Texans",
      "id": "HOU-austin-brinkman",
      "profile": "https://www.houstontexans.com/team/players-roster/austin-brinkman/"
    },
    {
      "name": "Evan Brown",
      "number": "63",
      "position": "OL",
      "rosterPosition": "C/G",
      "team": "Houston Texans",
      "id": "HOU-evan-brown",
      "profile": "https://www.houstontexans.com/team/players-roster/evan-brown/"
    },
    {
      "name": "Trent Brown",
      "number": "77",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Houston Texans",
      "id": "HOU-trent-brown",
      "profile": "https://www.houstontexans.com/team/players-roster/trent-brown/"
    },
    {
      "name": "Calen Bullock",
      "number": "2",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Houston Texans",
      "id": "HOU-calen-bullock",
      "profile": "https://www.houstontexans.com/team/players-roster/calen-bullock/"
    },
    {
      "name": "Jadeveon Clowney",
      "number": "90",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Houston Texans",
      "id": "HOU-jadeveon-clowney",
      "profile": "https://www.houstontexans.com/team/players-roster/jadeveon-clowney/"
    },
    {
      "name": "Nico Collins",
      "number": "12",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Houston Texans",
      "id": "HOU-nico-collins",
      "profile": "https://www.houstontexans.com/team/players-roster/nico-collins/"
    },
    {
      "name": "Tank Dell",
      "number": "1",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Houston Texans",
      "id": "HOU-tank-dell",
      "profile": "https://www.houstontexans.com/team/players-roster/tank-dell/"
    },
    {
      "name": "Emari Demercado",
      "number": "21",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Houston Texans",
      "id": "HOU-emari-demercado",
      "profile": "https://www.houstontexans.com/team/players-roster/emari-demercado/"
    },
    {
      "name": "Aireontae Ersery",
      "number": "79",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Houston Texans",
      "id": "HOU-aireontae-ersery",
      "profile": "https://www.houstontexans.com/team/players-roster/aireontae-ersery/"
    },
    {
      "name": "Ka'imi Fairbairn",
      "number": "15",
      "position": "ST",
      "rosterPosition": "K",
      "team": "Houston Texans",
      "id": "HOU-ka-imi-fairbairn",
      "profile": "https://www.houstontexans.com/team/players-roster/ka-imi-fairbairn/"
    },
    {
      "name": "Blake Fisher",
      "number": "57",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Houston Texans",
      "id": "HOU-blake-fisher",
      "profile": "https://www.houstontexans.com/team/players-roster/blake-fisher/"
    },
    {
      "name": "Logan Hall",
      "number": "96",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Houston Texans",
      "id": "HOU-logan-hall",
      "profile": "https://www.houstontexans.com/team/players-roster/logan-hall/"
    },
    {
      "name": "Jake Hansen",
      "number": "35",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Houston Texans",
      "id": "HOU-jake-hansen",
      "profile": "https://www.houstontexans.com/team/players-roster/jake-hansen/"
    },
    {
      "name": "Marvin Harrison Jr.",
      "number": "18",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Houston Texans",
      "id": "HOU-marvin-harrison-jr",
      "profile": "https://www.houstontexans.com/team/players-roster/marvin-harrison-jr/"
    },
    {
      "name": "Sabastian Harsh",
      "number": "54",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Houston Texans",
      "id": "HOU-sabastian-harsh",
      "profile": "https://www.houstontexans.com/team/players-roster/sabastian-harsh/"
    },
    {
      "name": "Danielle Hunter",
      "number": "55",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Houston Texans",
      "id": "HOU-danielle-hunter",
      "profile": "https://www.houstontexans.com/team/players-roster/danielle-hunter/"
    },
    {
      "name": "Xavier Hutchinson",
      "number": "19",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Houston Texans",
      "id": "HOU-xavier-hutchinson",
      "profile": "https://www.houstontexans.com/team/players-roster/xavier-hutchinson/"
    },
    {
      "name": "Ed Ingram",
      "number": "69",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Houston Texans",
      "id": "HOU-ed-ingram",
      "profile": "https://www.houstontexans.com/team/players-roster/ed-ingram/"
    },
    {
      "name": "Ja'Marcus Ingram",
      "number": "20",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Houston Texans",
      "id": "HOU-ja-marcus-ingram",
      "profile": "https://www.houstontexans.com/team/players-roster/ja-marcus-ingram/"
    },
    {
      "name": "Naquan Jones",
      "number": "91",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Houston Texans",
      "id": "HOU-naquan-jones",
      "profile": "https://www.houstontexans.com/team/players-roster/naquan-jones/"
    },
    {
      "name": "Brevin Jordan",
      "number": "9",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Houston Texans",
      "id": "HOU-brevin-jordan",
      "profile": "https://www.houstontexans.com/team/players-roster/brevin-jordan/"
    },
    {
      "name": "Marlin Klein",
      "number": "83",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Houston Texans",
      "id": "HOU-marlin-klein-x2560",
      "profile": "https://www.houstontexans.com/team/players-roster/marlin-klein-x2560/"
    },
    {
      "name": "Kai Kroeger",
      "number": "38",
      "position": "ST",
      "rosterPosition": "P",
      "team": "Houston Texans",
      "id": "HOU-kai-kroeger",
      "profile": "https://www.houstontexans.com/team/players-roster/kai-kroeger/"
    },
    {
      "name": "Kamari Lassiter",
      "number": "3",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Houston Texans",
      "id": "HOU-kamari-lassiter",
      "profile": "https://www.houstontexans.com/team/players-roster/kamari-lassiter/"
    },
    {
      "name": "Woody Marks",
      "number": "4",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Houston Texans",
      "id": "HOU-woody-marks",
      "profile": "https://www.houstontexans.com/team/players-roster/woody-marks/"
    },
    {
      "name": "Kayden McDonald",
      "number": "93",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Houston Texans",
      "id": "HOU-kayden-mcdonald-x4937",
      "profile": "https://www.houstontexans.com/team/players-roster/kayden-mcdonald-x4937/"
    },
    {
      "name": "Davis Mills",
      "number": "10",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Houston Texans",
      "id": "HOU-davis-mills",
      "profile": "https://www.houstontexans.com/team/players-roster/davis-mills/"
    },
    {
      "name": "David Montgomery",
      "number": "32",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Houston Texans",
      "id": "HOU-david-montgomery",
      "profile": "https://www.houstontexans.com/team/players-roster/david-montgomery/"
    },
    {
      "name": "Foster Moreau",
      "number": "87",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Houston Texans",
      "id": "HOU-foster-moreau",
      "profile": "https://www.houstontexans.com/team/players-roster/foster-moreau/"
    },
    {
      "name": "Febechi Nwaiwu",
      "number": "64",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Houston Texans",
      "id": "HOU-febechi-nwaiwu-x9665",
      "profile": "https://www.houstontexans.com/team/players-roster/febechi-nwaiwu-x9665/"
    },
    {
      "name": "Dare Ogunbowale",
      "number": "23",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Houston Texans",
      "id": "HOU-dare-ogunbowale-x1393",
      "profile": "https://www.houstontexans.com/team/players-roster/dare-ogunbowale-x1393/"
    },
    {
      "name": "Jalen Pitre",
      "number": "5",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Houston Texans",
      "id": "HOU-jalen-pitre",
      "profile": "https://www.houstontexans.com/team/players-roster/jalen-pitre/"
    },
    {
      "name": "Kamari Ramsey",
      "number": "27",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Houston Texans",
      "id": "HOU-kamari-ramsey-x4812",
      "profile": "https://www.houstontexans.com/team/players-roster/kamari-ramsey-x4812/"
    },
    {
      "name": "Sheldon Rankins",
      "number": "98",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Houston Texans",
      "id": "HOU-sheldon-rankins",
      "profile": "https://www.houstontexans.com/team/players-roster/sheldon-rankins/"
    },
    {
      "name": "Dominique Robinson",
      "number": "94",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Houston Texans",
      "id": "HOU-dominique-robinson",
      "profile": "https://www.houstontexans.com/team/players-roster/dominique-robinson/"
    },
    {
      "name": "Keylan Rutledge",
      "number": "66",
      "position": "OL",
      "rosterPosition": "C/G",
      "team": "Houston Texans",
      "id": "HOU-keylan-rutledge-x6297",
      "profile": "https://www.houstontexans.com/team/players-roster/keylan-rutledge-x6297/"
    },
    {
      "name": "Dalton Schultz",
      "number": "86",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Houston Texans",
      "id": "HOU-dalton-schultz",
      "profile": "https://www.houstontexans.com/team/players-roster/dalton-schultz/"
    },
    {
      "name": "Braden Smith",
      "number": "71",
      "position": "OL",
      "rosterPosition": "OT",
      "team": "Houston Texans",
      "id": "HOU-braden-smith",
      "profile": "https://www.houstontexans.com/team/players-roster/braden-smith/"
    },
    {
      "name": "Tremon Smith",
      "number": "11",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Houston Texans",
      "id": "HOU-tremon-smith",
      "profile": "https://www.houstontexans.com/team/players-roster/tremon-smith/"
    },
    {
      "name": "M.J. Stewart",
      "number": "29",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Houston Texans",
      "id": "HOU-m-j-stewart",
      "profile": "https://www.houstontexans.com/team/players-roster/m-j-stewart/"
    },
    {
      "name": "Derek Stingley Jr.",
      "number": "24",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Houston Texans",
      "id": "HOU-derek-stingley-jr",
      "profile": "https://www.houstontexans.com/team/players-roster/derek-stingley-jr/"
    },
    {
      "name": "Cade Stover",
      "number": "8",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Houston Texans",
      "id": "HOU-cade-stover",
      "profile": "https://www.houstontexans.com/team/players-roster/cade-stover/"
    },
    {
      "name": "C.J. Stroud",
      "number": "7",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Houston Texans",
      "id": "HOU-c-j-stroud",
      "profile": "https://www.houstontexans.com/team/players-roster/c-j-stroud/"
    },
    {
      "name": "Wyatt Teller",
      "number": "75",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Houston Texans",
      "id": "HOU-wyatt-teller",
      "profile": "https://www.houstontexans.com/team/players-roster/wyatt-teller/"
    },
    {
      "name": "Nate Thomas",
      "number": "78",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Houston Texans",
      "id": "HOU-nathan-thomas",
      "profile": "https://www.houstontexans.com/team/players-roster/nathan-thomas/"
    },
    {
      "name": "Henry To'oTo'o",
      "number": "39",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Houston Texans",
      "id": "HOU-henry-to-oto-o",
      "profile": "https://www.houstontexans.com/team/players-roster/henry-to-oto-o/"
    },
    {
      "name": "Tommy Togiai",
      "number": "72",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Houston Texans",
      "id": "HOU-tommy-togiai",
      "profile": "https://www.houstontexans.com/team/players-roster/tommy-togiai/"
    },
    {
      "name": "Wade Woodaz",
      "number": "30",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Houston Texans",
      "id": "HOU-wade-woodaz-x7832",
      "profile": "https://www.houstontexans.com/team/players-roster/wade-woodaz-x7832/"
    }
  ],
  "Indianapolis Colts": [
    {
      "name": "Adetomiwa Adebawore",
      "number": "95",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Indianapolis Colts",
      "id": "IND-adetomiwa-adebawore",
      "profile": "https://www.colts.com/team/players-roster/adetomiwa-adebawore/"
    },
    {
      "name": "Austin Ajiake",
      "number": "58",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Indianapolis Colts",
      "id": "IND-austin-ajiake",
      "profile": "https://www.colts.com/team/players-roster/austin-ajiake/"
    },
    {
      "name": "Mo Alie-Cox",
      "number": "81",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Indianapolis Colts",
      "id": "IND-mo-alie-cox",
      "profile": "https://www.colts.com/team/players-roster/mo-alie-cox/"
    },
    {
      "name": "CJ Allen",
      "number": "53",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Indianapolis Colts",
      "id": "IND-cj-allen",
      "profile": "https://www.colts.com/team/players-roster/cj-allen/"
    },
    {
      "name": "Keenan Allen",
      "number": "10",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Indianapolis Colts",
      "id": "IND-keenan-allen",
      "profile": "https://www.colts.com/team/players-roster/keenan-allen/"
    },
    {
      "name": "Bryce Boettcher",
      "number": "50",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Indianapolis Colts",
      "id": "IND-bryce-boettcher",
      "profile": "https://www.colts.com/team/players-roster/bryce-boettcher/"
    },
    {
      "name": "Tanor Bortolini",
      "number": "60",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Indianapolis Colts",
      "id": "IND-tanor-bortolini",
      "profile": "https://www.colts.com/team/players-roster/tanor-bortolini/"
    },
    {
      "name": "Pharaoh Brown",
      "number": "49",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Indianapolis Colts",
      "id": "IND-pharaoh-brown",
      "profile": "https://www.colts.com/team/players-roster/pharaoh-brown/"
    },
    {
      "name": "Deion Burks",
      "number": "80",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Indianapolis Colts",
      "id": "IND-deion-burks",
      "profile": "https://www.colts.com/team/players-roster/deion-burks/"
    },
    {
      "name": "Cam Bynum",
      "number": "0",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Indianapolis Colts",
      "id": "IND-camryn-bynum",
      "profile": "https://www.colts.com/team/players-roster/camryn-bynum/"
    },
    {
      "name": "Jaylon Carlies",
      "number": "57",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Indianapolis Colts",
      "id": "IND-jaylon-carlies",
      "profile": "https://www.colts.com/team/players-roster/jaylon-carlies/"
    },
    {
      "name": "Tahj Chambers",
      "number": "44",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Indianapolis Colts",
      "id": "IND-tahj-chambers",
      "profile": "https://www.colts.com/team/players-roster/tahj-chambers/"
    },
    {
      "name": "Caden Curry",
      "number": "55",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Indianapolis Colts",
      "id": "IND-caden-curry",
      "profile": "https://www.colts.com/team/players-roster/caden-curry/"
    },
    {
      "name": "Akeem Davis-Gaither",
      "number": "51",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Indianapolis Colts",
      "id": "IND-akeem-davis-gaither",
      "profile": "https://www.colts.com/team/players-roster/akeem-davis-gaither/"
    },
    {
      "name": "Josh Downs",
      "number": "2",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Indianapolis Colts",
      "id": "IND-josh-downs",
      "profile": "https://www.colts.com/team/players-roster/josh-downs/"
    },
    {
      "name": "Ashton Dulin",
      "number": "16",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Indianapolis Colts",
      "id": "IND-ashton-dulin",
      "profile": "https://www.colts.com/team/players-roster/ashton-dulin/"
    },
    {
      "name": "Jalen Farmer",
      "number": "62",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Indianapolis Colts",
      "id": "IND-jalen-farmer",
      "profile": "https://www.colts.com/team/players-roster/jalen-farmer/"
    },
    {
      "name": "Sauce Gardner",
      "number": "1",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Indianapolis Colts",
      "id": "IND-sauce-gardner",
      "profile": "https://www.colts.com/team/players-roster/sauce-gardner/"
    },
    {
      "name": "DJ Giddens",
      "number": "21",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Indianapolis Colts",
      "id": "IND-dj-giddens",
      "profile": "https://www.colts.com/team/players-roster/dj-giddens/"
    },
    {
      "name": "Kevin Givens",
      "number": "74",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Indianapolis Colts",
      "id": "IND-kevin-givens",
      "profile": "https://www.colts.com/team/players-roster/kevin-givens/"
    },
    {
      "name": "Matt Goncalves",
      "number": "71",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Indianapolis Colts",
      "id": "IND-matt-goncalves",
      "profile": "https://www.colts.com/team/players-roster/matt-goncalves/"
    },
    {
      "name": "Anthony Gould",
      "number": "6",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Indianapolis Colts",
      "id": "IND-anthony-gould",
      "profile": "https://www.colts.com/team/players-roster/anthony-gould/"
    },
    {
      "name": "George Gumbs Jr.",
      "number": "52",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Indianapolis Colts",
      "id": "IND-george-gumbs-jr",
      "profile": "https://www.colts.com/team/players-roster/george-gumbs-jr/"
    },
    {
      "name": "Kapena Gushiken",
      "number": "34",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Indianapolis Colts",
      "id": "IND-kapena-gushiken",
      "profile": "https://www.colts.com/team/players-roster/kapena-gushiken/"
    },
    {
      "name": "Kenneth Harris",
      "number": "33",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Indianapolis Colts",
      "id": "IND-kenneth-harris",
      "profile": "https://www.colts.com/team/players-roster/kenneth-harris/"
    },
    {
      "name": "AJ Haulcy",
      "number": "25",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Indianapolis Colts",
      "id": "IND-a-j-haulcy",
      "profile": "https://www.colts.com/team/players-roster/a-j-haulcy/"
    },
    {
      "name": "Charlie Heck",
      "number": "73",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Indianapolis Colts",
      "id": "IND-charlie-heck",
      "profile": "https://www.colts.com/team/players-roster/charlie-heck/"
    },
    {
      "name": "Daniel Jones",
      "number": "17",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Indianapolis Colts",
      "id": "IND-daniel-jones",
      "profile": "https://www.colts.com/team/players-roster/daniel-jones/"
    },
    {
      "name": "Laiatu Latu",
      "number": "97",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Indianapolis Colts",
      "id": "IND-laiatu-latu",
      "profile": "https://www.colts.com/team/players-roster/laiatu-latu/"
    },
    {
      "name": "Riley Leonard",
      "number": "15",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Indianapolis Colts",
      "id": "IND-riley-leonard",
      "profile": "https://www.colts.com/team/players-roster/riley-leonard/"
    },
    {
      "name": "Will Mallory",
      "number": "86",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Indianapolis Colts",
      "id": "IND-will-mallory",
      "profile": "https://www.colts.com/team/players-roster/will-mallory/"
    },
    {
      "name": "Seth McGowan",
      "number": "20",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Indianapolis Colts",
      "id": "IND-seth-mcgowan",
      "profile": "https://www.colts.com/team/players-roster/seth-mcgowan/"
    },
    {
      "name": "Drew Ogletree",
      "number": "85",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Indianapolis Colts",
      "id": "IND-andrew-ogletree",
      "profile": "https://www.colts.com/team/players-roster/andrew-ogletree/"
    },
    {
      "name": "Jonathan Owens",
      "number": "38",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Indianapolis Colts",
      "id": "IND-jonathan-owens",
      "profile": "https://www.colts.com/team/players-roster/jonathan-owens/"
    },
    {
      "name": "Bernhard Raimann",
      "number": "79",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Indianapolis Colts",
      "id": "IND-bernhard-raimann",
      "profile": "https://www.colts.com/team/players-roster/bernhard-raimann/"
    },
    {
      "name": "Luke Rhodes",
      "number": "46",
      "position": "ST",
      "rosterPosition": "LS",
      "team": "Indianapolis Colts",
      "id": "IND-luke-rhodes",
      "profile": "https://www.colts.com/team/players-roster/luke-rhodes/"
    },
    {
      "name": "Anthony Richardson Sr.",
      "number": "5",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Indianapolis Colts",
      "id": "IND-anthony-richardson",
      "profile": "https://www.colts.com/team/players-roster/anthony-richardson/"
    },
    {
      "name": "Rigoberto Sanchez",
      "number": "8",
      "position": "ST",
      "rosterPosition": "P",
      "team": "Indianapolis Colts",
      "id": "IND-rigoberto-sanchez",
      "profile": "https://www.colts.com/team/players-roster/rigoberto-sanchez/"
    },
    {
      "name": "Spencer Shrader",
      "number": "3",
      "position": "ST",
      "rosterPosition": "K",
      "team": "Indianapolis Colts",
      "id": "IND-spencer-shrader",
      "profile": "https://www.colts.com/team/players-roster/spencer-shrader/"
    },
    {
      "name": "Tim Smith",
      "number": "93",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Indianapolis Colts",
      "id": "IND-tim-smith",
      "profile": "https://www.colts.com/team/players-roster/tim-smith/"
    },
    {
      "name": "Grover Stewart",
      "number": "90",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Indianapolis Colts",
      "id": "IND-grover-stewart",
      "profile": "https://www.colts.com/team/players-roster/grover-stewart/"
    },
    {
      "name": "Jonathan Taylor",
      "number": "28",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Indianapolis Colts",
      "id": "IND-jonathan-taylor",
      "profile": "https://www.colts.com/team/players-roster/jonathan-taylor/"
    },
    {
      "name": "Luke Tenuta",
      "number": "67",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Indianapolis Colts",
      "id": "IND-luke-tenuta",
      "profile": "https://www.colts.com/team/players-roster/luke-tenuta/"
    },
    {
      "name": "Jerry Tillery",
      "number": "94",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Indianapolis Colts",
      "id": "IND-jerry-tillery",
      "profile": "https://www.colts.com/team/players-roster/jerry-tillery/"
    },
    {
      "name": "Jalen Travis",
      "number": "75",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Indianapolis Colts",
      "id": "IND-jalen-travis",
      "profile": "https://www.colts.com/team/players-roster/jalen-travis/"
    },
    {
      "name": "Laquon Treadwell",
      "number": "13",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Indianapolis Colts",
      "id": "IND-laquon-treadwell",
      "profile": "https://www.colts.com/team/players-roster/laquon-treadwell/"
    },
    {
      "name": "Dalton Tucker",
      "number": "68",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Indianapolis Colts",
      "id": "IND-dalton-tucker",
      "profile": "https://www.colts.com/team/players-roster/dalton-tucker/"
    },
    {
      "name": "Jaylahn Tuimoloau",
      "number": "91",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Indianapolis Colts",
      "id": "IND-jt-tuimoloau",
      "profile": "https://www.colts.com/team/players-roster/jt-tuimoloau/"
    },
    {
      "name": "Sedrick Van Pran-Granger",
      "number": "63",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Indianapolis Colts",
      "id": "IND-sedrick-van-pran-granger",
      "profile": "https://www.colts.com/team/players-roster/sedrick-van-pran-granger/"
    },
    {
      "name": "Justin Walley",
      "number": "27",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Indianapolis Colts",
      "id": "IND-justin-walley",
      "profile": "https://www.colts.com/team/players-roster/justin-walley/"
    },
    {
      "name": "Charvarius Ward",
      "number": "7",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Indianapolis Colts",
      "id": "IND-charvarius-ward",
      "profile": "https://www.colts.com/team/players-roster/charvarius-ward/"
    },
    {
      "name": "Tyler Warren",
      "number": "84",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Indianapolis Colts",
      "id": "IND-tyler-warren",
      "profile": "https://www.colts.com/team/players-roster/tyler-warren/"
    },
    {
      "name": "Hunter Wohler",
      "number": "30",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Indianapolis Colts",
      "id": "IND-hunter-wohler",
      "profile": "https://www.colts.com/team/players-roster/hunter-wohler/"
    }
  ],
  "Jacksonville Jaguars": [
    {
      "name": "Ameer Abdullah",
      "number": "20",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-ameer-abdullah",
      "profile": "https://www.jaguars.com/team/players-roster/ameer-abdullah/"
    },
    {
      "name": "LeQuint Allen Jr.",
      "number": "5",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-lequint-allen",
      "profile": "https://www.jaguars.com/team/players-roster/lequint-allen/"
    },
    {
      "name": "Arik Armstead",
      "number": "91",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Jacksonville Jaguars",
      "id": "JAX-arik-armstead",
      "profile": "https://www.jaguars.com/team/players-roster/arik-armstead/"
    },
    {
      "name": "Nate Boerkircher",
      "number": "87",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Jacksonville Jaguars",
      "id": "JAX-nate-boerkircher",
      "profile": "https://www.jaguars.com/team/players-roster/nate-boerkircher/"
    },
    {
      "name": "Montaric Brown",
      "number": "1",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-montaric-brown",
      "profile": "https://www.jaguars.com/team/players-roster/montaric-brown/"
    },
    {
      "name": "Josh Cameron",
      "number": "19",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Jacksonville Jaguars",
      "id": "JAX-josh-cameron",
      "profile": "https://www.jaguars.com/team/players-roster/josh-cameron/"
    },
    {
      "name": "Ezra Cleveland",
      "number": "76",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "Jacksonville Jaguars",
      "id": "JAX-ezra-cleveland",
      "profile": "https://www.jaguars.com/team/players-roster/ezra-cleveland/"
    },
    {
      "name": "Branson Combs",
      "number": "50",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-branson-combs",
      "profile": "https://www.jaguars.com/team/players-roster/branson-combs/"
    },
    {
      "name": "Logan Cooke",
      "number": "9",
      "position": "ST",
      "rosterPosition": "P",
      "team": "Jacksonville Jaguars",
      "id": "JAX-logan-cooke",
      "profile": "https://www.jaguars.com/team/players-roster/logan-cooke/"
    },
    {
      "name": "Matt Dickerson",
      "number": "93",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Jacksonville Jaguars",
      "id": "JAX-matt-dickerson",
      "profile": "https://www.jaguars.com/team/players-roster/matt-dickerson/"
    },
    {
      "name": "Quinn Ewers",
      "number": "10",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-quinn-ewers",
      "profile": "https://www.jaguars.com/team/players-roster/quinn-ewers/"
    },
    {
      "name": "Daniel Faalele",
      "number": "68",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "Jacksonville Jaguars",
      "id": "JAX-daniel-faalele",
      "profile": "https://www.jaguars.com/team/players-roster/daniel-faalele/"
    },
    {
      "name": "Dennis Gardeck",
      "number": "47",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-dennis-gardeck",
      "profile": "https://www.jaguars.com/team/players-roster/dennis-gardeck/"
    },
    {
      "name": "Robert Hainsey",
      "number": "73",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "Jacksonville Jaguars",
      "id": "JAX-robert-hainsey",
      "profile": "https://www.jaguars.com/team/players-roster/robert-hainsey/"
    },
    {
      "name": "Josh Hines-Allen",
      "number": "41",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Jacksonville Jaguars",
      "id": "JAX-josh-allen",
      "profile": "https://www.jaguars.com/team/players-roster/josh-allen/"
    },
    {
      "name": "Travis Hunter",
      "number": "12",
      "position": "WR",
      "rosterPosition": "WR/CB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-travis-hunter",
      "profile": "https://www.jaguars.com/team/players-roster/travis-hunter/",
      "positions": [
        "WR",
        "DB"
      ]
    },
    {
      "name": "Jalen Huskey",
      "number": "22",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Jacksonville Jaguars",
      "id": "JAX-jalen-huskey",
      "profile": "https://www.jaguars.com/team/players-roster/jalen-huskey/"
    },
    {
      "name": "Alijah Huzzie",
      "number": "21",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-alijah-huzzie",
      "profile": "https://www.jaguars.com/team/players-roster/alijah-huzzie/"
    },
    {
      "name": "Antonio Johnson",
      "number": "6",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Jacksonville Jaguars",
      "id": "JAX-antonio-johnson",
      "profile": "https://www.jaguars.com/team/players-roster/antonio-johnson/"
    },
    {
      "name": "Jarrian Jones",
      "number": "4",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-jarrian-jones",
      "profile": "https://www.jaguars.com/team/players-roster/jarrian-jones/"
    },
    {
      "name": "Jaylon Jones",
      "number": "36",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-jaylon-jones",
      "profile": "https://www.jaguars.com/team/players-roster/jaylon-jones/"
    },
    {
      "name": "Tanner Koziol",
      "number": "88",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Jacksonville Jaguars",
      "id": "JAX-tanner-koziol",
      "profile": "https://www.jaguars.com/team/players-roster/tanner-koziol/"
    },
    {
      "name": "Rayuan Lane III",
      "number": "25",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Jacksonville Jaguars",
      "id": "JAX-rayuan-lane-iii",
      "profile": "https://www.jaguars.com/team/players-roster/rayuan-lane-iii/"
    },
    {
      "name": "Trevor Lawrence",
      "number": "16",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-trevor-lawrence",
      "profile": "https://www.jaguars.com/team/players-roster/trevor-lawrence/"
    },
    {
      "name": "Jourdan Lewis",
      "number": "2",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-jourdan-lewis",
      "profile": "https://www.jaguars.com/team/players-roster/jourdan-lewis/"
    },
    {
      "name": "Cam Little",
      "number": "39",
      "position": "ST",
      "rosterPosition": "K",
      "team": "Jacksonville Jaguars",
      "id": "JAX-cam-little",
      "profile": "https://www.jaguars.com/team/players-roster/cam-little/"
    },
    {
      "name": "Walker Little",
      "number": "72",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "Jacksonville Jaguars",
      "id": "JAX-walker-little",
      "profile": "https://www.jaguars.com/team/players-roster/walker-little/"
    },
    {
      "name": "Ross Matiscik",
      "number": "46",
      "position": "ST",
      "rosterPosition": "LS",
      "team": "Jacksonville Jaguars",
      "id": "JAX-ross-matiscik",
      "profile": "https://www.jaguars.com/team/players-roster/ross-matiscik/"
    },
    {
      "name": "Jalen McLeod",
      "number": "35",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-jalen-mcleod",
      "profile": "https://www.jaguars.com/team/players-roster/jalen-mcleod/"
    },
    {
      "name": "Kaevon Merriweather",
      "number": "26",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Jacksonville Jaguars",
      "id": "JAX-kaevon-merriweather",
      "profile": "https://www.jaguars.com/team/players-roster/kaevon-merriweather/"
    },
    {
      "name": "Jakobi Meyers",
      "number": "3",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Jacksonville Jaguars",
      "id": "JAX-jakobi-meyers",
      "profile": "https://www.jaguars.com/team/players-roster/jakobi-meyers/"
    },
    {
      "name": "Ventrell Miller",
      "number": "51",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-ventrell-miller",
      "profile": "https://www.jaguars.com/team/players-roster/ventrell-miller/"
    },
    {
      "name": "Wyatt Milum",
      "number": "64",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "Jacksonville Jaguars",
      "id": "JAX-wyatt-milum",
      "profile": "https://www.jaguars.com/team/players-roster/wyatt-milum/"
    },
    {
      "name": "Jonah Monheim",
      "number": "60",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "Jacksonville Jaguars",
      "id": "JAX-jonah-monheim",
      "profile": "https://www.jaguars.com/team/players-roster/jonah-monheim/"
    },
    {
      "name": "Quintin Morris",
      "number": "80",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Jacksonville Jaguars",
      "id": "JAX-quintin-morris",
      "profile": "https://www.jaguars.com/team/players-roster/quintin-morris/"
    },
    {
      "name": "Foyesade Oluokun",
      "number": "23",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-foye-oluokun",
      "profile": "https://www.jaguars.com/team/players-roster/foye-oluokun/"
    },
    {
      "name": "Ruke Orhorhoro",
      "number": "99",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Jacksonville Jaguars",
      "id": "JAX-ruke-orhorhoro",
      "profile": "https://www.jaguars.com/team/players-roster/ruke-orhorhoro/"
    },
    {
      "name": "Emmanuel Pregnon",
      "number": "75",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "Jacksonville Jaguars",
      "id": "JAX-emmanuel-pregnon",
      "profile": "https://www.jaguars.com/team/players-roster/emmanuel-pregnon/"
    },
    {
      "name": "Albert Regis",
      "number": "98",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Jacksonville Jaguars",
      "id": "JAX-albert-regis",
      "profile": "https://www.jaguars.com/team/players-roster/albert-regis/"
    },
    {
      "name": "Chris Rodriguez Jr.",
      "number": "24",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-chris-rodriguez-jr",
      "profile": "https://www.jaguars.com/team/players-roster/chris-rodriguez-jr/"
    },
    {
      "name": "Brenton Strange",
      "number": "85",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Jacksonville Jaguars",
      "id": "JAX-brenton-strange",
      "profile": "https://www.jaguars.com/team/players-roster/brenton-strange/"
    },
    {
      "name": "Danny Striggow",
      "number": "92",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Jacksonville Jaguars",
      "id": "JAX-danny-striggow",
      "profile": "https://www.jaguars.com/team/players-roster/danny-striggow/"
    },
    {
      "name": "Jahlani Tavai",
      "number": "31",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-jahlani-tavai",
      "profile": "https://www.jaguars.com/team/players-roster/jahlani-tavai/"
    },
    {
      "name": "Brian Thomas Jr.",
      "number": "7",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Jacksonville Jaguars",
      "id": "JAX-brian-thomas-jr",
      "profile": "https://www.jaguars.com/team/players-roster/brian-thomas-jr/"
    },
    {
      "name": "Bryan Thomas Jr.",
      "number": "57",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Jacksonville Jaguars",
      "id": "JAX-bryan-thomas-jr",
      "profile": "https://www.jaguars.com/team/players-roster/bryan-thomas-jr/"
    },
    {
      "name": "Bhayshul Tuten",
      "number": "33",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Jacksonville Jaguars",
      "id": "JAX-bhayshul-tuten",
      "profile": "https://www.jaguars.com/team/players-roster/bhayshul-tuten/"
    },
    {
      "name": "Cole Van Lanen",
      "number": "70",
      "position": "OL",
      "rosterPosition": "OL",
      "team": "Jacksonville Jaguars",
      "id": "JAX-cole-van-lanen",
      "profile": "https://www.jaguars.com/team/players-roster/cole-van-lanen/"
    },
    {
      "name": "Travon Walker",
      "number": "44",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Jacksonville Jaguars",
      "id": "JAX-travon-walker",
      "profile": "https://www.jaguars.com/team/players-roster/travon-walker/"
    },
    {
      "name": "Parker Washington",
      "number": "11",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Jacksonville Jaguars",
      "id": "JAX-parker-washington",
      "profile": "https://www.jaguars.com/team/players-roster/parker-washington/"
    },
    {
      "name": "CJ Williams",
      "number": "18",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Jacksonville Jaguars",
      "id": "JAX-cj-williams",
      "profile": "https://www.jaguars.com/team/players-roster/cj-williams/"
    },
    {
      "name": "Wesley Williams",
      "number": "90",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Jacksonville Jaguars",
      "id": "JAX-wesley-williams",
      "profile": "https://www.jaguars.com/team/players-roster/wesley-williams/"
    }
  ],
  "Tennessee Titans": [
    {
      "name": "Tony Adams",
      "number": "29",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Tennessee Titans",
      "id": "TEN-tony-adams-2",
      "profile": "https://www.tennesseetitans.com/team/players-roster/tony-adams-2/"
    },
    {
      "name": "Elic Ayomanor",
      "number": "5",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Tennessee Titans",
      "id": "TEN-elic-ayomanor",
      "profile": "https://www.tennesseetitans.com/team/players-roster/elic-ayomanor/"
    },
    {
      "name": "Cody Barton",
      "number": "50",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Tennessee Titans",
      "id": "TEN-cody-barton",
      "profile": "https://www.tennesseetitans.com/team/players-roster/cody-barton/"
    },
    {
      "name": "Daniel Bellinger",
      "number": "82",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Tennessee Titans",
      "id": "TEN-daniel-bellinger",
      "profile": "https://www.tennesseetitans.com/team/players-roster/daniel-bellinger/"
    },
    {
      "name": "Terrell Burgess",
      "number": "38",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Tennessee Titans",
      "id": "TEN-terrell-burgess",
      "profile": "https://www.tennesseetitans.com/team/players-roster/terrell-burgess/"
    },
    {
      "name": "Michael Carter",
      "number": "35",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Tennessee Titans",
      "id": "TEN-michael-carter",
      "profile": "https://www.tennesseetitans.com/team/players-roster/michael-carter/"
    },
    {
      "name": "Julius Chestnut",
      "number": "36",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Tennessee Titans",
      "id": "TEN-julius-chestnut",
      "profile": "https://www.tennesseetitans.com/team/players-roster/julius-chestnut/"
    },
    {
      "name": "Pat Coogan",
      "number": "79",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Tennessee Titans",
      "id": "TEN-pat-coogan",
      "profile": "https://www.tennesseetitans.com/team/players-roster/pat-coogan/"
    },
    {
      "name": "Morgan Cox",
      "number": "46",
      "position": "ST",
      "rosterPosition": "LS",
      "team": "Tennessee Titans",
      "id": "TEN-morgan-cox",
      "profile": "https://www.tennesseetitans.com/team/players-roster/morgan-cox/"
    },
    {
      "name": "Brandon Crenshaw-Dickson",
      "number": "78",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Tennessee Titans",
      "id": "TEN-brandon-crenshaw-dickson",
      "profile": "https://www.tennesseetitans.com/team/players-roster/brandon-crenshaw-dickson/"
    },
    {
      "name": "Garrett Dellinger",
      "number": "71",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Tennessee Titans",
      "id": "TEN-garrett-dellinger",
      "profile": "https://www.tennesseetitans.com/team/players-roster/garrett-dellinger/"
    },
    {
      "name": "Chimere Dike",
      "number": "17",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Tennessee Titans",
      "id": "TEN-chimere-dike",
      "profile": "https://www.tennesseetitans.com/team/players-roster/chimere-dike/"
    },
    {
      "name": "Keldric Faulk",
      "number": "15",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Tennessee Titans",
      "id": "TEN-keldric-faulk",
      "profile": "https://www.tennesseetitans.com/team/players-roster/keldric-faulk/"
    },
    {
      "name": "Cor'Dale Flott",
      "number": "18",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Tennessee Titans",
      "id": "TEN-cor-dale-flott",
      "profile": "https://www.tennesseetitans.com/team/players-roster/cor-dale-flott/"
    },
    {
      "name": "John Franklin-Myers",
      "number": "91",
      "position": "DL",
      "rosterPosition": "DL",
      "team": "Tennessee Titans",
      "id": "TEN-john-franklin-myers",
      "profile": "https://www.tennesseetitans.com/team/players-roster/john-franklin-myers/"
    },
    {
      "name": "Kylen Granson",
      "number": "86",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Tennessee Titans",
      "id": "TEN-kylen-granson",
      "profile": "https://www.tennesseetitans.com/team/players-roster/kylen-granson/"
    },
    {
      "name": "Cedric Gray",
      "number": "33",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Tennessee Titans",
      "id": "TEN-cedric-gray",
      "profile": "https://www.tennesseetitans.com/team/players-roster/cedric-gray/"
    },
    {
      "name": "Marcus Harris",
      "number": "26",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Tennessee Titans",
      "id": "TEN-marcus-harris",
      "profile": "https://www.tennesseetitans.com/team/players-roster/marcus-harris/"
    },
    {
      "name": "Gunnar Helm",
      "number": "84",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Tennessee Titans",
      "id": "TEN-gunnar-helm",
      "profile": "https://www.tennesseetitans.com/team/players-roster/gunnar-helm/"
    },
    {
      "name": "Anthony Hill Jr.",
      "number": "53",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Tennessee Titans",
      "id": "TEN-anthony-hill-jr",
      "profile": "https://www.tennesseetitans.com/team/players-roster/anthony-hill-jr/"
    },
    {
      "name": "Amani Hooker",
      "number": "37",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Tennessee Titans",
      "id": "TEN-amani-hooker",
      "profile": "https://www.tennesseetitans.com/team/players-roster/amani-hooker/"
    },
    {
      "name": "Timmy Horne",
      "number": "94",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Tennessee Titans",
      "id": "TEN-timmy-horne",
      "profile": "https://www.tennesseetitans.com/team/players-roster/timmy-horne/"
    },
    {
      "name": "James Hudson III",
      "number": "59",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Tennessee Titans",
      "id": "TEN-james-hudson-iii",
      "profile": "https://www.tennesseetitans.com/team/players-roster/james-hudson-iii/"
    },
    {
      "name": "Jermaine Johnson II",
      "number": "11",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Tennessee Titans",
      "id": "TEN-jermaine-johnson-ii",
      "profile": "https://www.tennesseetitans.com/team/players-roster/jermaine-johnson-ii/"
    },
    {
      "name": "Jaylon Jones",
      "number": "42",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Tennessee Titans",
      "id": "TEN-jaylon-jones",
      "profile": "https://www.tennesseetitans.com/team/players-roster/jaylon-jones/"
    },
    {
      "name": "Truman Jones",
      "number": "56",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Tennessee Titans",
      "id": "TEN-truman-jones",
      "profile": "https://www.tennesseetitans.com/team/players-roster/truman-jones/"
    },
    {
      "name": "JC Latham",
      "number": "55",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Tennessee Titans",
      "id": "TEN-jc-latham",
      "profile": "https://www.tennesseetitans.com/team/players-roster/jc-latham/"
    },
    {
      "name": "Jonah Laulu",
      "number": "--",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Tennessee Titans",
      "id": "TEN-jonah-laulu",
      "profile": "https://www.tennesseetitans.com/team/players-roster/jonah-laulu/"
    },
    {
      "name": "Atonio Mafi",
      "number": "70",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Tennessee Titans",
      "id": "TEN-atonio-mafi",
      "profile": "https://www.tennesseetitans.com/team/players-roster/atonio-mafi/"
    },
    {
      "name": "Jackie Marshall",
      "number": "96",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Tennessee Titans",
      "id": "TEN-jackie-marshall",
      "profile": "https://www.tennesseetitans.com/team/players-roster/jackie-marshall/"
    },
    {
      "name": "David Martin-Robinson",
      "number": "88",
      "position": "TE",
      "rosterPosition": "TE",
      "team": "Tennessee Titans",
      "id": "TEN-david-martin-robinson",
      "profile": "https://www.tennesseetitans.com/team/players-roster/david-martin-robinson/"
    },
    {
      "name": "Jacob Martin",
      "number": "57",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Tennessee Titans",
      "id": "TEN-jacob-martin",
      "profile": "https://www.tennesseetitans.com/team/players-roster/jacob-martin/"
    },
    {
      "name": "Dan Moore Jr.",
      "number": "75",
      "position": "OL",
      "rosterPosition": "T",
      "team": "Tennessee Titans",
      "id": "TEN-dan-moore-jr",
      "profile": "https://www.tennesseetitans.com/team/players-roster/dan-moore-jr/"
    },
    {
      "name": "Oluwafemi Oladejo",
      "number": "7",
      "position": "DL",
      "rosterPosition": "DE",
      "team": "Tennessee Titans",
      "id": "TEN-oluwafemi-oladejo",
      "profile": "https://www.tennesseetitans.com/team/players-roster/oluwafemi-oladejo/"
    },
    {
      "name": "Tony Pollard",
      "number": "20",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Tennessee Titans",
      "id": "TEN-tony-pollard",
      "profile": "https://www.tennesseetitans.com/team/players-roster/tony-pollard/"
    },
    {
      "name": "Calvin Ridley",
      "number": "0",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Tennessee Titans",
      "id": "TEN-calvin-ridley",
      "profile": "https://www.tennesseetitans.com/team/players-roster/calvin-ridley/"
    },
    {
      "name": "Micah Robinson",
      "number": "21",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Tennessee Titans",
      "id": "TEN-micah-robinson",
      "profile": "https://www.tennesseetitans.com/team/players-roster/micah-robinson/"
    },
    {
      "name": "Wan'Dale Robinson",
      "number": "4",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Tennessee Titans",
      "id": "TEN-wan-dale-robinson",
      "profile": "https://www.tennesseetitans.com/team/players-roster/wan-dale-robinson/"
    },
    {
      "name": "Austin Schlottmann",
      "number": "51",
      "position": "OL",
      "rosterPosition": "C",
      "team": "Tennessee Titans",
      "id": "TEN-austin-schlottmann",
      "profile": "https://www.tennesseetitans.com/team/players-roster/austin-schlottmann/"
    },
    {
      "name": "Nick Singleton",
      "number": "32",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Tennessee Titans",
      "id": "TEN-nick-singleton",
      "profile": "https://www.tennesseetitans.com/team/players-roster/nick-singleton/"
    },
    {
      "name": "Peter Skoronski",
      "number": "77",
      "position": "OL",
      "rosterPosition": "G",
      "team": "Tennessee Titans",
      "id": "TEN-peter-skoronski",
      "profile": "https://www.tennesseetitans.com/team/players-roster/peter-skoronski/"
    },
    {
      "name": "Joey Slye",
      "number": "6",
      "position": "ST",
      "rosterPosition": "K",
      "team": "Tennessee Titans",
      "id": "TEN-joey-slye",
      "profile": "https://www.tennesseetitans.com/team/players-roster/joey-slye/"
    },
    {
      "name": "Tyjae Spears",
      "number": "2",
      "position": "RB",
      "rosterPosition": "RB",
      "team": "Tennessee Titans",
      "id": "TEN-tyjae-spears",
      "profile": "https://www.tennesseetitans.com/team/players-roster/tyjae-spears/"
    },
    {
      "name": "Nazir Stackhouse",
      "number": "93",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Tennessee Titans",
      "id": "TEN-nazir-stackhouse",
      "profile": "https://www.tennesseetitans.com/team/players-roster/nazir-stackhouse/"
    },
    {
      "name": "Carnell Tate",
      "number": "14",
      "position": "WR",
      "rosterPosition": "WR",
      "team": "Tennessee Titans",
      "id": "TEN-carnell-tate",
      "profile": "https://www.tennesseetitans.com/team/players-roster/carnell-tate/"
    },
    {
      "name": "Alontae Taylor",
      "number": "24",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Tennessee Titans",
      "id": "TEN-alontae-taylor",
      "profile": "https://www.tennesseetitans.com/team/players-roster/alontae-taylor/"
    },
    {
      "name": "Solomon Thomas",
      "number": "90",
      "position": "DL",
      "rosterPosition": "DT",
      "team": "Tennessee Titans",
      "id": "TEN-solomon-thomas",
      "profile": "https://www.tennesseetitans.com/team/players-roster/solomon-thomas/"
    },
    {
      "name": "Tommy Townsend",
      "number": "3",
      "position": "ST",
      "rosterPosition": "P",
      "team": "Tennessee Titans",
      "id": "TEN-tommy-townsend",
      "profile": "https://www.tennesseetitans.com/team/players-roster/tommy-townsend/"
    },
    {
      "name": "Mitchell Trubisky",
      "number": "10",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Tennessee Titans",
      "id": "TEN-mitchell-trubisky",
      "profile": "https://www.tennesseetitans.com/team/players-roster/mitchell-trubisky/"
    },
    {
      "name": "Cam Ward",
      "number": "1",
      "position": "QB",
      "rosterPosition": "QB",
      "team": "Tennessee Titans",
      "id": "TEN-cam-ward",
      "profile": "https://www.tennesseetitans.com/team/players-roster/cam-ward/"
    },
    {
      "name": "James Williams Sr.",
      "number": "52",
      "position": "LB",
      "rosterPosition": "LB",
      "team": "Tennessee Titans",
      "id": "TEN-james-williams-sr",
      "profile": "https://www.tennesseetitans.com/team/players-roster/james-williams-sr/"
    },
    {
      "name": "Joshua Williams",
      "number": "25",
      "position": "DB",
      "rosterPosition": "CB",
      "team": "Tennessee Titans",
      "id": "TEN-joshua-williams",
      "profile": "https://www.tennesseetitans.com/team/players-roster/joshua-williams/"
    },
    {
      "name": "Kevin Winston Jr.",
      "number": "23",
      "position": "DB",
      "rosterPosition": "S",
      "team": "Tennessee Titans",
      "id": "TEN-kevin-winston-jr",
      "profile": "https://www.tennesseetitans.com/team/players-roster/kevin-winston-jr/"
    }
  ]
};
const HEADSHOTS = {
  "BAL-0": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/kdoi2q0d29sjykebdsoy.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-1": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/gxuuw0uydbylphkpbuue.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-2": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/dzatujq0glufx21m9bqv.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-3": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/rb25oqiocrf25npvzr3u.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-4": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/etssohnguv8yzxbwy9le.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-5": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/vohdbhjuokltpdr9wd4s.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-6": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/digaoc2x0okx7qb4ndmq.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-7": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/yzpltp7sqngnnyxishg7.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-8": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/legstesgxcwxevw1b4h3.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-9": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/yzxfraylx8qoiykh2idp.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-10": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/ajoxudso5vbedq2t0n8c.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-11": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/f5xiid1kix7pcf95imax.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-12": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/ldeyasslbjssgx7zrwwq.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-13": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/i8yi3utrhjosqjuztyxm.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-14": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/purax70dl4nvdc0nwjlj.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-15": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/uv7ddncikj9ersdhqhly.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-16": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/ln1uwg7hmzahsouv9nnc.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-17": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/vxrptanprdhtwbp8nfog.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-18": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/cgk222hbnu7kuwxn5xcr.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-19": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/z8o6xnmxwmjykkpk2isg.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-20": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/zsdvjoayltmalwns94sv.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-21": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/oy2aowwqjuns9vt33efv.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-22": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/cic8kmqlhwywlnlv6h5w.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-23": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/iorwqoo47rpmm0aqesb8.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-24": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/yiaoqckysmn488fmmxtj.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-25": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/v0h1jrpp6fk4sy6dlaju.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-26": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/vcapqfk84p8nfzbtfpkk.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-27": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/nvisiwyswct3ljhmmuoo.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-28": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/bjna1h2e6caraoai5air.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-29": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/xizrjclmfgfoom2zxzlm.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-30": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/ue84fsuv4cqiinykuudg.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-31": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/vdstbwdklah5tvx0utpi.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-32": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/mhovrympkrmkss6xbr5m.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-33": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/mz1rxs9tmk1hik22kni9.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-34": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/hslptrzdenj3e4cuzcxn.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-35": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/f3nhtdhqmzmaugybiaqr.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-36": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/doqdyrkbqgoacfosjms2.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-37": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/hwivmti23vnfjmbamt65.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-38": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/zmimaoz7rwv6ipkhnhtu.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-39": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/ravens/bfs6e2pb7dpoegvakg7v.jpg",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-40": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/zrbzel4eybrzs7wymn4t.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-41": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/rxpw7bz3txehte27ofht.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-42": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/ni1b8yladtzi26irshwc.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-43": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/c2cdeao4irquvdkfqepf.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-44": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/dfinsq1amvww0q6rqkn0.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-45": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/bdbne4kxclzlimjmbcac.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-46": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/zge91ad36ofozsxtumld.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-47": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/qbzladm5mdwdj5gh1c4c.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-48": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/mrq1mcupwwnp3ywj1nhy.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-49": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/i276auofic4uskfajgrl.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-50": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/jqrbdle1tkrthe6bpzao.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-51": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/z9zkig7ddulg0abgdulo.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "BAL-52": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/ravens/lqj9kbg97v7mo5zegwil.png",
    "source": "https://www.baltimoreravens.com/team/players-roster/"
  },
  "CIN-0": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/x1xgdjy1buktldzc7zit.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-1": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/qnnpw1oetn64r3qvva0x.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-2": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/coedxk26unaefd6ux4ve.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-3": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/fzuzgwwqs2ihcp5nvuzg.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-4": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/fpn3rdpz6v4uspyp4gcm.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-5": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/mwluxvod3grigatj6ncj.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-6": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/r7njqvb03kvove5lznyx.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-7": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/apdzgxz7udwn8kxckc1r.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-8": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/zzgorpvejwi53sm2jd5p.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-9": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/b9xnwfp3bthagz5efzv3.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-10": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/kckfxvkyynsigktdlgyp.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-11": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/asscmygopo5oa1ts60yr.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-12": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/udadoiqqmbnvzlfc7icd.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-13": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/sm4rhrdy2hbtvn5dfesf.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-14": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/gdd3ymc0fmejps9tpe0a.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-15": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/olnybqgiyjktychbzlac.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-16": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/mjt7fwzib2cakz0bmspv.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-17": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/sucda5tlq2voyyz63stn.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-18": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/gx095yubca7mgyg2u269.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-19": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/k8a3wlqsc3dcpn28dkxw.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-20": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/ywpqbezfyashvdtmucuk.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-21": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/j9f9qs4z6q0gna2l6u4z.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-22": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/wbmhqosvyao9z21fqmuy.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-23": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/ohkikl4tvik5rml5mrvk.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-24": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/owy3sho23svhropqnrce.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-25": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/ccrahfd5mktn2uk7dhui.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-26": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/pxkvxuze9qltdf6i0gmt.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-27": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/ifj9scwez4n98s1wnqy8.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-28": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/uyy3nbd38nwpeocahp8n.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-29": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/c28lgmjtenksg1t6qbza.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-30": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/hqid0oekqbdlmsxcpqjo.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-31": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/atmf87cbzxeyiutl4lzn.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-32": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/rnnypt1obcm9rh8ljtbq.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-33": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/ifdsj3hjnvywxpsxrzfm.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-34": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/sq2rxhl3giizjetrpdgp.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-35": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/kca1r1eqhnaht3rndztj.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-36": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/zig0hti7icz2ljy10rlf.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-37": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/orauhbuts0o72hjluwq0.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-38": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/qasrbjcfqbmqdjwmovt7.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-39": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/sboggovhkdswliq5zo5h.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-40": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/f9zcysetshudtaszx2uq.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-41": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/urmrzfzwkgvpjcng1jj4.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-42": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/smm3dindgypddasjon9j.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-43": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/ndl42offrfks7xrgwudc.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-44": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/jzragl0w63v5mvyxp1a2.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-45": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/ggy7jqkyaavssj7qzlhq.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-46": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/ajbelm7e3wteo5pmo1cy.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-47": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/sxjwh6lnzof2x9za1cgv.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-48": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/duvne8h9xlnlnturxn0f.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-49": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/k0fygecn6skg2ya0qxu8.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-50": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/hpzwayyy3i2t3qio7lgf.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "CIN-51": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bengals/ggytxmpsjky3nn1qmskv.jpg",
    "source": "https://www.bengals.com/team/players-roster/"
  },
  "PIT-0": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/mevccjthpsdltrmu3211.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-1": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/romtzmjzqr03why207kh.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-2": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/sbh3djzacpefbqbnhsjt.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-3": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/zpmw2p6eqzp2aporvhvp.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-4": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/kkrchzm8jorslnw2lc7z.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-5": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/wuz8pnsxx1k8d9ekgqa6.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-6": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/itzlahdbdl5tptpeiaip.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-7": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/qmfpmssbzlgpogxcybir.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-8": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/dn0f4m7nfrtswbyllrq7.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-9": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/vb8dsdbscuuqn1gvaej2.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-10": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/bkuqyhenf6nwyrzmbxvc.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-11": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/jqldnepqpkjtv5l1bchh.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-12": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/m5svufexqtunz3kehhgq.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-13": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/ultwmuw2zsp8a5b3gghr.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-14": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/mfngr9uxx1dwq82maaso.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-15": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/wiq1c6jhupzlhjt5zofi.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-16": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/ycqggssbxb88a5ipszol.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-17": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/hvjnxlwzpi1w8a4f1igq.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-18": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/vkchahqzidt9mi4brgks.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-19": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/ejx1zjbtbzowez7j7vmi.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-20": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/spk5cbkhkykb6kbuvsu0.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-21": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/emghox4cw83idyin92pg.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-22": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/guqq9r31kquafjk5emwe.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-23": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/zcppajxmhlyxvv3feino.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-24": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/ztguguyemkapom6ezgm9.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-25": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/le4mluuddxl02qbfalnv.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-26": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/qbjbvrax4cprme7nhozm.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-27": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/pcqtnlikwan4oyc6sbwd.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-28": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/yzxnn5ybhmxr2g3rrv6i.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-29": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/zwjiaxjgh68macqtpjvt.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-30": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/pzdvafuseppujsvz8xut.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-31": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/umio0ki2lujbfymsnsoa.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-32": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/xwvm1rzbpbeqcvmjfrx1.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-33": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/mzmqvxkqozy0pbohcc8z.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-34": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/abfh3iklm2pgudxtzuhf.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-35": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/gedpxux4tdrzmmois46g.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-36": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/anscy252dblwizczvyyk.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-37": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/z0ec7jqwdrk2pvprdjzy.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-38": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/jdumyasnngnpp6uwiyhw.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-39": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/zehgqjaclp66wbsrrndl.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-40": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/vdx3bqvg3wganhajiwle.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-41": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/is1igjwwc8zhm8tyqxwm.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-42": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/zfeis4sbrhvzt5bbwkmw.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-43": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/w3omgqw4xnljrm0wyuir.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-44": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/leg7uzfwherozjxlzdr1.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-45": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/njwtdqc30mdtt9i8o2fd.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-46": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/rj3cvrrpzad3qnuje4h4.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-47": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/tneajphrsj18ydxr0qv9.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-48": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/oocj7s66srbabpvjenpa.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-49": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/tbgio66sfc7aqj4u4ir1.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-50": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/ouvdx3zce3sliwxgh6r8.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-51": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/csk5b5wktoywhfkenc0p.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-52": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/sldjrz76uqzrefmatugv.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "PIT-53": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/steelers/huanbjeg7nhmakb4lavk.jpg",
    "source": "https://www.steelers.com/team/players-roster/"
  },
  "CLE-0": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/vxqmn9ng4yobc4wi8erx.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-1": {
    "url": "https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/lyh9saxk0oevtehwa6g4",
    "source": "https://www.nfl.com/players/derek-barnett/"
  },
  "CLE-2": {
    "url": "https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/nfmzkewxxje6op3gimbr",
    "source": "https://www.nfl.com/players/mekhi-blackmon/"
  },
  "CLE-3": {
    "url": "https://static.clubs.nfl.com/image/private/t_thumb_squared_3x/f_auto/browns/ppapwc93cusazo1hijxc.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-4": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/p72vnwgvse9ludevpsat.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-5": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/smz27rdprihmreifekln.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-6": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/v9spi51g4xeurql7l709.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-7": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/lolknrcehmrqfrq6neud.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-8": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/nubcaa0vdwur2t5i7h7j.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-9": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/pwqyykf9niffajclptjl.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-10": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/dhpkiue9r6s56gppzdc8.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-11": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/j3ksvhvmioh0cq2utpbj.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-12": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/o90x1yrzl7lkdyrlo38e.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-13": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/ulgy7e5rfwfp7fztknaz.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-14": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/ts3dwtofpbxzoz2ao4t0.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-15": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/nysfh8eic0r0miuhugyz.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-16": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/amy6hnjslmrvxn9ajgpl.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-17": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/va5h5lkknuweneaszifr.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-18": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/wc5dx3gmxwhhpqizhmwf.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-19": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/yfss2s0n1vqtfxjhynqf.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-20": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/cwkdfopxqlsuiigcomzi.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-21": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/vf6p3khasac584vimrot.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-22": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/mwmygeaa8tljjey4wmxw.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-23": {
    "url": "https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/sz4rojzmshagqavymatc",
    "source": "https://www.nfl.com/players/noah-igbinoghene/"
  },
  "CLE-24": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/vjdboohewgcnrbdqgrj5.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-25": {
    "url": "https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/pbdmozb7amdd9ndvhhuj",
    "source": "https://www.nfl.com/players/elgton-jenkins/"
  },
  "CLE-26": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/efmkyyvl0bad48ldsrkm.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-27": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/w0y44lhhnetub3jpyalz.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-28": {
    "url": "https://static.clubs.nfl.com/image/private/t_thumb_squared_3x/f_auto/browns/bho8hf7l0ucbvxlzasyy.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-29": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/hn6ejvs1ispmlkhujker.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-30": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/r5hlesfhcqwm7ehomzhi.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-31": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/kxwkfhofrjmetceqbwh7.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-32": {
    "url": "https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/fqxfibzrwgg3xutf71fx",
    "source": "https://www.nfl.com/players/jaleel-mclaughlin/"
  },
  "CLE-33": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/e0cusnmxedn2o7ywfyiq.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-34": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/vrcmpd3w14niwxgbnwrj.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-35": {
    "url": "https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/a8l2hp04k2ek5hx3j50b",
    "source": "https://www.nfl.com/players/toriano-pride-jr/"
  },
  "CLE-36": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/zwbpz2z6zfv0a36ejvog.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-37": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/rzzeyywli7ezgbuggte0.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-38": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/citlogzvt5qqtlttiuyf.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-39": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/hi95bropbw4kg8ntp2le.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-40": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/yvcfvzbwozhwue8icncx.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-41": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/cq5kykgjramrtxja0wz4.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-42": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/rqzt7vtuym6b3mccygig.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-43": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/z7xyugdldzb1kri48nab.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-44": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/ysyhphqwwigrjzgmut9g.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-45": {
    "url": "https://static.clubs.nfl.com/image/private/t_thumb_squared_3x/f_auto/v1685115186/browns/mjqkxbsuygpfhqpjrbwu.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-46": {
    "url": "https://static.clubs.nfl.com/image/private/t_thumb_squared_3x/f_auto/browns/csd7twiqcbdjnvdh9rtv.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-47": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/qpzvmx4aa1af0zhkm3vw.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-48": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/zx47ct3ehructrvn23la.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-49": {
    "url": "https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/dffnhnfk8qloazleesuj",
    "source": "https://www.nfl.com/players/sam-williams-4/"
  },
  "CLE-50": {
    "url": "https://static.clubs.nfl.com/image/private/t_thumb_squared_3x/f_auto/v1685730731/browns/eheqknaztbl5riom7fnq.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "CLE-51": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/browns/zmz8pohodv53vttjiiaj.jpg",
    "source": "https://www.clevelandbrowns.com/team/players-roster/"
  },
  "BUF-dee-alford": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/ppe2ei01mrs5bunqlgch.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-josh-allen": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/rupi1nytycprinqanj2l.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-kyle-allen": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/fuydfh1eb2kbnuvsobkk.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-alec-anderson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/dvxb6fnfhiikw5gzlzto.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-joe-andreessen": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/razpk2xb5gy5dzapxg7l.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-tyler-bass": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/i6wtx6w7xf2ebct4kte6.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-skyler-bell": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/xrzd9vnelfzfpysehjw6.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-christian-benford": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/kzgukpamb7hohttexsqu.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-terrel-bernard": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/ho2gx0q3p7reev0r1o58.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-cole-bishop": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/r3cuyrujrbwo04gbdaee.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-jude-bowry": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/wthevccspylnlq3ztp1h.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-spencer-brown": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/szl5kdwjulieam10bas6.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-dewayne-carter": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/hxamsnfpkm6gusvblua8.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-bradley-chubb": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/z1hm5tpy6fdf9n4tqfg4.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-keon-coleman": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/ncrunsr6qeefxycqny3i.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-james-cook": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/ictayvdxj4h4w2itygws.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-austin-corbett": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/rzgeqo3h4blip1srwl8i.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-te-cory-couch": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/eos0yxk6oracveuv4gwp.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-lloyd-cushenberry": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/s0bw0di3xzjymlxomnry.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-mike-danna": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/pnkrs3lqjq1ddmwg3py5.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-ray-davis": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/vtqk14fapcwp8n2burl5.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-dion-dawkins": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/olazmwfwtdiywdrlvkki.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-tommy-doman-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/udqycwqiiwua7ap7wngh.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-greg-dortch": {
    "url": "https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/tuevxl0xuipjd8qetkcj",
    "source": "https://www.nfl.com/players/greg-dortch/"
  },
  "BUF-kaleb-elarms-orr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/mmdp0af6alzc9ctccf1n.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-reid-ferguson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/jxhjehc85h6j0lvu09iz.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-sam-franklin": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/ngduxyqsiasj29rdctkt.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-greg-gaines": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/woymrumnmecvbdosfuyx.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-tylan-grable": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/kwbxbxw8zqjwdcqsh0rf.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-maxwell-hairston": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/ao1basegiyli3mi99wok.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-damar-hamlin": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/jpub5dmc4daapqcglvrf.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-jackson-hawes": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/pk9mgzmnasa0s9flnedg.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-michael-hoecht": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/fmiiaf3qnf2ra41nmwe6.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-davison-igbinosun": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/p5gvo5e5gdlohjddhyas.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-landon-jackson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/dgzu3f7f7seimahzxgbq.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-ty-johnson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/cdrwdxvlwke1wkukjkhh.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-jalon-kilgore": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/fg4b4huyyswci0kkayfx.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-dalton-kincaid": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/dkwy3nztecri2ov3a4hs.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-dawson-knox": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/n4scokqnzkijp9ffa5er.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-keleki-latu": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/ydtdjiv1wd7vxwbpaq1c.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-connor-mcgovern": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/d5nd6rwmd72cilmecpkw.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-dj-moore": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/rllw5mnposgeyxa4nj6i.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-ed-oliver": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/szgfyibx0rm2plazlakn.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-joshua-palmer": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/gwt6kmcdvsiugwvdz3jn.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-tj-parker": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/n9f9gxibicmdwnchinwe.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-ar-maj-reed-adams": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/kqxbcwd061t2jd8q9adq.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-greg-rousseau": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/mkcnzoiwxn8d84a6nyny.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-t-j-sanders-x4456": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/n8sd4z503gnibihlb8ns.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-khalil-shakir": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/efatbmjxfrkbjokily94.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-javon-solomon": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/x3vd2r7g8fqpvfmzjjre.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-o-cyrus-torrence": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/dz5zkog9acxrjiqvj1vu.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-deone-walker": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/ogsqsskujbhhqq9qzwzb.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "BUF-dorian-williams": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/bills/hvlldqhrsdxqv7sucjlh.jpg",
    "source": "https://www.buffalobills.com/team/players-roster/"
  },
  "MIA-tucker-addington": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/uuc92j3osjsmlnpu7yr0.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-kaytron-allen": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/bfsgwio1v7bza27dnbqi.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-zayne-anderson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/um9enrbzlqic9x32qc5u.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-chris-bell": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/pqyt4gddrw3yfjzfcq6l.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-zeek-biggers": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/fpjfskpwekjxgnbbqwp5.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-juju-brents": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/qjaaftjlpzoi0sc4dlus.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-aaron-brewer": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/zbg55i7eif9msa79mmbj.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-jordyn-brooks": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/m0etwb2rxoadsomtp9xp.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-kevin-coleman-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/z3dtcjourbxudsy4gu5i.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-marcellas-dial-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/vwjnurfv2jypgou5b1vd.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-caleb-douglas": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/cfimxdceqatilfgsxiy4.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-greg-dulcich": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/ue8pmtvpuajne5ackoln.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-willie-gay-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/x1cvql96gt3j9fefvqny.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-chukwuebuka-godrick": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/mrikchieyrlnzfxbk4jc.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-ollie-gordon-ii": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/atlmdern4zoogtuko7cx.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-kenneth-grant": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/bngkt60lsyreenyjah17.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-christian-haynes": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/uvwamwqzu4a677bgyj9a.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-dj-herman": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/ghmpill7vmxhtnuouehi.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-malik-herring": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/ergvmziaq8ybujfeu6sq.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-shaka-heyward": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/vda5zw8szfvfweof7lxf.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-austin-jackson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/fcb594uzt1nmkrtzuq06.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-chris-johnson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/devntnce9yx2cs7racf5.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-justin-joly": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/sb9e8rnvodahahqk4pkj.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-will-kacmarek": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/ovrcda6ffennoxtyp1qw.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-jarrett-kingston": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/ft8ro7leyc224t9vv62a.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-jamree-kromah": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/kcag9qkxf0mvgorxdql2.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-kyle-louis": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/a0bbo7asq7pw7k8rlz4u.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-jason-marshall-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/u1moavoy0vgwkyatzhdx.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-kyle-mccord": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/mo44lrollpb3uqostb6v.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-rodney-mcgraw": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/dkod12spaqvyf25zxkje.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-andrew-meyer": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/lcyajzpi5oz1i018gw0e.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-patrick-paul": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/i3lhvioeck3cmmc8dhjq.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-jordan-phillips-2": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/xngkksyt3vbmximcwk7o.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-bradley-pinion": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/gh2nbl9opu2qdiiu1kbn.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-kadyn-proctor": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/ab2fdr9xmk0g1quxdxkg.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-chop-robinson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/wh8x9dchsjqshtcma2b1.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-jacob-rodriguez": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/qdq5ehct7wpt4rm0gvjr.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-jonah-savaiinaea": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/wpryuuujwbtsrvwizjh6.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-zach-sieler": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/xyg6e7brlwcumh8wcc8b.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-jaylin-simpson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/dxpdkhkknz36fggnbume.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-michael-taaffe": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/usfisfhmtr8r7exqgkzq.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-reese-taylor": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/psluypcsfdcb5upvfekp.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-jalen-tolbert": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/dy8upkistgf29ktqabun.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-dante-trader-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/btymmnknnwcnknrkwuxq.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-seydou-traore": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/mjaudwqhwdmoxq6pys1v.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-joshua-uche": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/ljg17d6ic7najzpkfhyo.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-caedan-wallace": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/mbayobo0cw4dibcrlgbn.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-malik-washington": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/rxff04jvpezdfm2n6akf.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-jared-wayne": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/nemoj33mcenr3fprt8kq.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-malik-willis": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/jmosp3be69m81o2ycqmw.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-julius-wood": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/g3enmisblfevxok2uyhv.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-jackson-woodard": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/p0casl0nxhaagsdaxp9j.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "MIA-jaylen-wright": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/dolphins/trlabgginngllwijmiqx.jpg",
    "source": "https://www.miamidolphins.com/team/players-roster/"
  },
  "NE-tanner-arkin": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/ohjfuoiuc11fceehv15k.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-julian-ashby": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/ajajm4kpptgabflalkss.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-christian-barmore": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/v1716486006/patriots/xlselcvs4xreirvtt1fr.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-andres-borregales": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/uj43vmspvl2gbyl2gekf.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-a-j-brown": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/hxq9tprk9t5t3kzydrfj.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-mike-brown": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/v1vfq2pzhabguxt0ko0j.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-ben-brown": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/f4h1vuzyhcfjg5wjscq4.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-marcus-bryant": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/sjfuruiyagtfwf0tqkrn.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-kevin-byard": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/zh1hmlx4o8xfnaz3rwv8.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-will-campbell": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/huydot1r2icviq5zqzca.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-channing-canada": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/yr5yiaxhaefolhy21tev.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-efton-chism-iii": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/ntbwjpuaut8vmo4qjfxp.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-dametrious-crownover": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/rn95o7ks2pyklbxwoo6m.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-carlton-davis": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/mezuzabkdldmqea9ukos.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-tommy-devito": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/roif5mllfysdfexludcu.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-demario-douglas": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/xk7njm9aooanll1xql8r.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-cory-durden": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/qwhbajntfzfpeaq0mkkx.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-christian-elliss": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/hi5zbq2gmpqqcqpqv3ak.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-joshua-farmer": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/o1vak6ujs3ttlkwxnbu4.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-christian-gonzalez": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/q1bxrzqzjxyzyjjcicrf.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-treveyon-henderson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/zcd8n1ht411qmfzildd0.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-hunter-henry": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/puuawvfwh1rt4ork8fwh.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-erick-hunter": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/ndmku2aa9u43yraafsrg.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-gabe-jacas": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/zmol0z7e1un1e9ir5min.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-daquan-jones": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/patriots/vhh2fkbktrdo7ya3k8th.jpg",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-dre-mont-jones": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/tbjz692maebzewtsrfmk.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-marcus-jones": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/ocrejgmtzanagzb3s8a3.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-corey-kiner": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/patriots/ey7zvvj8ulmmlufmemkt.jpg",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-lan-larison": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/pern1cfrs9kzepdo3vm2.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-cameron-latu": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/a5rxderjb1xfnyd0oupn.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-caleb-lomu": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/byavnb7wt1n1mfchecte.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-drake-maye": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/yjmlljttlbzjwfiip1kc.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-behren-morton": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/jtnscd1utayexzbf0e08.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-morgan-moses": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/kzmqhxnpyyv3cwlghjgd.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-darius-muasau": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/ydhy4wjixw2oaz2y4yl8.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-namdi-obiazor": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/cipvdafulpyh7xgiu1xh.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-elijah-ponder-2": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/kfjyl9dzpz8kufdxkr03.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-karon-prunty": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/aj7p92o7ite2fnyunyix.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-matt-pryor": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/rurteuhbbos2tupf5rdd.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-eli-raridon": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/yalycdft2ck03t5lva9p.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-jaylen-reed": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/rhe560vqvzv06u2gjqcy.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-walter-rouse": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/qwaepvqwgoz4gczl88qg.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-brenden-schooler": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/pw1xeu8vmokfav2nh4ud.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-robert-spillane": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/nraoi2exztq8f5vj4yfq.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-rhamondre-stevenson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/wlgpoebuzo7zgok3btcn.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-leonard-taylor-iii": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/elc6oyeqxotnsd0jc1lt.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-kyle-williams": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/h7hitbjkmpeduy2qvwi5.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-milton-williams": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/fjokafi7rlehto0fqr2n.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-jared-wilson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/crg665zi9ftvbb7wjuco.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-mitch-wishnowsky": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/fj4xb856c6rqgi9whond.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-charles-woods": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/l9n1qm7x0cxxyscehj9o.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NE-craig-woodson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/patriots/nszcifrcc8lty6s2gfhm.png",
    "source": "https://www.patriots.com/team/players-roster/"
  },
  "NYJ-braelon-allen": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/prjsww5nnivastkchfm2.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-david-bailey": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/vk3kv9iyqio3lbbiuavr.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-andrew-beck": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/psmjzfoaoh9z7rgohytw.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-dane-belton": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/vndrkq0ljxx1ifzou73t.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-jowon-briggs": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/aojx5d11doewtp9m3fvd.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-jarvis-brownlee-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/ockgbageu9bidgn77ahm.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-andre-cisco": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/axwu9zz5vaukmgctafcf.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-omar-cooper-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/ckidoujposaxcdmyooiz.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-demario-davis": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/nrvtw7jlumrkv7oyg0md.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-isaiah-davis": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/uwp0rw3c8hgfaocegf73.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-kingsley-enagbare": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/lsvqtb4wptaajqoazwpm.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-olumuyiwa-fashanu": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/fkhd7qw6pvah3nvpg6rt.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-minkah-fitzpatrick": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/nkaazjif47oqduy8wfxb.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-blake-freeland": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/ea4hyq3jloycepgcmf2g.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-breece-hall": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/caseqxhp4aksxdenw4iz.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-jack-heflin": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/bjqu5jlsowcnhu8dqb6n.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-thomas-hennessy": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/ixaabpdqrzbbydttu7wb.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-darrell-jackson-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/y6k0oitumjs28dbn8vso.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-jaden-keller": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/nikovy6z3er861vxtjlp.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-cade-klubnik": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/u44hmtfkhywt32k9nosh.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-kohl-levao": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/q44ldj24nfznmblon2f5.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-nate-lynn": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/xxizwiq0pr6gtb36brpx.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-malik-mcclain": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/ore07nwr35sbt7xewv25.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-will-mcdonald-iv": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/xujpmoqkdum85sv4ufsa.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-austin-mcnamara": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/yufin8olvo7klwl3etkk.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-armand-membou": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/hbu1ywmr02vcxv07fshu.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-jordan-meredith": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/kpnmdhghccfe1pmgazye.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-adonai-mitchell": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/aeqkolov8vzduywo50xk.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-malachi-moore": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/uejotv5pxmwmdxkdseh9.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-josh-myers": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/tscnn07hkyetjynd4mgk.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-kene-nwangwu": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/vbzjkvc031z6iyctcuz2.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-chukwuma-okorafor": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/myhzjk38dhmvip54vlus.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-joseph-ossai": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/ls4dzlqjqfzzhkhsgirl.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-payton-page": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/brrifynmlctxjkg2tjju.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-dylan-parham": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/daa2mdiagiekd5rzpvmu.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-tim-patrick": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/ws4f01kk2tyk1dq3lqln.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-harrison-phillips": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/pfinrbd1zfdxy9vrs1eo.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-d-angelo-ponds": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/fqpi2dsuaauf0gid9auu.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-jeremy-ruckert": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/fwhpr747zeczzgkgtwni.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-kenyon-sadiq": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/yespxuci41ovoxfahyfj.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-jason-sanders": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/isklu8xpdoy6ghj4ri7l.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-jamien-sherwood": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/ea78ylncvwgbstugnby9.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-geno-smith": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/vozgvlpgnjl5g6bppppw.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-brandon-stephens": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/r4wf5xdz3kiuwhtahari.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-qwan-tez-stiggers": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/x3bedaqywdbqg5146p0w.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-mason-taylor": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/haijhphtjq7k5qht3aun.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-azareye-h-thomas": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/ske6ljlzb2enizizbj5h.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-joe-tippmann": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/zlf6rokopvwzktxutlyh.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-trevin-wallace": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/xn73w7izd5abt9u5pvwr.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-isaiah-williams-2": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/nyiedunitclrye1trh0z.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-garrett-wilson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/v8sehhdsxezklo2pf3ud.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-jelani-woods": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/tiaaxdijteiavbejlz8a.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "NYJ-nahshon-wright": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/jets/lmfnigmwowz7bgayrx2y.png",
    "source": "https://www.newyorkjets.com/team/players-roster/"
  },
  "HOU-azeez-al-shaair": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/ns1v5hh9ucikqzjy3esc.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-will-anderson-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/dwswhiunnn9cwlupgl4i.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-jake-andrews": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/kxkiolqvjfh9yrvsew2d.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-reed-blankenship": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/s3xhfvthn6e2r7a1pquf.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-kayshon-boutte": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/texans/ekd4b2avd2zilevwawd7.png",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-austin-brinkman": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/pn52r2jf5glnkw2ggjov.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-evan-brown": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/cozqsagctxmnovhovscd.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-trent-brown": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/xjauhyiwujbgcxth2cyk.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-calen-bullock": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/n0rn0da4x5vgvvcyqjlk.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-jadeveon-clowney": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/texans/ixcvipyftjrwrjrxd3cr.png",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-nico-collins": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/p5lzyj1ab9ubtvjflzr1.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-tank-dell": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/zgkklim3kbhlkqhtj8sj.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-emari-demercado": {
    "url": "https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/wojuvwuzqhesa93iwlzd",
    "source": "https://www.nfl.com/players/emari-demercado/"
  },
  "HOU-aireontae-ersery": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/pwea7wlangss6eosfaw5.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-ka-imi-fairbairn": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/xgv2f9g2nvwhgtb1jwhx.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-blake-fisher": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/kqxehmz26jc5minmeejj.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-logan-hall": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/gnlyhwoervcby3jamcyo.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-jake-hansen": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/o2lmklm9l7dpjtcoajqg.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-marvin-harrison-jr": {
    "url": "https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/hwpoo1icpnh8emjvqaii",
    "source": "https://www.nfl.com/players/marvin-harrison-jr/"
  },
  "HOU-sabastian-harsh": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/ugjqzzcyllb0ztl9jzgj.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-danielle-hunter": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/wljwvgklbv46uy6zf51y.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-xavier-hutchinson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/h9c1ohogwnfftttprv6z.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-ed-ingram": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/xcwusu6tbdi73gsa7ziy.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-ja-marcus-ingram": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/xwmoevmmgabj2r2fqyxo.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-naquan-jones": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/bufywvygbyvpfkkajnuf.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-brevin-jordan": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/tukoky0lkfp3guqbpyn4.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-marlin-klein-x2560": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/sjnl9qpzwsn8lxbrhwcn.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-kai-kroeger": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/pbn2rtq9gzub1puplqy2.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-kamari-lassiter": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/owbvu6rtirskf3ubqlf6.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-woody-marks": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/gmtysdvaqnmtr1lhvnwu.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-kayden-mcdonald-x4937": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/wbnbjku8lmlpeun4n3mw.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-davis-mills": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/jnwewkumkjrjstdqpvgl.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-david-montgomery": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/hjtu8ojnkrzjllubv0qg.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-foster-moreau": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/r0ykxinddy2dnrlzplmc.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-febechi-nwaiwu-x9665": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/z1xzqlcsdwalyxsjj2zc.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-dare-ogunbowale-x1393": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/vvgdsymubdiehywluilx.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-jalen-pitre": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/suq91qhbssvjn9vbs02p.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-kamari-ramsey-x4812": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/jkudvj3tz6ctbo0apg16.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-sheldon-rankins": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/op0hppdeq7fwbnuobi8a.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-dominique-robinson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/xzmilrxd3j1nwqx5ho7r.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-keylan-rutledge-x6297": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/uffqcjuv18begq8lohlt.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-dalton-schultz": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/rqw4f3mdhkba99amd25u.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-braden-smith": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/nx1lqy1sux4jposouyfl.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-tremon-smith": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/bzinpwfocdw1hthlolsn.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-m-j-stewart": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/tbtg7jozr9kepllabkjg.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-derek-stingley-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/vppckv9wopff966fsry1.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-cade-stover": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/hiyhwkmp4ooiqpyqdjnk.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-c-j-stroud": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/nqwpipwkly2jsxcbswpc.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-wyatt-teller": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/sinqrwxbcdy9krggnzuk.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-nathan-thomas": {
    "url": "https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/eqezy9smygtojjoshtgt",
    "source": "https://www.nfl.com/players/nathan-thomas/"
  },
  "HOU-henry-to-oto-o": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/evjrrpiizai5tqpf1yeg.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-tommy-togiai": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/qxef5hqzxecyzbxxi0ki.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "HOU-wade-woodaz-x7832": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/texans/xdnemv3epgzjkutj42z4.jpg",
    "source": "https://www.houstontexans.com/team/players-roster/"
  },
  "IND-adetomiwa-adebawore": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/v1751980077/colts/b6ftffa5vluoenzyvxlo.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-austin-ajiake": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/v1751980366/colts/vd3fyoizrbqm22yf7cmm.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-mo-alie-cox": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/dp9x7nwjbbqvcevsmv0z.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-cj-allen": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/fobkocq05qxfsyq9gphb.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-keenan-allen": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/gbcdmpdfn8kyckn4ryn0.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-bryce-boettcher": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/mpqlgalfc43yczntk1pe.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-tanor-bortolini": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/v1751984522/colts/lnjzuzhyaws2y4vggvby.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-pharaoh-brown": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/dq40glk2ocicwqhyxmfk.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-deion-burks": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/l3vstnnyzbfqwpsil3ol.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-camryn-bynum": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/zw6chagv4kcggddxktcu.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-jaylon-carlies": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/guzqhmcc8educdlw0qja.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-tahj-chambers": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/g3nipp6abvjwb5ctzjhc.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-caden-curry": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/dubtfwjveqnz9uf1f8nw.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-akeem-davis-gaither": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/kgesxwp3pwozrrper5fb.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-josh-downs": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/wtowlwrholidoxzedvpt.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-ashton-dulin": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/v1751986288/colts/uuuatvwphopjrg3plqgo.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-jalen-farmer": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/aqy0duav0hlzhxxwmsen.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-sauce-gardner": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/u3578xrbjswyjjopqf6m.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-dj-giddens": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/zwgckupqa77d0a9komvx.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-kevin-givens": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/hboycoc7sun37b5ci8wx.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-matt-goncalves": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/xom39vqrtgumtepmy3bf.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-anthony-gould": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/ct6g9hgpbhcgdva1wygk.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-george-gumbs-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/lena0armsysy0zkhfuxr.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-kapena-gushiken": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/spohoqrpaguvh6iev4ol.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-kenneth-harris": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/qwdhnqrthzuyktofdhgq.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-a-j-haulcy": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/kin8pmikvxmkd3pxsf05.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-charlie-heck": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/wugzwtjeaujujk7o8dvb.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-daniel-jones": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/yupyfh48qudknbg83z7y.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-laiatu-latu": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/lg860ryhwidlfzrhk9fo.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-riley-leonard": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/v1751989185/colts/hjjk37ggao9qtfaedk39.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-will-mallory": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/fwdl18x84e8dfj5jzejg.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-seth-mcgowan": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/ftiiksu004nbtyep6973.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-andrew-ogletree": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/ssl4pyehhmlrqhwjsl82.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-jonathan-owens": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/cpjqqsmmuw5waz777wqs.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-bernhard-raimann": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/yj0yqibahjs6nojdsl0s.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-luke-rhodes": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/etklyyysndydagq0xuip.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-anthony-richardson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/vcbv33wwmyogeujscxfg.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-rigoberto-sanchez": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/celhcpyu44cz6n2r7oju.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-spencer-shrader": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/jtjohj3yzckmpykvp7wx.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-tim-smith": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/n2owiwc5cqnt3lb3pv9r.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-grover-stewart": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/ujbz8q1winyf6jevfvsu.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-jonathan-taylor": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/ivs68b8uh9uvsdd1oefv.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-luke-tenuta": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/xuvfvmvi74lcnvzzawrt.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-jerry-tillery": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/ib6zphcqkkmxqabejvck.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-jalen-travis": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/m9cklc2dqcge5ouwczmu.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-laquon-treadwell": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/km34cvlj4xrhmdaxawqn.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-dalton-tucker": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/v1752066941/colts/pvsm04qsjjcfkaa3mwyq.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-jt-tuimoloau": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/v1752067285/colts/se6x448kqc4jo7y2zjqq.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-sedrick-van-pran-granger": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/colts/gz5oa5qpao4ucihquicg.jpg",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-justin-walley": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/uvsfzxnh39exvh6q4fht.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-charvarius-ward": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/awgsddohtta44gjngsv6.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-tyler-warren": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/p4o6834vc5yqf71hfxqe.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "IND-hunter-wohler": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/colts/ujvvx13klwdbim3e1vfk.png",
    "source": "https://www.colts.com/team/players-roster/"
  },
  "JAX-ameer-abdullah": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/anqi9jigg6codhp8sxkj.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-lequint-allen": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/ma5m8lrt8bnprdevikqv.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-arik-armstead": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/dll7qkq6e7wqcoz0ya8k.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-nate-boerkircher": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/sgxqykwsfe12ug4fvg8l.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-montaric-brown": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/njtffvpl1z5dkb2ielfq.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-josh-cameron": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/wt9ni1i4bhg6qiqpko2b.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-ezra-cleveland": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/ens3atuwt4ac4t6jdafq.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-branson-combs": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/ui94wuotyjsu3jhn6xak.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-logan-cooke": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/vdrky9suxxc0gxkfybcm.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-matt-dickerson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/ttpv4j10bwkuofktm6nv.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-quinn-ewers": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/t5urgmz8wc6klznyjmet.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-daniel-faalele": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/soi3b73bj4puzgdqwxbg.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-dennis-gardeck": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/y4zwnnthfdfksqvdehyb.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-robert-hainsey": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/yrefgmouhif1uk2oc9gf.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-josh-allen": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/qudt06oufcppm5ghgvyd.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-travis-hunter": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/kk1xn9vulw9rxcu3jlji.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-jalen-huskey": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/t94bfurqxcprv4xwihyn.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-alijah-huzzie": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/czbycxmycl0pnyu6htyk.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-antonio-johnson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/eietik6cflcoic8fhfiv.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-jarrian-jones": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/hjknmey7yoya4tio0m4l.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-jaylon-jones": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/pb4yb80fee7ikudhcbes.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-tanner-koziol": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/hqvecczkvhvtbdjddx8y.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-rayuan-lane-iii": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/k9howhxcqyzssy41dtan.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-trevor-lawrence": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/rdqokj4x5jzzpp7vj5dt.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-jourdan-lewis": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/tzlhdsoopmqlvig6bb3s.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-cam-little": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/ign57m2exy2kopuusmvr.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-walker-little": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/trxcyl8rvjrkidyauibb.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-ross-matiscik": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/hmhy95xfdyx1ljl5xglj.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-jalen-mcleod": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/nockfysxkcognpjgnvdc.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-kaevon-merriweather": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/qccywnvqfbjq0lewugjh.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-jakobi-meyers": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/ufvkeilacnt2tgbm5lq4.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-ventrell-miller": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/t0m3ifyraaqf4hi6zw05.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-wyatt-milum": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/fay506njlemurzmlow70.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-jonah-monheim": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/pxudgfrc7lleicymfj1n.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-quintin-morris": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/izhm0lc8as2qzkisposr.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-foye-oluokun": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/tsvmsvylykp35mhnsd6p.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-ruke-orhorhoro": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/bynhqr8dwncytp6wqzso.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-emmanuel-pregnon": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/ibgpajk1l0w1huzt25o0.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-albert-regis": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/yajcpmu3etl760haxaxt.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-chris-rodriguez-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/cwglm0jneikfdzr4nzt9.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-brenton-strange": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/erp4h8evhujw9kvdmqvp.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-danny-striggow": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/yruubq0ociqvz7vb08gz.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-jahlani-tavai": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/cmpytmvldtkkfjkleklj.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-brian-thomas-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/bsvrk6v8axrimh9pjck7.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-bryan-thomas-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/jmacpcdjd9tbntmm4p5v.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-bhayshul-tuten": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/ucgbepe5rd8s8lwt0n5w.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-cole-van-lanen": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/zyxz5v5q1hn47exwnois.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-travon-walker": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/ophze6f1lekxyxml214e.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-parker-washington": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/w9c4zsszlgptz6my08sx.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-cj-williams": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/hawnfdc1nmajlag7m16e.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "JAX-wesley-williams": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/jaguars/n4royuaand8fhpugu0l6.jpg",
    "source": "https://www.jaguars.com/team/players-roster/"
  },
  "TEN-tony-adams-2": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/s0fvqjprnvjmz1roeepc.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-elic-ayomanor": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/tsesgf33btk2qmktkh0z.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-cody-barton": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/ied5qj0fx8fz6giscfd7.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-daniel-bellinger": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/txmevl0c1yfhrpeqbvdp.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-terrell-burgess": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/i5cgmxpupwcnfs4budzg.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-michael-carter": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/rggrri9lbcwlmx1ffbwi.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-julius-chestnut": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/injnkpgtfdd8eo8pzsss.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-pat-coogan": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/ihrrcmzzteldqew3hhrm.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-morgan-cox": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/aebzp1puc3vtvockujw0.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-brandon-crenshaw-dickson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/kpvrlpw2w6jmlutfbiig.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-garrett-dellinger": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/gprfr3zkfgidosiacr5b.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-chimere-dike": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/ixjxrnjxq4ggkgby9njo.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-keldric-faulk": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/ax2snaudz1uynreqrj60.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-cor-dale-flott": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/xyvvzgvskg4umc6qbsfb.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-john-franklin-myers": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/g6jratnvwcgribwi2j6g.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-kylen-granson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/r3zzyq7c2gxtwjztto1a.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-cedric-gray": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/u68tnwc1v8cc9otfjuff.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-marcus-harris": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/bdamgodnte4z97glwjki.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-gunnar-helm": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/kxhqnkia2r3izzsghleh.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-anthony-hill-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/aohza0laf0ni7shyqnxs.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-amani-hooker": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/xiksdnxndsbrrpgcfhxj.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-timmy-horne": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/wr7tyec7a1swt8nxlktg.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-james-hudson-iii": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/azt7aczm7i1zrvbharbo.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-jermaine-johnson-ii": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/zddkbfr2kdpyv8il8qkj.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-jaylon-jones": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/e1elv1jos3rohtembg6k.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-truman-jones": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/dla6qrnglwm4ctyuvdeo.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-jc-latham": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/e3luabpgq4rvyzxzp2gt.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-jonah-laulu": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/y2eujvzfhhbs68zi9kuc.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-atonio-mafi": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/iise4yitlnjpbnbhicz9.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-jackie-marshall": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/hrtwdao7ziwhzxzqx2bf.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-david-martin-robinson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/ipypfxrhxarimqwu2eie.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-jacob-martin": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/tyqt8edkmxbzzdoga7aq.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-dan-moore-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/epxiugg9xvxyyamavjgx.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-oluwafemi-oladejo": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/ytpjx9bpsrnuptzix4ir.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-tony-pollard": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/gwruhpjwmcdx2nhesokd.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-calvin-ridley": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/w7yrdar4ywd8nztocflr.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-micah-robinson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/psdslca4nok2s3syrrc0.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-wan-dale-robinson": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/toqje3ot4oskrwmo8nsu.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-austin-schlottmann": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/xnronuvl5iybciewe3f3.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-nick-singleton": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_png/v1777912051/titans/jfg1vkn4unc3t5xskzjd.png",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-peter-skoronski": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/axvyfalzub5zjmfkz2ln.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-joey-slye": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/mpne20jqssstgal7kuac.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-tyjae-spears": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/ycufkkxas3lvuty4zpls.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-nazir-stackhouse": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/cfpqdbfbcxloakjvqipa.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-carnell-tate": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/xb0r8zkb0p9colnvlcgk.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-alontae-taylor": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/q2jkfrtvl2o4tmvsohmc.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-solomon-thomas": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/rvrkhlcrinqn3yerqazf.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-tommy-townsend": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/nquaw6ncz3w6vfeocqhg.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-mitchell-trubisky": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/lzha4cx56zvdjw4tdsgt.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-cam-ward": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/rlnwbec7a2b1ftcmlgcu.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-james-williams-sr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/rdo5mgjxonguxcmu91x1.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-joshua-williams": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/dlcwyrvaqg3y0cw2rsau.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  },
  "TEN-kevin-winston-jr": {
    "url": "https://static.clubs.nfl.com/image/upload/t_thumb_squared_3x/f_auto/titans/s1s6krvgvtibxpbosyks.jpg",
    "source": "https://www.tennesseetitans.com/team/players-roster/"
  }
};
