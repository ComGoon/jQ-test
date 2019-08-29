$(document).ready(function(){
    console.log('ready to go');

    $('img').attr('border-raduis', '40px')

    $('.images img').on("keypress", function(){
        console.log('madani');
        $(this).hide();
    })



    $('.myForm #sometext').on('click',function(){
        $('#sometext').datepicker();
        let x = $('input').val();
        console.log(x);
    })

    $('.myForm button').click(function(){
        console.log($('#headerOne').text());
        // alert("Value: " + $('#sometext').val());

        $('.images img').toggleClass('imgRaduis');
    })


    $('#hide').click(function(){
        $('.myImg img').fadeOut('slow');
        console.log('clicked');
    })

    $('#show').click(function(){
        $('.myImg img').fadeIn(10000);
        // $('.myImg img').show();
        console.log('clicked');
    })


    $('.container .btn').on('click', function(){
        console.log('btn clicked');
        $('.container #div1').slideToggle(4000);
    })
})


$(function(){
    $(".container #div1").draggable();
})


$( function() {
    $( "#draggable" ).droppable();
    $( "#draggable" ).toggleClass('bg');
  } );


  $(function(){
    $("#dataId").datepicker();
  })