var products;

//gets the information for each flashcard from my JSON objects file
function getProducts() {    
    
    //create a new object to perform AJAX request
    var request = new XMLHttpRequest();
    
    //will get called when the request ready state changes
    request.onreadystatechange = function() {
        
        //if the request is done (readyState 4)
        if (request.readyState === 4) {
            
        //the text retrieved in the request is a string representing a JSON object
        products = JSON.parse(request.responseText);
        }
    }
    
    //open and send the file to meeee!
    request.open("GET", "product.txt", true);
    request.send();
}

getProducts();

//prepare product image and information to show
//create function to add an product info
function displayProductDetails(productIndex) {
    var product = products[productIndex];
    //create img element
    var newImg = document.createElement("img");
    //add img source attribute to element
    var srcAtt = document.createAttribute("src");
    srcAtt.value = product.imgUrl;
    newImg.setAttributeNode(srcAtt);
    //add new image element with it's content to the DOM
    var newDiv = document.getElementById("pop-up");
    //add the new image to the pop-upwindow
    newDiv.removeChild(newDiv.lastChild);
    newDiv.appendChild(newImg);
    newDiv.className = "";
} 