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
    constructor(w, h) {
        // set lebar dan tinggi objek
        this.width = w;
        this.height = h;
    }
    // mendefinisikan fungsi attack, hanya pendefinisian saja, untuk action di override oleh child class
    attack() {}
    // fungsi untuk objek bergerak ke kanan
    moveRight() {
        if (this.x < 250) 
            this.x += 3;
    }
    // fungsi untuk objek bergerak ke kiri
    moveLeft() {
        if (this.x > 0) 
            this.x -= 3;
    }
    // fungsi untuk objek bergerak ke bawah
    moveDown() {
        if (this.y < 511) 
            this.y += 3;
    }
    // fungsi untuk objek bergerak ke atas
    moveUp() {
        if (this.y > 0) 
            this.y -= 3;
    }
    // fungsi untuk menggambar objek ke layar
    draw() {
        image(this.img, this.x, this.y);
    }
}

class Monster extends Entity {
    life;   // variabel untuk nyawa monster
    color;  // variabel untuk warna monster
    effect; // variabel untuk effect yang diberikan monster
    type;   // variabel untuk tipe monster
    rand_x; // variabel untuk menyimpan nilai random koordinat horizontal monster
    rand_y; // variabel untuk menyimpan nilai random koordinat vertikal monster
    fire;   // variabel untuk menyimpan gambar attack dari monster
    constructor(w, h) {
        // set nyawa monster
        super(w, h);
        this.life = 5;
    }
    // fungsi untuk inisialisasi gambar monster, ukuran lebar x tinggi serta koordinat x dan y
    initImg(i, x, y) {
        this.img = i;
        this.img.resize(this.width, this.height);
        this.x = x;
        this.y = y;
    }
    // fungsi untuk inisialisasi warna, tipe dan effect
    setTypeEffect(type, effect, color) {
        this.color = color;
        this.type = type;
        this.effect = effect;
    }
    // fungsi untuk mengubah posisi monster secara random
    moveRandom() {
        this.rand_x = getRndInteger(400,720);
        this.rand_y = getRndInteger(10,550);
    }
// fungsi untuk menggambar monster pada layar sesuai koordinat x dan y
    draw() {
        if(this.x > this.rand_x)
            this.x--;
        else if(this.x < this.rand_x)
            this.x++;
        if(this.y > this.rand_y)
            this.y--;
        else if(this.y < this.rand_y)
            this.y++;
        image(this.img, this.x, this.y);
    }
    // fungsi untuk monster melakukan attack
    attack(fire, x, y) {
        this.fire = fire;
        this.fire.resize(50, 40);
        image(this.fire, x, y);
    }
    // fungsi untuk menyimpan dan menampilkan score pada layar
    saveScore() { 
        fill(255,255,255);
        textFont("Comic Sans MS");
        textSize(30);
        text("Score : "+this.score,20,35);
    }
}
class Hero extends Entity {
    life;   // variabel nyawa hero
    score;  // variabel untuk menyimpan score hero
    fire;   // variabel untuk gambar dari attack hero
    constructor(w, h) {
        // inisialisasi nyawa dan score hero
        super(w, h);
        this.life = 5;
        this.score = 0;
    }
    // fungsi untuk menginisialisasi gambar dari hero (astronot)
    initImg(i, x, y) {
        this.img = i;
        this.img.resize(this.width, this.height);
        this.x = x;
        this.y = y;
    }
    // fungsi untuk hero melakukan attack berdasarkan koordinat x dan y hero saat ini
    attack(fire, x, y) {
        this.fire = fire;
        this.fire.resize(70, 60);
        image(this.fire, x, y);
    }
    // fungsi untuk menambah score hero
    increaseScore() {
        this.score += 10;
    }
    // fungsi untuk menghitung dan menyimpan nyawa hero
    calculateLife(lv_img) {
        lv_img.resize(30,30);
        for(let x=0;x<this.life;x++)
            image(lv_img,300 + x*35,10)
    }
    // fungsi untuk menyimpan score hero dan menampilkan pada layar
    saveScore() {
        fill(255,255,255);
        textFont("Comic Sans MS");
        textSize(30);
        text("Score : "+this.score,20,35);
    }
}
