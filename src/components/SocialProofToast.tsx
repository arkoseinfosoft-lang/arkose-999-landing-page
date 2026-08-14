import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

interface ProofEvent {
  id: number;
  initials: string;
  name: string;
  city: string;
  action: string;
  service: string;
  timeAgo: string;
  avatarBg: string;
}

const PROOF_EVENTS: ProofEvent[] = [
  {
    id: 1,
    initials: "RS",
    name: "राहुल शर्मा",
    city: "कानपुर",
    action: "ने ₹999 स्पेशल ऑफर क्लेम किया",
    service: "Fitness & Gym Website",
    timeAgo: "2 मिनट पहले",
    avatarBg: "from-red to-gold",
  },
  {
    id: 2,
    initials: "AP",
    name: "अमित पटेल",
    city: "अहमदाबाद",
    action: "की वेबसाइट 24 घंटे में लाइव हुई",
    service: "Modular Furniture Store",
    timeAgo: "5 मिनट पहले",
    avatarBg: "from-gold-deep to-red",
  },
  {
    id: 3,
    initials: "DG",
    name: "डॉ. गुप्ता",
    city: "लखनऊ",
    action: "ने क्लिनिक वेबसाइट शुरू की",
    service: "Dental Care Clinic",
    timeAgo: "8 मिनट पहले",
    avatarBg: "from-red-deep to-gold",
  },
  {
    id: 4,
    initials: "VK",
    name: "विकास कुमार",
    city: "दिल्ली (NCR)",
    action: "ने ₹999 वेबसाइट शुरू की",
    service: "Real Estate & Properties",
    timeAgo: "12 मिनट पहले",
    avatarBg: "from-gold to-red-deep",
  },
  {
    id: 5,
    initials: "PS",
    name: "पूजा सिंह",
    city: "जयपुर",
    action: "का सैलून ऑनलाइन लाइव हुआ",
    service: "Luxury Beauty Salon",
    timeAgo: "17 मिनट पहले",
    avatarBg: "from-red to-gold-deep",
  },
  {
    id: 6,
    initials: "SM",
    name: "संजय मिश्रा",
    city: "वाराणसी",
    action: "ने ₹999 ऑफर के साथ शुरुआत की",
    service: "Tours & Travel Agency",
    timeAgo: "23 मिनट पहले",
    avatarBg: "from-gold-deep to-red",
  },
  {
    id: 7,
    initials: "NJ",
    name: "नितिन जोशी",
    city: "पुणे",
    action: "की कैफे वेबसाइट लाइव हो गई",
    service: "Luxe Cafe & Dining",
    timeAgo: "31 मिनट पहले",
    avatarBg: "from-red-deep to-gold",
  },
  {
    id: 8,
    initials: "RK",
    name: "राजेश खन्ना",
    city: "इंदौर",
    action: "ने कोचिंग वेबसाइट ऑर्डर की",
    service: "Academic Academy",
    timeAgo: "38 मिनट पहले",
    avatarBg: "from-gold to-red",
  },
  {
    id: 9,
    initials: "MS",
    name: "मोनिका स्टूडियो",
    city: "सूरत",
    action: "का फोटोग्राफी पोर्टफोलियो लाइव हुआ",
    service: "Creative Art Studio",
    timeAgo: "44 मिनट पहले",
    avatarBg: "from-red to-gold-deep",
  },
];

export default function SocialProofToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nextTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showNext = () => {
    setVisible(true);

    // Hide after 5 seconds
    hideTimerRef.current = setTimeout(() => {
      setVisible(false);

      // Schedule next notification after 10-15 seconds
      const nextDelay = 10000 + Math.random() * 5000;
      nextTimerRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PROOF_EVENTS.length);
        showNext();
      }, nextDelay);
    }, 5000);
  };

  useEffect(() => {
    // Initial delay on page load: 5 seconds
    const initialTimer = setTimeout(() => {
      showNext();
    }, 5000);

    return () => {
      clearTimeout(initialTimer);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (nextTimerRef.current) clearTimeout(nextTimerRef.current);
    };
  }, []);

  const handleManualClose = () => {
    setVisible(false);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    if (nextTimerRef.current) clearTimeout(nextTimerRef.current);

    // Snooze for 30 seconds when manually dismissed
    nextTimerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % PROOF_EVENTS.length);
      showNext();
    }, 30000);
  };

  const current = PROOF_EVENTS[currentIndex];

  return (
    <div
      className="pointer-events-none fixed bottom-[88px] left-3 z-[80] sm:bottom-5 sm:left-5"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence>
        {visible && current && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto relative flex w-[calc(100vw-24px)] max-w-[330px] items-start gap-3 rounded-xl border border-paper-line bg-card/96 p-3 shadow-[0_12px_32px_rgba(140,32,21,0.14)] backdrop-blur-md sm:max-w-[350px] sm:p-3.5"
          >
            {/* Top decorative gradient line */}
            <div className="absolute inset-x-0 top-0 h-[2.5px] rounded-t-xl bg-gradient-to-r from-red-deep via-gold to-gold-deep" />

            {/* Avatar with live pulse badge */}
            <div className="relative shrink-0 pt-0.5">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${current.avatarBg} font-serif-hi text-xs font-bold text-white shadow-xs`}
              >
                {current.initials}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-card">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              </span>
            </div>

            {/* Content Body */}
            <div className="min-w-0 flex-1 pr-4">
              <div className="text-[13px] font-bold leading-tight text-ink">
                <span>{current.name}</span>{" "}
                <span className="font-semibold text-muted">({current.city})</span>
              </div>
              <p className="mt-0.5 text-[12px] font-semibold text-red-deep leading-snug">
                {current.action}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[10.5px] text-muted">
                <span className="inline-flex items-center gap-0.5 font-bold text-emerald-700">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Verified Client</span>
                </span>
                <span aria-hidden className="opacity-60">·</span>
                <span>{current.timeAgo}</span>
              </div>
            </div>

            {/* Close (X) Button */}
            <button
              onClick={handleManualClose}
              className="absolute right-2 top-2 rounded-md p-1 text-muted/70 transition-colors hover:bg-paper-2 hover:text-ink focus:outline-hidden"
              aria-label="Close notification"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
