let maxrpm = 0;
function generateSpeedometer(maxRPM) {
  const svgNamespace = "http://www.w3.org/2000/svg";
  const speedometer = document.querySelector('.speedometer');
  speedometer.innerHTML = ''; // Clear existing elements

  const segments = Math.ceil(((maxRPM+1000) / 1000));
  const degreesPerSegment = 270 / segments;
  const radius = 88.5; // Radius of the circle
  const tickSize = 14; // Adjustable tick size
  const subTickSize = 7; // Adjustable sub-tick size

  for (let i = 0; i <= segments; i++) {
      const rpm = i * 1000;
      const angle = 180 + i * degreesPerSegment; // Starting angle adjustment

      // Main Tick
      createTick(angle, tickSize);

      if (i < segments) {
          // Sub-Ticks
          createTick(angle + degreesPerSegment / 3, subTickSize);
          createTick(angle + 2 * degreesPerSegment / 3, subTickSize);
      }

      // Number
      createNumber(angle, rpm / 1000);
  }

  function createTick(angle, size) {
      const tickX1 = 100 + radius * Math.cos((angle - 90) * Math.PI / 180);
      const tickY1 = 100 + radius * Math.sin((angle - 90) * Math.PI / 180);
      const tickX2 = 100 + (radius - size) * Math.cos((angle - 90) * Math.PI / 180);
      const tickY2 = 100 + (radius - size) * Math.sin((angle - 90) * Math.PI / 180);

      const tick = document.createElementNS(svgNamespace, 'line');
      tick.setAttribute('x1', tickX1);
      tick.setAttribute('y1', tickY1);
      tick.setAttribute('x2', tickX2);
      tick.setAttribute('y2', tickY2);
      tick.setAttribute('stroke', "rgba(225, 225, 225, 1.0)");
      speedometer.appendChild(tick);
  }

function createNumber(angle, numberText) {
  const textRadius = radius - 22; // Adjust to align the center of the number with the tick
  const textX = 100 + textRadius * Math.cos((angle - 90) * Math.PI / 180);
  const textY = 100 + textRadius * Math.sin((angle - 90) * Math.PI / 180);

  const number = document.createElementNS(svgNamespace, 'text');
  number.setAttribute('x', textX);
  number.setAttribute('y', textY);
  number.setAttribute('fill', "rgba(185,185,185, 1.0)");
  number.setAttribute('font-size', '10');
  number.setAttribute('font-family', '"Kanit", sans-serif');
  number.setAttribute('text-anchor', 'middle');
  number.setAttribute('alignment-baseline', 'middle');
  number.setAttribute('dominant-baseline', 'middle'); // Added for better cross-browser alignment
  number.setAttribute('transform', `rotate(0 ${textX} ${textY})`);
  number.setAttribute('filter', `drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.9))`);

  number.textContent = numberText;
  speedometer.appendChild(number);
}

}

function genrpmbar(percent) {
  const circle = document.querySelector('.rpm-bar');
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  const startAngle = 20; // Starting angle in degrees
  const endAngle = 270; // Ending angle in degrees

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  const adjustedPercent = (percent / 100) * (endAngle - startAngle) + startAngle;
  const offset = circumference - (adjustedPercent / 360) * circumference;
  circle.style.strokeDashoffset = offset;
}


function gennitrousbar(percent) {
  const circle = document.querySelector('.nitrous-bar');
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  const startAngle = 0; // Starting angle in degrees
  const endAngle = 155; // Ending angle in degrees

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  const adjustedPercent = (percent / 100) * (endAngle - startAngle) + startAngle;
  const offset = circumference - (adjustedPercent / 360) * circumference;
  circle.style.strokeDashoffset = offset;
}

function gennitrousbarfill(percent) {
  const circle = document.querySelector('.nitrous-bar-fill');
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  const startAngle = 0; // Starting angle in degrees
  const endAngle = 153; // Ending angle in degrees

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  const adjustedPercent = (percent / 100) * (endAngle - startAngle) + startAngle;
  const offset = circumference - (adjustedPercent / 360) * circumference;
  circle.style.strokeDashoffset = offset;
}


function genrpmredline(percent) {
  const circle = document.querySelector('.rpm-redline');
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  const startAngle = -270; // Starting angle in degrees
  const endAngle = 250; // Ending angle in degrees

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  const adjustedPercent = (percent / 100) * (endAngle - startAngle) + startAngle;
  const offset = circumference - (adjustedPercent / 360) * circumference;
  circle.style.strokeDashoffset = offset;
}

function genassistbar(percent) {
  const circle = document.querySelector('.speedo-assist-bar');
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  const startAngle = 20; // Starting angle in degrees
  const endAngle = 270; // Ending angle in degrees

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  const adjustedPercent = (percent / 100) * (endAngle - startAngle) + startAngle;
  const offset = circumference - (adjustedPercent / 360) * circumference;
  circle.style.strokeDashoffset = offset;
}


