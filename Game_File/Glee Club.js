let Start = true;
let Pause = true;
let Auto = true;
let TXT = true;
let canvas;
let ctx;
let add = 0;
let score = 0;
let is_order_changed = false;
let order = 0;
let last_frame = 0;
let frame = 0;
let together = false;
let Wrong = false;
let Count = 0;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 954;
canvas.height = 468;
document.body.appendChild(canvas);
let BG, Idle1, Idle2, Just1, Just2, Just3, Just4, Just5, Sad1, Sad2, SuperReady, Super1, Super2, Super3;

let in_frame = [];
let skipped_frame = [];

let is_A_press = false;
let is_Input_Start = false;
let is_Input_Stop = false;

let Teacher_State = [1355, 2750, 3715, 4140, 4640, 5105];
let Teacher_Sound = ["Super", "Super", "Down", "Super", "Down", "Down"];

let K1S = "Idle";
let K1P = 0;
let K1X = 380;
let K1Y = 150;
let K1_Sound_State = "Ap";
let K1_Start = [750, 1215, 1410, 1685, 2145, 2375, 2805, 2975, 3020, 3540, 4005, 4195, 4465, 4935, 5300];
let K1_Stop = [780, 1245, 1440, 1710, 2175, 2495, 2845, 2990, 3050, 3745, 4030, 4225, 4670, 5135, 5310];
let K1_Sound = ["Ep", "Ep", "Super", "Ep", "Ep", "G", "Super", "Bp", "Bp", "Ep", "Ep", "Super", "Ep", "Ep", "G"];//Super = C & Super

let K2S = "Idle";
let K2P = 0;
let K2X = 530;
let K2Y = 180;
let K2_Sound_State = "Ap";
let K2_Start = [810, 1275, 1410, 1745, 2205, 2495, 2805, 3090, 3135, 3600, 4060, 4195, 4520, 4990, 5330];
let K2_Stop = [840, 1305, 1440, 1770, 2235, 2615, 2845, 3105, 3165, 3745, 4085, 4225, 4670, 5135, 5340];
let K2_Sound = ["G", "G", "Super", "G", "G", "Gp", "Super", "Bp", "Bp", "G", "G", "Super", "G", "G", "G"];

let K3S = "Idle";
let K3P = 0;
let K3X = 680;
let K3Y = 210;
let K3_Sound_State = "Ap";
let K3_Start = [870, 1335, 1410, 1805, 2265, 2615, 2805, 3205, 3250, 3660, 4115, 4195, 4585, 5050, 5360];
let K3_Stop = [900, 1365, 1440, 1830, 2295, 2735, 2845, 3220, 3280, 3745, 4140, 4225, 4670, 5135, 5370];
let K3_Sound = ["Bp", "Bp", "Super", "Bp", "Bp", "Ep", "Super", "Bp", "Bp", "Bp", "Bp", "Super", "Bp", "Bp", "G"];

let RK3_Start = [840, 1305, 1380, 1775, 2235, 2585, 2775, 3175, 3220, 3630, 4085, 4165, 4555, 5020, 5330];
let RK3_Stop = [870, 1335, 1410, 1800, 2265, 2705, 2815, 3190, 3250, 3715, 4110, 4195, 4640, 5105, 5340];

