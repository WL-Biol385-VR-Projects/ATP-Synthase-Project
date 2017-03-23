#pragma strict

var inactiveMolecule : GameObject;
var inactiveLight : GameObject;
var inactiveSoundTrigger : GameObject;

var activeLight : GameObject;
var activeMolecule : GameObject;

var objectTag: String;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        inactiveMolecule.SetActive(true);
        activeMolecule.SetActive(false);
        activeLight.SetActive(false);

        yield WaitForSeconds (10);
        
        inactiveLight.SetActive(true);
        inactiveSoundTrigger.SetActive(true);
        
    }
}