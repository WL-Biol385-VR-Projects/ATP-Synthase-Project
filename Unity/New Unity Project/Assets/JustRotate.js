#pragma strict

public var speed : float = 10f;

function Update ()
{
    transform.Rotate(Vector3(1,1,0), speed * Time.deltaTime);
}