window.onload = function () {
    document.addEventListener("deviceready", onDeviceReady, true);
    //                document.getElementById('btnHistory').addEventListener('click', moveToIntroduction);

    // buttons located in footer
    document.getElementById('btnHistory').addEventListener('click', moveToHistoryMenu);
    
    document.getElementById('btnTour').addEventListener('click', moveTo360);
//    document.getElementById('btnTBA').addEventListener('click', moveTo360);
     document.getElementById('btnTBA').addEventListener('click', moveToInfo);
    
};

// navigation functions HERE!!!

function moveToDiaryCottage(e)
{
    window.location = "dairyCottage.html";    
}
// this function is currently placed on TBA button. change this later to the correct button (testing purpose)
function moveToInfo()
{
    window.location = "about.html";
}

function moveTo360()
{
    window.location = "360Tour.html";
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