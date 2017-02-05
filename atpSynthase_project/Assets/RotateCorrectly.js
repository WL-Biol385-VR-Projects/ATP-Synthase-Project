#pragma strict



//Put on Rotating object
//Target = center of rotation
//degrees = speed

var degrees = 10;

var target : Transform;




function Update() {

    transform.RotateAround (target.position, target.up, degrees * Time.deltaTime);

}