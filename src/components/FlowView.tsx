import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LEVELS } from '../constants';

interface FlowViewProps {
  onBack: () => void;
  onPlayClickSound?: () => void;
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

export const FlowView: React.FC<FlowViewProps> = ({ onBack, onPlayClickSound }) => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  return (
    <div className="relative min-h-[600px] animate-in slide-in-from-left duration-500 pb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          <i className="fas fa-diagram-project text-yellow-300"></i>
          {isFr ? 'Flux d’arguments & règles' : 'Argument Flow & Rules'}
        </h2>
        <button
          onClick={() => { onPlayClickSound?.(); onBack(); }}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-colors"
        >
          {isFr ? 'Retour' : 'Back'}
        </button>
      </div>

      <div className="glass rounded-2xl p-6 border border-white/5 overflow-x-auto max-h-[70vh] overflow-y-auto">
        <p className="text-slate-400 text-sm mb-6">
          {isFr
            ? "Les arguments suivent un flux logique : des prémisses vers une conclusion, en respectant des règles formelles et informelles. Ce guide résume les règles de base pour les prémisses, les syllogismes formels et les sophismes informels, avec les mêmes couleurs que les niveaux."
            : 'Arguments follow a logical flow: from premises to a conclusion, obeying both formal and informal rules. This guide summarizes the core rules for premises, formal syllogisms, and informal fallacies, using the same colors as the levels.'}
        </p>

        <Section
          title={
            isFr
              ? '1. STRUCTURE DE BASE : PRÉMISSES → CONCLUSION'
              : '1. BASIC STRUCTURE: PREMISES → CONCLUSION'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'RÈGLE DE PRÉMISSE' : 'PREMISE RULE'} color={foundationsColor} />
          </div>
          <Step n={1}>
            {isFr
              ? "Un argument commence par une ou plusieurs prémisses (affirmations que l’on suppose vraies) et se termine par une conclusion (ce que l’on veut faire accepter)."
              : 'An argument starts with one or more premises (claims we treat as given) and ends with a conclusion (the claim we want the listener to accept).'}
          </Step>
          <Step n={2}>
            {isFr
              ? 'Une prémisse doit être claire, précise et pertinente pour la conclusion : si elle ne parle pas vraiment du même sujet, elle ne soutient pas l’argument.'
              : 'A premise should be clear, precise, and relevant to the conclusion: if it does not really speak about the same issue, it does not support the argument.'}
          </Step>
          <Step n={3}>
            {isFr
              ? 'Le flux logique idéal : prémisses vraies + forme valide ⟶ conclusion bien soutenue.'
              : 'Ideal logical flow: true premises + valid form ⟶ well‑supported conclusion.'}
          </Step>
        </Section>

        <Section
          title={
            isFr
              ? '2. VALIDITÉ, SOLIDITÉ ET RÈGLES FORMELLES'
              : '2. VALIDITY, SOUNDNESS & FORMAL RULES'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'FORMEL' : 'FORMAL'} color={formalColor} />
            <Pill label={isFr ? 'SYLLOGISME' : 'SYLLOGISM'} color={syllogismColor} />
          </div>
          <Step n={1}>
            {isFr
              ? 'Un argument est valide si, en supposant les prémisses vraies, la conclusion ne peut pas être fausse (la forme logique interdit ce cas).'
              : 'An argument is valid if, assuming the premises are true, the conclusion cannot be false (the logical form rules out that combination).'}
          </Step>
          <Step n={2}>
            {isFr
              ? 'Un argument est solide s’il est valide ET que toutes ses prémisses sont en fait vraies.'
              : 'An argument is sound when it is valid AND all of its premises are actually true.'}
          </Step>
          <Step n={3}>
            {isFr
              ? 'Les syllogismes formels suivent des schémas standard (par ex. « Tous A sont B ; x est A ; donc x est B »). Une petite erreur de forme (affirmation du conséquent, négation de l’antécédent, terme moyen non distribué) rend l’argument invalide.'
              : 'Formal syllogisms follow standard patterns (for example, “All A are B; x is A; therefore x is B”). Small form mistakes (affirming the consequent, denying the antecedent, undistributed middle) make the argument invalid.'}
          </Step>
        </Section>

        <Section
          title={
            isFr
              ? '3. RÈGLES POUR LES SOPHISMES INFORMELS'
              : '3. RULES FOR INFORMAL FALLACIES'
          }
        >
          <div className="mb-3">
            <Pill label={isFr ? 'INFORMEL' : 'INFORMAL'} color={informalColor} />
          </div>
          <Step n={1}>
            {isFr
              ? 'Un sophisme informel ne casse pas toujours la forme logique ; il affaiblit l’argument par le contenu (attaques personnelles, détours, émotions, mauvaise autorité, etc.).'
              : 'An informal fallacy does not always break the logical form; it weakens the argument through its content (personal attacks, distractions, emotions, bad authority, etc.).'}
          </Step>
          <Step n={2}>
            {isFr
              ? 'Règle : toujours vérifier si la raison donnée soutient VRAIMENT la conclusion (pertinence) avant de juger si c’est une bonne preuve.'
              : 'Rule: always check whether the reason given really supports the conclusion (relevance) before judging how strong the evidence is.'}
          </Step>
          <Step n={3}>
            {isFr
              ? 'Les niveaux 1–4 couvrent surtout ces sophismes informels (ad hominem, homme de paille, appel à l’émotion, pente glissante, etc.) : même couleur verte que dans les niveaux.'
              : 'Levels 1–4 mostly train these informal fallacies (ad hominem, straw man, appeal to emotion, slippery slope, etc.), using the same green family you see in the level colors.'}
          </Step>
        </Section>

        <Section
          title={
            isFr ? '4. COMMENT LIRE UN FLUX D’ARGUMENT' : '4. HOW TO READ AN ARGUMENT FLOW'
          }
        >
          <Step n={1}>
            {isFr
              ? 'Isoler les propositions : noter séparément chaque prémisse et la conclusion, en repérant les marqueurs (« donc », « parce que », « alors », « ainsi », « c’est pourquoi »…).'
              : 'Isolate the statements: write out each premise and the conclusion separately, using markers like “therefore”, “because”, “so”, “thus”, “that’s why”.'}
          </Step>
          <Step n={2}>
            {isFr
              ? 'Tester la forme : demander « Si toutes ces prémisses étaient vraies, la conclusion pourrait‑elle encore être fausse ? » — si oui, problème formel ou syllogisme invalide.'
              : 'Stress‑test the form: ask “If all these premises were true, could the conclusion still be false?” — if yes, there is a formal problem or an invalid syllogism.'}
          </Step>
          <Step n={3}>
            {isFr
              ? 'Chercher les signaux de sophisme informel : attaques sur la personne plutôt que sur l’argument, simplification extrême, fausse alternative, émotion à la place de preuve, etc.'
              : 'Scan for informal fallacy signals: attacking the person instead of the claim, oversimplifying, forcing a false choice, replacing evidence with emotion, and so on.'}
          </Step>
        </Section>

        <Section
          title={
            isFr
              ? '5. MÉLANGE FORMEL / INFORMEL (RÈGLE DE SYNTHÈSE)'
              : '5. MIXED FORMAL / INFORMAL CASES'
          }
        >
          <Step n={1}>
            {isFr
              ? 'Beaucoup d’arguments réels combinent erreurs formelles ET informelles. Règle : identifier d’abord la faute dominante (celle qui explique le plus pourquoi l’argument ne convainc pas).'
              : 'Many real‑world arguments mix formal and informal mistakes. Rule: first identify the dominant fault — the one that best explains why the argument is unconvincing.'}
          </Step>
          <Step n={2}>
            {isFr
              ? 'Un même argument peut être logique formellement mais injuste ou manipulateur sur le plan informel (ou l’inverse). Les niveaux avancés entraînent cette distinction.'
              : 'An argument can be formally valid yet unfair or manipulative at the informal level (or the reverse). Advanced levels train this distinction.'}
          </Step>
          <Step n={3}>
            {isFr
              ? 'Dans les questions du quiz, la bonne réponse suit toujours ces règles de flux : structure de prémisses claire, forme identifiée (valide ou non), et diagnostic précis du type de sophisme s’il y en a un.'
              : 'In quiz questions, the correct answer always follows this flow: clear premise structure, form classified (valid or not), and a precise diagnosis of the fallacy type when there is one.'}
          </Step>
        </Section>
      </div>
    </div>
  );
};
