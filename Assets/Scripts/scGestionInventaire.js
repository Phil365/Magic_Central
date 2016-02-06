﻿#pragma strict
import UnityEngine.UI;
/*
 * Contient le nombre d'or du personnage
 * @access public
 * @var orInventaire
 */
 public var orInventaire:int;

 /*
 * Contient le nombre de potions de vie 
 * @access public
 * @var nbPotionsVie
 */

 public var nbPotionsVie:int;


 /*
 * Contient le nombre de potions de vie max
 * @access public
 * @var nbPotionsVieMax
 */

 public var nbPotionsVieMax:int=3;

  /*
 * Contient le nombre de potions de mana 
 * @access public
 * @var nbPotionsMana
 */

 public var nbPotionsMana:int;

  /*
 * Contient le nombre de potions de mana max
 * @access public
 * @var nbPotionsManaMax
 */

 public var nbPotionsManaMax:int=3;

  /*
 * Référence ArgentTexte
 * @access public
 * @var ArgentTexte
 */                               
public var ArgentTexte:Text;      

   /*
 * Référence  PotionSant
 * @access public
 * @var  PotionSant
 */                               
public var PotionSanteTexte:Text;     

   /*
 * Référence PotionMana
 * @access public
 * @var PotionMana
 */                               
public var PotionManaTexte:Text;       
private var gestionMana:scDeplacementTirHero;

function Start () {

	// Variable de test
	orInventaire = 200;
	nbPotionsVie =0;
	nbPotionsMana =0;
}

function Awake ()
{
	gestionMana= GetComponent(scDeplacementTirHero);
}

function Update () {
	ArgentTexte.text = orInventaire.ToString();	
	PotionSanteTexte.text = nbPotionsVie.ToString();	
	PotionManaTexte.text = nbPotionsMana.ToString();	
	if(orInventaire<0){orInventaire=0;}
	if(nbPotionsVie<0){nbPotionsVie=0;}
	if(nbPotionsMana<0){nbPotionsMana=0;}
	gestionMana.MettreAJourTotal(nbPotionsMana);
	gestionMana.MettreAJourTotalVie(nbPotionsVie);
}

function diminutionOrVie(prixPotionVie:int) 
{
	
	orInventaire = orInventaire-prixPotionVie;
	Debug.Log("Or :"+orInventaire);
	// On stocke dans des players prefs car le joueur va changer de scene
	PlayerPrefs.SetInt("Or", orInventaire);

}

function augmenterPotionVie(nbPotion:int) 
{
	
	nbPotionsVie = nbPotionsVie+nbPotion;
	Debug.Log("Potions de Vie :" +nbPotionsVie);
	// On stocke dans des players prefs car le joueur va changer de scene
	PlayerPrefs.SetInt("nbPotionsVie", nbPotionsVie);
}

function diminutionOrMana(prixPotionMana:int) 
{
	
	orInventaire = orInventaire-prixPotionMana;
	Debug.Log("Or :"+orInventaire);
	// On stocke dans des players prefs car le joueur va changer de scene
	PlayerPrefs.SetInt("nbPotionsMana", prixPotionMana);

}

function augmenterPotionMana(nbPotion:int) 
{
	
	nbPotionsMana = nbPotionsMana+nbPotion;
	Debug.Log("Potions de mana :" + nbPotionsMana);
	// On stocke dans des players prefs car le joueur va changer de scene
	PlayerPrefs.SetInt("Or", orInventaire);
}

function augmenterOr(nbOr:int) 
{
	
	orInventaire += nbOr;
	Debug.Log("Or :" + orInventaire);
	// On stocke dans des players prefs car le joueur va changer de scene
	PlayerPrefs.SetInt("Or", orInventaire);
}

function OnTriggerEnter (autre : Collider) {
	if (autre.gameObject.tag == "tasOr") {
		augmenterOr(25);
		Destroy(autre.gameObject);
	}
	if (autre.gameObject.tag == "potionVie") {
		if (nbPotionsVie <= nbPotionsVieMax){
			augmenterPotionVie(1);
			Destroy(autre.gameObject);
		}
	}
	if (autre.gameObject.tag == "potionMana") {
		if (nbPotionsMana <= nbPotionsManaMax){
			augmenterPotionMana(1);
			Destroy(autre.gameObject);
		}
	}

}