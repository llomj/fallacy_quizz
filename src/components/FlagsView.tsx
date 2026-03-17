import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Bash syntax highlighting for flags reference: oneDark base, comment neutral (per AGENTS.md)
const COMMENT_NEUTRAL = 'hsl(0, 0%, 50%)';
const FLAG_OPTION = 'hsl(207, 82%, 66%)';
const STRING_DESC = 'hsl(39, 77%, 69%)';
const PUNCT = 'hsl(220, 14%, 71%)';

const flagsStyle = {
  ...oneDark,
  // Section headers (# ----------------- ls -----------------) — neutral so they don’t dominate
  comment: { color: COMMENT_NEUTRAL, fontStyle: 'normal' as const },
  prolog: { color: COMMENT_NEUTRAL },
  cdata: { color: COMMENT_NEUTRAL },
  string: { color: STRING_DESC },
  builtin: { color: FLAG_OPTION },
  selector: { color: STRING_DESC },
  inserted: { color: STRING_DESC },
  regex: { color: STRING_DESC },
  char: { color: STRING_DESC },
  'attr-value': { color: STRING_DESC },
  punctuation: { color: PUNCT },
  keyword: { color: 'hsl(286, 60%, 67%)' },
  variable: { color: FLAG_OPTION },
  operator: { color: PUNCT },
  function: { color: FLAG_OPTION },
  constant: { color: STRING_DESC },
  number: { color: STRING_DESC },
  'attr-name': { color: FLAG_OPTION },
  'class-name': { color: STRING_DESC },
  boolean: { color: STRING_DESC },
  property: { color: FLAG_OPTION },
  tag: { color: FLAG_OPTION },
  symbol: { color: PUNCT },
  entity: { color: PUNCT },
  doctype: { color: PUNCT },
};

interface FlagsViewProps {
  onBack: () => void;
  onPlayClickSound?: () => void;
}

