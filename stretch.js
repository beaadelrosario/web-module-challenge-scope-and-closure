/*
1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions */

  
    (function(){
      var a = b = 3;
    })();
    console.log("a defined?" + (typeof a !== 'undefined'));
    console.log("b defined?" + (typeof b !== 'undefined'));
    

    I think a is undefined 
    and b = 3
    
   /* 2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).*/
    
   // create base takes a param
   // add six is a object that puts out a function to create a baseNumber (6)
   // 

    function createBase (baseNum) { // You can create a closure to keep the value passed to the function createBase even after the inner function is returned. 
        return function (num) {
            return baseNumber + num; // The inner function that is being returned is created within an outer function, making it a closure, and it has access to the variables within the outer function, in this case the variable baseNumber.
        }
    }

    var addSix = createBase(6);
    addSix(10); // returns 16
    addSix(21); // returns 27


    /*3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

    Functional Programming and Object-oriented programming both are different concepts/styles of programming language.

    Functional programming is a programming paradigm that works under idea and assumption that what you put into the function is not expected to change. 
    In functional programming, data cannot be stored in objects and it can only be transformed by creating functions. Passes data around via parameters and your functions are your way of organizing your code.

    PROS: works particularly well when there are no boundaries required, or those boundaries are already predefined. Organizes our code in functions with clearly defined tasks.

    CONS: can be used multiple times and can make code look DRY, spaghetti code through too many dependency injections

    In object-oriented programming, data is stored in objects (logic in methods). Here you organize code in logical entities like real-world terms - you think of the things that make up your application in rea-world terms. 
    PROS: stores data so you can use the objects again and/or continue using them by adding on to it or expand on to it. keeps everything packaged up and secure from unwanted external usage
    CONS: this makes the object unique/limited in the use of them and has too many layers.

    */