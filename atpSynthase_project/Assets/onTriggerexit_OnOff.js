#pragma strict

var inactiveSound : GameObject;
var inactiveTargetLight : GameObject;
var activeLight : GameObject;
var activeSoundTrigger : GameObject;
var objectTag : String;

function OnTriggerExit (other : Collider) {
    if(other.gameObject.tag == objectTag) {
        inactiveSound.SetActive(true);
        inactiveTargetLight.SetActive(true);
        activeLight.SetActive(false);
        activeSoundTrigger.SetActive(false);
    }
}