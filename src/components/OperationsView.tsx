import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';
import { useTranslatedOperations, OperationItem } from '../hooks/useTranslatedData';

const OPERATIONS_DATA: OperationItem[] = [
  {
    title: "Shell Arithmetic with $(( ))",
    category: "Shell Operators",
    definition: "Use arithmetic expansion to do integer math directly in the shell without calling an external program.",
    examples: [
      "echo $((2 + 3))        # 5",
      "echo $((10 - 4))       # 6",
      "echo $((3 * 4))        # 12",
      "echo $((15 / 2))       # 7 (integer division)",
      "echo $((15 % 4))       # 3 (remainder)",
      "i=0; i=$((i+1))        # increment i by 1"
    ]
  },
  {
    title: "Comparison in Test [ ]",
    category: "Shell Operators",
    definition: "Use test brackets with comparison operators like -eq, -ne, -lt, -gt, -le, -ge to compare integers.",
    examples: [
      "[ 5 -eq 5 ] && echo \"equal\"",
      "[ 3 -lt 5 ] && echo \"3 is less\"",
      "[ 10 -ge 7 ] && echo \"10 >= 7\"",
      "if [ \"$COUNT\" -ne 0 ]; then echo \"not zero\"; fi",
      "if [ \"$A\" -gt \"$B\" ]; then echo \"A>B\"; fi"
    ]
  },
  {
    title: "String Tests in [ ]",
    category: "Shell Operators",
    definition: "Use -z, -n, = and != to check if strings are empty, non-empty, or equal inside test brackets.",
    examples: [
      "[ -z \"$NAME\" ] && echo \"NAME is empty\"",
      "[ -n \"$NAME\" ] && echo \"NAME is set\"",
      "[ \"$USER\" = \"root\" ] && echo \"running as root\"",
      "[ \"$EXT\" != \"txt\" ] && echo \"not a .txt file\""
    ]
  },
  {
    title: "File Test Operators",
    category: "Shell Operators",
    definition: "Use file test flags like -f, -d, -e, -x, -r, -w in [ ] to inspect files and directories.",
    examples: [
      "[ -f config.sh ] && echo \"regular file\"",
      "[ -d /etc ] && echo \"/etc is a directory\"",
      "[ -e /usr/bin/ls ] && echo \"ls exists\"",
      "[ -x script.sh ] && echo \"script is executable\"",
      "if [ ! -r secret.txt ]; then echo \"no read access\"; fi"
    ]
  },
  {
    title: "Logical Operators && and ||",
    category: "Shell Operators",
    definition: "Combine commands with && and || to run the next command only on success or failure of the previous one.",
    examples: [
      "make build && echo \"build ok\"",
      "ping -c1 example.com || echo \"host unreachable\"",
      "[ -f file ] && rm file || echo \"file missing\"",
      "mkdir logs && cd logs",
      "command_that_may_fail || exit 1"
    ]
  },
  {
    title: "Exit Status and $?",
    category: "Shell Operators",
    definition: "Every command returns an integer exit status; 0 means success and non-zero means failure. The special variable $? holds the last status.",
    examples: [
      "ls existing_file",
      "echo \"$?\"    # prints 0 on success",
      "ls does_not_exist",
      "echo \"$?\"    # non‑zero on error",
      "if ls /root 2>/dev/null; then echo \"ok\"; else echo \"failed\"; fi"
    ]
  },
  {
    title: "Assigning and Using Variables",
    category: "Shell Operators",
    definition: "Assign values without spaces around = and read them later using the $ prefix and quotes.",
    examples: [
      "NAME=\"Alice\"",
      "echo \"$NAME\"",
      "COUNT=3",
      "echo \"You have $COUNT items\"",
      "PATH=\"/custom/bin:$PATH\"   # prepend to PATH"
    ]
  },
  {
    title: "Test Command and [[ ]]",
    category: "Shell Operators",
    definition: "The [ command and the more modern [[ ]] syntax evaluate conditions in if statements and shells like bash or zsh.",
    examples: [
      "if [ \"$1\" = \"start\" ]; then echo \"starting\"; fi",
      "if [[ \"$FILE\" == *.log ]]; then echo \"log file\"; fi",
      "if [[ -n \"$USER\" && \"$USER\" != \"root\" ]]; then echo \"non‑root\"; fi"
    ]
  },
  {
    title: "Arithmetic in Loops",
    category: "Shell Operators",
    definition: "Use arithmetic expansion or let to update counters inside for and while loops.",
    examples: [
      "i=0; while [ \"$i\" -lt 5 ]; do echo \"$i\"; i=$((i+1)); done",
      "for i in 1 2 3; do COUNT=$((COUNT+1)); done",
      "let \"N=N+2\"   # bash built‑in arithmetic"
    ]
  },
  {
    title: "Command Grouping and Subshells",
    category: "Shell Operators",
    definition: "Use parentheses ( ) for subshells and { } for grouping commands that share redirection.",
    examples: [
      "(cd /tmp && ls)      # cd only inside subshell",
      "{ echo \"start\"; date; } > run.log",
      "(echo one; echo two) | sort"
    ]
  }
];

