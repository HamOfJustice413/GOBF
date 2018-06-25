'use strict';

exports.BattleItems = {
	"kommoniumz": {
		inherit: true,
		isUnreleased: true,
	},
	"lunaliumz": {
		inherit: true,
		isUnreleased: true,
	},
	"lycaniumz": {
		inherit: true,
		isUnreleased: true,
	},
	"mimikiumz": {
		inherit: true,
		isUnreleased: true,
	},
	"solganiumz": {
		inherit: true,
		isUnreleased: true,
	},
	"ultranecroziumz": {
		inherit: true,
		isUnreleased: true,
	},
	"aloraichiumz": {
		inherit: true,
		isUnreleased: true,
	},
	"buginiumz": {
		inherit: true,
		isUnreleased: true,
	},
	"darkiniumz": {
		inherit: true,
		isUnreleased: true,
	},
	"decidiumz": {
		inherit: true,
		isUnreleased: true,
	},
	"dragoniumz": {
		inherit: true,
		isUnreleased: true,
	},
	"eeviumz": {
		inherit: true,
		isUnreleased: true,
	},
	"electriumz": {
		inherit: true,
		isUnreleased: true,
	},
	"fairiumz": {
		inherit: true,
		isUnreleased: true,
	},
	"fightiniumz": {
		inherit: true,
		isUnreleased: true,
	},
	"firiumz": {
		inherit: true,
		isUnreleased: true,
	},
	"flyiniumz": {
		inherit: true,
		isUnreleased: true,
	},
	"ghostiumz": {
		inherit: true,
		isUnreleased: true,
	},
	"grassiumz": {
		inherit: true,
		isUnreleased: true,
	},
	"groundiumz": {
		inherit: true,
		isUnreleased: true,
	},
	"iciumz": {
		inherit: true,
		isUnreleased: true,
	},
	"inciniumz": {
		inherit: true,
		isUnreleased: true,
	},
	"marshadiumz": {
		inherit: true,
		isUnreleased: true,
	},
	"mewniumz": {
		inherit: true,
		isUnreleased: true,
	},
	"normaliumz": {
		inherit: true,
		isUnreleased: true,
	},
	"pikaniumz": {
		inherit: true,
		isUnreleased: true,
	},
	"pikashuniumz": {
		inherit: true,
		isUnreleased: true,
	},
	"poisoniumz": {
		inherit: true,
		isUnreleased: true,
	},
	"primariumz": {
		inherit: true,
		isUnreleased: true,
	},
	"psychiumz": {
		inherit: true,
		isUnreleased: true,
	},
	"rockiumz": {
		inherit: true,
		isUnreleased: true,
	},
	"snorliumz": {
		inherit: true,
		isUnreleased: true,
	},
	"steeliumz": {
		inherit: true,
		isUnreleased: true,
	},
	"tapuniumz": {
		inherit: true,
		isUnreleased: true,
	},
	"wateriumz": {
		inherit: true,
		isUnreleased: true,
	},
	"ultranecroziumz": {
		inherit: true,
		isUnreleased: true,
	},
	"shellbell": {
		id: "shellbell",
		name: "Shell Bell",
		spritenum: 438,
		fling: {
			basePower: 30,
		},
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf: function (pokemon, target, move) {
			if (move.category !== 'Status') {
				this.heal(pokemon.lastDamage / 4, pokemon);
			}
		},
		num: 253,
		gen: 3,
		desc: "[GOBF: 1/4.] After an attack, holder gains 1/8 of the damage in HP dealt to other Pokemon.",
		},
	"bigroot": {
		id: "bigroot",
		name: "Big Root",
		spritenum: 29,
		fling: {
			basePower: 10,
		},
		onTryHealPriority: 1,
		onTryHeal: function (damage, target, source, effect) {
			let heals = {drain: 1, leechseed: 1, ingrain: 1, aquaring: 1, strengthsap: 1};
			if (heals[effect.id]) {
				return Math.ceil((damage * 1.5) - 0.5); // Big Root rounds half down
			}
		},
		num: 296,
		gen: 4,
		desc: "[GOBF: 2x.] Holder gains 1.3x HP from draining/Aqua Ring/Ingrain/Leech Seed/Strength Sap.",
		},
};
