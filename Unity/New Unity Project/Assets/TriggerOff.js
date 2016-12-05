#pragma strict

var thing : GameObject;

function OnTriggerEnter(){
    if(thing != null){
        thing.SetActive(false);
    }
}