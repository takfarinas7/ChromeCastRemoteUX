# Télécommande React connectée à Chromecast

## Description
Ce projet consiste en une télécommande interactive développée en React (JSX).  
Elle permet de contrôler une vidéo via Chromecast en offrant des fonctionnalités telles que démarrer, arrêter, avancer, reculer, ajuster le volume et bien plus encore.  
Le but est de simuler une interface utilisateur permettant de manipuler facilement une vidéo depuis un appareil.

---

## Principe de base
L’application fonctionne selon le principe d’une communication entre trois acteurs principaux :

- **L'utilisateur**  
  Utilise la télécommande interactive sur un appareil (mobile, tablette ou ordinateur). Grâce à cette télécommande, il peut contrôler une vidéo de manière simple via des boutons (lecture, pause, volume, etc.).

- **Le client (application React)**  
  La télécommande est développée en React (JSX). Cette interface permet à l’utilisateur d’envoyer des commandes comme démarrer la vidéo, augmenter le volume ou se connecter à Chromecast.

- **Le serveur (Chromecast)**  
  Le Chromecast est connecté via HDMI à une télévision. Il reçoit les commandes envoyées depuis l’application client et agit en conséquence (lancer la vidéo, régler le son, etc.).

---

## Fonctionnalités principales

- **Contrôle vidéo** : Lire, mettre en pause, avancer, reculer, et stopper la vidéo.
- **Gestion du volume** : Contrôler le volume, couper le son ou ajuster les niveaux.
- **Connectivité Chromecast** : Se connecter à un appareil Chromecast pour gérer les vidéos à distance.
- **Interaction utilisateur** : Interface interactive avec des boutons pour un contrôle facile.

---

## Problèmes rencontrés 

- **Bouton +/-10s** : Dans la première vidéo lancée, il est possible que ces boutons ne fonctionnent pas correctement.
- **Barre visuelle après Mute** : Lorsque le bouton Mute est cliqué pour la première fois, le niveau de la barre disparaît correctement. Cependant, lorsqu'on reclique dessus, la barre réapparaît du côté du média, mais le niveau de la barre ne se rétablit pas sur la manette.
- **Augmenter le volume après Mute** : Après avoir utilisé le bouton Mute, si on clique sur le bouton pour augmenter le volume, cela commence à partir de 0 au lieu de la valeur actuelle.
- **Relancement du média** : Une fois qu'on clique sur le bouton Éteindre, la session se termine et si on reclique dessus pour la rallumer, le signal devient vert, mais le média ne se lance pas.
- **Manette fermée** : Lorsque la manette est en état fermé, les différents boutons restent actifs et ne sont pas bloqués.

---

## Technologies utilisées

- **React (JSX)** : Pour créer une interface utilisateur dynamique.
- **Hooks React** : Utilisation de `useState`, `useEffect` pour la gestion des états.
- **LocalStorage** : Sauvegarde des états de la télécommande (par ex., état du bouton power).
- **API Chromecast** : Contrôle d'un appareil Chromecast via la télécommande.

---

## Services

| Service           | Description                                                                                   |
|------------------|-----------------------------------------------------------------------------------------------|
| `Allumer`         | Démarre la télécommande.                                                                       |
| `Éteindre`        | Arrête la télécommande.                                                                        |
| `Monter`          | Augmente le volume.                                                                            |
| `Baisser`         | Baisse le volume.                                                                              |
| `Muet`            | Coupe le son.                                                                                 |
| `SignalVolume`    | Indique l'état du volume.                                                                      |
| `Traduire`        | Traduit les labels de la télécommande.                                                         |
| `Lecture`         | Démarre la vidéo.                                                                              |
| `Pause`           | Met la vidéo en pause.                                                                         |
| `+10s`            | Avance de 10 secondes.                                                                         |
| `-10s`            | Recule de 10 secondes.                                                                         |
| `Avancer`         | Change de vidéo vers l'avant.                                                                  |
| `Reculer`         | Change de vidéo vers l'arrière.                                                                |
| `Aide`            | Affiche une consigne pour obtenir de l'aide.                                                   |
| `Signal Ouvert`   | Indique que la manette est ouverte.                                                            |
| `Signal Fermé`    | Indique que la manette est fermée.                                                             |

