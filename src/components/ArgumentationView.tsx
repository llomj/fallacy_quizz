import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LEVELS } from '../constants';

interface ArgumentationViewProps {
  onBack: () => void;
}

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="mb-10">
    <h3 className="text-lg font-bold text-yellow-300 mb-3 pb-2 border-b border-yellow-400/40">
      {title}
    </h3>
    <div className="text-slate-300 text-sm leading-relaxed space-y-2">{children}</div>
  </div>
);

const Step: React.FC<{ n: number; children: React.ReactNode }> = ({ n, children }) => (
  <p>
    <span className="text-amber-400 font-semibold">Step {n}:</span>{' '}
    <span className="text-slate-300">{children}</span>
  </p>
);

const foundationsColor = LEVELS.find(l => l.level === 0)?.color ?? '#94a3b8';
const informalColor = LEVELS.find(l => l.level === 1)?.color ?? '#10b981';
const formalColor = LEVELS.find(l => l.level === 5)?.color ?? '#10b981';
const syllogismColor = LEVELS.find(l => l.level === 6)?.color ?? '#f59e0b';

const Pill: React.FC<{ label: string; color: string }> = ({ label, color }) => (
  <span
    className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-[0.18em] border mr-2 mb-2"
    style={{
      color,
      borderColor: `${color}66`,
      backgroundColor: `${color}1a`,
    }}
  >
    {label}
  </span>
);

