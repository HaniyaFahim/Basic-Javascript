         console.log("welcome to js");   
      Variables

     let name = ("Haniya Fahim  ");
      console.log(name);

      let age = 11;
      console.log(age);

      let firstname = ("Haniya" );
      let lastname = ( "Fahim");
      let space = ' ';

      console.log(firstname + space  + lastname);
     
      console.log( space + "My name is =" + ' ' + name + '.'

       + "My age is = " + ' ' + age + '.'
       
       + "My favourite food is =" + ' ' + favouritefood +'.'

       + "My favourite drink is =" + ' ' + favouritedrink + '.'

       + "My best friend is = " + ' ' + bestfriend + '.'

        + "My hobbies are = " + ' ' + myhobbies + '.'
       
       + "My home city's name is = " + ' ' + homecity + '.'
       
       + "My home country's name is =" + ' ' + homecountry + '.');
     
      let name = prompt ("What is your name?");
      let age = prompt ("What is your age?");
      let favouritefood = prompt ("what is your favourite food?");
      let favouritedrink = prompt ("What is your favourite drink?");
      let bestfriend = prompt ("Who is your best friend?")
      let myhobbies = prompt ("What are your hobbies?") 
      let homecity = prompt ("What's the name of your home city?")
      let homecountry = prompt ("What's the name of your home country?")

      document.getElementById('myname').innerHTML=name; 
      document.getElementById('myage').innerHTML=age;
      document.getElementById('myfavouritefood').innerHTML=favouritefood;
      document.getElementById('myfavouritedrink').innerHTML=favouritedrink;
      document.getElementById('mybestfriend').innerHTML=bestfriend;
      document.getElementById('myhobbies').innerHTML=myhobbies;
      document.getElementById('myhomecity').innerHTML=homecity;
      document.getElementById('myhomecountry').innerHTML=homecountry;


