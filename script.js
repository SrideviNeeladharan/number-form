  // Code goes here
  function resetForm(){
    document.getElementById("myForm").reset();
  }

function median(sortedArr) {

  
    var medianIndex = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) 
    {
     return ((Number(sortedArr[medianIndex-1]) + Number(sortedArr[medianIndex])) / 2);     
    } 
    else 
    {
     return Number(sortedArr[medianIndex]);      
    }

}

  $(document).ready(function()
      {
          var arrayList = [];
          

          $("#submitButton").click(function(event)
          {
              event.preventDefault();
            
            //generating the table          
              var tableVal = $("#inputBox").val(); 
              arrayList.push(tableVal);  
             $("#table1").append('<tr><td>' + tableVal + '</td></tr>'); 
            
            //calculating the total
                      
             var total = 0; 
             for (var i = 0; i < arrayList.length; i++) 
             {
             total += arrayList[i] << 0;              
             }     
             
            var sortedArr = arrayList.sort(function(num1, num2) {return num1 - num2;});
            debugger;
            var variance = Number(tableVal)-(Number(total/arrayList.length));
            var sqVar = variance ^ variance;
            
             //displaying total, average, median
            $("#lblCount").html(arrayList.length);
            $("#lblTotal").html(total);
            $("#lblAvg").html(total/arrayList.length);           
            $("#lblMed").html(median(sortedArr));   
            $("#lblStd").html(sqVar);   
            
            
           
              
           });
    
           
  });



