# donnezunsens.org — 4 Fondations

Recréation statique (HTML/CSS/JS, sans build) du site WordPress des 4 Fondations, déployée sur Cloudflare.

## Pages

- `/` — accueil : vidéos, les 4 fondations (carrousels photo), comment donner, contact (courriel de chaque responsable)
- `/a-propos/` — responsables et témoignages de donateurs (l'ancienne adresse `/index.php/149-2/` y redirige)

## À faire avant la mise en ligne

1. **Images** : voir `ASSETS.md` (noms exacts + liens vers les originaux). Le PDF de la trousse donateurs va dans `public/assets/trousse-donateurs.pdf`.
2. **Contact** : pas de formulaire. La section « Contactez-nous » affiche le courriel de la personne responsable de chaque fondation (liens `mailto:` avec l'objet « Don planifié »).
3. **Cloudflare** : Workers & Pages → Créer → Importer un repo.
   - Nom du projet : `donnezunsens` (doit correspondre à `wrangler.jsonc`)
   - Commande de build : *(vide)* — déploiement : `npx wrangler deploy`
4. **Domaine** : une fois le DNS chez Cloudflare → Settings → Domains & Routes → Custom domain → `donnezunsens.org` et `www.donnezunsens.org`. Vérifiez les enregistrements MX avant de changer les serveurs de noms.

## Fichiers

- `public/` — le site publié : `index.html`, `a-propos/`, `404.html`, `styles.css`, `main.js`, `assets/`, `_headers`, `_redirects`, `robots.txt`, `sitemap.xml`
- `wrangler.jsonc` — configuration Cloudflare
- `README.md`, `ASSETS.md` — documentation (non publiée)
