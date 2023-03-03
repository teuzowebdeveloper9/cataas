
document.getElementById("button").addEventListener("click", function () {
    const text = document.getElementById("text").value
    const baseUrl = 'https://cataas.com/cat';
    let url = '';
    if (text.length) {
        url = `${url}/says/${text}`;
    }
    const timeStamp = new Date().getTime();
    document.getElementById("cat").src = `${baseUrl}${url}?${timeStamp}`;
    
})