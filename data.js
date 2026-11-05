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
  }
};
