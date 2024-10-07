# Comment démarrer l'application

## [<u>1. Téléchargement</u>](#title-one)

En premier lieu, commencez par ouvrir un éditeur
de code (tel que Webstorm ou Visual Studio Code).

Créez un projet et téléchargez le projet.

## [<u>2. Lancement</u>](#title-two)

Tout d'abord, assurez-vous de bien avoir installé [Node](https://nodejs.org/fr/download/package-manager).
La version minimale requise est la 14, mais la 20.17.0 (LTS) est conseillée.

Une fois le projet téléchargé, ouvrez le terminal de votre éditeur de code
et écrivez

```cd front```

qui vous enverra dans le dossier du front.

<br />
Ceci fait, écrivez

```npm install```

qui téléchargera toutes les dépendances liées à la partie front du projet sur votre machine.

<br />

Une fois cette étape terminée, écrivez :  
```cd ../back```

Exécutez une nouvelle fois la commande suivante :

```npm install```.

Cette fois, les dépendances liées au back du projet seront téléchargées.

Cette étape terminée, vous pouvez donc lancer le front du projet en écrivant

```cd ../front```

puis

```npm run serve```

puis lancez le back du projet en écrivant :

```cd ../back```

puis

```node server.js```.

Rendez-vous, comme vous l'indiquera votre terminal, à cette [adresse](http://localhost:8080).  
Votre navigateur par défaut, dans dans certains cas, ouvrira d'ailleurs de lui-même la page.

------------------------------------------------------------------------------------------------------------------------------------

### <u>Astuce pour les ide de JetBrains</u> :

Vous pouvez éviter toutes ces étapes de lancement en ligne de commande.

<u><strong>Attention, cela ne vous dispense pas d"installer manuellement les dépendances !</strong></u>  
Mais l'ide vous présentera une pop-in, en bas à droite, pour vous dire de le faire.

Vous pouvez remarquer, dans la barre du haut, un petit onglet nommé 'Add configuration'.

Cliquez dessus pour ajouter le lancement du front et du back.

Pour le front, cliquez sur le petit '+' en haut à gauche de la pop-up qui s'est ouverte.
Dans la liste déroulante qui s'ouvre, sélectionnez 'npm'. Ensuite, sélectionnez le package.json situé dans le dossier 'front'.  
Dans la fenêtre d'en dessous, sélectionnez 'run', et dans celle d'encore en dessous, sélectionnez 'serve'.  
Vous pouvez maintenant sélectionner 'Apply', en bas à droite de la pop-up !

Pour le back, c'est légèrement différent. Sélectionnez également le petit '+', mais cette fois vous allez sélectionner 'Node.js'.  
Une fois cela effectué, cliquez sur 'File loader'. Cliquez sur le fichier 'server.js' situé dans le dossier 'back'.  

Vous pouvez retrouver vos configurations enregistrées à l'endroit où vous avez trouvé l'onglet 'Add configuration'.  
Vous pouvez changer de configuration en cliquant sur la petite flèche à droite.

Vous pouvez maintenant lancer l'application en deux clics !
