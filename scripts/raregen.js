$(document).ready(function () {
    $("#rarecontainer").hide();
});

var stationProper = ["Porta", "Glushko", "Kaufmanis", "Schweikart", "Andrade", "Julian", "Weyl", "Hutton", "Malaspina", "Celsius", "Libby",
                     "Shipton", "Fisher", "Baltha'sine", "Antonio", "De Andrade", "Hart", "Boscovich", "Kirk", "Chalker", "Steve", "Masters",
                     "Hirayama", "Nemere", "Pinzon", "Shukor", "Shifnalport", "Finney", "Mansfield", "Azeban", "Shajn", "Savinykh", "Bloch",
                     "Futen", "Obruchev", "Zamka", "Yurchikhin", "Gustav", "Sporer", "Searfoss", "Lovelace", "RJH1972", "Brunel", "Friend",
                     "Stefanyshyn-Piper", "Andersson", "Burnham", "Stasheff", "Kreutz", "Veron", "Blaauw", "Gohar", "Mccool", "Nowak",
                     "Hammel", "Godwin", "Harvestport", "Sinclair", "Fozard", "Laplace", "Lonchakov", "Lave", "Smith", "George", "Lucas",
                     "Ehrlich", "King", "Brandenstein", "Vela", "Noli", "Tartarus", "Ledyard", "Clark", "Consolmagno", "Biggle", "Cheranovsky",
                     "Lee", "Roddenberry", "Sharon", "Greeboski", "Snyder", "Flagg", "Fernandes", "Dunyach", "Jameson", "Cassie-L-Peia",
                     "Gr8minds", "Kingsbury", "Gordon", "Tsunenaga", "Klarix", "Sevrdup", "Kaku", "Clauss", "Taylor", "Vernadsky", "Eisinga",
                     "Hornby", "Williams", "Tarter", "Zhen", "Wheeler", "Ridley", "Scott", "Nicollier"];

var stationType = ["Station", "Hub", "Gateway", "Estate", "Vista", "Ring", "Dock", "Landing", "Installation", "Port", "Post",
                   "Terminal", "Spaceport", "Platform", "City", "Beacon", "Colony", "Market", "Reserve", "Point", "Outpost",
                   "Memorial", "Fort", "Plant", "Mines", "Hanger"];

var stationOther = ["Legacy", "Orbital", "Solo", "Orbiter", "Trading", "Enterprise", "Icelock", "Vision", "West", "Toll", "Horizons",
                    "Free", "Crown", "Tranquillity", "Guest"];

