const itemDataByColor = {
    "w": [
        {
            "id": "soldiers_syringe",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/f2/Soldier%27s_Syringe.png",
            "name": "Soldier's Syringe",
            "description": "Increases attack speed by 15% (+15% per stack)."
        },
        {
            "id": "tougher_times",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/39/Tougher_Times.png",
            "name": "Tougher Times",
            "description": "15% (+15% per stack) chance to block incoming damage. Unaffected by luck."
        },
        {
            "id": "monster_tooth",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/3b/Monster_Tooth.png",
            "name": "Monster Tooth",
            "description": "Killing an enemy spawns a healing orb that heals for 8 plus an additional 2% (+2% per stack) of maximum health."
        },
        {
            "id": "lens-makers_glasses",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/23/Lens-Maker%27s_Glasses.png",
            "name": "Lens-Maker's Glasses",
            "description": "Your attacks have a 10% (+10% per stack) chance to 'Critically Strike', dealing double damage."
        },
        {
            "id": "pauls_goat_hoof",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/4/4a/Paul%27s_Goat_Hoof.png",
            "name": "Paul's Goat Hoof",
            "description": "Increases movement speed by 14% (+14% per stack)."
        },
        {
            "id": "bustling_fungus",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/33/Bustling_Fungus.png",
            "name": "Bustling Fungus",
            "description": "After standing still for 1 second, create a zone that heals for 4.5% (+2.25% per stack) of your health every second to all allies within 3m (+1.5m per stack)."
        },
        {
            "id": "crowbar",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c0/Crowbar.png",
            "name": "Crowbar",
            "description": "Deal 75% (+75% per stack) damage to enemies above 90% health."
        },
        {
            "id": "tri-tip_dagger",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/1/17/Tri-Tip_Dagger.png",
            "name": "Tri-Tip Dagger",
            "description": "10% (+10% per stack) chance to bleed an enemy for 240% base damage."
        },
        {
            "id": "warbanner",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/f0/Warbanner.png",
            "name": "Warbanner",
            "description": "On level up or starting the Teleporter event, drop a banner that strengthens all allies within 16m (+8m per stack). Raise attack and movement speed by 30%."
        },
        {
            "id": "cautious_slug",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c6/Cautious_Slug.png",
            "name": "Cautious Slug",
            "description": "Increases base health regeneration by +3 hp/s (+3 hp/s per stack) while outside of combat."
        },
        {
            "id": "personal_shield_generator",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e0/Personal_Shield_Generator.png",
            "name": "Personal Shield Generator",
            "description": "Gain a shield equal to 8% (+8% per stack) of your maximum health. Recharges outside of danger."
        },
        {
            "id": "medkit",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/0f/Medkit.png",
            "name": "Medkit",
            "description": "2 seconds after getting hurt, heal for 20 plus an additional 5% (+5% per stack) of maximum health."
        },
        {
            "id": "gasoline",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/6e/Gasoline.png",
            "name": "Gasoline",
            "description": "Killing an enemy ignites all enemies within 12m (+4m per stack) for 150% base damage. Additionally, enemies burn for 150% (+75% per stack) base damage."
        },
        {
            "id": "stun_grenade",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/27/Stun_Grenade.png",
            "name": "Stun Grenade",
            "description": "5% (+5% on stack) chance on hit to stun enemies for 2 seconds."
        },
        {
            "id": "bundle_of_fireworks",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/3d/Bundle_of_Fireworks.png",
            "name": "Bundle of Fireworks",
            "description": "Activating an interactable launches 8 (+4 per stack) fireworks that deal 300% base damage."
        },
        {
            "id": "energy_drink",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/7e/Energy_Drink.png",
            "name": "Energy Drink",
            "description": "Sprint speed is improved by 25% (+25% per stack)."
        },
        {
            "id": "backup_magazine",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/f3/Backup_Magazine.png",
            "name": "Backup Magazine",
            "description": "Add +1 (+1 per stack) charge of your Secondary skill."
        },
        {
            "id": "sticky_bomb",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/74/Sticky_Bomb.png",
            "name": "Sticky Bomb",
            "description": "5% (+5% per stack) chance on hit to attach a bomb to an enemy, detonating for 180% TOTAL damage."
        },
        {
            "id": "rusted_key",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9b/Rusted_Key.png",
            "name": "Rusted Key",
            "description": "A hidden cache containing an item (80% green, 20% red) will appear in a random location on each stage. Opening the cache consumes this item."
        },
        {
            "id": "armor-piercing_rounds",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/f0/Armor-Piercing_Rounds.png",
            "name": "Armor-Piercing Rounds",
            "description": "Deal an additional 20% damage (+20% per stack) to bosses."
        },
        {
            "id": "topaz_brooch",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c5/Topaz_Brooch.png",
            "name": "Topaz Brooch",
            "description": "Gain a temporary barrier on kill for 15 health (+15 per stack)."
        },
        {
            "id": "focus_crystal",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/59/Focus_Crystal.png",
            "name": "Focus Crystal",
            "description": "Increase damage to enemies within 13m by 20% (+20% per stack)."
        },
        {
            "id": "bison_steak",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9f/Bison_Steak.png",
            "name": "Bison Steak",
            "description": "Increases maximum health by 25 (+25 per stack)."
        },
        {
            "id": "repulsion_armor_plate",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/aa/Repulsion_Armor_Plate.png",
            "name": "Repulsion Armor Plate",
            "description": "Reduce all incoming damage by 5 (+5 per stack). Cannot be reduced below 1."
        }
    ],
    "g": [
        {
            "id": "atg_missile_mk1",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/6a/AtG_Missile_Mk._1.png",
            "name": "AtG Missile Mk. 1",
            "description": "10% chance to fire a missile that deals 300% (+300% per stack) TOTAL damage."
        },
        {
            "id": "will-o-the-wisp",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c4/Will-o%27-the-wisp.png",
            "name": "Will-o'-the-wisp",
            "description": "On killing an enemy, spawn a lava pillar in a 12m (+2.4m per stack) radius for 350% (+280% per stack) base damage."
        },
        {
            "id": "hopoo_feather",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/3a/Hopoo_Feather.png",
            "name": "Hopoo Feather",
            "description": "Gain +1 (+1 per stack) maximum jump count."
        },
        {
            "id": "ukulele",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/98/Ukulele.png",
            "name": "Ukulele",
            "description": "25% chance to fire chain lightning for 80% TOTAL damage on up to 3 (+2 per stack) targets within 20m (+2m per stack)."
        },
        {
            "id": "leeching_seed",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/a0/Leeching_Seed.png",
            "name": "Leeching Seed",
            "description": "Dealing damage heals you for 1 (+1 per stack) health."
        },
        {
            "id": "predatory_instincts",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/39/Predatory_Instincts.png",
            "name": "Predatory Instincts",
            "description": "Gain 5% critical chance. Critical strikes increase attack speed by 12%. Maximum cap of 36% (+24% per stack) attack speed."
        },
        {
            "id": "red_whip",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/2a/Red_Whip.png",
            "name": "Red Whip",
            "description": "Leaving combat boosts your movement speed by 30% (+30% per stack)."
        },
        {
            "id": "old_war_stealthkit",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/2c/Old_War_Stealthkit.png",
            "name": "Old War Stealthkit",
            "description": "Falling below 25% health causes you to gain 40% movement speed and invisibility for 5s. Recharges every 30 seconds (-50% per stack)."
        },
        {
            "id": "harvesters_scythe",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e1/Harvester%27s_Scythe.png",
            "name": "Harvester's Scythe",
            "description": "Gain 5% critical chance. Critical strikes heal for 8 (+4 per stack) health."
        },
        {
            "id": "fuel_cell",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/4/4d/Fuel_Cell.png",
            "name": "Fuel Cell",
            "description": "Hold an additional equipment charge (+1 per stack). Reduce equipment cooldown by 15% (+15% per stack)."
        },
        {
            "id": "infusion",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/7d/Infusion.png",
            "name": "Infusion",
            "description": "Killing an enemy increases your health permanently by 1 (+1 per stack), up to a maximum of 100 (+100 per stack) health."
        },
        {
            "id": "bandolier",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/62/Bandolier.png",
            "name": "Bandolier",
            "description": "18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns."
        },
        {
            "id": "berzerkers_pauldron",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/a6/Berzerker%27s_Pauldron.png",
            "name": "Berzerker's Pauldron",
            "description": "Killing 3 enemies within 1 second sends you into a frenzy for 6s (+4s per stack). Increases movement speed by 50% and attack speed by 100%."
        },
        {
            "id": "rose_buckler",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/2f/Rose_Buckler.png",
            "name": "Rose Buckler",
            "description": "Increase armor by 30 (+30 per stack) while sprinting."
        },
        {
            "id": "runalds_band",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/05/Runald%27s_Band.png",
            "name": "Runald's Band",
            "description": "Hits that deal more than 400% damage also blasts enemies with a runic ice blast, slowing them by 80% for 3s (+3s per stack) and dealing 250% (+250% per stack) TOTAL damage. Recharges every 10 seconds."
        },
        {
            "id": "kjaros_band",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/eb/Kjaro%27s_Band.png",
            "name": "Kjaro's Band",
            "description": "Hits that deal more than 400% damage also blasts enemies with a runic flame tornado, dealing 300% (+300% per stack) TOTAL damage over time. Recharges every 10 seconds."
        },
        {
            "id": "chronobauble",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/38/Chronobauble.png",
            "name": "Chronobauble",
            "description": "Slow enemies on hit for -60% movement speed for 2s (+2s per stack)."
        },
        {
            "id": "wax_quail",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/6c/Wax_Quail.png",
            "name": "Wax Quail",
            "description": "Jumping while sprinting boosts you forward by 10m (+10m per stack)."
        },
        {
            "id": "old_guillotine",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/8/8d/Old_Guillotine.png",
            "name": "Old Guillotine",
            "description": "Instantly kill Elite monsters below 13% (+13% per stack) health."
        },
        {
            "id": "war_horn",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9c/War_Horn.png",
            "name": "War Horn",
            "description": "Activating your Equipment gives you +70% attack speed for 8s (+4s per stack)."
        },
        {
            "id": "lepton_daisy",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/73/Lepton_Daisy.png",
            "name": "Lepton Daisy",
            "description": "Release a healing nova during the Teleporter event, healing all nearby allies for 50% of their maximum health. Occurs 1 (+1 per stack) times."
        },
        {
            "id": "razorwire",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/ac/Razorwire.png",
            "name": "Razorwire",
            "description": "Getting hit causes you to explode in a burst of razors, dealing 160% damage. Hits up to 5 (+2 per stack) targets in a 25m (+10m per stack) radius."
        },
        {
            "id": "ghors_tome",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9a/Ghor%27s_Tome.png",
            "name": "Ghor's Tome",
            "description": "4% (+4% on stack) chance on kill to drop a treasure worth $25. Scales over time."
        },
        {
            "id": "squid_polyp",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/d/de/Squid_Polyp.png",
            "name": "Squid Polyp",
            "description": "Activating an interactable summons a Squid Turret that attacks nearby enemies at 100% (+100% per stack) attack speed. Lasts 30 seconds."
        },
        {
            "id": "death_mark",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/34/Death_Mark.png",
            "name": "Death Mark",
            "description": "Enemies with 4 or more debuffs are marked for death, increasing damage taken by 50% from all sources for 7 (+7 per stack) seconds."
        }
    ],
    "r": [
        {
            "id": "brilliant_behemoth",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/fa/Brilliant_Behemoth.png",
            "name": "Brilliant Behemoth",
            "description": "All your attacks explode in a 4m (+2.5m per stack) radius for a bonus 60% TOTAL damage to nearby enemies."
        },
        {
            "id": "ceremonial_dagger",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/76/Ceremonial_Dagger.png",
            "name": "Ceremonial Dagger",
            "description": "Killing an enemy fires out 3 homing daggers that deal 150% (+150% per stack) base damage."
        },
        {
            "id": "frost_relic",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/58/Frost_Relic.png",
            "name": "Frost Relic",
            "description": "Frost Relic Killing an enemy surrounds you with an ice storm that deals 1200% damage per second and slows enemies by 80% for 1.5s. The storm grows with every kill, increasing its radius by 2m. Stacks up to 18m (+12m per stack)."
        },
        {
            "id": "happiest_mask",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/d/d4/Happiest_Mask.png",
            "name": "Happiest Mask",
            "description": "Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage. Lasts 30s (+30s per stack)."
        },
        {
            "id": "h3ad-5t_v2",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/36/H3AD-5T_v2.png",
            "name": "H3AD-5T v2",
            "description": "Increase jump height. Creates a 5m-100m radius kinetic explosion on hitting the ground, dealing 1000%-10000% base damage that scales up with fall distance. Recharges in 10 (-50% per stack) seconds."
        },
        {
            "id": "nkuhanas_opinion",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c9/N%27kuhana%27s_Opinion.png",
            "name": "N'kuhana's Opinion",
            "description": "Store 100% (+100% per stack) of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage."
        },
        {
            "id": "unstable_tesla_coil",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e4/Unstable_Tesla_Coil.png",
            "name": "Unstable Tesla Coil",
            "description": "Fire out lightning that hits 3 (+2 per stack) enemies for 200% base damage every 0.5s. The Tesla Coil switches off every 10 seconds."
        },
        {
            "id": "57_leaf_clover",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e5/57_Leaf_Clover.png",
            "name": "57 Leaf Clover",
            "description": "All random effects are rolled +1 (+1 per stack) times for a favorable outcome."
        },
        {
            "id": "sentient_meat_hook",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e7/Sentient_Meat_Hook.png",
            "name": "Sentient Meat Hook",
            "description": "20% (+20% per stack) chance on hit to fire homing hooks at up to 10 (+5 per stack) enemies for 100% TOTAL damage."
        },
        {
            "id": "alien_head",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/25/Alien_Head.png",
            "name": "Alien Head",
            "description": "Reduce skill cooldowns by 25% (+25% per stack)."
        },
        {
            "id": "soulbound_catalyst",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/f1/Soulbound_Catalyst.png",
            "name": "Soulbound Catalyst",
            "description": "Kills reduce equipment cooldown by 4s (+2s per stack)."
        },
        {
            "id": "dios_best_friend",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/d/dc/Dio%27s_Best_Friend.png",
            "name": "Dio's Best Friend",
            "description": "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability."
        },
        {
            "id": "hardlight_afterburner",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/20/Hardlight_Afterburner.png",
            "name": "Hardlight Afterburner",
            "description": "Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%."
        },
        {
            "id": "wake_of_vultures",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/f8/Wake_of_Vultures.png",
            "name": "Wake of Vultures",
            "description": "Gain the power of any killed elite monster for 8s (+5s per stack)."
        },
        {
            "id": "brainstalks",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c0/Brainstalks.png",
            "name": "Brainstalks",
            "description": "Upon killing an elite monster, enter a frenzy for 4s (+4s per stack) where skills have 0.5s cooldowns."
        },
        {
            "id": "rejuvenation_rack",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/0a/Rejuvenation_Rack.png",
            "name": "Rejuvenation Rack",
            "description": "Heal +100% (+100% per stack) more."
        },
        {
            "id": "aegis",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e5/Aegis.png",
            "name": "Aegis",
            "description": "Healing past full grants you a temporary barrier for 50% (+50% per stack) of the amount you healed."
        },
        {
            "id": "shattering_justice",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/2d/Shattering_Justice.png",
            "name": "Shattering Justice",
            "description": "After hitting an enemy 5 times, reduce their armor by 60 for 8 (+8 per stack) seconds."
        },
        {
            "id": "resonance_disc",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/8/8d/Resonance_Disc.png",
            "name": "Resonance Disc",
            "description": "Killing 4 enemies in 7 seconds charges the Resonance Disc. The disc launches itself toward a target for 300% base damage (+300% per stack), piercing all enemies it doesn't kill, and then explodes for 1000% base damage (+1000% per stack). Returns to the user, striking all enemies along the way for 300% base damage (+300% per stack)."
        },
        {
            "id": "interstellar_desk_plant",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/1/1e/Interstellar_Desk_Plant.png",
            "name": "Interstellar Desk Plant",
            "description": "On kill, plant a healing fruit seed that grows into a plant after 5 seconds. The plant heals for 10% of maximum health every 0.5 second to all allies within 5m (+5.0m per stack). Lasts 10 seconds."
        }
    ],
    "y": [
        {
            "id": "titanic_knurl",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9f/Titanic_Knurl.png",
            "name": "Titanic Knurl",
            "description": "Increase maximum health by 40 (+40 per stack) and base health regeneration by +1.6 hp/s (+1.6 hp/s per stack)."
        },
        {
            "id": "queens_gland",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/0b/Queen%27s_Gland.png",
            "name": "Queen's Gland",
            "description": "Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health. Can have up to 1 (+1 per stack) Guards at a time."
        },
        {
            "id": "little_disciple",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/08/Little_Disciple.png",
            "name": "Little Disciple",
            "description": "Fire a tracking wisp for 300% (+300% per stack) damage. Fires every 1.6 seconds while sprinting. Fire rate increases with movement speed."
        },
        {
            "id": "genesis_loop",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c8/Genesis_Loop.png",
            "name": "Genesis Loop",
            "description": "Falling below 25% health causes you to explode, dealing 6000% base damage. Recharges every 30 / (2 +1 per stack) seconds."
        },
        {
            "id": "molten_perforator",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/71/Molten_Perforator.png",
            "name": "Molten Perforator",
            "description": "10% chance on hit to call forth 3 magma balls from an enemy, dealing 300% (+300% per stack) damage each."
        },
        {
            "id": "shatterspleen",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/cd/Shatterspleen.png",
            "name": "Shatterspleen",
            "description": "Gain 5% critical chance. Critical Strikes bleed enemies for 240% base damage. Bleeding enemies explode on death for 400% (+400% per stack) damage, plus an additional 15% (+15% per stack) of their maximum health."
        },
        {
            "id": "mired_urn",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/62/Mired_Urn.png",
            "name": "Mired Urn",
            "description": "While in combat, the nearest 1 (+1 per stack) enemies to you within 13m will be 'tethered' to you, dealing 100% damage per second, applying tar, and healing you for 100% of the damage dealt."
        },
        {
            "id": "charged_perforator",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/cc/Charged_Perforator.png",
            "name": "Charged Perforator",
            "description": "10% chance on hit to down a lightning strike, dealing 500% (+500% per stack) damage.",
        },
        {
            "id": "empathy_cores",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/51/Empathy_Cores.png",
            "name": "Empathy Cores",
            "description": "Every 30 seconds, summon two Solus Probes that gain +100% (+100% per stack) damage per ally on your team.",
        },
        {
            "id": "planula",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/a9/Planula.png",
            "name": "Planula",
            "description": "Heal from incoming damage for 15 (+15 per stack).",
        }
    ],
    "b": [
        {
            "id": "shaped_glass",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/ff/Shaped_Glass.png",
            "name": "Shaped Glass",
            "description": "Increase base damage by 100% (+100% per stack). Reduce maximum health by 50% (+50% per stack)."
        },
        {
            "id": "brittle_crown",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/ae/Brittle_Crown.png",
            "name": "Brittle Crown",
            "description": "30% chance on hit to gain 2 (+2 per stack) gold. Scales over time. Lose gold on taking damage equal to 100% (+100% per stack) of the maximum health percentage you lost."
        },
        {
            "id": "corpsebloom",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/31/Corpsebloom.png",
            "name": "Corpsebloom",
            "description": "Heal +100% (+100% per stack) more. All healing is applied over time. Can heal for a maximum of 10% (-50% per stack) of your health per second."
        },
        {
            "id": "transcendence",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/8/85/Transcendence.png",
            "name": "Transcendence",
            "description": "Convert all but 1 health into regenerating shields. Gain 50% (+25% per stack) maximum health."
        },
        {
            "id": "gesture_of_the_drowned",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c9/Gesture_of_the_Drowned.png",
            "name": "Gesture of the Drowned",
            "description": "Reduce Equipment cooldown by 50% (+15% per stack). Forces your Equipment to activate whenever it is off cooldown."
        },
        {
            "id": "strides_of_heresy",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/1/1a/Strides_of_Heresy.png",
            "name": "Strides of Heresy",
            "description": "Replace your Utility Skill with Shadowfade: 'Fade away, becoming intangible and gaining +30% movement speed. Heal for 18.2% (+18.2% per stack) of your maximum health. Lasts 3 (+3 per stack) seconds.'"
        },
        {
            "id": "visions_of_heresy",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/31/Visions_of_Heresy.png",
            "name": "Visions of Heresy",
            "description": "Replace your Primary Skill with Hungering Gaze: 'Fire a flurry of tracking shards that detonate after a delay, dealing 120% base damage. Hold up to 12 charges (+12 per stack) that reload after 2 seconds (+2 per stack).'"
        },
        {
            "id": "beads_of_fealty",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/07/Beads_of_Fealty.png",
            "name": "Beads of Fealty",
            "description": "Seems to do nothing... but..."
        },
        {
            "id": "focused_convergence",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/2c/Focused_Convergence.png",
            "name": "Focused Convergence",
            "description": "Teleporters charge 30% (+30% per stack) faster, but the size of the Teleporter zone is 50% (-50% per stack) smaller."
        },
        {
            "id": "defiant_gouge",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/b/b5/Defiant_Gouge.png",
            "name": "Defiant Gouge",
            "description": "Using a Shrine summons enemies (stronger per stack) nearby. Scales over time."
        },
        {
            "id": "mercurial_rachis",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/25/Mercurial_Rachis.png",
            "name": "Mercurial Rachis",
            "description": "Creates a Ward of Power in a random location nearby that buffs both enemies and allies within 16m (+50% per stack), causing them to deal +50% damage."
        },
        {
            "id": "purity",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/a2/Purity.png",
            "name": "Purity",
            "description": "All skill cooldowns are reduced by 2 (+1 per stack) seconds. All random effects are rolled +1 (+1 per stack) times for an unfavorable outcome."
        },
        {
            "id": "essence_of_heresy",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/3e/Essence_of_Heresy.png",
            "name": "Essence of Heresy",
            "description": "Replace your Secondary Skill with Slicing Maelstrom: 'Charge up a projectile that deals 875% damage per second to nearby enemies, exploding after 3 seconds to deal 700% damage and root enemies for 3 (+3 per stack) seconds. Recharges after 5 (+5 per stack) seconds.'"
        },
        {
            "id": "hooks_of_heresy",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/66/Hooks_of_Heresy.png",
            "name": "Hooks of Heresy",
            "description": "Replace your Special Skill with Ruin: 'Dealing damage adds a stack of Ruin for 10 (+10 per stack) seconds. Activating the skill detonates all Ruin stacks at unlimited range, dealing 300% damage plus 120% damage per stack of Ruin. Recharges after 8 (+8 per stack) seconds.'",
        }
    ]
}