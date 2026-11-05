// Active rosters verified 2026-11-05. See DATA-SOURCES.md.
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
    }
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
    }
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
    }
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
    }
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
  ]
};

// Official team/NFL image sources, matched by stable player ID; no image binaries are bundled.
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
  }
};