const FLAGS_EN = `# ----------------- ls -----------------
-l    Long format (permissions, owner, size, date)
-a    Show hidden files (dotfiles)
-A    Show hidden except . and ..
-h    Human-readable sizes (K, M, G)
-t    Sort by modification time
-r    Reverse sort order
-R    List subdirectories recursively
-i    Show inode number
-1    One file per line
-S    Sort by size
-d    List directory itself, not contents
--color    Colorize output (auto/always/never)

# ----------------- grep -----------------
-i    Ignore case
-r    Recursive search in directories
-R    Same as -r (recursive)
-v    Invert match (exclude matching lines)
-n    Show line numbers
-E    Extended regex (egrep)
-F    Fixed string (no regex)
-c    Count matches only
-l    List files with matches only
-w    Match whole word
-A n    Show n lines after match
-B n    Show n lines before match
-C n    Show n lines before and after

# ----------------- find -----------------
-name 'pattern'    Match filename (glob)
-iname 'pattern'   Case-insensitive name match
-type f            Regular file
-type d            Directory
-type l            Symbolic link
-mtime -n          Modified in last n days
-atime -n          Accessed in last n days
-size +10M         Larger than 10MB
-maxdepth n        Limit search depth
-mindepth n        Minimum depth
-exec cmd {} \\;    Run command on each result
-delete            Delete found files
-empty             Empty files/dirs
-not               Negate next test

# ----------------- cp -----------------
-r    Recursive (copy directories)
-R    Same as -r
-i    Interactive (prompt before overwrite)
-v    Verbose
-p    Preserve mode, ownership, timestamps
-f    Force (overwrite without prompt)
-a    Archive (preserve all attributes)

# ----------------- mv -----------------
-i    Interactive (prompt before overwrite)
-v    Verbose
-f    Force (no prompt)
-n    No-clobber (don't overwrite existing)

# ----------------- rm -----------------
-r    Recursive (directories and contents)
-R    Same as -r
-f    Force (no prompt, ignore missing)
-i    Interactive (prompt before each)
-v    Verbose
-d    Remove empty directories

# ----------------- chmod -----------------
-R    Recursive (apply to dirs and contents)
-v    Verbose
-c    Report only when changed
--reference=file   Copy permissions from file

# ----------------- tar -----------------
-x    Extract
-c    Create archive
-v    Verbose
-f    File (next arg is archive name)
-z    gzip compression (.tar.gz)
-j    bzip2 compression (.tar.bz2)
-J    xz compression (.tar.xz)
-t    List contents
-C dir    Change to dir before extract
--exclude    Exclude pattern
-p    Preserve permissions

# ----------------- sort -----------------
-n    Numeric sort
-r    Reverse order
-u    Unique (remove duplicates)
-k n    Sort by column n
-t c    Use c as field separator
-f    Case-insensitive
-h    Human-readable numbers (K, M, G)

# ----------------- head / tail -----------------
-n N    First/last N lines (head -n 5 = head -5)
-c N    First/last N bytes
-f    Follow (tail only, like tail -f)
-s N    Sleep N sec between reads (tail -f)

# ----------------- cut -----------------
-d c    Delimiter (e.g. -d',')
-f n    Field(s) to extract (1,2 or 1-3)
-c n    Character positions
--complement    Invert selection

# ----------------- sed -----------------
-i    In-place edit (modify file)
-e    Add script (multiple -e allowed)
-n    Suppress automatic print
's/old/new/'    Substitute first per line
's/old/new/g'   Substitute all (global)
's/old/new/2'   Substitute 2nd occurrence

# ----------------- awk -----------------
-F c    Field separator (default: whitespace)
-v var=val    Set variable
-f file    Read script from file
'{print $1}'    Print first field
'{print $NF}'   Print last field

# ----------------- xargs -----------------
-0    Null-separated input (for find -print0)
-n N    Max args per command
-I {}   Replace {} with args
-P N    Run N processes in parallel
-r    Don't run if empty input
-d c    Use c as delimiter

# ----------------- mkdir -----------------
-p    Parents (create path, no error if exists)
-m mode    Set permissions (e.g. -m 755)
-v    Verbose

# ----------------- df / du -----------------
-h    Human-readable (K, M, G)
-a    All files (du)
-s    Summary only (du)
--max-depth=N    Limit depth (du)

# ----------------- ps -----------------
a    All processes
u    User-oriented format
x    Include processes without TTY
-e    All processes
-f    Full format
-ef    Common: full format, all
aux    Common: user format, all
-o fmt    Custom format (pid,comm,%cpu)

# ----------------- kill -----------------
-9    SIGKILL (force, cannot be caught)
-15    SIGTERM (default, graceful)
-2    SIGINT (like Ctrl+C)
-1    SIGHUP (reload config)
-l    List signal names

# ----------------- curl -----------------
-O    Save with remote filename
-o file    Save to file
-L    Follow redirects
-s    Silent (no progress)
-u user:pass    Authentication
-H "Header: val"    Add header
-X POST    HTTP method
-d "data"    POST data
-I    Headers only (no body)

# ----------------- wget -----------------
-O file    Save to file
-r    Recursive download
-np    No parent (don't ascend)
-l N    Limit depth to N
-q    Quiet
-c    Continue (resume)
-b    Background

# ----------------- ssh -----------------
-i file    Identity file (private key)
-p port    Port number
-v    Verbose
-o opt    Option (e.g. StrictHostKeyChecking=no)
-N    No remote command (tunneling)
-L port:host:port    Local port forward
-R port:host:port    Remote port forward

# ----------------- rsync -----------------
-a    Archive (preserve all, recursive)
-v    Verbose
-z    Compress during transfer
-h    Human-readable
-n    Dry run (show what would happen)
--delete    Delete files not in source
--exclude   Exclude pattern
-e ssh    Use ssh for transport

# ----------------- systemctl -----------------
start     Start service
stop      Stop service
restart   Restart service
status    Show status
enable    Enable at boot
disable   Disable at boot
list-units    List units
daemon-reload    Reload config

# ----------------- git -----------------
-m "msg"    Commit message
-a    Stage all modified (commit)
-b name    Create branch
-d    Delete branch
-r    Remote
-v    Verbose
-f    Force
--all    All branches
--oneline    Short log format`;

