#pragma strict

var thing : GameObject;
var objectTag: String;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        thing.SetActive(true);
    }
}