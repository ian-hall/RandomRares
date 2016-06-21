$(document).ready(function () {
    $("#rarecontainer").hide();
});

var stations = ["Porta", "Glushko", "Station", "Kaufmanis", "Hub", "Schweikart", "Station", "Andrade", "Legacy", "Julian", "Market",
                  "Weyl", "Gateway", "Hutton", "Orbital", "Solo", "Orbiter", "Malaspina", "Gateway", "Celsius", "Estate", "Libby", "Orbital",
                  "Shipton", "Orbital", "Fisher", "Station", "Baltha'sine", "Station", "Antonio", "De Andrade", "Vista", "Hart", "Station",
                  "Boscovich", "Ring", "Kirk", "Dock", "Chalker", "Landing", "Steve", "Masters", "station", "Hirayama", "Installation", "Nemere",
                  "Market", "Pinzon", "Dock", "Trading", "post", "Shukor", "Hub", "Shifnalport", "Finney", "Dock", "Mansfield", "Orbiter", "Azeban",
                  "City", "Shajn", "Terminal", "Savinykh", "Orbital", "Bloch", "Station", "Futen", "Spaceport", "Obruchev", "Legacy", "Zamka",
                  "Platform", "Yurchikhin", "Port", "Gustav", "Sporer", "Port", "Searfoss", "Enterprise", "Lovelace", "Port", "RJH1972", "Brunel",
                  "City", "Friend", "Orbital", "Stefanyshyn-Piper", "Station", "Andersson", "Station", "Burnham", "Beacon", "Stasheff", "Colony",
                  "Kreutz", "Orbital", "Veron", "City", "Blaauw", "City", "Gohar", "Station", "Mccool", "City", "Icelock", "Nowak", "Orbital",
                  "Hammel", "Terminal", "Godwin", "Vision", "Harvestport", "Sinclair", "Platform", "West", "Market", "Fozard", "Ring",
                  "Laplace", "Ring", "Lonchakov", "Orbital", "Lave", "Station", "Smith", "Reserve", "George", "Lucas", "George", "Lucas",
                  "Ehrlich", "Orbital", "King", "Gateway", "Brandenstein", "Port", "Vela", "dock", "Noli", "Terminal", "Tartarus", "Point",
                  "Ledyard", "Dock", "Clark", "Terminal", "Toll", "Ring", "Consolmagno", "Horizons", "Biggle", "Hub", "Cheranovsky", "City",
                  "Lee", "Hub", "Roddenberry", "Gateway", "Sharon", "Lee", "Free", "Market", "Greeboski's", "Outpost", "Crown", "Ring", "Snyder",
                  "Terminal", "Flagg", "Gateway", "Fernandes", "Market", "Dunyach", "Gateway", "Jameson", "Memorial", "Cassie-L-Peia", "Tranquillity",
                  "Gr8minds", "Kingsbury", "Dock", "Gordon", "Terminal", "Tsunenaga", "Orbital", "Guest", "Installation", "Fort", "Klarix", "Sevrdup", "Ring",
                  "Kaku", "Plant", "Clauss", "Hub", "Taylor", "City", "Lee", "Mines", "Vernadsky", "Dock", "Eisinga", "Enterprise", "Hornby", "Terminal",
                  "Williams", "Gateway", "Tarter", "Dock", "Zhen", "Dock", "Wheeler", "Market", "Ridley", "Scott", "Nicollier", "Hanger"];

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
    i = Math.floor(Math.random() * list.length);
    return list[i];
}

function generateStation() {
    station = "";
    station += chooseElement(stations);
    station += " ";
    station += chooseElement(stations);
    return station.toUpperCase();
}

function generateItem() {
    name = "Specializing in ";
    name += chooseElement(items);
    name += " ";
    name += chooseElement(items);
    if (Math.random() <= 0.30) {
        name += " ";
        name += chooseElement(items);
    }

    return name.toUpperCase();
}

function generate() {
    $("#rarecontainer").show();
    $("#station").html(generateStation());
    $("#name").html(generateItem());
}