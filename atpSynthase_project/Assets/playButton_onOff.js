#pragma strict

var actSoundTrigger  : GameObject;
var actLight  : GameObject;
var wait : float;
var inactSoundTrigger : GameObject;
var inactLight  : GameObject;

function OnTriggerEnter()
{
    actLight.SetActive(false);

    yield WaitForSeconds(wait);

    inactSoundTrigger.SetActive(true);
    inactLight.SetActive(true);
    actSoundTrigger.SetActive(false);
}