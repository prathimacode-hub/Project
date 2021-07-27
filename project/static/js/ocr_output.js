function textToAudio() {
    var x = document.getElementById("text_output").textContent;
    cancelAudio();
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = x;
    speech.volume = 1;
    speech.rate = 0.7;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

function pauseAudio() {
    window.speechSynthesis.pause();
}

function resumeAudio() {
    window.speechSynthesis.resume();
}

function cancelAudio() {
    window.speechSynthesis.cancel();
}

if (annyang) {
    // Add our commands to annyang
    annyang.addCommands({
        'Go to Home': () => {
            document.getElementById('home_page').click()
        },
        'Go to Voice': () => {
            document.getElementById('revoice_page').click()
        },
        'Go to Synthesizer': () => {
            document.getElementById('synthesiser_page').click()
        },
        'Go to Our Vision': () => {
            document.getElementById('our_vision').click()
        },
        'Scroll Down': () => {
            window.scrollBy(0, 500)
        },
        'Scroll Up': () => {
            window.scrollBy(0, -500)
        },
        'start reading': textToAudio,
        'pause reading': pauseAudio,
        'resume reading': resumeAudio,
        'stop reading': cancelAudio,
    });

    // Start listening. You can call this here, or attach this call to an event, button, etc.
}

function speakcommand() {
    annyang.start({
        autoRestart: false
    });
}
