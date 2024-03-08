export default function enterState(){
    console.log("message!")
    const secretMsg = window.location.hash.slice(1)
    const message = atob(secretMsg)
    document.body.innerHTML = template.replace("{msg}", message)
}

const template = `
<div>
<h2>Here's a secret message...</h2>
<p>{msg}</p>
<a href="/">Create your own message</a>
`
