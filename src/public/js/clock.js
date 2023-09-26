let objClass = {};
class clockClass {
    constructor() {
        this.socket =  io.connect('/');
        this.socket.on("loadpopup" , (data)=>{
            let table = $("body").attr("data-table");
            if(table == data.data.tableno){
                console.log(data.data.callers)
            }
        });
    }
}
$(document).ready(function(){
    let objClass = new clockClass();
});



