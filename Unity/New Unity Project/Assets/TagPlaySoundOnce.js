#pragma strict

var sound : AudioClip;
var objectTag: String;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        AudioSource.PlayClipAtPoint(sound, transform.position);
    }
}