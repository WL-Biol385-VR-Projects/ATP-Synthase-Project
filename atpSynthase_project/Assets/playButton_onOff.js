#pragma strict

var wait : float;
var inactSoundTrigger : GameObject;
var inactLight  : GameObject;

yield WaitForSeconds(wait);

    inactSoundTrigger.SetActive(true);
    inactLight.SetActive(true);