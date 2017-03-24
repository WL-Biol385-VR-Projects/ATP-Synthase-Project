#pragma strict

var inactiveMolecule : GameObject;
var inactiveLight : GameObject;
var inactiveSoundTrigger : GameObject;

var activeLight : GameObject;
var activeMolecule : GameObject;
var activeMesh : GameObject;
var activeAct : GameObject;

var objectTag: String;

var wait : float;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        inactiveMolecule.SetActive(true);
        activeMolecule.SetActive(false);
        activeLight.SetActive(false);
        activeMesh.SetActive(false);

        yield WaitForSeconds (wait);
        
        inactiveLight.SetActive(true);
        inactiveSoundTrigger.SetActive(true);
        activeAct.SetActive(false);
        
    }
}