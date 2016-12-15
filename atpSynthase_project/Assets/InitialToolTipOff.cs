using UnityEngine;
using System.Collections;

public class InitialToolTipOff : MonoBehaviour
{

    //place this script onto the controller

    //drag the controller here from the hierarchy

    public SteamVR_TrackedObject controller;

    //drag the Tool Tips GameObject here from the hierarchy

    public GameObject tips;

    void Update()
    {
        var device = SteamVR_Controller.Input((int)controller.index);
        if (device.GetTouchDown(SteamVR_Controller.ButtonMask.ApplicationMenu))
        {
            tips.SetActive(false);
        }
    }
}
