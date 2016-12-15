namespace VRTK.Examples
{
    using UnityEngine;

    public class Whirlygig : VRTK_InteractableObject
    {
        float spinSpeed = 60f;
        Transform rotator;

        public override void StartUsing(GameObject usingObject)
        {
            base.StartUsing(usingObject);
            spinSpeed = 60f;
        }

        public override void StopUsing(GameObject usingObject)
        {
            base.StopUsing(usingObject);
            spinSpeed = 0f;
        }

        protected override void Start()
        {
            base.Start();
            rotator = transform.Find("Capsule");
        }

        protected override void Update()
        {
            rotator.transform.Rotate(new Vector3(0f, spinSpeed * Time.deltaTime, 0f));
        }
    }
}