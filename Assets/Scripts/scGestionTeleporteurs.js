#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(trigg:Collider) 
{
	if (trigg.gameObject.tag == "teleportNiveau1") 
	{
		Application.LoadLevel (3);
	}

	if (trigg.gameObject.tag == "teleportTuto") 
	{
		Application.LoadLevel (2);
	}

	if (trigg.gameObject.tag == "teleportHub") 
	{
		Application.LoadLevel (1);
	}


}


