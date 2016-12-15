using UnityEngine;
using System.Collections;

public class MenuToolTips : MonoBehaviour
{

    //place this script onto the controller

    //drag the controller here from the hierarchy

    public SteamVR_TrackedObject controller;

    //drag the Tool Tips GameObject here from the hierarchy
    
    public GameObject tips;

    //this sets the default state of your on/off switch

    private bool onoff = false;

    //this will turn tool tips off and on with the Application Meun button

    void Update()
    {
        var device = SteamVR_Controller.Input((int)controller.index);
        if (device.GetTouchDown(SteamVR_Controller.ButtonMask.ApplicationMenu))
        {
            onoff = !onoff;

            if (onoff)
            {
                tips.SetActive(true);
            }
            else
            {
                tips.SetActive(false);
            }
        }
    }
}