﻿#pragma strict

function Start () {

}

function Update () {

}

/*fonction pour surélever le perso lorquil traverse un pont*/

function OnTriggerEnter(heros:Collider) {
	if (heros.tag == "Hero") {
		heros.transform.position.y+= 2.09;
	}
}

function OnTriggerExit(heros:Collider) {
	if (heros.tag == "Hero") {
		heros.transform.position.y-= 2.09;
	}
}