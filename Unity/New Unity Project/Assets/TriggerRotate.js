#pragma strict

public var thingtorotate : GameObject;
public var speed : float = 10f;

private var yourVar = false;

function OnTriggerEnter () {
    yourVar = true;
}
function Update () {
    if(yourVar == true){
        thingtorotate.transform.Rotate(Vector3.up, speed * Time.deltaTime);
        }
}