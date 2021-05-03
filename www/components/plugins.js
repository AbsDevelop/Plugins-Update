// This is a JavaScript file

$(document).on("click", "#alerta", function(){
  function retorno(){}
  navigator.notification.alert("Minha mensagem", retorno, "Aviso", "Aceito");
});

$(document).on("click", "#confirm", function(){
  function confirma(buttonIndex){
    if(buttonIndex == 1){
      navigator.notification.alert("Escolheu opção aaaa");
    }else{
      navigator.notification.alert("Escolheu opção bbbb") + navigator.notification.beep(3);
    }
  }
  navigator.notification.confirm("Escolha A ou B:", confirma, "Escolho:", ["A", "B"]);
});

$(document).on("click", "#beep", function(){
  navigator.notification.beep(3);
});

$(document).on("click", "#vibra", function(){
  navigator.vibrate(2500);
});

function Map(lat, long){
   L.mapquest.key = 'V632YQjxnzUfTQUz1xkjUOUX3IKzb01P';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });
        
        L.marker([lat, long], 
        {
          icon: L.mapquest.icons.flag({
          primaryColor: '#0000FF',
          secondaryColor: '#FFFFFF',
          shadow: true,
          size: 'md',
          symbol: 'You'}),
        }).addTo(map);

        map.addControl(L.mapquest.control());
};

$(document).on("click", "#local", function(){
   var onSuccess = function(position) {
     Map(position.coords.latitude, position.coords.longitude)
    };

 
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});