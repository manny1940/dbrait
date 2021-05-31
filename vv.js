

var pattern=/JAVA/g;
var text="JavaScript is more fun than Java! Welcome to JavaScript World";
var result;
while((result=pattern.exec(text)!=null)){
    console.log("<br>Matched " +pattern.exec(text)[0]+"at position"+result.index+"<br>next search begins at "+pattern.lastIndex);
}
