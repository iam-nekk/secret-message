import enterDefaultState from "./defaultState.js"
import enterMessageState from "./messageState.js"

document.addEventListener("DOMContentLoaded", async () => {
    // We check for which state the app is in.
    // There are 3 possible states: 
    // - Default, where the user can input their secret message
    // - Copy Message, where the user can copy the link to their secret message
    // - With a message, where another user open a link with a secret message
    // Depending on which state we're in, some HTML will be injected into the DOM
    // each with their own logic.

    // When we load the page, we're either in default, or message state
    // If there's a message, it will be included in the URL, thats how we know

    console.log("message? ", !!window.location.hash, window.location.hash)
    if (!window.location.hash) enterDefaultState()
    else enterMessageState()

    //document.body.innerHTML = await (await fetch("test.html")).text()
})