function updateNeedle(rpm, maxRPM) {
  const needle = document.getElementById('speedometer-needle');
  const totalDegrees = -270; // Total degrees of the speedometer scale

  // Use 'let' instead of 'const' to allow reassignment
  let maxPossibleRPM = Math.ceil((maxRPM + 1000) / 1000) * 1000; // Align with segment scaling

  // Calculate degrees per RPM based on the total scale
  const degreesPerRPM = totalDegrees / maxPossibleRPM;

  // Calculate the angle for the given RPM
  // The scale starts at 180 degrees and ends at -90 degrees
  let angle = 180 - (rpm * degreesPerRPM);

  if (angle < 207) {
    angle = 207;
  }

  needle.style.transform = `rotate(${angle}deg)`;
  needle.style.transformOrigin = "50% 50%";
}


function updateSpeedText(speed) {
  document.getElementById("speed").innerHTML = speed;
}

function updateGearText(gear,transmissiontype,speedunit,hilo) {
  if (gear > 0 ){
    document.getElementById("transmissiongear").innerHTML = gear;
  }
  if (gear <= 0){
    document.getElementById("transmissiongear").innerHTML = "R";
  }
  if (transmissiontype == 0) {
      document.getElementById("transmissiontype").innerHTML = "ST";
  }
  if (transmissiontype == 1) {
      document.getElementById("transmissiontype").innerHTML = "AT";
  }
  if (transmissiontype == 2) {
      document.getElementById("transmissiontype").innerHTML = "MT";
  }
  if (transmissiontype == 3) {
    document.getElementById("transmissiontype").innerHTML = "EV";
  }
  if (speedunit == "kmh") {
      document.getElementById("speedunit").innerHTML = "KM/H";
  }
  if (speedunit == "mph") {
      document.getElementById("speedunit").innerHTML = "MPH";
  }
  if (hilo == false) {
      document.getElementById("diffrange").innerHTML = "";
  }
  if (hilo == true) {
      document.getElementById("diffrange").innerHTML = "LOW";
  }
}

function hideDiv(name) {
  let element;
  if (name === "tcs"){
    element = document.getElementById("tccircle");
    if (element) element.style.display = 'none';
    element = document.getElementById("assisttc");
    if (element) element.style.display = 'none';
  }
  else if (name === "esc"){
    element = document.getElementById("esccircle");
    if (element) element.style.display = 'none';
    element = document.getElementById("assistesc");
    if (element) element.style.display = 'none';
  }
  else if (name === "nitrous"){
    element = document.getElementById("nitrous-bar");
    if (element) element.style.display = 'none';
    element = document.getElementById("nitrous-bar-fill");
    if (element) element.style.display = 'none';
  }
  else{
    element = document.getElementById(name);
    if (element) element.style.display = 'none';
  }
}

function showDiv(name) {
  let element;
  if (name === "tcs"){
    element = document.getElementById("tccircle");
    if (element) element.style.display = 'block';
    element = document.getElementById("assisttc");
    if (element) element.style.display = 'block';
  }
  else if (name === "esc"){
    element = document.getElementById("esccircle");
    if (element) element.style.display = 'block';
    element = document.getElementById("assistesc");
    if (element) element.style.display = 'block';
  }
  else if (name === "nitrous"){
    element = document.getElementById("nitrous-bar");
    if (element) element.style.display = 'block';
    element = document.getElementById("nitrous-bar-fill");
    if (element) element.style.display = 'block';
  }
  else{
    element = document.getElementById(name);
    if (element) element.style.display = 'block';
  }
}

function assiststatus(tcs, ecs,lc,atlock) {
  let tcsElementStroke = document.getElementById("tccircle");
  let tcsElementFill = document.getElementById("assisttc");
  if (tcs) {
    tcsElementStroke.style.stroke = 'rgba(255, 255, 255, 1.0)';
    tcsElementFill.style.fill = 'rgba(255, 255, 255, 1.0)';
  } else {
    tcsElementStroke.style.stroke = 'rgba(255, 255, 255, 0.644)';
    tcsElementFill.style.fill = 'rgba(255, 255, 255, 0.644)';
  }

  let ecsElementStroke = document.getElementById("esccircle");
  let ecsElementFill = document.getElementById("assistesc");
  if (ecs) {
    ecsElementStroke.style.stroke = 'rgba(255, 255, 255, 1.0)';
    ecsElementFill.style.fill = 'rgba(255, 255, 255, 1.0)';
  } else {
    ecsElementStroke.style.stroke = 'rgba(255, 255, 255, 0.644)';
    ecsElementFill.style.fill = 'rgba(255, 255, 255, 0.644)';
  }

  let atlockicon = document.getElementById("atlock");
  if (atlock) {
    atlockicon.innerHTML = "🔒";
  } else {
    atlockicon.innerHTML = "";
  }

  let lcdoc = document.getElementById("launchcontrol");
  if (lc == "off") {
    lcdoc.innerHTML = "";
  } else if (lc == "on") {
    lcdoc.innerHTML = "LC";
    lcdoc.style.fill = 'rgba(255, 255, 255, 0.644)';
  } else if (lc == "active") {
    lcdoc.innerHTML = "LC";
    lcdoc.style.fill = 'rgba(255, 255, 255, 1.0)';
  }
}

