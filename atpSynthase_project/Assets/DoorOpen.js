#pragma strict

var door : GameObject;
 
function OnTriggerEnter ()
{
    door.transform.position = Vector3.up;
}
