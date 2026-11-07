// Baseline remains live until the first validated weekly refresh.
const ROSTER_KNOWN_IDS={NFL:Object.fromEntries(Object.entries(ROSTERS).map(([team,players])=>[team,players.map(p=>p.id)])),NBA:Object.fromEntries(Object.entries(NBA_ROSTERS).map(([team,players])=>[team,players.map(p=>p.id)]))};
