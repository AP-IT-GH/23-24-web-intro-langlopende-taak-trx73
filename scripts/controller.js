const ips = ['192.168.33.10', '192.168.33.11', '192.168.33.12', 
             '192.168.33.13', '192.168.33.14', '192.168.33.15'];

let currentFunction = null;

const activeMessageElement = document.getElementById('active-message');

// Functie Demo
async function Demo() {
    // Stop de vorige functie als die actief is
    if (currentFunction) clearInterval(currentFunction);
    
    console.log("Demo functie is actief");
    
    // Hier komt de code voor de Demo functie
    await executeEverySecond(() => {
        console.log("Demo functie draait...");
    });
}

// Functie kittscanner
async function kittscanner() {
    // Stop de vorige functie als die actief is
    if (currentFunction) clearInterval(currentFunction);
    
    console.log("Kittscanner functie is actief");
    
    // Hier komt de code voor de kittscanner functie
    await executeEverySecond(() => {
        console.log("Kittscanner functie draait...");
    });
}

// Functie looplicht
async function looplicht() {
    // Stop de vorige functie als die actief is
    if (currentFunction) clearInterval(currentFunction);
    
    console.log("Looplicht functie is actief");
    
    // Hier komt de code voor de looplicht functie
    await executeEverySecond(() => {
        console.log("Looplicht functie draait...");
    });
}

// Hier komt de code voor de eigenkleuren functie -------------------------

// Functie eigenkleuren
async function eigenkleuren() {
    // Stop de vorige functie als die actief is
    if (currentFunction) clearInterval(currentFunction);
    
    console.log("Eigenkleuren functie is actief");

    document.getElementById('active-message').textContent = 'Huidige animatie: kies je eigen kleuren';
    
    
    // Hier komt de code voor de eigenkleuren functie -------------------------
    
    function setLampColor(ip, colorValue) {
        const red = parseInt(colorValue.substring(1, 3), 16);
        const green = parseInt(colorValue.substring(3, 5), 16);
        const blue = parseInt(colorValue.substring(5, 7), 16);
        
        const url = `http://${ip}/color/0?turn=on&red=${red}&green=${green}&blue=${blue}&white=0`;
        
        fetch(url)
        .then(response => {
            if (response.ok) {
                console.log(`Kleur succesvol ingesteld voor lamp met IP: ${ip}.`);
            } else {
                throw new Error(`Er is een fout opgetreden bij het instellen van de kleur voor lamp met IP: ${ip}.`);
            }
        })
        .catch(error => {
            console.error(error);
            console.log(`Er is een fout opgetreden bij het instellen van de kleur voor lamp met IP: ${ip}. Probeer het later opnieuw.`);
        });
    }
    
    function setCustomColors() {
        for (let i = 0; i < ips.length; i++) {
            const inputId = `eigen_kleur${i}`;
            const colorValue = document.getElementById(inputId).value;
            setLampColor(ips[i], colorValue);
        }
    }
    
    // Roep setCustomColors aan om de kleuren in te stellen
    setCustomColors();
    
    await executeEverySecond(() => {
        console.log("Eigenkleuren functie draait...");
    });
}

// Functie morse
async function morse() {
    // Stop de vorige functie als die actief is
    if (currentFunction) clearInterval(currentFunction);
    
    console.log("Morse functie is actief");
    
    // Hier komt de code voor de morse functie
    await executeEverySecond(() => {
        console.log("Morse functie draait...");
    });
}

// Functie willekeurig
async function willekeurig() {
    // Stop de vorige functie als die actief is
    if (currentFunction) clearInterval(currentFunction);
    
    console.log("Willekeurig functie is actief");
    
    document.getElementById('active-message').textContent = 'Huidige animatie: willekeurig';
    
    async function makeApiRequest(ip) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        
        const url = `http://${ip}/color/0?turn=on&red=${red}&green=${green}&blue=${blue}&white=0`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(`Kleur succesvol ingesteld voor lamp met IP: ${ip}.`);
        } catch (error) {
            console.error('There was a problem with the API request:', error.message);
        }
    }
    
    async function willekeurigLoop() {
        const randomIndex = Math.floor(Math.random() * ips.length); // Kies een willekeurige index
        const randomIp = ips[randomIndex]; // Selecteer de lamp met de willekeurige index

        await makeApiRequest(randomIp); // Wijzig de kleur van de geselecteerde lamp

        // Herhaal de willekeurige kleurveranderingen
        currentFunction = setTimeout(willekeurigLoop, 1000);
    }
    
    // Start de willekeurige kleurveranderingen
    willekeurigLoop();
}

// Voorbeeld van hoe je een functie kunt activeren:
Demo(); // Hierdoor wordt de Demo functie gestart
