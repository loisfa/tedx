// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    console.log("IN TOKEN 1");

    // UTILE POUR AUCUNE IDEE, SUREMENT GOOGLE MAP
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("PartnersCtrl", ['$scope', function($scope) {
  $scope.partners = [
    {name:'Fondation Mines Nancy', subtitle:'', url:'http://www.fondationminesnancy.org/'},
    {name:'Orange', subtitle:'', url:'http://www.orange.com/fr/accueil'},
    {name:'Artem Entreprises', subtitle:"Semer l'esprit d'innover", url:'http://www.artem-entreprises.fr'},
    {name:'Rotary District 1790', subtitle:"Réseau de professionnels engagés et responsables", url:'http://www.rotary-district1790.com/'},
    {name:'Capgemini Consulting', subtitle:"Entreprise de services informatiques, infogérance et conseil en management", url:'http://www.fondationminesnancy.org/'},
    {name:"Caisse d'Epargne", subtitle:'', url:'https://www.caisse-epargne.fr/particuliers/accueil.aspx'},
    {name:'Clear Channel', subtitle:'Acteur majeur de la communication extérieure', url:'http://www.clearchannel.fr'},
    {name:'La Poste', subtitle:'', url:'http://legroupe.laposte.fr'},
    {name:'Creatiwity', subtitle:'Agence de communication digitale', url:'https://creatiwity.net/'},
    {name:'Mines Nancy', subtitle:'', url:'http://www.mines-nancy.univ-lorraine.fr/'},
    {name:'Universite de Lorraine', subtitle:'', url:'http://www.univ-lorraine.fr/'},
    {name:'Grand Nancy', subtitle:'', url:'http://www.grand-nancy.org/accueil/'},
    {name:'Region ACAL', subtitle:'', url:'http://www.alsacechampagneardennelorraine.eu'},
    {name:'Virgin Radio', subtitle:'', url:'http://www.virginradio.fr'},
    {name:'Au Pain Chaud', subtitle:'', url:''}
  ];
}])

.controller("FollowCtrl", ['$scope', function($scope) {
  $scope.follows = [
    {name:'tedxminesnancy.com', type:'site internet', url:'http://tedxminesnancy.com/'},
    {name:'TEDx Mines Nancy', type:'Facebook', url:'https://www.facebook.com/TEDxMinesNancy/'},
    {name:'@TEDxMinesNancy', type:'Twitter', url:'https://twitter.com/tedxminesnancy'},
    {name:'TEDx Mines Nancy', type:'Linkedin', url:'https://www.linkedin.com/company/tedx-mines-nancy'},
    {name:'TEDxMinesNancy', type:'Youtube', url:'https://www.youtube.com/watch?v=8iSaupOTzN8&list=PLsRNoUx8w3rM7BmsXf2bV2Jf81sC7psF9'}
  ]
}])

.controller("AccessCtrl", ['$scope', function($scope) {
  $scope.faq = [
{question : "Quelle est la date du TEDx Mines Nancy édition 2016 ?", answer : "Le samedi 21 mai 2016.", display : "false"},
{question : "Quelle est l'adresse exacte ?", answer : "92 rue du Sergent Blandan, Campus Artem.", display : "false"},
{question : "Comment y accéder ?", answer : "Privilégiez le tram (arrêt 'Blandan') ou le bus (ligne 7 arrêt 'ARTEM). Il y a néanmoins des parking aux alentours.", display : "false"},
{question : "Où se trouve le parking gratuit le plus proche ?", answer : "Le parking gratuit le plus proche se trouve à Nancy Thermal.", display : "false"},
{question : "Peut-on se restaurer sur place ?", answer : "Il y a de nombreux commerces autour du campus. Vous pourrez vous y restaurer si vous avez un petit creux.", display : "false"},
{question : "Quels sont les horaires des Labs ?", answer : "Les Labs seront ouverts au public entre 13h et 20h.", display : "false"},
{question : "Faut-il s'inscrire pour les Labs ?", answer : "Non, ils sont en libre accès !", display : "false"},
{question : "Faut-il s'inscrire pour assister aux Talks ?", answer : "Oui, il faut s'incrire en amont de la journée sur notre site internet http://tedxminesnancy.com.", display : "false"},
{question : "Quelles sont les horaires des Talks ?", answer : "Les Talks ont lieu entre 14h et 19h.", display : "false"},
{question : "Comment voir les Talks sans s'incrire ?", answer : "Vous pourrez voir les Talks retransmis en direct sur écran géant sur le campus. Le live sera aussi disponible sur internet. Consultez http://tedxminesnancy.com pour davantage de détails.", display : "false"}
];
  // initialise les id :
  for (var i=0; i<$scope.faq.length; i++) {
    $scope.faq[i].id = i;
    $scope.faq[i].arrowWay = 'down';
  }// pour la flèche
    // Les deux fonctions suivantes gèrent l'affichage de la FAQ
  $scope.setShowDiv = function(question) {
    if ($scope.faq[question.id].display == 'false') {
      $scope.faq[question.id].display = 'true';
      $scope.faq[question.id].arrowWay = 'up';
    } else {
      $scope.faq[question.id].display = 'false';
      $scope.faq[question.id].arrowWay = 'down';
    }
  };
  $scope.getShowDiv = function(idQuestion) {
    if ($scope.faq[idQuestion].display == 'true') {
      return true;
    } else {
      return false;
    }
  };
}])

