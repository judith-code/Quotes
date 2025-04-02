async function getQuote() {
    const apiUrl="http://api.quotable.io/random"
    
    try{
        const response = await axios.get (apiUrl);
        const data=response.data;

        document.getElementById("quotes").innerHTML = data.content;
        document.getElementById("author").innerHTML = data.author;
        document.getElementById("tags").innerHTML = data.tags;
    }catch(error){
        console.log(error);
    }
}
