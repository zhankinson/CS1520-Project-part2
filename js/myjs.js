// Zachary Hankinson
// CS1520
$('#con').click(function() {
    $('#map').css('visibility', 'visible');
});

$('#me').click(function() {
  $('#map').css('visibility', 'hidden');
});

$('#you').click(function() {
  $('#map').css('visibility', 'hidden');
});

$('#myForm').submit(function(){
    $.ajax({
        url:'/project/',
        type:'post',
        data:$('#myForm').serialize(),
        success:function(){
          alert("Cool! Thanks")
        }
    });
});

$.validator.setDefaults( {
  submitHandler: function () {
    alert( "submitted!" );
  }
});

$( document ).ready( function () {
  $('#myForm').validate();
});


// This code is mostly pulled from Google
function myMap() {
  var coordinate = {
    lat: 40.439676,
    lng: -79.955299
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: coordinate
  });

  var marker = new google.maps.Marker({
    position: coordinate,
    map: map
  });
};

$(document).ready(function() {
    $('.burning').burn({
        flames : [{
                  x: 0,
                  hsla: [230, 100, 80, .1],
                  y: 0,
                  blur: .1
              },
              {
                  x: 0,
                  hsla: [220, 100, 80, .8],
                  y: .02,
                  blur: .15
              },
              {
                  x: 0,
                  hsla: [210, 100, 80, .7],
                  y: .05,
                  blur: .2
              },
              {
                  x: 0,
                  hsla: [190, 100, 80, .6],
                  y: .1,
                  blur: .25
              },
              {
                  x: 0,
                  hsla: [170, 100, 80, .5],
                  y: .15,
                  blur: .3
              },
              {
                  x: 0,
                  hsla: [150, 100, 80, .4],
                  y: .25,
                  blur: .4
              },
              {
                  x: 0,
                  hsla: [130, 100, 80, .3],
                  y: .5,
                  blur: .5
          }]
      });
});
