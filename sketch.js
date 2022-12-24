// pendefinisian variabel global untuk gambar dan properties dari setiap objek
let main_top,
    btn1,
    btn2,
    astro_sit,
    astro_planet,
    c1,
    c2,
    bg,
    mp,
    hero,
    mons = [],
    lv,
    count_onplay = 0;
    m = [],
    btn_x = 130,
    btn_y = 440,
     y_astro = 320,
    i = 0.2;

// variabel play akan true ketika user sedang memainkan game / menekan tombol play, variabel gameover akan true ketika user kalah
let play = false,
    gameover = false;

// variabel untuk menyimpan state attack serta koordinat attack untuk monster dan hero
let isAttack = false,
    ismAttack = [],
    atm_x = [],
    atm_y = [],
    at_y,
    at_x;

// variabel untuk menyimpan jumlah monster
let monster_count = 0;

// fungsi preload untuk melakukan load image setiap objek
function preload() {
    main_top = loadImage('assets/main-top.png');
    btn1 = loadImage('assets/btn-1.png');
    btn2 = loadImage('assets/btn-2.png');
    astro_sit = loadImage('assets/astro-sit.png');
    astro_planet = loadImage('assets/planet1.png');
    c1 = loadImage('assets/cursor1.png');
    c2 = loadImage('assets/cursor2.png');
    bg = loadImage('assets/bg-map.png');
    hr = loadImage('assets/astro-fly.png');
    at = loadImage('assets/fire2.png');
    atm = loadImage('assets/fire1.png');
    hint = loadImage('assets/hint.png');
    m[0] = loadImage('assets/monster1.png');
    m[1] = loadImage('assets/monster2.png');
    m[2] = loadImage('assets/monster3.png');
    m[3] = loadImage('assets/monster4.png');
    lv = loadImage('assets/life.png');
}

// fungsi untuk menggambar tampilan main menu pada saat awal game
function draw_menu() {
    background('black');
    main_top.resize(720, 350);
    btn1.resize(150, 70);
    btn2.resize(150, 70);
    astro_sit.resize(200, 200);
    astro_planet.resize(290, 280);
    c1.resize(40, 40);
    c2.resize(40, 60);
    image(main_top, 10, 20);
    image(astro_planet, 460, 480);
    image(astro_sit, 525, y_astro);

    // action ketika cursor mengarah ke button
    if (mouseX > btn_x && mouseY > btn_y && mouseY < 510 && mouseX < 280) {
        image(btn2, btn_x, btn_y);
        image(c2, mouseX - 10, mouseY - 8);
    } else {
        image(btn1, btn_x, btn_y);
        image(c1, mouseX, mouseY);
    }

    // animasi astronot pada main menu
    if (y_astro > 320) 
        i *= -1;
    if (y_astro < 300) 
        i *= -1;
    y_astro += i;

}

// fungsi untuk membaca mouse click pada button di main menu
function mouseClicked() {
    if (mouseX > btn_x && mouseY > btn_y && mouseY < 510 && mouseX < 280) {
        // menampilkan hint dan hitung mundur ready, set, go
        hint.resize(600,220);
        textSize(130);
        textFont("Comic Sans MS");
        background(0);
        fill(255, 255, 255);
        text('Ready', 190, 250);
        image(hint, 70,350);
