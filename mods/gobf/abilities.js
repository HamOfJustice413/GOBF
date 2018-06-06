'use strict';

exports.BattleAbilities = {

	"voidcloak": {
		shortDesc: "On switch-in, this Pokemon's Special Defense is briefly doubled.",
		onStart: function (pokemon) {
			pokemon.addVolatile('voidcloak');
		},
		onEnd: function (pokemon) {
			delete pokemon.volatiles['voidcloak'];
			this.add('-end', pokemon, 'Void Cloak', '[silent]');
		},
		effect: {
			duration: 1,
			onStart: function (target) {
				this.add('-start', target, 'ability: Void Cloak');
			},
			onModifySpDPriority: 5,
			onModifySpD: function (spd, pokemon) {
				return this.chainModify(2);
			},
			onEnd: function (target) {
				this.add('-end', target, 'Void Cloak');
			},
		},
		id: "voidcloak",
		name: "Void Cloak",
		rating: 3,
		num: 1001,
	},

	"singularity": {
		shortDesc: "On switch-in, activate Gravity.",
		onStart: function (source) {
		this.addPseudoWeather('gravity');
		},
		id: "singularity",
		name: "Singularity",
		rating: 3,
		num: 1002,
	},

	"hydrate": {
		desc: "This Pokemon's Normal-type moves become Water-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Water type and have 1.2x power.",
		onModifyMovePriority: -1,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Water';
				move.hydrateBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
			if (move.hydrateBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "hydrate",
		name: "Hydrate",
		rating: 4,
		num: 1003,
	},

	"hotblooded": {
		desc: "This Pokemon's Normal-type moves become Fire-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Fire type and have 1.2x power.",
		onModifyMovePriority: -1,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Fire';
				move.hotbloodedBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
			if (move.hotbloodedBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "hotblooded",
		name: "Hot-Blooded",
		rating: 4,
		num: 1004,
	},


};