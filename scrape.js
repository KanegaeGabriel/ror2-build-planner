import fs from "fs";
import got from "got";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

const wikiUrl = "https://riskofrain2.fandom.com/wiki/Items";

let itemTableSelectors = {
    common: `#mw-content-text > div > table:nth-child(13) tr`, // Different when just pulling page without JS, etc
    uncommon: `#mw-content-text > div > table:nth-child(16) tr`,
    legendary: `#mw-content-text > div > table:nth-child(19) tr`,
    boss: `#mw-content-text > div > table:nth-child(22) tr`,
    lunar: `#mw-content-text > div > table:nth-child(25) tr`,
    void: `#mw-content-text > div > table:nth-child(30) tr`,
    equipment: `#mw-content-text > div > table:nth-child(34) tr`
}

let itemColorMapping = {
    common: `w`,
    uncommon: `g`,
    legendary: `r`,
    boss: `y`,
    lunar: `b`,
    void: `p`,
    equipment: `o`
}

got(wikiUrl)
  .then((response) => {
    let itemCollections = {
        common: [],
        uncommon: [],
        legendary: [],
        boss: [],
        lunar: [],
        void: [],
        equipment: []
    };


    const dom = new JSDOM(response.body);


    for (const [tableName, tableSel] of Object.entries(itemTableSelectors)) {
        console.log(`Scraping Table: ${tableName}`);
        console.log(`Selector: ${tableSel}`);

        [...dom.window.document.querySelectorAll(tableSel)]
            .filter((_, i) => i > 1)
            .forEach((row) => {
              let item = {
                id: decodeURIComponent(row.querySelector('a').href.split('/').pop()).replace(/^[^a-z]+|[^\w:-]+/gi, '').toLowerCase(),
                icon: row.querySelector("a img")?.getAttribute('data-src'),
                name: row.querySelector("a")?.title,
                description: row.querySelector('td:nth-child(2)').textContent.replace(/(\r\n|\n|\r)/gm, ``),
              };
              itemCollections[tableName].push(item);
            });
            console.log(`Item Collection: ${tableName} - ${itemCollections[tableName].length}`)
    }
    
    // Convert data to proper json format for export
    let formattedData = {};
    for (const [itemsKey, items] of Object.entries(itemCollections)) {
        let newKey = itemColorMapping[itemsKey];

        if(newKey == null) {
            throw new Error('Invalid key, unable to export...')
        }

        formattedData[newKey] = items;
    }

    // Export
    let exportData = JSON.stringify(formattedData, null, 4);
    fs.writeFileSync('items.js', 

    `// w = White (Common)
    // g = Green (Uncommon)
    // r =Red (Legendary)
    // y = Yellow (Boss / Planet)
    // b = Blue (Lunar Items / Equipment)
    // p = Purple (Void)
    // o = Orange (Equipment)
    
    const itemDataByColor = ${exportData}`

    );
  })
  .catch((err) => {
    console.log(err);
  });
