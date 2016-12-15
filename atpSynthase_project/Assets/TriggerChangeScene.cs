using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class TriggerChangeScene : MonoBehaviour
{

    public string scene;

    void OnTriggerEnter()
    {
        SceneManager.LoadScene(scene);
    }
}