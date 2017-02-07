#pragma strict

var thing : GameObject;
var objectTag: String;

function OnTriggerExit (other : Collider) {
    if(other.gameObject.tag == objectTag){
        thing.SetActive(false);
    }
}