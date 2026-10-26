# Images — 4 Fondations

Toutes les images sont dans `public/assets/img/` (format WebP, noms en minuscules). Tant qu'une image manque, le site affiche un emplacement « Photo à venir ». Si un logo manque, le site affiche le nom en texte.

## Déjà en place

- `logo-4f.webp` : logo 4 Fondations (menu et pied de page)
- `entete.webp` : illustration des 4 fondations (accueil)
- `fond-donnez.webp` : fond du bandeau « Donnez pour le parcours d'une vie »
- `fond-a-propos.webp` : fond de l'en-tête de la page À propos
- `logo-cegep.webp`, `logo-hopital.webp`, `logo-centraide.webp`, `logo-pallia-vie.webp` : découpés dans l'illustration d'entête
- `cegep-1` à `cegep-4`, `hopital-1` à `hopital-3`, `centraide-1` à `centraide-4`, `pallia-vie-1` à `pallia-vie-7` (.webp) : carrousels

La trousse donateurs (`public/assets/trousse-donateurs.pdf`) est aussi en place.

## Encore à ajouter

| Nom attendu | Image d'origine |
|---|---|
| `equipe-claire.png` | https://donnezunsens.org/wp-content/uploads/2025/10/attachment.png |
| `equipe-marie-sol.jpg` | https://donnezunsens.org/wp-content/uploads/2024/11/PhotoMSol2024.jpeg |
| `equipe-claude-elaine.jpg` | https://donnezunsens.org/wp-content/uploads/2024/11/CEGEP.jpeg |
| `equipe-raphaelle.jpg` | https://donnezunsens.org/wp-content/uploads/2024/11/Hopital.jpeg |

Pour un fichier .webp à la place, changez l'extension dans le HTML.

## Remplacer une photo

Gardez le même nom de fichier. Les carrousels affichent les photos en 4:3 (recadrées au centre). Passez les photos dans https://squoosh.app (WebP qualité ~75–80, largeur max 1400 px).