.controller("TalksCtrl", ['$scope','$rootScope', '$http', function($scope, $rootScope, $http) {
  $scope.speakers = [
    {name:'Samuel',  surname:'Juillot', category:'Environnement', description:"Titulaire de deux Masters en biotechnologie et d'un doctorat en biologie synthétique, Samuel Juillot dirige l'équipe de recherche et développement de Glowee depuis 2015. Glowee, c’est la mer qui nous éclaire. Une source de lumière vivante, qui fonctionne sans consommer d’électricité, et en émettant peu de pollution lumineuse et de CO2.", state:'fini'},
    {name:'Adrien', surname:'Labastire', category:'Divertissement', description:"Fondateur et Directeur Général Adjoint de Golden Moustache la nouvelle plateforme web de comédie du groupe M6. Le parcours de Adrien Labastire compte notamment des responsabilités dans les programmes chez M6 et en Business Développement chez NBC Universal International à Londres. Il est diplômé de Sciences Po Paris et du MBA de l’INSEAD.", state:'fini'},
    {name:'Morgane',  surname:'Seliman', category:'Expérience', description:"Ex-femme battue, Morgane Seliman se lutte pour cette cause dont elle a été victime auparavant. Très engagée, elle a rédigé le livre « Il m’a volé ma vie » sur son expérience. Elle utilise également les réseaux sociaux afin de s'opposer aux violences faites aux femmes.", state:'fini'},
    {name:'Alain', surname:'Lecavelier Des Etangs', category:'Sciences', description:"Directeur de recherche au CNRS, astrophysicien à l'Institut d'astrophysique de Paris (IAP). Alain Lecavelier des Etangs préside la commission « Exoplanètes et système solaire » de l'Union Astronomique Internationale. Il est l'auteur du livre de vulgarisation « Le ciel et les étoiles sans complexe », prix du livre Haute-Maurienne de l'Astronomie.", state:'fini'},
    {name:'Guy',  surname:'Alba', category:'Handicap', description:"Fondateur de l’Association Européenne contre les Leucodystrophies, des maladies neurologiques qui entrainent progressivement la perte de toutes les fonctions vitales. Guy Alba est désormais Président d’ELA International qui fédère l’action des associations ELA dans le monde. En France comme à l’étranger, il a su fédérer des chefs d’entreprises, des chercheurs et de nombreuses personnalités autour du combat d’ELA. ", state:'fini'},
    {name:'Alain', surname:'Gachet', category:'Ingénierie', description:"Ingénieur des Mines (Nancy 73), explorateur géologue-géophysicien pétrolier, Expert international auprès des Nations Unies, il vit et travaille dans le couvent des Ursulines à Tarascon. Il est l'inventeur du système WATEX (Water Exploration) avec lequel il a découvert des aquifères géants au Kenya puis en Ethiopie. Après les interventions d’urgence pour les réfugiés, Il poursuit ses travaux en Iraq, Afghanistan, Angola dans le cadre de la reconstruction post-conflits.", state:'fini'},
    {name:'Thomas',  surname: 'Enhco', category:'Musique', description:"Né à Paris le 29 septembre 1988, Thomas est un pianiste, violoniste et compositeur de Jazz Français. Issu d’une grande famille de musiciens et de comédiens (la famille Casadesus, dont il fait partie de la cinquième génération), il commence le violon à 3 ans et le piano à 6 ans, étudie le classique et le jazz dans les deux instruments, écrit ses premières compositions et donne ses premiers concerts au sein d’un groupe d’enfants.", state:'fini'},
    {name:'Rebecca', surname:'Abergel', category:'Médecine', description:"Chimiste au Lawrence Berkeley National Laboratory, Rebecca Abergel consacre ses travaux de recherches au développement de nouveaux médicaments pour le traitement des populations contaminées par des radionucléides. Un de ces produits a récemment été agrémenté par la Food and Drug Administration des États-Unis pour poursuivre des essais cliniques", state:'fini'},
    {name:'Laura', surname:'Hassler', category:'Musique', description:"Fondatrice et Directrice de l'ONG Musicians Without Borders. Grâce à son organisation, Laura Hassler veut utiliser la musique pour rassembler les gens et aller au delà des conflits et de la souffrance provoquée par la guerre", state:'fini'},
    {name:'Sofiane',  surname:'Kihoul', category:'Humanitaire', description:"Co-fondateurs de la marque Defend Paris, une marque qui s'est donnée pour mission de transmettre des messages forts par l'utilisation de symboles puissants et universels. Au moyen de vêtements sobres et néanmoins percutants, Defend Paris s'appuie sur la mode pour toucher les sensibilités et aider des associations oeuvrant pour la paix et la cohabitation.", state:'fini'},
    {name:'Katharina', surname:'Dermuhl', category:'Education', description:"Responsable Marketing à Kiron University, une université Allemande qui permet aux réfugiés de poursuivre ou commencer des études de qualité et gratuitement grâce à un cursus alternant cours en ligne et cours en université.", state:'fini'},
  ];

  $scope.speaker = {};
  $scope.setName = function(clickedSpeaker) {
    $scope.speaker = clickedSpeaker;
    $rootScope.rootSpeaker = $scope.speaker;
  };
}])

