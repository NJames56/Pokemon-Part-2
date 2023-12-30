const button = document.querySelector(".btn");
const input = document.getElementById("myInput");
const result = document.getElementById("result");


input.addEventListener("change", (e) => {
    const value = e.currentTarget.value;
console.log(value);

result.innerText = value;


button.addEventListener("click", (e) => {
    
});
});


function elementFromHtml(html) {
    const template = document.createElement("template");
    
    template.innerHTML = html.trim();
    
    return template.content.firstElementChild;
    
    };