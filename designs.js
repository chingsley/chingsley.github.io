
{// DRAW THE CANVAS

    // When size is submitted by the user, call makeGrid()
    $(document).on("click", "#submit_form", function makeGrid() {
        // Your code goes here!
    let rowNo = $('input[name="height"]').val();
    let colNo = $('input[name="width"]').val();
        $("#pixelCanvas").empty();
        for (x = 1; x <= rowNo; x++){
            let row = $("<tr></tr>");
            for (y = 1; y <= colNo; y++){
                let cell = $("<td></td>").addClass("cell");
                row.append(cell);
            }
            $('#pixelCanvas').append(row);
        }       
    });
}//ENDS "DRAW THE CANVAS"
  

{// SELECTS DRAWING COLOR FROM THE COLOR PICKER
    var color = $('#colorPicker').val();
    $("#colorPicker").change(function(){
    color = $(this).val();
  });
}

{// SET BACKGROUND COLOR
    let bg_color = $('#bg_colorPicker').val();
    $('#bg_colorPicker').change(function(){
        bg_color = $(this).val();
        $('#pixelCanvas').css('background-color', bg_color);
    });
  
}

{// APPLY COLOR TO CELL WHEN CLICKED
    $('#pixelCanvas').on('click','.cell',function(evt){
        $(evt.target).css('background-color', color);
        console.log($( evt.target ).css('background-color',color));
    });
}

{// DEFAULT CANVAS SIZE ON PAGE LOAD
    $("document").ready(function(){
        $("#submit_form").trigger('click');
    });
}

