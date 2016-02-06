#pragma strict

/*Mini IA - Source : http://answers.unity3d.com/questions/26177/how-to-create-a-basic-follow-ai.html */

/*
 * Temps entre les attaques des minions
 * @access public
 * @var tempEntreAttaque
 */          

var tempEntreAttaque : float= 5f;

/*
 * Cibles de l'agent / GameObject
 * @access public
 * @var cible
 */      

public var cible:GameObject; 

/*
 * agent du NavMesh
 * @access public
 * @var agent
 */      

public var agent:NavMeshAgent; 

/*
 * Portée minimum
 * @access public
 * @var porteeMini
 */   

public var porteeMini:float = 10f; 

/*
 * Portée maximum
 * @access public
 * @var porteeMaxi
 */   

public var porteeMaxi:float = 10f;

/*
 * Exclamation quand il voit le héros
 * @access public
 * @var exclamation
 */   

public var exclamation:GameObject;

/*
 * Distance où l'ennemi stoppe
 * @access public
 * @var stop
 */   

private var stop : float=0; 

/*
 * Dégats du minion
 * @access private
 * @var degatMinion
 */   

public var degatMinion:int =2;

/*
 * GameObject Hero
 * @access private
 * @var hero
 */   

private var hero: GameObject;

/*
 * Référence au script de gestion du hero
 * @access private
 * @var santeHero
 */   

private var santeHero:scDeplacementTirHero;

/*
 * Timer
 * @access private
 * @var timer
 */   

private var timer:float;


function Awake () {
	hero= GameObject.FindGameObjectWithTag('Hero');
	santeHero = hero.GetComponent.<scDeplacementTirHero>();
}

function Start () {
	agent = GetComponent.<NavMeshAgent>();
	exclamation.SetActive (false);
	Debug.Log(degatMinion);
}

function Update () {
	timer += Time.deltaTime;
	//calcul distance ennemi-joueur
    var distance = Vector3.Distance(transform.position, cible.transform.position);

    //apparition point d'exclamation
     if (distance >= 2 && distance <= 3) {
    	exclamation.SetActive (true);
    } else {
    	exclamation.SetActive (false);
    }

    if (distance <= porteeMaxi && distance >= porteeMini){
    	agent.gameObject.transform.LookAt(cible.transform);
    
    } else if (distance <= porteeMini && distance > stop) {
		//	avance vers l'ennemi
		agent.SetDestination(cible.transform.position);
		if(timer > tempEntreAttaque && distance <= porteeMini){
		Attaque();
		}

	
	} else if  (distance <= stop) {
		
		agent.Stop();

	}


}

function Attaque()
{ timer= 0f;
	if(santeHero.Viedisponible>0)
	{
		santeHero.PrendDamage(degatMinion);

	}
}