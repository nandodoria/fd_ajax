(() => {
     const vm = new Vue({
         el : "#app",

         data : {
            modelname : "",
            modelpricing: "",
            modeldetails: "",

         },

         mounted : function(){
             console.log('view is ready to go on the page');
            // get the element we want to add the preloader too, and pass it to the preloader function
            this.addPreloader(document.querySelector('.modelInfo'));

             //trigger an ajax call with a mocked clicked event
             document.querySelector('#F55').click();
         },

         beforeUpdate : function(){
             console.log('things are gonna change...');
         },

         updated : function(){
            console.log('things are different now');
            //move the preloader out of the element and hide it
            let preloader = document.querySelector('.preloader-wrapper');

            //hide the preloader with css
            //move it to the bottom of the page - ready for the next Ajax call
            setTimeout(function(){
            preloader.classList.add('hidden');
            document.body.appendChild(preloader);
        }, 1000); //1000ms = 1 second

    },


         methods : {

            addPreloader(parentEl){
                //load the preloader into the parent element and make it draw
                let preloader = document.querySelector('.preloader-wrapper');

                parentEl.appendChild(preloader);

                let animItem = bodymovin.loadAnimation({
                    wrapper : document.querySelector('.preloader'),
                    animType : 'svg',
                    loop : true,
                    path : 'data/search.json'
                })
            },

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