const FLAGS_FR = `# ----------------- ls -----------------
-l    Format long (permissions, propriétaire, taille, date)
-a    Afficher fichiers cachés (dotfiles)
-A    Cachés sauf . et ..
-h    Tailles lisibles (K, M, G)
-t    Trier par date de modification
-r    Ordre inverse
-R    Récursif dans sous-répertoires
-i    Afficher numéro inode
-1    Un fichier par ligne
-S    Trier par taille
-d    Lister le répertoire lui-même
--color    Coloriser (auto/always/never)

# ----------------- grep -----------------
-i    Insensible à la casse
-r    Recherche récursive
-R    Idem -r
-v    Inverser (exclure lignes correspondantes)
-n    Numéros de ligne
-E    Regex étendue (egrep)
-F    Chaîne fixe (pas de regex)
-c    Compter les correspondances
-l    Lister fichiers avec correspondances
-w    Mot entier
-A n    n lignes après
-B n    n lignes avant
-C n    n lignes avant et après

# ----------------- find -----------------
-name 'pattern'    Nom fichier (glob)
-iname 'pattern'   Nom insensible à la casse
-type f            Fichier régulier
-type d            Répertoire
-type l            Lien symbolique
-mtime -n          Modifié dans les n derniers jours
-atime -n          Accédé dans les n derniers jours
-size +10M         Plus grand que 10 Mo
-maxdepth n        Limiter profondeur
-mindepth n        Profondeur minimum
-exec cmd {} \\;    Exécuter sur chaque résultat
-delete            Supprimer trouvés
-empty             Fichiers/répertoires vides
-not               Nier le test suivant

# ----------------- cp -----------------
-r    Récursif (répertoires)
-R    Idem -r
-i    Interactif (demander avant écraser)
-v    Verbeux
-p    Préserver mode, propriétaire, dates
-f    Forcer (écraser sans demander)
-a    Archive (tout préserver)

# ----------------- mv -----------------
-i    Interactif
-v    Verbeux
-f    Forcer
-n    Ne pas écraser existant

# ----------------- rm -----------------
-r    Récursif
-R    Idem -r
-f    Forcer (pas de demande)
-i    Interactif
-v    Verbeux
-d    Supprimer répertoires vides

# ----------------- chmod -----------------
-R    Récursif
-v    Verbeux
-c    Rapport si changé
--reference=file   Copier permissions depuis fichier

# ----------------- tar -----------------
-x    Extraire
-c    Créer archive
-v    Verbeux
-f    Fichier (nom archive)
-z    Compression gzip (.tar.gz)
-j    Compression bzip2 (.tar.bz2)
-J    Compression xz (.tar.xz)
-t    Lister contenu
-C dir    Changer vers dir avant extraction
--exclude    Exclure motif
-p    Préserver permissions

# ----------------- sort -----------------
-n    Tri numérique
-r    Ordre inverse
-u    Unique (supprimer doublons)
-k n    Trier par colonne n
-t c    Séparateur de champs
-f    Insensible à la casse
-h    Nombres lisibles (K, M, G)

# ----------------- head / tail -----------------
-n N    Premières/dernières N lignes
-c N    Premiers/derniers N octets
-f    Suivre (tail seulement)
-s N    Pause N sec entre lectures

# ----------------- cut -----------------
-d c    Délimiteur (ex: -d',')
-f n    Champ(s) à extraire
-c n    Positions caractères
--complement    Inverser sélection

# ----------------- sed -----------------
-i    Édition sur place
-e    Ajouter script
-n    Supprimer affichage auto
's/old/new/'    Remplacer premier par ligne
's/old/new/g'   Remplacer tous
's/old/new/2'   Remplacer 2e occurrence

# ----------------- awk -----------------
-F c    Séparateur de champs
-v var=val    Définir variable
-f file    Lire script depuis fichier
'{print $1}'    Afficher premier champ
'{print $NF}'   Afficher dernier champ

# ----------------- xargs -----------------
-0    Entrée séparée par null (find -print0)
-n N    Max args par commande
-I {}   Remplacer {} par args
-P N    N processus en parallèle
-r    Ne pas exécuter si entrée vide
-d c    Utiliser c comme délimiteur

# ----------------- mkdir -----------------
-p    Parents (créer chemin, pas d'erreur si existe)
-m mode    Définir permissions
-v    Verbeux

# ----------------- df / du -----------------
-h    Lisible (K, M, G)
-a    Tous fichiers (du)
-s    Résumé seulement (du)
--max-depth=N    Limiter profondeur (du)

# ----------------- ps -----------------
a    Tous processus
u    Format orienté utilisateur
x    Inclure sans TTY
-e    Tous processus
-f    Format complet
-ef    Complet, tous
aux    Utilisateur, tous
-o fmt    Format personnalisé

# ----------------- kill -----------------
-9    SIGKILL (forcer, non interceptable)
-15    SIGTERM (défaut, gracieux)
-2    SIGINT (comme Ctrl+C)
-1    SIGHUP (recharger config)
-l    Lister noms signaux

# ----------------- curl -----------------
-O    Sauver avec nom distant
-o file    Sauver vers fichier
-L    Suivre redirections
-s    Silencieux
-u user:pass    Authentification
-H "Header: val"    Ajouter en-tête
-X POST    Méthode HTTP
-d "data"    Données POST
-I    En-têtes seulement

# ----------------- wget -----------------
-O file    Sauver vers fichier
-r    Téléchargement récursif
-np    Pas de parent
-l N    Limiter profondeur
-q    Silencieux
-c    Continuer (reprise)
-b    Arrière-plan

# ----------------- ssh -----------------
-i file    Fichier identité (clé privée)
-p port    Numéro de port
-v    Verbeux
-o opt    Option
-N    Pas de commande distante (tunnel)
-L port:host:port    Port forward local
-R port:host:port    Port forward distant

# ----------------- rsync -----------------
-a    Archive (tout préserver, récursif)
-v    Verbeux
-z    Compresser pendant transfert
-h    Lisible
-n    Simulation (afficher sans faire)
--delete    Supprimer absents de la source
--exclude   Exclure motif
-e ssh    Utiliser ssh

# ----------------- systemctl -----------------
start     Démarrer service
stop      Arrêter service
restart   Redémarrer service
status    Afficher statut
enable    Activer au démarrage
disable   Désactiver au démarrage
list-units    Lister unités
daemon-reload    Recharger config

# ----------------- git -----------------
-m "msg"    Message de commit
-a    Ajouter tous modifiés (commit)
-b name    Créer branche
-d    Supprimer branche
-r    Distant
-v    Verbeux
-f    Forcer
--all    Toutes branches
--oneline    Format log court`;