function loadAudio(){
	In_Game_Music = new Audio();
    In_Game_Music.src = "audios/In_Game_Music.mp3";
	In_Game_Music.volume = 1;
	D = new Audio();
    D.src = "audios/D.wav";
	D.volume = 1;
	C = new Audio();
    C.src = "audios/C.wav";
	C.volume = 1;
	B = new Audio();
    B.src = "audios/B.wav";
	B.volume = 1;
	Bp = new Audio();
    Bp.src = "audios/Bp.wav";
	Bp.volume = 1;
	A = new Audio();
    A.src = "audios/A.wav";
	A.volume = 1;
	Ap = new Audio();
    Ap.src = "audios/Ap.wav";
	Ap.volume = 1;
	G = new Audio();
    G.src = "audios/G.wav";
	G.volume = 1;
	Gp = new Audio();
    Gp.src = "audios/Gp.wav";
	Gp.volume = 1;
	F = new Audio();
    F.src = "audios/F.wav";
	F.volume = 1;
	E = new Audio();
    E.src = "audios/E.wav";
	E.volume = 1;
	Ep = new Audio();
    Ep.src = "audios/Ep.wav";
	Ep.volume = 1;
	DD = new Audio();
    DD.src = "audios/DD.wav";
	DD.volume = 1;
	Super_Sound = new Audio();
    Super_Sound.src = "audios/Super.wav";
	Super_Sound.volume = 0.75;
	Together_EN = new Audio();
    Together_EN.src = "audios/Together_EN.wav";
	Together_EN.volume = 0.5;
	Haik_EN = new Audio();
    Haik_EN.src = "audios/Haik_EN.wav";
	Haik_EN.volume = 0.5;
	Tok_EN = new Audio();
    Tok_EN.src = "audios/Tok_EN.wav";
	Tok_EN.volume = 0.5;
	Down_EN = new Audio();
    Down_EN.src = "audios/Down_EN.wav";
	Down_EN.volume = 0.5;
	Together_JP = new Audio();
    Together_JP.src = "audios/Together_JP.wav";
	Together_JP.volume = 0.5;
	Zip = new Audio();
    Zip.src = "audios/Zip.wav";
	Zip.volume = 1;
}

function loadImage() {
	BG = new Image();
    BG.src = "images/BG.png";
	Idle1 = new Image();
    Idle1.src = "images/Idle1.png";
	Idle2 = new Image();
    Idle2.src = "images/Idle2.png";
	Just1 = new Image();
    Just1.src = "images/Just1.png";
	Just2 = new Image();
    Just2.src = "images/Just2.png";
	Just3 = new Image();
    Just3.src = "images/Just3.png";
	Just4 = new Image();
    Just4.src = "images/Just4.png";
	Just5 = new Image();
    Just5.src = "images/Just5.png";
	Sad1 = new Image();
    Sad1.src = "images/Sad1.png";
	Sad2 = new Image();
    Sad2.src = "images/Sad2.png";
	SuperReady = new Image();
    SuperReady.src = "images/SuperReady.png";
	Super1 = new Image();
    Super1.src = "images/Super1.png";
	Super2 = new Image();
    Super2.src = "images/Super2.png";
	Super3 = new Image();
    Super3.src = "images/Super3.png";
}
	
let keysDown = {};
function setKeyboardListener() {
    document.addEventListener("keydown", function (event) {
        keysDown[event.keyCode] = true;
    });
    document.addEventListener("keyup", function (event) {
        delete keysDown[event.keyCode];

		if(event.keyCode == 13){
			if(Start && !Auto){
				K3_Play_Sound();
			}

			Start = false;
		}
		
		if(event.keyCode == 74){
			if(is_A_press){
				K3_Play_Sound();
			}

			is_A_press = false;

			if(is_order_changed){
				if(!is_Input_Start){
					RK3_Start.splice(order - 1, 1, frame);
					is_Input_Start = true;
				}
			}
		}
		//console.log(event.keyCode);
    });
}

function update() {
	if(74 in keysDown){
		if(!is_A_press && is_order_changed && !is_Input_Stop){
			RK3_Stop.splice(order - 1, 1, frame);
			is_Input_Stop = true;
		}
		
		if(!is_A_press){
			K3_Pause_Sound();
		}

        is_A_press = true;
	}

	last_frame = frame;
	frame = parseInt(In_Game_Music.currentTime * 60);
	
	if(last_frame + 1 < frame){
		frame--;
	}

	//if(frame != in_frame[in_frame.length - 1]){
	//	if(frame - 1 != in_frame[in_frame.length - 1]){
	//		skipped_frame.push(frame - 1);
	//	}
	//	in_frame.push(frame);
	//}
}

