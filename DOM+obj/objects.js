var hotel = { name: 'Biltmore',
  rooms: 500,
  roomsBooked: 150,
  roomService: 'True',
  pool: 'False', 
  
roomsAvail: function(){
    return this.rooms - this.roomsBooked;
}

};

function tada(){
    document.getElementById("name").innerHTML= hotel.name;
    document.getElementById("rooms").innerHTML= hotel.rooms;
    document.getElementById("f5").innerHTML= hotel.roomsAvail();
}