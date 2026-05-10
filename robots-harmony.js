// RANDOM COLORS
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// KEYBOARD COLOR CHANGES

function changeArmColor(robotName) {
    const color = getRandomColor();
    document.getElementById(`${robotName}-arm-left`).style.backgroundColor = color;
    document.getElementById(`${robotName}-arm-right`).style.backgroundColor = color;
}

function changeLegColor(robotName) {
    const color = getRandomColor();
    document.getElementById(`${robotName}-leg-left`).style.backgroundColor = color;
    document.getElementById(`${robotName}-leg-right`).style.backgroundColor = color;
}

function changeEyeColor(robotName) {
    const color = getRandomColor();
    document.getElementById(`${robotName}-eye-left`).style.backgroundColor = color;
    document.getElementById(`${robotName}-eye-right`).style.backgroundColor = color;
}

function changeFaceColor(robotName) {
    const color = getRandomColor();
    document.getElementById(`${robotName}-eyes`).style.backgroundColor = color;
}

let audioEnabled = false;

// Click Sound
document.addEventListener('click', function() {
    if (!audioEnabled) {
        audioEnabled = true;
        console.log("🔊 Audio enabled!");
    }
});

// hover
function setupRobotHover(robotClass, soundId) {
    const robot = document.querySelector(`.${robotClass}`);
    const sound = document.getElementById(soundId);
    
    if (!robot || !sound) {
        console.log(`Missing: ${robotClass} or ${soundId}`);
        return;
    }
    
    sound.volume = 0.3;
    
    robot.addEventListener('mouseenter', function() {
        if (!audioEnabled) return;
        
        sound.currentTime = 0;
        sound.play().then(() => {
            console.log(`Playing: ${soundId}`);
        }).catch(e => {
            console.log(`Audio error for ${soundId}:`, e.message);
        });
    });
    
    robot.addEventListener('mouseleave', function() {
        sound.pause();
        sound.currentTime = 0;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("🤖 Initializing Robots Gallery...");
    
    // hover sounds
    setupRobotHover('class-Alex', 'alex-sound');
    setupRobotHover('class-Kostas', 'kostas-sound');
    setupRobotHover('class-Efie', 'efie-sound');
    setupRobotHover('class-Louisa', 'louisa-sound');
    
    // Keyboard event listeners
    document.addEventListener('keydown', function(event) {
        // ALEX
        if (event.key === '1') changeArmColor('alex');
        if (event.key === '2') changeLegColor('alex');
        if (event.key === 'q' || event.key === 'Q') changeEyeColor('alex');
        if (event.key === 'a' || event.key === 'A') changeFaceColor('alex');
        
        // KOSTAS
        if (event.key === '3') changeArmColor('kostas');
        if (event.key === '4') changeLegColor('kostas');
        if (event.key === 'w' || event.key === 'W') changeEyeColor('kostas');
        if (event.key === 's' || event.key === 'S') changeFaceColor('kostas');
        
        // EFIE
        if (event.key === '5') changeArmColor('efie');
        if (event.key === '6') changeLegColor('efie');
        if (event.key === 'e' || event.key === 'E') changeEyeColor('efie');
        if (event.key === 'd' || event.key === 'D') changeFaceColor('efie');
        
        // LOUISA
        if (event.key === '7') changeArmColor('louisa');
        if (event.key === '8') changeLegColor('louisa');
        if (event.key === 'r' || event.key === 'R') changeEyeColor('louisa');
        if (event.key === 'f' || event.key === 'F') changeFaceColor('louisa');
    });
    
    console.log("✅ Robots Gallery Ready!");
    console.log("👉 Click anywhere to enable sounds, then hover over robots!");
});