function K1_Play_Sound(){
	if(K1_Sound_State == "D"){
		D.play();
	}
	if(K1_Sound_State == "C"){
		C.play();
	}
	if(K1_Sound_State == "B"){
		B.play();
	}
	if(K1_Sound_State == "Bp"){
		Bp.play();
	}
	if(K1_Sound_State == "A"){
		A.play();
	}
	if(K1_Sound_State == "Ap"){
		Ap.play();
	}
	if(K1_Sound_State == "G"){
		G.play();
	}
	if(K1_Sound_State == "Gp"){
		Gp.play();
	}
	if(K1_Sound_State == "F"){
		F.play();
	}
	if(K1_Sound_State == "E"){
		E.play();
	}
	if(K1_Sound_State == "Ep"){
		Ep.play();
	}
	if(K1_Sound_State == "DD"){
		DD.play();
	}
	if(K1_Sound_State == "Super"){
		C.play();
		Super_Sound.play();
	}
}

function K1_Pause_Sound(){
	if(K1_Sound_State == "D"){
		D.pause();
		D.currentTime = 0;
	}
	if(K1_Sound_State == "C"){
		C.pause();
		C.currentTime = 0;
	}
	if(K1_Sound_State == "B"){
		B.pause();
		B.currentTime = 0;
	}
	if(K1_Sound_State == "Bp"){
		Bp.pause();
		Bp.currentTime = 0;
	}
	if(K1_Sound_State == "A"){
		A.pause();
		A.currentTime = 0;
	}
	if(K1_Sound_State == "Ap"){
		Ap.pause();
		Ap.currentTime = 0;
	}
	if(K1_Sound_State == "G"){
		G.pause();
		G.currentTime = 0;
	}
	if(K1_Sound_State == "Gp"){
		Gp.pause();
		Gp.currentTime = 0;
	}
	if(K1_Sound_State == "F"){
		F.pause();
		F.currentTime = 0;
	}
	if(K1_Sound_State == "E"){
		E.pause();
		E.currentTime = 0;
	}
	if(K1_Sound_State == "Ep"){
		Ep.pause();
		Ep.currentTime = 0;
	}
	if(K1_Sound_State == "DD"){
		DD.pause();
		DD.currentTime = 0;
	}
	if(K1_Sound_State == "Super"){
		C.pause();
		C.currentTime = 0;
	}

	Zip.play();
}

function K2_Play_Sound(){
	if(K2_Sound_State == "D"){
		D.play();
	}
	if(K2_Sound_State == "C"){
		C.play();
	}
	if(K2_Sound_State == "B"){
		B.play();
	}
	if(K2_Sound_State == "Bp"){
		Bp.play();
	}
	if(K2_Sound_State == "A"){
		A.play();
	}
	if(K2_Sound_State == "Ap"){
		Ap.play();
	}
	if(K2_Sound_State == "G"){
		G.play();
	}
	if(K2_Sound_State == "Gp"){
		Gp.play();
	}
	if(K2_Sound_State == "F"){
		F.play();
	}
	if(K2_Sound_State == "E"){
		E.play();
	}
	if(K2_Sound_State == "Ep"){
		Ep.play();
	}
	if(K2_Sound_State == "DD"){
		DD.play();
	}
	if(K2_Sound_State == "Super"){
		C.play();
		Super_Sound.play();
	}
}

