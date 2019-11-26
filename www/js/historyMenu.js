window.onload = function () {
    document.addEventListener("deviceready", onDeviceReady, true);

    // these buttons locatated in historyMenu.html
    document.getElementById('btnHistoryInfo').addEventListener('click', moveToParramattaHistory);
    document.getElementById('btnCompare').addEventListener('click', moveToRangerCottage);
    document.getElementById('btnDiaryCottage').addEventListener('click', moveToDiaryCottage);
    
    
};



//            function moveToIntroduction(e)
//            {
//                window.location = "introduction.html";
//            }


// navigation functions HERE!!!

function moveToDiaryCottage(e)
{
    window.location = "dairyCottage.html";    
}

// three buttons in historyMenu.html
function moveToParramattaHistory(e)
{
    window.location = "parramattaHistory.html";
}

function moveToRangerCottage(e)
{
    window.location = "rangerCottage.html";
}

function onDeviceReady()
{
    // navigator.notification.alert("PhoneGap is working");
}