.controller("SpeakerCtrl", ['$scope','$rootScope', function($scope, $rootScope) {
  $scope.speaker = $rootScope.rootSpeaker;
  }])

.controller("LabsCtrl", ['$scope','$rootScope', '$http', function($scope, $rootScope, $http) {
  $scope.labs = [
  {name: "3D Sound Labs", room:"B101", category:"Réalité augmentée sonore", description:"Vivez une expérience sonore immersive avec cet objet révolutionnaire."},
  {name: "Photographie 3D", room:"A203", category: "Numérique artisanal", description: "Plus qu’une simple image sur une pellicule, mieux que la 3D au cinéma, découvrez la photographie en relief !"} ,
  {name: "Chemise anti-tache, Ultra Ever Dry", room:"Extérieur", category: "Mode / Innovation", description: "Un vêtement intachable et un produit allergique à l’eau : réussirez-vous à vous salir et à vous mouiller ?"},
  {name: "Scio", room:"B103", category: "Numérique / Consommation", description: "Un scanner pour connaître la composition des aliments : sachez enfin ce que vous mangez vraiment !"},
  {name: "Myo", room:"B203", category: "Technologie", description: "Grâce à ce brassard, contrôlez un objet à distance."},
  {name: "Power Up 3.0", room:"Extérieur", category: "Détente", description: "Tout le monde sait faire des avions en papier, mais saurez-vous les guider et les posez où bon vous semble ?"},
  {name: "Impression 3D", room:"B201", category: "Nouvelles technologies", description: "Donnez vie à vos objets en les imprimant en 3D."},
  {name: "Robot Nao", room:"A101", category: "Robotique", description: "Des robots intelligents capables de danser, de vous saluer et de reconnaître votre présence, vous y croyez ?"},
  {name: "Motion Capture", room:"A201", category: "Technologie audiovisuelle", description: "Capturer des images et faire un film à partir de capteurs posés sur votre corps, ça vous tente ?"},
  {name: "A Blind Legend", room:"A104", category: "Sensibilisation", description: "Venez tester ce jeu et vous mettre à la place d’un aveugle !"},
  {name: "Umoove", room:"B204", category: "Innovation", description : "Et si vous contrôliez un portable seulement grâce aux mouvements de vos yeux ?"},
  {name: "Reactable", room:"B202", category: "Musique numérique", description: "Vous n’êtes pas musicien ? Faire de la musique n’a jamais été aussi simple !"},
  {name: "Crystal Ball", room:"A202", category: "Musique interactive", description: "Une table de mixage simple d’utilisation pour mélanger musique et vidéo."},
];

  $scope.lab = {};
  $scope.setName = function(clickedLab) {
    $scope.lab = clickedLab;
    $rootScope.rootLab = $scope.lab;
  };
}])


.controller("LabsMapCtrl", ['$scope', function($scope) {

  $scope.floor = 0;
  $scope.displayFloor = function(clickedFloor) {
    $scope.floor = clickedFloor;
  };
  $scope.getShowMap = function(displayFloor) {
    if (displayFloor == $scope.floor) {
      return true;
    }
    else {
      return false;
    }
  };
}])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/talks");
  $stateProvider.state('access', {
      url: "/access",
      templateUrl: "templates/access.html"
    })
  $stateProvider.state('labs', {
      url: "/labs",
      templateUrl: "templates/labs.html"
    })
  $stateProvider.state('labsMap', {
      url: "/labs/labsMap",
      templateUrl: "templates/labsMap.html"
    })
  $stateProvider.state('lab', {
      url: "/labs/lab",
      templateUrl: "templates/lab.html"
    })
  $stateProvider.state('talks', {
      url: "/talks",
      templateUrl: "templates/talks.html"
    })
  $stateProvider.state('speaker', {
      url: "/talks/speaker",
      templateUrl: "templates/speaker.html"
    })
  $stateProvider.state('partners', {
      url: "/partners",
      templateUrl: "templates/partners.html",
    });
  $stateProvider.state('follow', {
      url: "/follow",
      templateUrl: "templates/follow.html",
    });
});

function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