export const FlagsView: React.FC<FlagsViewProps> = ({ onBack, onPlayClickSound }) => {
  const { language } = useLanguage();
  const content = language === 'fr' ? FLAGS_FR : FLAGS_EN;

  return (
    <div className="relative min-h-[600px] animate-in slide-in-from-left duration-500 pb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          <i className="fas fa-flag text-yellow-300"></i>
          {language === 'fr' ? 'Référence des options' : 'Flags Reference'}
        </h2>
        <button
          onClick={() => { onPlayClickSound?.(); onBack(); }}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-colors"
        >
          {language === 'fr' ? 'Retour' : 'Back'}
        </button>
      </div>

      <div className="flags-code-block glass rounded-2xl p-6 border border-yellow-400/40 overflow-x-auto text-slate-300 [&_code]:!text-slate-300">
        <SyntaxHighlighter
          language="bash"
          style={flagsStyle}
          customStyle={{
            padding: '1rem',
            margin: 0,
            borderRadius: '0.75rem',
            background: 'transparent',
            fontSize: '0.8rem',
            lineHeight: '1.6',
            fontFamily: "'Fira Code', monospace",
            color: PUNCT
          }}
          codeTagProps={{
            style: {
              fontFamily: "'Fira Code', monospace",
              whiteSpace: 'pre',
              display: 'block'
            }
          }}
          PreTag="div"
        >
          {content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
