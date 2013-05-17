//this is safe file
//http://www.itechies.net/tutorials/jscript/jsexample.php-pid-scriptxt.htm 6/12/2012

msgSeperator = '#';
characterPos =0;
msgBuffer = "";
var typeDelay = 50;
var nxtMsgDelay = 1500;
msgIndex= 0;
var msgArray = Array("Welcome to Sunrise Indian Takeaway! #","Finest Takeaway foods... #",
    "Only Collection ...#", "Call us on 074-9531770, Mobile: 087-2368828 #")

   function startTyping(characterPos) {
   if (msgArray[msgIndex].charAt(characterPos) != msgSeperator) {
      msgBuffer = msgBuffer + msgArray[msgIndex].charAt(characterPos)
     self.document.forms[0].elements[0].value= msgBuffer
     delay=typeDelay
    }

    else {
       delay=nxtMsgDelay
       msgBuffer = ""
     characterPos =-1
    if (msgIndex!= msgArray.length-1){
      msgIndex++
    }
    else {msgIndex= 0 }
    }
    characterPos++
    setTimeout("startTyping('"+characterPos+"')",delay)
  } 
  startTyping(0)


//form validation code taken from http://webcheatsheet.com/javascript/form_validation.php -- retrieved: 5/12/2012

function validateFormOnSubmit(theForm) {
var reason = "";

  reason += validateUsername(theForm.username);
  reason += validateEmail(theForm.email);
  reason += validatePhone(theForm.phone);
 
      
  if (reason != "") {
    alert("Some fields need correction:\n" + reason);
    return false;
  }

  return true;
}

function validateEmpty(fld) {
    var error = "";
  
    if (fld.value.length == 0) {
        fld.style.background = 'Yellow'; 
        error = "The required field has not been filled in.\n"
    } 
    else {
        fld.style.background = 'White';
    }
    return error;   
}

function validateUsername(fld) {
    var error = "";
    var illegalChars = /^[a-zA-Z]+$/; // allow letters, numbers, and underscores
 
    if (fld.value == "") {
        fld.style.background = 'red'; 
        error = "You didn't enter a Full Name.\n";
    } 
    else if ((fld.value.length < 5) || (fld.value.length > 25)) {
        fld.style.background = 'Yellow'; 
        error = "The Full name is the wrong length.\n";
    } 
    else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow'; 
        error = "The Full name contains illegal characters.\n";
    } 
    else {
        fld.style.background = 'White';
    } 
    return error;
}

function trim(s)
{
  return s.replace(/^\s+|\s+$/, '');
} 

function validateEmail(fld) {
    var error="";
    var tfld = trim(fld.value);                        // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
    var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
    
    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter an email address.\n";
    } 
    else if (!emailFilter.test(tfld)) {              //test email for illegal characters
        fld.style.background = 'Yellow';
        error = "Please enter a valid email address.\n";
    } 
    else if (fld.value.match(illegalChars)) {
        fld.style.background = 'Yellow';
        error = "The email address contains illegal characters.\n";
    } 
    else {
        fld.style.background = 'White';
    }
    return error;
}

function validatePhone(fld) {
    var error = "";
    var stripped = fld.value.replace(/[\(\)\.\-\ ]/g, '');     

   if (fld.value == "") {
        error = "You didn't enter a phone number.\n";
        fld.style.background = 'Yellow';
    } 
    else if (isNaN(parseInt(stripped))) {
        error = "The phone number must be entered or numeric value.\n";
        fld.style.background = 'Yellow';
    } 
    else if (!(stripped.length == 10)) {
        error = "The phone number is the wrong length. Make sure have entered all digit.\n";
        fld.style.background = 'Yellow';
    } 
    else {
        fld.style.background = 'White';
    }
    return error;
}



/* Reference: http://www.alistapart.com/articles/alternate/
   Retrieved: December 18th, 2010. Frank class */
   
var defaultStyleLink, alterStyleLink;

defaultStyleLink = document.getElementById("default");
alterStyleLink = document.getElementById("alter");

function setActiveStyleSheet ( styleId ) {

  var i = 0;
  var linkItem, linkArray;
  
  linkArray = document.getElementsByTagName( "link" );
  
  for ( i = 0; i < linkArray.length; i++ ) {
    
    linkItem = linkArray[i];
      
    if ( linkItem.getAttribute( "rel" ).indexOf( "style" ) != -1 && 
        linkItem.getAttribute( "title" ) ) {
        linkItem.disabled = true;
        
      if ( linkItem.getAttribute( "title" ) === styleId ) {
        linkItem.disabled = false;
      }
    }
  }
}

function getActiveStyleSheet () {

  var i = 0;
  var linkItem, linkArray;

  linkArray = document.getElementsByTagName( "link" );

  for ( i = 0; i < linkArray.length; i++ ){
    linkItem = linkArray[i];

    if ( linkItem.getAttribute( "rel" ).indexOf( "style" ) != -1 && 
      linkItem.getAttribute( "title" ) && !linkItem.disabled ) {
      return linkItem.getAttribute( "title" );
    }
  }
  return null;

}
  
  function createCookie( name,value,days){

    if(days) {
      var date = new Date();
      date.setTime ( date.getTime() + ( days*24*60*60*1000 ) );
      var expires = "; expires=" + date.toGMTString();
    }
    else{
      expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";   
  }  
  
  function readCookie ( name ){

    var nameEquals = name + "=";
    var cookieArray = document.cookie.split ( ';' );

    for ( var i=0; i < cookieArray.length; i++ ){
      var c = cookieArray[i];
      while ( c.charAt ( 0 ) == ' ' ){
        c = c.substring ( 1, c.length );
      }
      if ( c.indexOf ( nameEquals ) == 0 ){
        return c.substring ( nameEquals.length, c.length );
      }
    }
    return null;
  }

defaultStyleLink.onclick = function() {
  setActiveStyleSheet( this.id );
};

alterStyleLink.onclick = function() {
  setActiveStyleSheet( this.id );
};

window.onload = function() {
  var cookie = readCookie ( "style" );
  var title;
 
  if ( cookie ) {
      title = cookie;
      setActiveStyleSheet ( title );
  }
};

window.onunload = function() {
  var title = getActiveStyleSheet();
  createCookie( "style", title, 30 );
};




/*http://www.webdeveloper.com/forum/showthread.php?260933-Simple-Javascript-Image-Slideshow  on 6/12/2012*/



var sunImage = document.getElementById("mainImage");

var imageArray = ["_images/setmeal.jpg","_images/tandoorichicken.jpg",
                "_images/indian.jpg","_images/pizza.jpg","_images/meal.jpg"];

var imageIndex = 0;

function changeImage(){
    sunImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;

    if(imageIndex >= imageArray.length){
      imageIndex = 0;
  }
}  

var intervalHandle = setInterval(changeImage,5000);

sunImage.onclick = function(){
  clearInterval(intervalHandle);
};



/*http://www.javascriptkit.com/script/script2/jsslide.shtml
//doent work tried

var image=new Array()
var image1 = new image(
  "images/indian.jpg",
  "images/kebab.jpg",
  "images/tandoorichicken.jpg"
  )

var num=0
var timeDelay

Preload Images
Preload the images in the cache so that images load faster

var imagePreload=new Array()
for (i=0; i<image.length; i++)
  {
    imagePreload[i]=new Image()
    imagePreload[i].src=image[i]
  }

var slideimages=new Array()

function slideshowimages()

{

     for (i=0;i<slideshowimages.arguments.length;i++){

         slideimages[i]=new Image()

         slideimages[i].src=slideshowimages.arguments[i]
      }
} */