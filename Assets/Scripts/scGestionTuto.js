#pragma strict

/*
 * Contient le UI panneau de vente de potions
 * @access public
 * @var panneauPotions
 */
public var panneauTuto:GameObject;

/*
 * variable qui verifie l'entrée dans le magasin 
 * @access private
 * @var trig init à false
 */
private var trig=false;

/*
 * variable qui fait en sorte que l'on active une seule fois la bulle de tuto
 * @access private
 * @var trig init à false
 */
private var activer=false;

/*
 * variable qui fait en sorte que l'on active une seule fois la bulle de tuto
 * @access private
 * @var trig init à false
 */
private var deuxiemefois=true;

/*
 * gameObject magasin
 * @access public
 * @var magasinPotion
 */

public var personnage:GameObject;

/*
 * prix de la potion de mana
 * @access private
 * @var prixPotionMana
 */




function OnTriggerEnter(trigger:Collider) 
{
			trig = true;
			activer = true;
}


function Start () {
	

}

function Update () {
	if (trig == true && activer== true && deuxiemefois ==true && (gameObject.name == "trig_tuto1" || gameObject.name == "trig_tuto1 (1)")) 
	{
		ouvrirPanneauTuto();
	}
}

//Ouverture du panneau de vente de potions
function ouvrirPanneauTuto() 
{
    panneauTuto.SetActive(true);
    Time.timeScale = 0;
    activer = false;
    deuxiemefois = false;
}

//fermer le panneau de vente de potions
function fermerPanneauTuto() 
{
    panneauTuto.SetActive(false);
     Time.timeScale = 1;
     trig = false;
    
}



