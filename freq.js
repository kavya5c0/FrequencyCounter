
  
function countFrequencyOfletters(){
  var name =document.getElementById("inputText").value;
  name=name.trim();
  var dict={};
  
  for( var i=0;i<name.length;i++){
      let c=name[i];
      if(c!=" "){
      if(dict[c]){
             dict[c]++;
      }
      else{
         dict[c]=1;
      }
    }
  }
  
  
  var result = "";
  for(var char in dict){
  
      result += char + ": " + dict[char] + " , ";
  }
  var nresult="";
  for(var i=0;i<(result.length)-2;i++){
      nresult+=result[i];
  }
  document.getElementById("result").innerHTML = nresult;
  
  
  }
  
    
  function countFrequencyOfwords() {
      var words = document.getElementById("inputText").value;
      var wordFrequency = {};
     
      let w = words.split(" ");
  
      for (var i = 0; i < w.length; i++) {
         var word = w[i];
         if (word.trim() != "") { 
         if (word in wordFrequency) {
            wordFrequency[word]++;
           } 
         else {
           wordFrequency[word] = 1;
          }
   
        }
  
      }
    
      var result = "";
  
      for (var word in wordFrequency) {
      
        result += word + ": " + wordFrequency[word] + " , ";
      }
      var nresult="";
      for(var i=0;i<(result.length)-2;i++){
          nresult+=result[i];
      }
      document.getElementById("result").innerHTML = nresult;
    }