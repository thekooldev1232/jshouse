const { promises } = require("fs");

function funfunwithMaps() {
    return [1, 2, 3].map((item) => {
      return [4, 5, 6].map((item2) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log("in timeout");
            resolve(item, item2);
          }, 1000);
        });
      });
    });
  }
  
  Promise.all(funfunwithMaps()).then((data)=>{
    console.log('hey here');
    console.log(data);
    console.log('after this');
  })

   function returnMoney(arg1, arg2) {
     console.log(arg1, arg2);
   }

   returnMoney();

   And then also we are not trained to do this, aso we are not sure what it is gonna be 