---

## Exemples d'actions possibles (Séquence type)

1. **Connexion** : L'utilisateur connecte l'application client au Chromecast via un clic droit → Caster → Sélectionner Chromecast.
2. **Contrôle du contenu** :
   - Lancer avec `Lecture`
   - Pause avec `Pause`
   - Avancer ou reculer de 10 secondes avec `+10s` ou `-10s`
   - Avancer ou reculer de vidéo avec `Avancer` ou `Reculer`
   - Ajuster le volume avec `Monter`, `Baisser`, ou couper le son avec `Muet`

---

## États possibles

| État                         | Description                                                        |
|-----------------------------|--------------------------------------------------------------------|
| Télécommande allumée         | Télécommande active, prête à envoyer des commandes.                 |
| Télécommande éteinte         | Télécommande désactivée.                                            |
| Connecté à Chromecast        | L'application est connectée à un Chromecast.                        |
| Non connecté                 | L'application attend la connexion.                                  |
| Vidéo en lecture             | Le contenu est en train d'être lu.                                  |
| Vidéo en pause               | Le contenu est en pause.                                            |
| Volume actif                 | Le volume est audible.                                              |
| Volume coupé (mute)          | Le son est coupé.                                                   |
| Signal ouvert                | Les actions de la télécommande sont ouvertes.                      |
| Signal fermé                 | Les actions de la télécommande sont fermées.                       |

---

## Liste des contrôles

| Contrôle                     | Description                                                        |
|-----------------------------|--------------------------------------------------------------------|
| Boutons VolumeUp / VolumeDown | Ajuste le volume du média.                                        |
| Bouton Mute                  | Coupe le son.                                                      |
| Boutons Play / Pause         | Lance ou met en pause la vidéo.                                    |
| Boutons -10s / +10s          | Avance ou recule de 10 secondes.                                  |
| Bouton Avancer / Reculer     | Avance ou recule de vidéo.                                         |
| Bouton Traduire              | Change la langue des labels.                                       |
| Boutons Allumer / Éteindre   | Allume ou éteint la télécommande.                                  |
| Bouton Aide                  | Affiche une fenêtre avec une consigne.                            |

---

## Limitations des contrôles

- Tous les clients n'ont pas nécessairement le **même type d'interface**.
  - Sur mobile : Certains appareils peuvent utiliser les **boutons physiques ou tactiles** pour ajuster le volume.
  - Sur desktop : Le contrôle se fait uniquement via l'interface React (clics).
- L'apparence peut légèrement varier selon le navigateur utilisé.

---

## Installation

1. Clonez le projet.
2. Installez les dépendances avec `npm install`.
3. Lancez le projet avec `npm run dev`.

---

## Partenaires

- Takfarinas Djerroud
- Arda Ozan Yildiz

Nous avons travaillé ensemble tout au long du projet sur un même ordinateur.

---

# Sources
- [TernaireW3S](https://www.w3schools.com/react/react_es6_ternary.asp)
- [TernaireSO](https://stackoverflow.com/questions/38084658/ternary-operator-in-jsx-to-include-html-with-react)
- [Svg](https://www.svgrepo.com/)
- [Toggle](https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link)
- [Figma](https://www.figma.com/design/KyfPLBauM3ADNMBGSWmi90/Untitled?node-id=0-1&p=f&t=CofFbfplSPcby4SA-0)
- [GitHub Prof](https://github.com/cegepmv/420-411/wiki/Laboratoire-2#conception-dune-manette-virtuelle-pour-google-chromecast-remote-player-controller)
