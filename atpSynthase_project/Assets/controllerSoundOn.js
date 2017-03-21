#pragma strict

var inactiveThing1 : GameObject;
var activeThing1 : GameObject;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == "Soundtag") {
        inactiveThing1.SetActive(true);
        activeThing1.SetActive(false);
    }
}