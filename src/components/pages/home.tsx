"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Zap, Sparkles, ShoppingBag, Star, ChevronRight, Truck, RefreshCw, ShieldCheck, Headphones,
  Gamepad2, Gift, Wallet, Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "@/lib/store";
import {
  siteInfo, categories, products, blogPosts, getFeaturedProducts, formatPrice,
} from "@/lib/data";
import { ProductCard } from "@/components/site/product-card";

export function HomePage() {
  const navigate = useRouter((s) => s.navigate);
  const deals = getFeaturedProducts("deals");
  const popular = getFeaturedProducts("popular");
  const bestsellers = getFeaturedProducts("bestseller");
  const topCategories = ["google-play", "apple", "amazon", "steam", "free-fire", "pubg"];
  const recentBlogs = blogPosts.slice(0, 6);

  // Quick-pick tiles for hero
  const quickPicks = [
    { emoji: "🔥", label: "Free Fire", desc: "Diamonds & Airdrops", category: "free-fire", gradient: "from-orange-500 to-red-500" },
    { emoji: "🎯", label: "PUBG UC", desc: "Unknown Cash top-up", category: "pubg", gradient: "from-amber-500 to-yellow-500" },
    { emoji: "▶️", label: "Google Play", desc: "Gift cards & codes", category: "google-play", gradient: "from-green-500 to-emerald-500" },
    { emoji: "🍎", label: "Apple", desc: "App Store & iTunes", category: "apple", gradient: "from-zinc-500 to-slate-500" },
    { emoji: "📦", label: "Amazon", desc: "USD/EUR/GBP cards", category: "amazon", gradient: "from-orange-600 to-amber-600" },
    { emoji: "💨", label: "Steam", desc: "Wallet gift cards", category: "steam", gradient: "from-slate-600 to-blue-600" },
  ];

  return (
    <>
      {/* NEW HERO — split layout with marquee + quick picks */}
      <section className="relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 -right-20 h-[420px] w-[420px] rounded-full bg-neon/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[420px] w-[420px] rounded-full bg-cyber/12 blur-3xl" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[280px] w-[280px] rounded-full bg-magenta/8 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-10 sm:pt-14 lg:pt-20 pb-8">
          {/* Top pill row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border/60 px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-card">
              <span className="h-2 w-2 rounded-full bg-electric animate-pulse" />
              Instant Digital Delivery
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border/60 px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-card">
              <ShieldCheck className="h-3 w-3 text-cyber" />
              100% Secure Payment
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border/60 px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-card">
              <Headphones className="h-3 w-3 text-magenta" />
              24/7 Support
            </span>
          </motion.div>

          {/* Big headline */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-bold text-foreground leading-[1.02] tracking-tight text-balance"
            >
              Top up games.{" "}
              <span className="relative inline-block">
                <span className="text-gradient-neon">Unlock gifts.</span>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-3 left-0 w-full h-4 text-cyber"
                  viewBox="0 0 300 14" fill="none" preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 10 Q 75 2, 150 8 T 298 6"
                    stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"
                  />
                </motion.svg>
              </span>
              <br />
              <span className="text-foreground">Play instantly.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto text-pretty leading-relaxed"
            >
              Bangladesh&apos;s premier destination for{" "}
              <span className="font-semibold text-foreground">gaming top-ups</span>,{" "}
              <span className="font-semibold text-foreground">gift cards</span>, and{" "}
              <span className="font-semibold text-foreground">digital services</span>. Genuine codes,
              best prices, delivered to your inbox within minutes.
            </motion.p>

            {/* Search + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search Free Fire, Google Play, Amazon..."
                  onFocus={() => navigate("shop")}
                  readOnly
                  className="w-full h-13 pl-11 pr-4 rounded-full bg-card border border-border/60 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-neon/20 cursor-pointer shadow-card"
                />
              </div>
              <Button
                size="lg"
                className="h-13 px-7 rounded-full bg-gradient-to-r from-neon to-cyber hover:opacity-90 text-white shadow-neon text-base font-medium group whitespace-nowrap"
                onClick={() => navigate("shop")}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Browse All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* Quick picks grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
          >
            {quickPicks.map((pick, i) => (
              <motion.button
                key={pick.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => navigate("shop", { category: pick.category })}
                className="group relative overflow-hidden bg-card rounded-2xl p-4 border border-border/60 shadow-card hover:shadow-neon transition-all text-center"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pick.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className={`relative mx-auto mb-2 h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-br ${pick.gradient} flex items-center justify-center text-2xl sm:text-3xl shadow-card group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  {pick.emoji}
                </div>
                <div className="relative">
                  <div className="font-semibold text-sm text-foreground">{pick.label}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{pick.desc}</div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Category strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider mr-2">Popular:</span>
            {[
              { label: "Free Fire Diamonds", cat: "free-fire" },
              { label: "PUBG UC", cat: "pubg" },
              { label: "Google Play Codes", cat: "google-play" },
              { label: "Netflix Gift Cards", cat: "netflix" },
              { label: "Razer Gold", cat: "razergold" },
              { label: "Steam Wallet", cat: "steam" },
            ].map((tag) => (
              <button
                key={tag.label}
                onClick={() => navigate("shop", { category: tag.cat })}
                className="text-xs px-3 py-1.5 rounded-full bg-card border border-border/60 text-foreground/70 hover:text-cyber hover:border-cyber/40 transition-colors"
              >
                {tag.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Marquee strip */}
        <div className="relative overflow-hidden border-y border-border/60 bg-gradient-to-r from-neon/5 via-cyber/5 to-magenta/5 py-3">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex gap-8 items-center">
                {[
                  { icon: Gamepad2, text: "Free Fire Diamond Top-Up" },
                  { icon: Gift, text: "Google Play Gift Cards" },
                  { icon: Wallet, text: "bKash • Nagad • Rocket" },
                  { icon: Zap, text: "Instant Email Delivery" },
                  { icon: ShieldCheck, text: "100% Genuine Codes" },
                  { icon: Gamepad2, text: "PUBG Mobile UC" },
                  { icon: Gift, text: "Amazon & Apple Cards" },
                  { icon: Headphones, text: "24/7 Customer Support" },
                ].map((item, i) => (
                  <div key={`${dup}-${i}`} className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                    <item.icon className="h-4 w-4 text-cyber" />
                    <span>{item.text}</span>
                    <span className="text-neon ml-4">•</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="relative z-10 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: Truck, title: "Fast Delivery", desc: "For our all orders", color: "text-neon", bg: "bg-neon/10" },
              { icon: RefreshCw, title: "Instant Returns", desc: "If codes have problems", color: "text-cyber", bg: "bg-cyber/10" },
              { icon: ShieldCheck, title: "Secure Payment", desc: "100% secure payment", color: "text-magenta", bg: "bg-magenta/10" },
              { icon: Headphones, title: "24/7 Support", desc: "Dedicated support", color: "text-foreground", bg: "bg-foreground/10" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-card rounded-2xl p-4 sm:p-6 shadow-card border border-border/60 hover:shadow-neon hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
              >
                <div className={`inline-flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-sm sm:text-base font-semibold text-foreground leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed truncate">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEALS OF THE DAY */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-magenta" fill="currentColor" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-magenta">Hurry UP</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Deals Of The Day
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate("shop")}
              className="rounded-full border-border hover:bg-secondary text-sm font-medium group hidden sm:inline-flex"
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {deals.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TOP CATEGORIES */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-card/40 to-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyber mb-3">
              Browse Categories
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Top Categories Of The Month
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {topCategories.map((catId, i) => {
              const cat = categories.find((c) => c.id === catId);
              if (!cat) return null;
              return (
                <motion.button
                  key={catId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => navigate("shop", { category: catId })}
                  className="group relative overflow-hidden bg-card rounded-2xl border border-border/60 hover:border-neon/40 p-5 transition-all hover:-translate-y-1 hover:shadow-neon text-center"
                >
                  <div className={`absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br ${cat.color} opacity-50 group-hover:scale-150 transition-transform duration-500`} />
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                      {cat.emoji}
                    </div>
                    <h3 className="font-display text-sm sm:text-base font-semibold text-foreground">
                      {cat.name}
                    </h3>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* POPULAR GIFT CARDS */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyber mb-3">
                Trending Now
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Popular Gift Cards
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate("shop")}
              className="rounded-full border-border hover:bg-secondary text-sm font-medium group hidden sm:inline-flex"
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-5 gap-3">
            {popular.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
            {popular.length < 4 && bestsellers.slice(0, 4 - popular.length).map((product, i) => (
              <ProductCard key={product.id} product={product} index={popular.length + i} />
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLER GAMING TOP-UP */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-card/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-cyber opacity-30" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-neon" fill="currentColor" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Top-Up</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Best Seller Gaming Top-Up
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate("shop")}
              className="rounded-full border-border hover:bg-secondary text-sm font-medium group hidden sm:inline-flex"
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-5 gap-3">
            {bestsellers.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyber mb-3">
                Read Our Blogs
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                You&apos;re Gonna Love It
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate("blog")}
              className="rounded-full border-border hover:bg-secondary text-sm font-medium group hidden sm:inline-flex"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {recentBlogs.map((post, i) => (
              <motion.button
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => navigate("blog-single", { blogId: post.id })}
                className="group bg-card rounded-2xl overflow-hidden border border-border/60 shadow-card hover:shadow-neon transition-all hover:-translate-y-1 flex flex-col text-left"
              >
                <div className={`relative h-44 bg-gradient-to-br ${post.gradient} flex items-center justify-center overflow-hidden`}>
                  <span className="text-6xl drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    {post.emoji}
                  </span>
                  <Badge className="absolute top-3 left-3 bg-card/90 text-foreground border-0 text-[10px] font-semibold">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-xs text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="font-display text-base font-semibold text-foreground leading-tight line-clamp-2 group-hover:text-cyber transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 text-sm font-medium text-cyber inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <NewsletterSection />
    </>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neon via-magenta to-cyber p-8 sm:p-12 lg:p-16 shadow-neon"
        >
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-8 right-8 text-7xl opacity-20 select-none">🎮</div>
          <div className="absolute bottom-8 left-8 text-5xl opacity-15 select-none">⚡</div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-medium text-white mb-5">
                <Sparkles className="h-4 w-4" />
                <span>Exclusive deals & instant alerts</span>
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight text-balance">
                Join the BD71SHOP community
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/90 max-w-lg text-pretty">
                Subscribe to get notified about flash deals, new arrivals, and gaming top-up discounts.
              </p>
            </div>

            <div className="lg:justify-end">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/95 backdrop-blur rounded-2xl p-6 text-center max-w-md mx-auto lg:ml-auto"
                >
                  <div className="h-14 w-14 rounded-full bg-cyber/15 text-cyber flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-7 w-7" fill="currentColor" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    Subscribed! 🎉
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Thanks for joining! Watch your inbox for exclusive deals.
                  </p>
                </motion.div>
              ) : (
                <form
                  className="flex flex-col sm:flex-row gap-3 lg:justify-end"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="h-13 px-5 rounded-full bg-white/95 backdrop-blur text-foreground placeholder:text-muted-foreground border-0 outline-none focus:ring-4 focus:ring-white/30 min-w-0 sm:min-w-[280px] lg:min-w-[300px] text-sm font-medium"
                    aria-label="Email address"
                  />
                  <Button
                    type="submit"
                    className="h-13 px-7 rounded-full bg-foreground hover:bg-foreground/90 text-background text-sm font-semibold whitespace-nowrap"
                  >
                    Subscribe Now
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
