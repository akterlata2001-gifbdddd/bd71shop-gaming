"use client";

import { motion } from "framer-motion";
import { Home, Search, Zap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/lib/store";

export function NotFoundPage() {
  const navigate = useRouter((s) => s.navigate);

  return (
    <div className="bg-gradient-to-b from-card/30 to-background min-h-screen flex items-center justify-center bg-grid">
      <div className="mx-auto max-w-xl px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="relative inline-block mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-[140px] sm:text-[180px] leading-none"
          >
            🎮
          </motion.div>
          <div className="absolute -top-2 -right-4 h-12 w-12 rounded-full bg-gradient-to-br from-neon to-magenta flex items-center justify-center text-white font-display font-bold text-xl rotate-12 shadow-neon">
            ?
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="font-display text-6xl sm:text-7xl font-bold text-gradient-neon tracking-tight">
            404
          </h1>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-3">
            Game Over — Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto mb-8">
            Looks like this page got lost in the gaming universe. Let&apos;s get you back to safer ground!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => navigate("home")}
              className="bg-gradient-to-r from-neon to-cyber hover:opacity-90 text-white rounded-full px-7 group shadow-neon"
            >
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("shop")}
              className="rounded-full border-border hover:bg-secondary px-7"
            >
              <Search className="h-4 w-4 mr-2" />
              Browse Products
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-border/40">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Quick Links</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { label: "Shop", page: "shop" as const },
                { label: "Free Fire Top-Up", page: "shop" as const, params: { category: "free-fire" } },
                { label: "Gift Cards", page: "shop" as const, params: { category: "google-play" } },
                { label: "Blog", page: "blog" as const },
                { label: "About", page: "about" as const },
                { label: "Contact", page: "contact" as const },
                { label: "Order Tracking", page: "order-tracking" as const },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => navigate(link.page, link.params as never)}
                  className="text-sm px-4 py-2 rounded-full bg-card border border-border/60 text-muted-foreground hover:text-cyber hover:border-cyber/40 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
