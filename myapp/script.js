console.log("This is my index js file");


  $(document).ready(function () {
  
    // FETCHING DATA FROM JSON FILE
    $.getJSON("https://covid19-api.com/country?name=india&format=json", 
            function (data) {
        var covid = '';

        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            covid += '<tr>';
           

            covid += '<td>' + 
                value.confirmed + '</td>';

            covid += '<td>' + 
                value.recovered + '</td>';

                covid += '<td>' + 
                value.critical + '</td>';

                covid += '<td>' + 
                value.deaths + '</td>';

                covid += '<td>' + 
                value.lastChange + '</td>';

                covid += '<td>' + 
                value.lastUpdate + '</td>';





            covid += '</tr>';
        });
          
        //INSERTING ROWS INTO TABLE 
        $('#table').append(covid);
    });
});