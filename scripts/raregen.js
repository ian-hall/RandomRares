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


var itemPlaces = ["Tauri", "Aepyornis", "Ceti", "Chateau", "De Aegaeon", "Edan", "Aerial", "Aganippe",
                   "Rush", "Alacarakmo", "Centauri", "Altairian", "Alya", "Anduliga", "Any Na", "Arouca", "Conventula", "Az", "Cancri",
                   "Baltha'sine", "Banki", "Bast", "Belalans", "CD-75", "Cherbones", "Chi", "Eridani", "Coquim", "Damna", "Motrona",
                   "Delta", "Phoenicis", "Deuringas", "Diso", "Eleu", "Indi", "Eranin", "Eshu", "Esuseku", "Ethgreze", "Fujin",
                   "Geawen", "Pantaa", "Gerasian", "Gueuze", "Goman", "Haidne", "Havasupai", "Hecate", "Heike", "Helvetitj", "HIP 10175",
                   "HIP", "Burnham", "Holva", "HR 7221", "Irukama", "Jaradharre", "Jaroua", "Jotun", "Kachirigin", "Kamitra", "Kamorin",
                   "Karetii", "Karsuki", "Kinago", "Kongga", "Koro", "Kung", "Lavian", "Leestian", "Mechucos", "Medb", "Mokojing", "Momus",
                   "Mukusubii", "Mulachi", "Neritus", "Ngandandari", "Nguna", "Soontill", "Njangari", "Ochoeng", "Orrerian", "Verrix",
                   "Quechua", "Rajukru", "Multi-Stoves", "Rapa", "Bao", "Rusani", "Sanuma", "Shintara", "Tanmark", "Tarach", "Terra", "Mater",
                   "Thrutis", "Tiolce", "Toxandji", "Uszaian", "Utgaroar", "Uzumoku", "V Herculis", "Vanayequi", "Vega", "Vidavantian",
                   "Volkhab", "Wheemete", "Witchhaul", "Wulpa", "Wuthielo", "Ku", "Xihe", "Yaso", "Kondi", "Zeessze", "Yaupon"];

var itemKinds = ["Chimes", "Eggs", "Rabbits", "Apples", "Art", "Gin", "Soup", "Fireworks", "Coffee", "Sweets", "Formula 42", "Krill",
                  "Leather", "Snakes", "Kittens", "Crystals", "Paste", "Victuals", "Carapaces", "Jelly", "Palms", "Truffles", "Corn",
                  "Thermals", "Bourbon", "Whiskey", "Umbrellas", "Caviar", "Tea", "Buds", "Dust", "Sticks", "Beer", "Catchers",
                  "Worms", "Pearls", "Meat", "Proto-Squid", "Bile", "Distillate", "Organophospates", "Blades", "Wheat", "Snails",
                  "Boxes", "Rice", "Mookah", "Leeches", "Cigars", "Weapons", "Onion Head", "Couture", "Locusts", "Violins", "Ale", "Pellets",
                  "Brandy", "Cloth", "Juice", "Milk", "Extract", "Pills", "Starlube", "Feast", "Spaniels", "Chitin-os", "Fungus", "Berries",
                  "Opals", "Antiques", "Relics", "Saddles", "Chillies", "Brew", "Multi-Stoves", "Skins", "Waters", "Spice", "Bores", "Cream",
                  "Waste", "Virocide", "Eggs", "Wings", "Rub", "Fur", "Slimweed", "Lace", "Drones", "Cakes", "Beef",
                  "Systems", "Froth", "Companions", "Leaf", "Grubs", "Glue"];

var itemAdjectives = ["Skin", "Mega", "Body", "Fire", "Coffee", "Conventula", "Formula", "Vacuum", "Amphibious", "Snake", "Ray", "Brand",
                      "Blood", "Marine", "Spongiform", "Experience", "Ma", "Tea", "Dance", "Prayer", "Beer", "Black", "Dream",
					  "Sea", "Bush", "Distillate", "Duelling", "Wheat", "Giant", "Puzzle", "Filter", "Chameleon", "Evil", "Azure",
                      "Void", "Honesty", "High", "Beast", "Bog", "Vicious", "Mammoth", "Old", "Tranquil", "Waste 2", "Tree", "Millennial", "Low-G",
                      "Ceratomorpha", "Bee", "Kobe", "Hyperbore", "Biomorphic", "Leathery", "Ant"];

var itemPrefs = ["Live", "Ceremonial", "Historic", "High", "Modern", "Albino", "Decorative", "Low-G"];

function chooseElement(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

function generateStation() {
    var station = "";
    if (Math.random() < 0.80) {
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
    if (Math.random() < 0.20) {
        item += chooseElement(itemPrefs);
        item += " ";
    }
    item += chooseElement(itemPlaces);
    item += " ";
    if (Math.random() < 0.35) {
        item += chooseElement(itemAdjectives);
        item += " ";
    }
    item += chooseElement(itemKinds);
    return item.toUpperCase();
}

function generate() {
    $("#rarecontainer").show();
    $("#station").html(generateStation());
    $("#name").html(generateItem());
}