



function checkSpaceStatus() {
    
    fetch('https://spaceapi.voidwarranties.be/')
        .then(response => response.json())
        .then(data => {           
            if (data.state.open) {
               
                document.getElementById('status').textContent = "Hoera, Voidwarranties is open !!!";
                
                document.getElementById('image').src = data.state.icon.open;
            } else {
                
                document.getElementById('status').textContent = "Helaes pindakaas, Voidwarranties is gesloten !";
               
                document.getElementById('image').src = "./media/helaes-pindakaas.png"; 
            }
        })
        .catch(error => {
            
            console.error('Error fetching space status:', error);
        });
}


window.onload = checkSpaceStatus;


