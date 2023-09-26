let objClass = {};
class appClass {
    constructor() {
        this.socket =  io.connect('/');
    }
    showPopUp(data){
        this.socket.emit("showpopup", data);
    }
}
$(document).ready(function(){
    let objClass = new appClass();
    $('#showpopup').on('click',function(){
        let table           = $("#myTable").val();
        let callers         = $("#myCallers").val();
        if(callers != ""){
            let data = {
                tableno : table,
                callers : callers
            };
            objClass.showPopUp(data)
        }else{
            alert("Put a Caller Number in the Text Area!")
        }
        
    });
});



