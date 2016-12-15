#pragma strict



//Put on Rotating object
//Target = center of rotation
//degress = speed

var degrees = 10;

var target : Transform;




function Update() {

    transform.RotateAround (target.position, target.up, degrees * Time.deltaTime);

}