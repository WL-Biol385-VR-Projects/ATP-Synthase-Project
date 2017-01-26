using UnityEngine;
using System.Collections;
using VRTK;

public class ReturnToStart2 : VRTK_InteractableObject
{
    Vector3 startPosition, driftPosition;
    Quaternion startRotation, driftRotation;

    public float driftSeconds = 3;
    private float driftTimer = 0;
    private bool isDrifting = false;

    void Start()
    {
        base.Start();
        startPosition = transform.position;
        startRotation = transform.rotation;
    }

    private void StartDrift()
    {
        isDrifting = true;
        driftTimer = 0;

        driftPosition = transform.position;
        driftRotation = transform.rotation;

        Rigidbody rb = gameObject.GetComponent<Rigidbody>();
        if (rb != null)
        {
            rb.velocity = Vector3.zero;
            rb.constraints = RigidbodyConstraints.FreezeAll;
        }
    }

    private void StopDrift()
    {
        isDrifting = false;
        transform.position = startPosition;
        transform.rotation = startRotation;

        Rigidbody rb = gameObject.GetComponent<Rigidbody>();
        if (rb != null)
        {
            rb.velocity = Vector3.zero;
            rb.constraints = RigidbodyConstraints.None;
        }
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.K))
            StartDrift();

        if (isDrifting)
        {
            driftTimer += Time.deltaTime;
            if (driftTimer > driftSeconds)
            {
                StopDrift();
            }
            else
            {
                float ratio = driftTimer / driftSeconds;
                transform.position = Vector3.Lerp(driftPosition, startPosition, ratio);
                transform.rotation = Quaternion.Slerp(driftRotation, startRotation, ratio);
            }
        }
    }
    public override void StartUsing(GameObject usingObject)
    {
        //base.StartUsing(usingObject);
        //spinSpeed = 360f;

        Debug.Log("Start Using " + usingObject.tag);
        StartDrift();
    }
}