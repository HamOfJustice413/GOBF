exports.BattlePokedex = {

	mrmime: {
		inherit: true,
		evos: ["mimesr"],
	},

	sliggoo: {
		inherit: true,
		evos: ["goodra", "goodrafrontier"],
	},

	goodra: {
		inherit: true,
		otherFormes: ["goodrafrontier"],
	},

	goodrafrontier: {
		num: 706,
		species: "Goodra-Frontier",
		baseSpecies: "Goodra",
		forme: "Frontier",
		formeLetter: "F",
		types: ["Dragon", "Water"],
		baseStats: {hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 80},
		abilities: {0: "Water Absorb", 1: "Hydration", H: "Gooey"},
		heightm: 2,
		weightkg: 150.5,
		color: "Purple",
		prevo: "sliggoo",
		evoLevel: 50,
		eggGroups: ["Dragon"],
		tier: ["CAP"],
	},

	florges: {
		inherit: true,
		otherForms: ["florgesblue", "florgesorange", "florgeswhite", "florgesyellow", "florgesfrontier"],
	},

	florgesfrontier: {
		num: 671,
		species: "Florges-Frontier",
		types: ["Fairy", "Grass"],
		gender: "F",
		baseStats: {hp: 78, atk: 65, def: 68, spa: 112, spd: 154, spe: 75},
		abilities: {0: "Flower Veil", 1: "Aroma Veil", H: "Symbiosis"},
		heightm: 1.1,
		weightkg: 10,
		color: "White",
		prevo: "floette",
		evoLevel: 19,
		eggGroups: ["Fairy"],
		otherForms: ["florges", "florgesblue", "florgesorange", "florgeswhite", "florgesyellow"],
	},

	terrofiend: {
		num: 1001,
		species: "Terrofiend",
		types: ["Dark"],
		baseStats: {hp: 66, atk: 113, def: 66, spa: 66, spd: 113, spe: 113},
		abilities: {0: "Void Cloak", 1: "Super Luck", H: "Technician"},
		heightm: 1.3,
		weightkg: 13,
		color: "Black",
		eggGroups: ["Amorphous"],
		tier: ["CAP"],
	},

	pufferate: {
		num: 1002,
		species: "Pufferate",
		types: ["Water", "Poison"],
		baseStats: {hp: 130, atk: 110, def: 100, spa: 70, spd: 60, spe: 40},
		abilities: {0: "Iron Barbs", 1: "Skill Link", H: "Thick Fat"},
		heightm: 1.1,
		weightkg: 20.0,
		color: "Gray",
		eggGroups: ["Water 2"],
		tier: ["CAP"],
	},

	mimesr: {
		num: 1003,
		species: "Mime Sr.",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 60, atk: 50, def: 70, spa: 120, spd: 130, spe: 85},
		abilities: {0: "Prankster", 1: "Filter", H: "Technician"},
		heightm: 1.8,
		weightkg: 61.0,
		evos: ["mimesr"],
		color: "Pink",
		prevo: "mrmime",
		evoLevel: 1,
		eggGroups: ["Human-Like"],
		tier: ["CAP"],
	},

	staryu: {
		inherit: true,
		otherFormes: ["staryufrontier"],
	},

	starmie: {
		inherit: true,
		otherFormes: ["starmiefrontier"],
	},

	staryufrontier: {
		num: 120,
		species: "Staryu-Frontier",
		types: ["Electric"],
		gender: "N",
		formeLetter: "F",
		baseStats: {hp: 30, atk: 40, def: 60, spa: 60, spd: 60, spe: 90},
		abilities: {0: "Singularity"},
		heightm: 0.8,
		weightkg: 34.5,
		color: "Brown",
		evos: ["starmiefrontier"],
		eggGroups: ["Water 3"],
		tier: ["CAP"],
		otherFormes: ["staryu"],
	},

	starmiefrontier: {
		num: 121,
		species: "Starmie-Frontier",
		types: ["Electric", "Psychic"],
		gender: "N",
		formeLetter: "F",
		baseStats: {hp: 60, atk: 70, def: 90, spa: 90, spd: 90, spe: 120},
		abilities: {0: "Singularity"},
		heightm: 1.1,
		weightkg: 80,
		color: "Purple",
		prevo: "staryufrontier",
		evoLevel: 1,
		eggGroups: ["Water 3"],
		tier: ["CAP"],
		otherFormes: ["starmie"],
	},

	prinplup: {
		inherit: true,
		evos: ["empoleon", "empoleonfrontier"], 
	},

	empoleon: {
		inherit: true,
		otherFormes: ["empoleonfrontier"],
	},

	empoleonfrontier: {
		num: 395,
		species: "Empoleon-Frontier",
		baseSpecies: "Empoleon",
		types: ["Water", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		formeLetter: "F",
		baseStats: {hp: 84, atk: 111, def: 88, spa: 60, spd: 86, spe: 101},
		abilities: {0: "Tough Claws"},
		heightm: 1.7,
		weightkg: 84.5,
		color: "Blue",
		prevo: "prinplup",
		evoLevel: 36,
		eggGroups: ["Water 1", "Field"],
		tier: ["CAP"],
		otherFormes: ["empoleon"],
	},

	monferno: {
		inherit: true,
		evos: ["infernape", "infernapefrontier"], 
	},

	infernape: {
		inherit: true,
		otherFormes: ["infernapefrontier"],
	},

	infernapefrontier: {
		num: 392,
		species: "Infernape-Frontier",
		baseSpecies: "Infernape",
		types: ["Fire", "Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		formeLetter: "F",
		baseStats: {hp: 108, atk: 71, def: 71, spa: 104, spd: 104, spe: 76},
		abilities: {0: "Levitate"},
		heightm: 1.2,
		weightkg: 55,
		color: "Brown",
		prevo: "monferno",
		evoLevel: 36,
		eggGroups: ["Field", "Human-Like"],
		tier: ["CAP"],
		otherFormes: ["infernape"],
	},

	eevee: {
		inherit: true,
		evos: ["vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon", "glaceon", "sylveon", "terneon"],
	},

	terneon: {
		num: 1004,
		species: "Terneon",
		types: ["Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 130, atk: 110, def: 65, spa: 60, spd: 95, spe: 65},
		abilities: {0: "Hydrate", 1: "Galvanize", H: "Hot-Blooded"},
		heightm: 1,
		weightkg: 32,
		color: "Gray",
		prevo: "eevee",
		evoLevel: 1,
		eggGroups: ["Field"],
		tier: ["CAP"],
	},

	mercured: {
		num: 1005,
		species: "Mercured",
		types: ["Steel", "Poison"],
		gender: "N",
		baseStats: {hp: 75, atk: 45, def: 45, spa: 95, spd: 115, spe: 125},
		abilities: {0: "Flare Boost", 1: "Unaware", H: "Flash Fire"},
		heightm: 1.2,
		weightkg: 25,
		eggGroups: ["Undiscovered"],
		tier: ["CAP"],
	},

	metrobot: {
		num: 1006,
		species: "Metrobot",
		types: ["Steel", "Fairy"],
		gender: "N",
		baseStats: {hp: 200, atk: 80, def: 120, spa: 80, spd: 120, spe: 1},
		abilities: {0: "Oblivious"},
		heightm: 0.6,
		weightkg: 60,
		eggGroups: ["Undiscovered"],
		tier: ["CAP"],
	},

	vaporeon: {
		inherit: true,
		abilities: {0: "Water Absorb", 1: "Galvanize", H: "Hydration"},
	},

	jolteon: {
		inherit: true,
		abilities: {0: "Volt Absorb", 1: "Hot-Blooded", H: "Quick Feet"},
	},

	flareon: {
		inherit: true,
		baseStats: {hp: 110, atk: 130, def: 60, spa: 65, spd: 95, spe: 65},
		abilities: {0: "Flash Fire", 1: "Hydrate", H: "Guts"},
	},

	glaceon: {
		inherit: true,
		baseStats: {hp: 110, atk: 60, def: 95, spa: 130, spd: 65, spe: 65},
	},

	delphox: {
		inherit: true,
		abilities: {0: "Blaze", 1: "Magic Guard", H: "Magician"},
	},

	sawsbuck: {
		inherit: true,
		baseStats: {hp: 80, atk: 110, def: 70, spa: 60, spd: 70, spe: 105},
		abilities: {0: "Regenerator", 1: "Sap Sipper", H: "Serene Grace"},
	},

};