function K2_Pause_Sound(){
	if(K2_Sound_State == "D"){
		D.pause();
		D.currentTime = 0;
	}
	if(K2_Sound_State == "C"){
		C.pause();
		C.currentTime = 0;
	}
	if(K2_Sound_State == "B"){
		B.pause();
		B.currentTime = 0;
	}
	if(K2_Sound_State == "Bp"){
		Bp.pause();
		Bp.currentTime = 0;
	}
	if(K2_Sound_State == "A"){
		A.pause();
		A.currentTime = 0;
	}
	if(K2_Sound_State == "Ap"){
		Ap.pause();
		Ap.currentTime = 0;
	}
	if(K2_Sound_State == "G"){
		G.pause();
		G.currentTime = 0;
	}
	if(K2_Sound_State == "Gp"){
		Gp.pause();
		Gp.currentTime = 0;
	}
	if(K2_Sound_State == "F"){
		F.pause();
		F.currentTime = 0;
	}
	if(K2_Sound_State == "E"){
		E.pause();
		E.currentTime = 0;
	}
	if(K2_Sound_State == "Ep"){
		Ep.pause();
		Ep.currentTime = 0;
	}
	if(K2_Sound_State == "DD"){
		DD.pause();
		DD.currentTime = 0;
	}
	if(K2_Sound_State == "Super"){
		C.pause();
		C.currentTime = 0;
	}
	
	Zip.play();
}

function K3_Play_Sound(){
	Ap.pause();
	Ap.currentTime = 0;

	if(K3_Sound_State == "D"){
		D.play();
	}
	if(K3_Sound_State == "C"){
		C.play();
	}
	if(K3_Sound_State == "B"){
		B.play();
	}
	if(K3_Sound_State == "Bp"){
		Bp.play();
	}
	if(K3_Sound_State == "A"){
		A.play();
	}
	if(K3_Sound_State == "Ap"){
		Ap.play();
	}
	if(K3_Sound_State == "G"){
		G.play();
	}
	if(K3_Sound_State == "Gp"){
		Gp.play();
	}
	if(K3_Sound_State == "F"){
		F.play();
	}
	if(K3_Sound_State == "E"){
		E.play();
	}
	if(K3_Sound_State == "Ep"){
		Ep.play();
	}
	if(K3_Sound_State == "DD"){
		DD.play();
	}
	if(K3_Sound_State == "Super"){
		C.play();
		Super_Sound.play();
	}
	
}

function K3_Pause_Sound(){
	Ap.pause();
	Ap.currentTime = 0;

	if(K3_Sound_State == "D"){
		D.pause();
		D.currentTime = 0;
	}
	if(K3_Sound_State == "C"){
		C.pause();
		C.currentTime = 0;
	}
	if(K3_Sound_State == "B"){
		B.pause();
		B.currentTime = 0;
	}
	if(K3_Sound_State == "Bp"){
		Bp.pause();
		Bp.currentTime = 0;
	}
	if(K3_Sound_State == "A"){
		A.pause();
		A.currentTime = 0;
	}
	if(K3_Sound_State == "Ap"){
		Ap.pause();
		Ap.currentTime = 0;
	}
	if(K3_Sound_State == "G"){
		G.pause();
		G.currentTime = 0;
	}
	if(K3_Sound_State == "Gp"){
		Gp.pause();
		Gp.currentTime = 0;
	}
	if(K3_Sound_State == "F"){
		F.pause();
		F.currentTime = 0;
	}
	if(K3_Sound_State == "E"){
		E.pause();
		E.currentTime = 0;
	}
	if(K3_Sound_State == "Ep"){
		Ep.pause();
		Ep.currentTime = 0;
	}
	if(K3_Sound_State == "DD"){
		DD.pause();
		DD.currentTime = 0;
	}
	if(K3_Sound_State == "Super"){
		C.pause();
		C.currentTime = 0;
	}
	
	Zip.play();
}