const MATH_CONCEPTS_DATA: OperationItem[] = [
  {
    title: "Integers and Exit Codes",
    category: "Shell Math",
    definition: "Shell arithmetic and exit codes are always integers; 0 usually means success and non-zero means an error or special condition.",
    examples: [
      "echo $((1 + 2))        # 3",
      "false; echo \"$?\"      # 1 (failure)",
      "true;  echo \"$?\"      # 0 (success)",
      "if [ \"$?\" -ne 0 ]; then echo \"last command failed\"; fi"
    ]
  },
  {
    title: "Zero and Division Errors",
    category: "Shell Math",
    definition: "Zero behaves normally in most arithmetic, but division by zero in $(( )) or expr is an error and causes a non-zero exit code.",
    examples: [
      "echo $((5 * 0))        # 0",
      "echo $((5 + 0))        # 5",
      "set +e; expr 10 / 0    # prints error, sets non‑zero exit",
      "if ! expr 10 / 0 >/dev/null 2>&1; then echo \"division by zero\"; fi"
    ]
  },
  {
    title: "Incrementing Counters in Loops",
    category: "Shell Math",
    definition: "Use arithmetic expansion to increment or decrement loop counters in while and for loops.",
    examples: [
      "i=0; while [ \"$i\" -lt 3 ]; do echo \"$i\"; i=$((i+1)); done",
      "for ((i=10; i>0; i--)); do echo \"$i\"; done",
      "COUNT=0; for f in *.log; do COUNT=$((COUNT+1)); done"
    ]
  },
  {
    title: "Brace Expansion Ranges",
    category: "Shell Math",
    definition: "Brace expansion {start..end[..step]} generates integer sequences without writing explicit loops.",
    examples: [
      "echo {1..5}          # 1 2 3 4 5",
      "echo {0..10..2}      # 0 2 4 6 8 10",
      "for i in {3..1}; do echo \"$i\"; done"
    ]
  },
  {
    title: "Modulo for Even/Odd and Cycles",
    category: "Shell Math",
    definition: "Use the % operator in $(( )) to test even/odd numbers or wrap counters around a fixed range.",
    examples: [
      "n=4; if [ $((n % 2)) -eq 0 ]; then echo \"even\"; fi",
      "for i in {0..5}; do echo $((i % 3)); done",
      "index=$(((index+1) % 10))   # cycle 0–9"
    ]
  },
  {
    title: "Using bc for Decimals",
    category: "Shell Math",
    definition: "The bc command provides arbitrary-precision decimal arithmetic when integer-only $(( )) is not enough.",
    examples: [
      "echo \"1/3\" | bc           # 0 (integer by default)",
      "echo \"scale=2; 1/3\" | bc  # 0.33",
      "echo \"scale=3; 2.5 * 4\" | bc   # 10.000"
    ]
  },
  {
    title: "Percentages and Ratios",
    category: "Shell Math",
    definition: "Compute simple percentages and ratios in scripts using $(( )) for integers or bc when you need decimals.",
    examples: [
      "USED=30; TOTAL=50; echo $((USED * 100 / TOTAL))\"%\"   # 60%",
      "echo \"scale=1; 7/20*100\" | bc   # 35.0",
      "echo \"scale=2; $USED/$TOTAL\" | bc"
    ]
  },
  {
    title: "Random Numbers in Shell",
    category: "Shell Math",
    definition: "Many shells expose a pseudo-random integer through $RANDOM or external tools like shuf.",
    examples: [
      "echo \"$RANDOM\"           # 0–32767 in bash/zsh",
      "echo $((RANDOM % 6 + 1))  # dice roll 1–6",
      "shuf -i 1-10 -n 3         # three unique numbers 1–10"
    ]
  },
  {
    title: "Simple Aggregations with Awk",
    category: "Shell Math",
    definition: "Use awk to sum, average, and count numeric columns from command output or files.",
    examples: [
      "df -h | awk 'NR>1 {used+=$3} END {print used}'",
      "awk '{sum+=$1} END {print sum}' numbers.txt",
      "awk '{sum+=$1; n++} END {print sum/n}' numbers.txt"
    ]
  },
  {
    title: "Bounds and Validation in Scripts",
    category: "Shell Math",
    definition: "Combine comparisons and arithmetic to enforce numeric bounds on user input or configuration values.",
    examples: [
      "if [ \"$PORT\" -lt 1 ] || [ \"$PORT\" -gt 65535 ]; then echo \"invalid port\"; exit 1; fi",
      "if [ \"$PERCENT\" -ge 0 ] && [ \"$PERCENT\" -le 100 ]; then echo \"ok\"; fi",
      "LIMIT=10; [ \"$COUNT\" -gt \"$LIMIT\" ] && COUNT=$LIMIT"
    ]
  }
];

