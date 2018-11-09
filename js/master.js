(() => {
     const vm = new Vue({
         el : "#app",

         data : {
            modelname : "",
            modelpricing: "",
            modeldetails: "",

         },

         methods : {

            fetchData(e) {
                //debugger;
                let targetURL = e.currentTarget.id;

            fetch (`./includes/connect.php?modelNo=${targetURL}`) //go get the data and bring it back
            .then(res => res.json()) // turn the result into a plain JS object
            .then(data => {
                console.log(data); // run a function to parse our data
                const { modelName, pricing, modelDetails} = data[0];

                this.modelname = modelName;
                this.modeldetails = modelDetails;
                this.modelpricing = pricing;
                //showCarData(data); // run a function to put the data on the page
            })
            .catch(function(error){
            console.log(error); // if anything broke, log it to the console
            });
        }

     }

    }); 

    //getData(); //trigger the getData function
})();