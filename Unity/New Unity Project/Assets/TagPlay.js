#pragma strict

var ani : Animator;
var objectTag : String;

function Start () {
    ani.enabled = false;

}

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        ani.enabled = true;
    }
}