import{j as e}from"./react-vendor-vrmkM06s.js";import{u as s}from"./index-DmodfWLy.js";import{h as a,o as n}from"./syntax-highlighter-CMWetiVG.js";import"./questions-data-TrIgzbrE.js";const o=`# ----------------- Navigation -----------------
pwd                    # Print working directory
cd dir                 # Change directory
cd ..                  # Go up one level
cd -                   # Previous directory
cd ~                   # Home directory
ls -la                 # List all (long format)
ls -lht                # List by time, human-readable
pushd dir              # Push dir onto stack, cd to it
popd                   # Pop dir from stack, cd to it
dirs                   # Show directory stack

# ----------------- Files -----------------
cat file               # Display file
tac file               # Display file reversed (last line first)
head -n file           # First n lines
tail -n file           # Last n lines
tail -f file           # Follow file (live)
less file              # Paginated view (scroll)
more file              # Paginated view (forward only)
touch file             # Create/update timestamp
mkdir -p a/b/c         # Create directory tree
cp -r src dst          # Copy recursively
mv src dst             # Move/rename
rm -r dir              # Remove recursively
ln -s target link      # Create symbolic link
ln target link         # Create hard link
readlink -f path       # Resolve symlinks to absolute path
realpath path         # Print resolved path
basename path         # Strip directory, return filename
dirname path          # Strip filename, return directory
stat file              # File status (size, inode, times)
file file              # Determine file type
tree                   # List directory as tree
wc -l file             # Line count
wc -w file             # Word count
wc -c file             # Byte count

# ----------------- Search -----------------
find . -name '*.txt'   # Find files by name
find . -type f         # Find regular files
find . -mtime -7       # Modified in last 7 days
locate pattern         # Fast search (uses index)
updatedb               # Update locate database (sudo)
grep pattern file      # Search lines
grep -r pattern .      # Recursive search
grep -i pattern        # Case-insensitive
grep -v pattern        # Invert match (exclude)
grep -E 'regex'        # Extended regex
whereis cmd            # Locate binary, source, man
which cmd              # Path to command
type cmd               # cmd resolution (alias/builtin/path)
apropos keyword        # Search man pages by keyword
whatis cmd             # One-line man description

# ----------------- Redirection -----------------
cmd > file             # Redirect stdout (overwrite)
cmd >> file            # Redirect stdout (append)
cmd < file             # Redirect stdin
cmd 2> file            # Redirect stderr
cmd 2>&1               # Merge stderr to stdout
cmd &> file            # Redirect both to file
cmd | tee file         # Pipe and save to file
cmd | tee -a file      # Pipe and append to file

# ----------------- Pipes & Filters -----------------
cmd1 | cmd2            # Pipe stdout to stdin
sort file              # Sort lines
sort -n                # Numeric sort
sort -u                # Unique sort
uniq                   # Remove adjacent duplicates
uniq -c                # Count occurrences
cut -d',' -f1 file     # Extract column
cut -c1-5 file         # Extract chars 1-5
tr 'a' 'b'             # Translate characters
tr -d 'x'              # Delete characters
sed 's/old/new/' file  # Stream editor (substitute)
sed -i 's/old/new/' f  # In-place edit
awk '{print $1}' file  # Pattern scanning (print col 1)
xargs cmd              # Run cmd with stdin as args
xargs -0 cmd           # Null-separated input

# ----------------- Archives & Compression -----------------
tar -xvf file.tar      # Extract tar
tar -cvf out.tar dir   # Create tar archive
tar -xzvf file.tar.gz # Extract tar.gz
tar -czvf out.tar.gz d # Create tar.gz
gzip file              # Compress (creates .gz)
gunzip file.gz         # Decompress
bzip2 file             # Compress (creates .bz2)
bunzip2 file.bz2       # Decompress
xz file                # Compress (creates .xz)
unxz file.xz           # Decompress
zip -r out.zip dir     # Create zip
unzip file.zip         # Extract zip

# ----------------- Variables & Env -----------------
echo $VAR              # Print variable
export VAR=val         # Set for child processes
env                    # Show environment
printenv               # Print environment
unset VAR              # Remove variable
read VAR               # Read input into variable
set                    # Show shell vars and functions

# ----------------- Process & Jobs -----------------
ps aux                 # List processes
ps -ef                 # List processes (BSD style)
top                    # Interactive process viewer
htop                   # Better top (if installed)
kill PID               # Send SIGTERM
kill -9 PID            # Force kill (SIGKILL)
killall name           # Kill by process name
pkill pattern          # Kill by pattern
jobs                   # List background jobs
fg %n                  # Foreground job n
bg %n                  # Background job n
nohup cmd &            # Run immune to hangups
disown                 # Remove job from shell
nice -n 10 cmd         # Run with lower priority
renice -n 5 -p PID     # Change priority of running process

# ----------------- Permissions -----------------
chmod 755 file         # rwxr-xr-x
chmod u+x file         # Add execute for owner
chmod -R 755 dir       # Recursive
chown user:group file  # Change owner and group
chgrp group file      # Change group
umask                  # Show/create file mask
ls -l                  # List with permissions
getfacl file           # Get ACLs
setfacl -m u:x:rw file # Set ACL

# ----------------- Networking -----------------
curl url               # Fetch URL (HTTP client)
curl -O url            # Download, keep filename
wget url               # Download file
wget -r url            # Recursive download
ssh user@host          # SSH remote login
scp file user@host:   # Copy to remote
scp user@host:file .  # Copy from remote
rsync -av src dst      # Sync files (fast)
ping host              # Test connectivity
traceroute host        # Trace route to host
netstat -tuln          # Listening ports
ss -tuln               # Sockets (modern netstat)
dig domain             # DNS lookup
nslookup domain        # DNS lookup (legacy)
nmap host              # Port scan
ifconfig               # Network interfaces (legacy)
ip addr                # Network interfaces
ip route               # Routing table

# ----------------- System Info -----------------
uname -a               # System info (kernel, hostname)
uname -r               # Kernel release
uptime                 # System uptime and load
df -h                  # Disk space (human)
du -sh dir             # Directory size
free -h                # Memory usage
dmesg                  # Kernel messages
lscpu                  # CPU info
lsblk                  # Block devices
lspci                  # PCI devices
hostname               # Show/set hostname
date                   # Current date/time
cal                    # Calendar
whoami                 # Current user
id                     # User/group IDs
who                    # Logged-in users
w                      # Who + what they're doing

# ----------------- Package Management -----------------
apt update             # Update package list (Debian/Ubuntu)
apt install pkg        # Install package
apt remove pkg        # Remove package
apt search pkg        # Search packages
dpkg -l                # List installed (Debian)
dnf install pkg        # Install (Fedora/RHEL)
yum install pkg        # Install (older RHEL)
brew install pkg       # Install (macOS Homebrew)
snap install pkg       # Install snap

# ----------------- System Control -----------------
systemctl start svc    # Start service
systemctl stop svc     # Stop service
systemctl status svc   # Service status
systemctl enable svc   # Enable at boot
service svc start      # Start (SysV, legacy)
crontab -e             # Edit crontab
crontab -l             # List crontab
at 10:00               # Schedule one-time job
shutdown -h now        # Halt now
reboot                 # Reboot
init 0                 # Halt
init 6                 # Reboot

# ----------------- Git -----------------
git status             # Working tree status
git add file           # Stage file
git commit -m "msg"    # Commit
git push               # Push to remote
git pull               # Pull from remote
git clone url          # Clone repo
git branch             # List branches
git checkout branch    # Switch branch
git log                # Commit history
git diff               # Show changes
git merge branch       # Merge branch

# ----------------- Docker -----------------
docker run img         # Run container
docker ps              # List running
docker ps -a           # List all
docker exec -it c cmd  # Run cmd in container
docker stop c          # Stop container
docker rm c            # Remove container
docker images          # List images
docker build -t n .    # Build image

# ----------------- Misc -----------------
man cmd                # Manual page
help cmd               # Shell builtin help
alias ll='ls -la'      # Create alias
unalias ll             # Remove alias
history                # Command history
clear                  # Clear screen
echo "text"            # Print text
printf "fmt" args      # Formatted print
sleep 5                # Sleep 5 seconds
wait                   # Wait for background jobs
true                   # Exit 0
false                  # Exit 1
yes                    # Repeat string forever
seq 1 10               # Print sequence 1 to 10
tee file               # Read stdin, write to file and stdout
mktemp                 # Create temp file
time cmd               # Time command execution
watch -n 1 cmd         # Run cmd every 1 sec`,c=`# ----------------- Navigation -----------------
pwd                    # Afficher le répertoire courant
cd dir                 # Changer de répertoire
cd ..                  # Remonter d'un niveau
cd -                   # Répertoire précédent
cd ~                   # Répertoire personnel
ls -la                 # Lister tout (format long)
ls -lht                # Lister par date, lisible
pushd dir              # Empiler dir, cd dedans
popd                   # Dépiler, cd
dirs                   # Afficher la pile de répertoires

# ----------------- Fichiers -----------------
cat file               # Afficher le fichier
tac file               # Afficher fichier inversé
head -n file           # Premières n lignes
tail -n file           # Dernières n lignes
tail -f file           # Suivre fichier (temps réel)
less file              # Vue paginée (défilement)
more file              # Vue paginée (avant)
touch file             # Créer/mettre à jour horodatage
mkdir -p a/b/c         # Créer l'arborescence
cp -r src dst          # Copier récursivement
mv src dst             # Déplacer/renommer
rm -r dir              # Supprimer récursivement
ln -s target link      # Créer lien symbolique
ln target link         # Créer lien physique
readlink -f path       # Résoudre liens vers chemin absolu
realpath path         # Afficher chemin résolu
basename path         # Extraire nom de fichier
dirname path          # Extraire répertoire
stat file              # Statut fichier (taille, inode)
file file              # Déterminer type de fichier
tree                   # Lister répertoire en arbre
wc -l file             # Nombre de lignes
wc -w file             # Nombre de mots
wc -c file             # Nombre d'octets

# ----------------- Recherche -----------------
find . -name '*.txt'   # Trouver fichiers par nom
find . -type f         # Trouver fichiers réguliers
find . -mtime -7       # Modifiés dans les 7 derniers jours
locate pattern         # Recherche rapide (index)
updatedb               # Mettre à jour base locate (sudo)
grep pattern file      # Rechercher des lignes
grep -r pattern .      # Recherche récursive
grep -i pattern        # Insensible à la casse
grep -v pattern       # Inverser (exclure)
grep -E 'regex'        # Regex étendue
whereis cmd            # Localiser binaire, source, man
which cmd             # Chemin vers la commande
type cmd              # Résolution (alias/builtin/chemin)
apropos keyword        # Rechercher dans les pages man
whatis cmd            # Description man en une ligne

# ----------------- Redirection -----------------
cmd > file             # Rediriger stdout (écraser)
cmd >> file            # Rediriger stdout (ajouter)
cmd < file             # Rediriger stdin
cmd 2> file            # Rediriger stderr
cmd 2>&1               # Fusionner stderr vers stdout
cmd &> file            # Rediriger les deux vers fichier
cmd | tee file         # Tuyau et sauvegarder
cmd | tee -a file      # Tuyau et ajouter

# ----------------- Tubes et filtres -----------------
cmd1 | cmd2            # Tuyau stdout vers stdin
sort file              # Trier les lignes
sort -n                # Tri numérique
sort -u                # Tri unique
uniq                   # Supprimer doublons adjacents
uniq -c                # Compter occurrences
cut -d',' -f1 file     # Extraire une colonne
cut -c1-5 file         # Extraire caractères 1-5
tr 'a' 'b'             # Traduire les caractères
tr -d 'x'              # Supprimer caractères
sed 's/old/new/' file  # Éditeur de flux (remplacer)
sed -i 's/old/new/' f  # Édition sur place
awk '{print $1}' file  # Scan de motifs (col 1)
xargs cmd              # Exécuter cmd avec stdin en args
xargs -0 cmd           # Entrée séparée par null

# ----------------- Archives et compression -----------------
tar -xvf file.tar      # Extraire tar
tar -cvf out.tar dir   # Créer archive tar
tar -xzvf file.tar.gz  # Extraire tar.gz
tar -czvf out.tar.gz d # Créer tar.gz
gzip file              # Compresser (crée .gz)
gunzip file.gz         # Décompresser
bzip2 file             # Compresser (crée .bz2)
bunzip2 file.bz2       # Décompresser
xz file                # Compresser (crée .xz)
unxz file.xz           # Décompresser
zip -r out.zip dir     # Créer zip
unzip file.zip         # Extraire zip

# ----------------- Variables et env -----------------
echo $VAR              # Afficher variable
export VAR=val         # Définir pour processus enfants
env                    # Afficher l'environnement
printenv               # Afficher environnement
unset VAR              # Supprimer variable
read VAR               # Lire entrée dans variable
set                    # Afficher vars et fonctions shell

# ----------------- Processus et jobs -----------------
ps aux                 # Lister les processus
ps -ef                 # Lister processus (style BSD)
top                    # Visualiseur processus interactif
htop                   # Meilleur top (si installé)
kill PID               # Envoyer SIGTERM
kill -9 PID            # Forcer (SIGKILL)
killall name           # Tuer par nom de processus
pkill pattern          # Tuer par motif
jobs                   # Lister jobs en arrière-plan
fg %n                  # Job n au premier plan
bg %n                  # Job n en arrière-plan
nohup cmd &            # Exécuter insensible aux hangups
disown                 # Retirer job du shell
nice -n 10 cmd         # Exécuter avec priorité basse
renice -n 5 -p PID     # Changer priorité processus

# ----------------- Permissions -----------------
chmod 755 file         # rwxr-xr-x
chmod u+x file         # Ajouter exécution pour propriétaire
chmod -R 755 dir       # Récursif
chown user:group file  # Changer propriétaire et groupe
chgrp group file       # Changer groupe
umask                  # Afficher/créer masque fichier
ls -l                  # Lister avec permissions
getfacl file           # Obtenir ACL
setfacl -m u:x:rw file # Définir ACL

# ----------------- Réseau -----------------
curl url               # Récupérer URL (client HTTP)
curl -O url            # Télécharger, garder nom
wget url               # Télécharger fichier
wget -r url            # Téléchargement récursif
ssh user@host          # Connexion SSH distante
scp file user@host:   # Copier vers distant
scp user@host:file .   # Copier depuis distant
rsync -av src dst      # Synchroniser fichiers (rapide)
ping host              # Tester connectivité
traceroute host        # Tracer route vers hôte
netstat -tuln          # Ports en écoute
ss -tuln               # Sockets (netstat moderne)
dig domain             # Recherche DNS
nslookup domain        # Recherche DNS (legacy)
nmap host              # Scan de ports
ifconfig               # Interfaces réseau (legacy)
ip addr                # Interfaces réseau
ip route               # Table de routage

# ----------------- Infos système -----------------
uname -a               # Infos système (noyau, hostname)
uname -r               # Version noyau
uptime                 # Uptime et charge
df -h                  # Espace disque (lisible)
du -sh dir             # Taille répertoire
free -h                # Utilisation mémoire
dmesg                  # Messages noyau
lscpu                  # Infos CPU
lsblk                  # Périphériques bloc
lspci                  # Périphériques PCI
hostname               # Afficher/définir hostname
date                   # Date/heure actuelle
cal                    # Calendrier
whoami                 # Utilisateur courant
id                     # IDs utilisateur/groupe
who                    # Utilisateurs connectés
w                      # Who + ce qu'ils font

# ----------------- Gestion paquets -----------------
apt update             # Mettre à jour liste (Debian/Ubuntu)
apt install pkg       # Installer paquet
apt remove pkg        # Supprimer paquet
apt search pkg        # Rechercher paquets
dpkg -l               # Lister installés (Debian)
dnf install pkg       # Installer (Fedora/RHEL)
yum install pkg       # Installer (RHEL ancien)
brew install pkg      # Installer (macOS Homebrew)
snap install pkg      # Installer snap

# ----------------- Contrôle système -----------------
systemctl start svc    # Démarrer service
systemctl stop svc     # Arrêter service
systemctl status svc   # Statut service
systemctl enable svc   # Activer au démarrage
service svc start      # Démarrer (SysV, legacy)
crontab -e             # Éditer crontab
crontab -l             # Lister crontab
at 10:00               # Planifier tâche unique
shutdown -h now        # Arrêt maintenant
reboot                 # Redémarrer
init 0                 # Arrêt
init 6                 # Redémarrage

# ----------------- Git -----------------
git status             # Statut arbre de travail
git add file           # Ajouter fichier
git commit -m "msg"    # Committer
git push               # Pousser vers distant
git pull               # Tirer depuis distant
git clone url          # Cloner dépôt
git branch             # Lister branches
git checkout branch    # Changer de branche
git log                # Historique commits
git diff               # Afficher changements
git merge branch       # Fusionner branche

# ----------------- Docker -----------------
docker run img         # Exécuter conteneur
docker ps              # Lister en cours
docker ps -a           # Lister tous
docker exec -it c cmd   # Exécuter cmd dans conteneur
docker stop c          # Arrêter conteneur
docker rm c             # Supprimer conteneur
docker images          # Lister images
docker build -t n .    # Construire image

# ----------------- Divers -----------------
man cmd                # Page manuel
help cmd               # Aide builtin shell
alias ll='ls -la'      # Créer alias
unalias ll             # Supprimer alias
history                # Historique des commandes
clear                  # Effacer écran
echo "text"            # Afficher texte
printf "fmt" args      # Affichage formaté
sleep 5                # Pause 5 secondes
wait                   # Attendre jobs en arrière-plan
true                   # Code sortie 0
false                  # Code sortie 1
yes                    # Répéter chaîne indéfiniment
seq 1 10               # Afficher séquence 1 à 10
tee file               # Lire stdin, écrire fichier et stdout
mktemp                 # Créer fichier temporaire
time cmd               # Chronométrer exécution
watch -n 1 cmd         # Exécuter cmd chaque 1 sec`,m=({onBack:t})=>{const{language:r}=s(),i=r==="fr"?c:o;return e.jsxs("div",{className:"relative min-h-[600px] animate-in slide-in-from-left duration-500 pb-12",children:[e.jsxs("div",{className:"flex items-center justify-between mb-8",children:[e.jsxs("h2",{className:"text-2xl font-black text-white flex items-center gap-3",children:[e.jsx("i",{className:"fas fa-code text-yellow-300"}),r==="fr"?"Référence des commandes":"Command Reference"]}),e.jsx("button",{onClick:t,className:"px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-colors",children:r==="fr"?"Retour":"Back"})]}),e.jsx("div",{className:"glass rounded-2xl p-6 border border-white/5 overflow-x-auto",children:e.jsx(a,{language:"bash",style:n,customStyle:{padding:"1rem",margin:0,borderRadius:"0.75rem",background:"transparent",fontSize:"0.8rem",lineHeight:"1.6",fontFamily:"'Fira Code', monospace"},codeTagProps:{style:{fontFamily:"'Fira Code', monospace",whiteSpace:"pre",display:"block"}},PreTag:"div",children:i})})]})};export{m as MethodsView};
