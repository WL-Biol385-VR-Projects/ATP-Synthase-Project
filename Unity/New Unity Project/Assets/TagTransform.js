#pragma strict

var thingtomove : GameObject;
var objectTag : String;
var startPoint : Vector3;
var endPoint : Vector3;
var duration : float = 1;

private var startTime : float;
private var yourVar = false;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        yourVar = true;
        startTime = Time.time;
    }
}

    function Update () {
        if(yourVar == true){
            thingtomove.transform.position = Vector3.Lerp(startPoint, endPoint, (Time.time - startTime) / duration);
        }
    }