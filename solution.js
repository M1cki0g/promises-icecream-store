let open = true;
      
      let order = ((time,work)=>{

          return new Promise((resolve, reject)=>{
              if(open){ 
                  setTimeout(()=>{
                        resolve(work());
                    },time);
                   }
                   else{
                      reject("store is closed");
                     }
                  })

      })

      order(2000,()=>{
            console.log(`${stocks.fruits[0]}`);
        })

        .then(()=>{
                  return order(0,()=>{
                        console.log("Cut the fruit");
                    })
            })

      .then(()=>{
              return order(2000,()=>{
                    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added` );
              })
      })

      .then(()=>{
            return order(1000,()=>{
                      console.log("start machine");
                  })
          })
          
          .then(()=>{
                return order(2000,()=>{
                          console.log(`Ice cream was placed in ${stocks.holder[0]}`)
                      })
              })

      .then(()=>{
          return order(3000,()=>{
                  console.log(`${stocks.toppings[0]} was selected`)
              })
      })

      .then(()=>{
          return order(2000,()=>{
                    console.log("Serve Ice cream")
              })
      })
      
      .catch(()=>{
            console.log("customer left")
      })
      
      .finally(()=>{
          console.log("day ended store is closed")
      })
