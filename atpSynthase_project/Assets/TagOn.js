#pragma strict

var inactiveThing1 : GameObject;
var inactiveThing2 : GameObject;
var activeThing1 : GameObject;
var activeThing2 : GameObject;
var activeThing3 : GameObject;
var objectTag: String;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        inactiveThing1.SetActive(true);
        inactiveThing2.SetActive(true);
        activeThing1.SetActive(false);
        activeThing2.SetActive(false);
        activeThing3.SetActive(false);
    }
}