var items = ["Tauri", "Chimes", "Aepyornis", "Egg", "Ceti", "Rabbits", "Chateau", "De", "Aegaeon", "Edan", "Apples", "of Aerial", "Aganippe",
                  "Rush", "Alacarakmo", "Skin", "Art", "Centauri", "Mega", "Gin", "Altairian", "Skin", "Alya", "Body", "Soup", "Anduliga", "Fire", "Works",
                  "Any", "Na", "Coffee", "Arouca", "Conventula", "Sweets", "Az", "Cancri", "Formula", "42", "Baltha'sine", "Vacuum", "Krill", "Banki",
                  "Amphibious", "Leather", "Bast", "Snake", "Gin", "Belalans", "Ray", "Leather", "CD-75", "Kitten", "Brand", "Coffee", "Cherbones", "Blood",
                  "Crystals", "Chi", "Eridani", "Marine", "Paste", "Coquim", "Spongiform", "Victuals", "Damna", "Carapaces", "Motrona", "Experience", "Jelly",
                  "Delta", "Phoenicis", "Palms", "Deuringas", "Truffles", "Diso", "Ma", "Corn", "Eleu", "Thermals", "Indi", "Bourbon", "Eranin", "Whiskey",
                  "Eshu", "Umbrellas", "Esuseku", "Caviar", "Ethgreze", "Tea", "Buds", "Fujin", "Tea", "Geawen", "Dance", "Dust", "Pantaa", "Prayer", "Sticks",
                  "Gerasian", "Gueuze", "Beer", "Goman", "Yaupon", "Coffee", "Haidne", "Black", "Brew", "Havasupai", "Dream", "Catcher", "Live", "Hecate",
                  "Sea", "Worms", "Ceremonial", "Heike", "Tea", "Helvetitj", "Pearls", "HIP", "10175", "Bush", "Meat", "HIP", "Proto-Squid", "Burnham", "Bile",
                  "Distillate", "HIP", "Organophospates", "Holva", "Duelling", "Blades", "HR", "7221", "Wheat", "Giant", "Irukama", "Snails", "Jaradharre",
                  "Puzzle", "Box", "Jaroua", "Rice", "Jotun", "Mookah", "Kachirigin", "Filter", "Leeches", "Kamitra", "Cigars", "Kamorin", "Historic", "Weapons",
                  "Onion", "Head", "Karetii", "Couture", "Karsuki", "Locusts", "Kinago", "Violins", "Kongga", "Ale", "Koro", "Kung", "Pellets", "Lavian",
                  "Brandy", "Chameleon", "Cloth", "Leestian", "Evil", "Juice", "Azure", "Milk", "Void", "Extract", "Coffee", "Honesty", "Pills", "Mechucos",
                  "High", "Tea", "Medb", "Starlube", "Mokojing", "Beast", "Feast", "Momus", "Bog", "Spaniel", "Mukusubii", "Chitin-os", "Mulachi", "Giant",
                  "Fungus", "Neritus", "Berries", "Ngandandari", "Fire", "Opals", "Nguna", "Modern", "Antiques", "Soontill", "Relics", "Njangari", "Saddles",
                  "Ochoeng", "Chillies", "Orrerian", "Vicious", "Brew", "Giant", "Verrix", "Albino", "Quechua", "Mammoth", "Meat", "Rajukru", "Multi-Stoves",
                  "Rapa", "Bao", "Snake", "Skins", "Rusani", "Old", "Smokey", "Sanuma", "Decorative", "Meat", "Waters", "of Shintara", "Tanmark", "Tranquil",
                  "Tea", "Tarach", "Spice", "Terra", "Mater", "Blood", "Bores", "Thrutis", "Cream", "Tiolce", "Waste", "2", "Paste", "Toxandji", "Virocide",
                  "Uszaian", "Tree", "Grub", "Utgaroar", "Millennial", "Eggs", "Uzumoku", "Low-G", "Wings", "V", "Herculis", "Body", "Rub", "Vanayequi", "Ceratomorpha",
                  "Fur", "Vega", "Slimweed", "Vidavantian", "Lace", "Volkhab", "Bee", "Drones", "Wheemete", "Wheat", "Cakes", "Witchhaul", "Kobe", "Beef", "Wulpa",
                  "Hyperbore", "Systems", "Wuthielo", "Ku", "Froth", "Xihe", "Biomorphic", "Companions", "Yaso", "Kondi", "Leaf", "Leathery", "Eggs", "Zeessze",
                  "Ant", "Grub", "Glue"];

function chooseElement(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

function generateStation() {
    var station = "";
    station += chooseElement(stations);
    station += " ";
    station += chooseElement(stations);
    return station.toUpperCase();
}

function generateFancyStation() {
    var station = "";
    if (Math.random() <= 0.75) {
        station += chooseElement(stationProper);
        station += " ";
        station += (Math.random() < 0.50) ? chooseElement(stationOther) : chooseElement(stationType);
    }
    else {
        station += chooseElement(stationType);
        station += " ";
        station += chooseElement(stationProper);
    }
    return station.toUpperCase();
}

function generateItem() {
    var item = "Specializing in ";
    item += chooseElement(items);
    item += " ";
    item += chooseElement(items);
    if (Math.random() <= 0.30) {
        item += " ";
        item += chooseElement(items);
    }

    return item.toUpperCase();
}

function generate() {
    $("#rarecontainer").show();
    $("#station").html(generateFancyStation());
    $("#name").html(generateItem());
}