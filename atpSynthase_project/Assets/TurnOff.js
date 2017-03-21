#pragma strict

var activeThing1  : GameObject;

function OnTriggerEnter()
{
    activeThing1.SetActive(false);
}