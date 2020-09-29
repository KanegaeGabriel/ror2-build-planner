useBase64 = false;
items = {};
const colors = ['w', 'g', 'r', 'y', 'b'];

// Run onLoad() on page load
document.addEventListener('DOMContentLoaded', function() { onLoad(); }, false);

function onLoad() {
    for (color of colors) items[color] = [];
    
    itemDataByID = {};
    for (color of colors) {
        for (item of itemDataByColor[color]) {
            itemDataByID[item['id']] = item;
            itemDataByID[item['id']]['color'] = color;
        }
    }
    
    itemIDs = Array.from(Object.keys(itemDataByID));
    
    // Create class tags for the image URLs (so as to load only once)
    for (itemID of itemIDs) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.icon_' + itemID + ' { content: url("' + itemDataByID[itemID]['icon'] + '") }';
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    // Break lines to show item description on hover
    for (itemID of itemIDs) {
        itemDataByID[itemID]['description'] = breakDescriptionLines(itemDataByID[itemID]['description']);
    }

    // Load items
    for (color of colors) {
        content = '';
        for (item of itemDataByColor[color]) {
            content += '<img class="icon icon_' + item['id'] + '"';
            content += 'onclick="addItem(\'' + item['id'] + '\')" ';
            content += 'title="' + item['name'] + '\n\n' + item['description'] + '" ';
            content += '/>';
        }
        document.getElementById('item_select_' + color).innerHTML = content;
    }
}

function reset() {
    for (color of colors) items[color] = [];
    updateAll();
    document.getElementById('textbox').value = '';
}

function updateAll() {
    for (color of colors) {
        updateColor(color);
    }
}

function updateColor(color) {
    if (items[color].length == 0) {
        content = '';
    } else {
        content = '<div style="display: flex; flex-wrap: wrap; height: 0px;">';
        
        for (i = 0; i < items[color].length; i+=2) {
            amt = items[color][i];
            itemID = items[color][i+1];
            item = itemDataByID[itemID];

            if (amt == 1) {
                amtText = '';
            } else if (amt > 50) {
                amtText = '&#215;&#8734;'; // Infinity
            } else {
                amtText = '&#215;' + amt;
            }

            content += '<div class="item_with_amount" onclick="removeItem(' + i + ', \'' + item['id'] + '\')"/>';
            content += '<img class="icon icon_' + item['id'] + '"';
            content += 'title="' + item['name'] + '\n\n' + item['description'] + '" ';
            content += '/>';
            content += '<p class="item_amount">' + amtText + '</p>';
            content += '</div>';
        }

        content += '</div>';
    }

    document.getElementById('item_list_' + color).innerHTML = content;
}

function breakDescriptionLines(desc) {
    const wrapLimit = 30;

    // Insert line breaks on first space after wrapLimit chars
    finalDesc = '';
    i = 0;
    cur = 0;
    while (i < desc.length) {
        if (desc[i] === ' ' && cur > wrapLimit) {
            cur = 0;
            finalDesc += '\n';
            i += 1;
        }
        finalDesc += desc[i];
        cur += 1;
        i += 1;
    }

    return finalDesc;
}

function addItem(itemID) {
    color = itemDataByID[itemID]['color'];

    if (items[color].length > 0 && itemID === items[color][items[color].length-1]) {
        items[color][items[color].length-2] += 1; // Same as last
    } else {
        items[color].push(1, itemID); // New item
    }

    updateColor(itemDataByID[itemID]['color']);
    document.getElementById('textbox').value = '';
}

function removeItem(index, itemID) {
    color = itemDataByID[itemID]['color'];

    if (items[color][index] > 1) {
        items[color][index] -= 1;
    } else {
        // Remove item
        items[color].splice(index, 2);

        // Stack adjacent item amounts
        if (index < items[color].length && index-2 >= 0 && items[color][index+1] == items[color][index-1]) {
            items[color][index-2] += items[color][index];
            items[color].splice(index, 2);
        }
    }
    updateColor(itemDataByID[itemID]['color']);
    document.getElementById('textbox').value = '';
}

function importData() {
    if (useBase64) {
        b64 = document.getElementById('textbox').value;
        json = atob(b64);
    } else {
        json = document.getElementById('textbox').value;
    }

    try {
        data = JSON.parse(json);

        for (color of colors) items[color] = [];
        for (color of Object.keys(data)) {
            if (!colors.includes(color)) {
                throw new Error('Invalid color "' + color + '"');
            }

            for (tuple of data[color]) {
                if (tuple.length !== 2 || typeof(tuple[0]) != "number" || typeof(tuple[1]) != "string" || tuple[0] < 1 || !itemIDs.includes(tuple[1])) {
                    throw new Error('Invalid argument "[' + tuple + ']"');
                }
                items[color] = items[color].concat(tuple);
            }
        }
    } catch (e) {
        if (json.length > 0) {
            alert('Invalid import string:\n' + e);
        }
        return;
    }

    updateAll();
}

function exportData() {
    if (items.length === 0) {
        document.getElementById('textbox').value = '';
        return;
    }

    data = {};
    for (color of colors) {
        for (i = 0; i < items[color].length; i+=2) {
            amt = items[color][i];
            itemID = items[color][i+1];
            item = itemDataByID[itemID];

            if (!(color in data)) {
                data[color] = [];
            }
            data[item['color']].push([amt, itemID]);
        }
    }
    json = JSON.stringify(data);

    if (useBase64) {
        b64 = btoa(json);
        document.getElementById('textbox').value = b64;
    } else {
        document.getElementById('textbox').value = json;
    }
}