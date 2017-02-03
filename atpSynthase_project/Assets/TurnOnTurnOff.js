#pragma strict

var thing1 : GameObject;
var thing2 : GameObject;

function Start () {

}
    
function Update () {
    if(thing1.activeInHierarchy == true){
        thing2.SetActive (false);
    }
}