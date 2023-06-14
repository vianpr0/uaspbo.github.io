class Mobil {
	constructor(merk, kecepatanMax) {
		this.merk = merk;
		this.kecepatanMax = kecepatanMax;
		this.kecepatanSaatIni = 0;
		this.isIncrement = true;
	}

	gas() {
		if (this.kecepatanSaatIni < this.kecepatanMax && this.isIncrement == true) {
			this.kecepatanSaatIni++;
			document.getElementById("kecepatan-mobil").textContent =
				this.kecepatanSaatIni;
			setTimeout(gas, 100);
		} else if (this.kecepatanSaatIni == this.kecepatanMax) {
			alert("Mobil mencapai batas kecepatan maksimal!");
			this.isIncrement = true;
		} else {
			this.isIncrement = true;
		}
	}

	rem() {
		this.isIncrement = false;
		this.kecepatanSaatIni = 0;
		document.getElementById("kecepatan-mobil").textContent =
			this.kecepatanSaatIni;
		alert("Mobil dihentikan.");
	}

	getKecepatan() {
		return this.kecepatanSaatIni;
	}
}

class MobilBalap extends Mobil {
	constructor(merk, kecepatanMax, turboBoost) {
		super(merk, kecepatanMax);
		this.turboBoost = turboBoost;
	}

	gas() {
		if (this.kecepatanSaatIni < this.kecepatanMax && this.isIncrement == true) {
			this.kecepatanSaatIni++;
			document.getElementById("kecepatan-mobil").textContent =
				this.kecepatanSaatIni;
			setTimeout(gas, 100 - this.turboBoost);
		} else if (this.kecepatanSaatIni == this.kecepatanMax) {
			alert("Mobil mencapai batas kecepatan maksimal!");
			this.isIncrement = true;
		} else {
			this.isIncrement = true;
		}
	}
}

// Membuat objek dari kelas "Mobil" dan "MobilBalap"
const mobilBiasa = new Mobil("Toyota", 200);
const mobilBalap = new MobilBalap("Ferrari", 300, 50);
let mobilBaru;

function gas() {
	const mobilSelection = document.querySelector(
		'input[name="car-type"]:checked'
	).id;

	if (mobilSelection === "mobil-biasa") {
		mobilBiasa.gas();
	} else if (mobilSelection === "mobil-balap") {
		mobilBalap.gas();
	} else {
		mobilBaru.gas();
	}
}

function rem() {
	const mobilSelection = document.querySelector(
		'input[name="car-type"]:checked'
	).id;

	if (mobilSelection === "mobil-biasa") {
		mobilBiasa.rem();
	} else if (mobilSelection === "mobil-balap") {
		mobilBalap.rem();
	} else {
		mobilBaru.rem();
	}
}

function tambahMobil() {
	const jenisMobil = parseInt(
		prompt("Membuat mobil biasa(0) atau mobil balap(1). Pilih 0/1: ")
	);
	const merk = prompt("Masukkan merek mobil:");
	const kecepatanMax = parseInt(prompt("Masukkan kecepatan maksimal mobil:"));

	if (jenisMobil == 1) {
		const kecepatanTurbo = parseInt(prompt("Masukkan kecepatan turbo mobil:"));
		mobilBaru = new MobilBalap(merk, kecepatanMax, kecepatanTurbo);
	} else {
		mobilBaru = new Mobil(merk, kecepatanMax);
	}

	const mobilBaruElement = document.createElement("div");
	mobilBaruElement.innerHTML = `
        <div class="car-item">
            <input type="radio" id="${merk.toLowerCase()}" name="car-type" />
            <label for="${merk.toLowerCase()}">${merk}</label>
        </div>
    `;
	document.getElementById("car-list").appendChild(mobilBaruElement);
}

function gantiMobil() {
	const mobilSelection = document.querySelector(
		'input[name="car-type"]:checked'
	).id;

	const output = document.getElementById("output");
	if (mobilSelection === "mobil-biasa") {
		output.innerHTML = `Mobil ${mobilBiasa.merk}`;
	} else if (mobilSelection === "mobil-balap") {
		output.innerHTML = `Mobil ${mobilBalap.merk}`;
	} else {
		output.innerHTML = `Mobil ${mobilBaru.merk}`;
	}
}
