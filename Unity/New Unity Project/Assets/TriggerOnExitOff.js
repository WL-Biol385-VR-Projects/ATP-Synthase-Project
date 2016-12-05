#pragma strict

var thing : GameObject;

function OnStart () {
    thing.SetActive(false);
}

function OnTriggerEnter(){
    if(thing != null){
        thing.SetActive(true);
    }
}
function OnTriggerExit(){
    if(thing != null){
        thing.SetActive(false);
    }
}