interface OperationsViewProps {
  onBack: () => void;
}

export const OperationsView: React.FC<OperationsViewProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const translatedData = useTranslatedOperations(OPERATIONS_DATA, MATH_CONCEPTS_DATA);
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<OperationItem | null>(null);
  const [activeTab, setActiveTab] = useState<'operations' | 'math'>('operations');

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  const currentData = activeTab === 'operations' ? translatedData.operations : translatedData.math;
  
  const filteredData = currentData.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.definition.toLowerCase().includes(search.toLowerCase()) ||
    item.examples.some(ex => ex.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="relative min-h-[600px] animate-in slide-in-from-left duration-500 pb-12">
      {/* Detail Overlay */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain flex justify-center items-start sm:items-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedItem(null)}
          ></div>
          
          {/* Content Box */}
          <div className="glass w-full max-w-2xl my-4 sm:my-8 rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10 border-emerald-500/30 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors border border-white/10"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 pt-2">
                <span className="inline-block text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedItem.title}</h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <i className="fas fa-book-open text-emerald-400"></i> {t('operations.definition')}
                </h4>
                <div className="text-slate-300 leading-relaxed font-medium text-sm sm:text-base">
                  {selectedItem.definition}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <i className="fas fa-code text-emerald-400"></i> {t('operations.examples')}
                </h4>
                <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-white/5 shadow-inner max-h-[400px] overflow-y-auto">
                  <div className="space-y-2">
                    {selectedItem.examples.map((example, idx) => (
                      <div key={idx} className="text-xs sm:text-sm text-emerald-300 leading-relaxed font-mono whitespace-pre-wrap break-words">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-black transition-all shadow-xl shadow-emerald-500/20 active:scale-95"
                >
                  {t('operations.gotIt')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          <i className="fas fa-calculator text-emerald-400"></i>           {t('operations.title')}
        </h2>
        <button 
          onClick={onBack}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-colors"
        >
          {t('operations.back')}
        </button>
      </div>

      {/* Tab Selector */}
      <div className="flex gap-2 mb-6 bg-white/5 p-1 rounded-2xl border border-white/10">
        <button
          onClick={() => {
            setActiveTab('operations');
            setSearch('');
            setSelectedItem(null);
          }}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'operations'
              ? 'bg-emerald-500 text-white shadow-lg'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <i className="fas fa-code mr-2"></i> {t('operations.operations')}
        </button>
        <button
          onClick={() => {
            setActiveTab('math');
            setSearch('');
            setSelectedItem(null);
          }}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'math'
              ? 'bg-emerald-500 text-white shadow-lg'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <i className="fas fa-calculator mr-2"></i> {t('operations.mathConcepts')}
        </button>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
          <i className="fas fa-search"></i>
        </div>
        <input 
          type="text"
          placeholder={formatTranslation(t('operations.searchPlaceholder'), { type: activeTab === 'operations' ? t('operations.operations').toLowerCase() : t('operations.mathConcepts').toLowerCase() })}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-white/5 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item, idx) => (
          <div 
            key={idx}
            onClick={() => setSelectedItem(item)}
            className="glass p-5 rounded-2xl space-y-2 hover:border-emerald-500/40 hover:bg-slate-800/80 transition-all cursor-pointer group active:scale-[0.98]"
          >
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-slate-100 group-hover:text-white transition-colors">{item.title}</h4>
              <i className="fas fa-chevron-right text-[10px] text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all"></i>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">{item.definition}</p>
            <span className="inline-block text-[8px] font-black text-emerald-500 uppercase px-2 py-0.5 bg-emerald-500/10 rounded">
              {item.category}
            </span>
          </div>
        ))}
        {filteredData.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500">
            <i className="fas fa-search-minus text-4xl mb-4 block opacity-20"></i>
            {formatTranslation(t('operations.noItemsFound'), { search })}
          </div>
        )}
      </div>
    </div>
  );
};