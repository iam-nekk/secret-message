import enterCopyState from "./copyMessageState.js"

export default function enterState(){
    document.body.innerHTML = template

    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => createMessage(event, form))
}

const template = `
<div>
<h2>Enter a secret message<h2/>
<form> 
    <input type="text" name="msg" id="msg" placeholder="My Secret Message">
    <button type="submit">Create</button>
</form>
` //idk why but if you close the div it will create an empty one at the end

function createMessage(event, form){
    event.preventDefault()

    console.log("hey")

    const formData = new FormData(form)

    for (const val of formData.values()){
        console.log("val: ", val)
        enterCopyState(val)
    }

}