export const ArgumentationView: React.FC<ArgumentationViewProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  return (
    <div className="relative min-h-[600px] animate-in slide-in-from-left duration-500 pb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          <i className="fas fa-scale-balanced text-yellow-300"></i>
          {isFr ? 'Règles logiques & argumentation' : 'Logical Rules & Argumentation'}
        </h2>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-colors"
        >
          {isFr ? 'Retour' : 'Back'}
        </button>
      </div>

      <div className="glass rounded-2xl p-6 border border-white/5 overflow-x-auto max-h-[70vh] overflow-y-auto">
        <p className="text-slate-400 text-sm mb-6">
          {isFr
            ? "Ce guide de référence couvre la structure des arguments, la validité et la solidité, les règles d’inférence valides et les erreurs de forme, les syllogismes catégoriques, les types de raisonnement (déductif, inductif, abductif), le contexte (charge de la preuve, pertinence, rhétorique), les règles dialectiques (charité, pas de cercle), la preuve et la causalité, la logique formelle et le langage (ambiguïté, définitions, prémisses implicites). Utilisez-le pour évaluer un argument de façon rigoureuse."
            : 'This reference guide covers argument structure, validity and soundness, valid inference rules and form errors, categorical syllogisms, types of reasoning (deductive, inductive, abductive), context (burden of proof, relevance, rhetoric), dialectical rules (charity, no circularity), evidence and causality, formal logic and language (ambiguity, definitions, implicit premises). Use it to evaluate arguments rigorously.'}
        </p>

        <Section
          title={
            isFr
              ? '1. STRUCTURE & FORME : PRÉMISSES, CONCLUSION, VALIDITÉ, SOLIDITÉ'
              : '1. STRUCTURE & FORM: PREMISES, CONCLUSION, VALIDITY, SOUNDNESS'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'FONDEMENT' : 'FOUNDATION'} color={foundationsColor} />
          </div>
          <Step n={1}>
            {isFr
              ? "Un argument a une structure : une ou plusieurs prémisses (affirmations offertes comme raisons) et une conclusion (ce que l’on prétend établir). Identifier clairement prémisses et conclusion est la première étape."
              : 'An argument has structure: one or more premises (claims offered as reasons) and a conclusion (what is claimed to follow). Clearly identifying premises and conclusion is the first step.'}
          </Step>
          <Step n={2}>
            {isFr
              ? "Valide : si les prémisses étaient vraies, la conclusion ne pourrait pas être fausse (la forme garantit cela). Solide : argument valide dont toutes les prémisses sont en fait vraies. Un argument peut être valide mais non solide (fausse prémisse)."
              : 'Valid: if the premises were true, the conclusion could not be false (the form guarantees it). Sound: valid argument whose premises are all actually true. An argument can be valid but unsound (false premise).'}
          </Step>
          <Step n={3}>
            {isFr
              ? "Cohérence : un argument ne doit pas se contredire. Les prémisses ne doivent pas être incompatibles entre elles ni avec la conclusion (sauf dans un raisonnement par l’absurde, où l’on assume provisoirement pour en dériver une contradiction)."
              : 'Consistency: an argument must not contradict itself. Premises must not be incompatible with each other or with the conclusion (except in reductio ad absurdum, where one temporarily assumes to derive a contradiction).'}
          </Step>
        </Section>

        <Section
          title={
            isFr
              ? '2. RÈGLES D’INFÉRENCE VALIDES (CONDITIONNEL & DISJONCTIF)'
              : '2. VALID INFERENCE RULES (CONDITIONAL & DISJUNCTIVE)'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'FORMEL' : 'FORMAL'} color={formalColor} />
          </div>
          <Step n={1}>
            {isFr
              ? "Modus ponens (valide) : Si P alors Q ; P ; donc Q. Exemple : « S’il pleut, la rue est mouillée ; il pleut ; donc la rue est mouillée. »"
              : 'Modus ponens (valid): If P then Q; P; therefore Q. Example: “If it rains, the street is wet; it rains; so the street is wet.”'}
          </Step>
          <Step n={2}>
            {isFr
              ? "Modus tollens (valide) : Si P alors Q ; non Q ; donc non P. Exemple : « S’il pleut, la rue est mouillée ; la rue n’est pas mouillée ; donc il ne pleut pas. »"
              : 'Modus tollens (valid): If P then Q; not Q; therefore not P. Example: “If it rains, the street is wet; the street is not wet; so it is not raining.”'}
          </Step>
          <Step n={3}>
            {isFr
              ? "Syllogisme hypothétique (valide) : Si P alors Q ; si Q alors R ; donc si P alors R. Enchaînement de conditionnels."
              : 'Hypothetical syllogism (valid): If P then Q; if Q then R; therefore if P then R. Chain of conditionals.'}
          </Step>
          <Step n={4}>
            {isFr
              ? "Syllogisme disjonctif (valide) : P ou Q ; non P ; donc Q. (Ou : non Q ; donc P.) On exclut une disjonction pour conclure l’autre."
              : 'Disjunctive syllogism (valid): P or Q; not P; therefore Q. (Or: not Q; therefore P.) One disjunct is denied to conclude the other.'}
          </Step>
          <Step n={5}>
            {isFr
              ? "Dilemme constructif (valide) : Si P alors R ; si Q alors R ; P ou Q ; donc R. Les deux branches mènent au même résultat."
              : 'Constructive dilemma (valid): If P then R; if Q then R; P or Q; therefore R. Both branches lead to the same result.'}
          </Step>
        </Section>

        <Section
          title={
            isFr
              ? '3. ERREURS DE FORME À ÉVITER (INVALIDES)'
              : '3. FORM ERRORS TO AVOID (INVALID)'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'SOPHISME FORMEL' : 'FORMAL FALLACY'} color={formalColor} />
          </div>
          <Step n={1}>
            {isFr
              ? "Affirmation du conséquent (invalide) : Si P alors Q ; Q ; donc P. Le fait que Q soit vrai ne prouve pas P (d’autres causes peuvent donner Q). Exemple : « S’il pleut, la rue est mouillée ; la rue est mouillée ; donc il pleut » — faux (arrosoir, inondation…)."
              : 'Affirming the consequent (invalid): If P then Q; Q; therefore P. Q being true does not prove P (other causes could give Q). Example: “If it rains, the street is wet; the street is wet; so it rains” — false (sprinkler, flood…).'}
          </Step>
          <Step n={2}>
            {isFr
              ? "Négation de l’antécédent (invalide) : Si P alors Q ; non P ; donc non Q. Le fait que P soit faux ne prouve pas que Q est faux. Exemple : « S’il pleut, la rue est mouillée ; il ne pleut pas ; donc la rue n’est pas mouillée » — la rue peut être mouillée pour une autre raison."
              : 'Denying the antecedent (invalid): If P then Q; not P; therefore not Q. P being false does not prove Q is false. Example: “If it rains, the street is wet; it does not rain; so the street is not wet” — the street can be wet for another reason.'}
          </Step>
          <Step n={3}>
            {isFr
              ? "Terme moyen non distribué (syllogisme catégorique) : le terme du milieu qui relie les deux prémisses doit être « distribué » (prendre toute son extension) dans au moins une prémisse. Sinon, on ne peut pas lier valide­ment les deux extrêmes."
              : 'Undistributed middle (categorical syllogism): the middle term linking the two premises must be “distributed” (take its full scope) in at least one premise. Otherwise the two end terms cannot be validly connected.'}
          </Step>
          <Step n={4}>
            {isFr
              ? "Quatre termes : un syllogisme catégorique valide n’a que trois termes. Si un mot change de sens entre les prémisses (équivoque), on a en fait quatre termes et le raisonnement est invalide."
              : 'Four terms: a valid categorical syllogism has only three terms. If a word shifts meaning between premises (equivocation), you effectively have four terms and the reasoning is invalid.'}
          </Step>
        </Section>

        <Section
          title={
            isFr
              ? '4. SYLLOGISMES CATÉGORIQUES : RÈGLES & FORMES'
              : '4. CATEGORICAL SYLLOGISMS: RULES & FORMS'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'SYLLOGISME' : 'SYLLOGISM'} color={syllogismColor} />
          </div>
          <Step n={1}>
            {isFr
              ? "Formes standard : Tout A est B ; Tout B est C ; donc Tout A est C (Barbara). Aucun A n’est B ; Tout C est A ; donc Aucun C n’est B (Celarent). Les formes valides respectent les règles de distribution et de qualité (affirmatif/négatif)."
              : 'Standard forms: All A are B; All B are C; therefore All A are C (Barbara). No A are B; All C are A; therefore No C are B (Celarent). Valid forms obey distribution and quality (affirmative/negative) rules.'}
          </Step>
          <Step n={2}>
            {isFr
              ? "Règle de distribution : tout terme qui est « distribué » dans la conclusion (sujet d’une universelle, prédicat d’une négative) doit être distribué dans la prémisse où il apparaît. Sinon : sophisme du terme majeur (ou mineur) illicite."
              : 'Distribution rule: any term distributed in the conclusion (subject of a universal, predicate of a negative) must be distributed in the premise where it appears. Otherwise: illicit major or illicit minor fallacy.'}
          </Step>
          <Step n={3}>
            {isFr
              ? "Règles de qualité : (1) Si une prémisse est négative, la conclusion doit être négative. (2) Deux prémisses négatives ne permettent aucune conclusion (exclusive premises). (3) Deux prémisses affirmatives ne donnent pas une conclusion négative."
              : 'Quality rules: (1) If a premise is negative, the conclusion must be negative. (2) Two negative premises yield no conclusion (exclusive premises). (3) Two affirmative premises do not yield a negative conclusion.'}
          </Step>
        </Section>

        <Section
          title={
            isFr
              ? '5. TYPES DE RAISONNEMENT : DÉDUCTIF, INDUCTIF, ABDUCTIF'
              : '5. TYPES OF REASONING: DEDUCTIVE, INDUCTIVE, ABDUCTIVE'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'DÉDUCTIF' : 'DEDUCTIVE'} color={formalColor} />
            <Pill label={isFr ? 'INDUCTIF' : 'INDUCTIVE'} color={informalColor} />
          </div>
          <Step n={1}>
            {isFr
              ? "Déduction : la conclusion suit nécessairement des prémisses. Si les prémisses sont vraies, la conclusion ne peut pas être fausse. Force : garantie logique (valide + prémisses vraies = conclusion vraie)."
              : 'Deduction: the conclusion follows necessarily from the premises. If premises are true, the conclusion cannot be false. Strength: logical guarantee (valid + true premises = true conclusion).'}
          </Step>
          <Step n={2}>
            {isFr
              ? "Induction : généralisation à partir d’échantillons, analogies, causalité ou signes. La conclusion est probable ou bien étayée, pas certaine. Plus l’échantillon est grand et représentatif, plus l’inférence est forte."
              : 'Induction: generalising from samples, analogies, causation, or signs. The conclusion is probable or well-supported, not certain. Larger, more representative samples strengthen the inference.'}
          </Step>
          <Step n={3}>
            {isFr
              ? "Abduction : inférence vers la meilleure explication. « Les faits F sont observés ; l’hypothèse H expliquerait F ; donc (provisoirement) H. » H doit être testable et plus plausible que les alternatives."
              : 'Abduction: inference to the best explanation. “Facts F are observed; hypothesis H would explain F; therefore (provisionally) H.” H should be testable and more plausible than alternatives.'}
          </Step>
          <Step n={4}>
            {isFr
              ? "Cogence (induction) : un argument inductif est cogent quand il est fort (les prémisses rendent la conclusion probable) et que les prémisses sont vraies. Cogent ≈ solide pour l’induction."
              : 'Cogency (induction): an inductive argument is cogent when it is strong (premises make the conclusion probable) and the premises are true. Cogent ≈ sound for induction.'}
          </Step>
        </Section>

        <Section
          title={
            isFr
              ? '6. CONTEXTE : CHARGE DE LA PREUVE, PERTINENCE, RHÉTORIQUE'
              : '6. CONTEXT: BURDEN OF PROOF, RELEVANCE, RHETORIC'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'INFORMEL' : 'INFORMAL'} color={informalColor} />
          </div>
          <Step n={1}>
            {isFr
              ? "Charge de la preuve : celui qui affirme une thèse positive a la charge d’apporter des raisons. On ne peut pas exiger de l’autre qu’il prouve une négative (« prouve que ça n’existe pas ») sans raison. Déplacer la charge sans justification est une faute."
              : 'Burden of proof: the one who asserts a positive claim has the burden to give reasons. One cannot demand that the other prove a negative (“prove it doesn’t exist”) without justification. Shifting the burden unfairly is a fault.'}
          </Step>
          <Step n={2}>
            {isFr
              ? "Pertinence : chaque prémisse doit être liée à la conclusion (sujet, critère, cause ou signe pertinent). Détour (red herring), appel à l’émotion non lié, ou prémisses décoratives n’étayent pas l’argument."
              : 'Relevance: each premise must be connected to the conclusion (relevant subject, criterion, cause, or sign). Red herrings, unrelated emotional appeal, or decorative premises do not support the argument.'}
          </Step>
          <Step n={3}>
            {isFr
              ? "Rhétorique vs logique : ethos (crédibilité), pathos (émotion), logos (raison) peuvent persuader sans garantir la validité ou la solidité. Toujours évaluer la structure logique et la vérité des prémisses en plus de l’effet persuasif."
              : 'Rhetoric vs logic: ethos (credibility), pathos (emotion), logos (reason) can persuade without guaranteeing validity or soundness. Always evaluate logical structure and truth of premises in addition to persuasive effect.'}
          </Step>
        </Section>

        <Section
          title={
            isFr
              ? '7. RÈGLES DIALECTIQUES : CHARITÉ, RÉPONSE À LA THÈSE, PAS DE CERCLE'
              : '7. DIALECTICAL RULES: CHARITY, RESPOND TO THE CLAIM, NO CIRCLE'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'INFORMEL' : 'INFORMAL'} color={informalColor} />
          </div>
          <Step n={1}>
            {isFr
              ? "Principe de charité : interpréter la position adverse dans sa version la plus forte et la plus plausible avant de la critiquer. Éviter l’homme de paille (représentation affaiblie)."
              : 'Principle of charity: interpret the opposing position in its strongest, most plausible form before criticising it. Avoid the straw man (weakened representation).'}
          </Step>
          <Step n={2}>
            {isFr
              ? "Répondre à la thèse réelle : la critique doit porter sur l’argument effectivement avancé, pas sur la personne (ad hominem), pas sur un détail secondaire, pas sur un autre sujet."
              : 'Respond to the actual claim: criticism must target the argument actually made, not the person (ad hominem), not a side issue, not another topic.'}
          </Step>
          <Step n={3}>
            {isFr
              ? "Pas de raisonnement circulaire : la conclusion ne doit pas être déjà supposée (ou équivalente) dans les prémisses. « La Bible est vraie car elle dit qu’elle est vraie » est circulaire."
              : 'No circular reasoning: the conclusion must not already be assumed (or equivalent) in the premises. “The Bible is true because it says it is true” is circular.'}
          </Step>
          <Step n={4}>
            {isFr
              ? "Pas de pétition de principe : ne pas supposer dans les prémisses ce que l’on prétend prouver. La preuve doit être indépendante de la conclusion."
              : 'No begging the question: do not assume in the premises what you claim to prove. The evidence must be independent of the conclusion.'}
          </Step>
        </Section>

        <Section
          title={
            isFr
              ? '8. PREUVE, PROBABILITÉ & CAUSALITÉ'
              : '8. EVIDENCE, PROBABILITY & CAUSALITY'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'INDUCTIF' : 'INDUCTIVE'} color={informalColor} />
          </div>
          <Step n={1}>
            {isFr
              ? "Condition suffisante vs nécessaire : « P suffit pour Q » (si P alors Q) ≠ « P est nécessaire pour Q » (seulement si P alors Q). Confondre les deux mène à des erreurs (ex. nier l’antécédent)."
              : 'Sufficient vs necessary condition: “P is sufficient for Q” (if P then Q) ≠ “P is necessary for Q” (only if P then Q). Confusing them leads to errors (e.g. denying the antecedent).'}
          </Step>
          <Step n={2}>
            {isFr
              ? "Corrélation ≠ causalité : deux faits qui vont ensemble (A et B) n’impliquent pas que A cause B. Post hoc (après donc à cause de) et cum hoc (ensemble donc cause) sont des sophismes courants."
              : 'Correlation ≠ causation: two things going together (A and B) do not imply A causes B. Post hoc (after therefore because of) and cum hoc (together therefore cause) are common fallacies.'}
          </Step>
          <Step n={3}>
            {isFr
              ? "Fréquence de base : pour évaluer une probabilité, tenir compte des taux de base (prévalence). Ignorer la fréquence de base (base rate neglect) fausse les conclusions inductives."
              : 'Base rate: when assessing probability, take base rates (prevalence) into account. Ignoring the base rate (base rate neglect) distorts inductive conclusions.'}
          </Step>
          <Step n={4}>
            {isFr
              ? "Force inductive : échantillon représentatif, taille suffisante, pas de biais de sélection. Une généralisation à partir de cas trop rares ou non représentatifs est faible (généralisation hâtive)."
              : 'Inductive strength: representative sample, sufficient size, no selection bias. Generalising from too few or unrepresentative cases is weak (hasty generalization).'}
          </Step>
        </Section>

        <Section
          title={
            isFr
              ? '9. RÉFÉRENCE FORMELLE : PROPOSITIONNEL, QUANTIFICATEURS'
              : '9. FORMAL REFERENCE: PROPOSITIONAL, QUANTIFIERS'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'LOGIQUE' : 'LOGIC'} color={formalColor} />
          </div>
          <Step n={1}>
            {isFr
              ? "Logique propositionnelle : connecteurs ET (∧), OU (∨), NON (¬), SI…ALORS (→). Les formes valides (modus ponens, modus tollens, etc.) restent valides quels que soient les contenus substitués."
              : 'Propositional logic: connectives AND (∧), OR (∨), NOT (¬), IF…THEN (→). Valid forms (modus ponens, modus tollens, etc.) remain valid regardless of substituted content.'}
          </Step>
          <Step n={2}>
            {isFr
              ? "Quantificateurs : universel (tous, aucun), particulier (quelques, il existe). Erreurs de portée (portée du « non », ordre des quantificateurs) et de distribution (termes non distribués dans un syllogisme) mènent aux sophismes formels."
              : 'Quantifiers: universal (all, no), particular (some, there exists). Scope errors (scope of “not”, order of quantifiers) and distribution errors (undistributed terms in a syllogism) lead to formal fallacies.'}
          </Step>
          <Step n={3}>
            {isFr
              ? "Import existentiel : dans la logique classique des syllogismes, « Tous A sont B » peut être lu comme impliquant qu’il existe des A. Les conversions (Tous A sont B ⟹ Quelques B sont A) exigent de prêter attention à l’existence."
              : 'Existential import: in classical syllogistic logic, “All A are B” may be read as implying that some A exist. Conversions (All A are B ⟹ Some B are A) require care about existence.'}
          </Step>
        </Section>

        <Section
          title={
            isFr
              ? '10. LANGAGE & CONTENU : AMBIGUÏTÉ, DÉFINITIONS, PRÉMISSES IMPLICITES'
              : '10. LANGUAGE & CONTENT: AMBIGUITY, DEFINITIONS, IMPLICIT PREMISES'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'CONTENU' : 'CONTENT'} color={informalColor} />
          </div>
          <Step n={1}>
            {isFr
              ? "Ambiguïté : lexicale (un mot, deux sens dans le même argument) ou structurelle (grammaire ambiguë). L’équivoque et l’amphibologie exploitent ces flous pour faire paraître un raisonnement valide alors qu’il change de sens."
              : 'Ambiguity: lexical (one word, two senses in the same argument) or structural (ambiguous grammar). Equivocation and amphiboly exploit such vagueness to make reasoning look valid while shifting meaning.'}
          </Step>
          <Step n={2}>
            {isFr
              ? "Définitions : stipulative (on fixe le sens), lexicale (usage courant), persuasive (chargée de valeur). Une définition persuasive peut biaiser l’argument ; une stipulation doit être utilisée de façon cohérente."
              : 'Definitions: stipulative (we fix the meaning), lexical (common usage), persuasive (value-laden). A persuasive definition can bias the argument; a stipulation must be used consistently.'}
          </Step>
          <Step n={3}>
            {isFr
              ? "Prémisses implicites (enthymèmes) : l’argument omettant une prémisse. Pour évaluer, reconstruire la prémisse manquante la plus charitable puis vérifier validité et vérité. Une prémisse implicite fausse invalide la conclusion."
              : 'Implicit premises (enthymemes): the argument omits a premise. To evaluate, reconstruct the most charitable missing premise, then check validity and truth. A false implicit premise undermines the conclusion.'}
          </Step>
        </Section>

        <Section
          title={
            isFr
              ? '11. RÈGLES DE BONNE PRATIQUE : RÉSUMÉ'
              : '11. RULES OF GOOD PRACTICE: SUMMARY'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'SYNTHÈSE' : 'SYNTHESIS'} color={foundationsColor} />
          </div>
          <Step n={1}>
            {isFr
              ? "Identifier prémisses et conclusion ; vérifier la forme (valide ?) et la vérité des prémisses (solide / cogent ?)."
              : 'Identify premises and conclusion; check form (valid?) and truth of premises (sound / cogent?).'}
          </Step>
          <Step n={2}>
            {isFr
              ? "Éviter les formes invalides (affirmation du conséquent, négation de l’antécédent, terme moyen non distribué, quatre termes)."
              : 'Avoid invalid forms (affirming the consequent, denying the antecedent, undistributed middle, four terms).'}
          </Step>
          <Step n={3}>
            {isFr
              ? "Exiger pertinence, pas de cercle, pas de pétition de principe ; appliquer la charité et répondre à la thèse réelle."
              : 'Require relevance, no circularity, no begging the question; apply charity and respond to the actual claim.'}
          </Step>
          <Step n={4}>
            {isFr
              ? "En induction : tenir compte de la taille et de la représentativité de l’échantillon, de la fréquence de base et de la différence entre corrélation et causalité."
              : 'In induction: consider sample size and representativeness, base rate, and the difference between correlation and causation.'}
          </Step>
        </Section>
      </div>
    </div>
  );
};
