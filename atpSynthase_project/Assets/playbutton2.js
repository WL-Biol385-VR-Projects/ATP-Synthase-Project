#pragma strict

var actDecoy  : GameObject;
var actLight  : GameObject;
var inactPlayButton : GameObject;


function OnTriggerEnter()
{
    actLight.SetActive(false);
    inactPlayButton.SetActive(true);
    actDecoy.SetActive(false);
}