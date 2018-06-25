'use strict';

exports.BattleMovedex = {

	"metronome": {
		num: 118,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "A random move is selected for use, other than After You, Assist, Belch, Bestow, Celebrate, Chatter, Copycat, Counter, Covet, Crafty Shield, Destiny Bond, Detect, Diamond Storm, Endure, Feint, Focus Punch, Follow Me, Freeze Shock, Happy Hour, Helping Hand, Hold Hands, Hyperspace Hole, Ice Burn, King's Shield, Light of Ruin, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Protect, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Sketch, Sleep Talk, Snarl, Snatch, Snore, Spiky Shield, Steam Eruption, Struggle, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Transform, Trick, V-create, or Wide Guard.",
		shortDesc: "Picks a random move.",
		id: "metronome",
		name: "Metronome",
		pp: 20,
		priority: 0,
		flags: {},
		noMetronome: ['afteryou', 'assist', 'belch', 'bestow', 'celebrate', 'chatter', 'copycat', 'counter', 'covet', 'craftyshield', 'destinybond', 'detect', 'diamondstorm', 'dragonascent', 'endure', 'feint', 'focuspunch', 'followme', 'freezeshock', 'happyhour', 'helpinghand', 'holdhands', 'hyperspacefury', 'hyperspacehole', 'iceburn', 'kingsshield', 'lightofruin', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'originpulse', 'precipiceblades', 'protect', 'quash', 'quickguard', 'ragepowder', 'relicsong', 'secretsword', 'sketch', 'sleeptalk', 'snarl', 'snatch', 'snore', 'spikyshield', 'steameruption', 'struggle', 'switcheroo', 'technoblast', 'thief', 'thousandarrows', 'thousandwaves', 'transform', 'trick', 'vcreate', 'wideguard'],
		onHit: function (target, source, effect) {
			let moves = [];
			for (let i in exports.BattleMovedex) {
				let move = exports.BattleMovedex[i];
				if (i !== move.id) continue;
				if (move.isZ || move.isNonstandard) continue;
				// @ts-ignore
				if (effect.noMetronome.includes(move.id)) continue;
				if (this.getMove(i).gen > this.gen) continue;
				moves.push(move);
			}
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) {
				return false;
			}
			this.useMove(randomMove, target);
		},
		secondary: false,
		target: "self",
		type: "Normal",
		contestType: "Cute",
	},

	"dragonclaw": {
		num: 337,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Defense by 1.",
		id: "dragonclaw",
		isViable: true,
		name: "Dragon Claw",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Dragon",
		zMovePower: 160,
		contestType: "Cool",
	},


	"finalscythe": {
		num: 1001,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "High crit ratio. Lowers the user's Attack by 2 stages if this move does not knock out the target.",
		shortDesc: "High crit. Lowers user's Attack by 2 if it doesn't KO the target.",
		id: "finalscythe",
		isViable: true,
		name: "Final Scythe",
		pp: 5,
		priority: 0,
		critRatio: 2,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterMoveSecondarySelf: function (pokemon, target, move) {
			if (target.hp > 0) this.boost({atk: -2}, pokemon, pokemon, move);
		},
		secondary: false,
		target: "normal",
		type: "Steel",
		zMovePower: 180,
		contestType: "Cool",
	},

	"knockoff": {
		num: 282,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		desc: "[GOBF: No longer deals 1.5x damage.] If the target is holding an item that can be removed from it, ignoring the Ability Sticky Hold, this move's power is multiplied by 1.5. If the user has not fainted, the target loses its held item. This move cannot remove Z-Crystals, cause Pokemon with the Ability Sticky Hold to lose their held item, cause Pokemon that can Mega Evolve to lose the Mega Stone for their species, or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, or Memory respectively. Items lost to this move cannot be regained with Recycle or the Ability Harvest.",
		shortDesc: "Removes the target's item for the rest of the battle.",
		id: "knockoff",
		isViable: true,
		name: "Knock Off",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterHit: function (target, source) {
			if (source.hp) {
				let item = target.takeItem();
				if (item) {
					this.add('-enditem', target, item.name, '[from] move: Knock Off', '[of] ' + source);
				}
			}
		},
		secondary: false,
		target: "normal",
		type: "Dark",
		zMovePower: 120,
		contestType: "Clever",
	},
"metallurgy": {
		num: 1002,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Has a 20% chance to raise the user's Sp. Atk by 1 stage.",
		shortDesc: "20% chance to raise the user's Sp. Atk by 1.",
		id: "metallurgy",
		isViable: true,
		name: "Metallurgy",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		zMovePower: 175,
		contestType: "Cool",
	},

};
