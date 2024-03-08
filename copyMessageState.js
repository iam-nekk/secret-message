export default function enterState(message){
    console.log("eyup", message)
    const secretMsg = btoa(message)
    console.log(secretMsg)
    const secretUrl = new URL("#" + secretMsg, window.location)

    document.body.innerHTML = template.replace("{secretmsg}", secretUrl)

    const copyButton = document.querySelector("button")
    copyButton.addEventListener("click", () => {
        console.log(secretUrl)
        navigator.clipboard.writeText(secretUrl)
    })
}

const template = `
<div>
<h2>Share this link!</h2>
<input type="text" id="secretmsg" value={secretmsg} readonly>
<button>Copy</button>
`