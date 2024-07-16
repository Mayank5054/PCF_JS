function checkForNull(e){
    var dateVal = Xrm.Page.data.entity.attributes.get("cr363_customdatedate").getValue();
    console.log("dateVal",dateVal);
    if( dateVal == undefined || dateVal == "" || dateVal == null){
        console.log("error");
        Xrm.Page.getControl("cr363_customdatedate").setNotification("Date Must Not Be Null");
    }
    else{
        console.log("error release");
        Xrm.Page.getControl("cr363_customdatedate").clearNotification();
    }

}