function checkFormContext(context){
    console.log(context);
    if(Xrm.Page.ui.getFormType() == 2){
        Xrm.Page.getControl("cr363_chart").setDisable(true);
    }
    else{
        Xrm.Page.getControl("cr363_chart").setVisible(false);
    }
    
}