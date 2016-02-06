#pragma strict

/*
 * Contient le UI panneau de vente de potions
 * @access public
 * @var panneauPotions
 */
public var panneauPotions:GameObject;

/*
 * variable qui verifie l'entrée dans le magasin 
 * @access private
 * @var trig init à false
 */
private var trig=false;

/*
 * prix de la potion de vie 
 * @access private
 * @var prixPotionVie
 */
private var prixPotionVie=50;

/*
 * prix de la potion de mana
 * @access private
 * @var prixPotionMana
 */
private var prixPotionMana=25;

/*
 * nb de potion acheté
 * @access private
 * @var nbPotion
 */
private var nbPotion=1;


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

private var gestionInventaire:scGestionInventaire;

/*
 * orInventaire
 * @access private
 * @var orInventaire
 */

private var orActuel:int;

/*
 * Contient le message plus d'or
 * @access public
 * @var messagePlusDor
 */

public var messagePlusDor:GameObject;

/*
 * Contient le bouton d'achatPotionVie à desactiver ou activer
 * @access public
 * @var boutonAchatPotionVie
 */

public var boutonAchatPotionVie:GameObject;

/*
 * Contient le bouton d'achatPotionMana à desactiver ou activer
 * @access public
 * @var boutonAchatPotionMana
 */

public var boutonAchatPotionMana:GameObject;


function OnTriggerEnter(trigger:Collider) 
{
	if (trigger.gameObject.name== 'Hero'){//Ouverture du panneau de vente de potions
	  panneauPotions.SetActive(true);
    Time.timeScale = 0;

		}	

}


function Start () {

	// Recuperation du script de gestion de l'inventaire du personnage
	gestionInventaire = personnage.GetComponent.<scGestionInventaire>();

}

function Update () {
/*
	if (trig == true && gameObject.name == "trigMagasin" ) 
	{
		ouvrirPanneauPotions();
	}
*/
	//Recuperation de la variable Or du personnage
	orActuel = gestionInventaire.orInventaire;
	Debug.Log(orActuel);


	// Si l'or est à 0 alors on active le message vous n'avez plus d'or et désactive les boutons d'achat.
	if (orActuel <= 0 ) 
	{
		messagePlusDor.SetActive(true);
		boutonAchatPotionVie.SetActive(false);
		boutonAchatPotionMana.SetActive(false);
	}
	else 
	{
		messagePlusDor.SetActive(false);
		boutonAchatPotionVie.SetActive(true);
		boutonAchatPotionMana.SetActive(true);
	}
}



//fermer le panneau de vente de potions
function fermerPanneauPotions() 
{
    panneauPotions.SetActive(false);
     Time.timeScale = 1;
     trig = false;
    
}

function achatPotionVie() 
{

		// Envoi de messages pour diminuer l'or du personnage ainsi qu'augmenter le nombre de potions de vie à sa disposition.

		gestionInventaire.SendMessageUpwards("diminutionOrVie" , prixPotionVie, SendMessageOptions.DontRequireReceiver );
		gestionInventaire.SendMessageUpwards("augmenterPotionVie" , nbPotion, SendMessageOptions.DontRequireReceiver );

}

function achatPotionMana() 
{

		// Envoi de messages pour diminuer l'or du personnage ainsi qu'augmenter le nombre de potions de mana à sa disposition.

		gestionInventaire.SendMessageUpwards("diminutionOrMana" , prixPotionMana, SendMessageOptions.DontRequireReceiver );
		gestionInventaire.SendMessageUpwards("augmenterPotionMana" , nbPotion, SendMessageOptions.DontRequireReceiver );

}

