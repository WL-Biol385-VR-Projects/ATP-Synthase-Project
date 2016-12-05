#pragma strict

var thing : GameObject;

function OnStart () {
    thing.SetActive(false);
}

function OnTriggerExit(){
    if(thing != null){
        thing.SetActive(false);
    }
}