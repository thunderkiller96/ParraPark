window.onload = function () {
    document.addEventListener("deviceready", onDeviceReady, true);
    //                document.getElementById('btnHistory').addEventListener('click', moveToIntroduction);

    // buttons located in footer
    document.getElementById('btnDiaryTour').addEventListener('click', dairyTour);
    
    document.getElementById('btnRangersTour').addEventListener('click', rangersTour);
//    document.getElementById('btnTBA').addEventListener('click', moveTo360);
     document.getElementById('btnOutsideTour').addEventListener('click', outsideTour);

    // these buttons locatated in historyMenu.html
    // document.getElementById('btnHistoryInfo').addEventListener('click', moveToParramattaHistory);
    // document.getElementById('btnCompare').addEventListener('click', moveToRangerCottage);
    // document.getElementById('btnDiaryCottage').addEventListener('click', moveToDiaryCottage);
    
    
};



//            function moveToIntroduction(e)
//            {
//                window.location = "introduction.html";
//            }


// navigation functions HERE!!!

function dairyTour(e)
{
    window.location = "mapDairyCottage.html";    
}
// this function is currently placed on TBA button. change this later to the correct button (testing purpose)
function rangersTour()
{
    window.location = "mapRangersCottage.html";
}

function outsideTour()
{
    window.location = "outside.html";
}

// three buttons in historyMenu.html
// function moveToParramattaHistory(e)
// {
//     window.location = "parramattaHistory.html";
// }

// function moveToHistoryMenu(e)
// {
//     window.location = "historyMenu.html";
// }

// function moveToRangerCottage(e)
// {
//     window.location = "rangerCottage.html";
// }

function onDeviceReady()
{
    // navigator.notification.alert("PhoneGap is working");
}