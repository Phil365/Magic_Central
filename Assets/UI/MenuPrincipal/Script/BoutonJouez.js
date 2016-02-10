#pragma strict

function Start () {
Time.timeScale = 1;
}

function Update () {

}

function Jouez () {
Application.LoadLevel (1);
}

function Rejouez () {
Application.LoadLevel (0);
}

function Quitter () {
Application.Quit();
}