function Kids_moves(){
	for(let i = 0; i < Teacher_State.length; i++){
		if(frame == Teacher_State[i]){
			if(Teacher_Sound[i] == "Super"){
				Together_EN.play();
			}else if(Teacher_Sound[i] == "Down"){
				Down_EN.play();
				Haik_EN.play();
			}
		}
	}

	for(let i = 0; i < Teacher_State.length; i++){
		if(frame == Teacher_State[i] + 30){
			if(Teacher_Sound[i] == "Down"){
				Tok_EN.play();
			}
		}
	}

	for(let i = 0; i < K1_Start.length; i++){
		if(frame == K1_Start[i]){
			K1_Sound_State = K1_Sound[i];
			
			if(K1_Sound_State == "Super"){
				K1S = "Super";
			}else{
				K1S = "Just";
			}

			K1_Play_Sound();
		}
	}
	for(let i = 0; i < K1_Stop.length; i++){
		if(frame == K1_Stop[i]){
			K1S = "Idle";
			K1_Pause_Sound();
		}
	}

	for(let i = 0; i < K2_Start.length; i++){
		if(frame == K2_Start[i]){
			K2_Sound_State = K2_Sound[i];

			if(K2_Sound_State == "Super"){
				K2S = "Super";
			}else{
				K2S = "Just";
			}

			K2_Play_Sound();
		}
	}
	for(let i = 0; i < K2_Stop.length; i++){
		if(frame == K2_Stop[i]){
			K2S = "Idle";
			K2_Pause_Sound();
		}
	}
	
	if(K3_Start[order] - 30 <= frame && frame <= K3_Stop[order] + 30){
		if(!is_order_changed){
			is_Input_Start = false;
			is_Input_Stop = false;
			is_order_changed = true;
			order++;
		}
	}
		
	if(frame >= K3_Stop[order - 1] + 30){
		is_order_changed = false;
		is_Input_Start = true;
		is_Input_Stop = true;
	}

	if(Auto){
		for(let i = 0; i < K3_Start.length; i++){
			if(frame == K3_Start[i]){
				K3_Sound_State = K3_Sound[i];

				if(K3_Sound_State == "Super"){
					K3S = "Super";
				}else{
					K3S = "Just";
				}
			
				K3_Play_Sound();
			}
		}
		for(let i = 0; i < K3_Stop.length; i++){
			if(frame == K3_Stop[i]){
				K3S = "Idle";
				
				K3_Pause_Sound();
			}
		}
	}else{
		if(is_order_changed){
			K3_Sound_State = K3_Sound[order - 1];
		}else{
			K3_Sound_State = "Ap";
		}
	}
}

function Set_score(){
	add = 0;

	for(let i = 0; i < K3_Start.length; i++){
		add += 100 - Math.abs((K3_Start[i] - RK3_Start[i]) / 3 * 10);
	}
	for(let i = 0; i < K3_Stop.length; i++){
		add += 100 - Math.abs((K3_Stop[i] - RK3_Stop[i]) / 3 * 10);
	}

	score = add;
}

function Kids_State(){
	Count++;

	if(Count >= 5){
		K1_State();
		K2_State();
		K3_State();

		Count = 0;
	}
}

function K1_State(){
	if(K1S == "Idle"){
		if(K1P == 0){
			if(!Wrong){
				K1P = 1;
			}else{
				K1P = 8;
			}
		}else if(K1P == 1){
			if(!Wrong){
				K1P = 0;
			}else{
				K1P = 7;
			}
		}else if(K1P == 2){
			K1P = 1;
		}else if(K1P == 3){
			K1P = 2;
		}else if(K1P == 4 || K1P == 5 || K1P == 6){
			K1P = 3;
		}else if(K1P == 10 || K1P == 11 || K1P == 12){
			K1P = 6;
		}
	}
	
	if(K1S == "Just"){
		if(K1P == 0){
			K1P = 1;
		}else if(K1P == 1){
			K1P = 2;
		}else if(K1P == 2){
			K1P = 3;
		}else if(K1P == 3){
			K1P = 4;
		}else if(K1P == 4){
			K1P = 5;
		}else if(K1P == 5){
			K1P = 6;
		}else if(K1P == 6){
			K1P = 4;
		}
	}
	
	if(K1S == "Super"){
		if(K1P == 0){
			K1P = 1;
		}else if(K1P == 1){
			K1P = 2;
		}else if(K1P == 2){
			K1P = 3;
		}else if(K1P == 3){
			K1P = 4;
		}else if(K1P == 4){
			K1P = 10;
		}else if(K1P == 10){
			K1P = 11;
		}else if(K1P == 11){
			K1P = 12;
		}else if(K1P == 12){
			K1P = 10;
		}
	}
}

