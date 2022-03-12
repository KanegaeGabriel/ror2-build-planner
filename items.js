// w = White (Common)
    // g = Green (Uncommon)
    // r =Red (Legendary)
    // y = Yellow (Boss / Planet)
    // b = Blue (Lunar Items / Equipment)
    // p = Purple (Void)
    // o = Orange (Equipment)
    
    const itemDataByColor = {
    "w": [
        {
            "id": "backup_magazine",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/f3/Backup_Magazine.png/revision/latest/scale-to-width-down/64?cb=20200129193022",
            "name": "Backup Magazine",
            "description": "Add +1 (+1 per stack) charge of your Secondary skill."
        },
        {
            "id": "bison_steak",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9f/Bison_Steak.png/revision/latest/scale-to-width-down/64?cb=20210326093605",
            "name": "Bison Steak",
            "description": "Increases maximum health by 25 (+25 per stack)."
        },
        {
            "id": "bundle_of_fireworks",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/3d/Bundle_of_Fireworks.png/revision/latest/scale-to-width-down/64?cb=20200129193032",
            "name": "Bundle of Fireworks",
            "description": "Activating an interactable launches 8 (+4 per stack) fireworks that deal 300% base damage."
        },
        {
            "id": "bustling_fungus",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/33/Bustling_Fungus.png/revision/latest/scale-to-width-down/64?cb=20210329070041",
            "name": "Bustling Fungus",
            "description": "After standing still for 1 second, create a zone that heals for 4.5% (+2.25% per stack) of your health every second to all allies within 3m (+1.5m per stack)."
        },
        {
            "id": "cautious_slug",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c6/Cautious_Slug.png/revision/latest/scale-to-width-down/64?cb=20210329070118",
            "name": "Cautious Slug",
            "description": "Increases base health regeneration by +3 hp/s (+3 hp/s per stack) while outside of combat."
        },
        {
            "id": "crowbar",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c0/Crowbar.png/revision/latest/scale-to-width-down/64?cb=20200129193046",
            "name": "Crowbar",
            "description": "Deal +75% (+75% per stack) damage to enemies above 90% health."
        },
        {
            "id": "delicate_watch",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c6/Delicate_Watch.png/revision/latest/scale-to-width-down/64?cb=20220302043224",
            "name": "Delicate Watch",
            "description": "Increase damage by 20% (+20% per stack). Taking damage to below 25% health breaks this item."
        },
        {
            "id": "energy_drink",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/7e/Energy_Drink.png/revision/latest/scale-to-width-down/64?cb=20200129193054",
            "name": "Energy Drink",
            "description": "Sprint speed is improved by 25% (+25% per stack)."
        },
        {
            "id": "focus_crystal",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/59/Focus_Crystal.png/revision/latest/scale-to-width-down/64?cb=20200129235331",
            "name": "Focus Crystal",
            "description": "Increase damage to enemies within 13m by 20% (+20% per stack)."
        },
        {
            "id": "gasoline",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/6e/Gasoline.png/revision/latest/scale-to-width-down/64?cb=20200129193059",
            "name": "Gasoline",
            "description": "Killing an enemy ignites all enemies within 12m (+4m per stack) for 150% base damage. Additionally, enemies burn for 150% (+75% per stack) base damage."
        },
        {
            "id": "item_scrap_white",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/99/Item_Scrap%2C_White.png/revision/latest/scale-to-width-down/64?cb=20200811165018",
            "name": "Item Scrap, White",
            "description": "Does nothing. Prioritized when used with 3D Printers."
        },
        {
            "id": "lens-makers_glasses",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/23/Lens-Maker%27s_Glasses.png/revision/latest/scale-to-width-down/64?cb=20200129193116",
            "name": "Lens-Maker's Glasses",
            "description": "Your attacks have a 10% (+10% per stack) chance to 'Critically Strike', dealing double damage."
        },
        {
            "id": "medkit",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/0f/Medkit.png/revision/latest/scale-to-width-down/64?cb=20200129193118",
            "name": "Medkit",
            "description": "2 seconds after getting hurt, heal for 20 plus an additional 5% (+5% per stack) of maximum health."
        },
        {
            "id": "mocha",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/4/48/Mocha.png/revision/latest/scale-to-width-down/64?cb=20220302041305",
            "name": "Mocha",
            "description": "Increases attack speed by 7.5% (+7.5 per stack) and movement speed by 7% (+7% per stack)."
        },
        {
            "id": "monster_tooth",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/3b/Monster_Tooth.png/revision/latest/scale-to-width-down/64?cb=20200129193120",
            "name": "Monster Tooth",
            "description": "Killing an enemy spawns a healing orb that heals for 8 plus an additional 2% (+2% per stack) of maximum health."
        },
        {
            "id": "oddly-shaped_opal",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/f3/Oddly-shaped_Opal.png/revision/latest/scale-to-width-down/64?cb=20220302043224",
            "name": "Oddly-shaped Opal",
            "description": "Increase armor by 100 (+100 per stack) while out of danger."
        },
        {
            "id": "pauls_goat_hoof",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/4/4a/Paul%27s_Goat_Hoof.png/revision/latest/scale-to-width-down/64?cb=20210329070130",
            "name": "Paul's Goat Hoof",
            "description": "Increases movement speed by 14% (+14% per stack)."
        },
        {
            "id": "personal_shield_generator",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e0/Personal_Shield_Generator.png/revision/latest/scale-to-width-down/64?cb=20200129193129",
            "name": "Personal Shield Generator",
            "description": "Gain a shield equal to 8% (+8% per stack) of your maximum health. Recharges outside of danger."
        },
        {
            "id": "power_elixir",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/51/Power_Elixir.png/revision/latest/scale-to-width-down/64?cb=20220302052852",
            "name": "Power Elixir",
            "description": "Taking damage to below 25% health consumes this item, healing you for 75% of maximum health."
        },
        {
            "id": "repulsion_armor_plate",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/aa/Repulsion_Armor_Plate.png/revision/latest/scale-to-width-down/64?cb=20200331155122",
            "name": "Repulsion Armor Plate",
            "description": "Reduce all incoming damage by 5 (+5 per stack). Cannot be reduced below 1."
        },
        {
            "id": "roll_of_pennies",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e9/Roll_of_Pennies.png/revision/latest/scale-to-width-down/64?cb=20220302043224",
            "name": "Roll of Pennies",
            "description": "Gain 3 (+3 per stack) gold on taking damage from an enemy. Scales over time."
        },
        {
            "id": "rusted_key",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9b/Rusted_Key.png/revision/latest/scale-to-width-down/64?cb=20210326082529",
            "name": "Rusted Key",
            "description": "A hidden cache containing an item (80%/20%) will appear in a random location on each stage. Opening the cache consumes this item."
        },
        {
            "id": "soldiers_syringe",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/f2/Soldier%27s_Syringe.png/revision/latest/scale-to-width-down/64?cb=20210329065946",
            "name": "Soldier's Syringe",
            "description": "Increases attack speed by 15% (+15% per stack)."
        },
        {
            "id": "sticky_bomb",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/74/Sticky_Bomb.png/revision/latest/scale-to-width-down/64?cb=20200129193204",
            "name": "Sticky Bomb",
            "description": "5% (+5% per stack) chance on hit to attach a bomb to an enemy, detonating for 180% TOTAL damage."
        },
        {
            "id": "stun_grenade",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/27/Stun_Grenade.png/revision/latest/scale-to-width-down/64?cb=20200129193205",
            "name": "Stun Grenade",
            "description": "5% (+5% on stack) chance on hit to stun enemies for 2 seconds."
        },
        {
            "id": "topaz_brooch",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c5/Topaz_Brooch.png/revision/latest/scale-to-width-down/64?cb=20200129193209",
            "name": "Topaz Brooch",
            "description": "Gain a temporary barrier on kill for 15 health (+15 per stack)."
        },
        {
            "id": "tougher_times",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/39/Tougher_Times.png/revision/latest/scale-to-width-down/64?cb=20200129193210",
            "name": "Tougher Times",
            "description": "15% (+15% per stack) chance to block incoming damage. Unaffected by luck."
        },
        {
            "id": "tri-tip_dagger",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/1/17/Tri-Tip_Dagger.png/revision/latest/scale-to-width-down/64?cb=20200129193212",
            "name": "Tri-Tip Dagger",
            "description": "10% (+10% per stack) chance to bleed an enemy for 240% base damage."
        },
        {
            "id": "warbanner",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/f0/Warbanner.png/revision/latest/scale-to-width-down/64?cb=20200306005854",
            "name": "Warbanner",
            "description": "On level up or starting the Teleporter event, drop a banner that strengthens all allies within 16m (+8m per stack). Raise attack and movement speed by 30%."
        }
    ],
    "g": [
        {
            "id": "bandolier",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/62/Bandolier.png/revision/latest/scale-to-width-down/64?cb=20200129193024",
            "name": "Bandolier",
            "description": "18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns."
        },
        {
            "id": "berzerkers_pauldron",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/a6/Berzerker%27s_Pauldron.png/revision/latest/scale-to-width-down/64?cb=20200129193026",
            "name": "Berzerker's Pauldron",
            "description": "Killing 4 enemies within 1 second sends you into a frenzy for 6s (+4s per stack). Increases movement speed by 50% and attack speed by 100%."
        },
        {
            "id": "chronobauble",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/38/Chronobauble.png/revision/latest/scale-to-width-down/64?cb=20200129193040",
            "name": "Chronobauble",
            "description": "Slow enemies on hit for -60% movement speed for 2s (+2s per stack)."
        },
        {
            "id": "death_mark",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/34/Death_Mark.png/revision/latest/scale-to-width-down/64?cb=20200331153433",
            "name": "Death Mark",
            "description": "Enemies with 4 or more debuffs are marked for death, increasing damage taken by 50% from all sources for 7 (+7 per stack) seconds."
        },
        {
            "id": "fuel_cell",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/4/4d/Fuel_Cell.png/revision/latest/scale-to-width-down/64?cb=20200129193058",
            "name": "Fuel Cell",
            "description": "Hold an additional equipment charge (+1 per stack). Reduce equipment cooldown by 15% (+15% per stack)."
        },
        {
            "id": "ghors_tome",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9a/Ghor%27s_Tome.png/revision/latest/scale-to-width-down/64?cb=20200129235334",
            "name": "Ghor's Tome",
            "description": "4% (+4% on stack) chance on kill to drop a treasure worth $25. Scales over time."
        },
        {
            "id": "harvesters_scythe",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e1/Harvester%27s_Scythe.png/revision/latest/scale-to-width-down/64?cb=20200129193108",
            "name": "Harvester's Scythe",
            "description": "Gain 5% critical chance. Critical strikes heal for 8 (+4 per stack) health."
        },
        {
            "id": "hopoo_feather",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/3a/Hopoo_Feather.png/revision/latest/scale-to-width-down/64?cb=20200129193111",
            "name": "Hopoo Feather",
            "description": "Gain +1 (+1 per stack) maximum jump count."
        },
        {
            "id": "hunters_harpoon",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c4/Hunter%27s_Harpoon.png/revision/latest/scale-to-width-down/64?cb=20220302043224",
            "name": "Hunter's Harpoon",
            "description": "Killing an enemy increases movement speed by 125%, fading over 1 (+0.5 per stack) seconds."
        },
        {
            "id": "ignition_tank",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/ed/Ignition_Tank.png/revision/latest/scale-to-width-down/64?cb=20220302052615",
            "name": "Ignition Tank",
            "description": "Ignite effects deal +300% (+300% per stack) more damage over time."
        },
        {
            "id": "infusion",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/7d/Infusion.png/revision/latest/scale-to-width-down/64?cb=20200129193113",
            "name": "Infusion",
            "description": "Killing an enemy increases your health permanently by 1 (+1 per stack), up to a maximum of 100 (+100 per stack) health."
        },
        {
            "id": "item_scrap_green",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/01/Item_Scrap%2C_Green.png/revision/latest/scale-to-width-down/64?cb=20200811165016",
            "name": "Item Scrap, Green",
            "description": "Does nothing. Prioritized when used with 3D Printers."
        },
        {
            "id": "kjaros_band",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/eb/Kjaro%27s_Band.png/revision/latest/scale-to-width-down/64?cb=20200129193114",
            "name": "Kjaro's Band",
            "description": "Hits that deal more than 400% damage also blasts enemies with a runic flame tornado, dealing 300% (+300% per stack) TOTAL damage over time. Recharges every 10 seconds."
        },
        {
            "id": "leeching_seed",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/a0/Leeching_Seed.png/revision/latest/scale-to-width-down/64?cb=20210329070001",
            "name": "Leeching Seed",
            "description": "Dealing damage heals you for 1 (+1 per stack) health."
        },
        {
            "id": "lepton_daisy",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/73/Lepton_Daisy.png/revision/latest/scale-to-width-down/64?cb=20200129235338",
            "name": "Lepton Daisy",
            "description": "Release a healing nova during the Teleporter event, healing all nearby allies for 50% of their maximum health. Occurs 1 (+1 per stack) times."
        },
        {
            "id": "old_guillotine",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/8/8d/Old_Guillotine.png/revision/latest/scale-to-width-down/64?cb=20200201131530",
            "name": "Old Guillotine",
            "description": "Instantly kill Elite monsters below 13% (+13% per stack) health."
        },
        {
            "id": "old_war_stealthkit",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/2c/Old_War_Stealthkit.png/revision/latest/scale-to-width-down/64?cb=20200129193125",
            "name": "Old War Stealthkit",
            "description": "Falling below 25% health causes you to gain 40% movement speed and invisibility for 5s. Recharges every 30 seconds (-50% per stack)."
        },
        {
            "id": "predatory_instincts",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/39/Predatory_Instincts.png/revision/latest/scale-to-width-down/64?cb=20200129193131",
            "name": "Predatory Instincts",
            "description": "Gain 5% critical chance. Critical strikes increase attack speed by 12%. Maximum cap of 36% (+24% per stack) attack speed."
        },
        {
            "id": "razorwire",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/ac/Razorwire.png/revision/latest/scale-to-width-down/64?cb=20200129235340",
            "name": "Razorwire",
            "description": "Getting hit causes you to explode in a burst of razors, dealing 160% damage. Hits up to 5 (+2 per stack) targets in a 25m (+10m per stack) radius"
        },
        {
            "id": "red_whip",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/2a/Red_Whip.png/revision/latest/scale-to-width-down/64?cb=20200201131611",
            "name": "Red Whip",
            "description": "Leaving combat boosts your movement speed by 30% (+30% per stack)."
        },
        {
            "id": "regenerating_scrap",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/77/Regenerating_Scrap.png/revision/latest/scale-to-width-down/64?cb=20220302043224",
            "name": "Regenerating Scrap",
            "description": "Does nothing. Prioritized when used with Uncommon 3D Printers. At the start of each stage, it regenerates."
        },
        {
            "id": "rose_buckler",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/2f/Rose_Buckler.png/revision/latest/scale-to-width-down/64?cb=20200129193143",
            "name": "Rose Buckler",
            "description": "Increase armor by 30 (+30 per stack) while sprinting."
        },
        {
            "id": "runalds_band",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/05/Runald%27s_Band.png/revision/latest/scale-to-width-down/64?cb=20200129193147",
            "name": "Runald's Band",
            "description": "Hits that deal more than 400% damage also blasts enemies with a runic ice blast, slowing them by 80% for 3s (+3s per stack) and dealing 250% (+250% per stack) TOTAL damage. Recharges every 10 seconds."
        },
        {
            "id": "shipping_request_form",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/4/44/Shipping_Request_Form.png/revision/latest/scale-to-width-down/64?cb=20220302060147",
            "name": "Shipping Request Form",
            "description": "A delivery containing 2 items (79%/20%/1%) will appear in a random location on each stage. (Increases rarity chances of the items per stack)."
        },
        {
            "id": "shuriken",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/ac/Shuriken.png/revision/latest/scale-to-width-down/64?cb=20220302043445",
            "name": "Shuriken",
            "description": "Activating your Primary skill also throws a shuriken that deals 400% (+100% per stack) base damage. You can hold up to 3 (+1 per stack) shurikens which all reload over 10 seconds."
        },
        {
            "id": "squid_polyp",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/d/de/Squid_Polyp.png/revision/latest/scale-to-width-down/64?cb=20210329071113",
            "name": "Squid Polyp",
            "description": "Activating an interactable summons a Squid Turret that attacks nearby enemies at 100% (+100% per stack) attack speed. Lasts 30 seconds."
        },
        {
            "id": "ukulele",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/98/Ukulele.png/revision/latest/scale-to-width-down/64?cb=20200129193213",
            "name": "Ukulele",
            "description": "25% chance to fire chain lightning for 80% TOTAL damage on up to 3 (+2 per stack) targets within 20m (+2m per stack)."
        },
        {
            "id": "war_horn",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9c/War_Horn.png/revision/latest/scale-to-width-down/64?cb=20200129193217",
            "name": "War Horn",
            "description": "Activating your Equipment gives you +70% attack speed for 8s (+4s per stack)."
        },
        {
            "id": "wax_quail",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/6c/Wax_Quail.png/revision/latest/scale-to-width-down/64?cb=20200129193218",
            "name": "Wax Quail",
            "description": "Jumping while sprinting boosts you forward by 10m (+10m per stack)."
        },
        {
            "id": "will-o-the-wisp",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c4/Will-o%27-the-wisp.png/revision/latest/scale-to-width-down/64?cb=20200129193219",
            "name": "Will-o'-the-wisp",
            "description": "On killing an enemy, spawn a lava pillar in a 12m (+2.4m per stack) radius for 260% (+156% per stack) base damage."
        }
    ],
    "r": [
        {
            "id": "aegis",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e5/Aegis.png/revision/latest/scale-to-width-down/64?cb=20200129193000",
            "name": "Aegis",
            "description": "Healing past full grants you a temporary barrier for 50% (+50% per stack) of the amount you healed."
        },
        {
            "id": "alien_head",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/25/Alien_Head.png/revision/latest/scale-to-width-down/64?cb=20200129193016",
            "name": "Alien Head",
            "description": "Reduce skill cooldowns by 25% (+25% per stack)."
        },
        {
            "id": "bens_raincoat",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/25/Ben%27s_Raincoat.png/revision/latest/scale-to-width-down/64?cb=20220302043224",
            "name": "Ben's Raincoat",
            "description": "Whenever you would receive a debuff, prevent it. Increases maximum health by 100 (+100 per stack)."
        },
        {
            "id": "bottled_chaos",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/4/42/Bottled_Chaos.png/revision/latest/scale-to-width-down/64?cb=20220302043224",
            "name": "Bottled Chaos",
            "description": "Trigger a random equipment effect 1 (+1 per stack) time(s)."
        },
        {
            "id": "brainstalks",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c0/Brainstalks.png/revision/latest/scale-to-width-down/64?cb=20200129193028",
            "name": "Brainstalks",
            "description": "Upon killing an elite monster, enter a frenzy for 4s (+4s per stack) where skills have 0.5s cooldowns."
        },
        {
            "id": "brilliant_behemoth",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/fa/Brilliant_Behemoth.png/revision/latest/scale-to-width-down/64?cb=20200129193029",
            "name": "Brilliant Behemoth",
            "description": "All your attacks explode in a 4m (+2.5m per stack) radius for a bonus 60% TOTAL damage to nearby enemies."
        },
        {
            "id": "ceremonial_dagger",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/76/Ceremonial_Dagger.png/revision/latest/scale-to-width-down/64?cb=20200129193038",
            "name": "Ceremonial Dagger",
            "description": "Killing an enemy fires out 3 homing daggers that deal 150% (+150% per stack) base damage."
        },
        {
            "id": "defensive_microbots",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/d/dd/Defensive_Microbots.png/revision/latest/scale-to-width-down/64?cb=20200811174752",
            "name": "Defensive Microbots",
            "description": "Shoot down 1 (+1 per stack) projectiles within 20m every 0.5 seconds. Recharge rate scales with attack speed."
        },
        {
            "id": "dios_best_friend",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/d/dc/Dio%27s_Best_Friend.png/revision/latest/scale-to-width-down/64?cb=20200129193050",
            "name": "Dio's Best Friend",
            "description": "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability."
        },
        {
            "id": "frost_relic",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/58/Frost_Relic.png/revision/latest/scale-to-width-down/64?cb=20200129193056",
            "name": "Frost Relic",
            "description": "Killing an enemy surrounds you with an ice storm that deals 1200% damage per second and slows enemies by 80% for 1.5s. The storm grows with every kill, increasing its radius by 2m. Stacks up to 18m (+12m per stack)."
        },
        {
            "id": "h3ad-5t_v2",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/36/H3AD-5T_v2.png/revision/latest/scale-to-width-down/64?cb=20200129193104",
            "name": "H3AD-5T v2",
            "description": "Increase jump height. Creates a 5m-100m radius kinetic explosion on hitting the ground, dealing 1000%-10000% base damage that scales up with fall distance. Recharges in 10 (-50% per stack) seconds."
        },
        {
            "id": "happiest_mask",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/d/d4/Happiest_Mask.png/revision/latest/scale-to-width-down/64?cb=20200129193106",
            "name": "Happiest Mask",
            "description": "Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage. Lasts 30s (+30s per stack)."
        },
        {
            "id": "hardlight_afterburner",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/20/Hardlight_Afterburner.png/revision/latest/scale-to-width-down/64?cb=20200129193107",
            "name": "Hardlight Afterburner",
            "description": "Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%."
        },
        {
            "id": "interstellar_desk_plant",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/1/1e/Interstellar_Desk_Plant.png/revision/latest/scale-to-width-down/64?cb=20200331153435",
            "name": "Interstellar Desk Plant",
            "description": "On kill, plant a healing fruit seed that grows into a plant after 5 seconds.The plant heals for 5% of maximum health every 0.5 second to all allies within 10m (+5.0m per stack). Lasts 10 seconds."
        },
        {
            "id": "item_scrap_red",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/4/48/Item_Scrap%2C_Red.png/revision/latest/scale-to-width-down/64?cb=20200811165017",
            "name": "Item Scrap, Red",
            "description": "Does nothing. Prioritized when used with 3D Printers."
        },
        {
            "id": "laser_scope",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/00/Laser_Scope.png/revision/latest/scale-to-width-down/64?cb=20220302050022",
            "name": "Laser Scope",
            "description": "Critical Strikes deal an additional 100% damage (+100% per stack)."
        },
        {
            "id": "nkuhanas_opinion",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c9/N%27kuhana%27s_Opinion.png/revision/latest/scale-to-width-down/64?cb=20200129193121",
            "name": "N'kuhana's Opinion",
            "description": "Store 100% (+100% per stack) of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage."
        },
        {
            "id": "pocket_icbm",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/ff/Pocket_I.C.B.M..png/revision/latest/scale-to-width-down/64?cb=20220302043224",
            "name": "Pocket I.C.B.M.",
            "description": "All missile items and equipment fire an additional 2 missiles. Increase missile damage by 0% (+50% per stack)"
        },
        {
            "id": "rejuvenation_rack",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/0a/Rejuvenation_Rack.png/revision/latest/scale-to-width-down/64?cb=20200129193141",
            "name": "Rejuvenation Rack",
            "description": "Heal +100% (+100% per stack) more."
        },
        {
            "id": "resonance_disc",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/8/8d/Resonance_Disc.png/revision/latest/scale-to-width-down/64?cb=20200129235341",
            "name": "Resonance Disc",
            "description": "Killing 4 enemies in 7 seconds charges the Resonance Disc. The disc launches itself toward a target for 300% base damage (+300% per stack), piercing all enemies it doesn't kill, and then explodes for 1000% base damage (+1000% per stack). Returns to the user, striking all enemies along the way for 300% base damage (+300% per stack)."
        },
        {
            "id": "sentient_meat_hook",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e7/Sentient_Meat_Hook.png/revision/latest/scale-to-width-down/64?cb=20200129193151",
            "name": "Sentient Meat Hook",
            "description": "20% (+20% per stack) chance on hit to fire homing hooks at up to 10 (+5 per stack) enemies for 100% TOTAL damage."
        },
        {
            "id": "shattering_justice",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/2d/Shattering_Justice.png/revision/latest/scale-to-width-down/64?cb=20200129235342",
            "name": "Shattering Justice",
            "description": "After hitting an enemy 5 times, reduce their armor by 60 for 8 (+8 per stack) seconds."
        },
        {
            "id": "soulbound_catalyst",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/f1/Soulbound_Catalyst.png/revision/latest/scale-to-width-down/64?cb=20200129193159",
            "name": "Soulbound Catalyst",
            "description": "Kills reduce equipment cooldown by 4s (+2s per stack)."
        },
        {
            "id": "spare_drone_parts",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/8/85/Spare_Drone_Parts.png/revision/latest/scale-to-width-down/64?cb=20220302050131",
            "name": "Spare Drone Parts",
            "description": "Gain Col. Droneman. Drones gain +50% (+50% per stack) attack speed and cooldown reduction. Drones gain 10% chance to fire a missile on hit, dealing 300% TOTAL damage. Drones gain an automatic chain gun that deals 6x100% damage, bouncing to 2 enemies."
        },
        {
            "id": "symbiotic_scorpion",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/91/Symbiotic_Scorpion.png/revision/latest/scale-to-width-down/64?cb=20220302052918",
            "name": "Symbiotic Scorpion",
            "description": "100% chance on hit to reduce armor by 2 (+2 per stack) permanently."
        },
        {
            "id": "unstable_tesla_coil",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e4/Unstable_Tesla_Coil.png/revision/latest/scale-to-width-down/64?cb=20200129193214",
            "name": "Unstable Tesla Coil",
            "description": "Fire out lightning that hits 3 (+2 per stack) enemies for 200% base damage every 0.5s. The Tesla Coil switches off every 10 seconds."
        },
        {
            "id": "wake_of_vultures",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/f8/Wake_of_Vultures.png/revision/latest/scale-to-width-down/64?cb=20200129193215",
            "name": "Wake of Vultures",
            "description": "Gain the power of any killed elite monster for 8s (+5s per stack)."
        }
    ],
    "y": [
        {
            "id": "charged_perforator",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/cc/Charged_Perforator.png/revision/latest/scale-to-width-down/64?cb=20210326044120",
            "name": "Charged Perforator",
            "description": "10% chance on hit to down a lightning strike, dealing 500% (+500% per stack) damage."
        },
        {
            "id": "defense_nucleus",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/1/10/Defense_Nucleus.png/revision/latest/scale-to-width-down/64?cb=20220302095820",
            "name": "Defense Nucleus",
            "description": "Killing elite monsters spawns an Alpha Construct. Limited to 4 (+4 per stack)."
        },
        {
            "id": "empathy_cores",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/51/Empathy_Cores.png/revision/latest/scale-to-width-down/64?cb=20210326044118",
            "name": "Empathy Cores",
            "description": "Every 30 seconds, summon two Solus Probes that gain +100% (+100% per stack) damage per ally on your team."
        },
        {
            "id": "genesis_loop",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c8/Genesis_Loop.png/revision/latest/scale-to-width-down/64?cb=20200129235333",
            "name": "Genesis Loop",
            "description": "Falling below 25% health causes you to explode, dealing 6000% base damage. Recharges every 30 / (2 +1 per stack) seconds ."
        },
        {
            "id": "halcyon_seed",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e6/Halcyon_Seed.png/revision/latest/scale-to-width-down/64?cb=20200129193105",
            "name": "Halcyon Seed",
            "description": "Summon Aurelionite during the teleporter event. It has 100% (+50% per stack) damage and 100% (+100% per stack) health."
        },
        {
            "id": "irradiant_pearl",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/ef/Irradiant_Pearl.png/revision/latest/scale-to-width-down/64?cb=20200129235334",
            "name": "Irradiant Pearl",
            "description": "Increases ALL stats by 10% (+10% per stack)."
        },
        {
            "id": "item_scrap_yellow",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/7f/Item_Scrap%2C_Yellow.png/revision/latest/scale-to-width-down/64?cb=20200811165019",
            "name": "Item Scrap, Yellow",
            "description": "Does nothing. Prioritized when used with 3D Printers."
        },
        {
            "id": "little_disciple",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/08/Little_Disciple.png/revision/latest/scale-to-width-down/64?cb=20200129193117",
            "name": "Little Disciple",
            "description": "Fire a tracking wisp for 300% (+300% per stack) damage. Fires every 1.6 seconds while sprinting. Fire rate increases with movement speed."
        },
        {
            "id": "mired_urn",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/62/Mired_Urn.png/revision/latest/scale-to-width-down/64?cb=20200811165020",
            "name": "Mired Urn",
            "description": "While in combat, the nearest 1 (+1 per stack) enemies to you within 13m will be 'tethered' to you, dealing 100% damage per second, applying tar, and healing you for 100% of the damage dealt."
        },
        {
            "id": "molten_perforator",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/71/Molten_Perforator.png/revision/latest/scale-to-width-down/64?cb=20200811165021",
            "name": "Molten Perforator",
            "description": "10% chance on hit to call forth 3 magma balls from an enemy, dealing 300% (+300% per stack) damage each."
        },
        {
            "id": "pearl",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/73/Pearl.png/revision/latest/scale-to-width-down/64?cb=20200129235340",
            "name": "Pearl",
            "description": "Increases maximum health by 10% (+10% per stack)."
        },
        {
            "id": "planula",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/a9/Planula.png/revision/latest/scale-to-width-down/64?cb=20210326044119",
            "name": "Planula",
            "description": "Heal from incoming damage for 15 (+15 per stack)."
        },
        {
            "id": "queens_gland",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/0b/Queen%27s_Gland.png/revision/latest/scale-to-width-down/64?cb=20200129193137",
            "name": "Queen's Gland",
            "description": "Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health. Can have up to 1 (+1 per stack) Guards at a time."
        },
        {
            "id": "shatterspleen",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/cd/Shatterspleen.png/revision/latest/scale-to-width-down/64?cb=20200811165023",
            "name": "Shatterspleen",
            "description": "Gain 5% critical chance. Critical Strikes bleed enemies for 240% base damage. Bleeding enemies explode on death for 400% (+400% per stack) damage, plus an additional 15% (+15% per stack) of their maximum health."
        },
        {
            "id": "titanic_knurl",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9f/Titanic_Knurl.png/revision/latest/scale-to-width-down/64?cb=20200129193208",
            "name": "Titanic Knurl",
            "description": "Increase maximum health by 40 (+40 per stack) and base health regeneration by +1.6 hp/s (+1.6 hp/s per stack)."
        }
    ],
    "b": [
        {
            "id": "brittle_crown",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/ae/Brittle_Crown.png/revision/latest/scale-to-width-down/64?cb=20200129193030",
            "name": "Brittle Crown",
            "description": "30% chance on hit to gain 2 (+2 per stack) gold. Scales over time.Lose gold on taking damage equal to 100% (+100% per stack) of the maximum health percentage you lost."
        },
        {
            "id": "corpsebloom",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/31/Corpsebloom.png/revision/latest/scale-to-width-down/64?cb=20200129193042",
            "name": "Corpsebloom",
            "description": "Heal +100% (+100% per stack) more. All healing is applied over time. Can heal for a maximum of 10% (-50% per stack) of your health per second."
        },
        {
            "id": "defiant_gouge",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/b/b5/Defiant_Gouge.png/revision/latest/scale-to-width-down/64?cb=20200811165016",
            "name": "Defiant Gouge",
            "description": "Using a Shrine summons enemies (stronger per stack) nearby. Scales over time."
        },
        {
            "id": "egocentrism",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/90/Egocentrism.png/revision/latest/scale-to-width-down/64?cb=20220302043224",
            "name": "Egocentrism",
            "description": "Every 3 (-50% per stack) seconds, gain an orbiting bomb that detonates on impact for 360% damage, up to a maximum of 3 bombs (+1 per stack). Every 60 seconds, a random item is converted into this item."
        },
        {
            "id": "essence_of_heresy",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/3e/Essence_of_Heresy.png/revision/latest/scale-to-width-down/64?cb=20210326043943",
            "name": "Essence of Heresy",
            "description": "Replace your Special Skill with Ruin.Dealing damage adds a stack of Ruin for 10 (+10 per stack) seconds. Activating the skill detonates all Ruin stacks at unlimited range, dealing 300% damage plus 120% damage per stack of Ruin. Recharges after 8 (+8 per stack) seconds."
        },
        {
            "id": "eulogy_zero",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/1/12/Eulogy_Zero.png/revision/latest/scale-to-width-down/64?cb=20220302060146",
            "name": "Eulogy Zero",
            "description": "Items have a 5% (+5% per stack) chance to become a Lunar item instead."
        },
        {
            "id": "focused_convergence",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/2c/Focused_Convergence.png/revision/latest/scale-to-width-down/64?cb=20200331153434",
            "name": "Focused Convergence",
            "description": "Teleporters charge 30% (+30% per stack) faster, but the size of the Teleporter zone is 50% (-50% per stack) smaller."
        },
        {
            "id": "gesture_of_the_drowned",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c9/Gesture_of_the_Drowned.png/revision/latest/scale-to-width-down/64?cb=20200129193100",
            "name": "Gesture of the Drowned",
            "description": "Reduce Equipment cooldown by 50% (+15% per stack). Forces your Equipment to activate whenever it is off cooldown."
        },
        {
            "id": "hooks_of_heresy",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/66/Hooks_of_Heresy.png/revision/latest/scale-to-width-down/64?cb=20210326043944",
            "name": "Hooks of Heresy",
            "description": "Replace your Secondary Skill  with Slicing Maelstrom.Charge up a projectile that deals 875% damage per second to nearby enemies, exploding after 3 seconds to deal 700% damage and root enemies for 3 (+3 per stack) seconds. Recharges after 5 (+5 per stack) seconds."
        },
        {
            "id": "light_flux_pauldron",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/6e/Light_Flux_Pauldron.png/revision/latest/scale-to-width-down/64?cb=20220302095820",
            "name": "Light Flux Pauldron",
            "description": "Decrease skill cooldowns by 50% (+50% per stack). Decrease attack speed by 50% (+50% per stack)."
        },
        {
            "id": "mercurial_rachis",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/25/Mercurial_Rachis.png/revision/latest/scale-to-width-down/64?cb=20200811165019",
            "name": "Mercurial Rachis",
            "description": "Creates a Ward of Power in a random location nearby that buffs both enemies and allies within 16m (+50% per stack), causing them to deal +50% damage."
        },
        {
            "id": "purity",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/a2/Purity.png/revision/latest/scale-to-width-down/64?cb=20200811165022",
            "name": "Purity",
            "description": "All skill cooldowns are reduced by 2 (+1 per stack) seconds. All random effects are rolled +1 (+1 per stack) times for an unfavorable outcome."
        },
        {
            "id": "shaped_glass",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/ff/Shaped_Glass.png/revision/latest/scale-to-width-down/64?cb=20200129193153",
            "name": "Shaped Glass",
            "description": "Increase base damage by 100% (+100% per stack). Reduce maximum health by 50% (+50% per stack)."
        },
        {
            "id": "stone_flux_pauldron",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/b/b1/Stone_Flux_Pauldron.png/revision/latest/scale-to-width-down/64?cb=20220302095820",
            "name": "Stone Flux Pauldron",
            "description": "Increase max health by 100% (+100% per stack). Reduce movement speed by 50% (+50% per stack)."
        },
        {
            "id": "strides_of_heresy",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/1/1a/Strides_of_Heresy.png/revision/latest/scale-to-width-down/64?cb=20200129235345",
            "name": "Strides of Heresy",
            "description": "Replace your Utility Skill with Shadowfade.Fade away, becoming intangible and gaining +30% movement speed. Heal for 18.2% (+18.2% per stack) of your maximum health. Lasts 3 (+3 per stack) seconds."
        },
        {
            "id": "transcendence",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/8/85/Transcendence.png/revision/latest/scale-to-width-down/64?cb=20200129193211",
            "name": "Transcendence",
            "description": "Convert all but 1 health into regenerating shields. Gain 50% (+25% per stack) maximum health."
        },
        {
            "id": "visions_of_heresy",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/31/Visions_of_Heresy.png/revision/latest/scale-to-width-down/64?cb=20200129235347",
            "name": "Visions of Heresy",
            "description": "Replace your Primary Skill with Hungering Gaze.Fire a flurry of tracking shards that detonate after a delay, dealing 120% base damage. Hold up to 12 charges (+12 per stack) that reload after 2 seconds (+2 per stack)."
        }
    ],
    "p": [
        {
            "id": "encrusted_key",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/fa/Encrusted_Key.png/revision/latest/scale-to-width-down/64?cb=20220302043224",
            "name": "Encrusted Key",
            "description": "A hidden cache containing an item (60%/30%/10%) will appear in a random location on each stage. Opening the cache consumes this item. Corrupts all Rusted Keys."
        },
        {
            "id": "lost_seers_lenses",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/1/14/Lost_Seer%27s_Lenses.png/revision/latest/scale-to-width-down/64?cb=20220302043224",
            "name": "Lost Seer's Lenses",
            "description": "Your attacks have a 0.5% (+0.5% per stack) chance to instantly kill a non-Boss enemy. Corrupts all Lens-Maker's Glasses."
        },
        {
            "id": "lysate_cell",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/53/Lysate_Cell.png/revision/latest/scale-to-width-down/64?cb=20220302043224",
            "name": "Lysate Cell",
            "description": "Add +1 (+1 per stack) charge of your Special skill. Reduces Special skill cooldown by 33%. Corrupts all Fuel Cells."
        },
        {
            "id": "needletick",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/76/Needletick.png/revision/latest/scale-to-width-down/64?cb=20220302043224",
            "name": "Needletick",
            "description": "10% (+10% per stack) chance to collapse an enemy for 400% base damage. Corrupts all Tri-Tip Daggers."
        },
        {
            "id": "newly_hatched_zoea",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/55/Newly_Hatched_Zoea.png/revision/latest/scale-to-width-down/64?cb=20220302132150",
            "name": "Newly Hatched Zoea",
            "description": "Every 60 (-50% per stack) seconds, gain a random Void ally. Can have up to 1 (+1 per stack) allies at a time. Corrupts all yellow items."
        },
        {
            "id": "plasma_shrimp",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/cf/Plasma_Shrimp.png/revision/latest/scale-to-width-down/64?cb=20220302041001",
            "name": "Plasma Shrimp",
            "description": "Gain a shield equal to 10% of your maximum health. While you have a shield, hitting an enemy fires a missile that deals 40% (+40% per stack) TOTAL damage. Corrupts all AtG Missile Mk. 1s."
        },
        {
            "id": "pluripotent_larva",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/26/Pluripotent_Larva.png/revision/latest/scale-to-width-down/64?cb=20220302123635",
            "name": "Pluripotent Larva",
            "description": "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability, and all of your items that can be corrupted will be. Corrupts all Dio's Best Friends."
        },
        {
            "id": "polylute",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/b/b5/Polylute.png/revision/latest/scale-to-width-down/64?cb=20220302043421",
            "name": "Polylute",
            "description": "25% chance to fire lightning for 60% TOTAL damage up to 3 (+3 per stack) times. Corrupts all Ukuleles."
        },
        {
            "id": "safer_spaces",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9d/Safer_Spaces.png/revision/latest/scale-to-width-down/64?cb=20220302040829",
            "name": "Safer Spaces",
            "description": "Blocks incoming damage once. Recharges after 15 seconds (-10% per stack) Corrupts all Tougher Times."
        },
        {
            "id": "singularity_band",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/30/Singularity_Band.png/revision/latest/scale-to-width-down/64?cb=20220302060147",
            "name": "Singularity Band",
            "description": "Hits that deal more than 400% damage also fire a black hole that draws enemies within 15m into its center. Lasts 5 seconds before collapsing, dealing 100% (+100% per stack) TOTAL damage. Recharges every 20 seconds. Corrupts all Runald's and Kjaro's Bands."
        },
        {
            "id": "tentabauble",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/64/Tentabauble.png/revision/latest/scale-to-width-down/64?cb=20220302111728",
            "name": "Tentabauble",
            "description": "5% (+5% per stack) chance on hit to root enemies for 1s (+1s per stack). Corrupts all Chronobaubles."
        },
        {
            "id": "voidsent_flame",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/69/Voidsent_Flame.png/revision/latest/scale-to-width-down/64?cb=20220302111748",
            "name": "Voidsent Flame",
            "description": "Upon hitting an enemy at full health, spawn a lava pillar in a 12m (+2.4m per stack) radius for 350% (+280% per stack) base damage. Corrupts all Will-o'-the-wisps."
        },
        {
            "id": "weeping_fungus",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e1/Weeping_Fungus.png/revision/latest/scale-to-width-down/64?cb=20220302043223",
            "name": "Weeping Fungus",
            "description": "Heals for 2% (+2% per stack) of your health every second while sprinting. Corrupts all Bustling Fungi."
        }
    ],
    "o": [
        {
            "id": "disposable_missile_launcher",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/78/Disposable_Missile_Launcher.png/revision/latest/scale-to-width-down/64?cb=20200129193051",
            "name": "Disposable Missile Launcher",
            "description": "Fire a swarm of 12 missiles that deal 12x300% damage."
        },
        {
            "id": "eccentric_vase",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/ce/Eccentric_Vase.png/revision/latest/scale-to-width-down/64?cb=20200129193052",
            "name": "Eccentric Vase",
            "description": "Create a quantum tunnel of up to 1000m in length. Lasts 30 seconds."
        },
        {
            "id": "executive_card",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/8/82/Executive_Card.png/revision/latest/scale-to-width-down/64?cb=20220302120708",
            "name": "Executive Card",
            "description": "Whenever you make a gold purchase, get 10% of the spent gold back. If the purchase is a multishop terminal, the other terminals will remain open."
        },
        {
            "id": "foreign_fruit",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/d/d0/Foreign_Fruit.png/revision/latest/scale-to-width-down/64?cb=20200129193055",
            "name": "Foreign Fruit",
            "description": "Instantly heal for 50% of your maximum health."
        },
        {
            "id": "forgive_me_please",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/78/Forgive_Me_Please.png/revision/latest/scale-to-width-down/64?cb=20200811161828",
            "name": "Forgive Me Please",
            "description": "Throw a cursed doll out that triggers any On-Kill effects you have every 1 second for 8 seconds."
        },
        {
            "id": "fuel_array",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/fe/Fuel_Array.png/revision/latest/scale-to-width-down/64?cb=20200129193057",
            "name": "Fuel Array",
            "description": "Looks like it could power something. EXTREMELY unstable..."
        },
        {
            "id": "gnarled_woodsprite",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/d/d8/Gnarled_Woodsprite.png/revision/latest/scale-to-width-down/64?cb=20200129193103",
            "name": "Gnarled Woodsprite",
            "description": "Gain a Woodsprite follower that heals for 1.5% of your maximum health/second. Can be sent to an ally to heal them for 10% of their maximum health."
        },
        {
            "id": "goobo_jr",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/3a/Goobo_Jr..png/revision/latest/scale-to-width-down/64?cb=20220302043343",
            "name": "Goobo Jr.",
            "description": "Spawn a gummy clone that has 200% damage and 200% health. Expires in 30 seconds."
        },
        {
            "id": "gorags_opus",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/56/Gorag%27s_Opus.png/revision/latest/scale-to-width-down/64?cb=20200811161829",
            "name": "Gorag's Opus",
            "description": "All allies enter a frenzy for 7 seconds. Increases movement speed by 50% and attack speed by 100%."
        },
        {
            "id": "jade_elephant",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/4/41/Jade_Elephant.png/revision/latest/scale-to-width-down/64?cb=20200129235337",
            "name": "Jade Elephant",
            "description": "Gain 500 armor for 5 seconds."
        },
        {
            "id": "milky_chrysalis",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e3/Milky_Chrysalis.png/revision/latest/scale-to-width-down/64?cb=20200129193119",
            "name": "Milky Chrysalis",
            "description": "Sprout wings and fly for 15 seconds. Gain +20% movement speed for the duration."
        },
        {
            "id": "molotov_6-pack",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/b/bf/Molotov_%286-Pack%29.png/revision/latest/scale-to-width-down/64?cb=20220302120707",
            "name": "Molotov (6-Pack)",
            "description": "Throw 6 molotov cocktails that ignites enemies for 500% base damage. Each molotov leaves a burning area for 200% damage per second."
        },
        {
            "id": "ocular_hud",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/68/Ocular_HUD.png/revision/latest/scale-to-width-down/64?cb=20200129193123",
            "name": "Ocular HUD",
            "description": "Gain +100% Critical Strike Chance for 8 seconds."
        },
        {
            "id": "preon_accumulator",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/fe/Preon_Accumulator.png/revision/latest/scale-to-width-down/64?cb=20200129193133",
            "name": "Preon Accumulator",
            "description": "Fires preon tendrils, zapping enemies within 35m for up to 600% damage/second. On contact, detonate in an enormous 20m explosion for 4000% damage."
        },
        {
            "id": "primordial_cube",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/d/d9/Primordial_Cube.png/revision/latest/scale-to-width-down/64?cb=20200129193135",
            "name": "Primordial Cube",
            "description": "Fire a black hole that draws enemies within 30m into its center. Lasts 10 seconds"
        },
        {
            "id": "radar_scanner",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/7f/Radar_Scanner.png/revision/latest/scale-to-width-down/64?cb=20200129193139",
            "name": "Radar Scanner",
            "description": "Reveal all interactables within 500m for 10 seconds."
        },
        {
            "id": "recycler",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/67/Recycler.png/revision/latest/scale-to-width-down/64?cb=20200331153330",
            "name": "Recycler",
            "description": "Transform an Item or Equipment into a different one. Can only be converted into the same tier one time."
        },
        {
            "id": "remote_caffeinator",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9c/Remote_Caffeinator.png/revision/latest/scale-to-width-down/64?cb=20220304231621",
            "name": "Remote Caffeinator",
            "description": "Request an Eclipse Zero Vending Machine from the UES Safe Travels. Delivery guaranteed in 5 seconds, dealing 2000% damage. Heal up to 3 targets for 25% of their maximum health."
        },
        {
            "id": "royal_capacitor",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/ef/Royal_Capacitor.png/revision/latest/scale-to-width-down/64?cb=20200129193145",
            "name": "Royal Capacitor",
            "description": "Call down a lightning strike on a targeted monster, dealing 3000% damage and stunning nearby monsters."
        },
        {
            "id": "sawmerang",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/62/Sawmerang.png/revision/latest/scale-to-width-down/64?cb=20200331153332",
            "name": "Sawmerang",
            "description": "Throw three large saw blades that slice through enemies for 3x400% damage. Also deals an additional 3x100% damage per second while bleeding enemies. Can strike enemies again on the way back."
        },
        {
            "id": "super_massive_leech",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/ae/Super_Massive_Leech.png/revision/latest/scale-to-width-down/64?cb=20200811161830",
            "name": "Super Massive Leech",
            "description": "Heal for 20% of the damage you deal. Lasts 8 seconds."
        },
        {
            "id": "the_back-up",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/39/The_Back-up.png/revision/latest/scale-to-width-down/64?cb=20200129193206",
            "name": "The Back-up",
            "description": "Call 4 Strike Drones to fight for you. Lasts 25 seconds."
        },
        {
            "id": "the_crowdfunder",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/d/d4/The_Crowdfunder.png/revision/latest/scale-to-width-down/64?cb=20200129193207",
            "name": "The Crowdfunder",
            "description": "Fires a continuous barrage that deals 100% damage per bullet. Costs $1 per bullet. Cost increases over time."
        },
        {
            "id": "trophy_hunters_tricorn",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/72/Trophy_Hunter%27s_Tricorn.png/revision/latest/scale-to-width-down/64?cb=20220302120753",
            "name": "Trophy Hunter's Tricorn",
            "description": "Execute any enemy capable of spawning a unique reward, and it will drop that item. Equipment is consumed on use."
        },
        {
            "id": "volcanic_egg",
            "icon": "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/2e/Volcanic_Egg.png/revision/latest/scale-to-width-down/64?cb=20200129235350",
            "name": "Volcanic Egg",
            "description": "Turn into a draconic fireball for 5 seconds. Deal 500% damage on impact. Detonates at the end for 800% damage."
        }
    ]
}