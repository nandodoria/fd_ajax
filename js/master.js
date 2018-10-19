(() => {
    function getData() {
        let targetURL = "./includes/connect.php?modelNo=R58";

        fetch (targetURL) //go get the data and bring it back
        .then(res => res.json()) // turn the result into a plain JS object
        .then(data => {
            console.log(data); // run a function to parse our data
            showCarData(data[0]); // run a function to put the data on the page
        })
        .catch(function(error){
            console.log(error); // if anything broke, log it to the console
        });
    }

    function showCarData(data) {
        //parse the DB info and put it where it needs to go
        const { modelName, pricing, modelDetails} = data; //destructuring assignment => MDN JS destructuring

        //grab the elements we need, and populate them with data
        document.querySelector('.modelName').textContent = modelName;
        document.querySelector('.priceInfo').textContent = pricing;
        document.querySelector('.modelDetails').textContent = modelDetails;
    }

    getData(); //trigger the getData function
})();