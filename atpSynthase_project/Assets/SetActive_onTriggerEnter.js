#pragma strict

var inactiveThing : GameObject;
var activeThing1  : GameObject;
var activeThing2  : GameObject;
var activeThing3  : GameObject;

function OnTriggerEnter()
{
    inactiveThing.SetActive(true);
    activeThing1.SetActive(false);
    activeThing2.SetActive(false);
    activeThing3.SetActive(false);
}