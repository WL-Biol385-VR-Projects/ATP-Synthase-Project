#pragma strict

var inactiveSnapAct : GameObject;
var activeActTrigger : GameObject;
var inactiveTargetLight : GameObject;
var activeTargetLight : GameObject;
var wait : float;

yield WaitForSeconds(wait);

        inactiveSnapAct.SetActive(true);
        activeActTrigger.SetActive(true);
        inactiveTargetLight.SetActive(true);
        activeTargetLight.SetActive(false);