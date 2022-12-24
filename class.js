// fungsi untuk melakukan generate angka random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// pendefinisian class Level
class Level {
    // pendefinisian variabel object dari class level
    currentLevel;   // menyimpan data level terbaru
    latestLevel;    // menyimpan data level saat ini
    maxLevel;       // mengatur level maksimal
    constructor(mx_lv) {
        this.maxLevel = mx_lv;  // set level maksimal
    }
    setLevel(lv) {
        this.currentLevel = lv; // set level terbaru 
    }
    getCurrentLevel() {
        return this.currentLevel;   // mendapatkan data level terbaru
    }
    getLatestLevel() {
        return this.latestLevel;    // mendapatkan data level saat ini
    }
    // fungsi untuk menampilkan level pada layar
    showLevel(){    
        fill(255,255,255);
        textFont("Comic Sans MS");
        textSize(30);
        text("Level-"+this.currentLevel,620,35);
    }
}

// pendefinisian class Map
class Map {
    width;  // lebar map
    height; // tinggi map
    bg;     // background map
    x = 0;  // posisi x map (koordinat horizontal)
    constructor(w, h) {
        // set lebar dan tinggi map
        this.width = w;
        this.height = h;
    }
    init(background) {
        // set background map
        this.bg = background;
        this.bg.resize(this.width, this.height);
    }
    // fungsi untuk melakukan gerakan map berjalan 
    move() {
        image(this.bg, this.x, 0);
        if (this.x >= -1500) {
            this.x -= 1;
        } else {
            this.x = -10;
        }
    }
}

// pendefinisian class Entity sebagai parent dari class hero dan monster
class Entity {
    width;  // mendefinisikan lebar objek 
    height; // mendefinisikan tinggi objek
    x;      // mendefinisikan posisi horizontal objek
    y;      // mendefinisikan posisi vertikal objek
    img;    // mendefinisikan gambar objek