function K2_State(){
	if(K2S == "Idle"){
		if(K2P == 0){
			if(!Wrong){
				K2P = 1;
			}else{
				K2P = 8;
			}
		}else if(K2P == 1){
			if(!Wrong){
				K2P = 0;
			}else{
				K2P = 7;
			}
		}else if(K2P == 2){
			K2P = 1;
		}else if(K2P == 3){
			K2P = 2;
		}else if(K2P == 4 || K2P == 5 || K2P == 6){
			K2P = 3;
		}else if(K2P == 10 || K2P == 11 || K2P == 12){
			K2P = 6;
		}
	}
	
	if(K2S == "Just"){
		if(K2P == 0){
			K2P = 1;
		}else if(K2P == 1){
			K2P = 2;
		}else if(K2P == 2){
			K2P = 3;
		}else if(K2P == 3){
			K2P = 4;
		}else if(K2P == 4){
			K2P = 5;
		}else if(K2P == 5){
			K2P = 6;
		}else if(K2P == 6){
			K2P = 4;
		}
	}
	
	if(K2S == "Super"){
		if(K2P == 0){
			K2P = 1;
		}else if(K2P == 1){
			K2P = 2;
		}else if(K2P == 2){
			K2P = 3;
		}else if(K2P == 3){
			K2P = 4;
		}else if(K2P == 4){
			K2P = 10;
		}else if(K2P == 10){
			K2P = 11;
		}else if(K2P == 11){
			K2P = 12;
		}else if(K2P == 12){
			K2P = 10;
		}
	}
}

function K3_State(){
	if(K3S == "Idle"){
		if(K3P == 0){
			if(!Wrong){
				K3P = 1;
			}else{
				K3P = 8;
			}
		}else if(K3P == 1){
			if(!Wrong){
				K3P = 0;
			}else{
				K3P = 7;
			}
		}else if(K3P == 2){
			K3P = 1;
		}else if(K3P == 3){
			K3P = 2;
		}else if(K3P == 4 || K3P == 5 || K3P == 6){
			K3P = 3;
		}else if(K3P == 10 || K3P == 11 || K3P == 12){
			K3P = 6;
		}
	}
	
	if(K3S == "Just"){
		if(K3P == 0){
			K3P = 1;
		}else if(K3P == 1){
			K3P = 2;
		}else if(K3P == 2){
			K3P = 3;
		}else if(K3P == 3){
			K3P = 4;
		}else if(K3P == 4){
			K3P = 5;
		}else if(K3P == 5){
			K3P = 6;
		}else if(K3P == 6){
			K3P = 4;
		}
	}
	
	if(K3S == "Super"){
		if(K3P == 0){
			K3P = 1;
		}else if(K3P == 1){
			K3P = 2;
		}else if(K3P == 2){
			K3P = 3;
		}else if(K3P == 3){
			K3P = 4;
		}else if(K3P == 4){
			K3P = 10;
		}else if(K3P == 10){
			K3P = 11;
		}else if(K3P == 11){
			K3P = 12;
		}else if(K3P == 12){
			K3P = 10;
		}
	}
}

function Kid1() {
	if(K1P == 0){
		ctx.drawImage(Idle1, K1X, K1Y);
	}
	if(K1P == 1){
		ctx.drawImage(Idle2, K1X, K1Y);
	}
	if(K1P == 2){
		ctx.drawImage(Just1, K1X, K1Y);
	}
	if(K1P == 3){
		ctx.drawImage(Just2, K1X, K1Y);
	}
	if(K1P == 4){
		ctx.drawImage(Just3, K1X, K1Y);
	}
	if(K1P == 5){
		ctx.drawImage(Just4, K1X, K1Y);
	}
	if(K1P == 6){
		ctx.drawImage(Just5, K1X, K1Y);
	}
	if(K1P == 7){
		ctx.drawImage(Sad1, K1X, K1Y);
	}
	if(K1P == 8){
		ctx.drawImage(Sad2, K1X, K1Y);
	}
	if(K1P == 9){
		ctx.drawImage(SuperReady, K1X, K1Y);
	}
	if(K1P == 10){
		ctx.drawImage(Super1, K1X, K1Y);
	}
	if(K1P == 11){
		ctx.drawImage(Super2, K1X, K1Y);
	}
	if(K1P == 12){
		ctx.drawImage(Super3, K1X, K1Y);
	}
}

