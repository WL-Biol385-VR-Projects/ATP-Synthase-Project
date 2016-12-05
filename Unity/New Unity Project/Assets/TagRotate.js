#pragma strict

public var thingtorotate : GameObject;
public var speed : float = 10f;
var objectTag : String;

private var yourVar = false;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        yourVar = true;
    }
}

function Update () {
    if(yourVar == true){
        thingtorotate.transform.Rotate(Vector3(0,1,0), speed * Time.deltaTime);
        }
    }