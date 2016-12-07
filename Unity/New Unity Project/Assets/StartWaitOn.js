#pragma strict

var thing : GameObject;
var wait : float = 1;

function Start () {
    yield WaitForSeconds(wait);
    thing.SetActive(true);
}