function Kid2() {
	if(K2P == 0){
		ctx.drawImage(Idle1, K2X, K2Y);
	}
	if(K2P == 1){
		ctx.drawImage(Idle2, K2X, K2Y);
	}
	if(K2P == 2){
		ctx.drawImage(Just1, K2X, K2Y);
	}
	if(K2P == 3){
		ctx.drawImage(Just2, K2X, K2Y);
	}
	if(K2P == 4){
		ctx.drawImage(Just3, K2X, K2Y);
	}
	if(K2P == 5){
		ctx.drawImage(Just4, K2X, K2Y);
	}
	if(K2P == 6){
		ctx.drawImage(Just5, K2X, K2Y);
	}
	if(K2P == 7){
		ctx.drawImage(Sad1, K2X, K2Y);
	}
	if(K2P == 8){
		ctx.drawImage(Sad2, K2X, K2Y);
	}
	if(K2P == 9){
		ctx.drawImage(SuperReady, K2X, K2Y);
	}
	if(K2P == 10){
		ctx.drawImage(Super1, K2X, K2Y);
	}
	if(K2P == 11){
		ctx.drawImage(Super2, K2X, K2Y);
	}
	if(K2P == 12){
		ctx.drawImage(Super3, K2X, K2Y);
	}
}

function Kid3() {
	if(K3P == 0){
		ctx.drawImage(Idle1, K3X, K3Y);
	}
	if(K3P == 1){
		ctx.drawImage(Idle2, K3X, K3Y);
	}
	if(K3P == 2){
		ctx.drawImage(Just1, K3X, K3Y);
	}
	if(K3P == 3){
		ctx.drawImage(Just2, K3X, K3Y);
	}
	if(K3P == 4){
		ctx.drawImage(Just3, K3X, K3Y);
	}
	if(K3P == 5){
		ctx.drawImage(Just4, K3X, K3Y);
	}
	if(K3P == 6){
		ctx.drawImage(Just5, K3X, K3Y);
	}
	if(K3P == 7){
		ctx.drawImage(Sad1, K3X, K3Y);
	}
	if(K3P == 8){
		ctx.drawImage(Sad2, K3X, K3Y);
	}
	if(K3P == 9){
		ctx.drawImage(SuperReady, K3X, K3Y);
	}
	if(K3P == 10){
		ctx.drawImage(Super1, K3X, K3Y);
	}
	if(K3P == 11){
		ctx.drawImage(Super2, K3X, K3Y);
	}
	if(K3P == 12){
		ctx.drawImage(Super3, K3X, K3Y);
	}
}
		
function render() {
	Kids_moves();
	Kids_State();

	Kid1();
	Kid2();
	Kid3();

	Set_score();

	if(TXT){
		ctx.fillStyle = "black";
		ctx.font = "64px VT323";
		ctx.fillText(`order : ${order}`, 10, 50);
		ctx.fillText(`original score : ${add}`, 10, 100);
		ctx.fillText(`real score : ${score / (order * 2)}`, 10, 150);
	}
}

function main() {
    if(Start){
		
	}else{
		if(In_Game_Music.currentTime == 0){
		    In_Game_Music.play();
		}
		
		ctx.drawImage(BG, 0, 0);

		update();
		
		render();
	}
    requestAnimationFrame(main);
}

loadAudio();
loadImage();
setKeyboardListener();
main();