let currentScore = 0;

let isBankingAnimationActive = false;


function updateScore(newScore) {
  const scoreboard = document.getElementById('scoreboard');
  const scoreboardContent = document.getElementById('scoreboard-content');

  if (isBankingAnimationActive) {
    scoreboard.style.opacity = 0;
    return;
}

  if (newScore > 0) {
      scoreboard.style.opacity = 1;
      scoreboardContent.textContent = newScore.toLocaleString('de-DE');
  } else {
      scoreboard.style.opacity = 0;
  }

  currentScore = newScore;
}


let previousMultiplier = 0;

function updateMultiplier(multiplier) {
    const multiplierElement = document.getElementById('multiplier');
    const multiplierContent = document.getElementById('multiplier-content');

    if (isBankingAnimationActive) {
      multiplierElement.style.opacity = 0;
      return;
  }

    if (multiplier >= 1) {
        multiplierElement.style.opacity = 1;
        multiplierContent.textContent = multiplier.toFixed(1) + 'x';

        // Trigger the impact animation only if the multiplier has changed
        if (multiplier !== previousMultiplier) {
            multiplierContent.classList.add('impact-animation');
            previousMultiplier = multiplier;
        }
    } else {
        multiplierElement.style.opacity = 0;
    }
}

function notifyBackendAnimationState(state) {
  fetch(`https://${GetParentResourceName()}/isBankingAnimationActive`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ isBankingAnimationActive: state })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response if necessary, but no logging required
  })
  .catch(error => {
    // Handle errors if necessary, but no logging required
  });
}

function triggerBankingAnimation(amount) {
  const bankElement = document.getElementById('bank');
  const bankContent = document.getElementById('bank-content');
  
  bankContent.textContent = amount.toLocaleString('de-DE');

  isBankingAnimationActive = true;

  notifyBackendAnimationState(isBankingAnimationActive);

  // Remove any previous animation classes
  bankElement.classList.remove('impact-animation', 'fade-out');

  // Trigger reflow to restart animation
  void bankElement.offsetWidth;

  // Add the impact animation class
  bankElement.classList.add('impact-animation');
  
  // Show the element
  bankElement.style.opacity = 1;

  // Schedule fade out after the impact animation ends
  setTimeout(() => {
      bankElement.classList.add('fade-out');
  }, 500); // Duration of the impact animation

  setTimeout(() => {
    isBankingAnimationActive = false;
    notifyBackendAnimationState(isBankingAnimationActive);
  }, 3500); // Duration of the fadeout animation
}

// Remove the impact animation class when the animation ends
const multiplierContent = document.getElementById('multiplier-content');
multiplierContent.addEventListener('animationend', function() {
    multiplierContent.classList.remove('impact-animation');
});

function showSkillMessage(message) {
  const skillElement = document.getElementById('skill');
  const skillContent = document.getElementById('skill-content');
  
  if (isBankingAnimationActive) {
    skillElement.style.opacity = 0;
    return;
}
  skillContent.textContent = message;

  // Remove any previous animation classes
  skillElement.classList.remove('drop-in', 'drop-out');

  // Trigger reflow to restart animation
  void skillElement.offsetWidth;

  // Add the drop-in animation class
  skillElement.classList.add('drop-in');

  // Remove the drop-in class and add the drop-out class after a delay
  setTimeout(() => {
      skillElement.classList.remove('drop-in');
      skillElement.classList.add('drop-out');
  }, 1250); // Display the message for 1.25 seconds before dropping out
}


window.addEventListener('message', function(event) {
  if (event.data.action === 'startspeedo') {
      maxrpm = event.data.maxrpm; 
      generateSpeedometer(event.data.maxrpm);
      gennitrousbar(100);
      genrpmbar(100);
      genrpmredline(-100);
      genassistbar(100);
  }
  if (event.data.action === 'update') {
    updateNeedle(event.data.currentrpm, maxrpm);
    updateSpeedText(Math.ceil(event.data.currentspeed));
    assiststatus(event.data.tcs,event.data.ecs,event.data.lc,event.data.atlockstatus);
    gennitrousbarfill(event.data.nitrous);
    updateScore(event.data.currentdriftscore);
    updateMultiplier(event.data.currentdriftmultiplier);
  }
  if (event.data.action === 'shift') {
    updateGearText(event.data.currentgear,event.data.transmissiontype,event.data.speedtype,event.data.differential);
  }
  if (event.data.action === 'show') {
    showDiv('maindiv')
  }
  if (event.data.action === 'hide') {
    hideDiv('maindiv')
  }
  if (event.data.action === 'driftscore') {
    showSkillMessage(event.data.message)
  }
  if (event.data.action === 'driftbank') {
    triggerBankingAnimation(event.data.totalvalue);
  }
  if (event.data.action === 'showassist') {
    showDiv(event.data.assist)
  }
  if (event.data.action === 'hideassist') {
    hideDiv(event.data.assist)
  }
  if (event.data.action === 'shownitrous') {
    showDiv("nitrous")
  }
  if (event.data.action === 'hidenitrous') {
    hideDiv("nitrous")
  }
});