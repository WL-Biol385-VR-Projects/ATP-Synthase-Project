#pragma strict

var actDecoy  : GameObject;
var actLight  : GameObject;
var inactPlayButton : GameObject;
var actSoundTrigger : GameObject;

function OnTriggerEnter()
{
    actLight.SetActive(false);
    actDecoy.SetActive(false);
    inactPlayButton.SetActive(true);
    actSoundTrigger.SetActive(false);
}