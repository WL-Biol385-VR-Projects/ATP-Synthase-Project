﻿#pragma strict

var thing  : GameObject;
var thing1 : GameObject;
var thing2 : GameObject;

        function OnTriggerEnter()
{
            thing.SetActive(true);
            thing1.SetActive(false);
            thing2.SetActive(true);
}