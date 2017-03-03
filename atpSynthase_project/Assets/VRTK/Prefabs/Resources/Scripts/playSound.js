#pragma strict

var Sound : AudioClip;

private var hasPlayed = false;

function OnTriggerEnter()
{
    if (!hasPlayed)
    {
        GetComponent.<AudioSource>().PlayOneShot(Sound);
        hasPlayed = true;
        Destroy(gameObject);
    }
}